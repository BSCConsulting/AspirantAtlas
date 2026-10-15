import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  QrCode, 
  Smartphone, 
  CreditCard, 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  Zap, 
  Lock, 
  Sparkles,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SubscriptionPlan, OrderRecord, recordSuccessfulOrder, printCommercialInvoice } from '../services/subscriptionService';
import { AspirantUser, upgradeUserToPro } from '../services/authService';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: SubscriptionPlan | null;
  currentUser: AspirantUser | null;
  onPaymentSuccess: (user: AspirantUser, order: OrderRecord) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  plan,
  currentUser,
  onPaymentSuccess
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'NetBanking'>('UPI');
  const [upiHandle, setUpiHandle] = useState('aspirant@oksbi');
  const [payerName, setPayerName] = useState(currentUser?.name || '');
  const [payerEmail, setPayerEmail] = useState(currentUser?.email || '');
  const [payerMobile, setPayerMobile] = useState(currentUser?.mobile || '');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderRecord | null>(null);

  if (!isOpen || !plan) return null;

  const handleSimulatePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      // 1. Record order
      const order = recordSuccessfulOrder(
        currentUser?.id || `usr_${Date.now()}`,
        payerName || 'Civil Services Aspirant',
        payerEmail || 'aspirant@domain.com',
        payerMobile || '+91 98765 00000',
        plan,
        paymentMethod
      );

      // 2. Upgrade user profile to Pro
      const updatedUser = upgradeUserToPro(
        plan.id as 'sprint' | 'topper',
        plan.durationDays,
        order.invoiceNumber
      );

      setIsProcessing(false);
      setCompletedOrder(order);

      // 3. Trigger confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }

      onPaymentSuccess(updatedUser, order);
    }, 1200);
  };

  const handleFinish = () => {
    setCompletedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col transition-all max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-amber-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white">
                {completedOrder ? 'Payment Successful' : 'Secure Indian Payment Gateway'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {completedOrder ? 'Pro Subscription Activated' : '256-bit Encrypted Checkout'}
              </p>
            </div>
          </div>

          <button
            onClick={completedOrder ? handleFinish : onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {completedOrder ? (
            /* --- PAYMENT SUCCESS VIEW --- */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Subscription Active
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-2">
                  Welcome to AspirantAtlas PRO!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1">
                  You now have complete access to the 210+ question vault, unlimited AI Mains handwriting evaluations, and master cheat sheets.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Plan Enrolled:</span>
                  <span className="font-bold text-slate-800">{completedOrder.planName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-extrabold text-slate-900">₹{completedOrder.amountInInr} (GST Included)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Invoice Number:</span>
                  <span className="font-mono text-indigo-700 font-bold">{completedOrder.invoiceNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Validity:</span>
                  <span className="font-medium text-slate-700">1 Full Year (Until Oct 2027)</span>
                </div>
              </div>

              {/* Download Invoice & Finish CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => printCommercialInvoice(completedOrder)}
                  className="w-full sm:w-auto flex-1 btn-tactile py-2.5 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center space-x-2 shadow-2xs"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  <span>Download Tax Invoice (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={handleFinish}
                  className="w-full sm:w-auto flex-1 btn-tactile py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-md shadow-indigo-600/30"
                >
                  <span>Start Studying Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* --- CHECKOUT FORM & PAYMENT SELECTION --- */
            <>
              {/* Plan Summary Card */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                    Selected Tier
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900 mt-1">
                    {plan.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {plan.durationDays >= 365 ? '1 Year Full Access' : `${plan.durationDays} Days Pass`}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-indigo-950">
                    ₹{plan.priceInInr}
                  </div>
                  <div className="text-[10px] text-slate-500">18% GST Included</div>
                </div>
              </div>

              {/* Aspirant Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Aspirant Billing Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. S. Ramanujam"
                      value={payerName}
                      onChange={(e) => setPayerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Email (for invoice)</label>
                    <input
                      type="email"
                      placeholder="aspirant@gmail.com"
                      value={payerEmail}
                      onChange={(e) => setPayerEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Payment Method (India)
                  </h4>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Zero Surcharge
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('UPI')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'UPI'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-xs'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-indigo-600" />
                    <span>UPI / QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Card')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'Card'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-xs'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    <span>RuPay / Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('NetBanking')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'NetBanking'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-xs'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-indigo-600" />
                    <span>Net Banking</span>
                  </button>
                </div>

                {/* UPI QR & VPA Box */}
                {paymentMethod === 'UPI' && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-white border border-slate-300 rounded-xl flex items-center justify-center p-1.5 shadow-2xs">
                        {/* Dynamic SVG QR simulation */}
                        <div className="w-full h-full bg-slate-900 rounded flex flex-col items-center justify-center text-white text-[9px] font-mono leading-none">
                          <span>UPI</span>
                          <span className="text-[7px] text-amber-300">₹{plan.priceInInr}</span>
                        </div>
                      </div>
                      <div className="flex-1 text-xs">
                        <div className="font-bold text-slate-800">Scan & Pay via any UPI App</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Google Pay • PhonePe • Paytm • BHIM • Cred
                        </div>
                        <div className="text-[10px] text-indigo-600 font-mono font-semibold mt-1">
                          VPA: aspirantatlas@icici
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Or enter UPI ID:</label>
                      <input
                        type="text"
                        value={upiHandle}
                        onChange={(e) => setUpiHandle(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-mono"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod !== 'UPI' && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                    <p>All major Indian banks supported: SBI, HDFC Bank, ICICI Bank, Axis Bank, and RuPay debit/credit cards.</p>
                    <p className="text-[11px] text-slate-500">Instant test sandbox verification enabled.</p>
                  </div>
                )}
              </div>

              {/* Pay Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleSimulatePayment}
                  className="btn-tactile w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/30 transition-all"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verifying Bank Transaction...</span>
                    </div>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                      <span>Complete Payment of ₹{plan.priceInInr} (Instant Pro)</span>
                    </>
                  )}
                </button>
                <div className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sandbox Demo Mode Active • Upgrades immediately with official tax invoice</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
