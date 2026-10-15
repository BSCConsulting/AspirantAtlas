import React from 'react';
import { 
  X, 
  Check, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Clock, 
  BookOpen, 
  FileText, 
  ChevronRight,
  HelpCircle,
  Crown
} from 'lucide-react';
import { SUBSCRIPTION_PLANS, SubscriptionPlan } from '../services/subscriptionService';
import { AspirantUser } from '../services/authService';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AspirantUser | null;
  onSelectPlan: (plan: SubscriptionPlan) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSelectPlan
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-indigo-950">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Crown className="w-3 h-3 text-slate-950 fill-slate-950" />
                Commercial Plans
              </span>
              <span className="text-xs text-indigo-300 font-semibold">
                Transparent Pricing • Instant UPI Settlement
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Invest in Your Civil Services Rank
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Choose the right preparation plan. Unlimited AI handwriting evaluations, full Prelims vault, and topper study notes.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body / Pricing Cards */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SUBSCRIPTION_PLANS.map((plan) => {
              const isCurrentPlan = currentUser?.plan === plan.id || (!currentUser?.plan && plan.id === 'free');
              const isTopper = plan.id === 'topper';

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-5 flex flex-col justify-between transition-all relative ${
                    isTopper
                      ? 'border-2 border-indigo-600 bg-gradient-to-b from-indigo-50/70 via-white to-white shadow-xl shadow-indigo-600/10 md:-translate-y-1'
                      : 'border border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${
                        isTopper
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                          : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                      }`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-black text-slate-900">{plan.name}</h3>
                      {isCurrentPlan && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          Current Plan
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 mt-1 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="mt-4 mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-black text-slate-900">
                          {plan.priceInInr === 0 ? 'Free' : `₹${plan.priceInInr}`}
                        </span>
                        {plan.originalPriceInInr && (
                          <span className="text-xs text-slate-400 line-through">
                            ₹{plan.originalPriceInInr}
                          </span>
                        )}
                        <span className="text-xs text-slate-500">
                          / {plan.durationDays >= 365 ? 'year' : `${plan.durationDays} days`}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {plan.priceInInr > 0 ? 'Includes 18% GST • Instant Tax Invoice' : 'No credit card required'}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Included Features
                      </div>
                      <ul className="space-y-2 text-xs">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start space-x-2 text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                        {plan.limitations?.map((l, i) => (
                          <li key={i} className="flex items-start space-x-2 text-slate-400">
                            <span className="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 shrink-0 mt-0.5">✕</span>
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Plan CTA */}
                  <div className="mt-6 pt-2">
                    {plan.id === 'free' ? (
                      <button
                        type="button"
                        onClick={onClose}
                        className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors"
                      >
                        {isCurrentPlan ? 'Active Plan' : 'Continue Free'}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectPlan(plan);
                        }}
                        className={`btn-tactile w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center space-x-1.5 transition-all shadow-sm ${
                          isTopper
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-indigo-600/30'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                        <span>{isCurrentPlan ? 'Renew Subscription' : `Upgrade to ${plan.name.split(' ')[0]}`}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guarantee & Tax Info Banner */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold text-slate-900">Commercial Standard Guarantee:</span> Instant activation via UPI / QR. All plans include official GST tax invoices for claiming student reimbursement.
              </div>
            </div>
            <div className="flex items-center space-x-3 shrink-0 text-slate-500 font-medium">
              <span>Zero Autodebit Traps</span>
              <span>•</span>
              <span>100% Indian UPI Native</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Need institutional or group access? Contact institutional@aspirantatlas.org</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 font-bold text-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
