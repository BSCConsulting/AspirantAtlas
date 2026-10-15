import React, { useState, useEffect } from 'react';
import { 
  X, 
  Users, 
  Eye, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Download, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Compass, 
  FileText,
  Activity,
  IndianRupee,
  CreditCard,
  Crown,
  Printer,
  Phone,
  Copy,
  Check,
  Search,
  MessageSquare
} from 'lucide-react';
import { 
  getVisitorAnalytics, 
  exportVisitorLogsCsv, 
  VisitorAnalyticsSummary 
} from '../services/visitorTracker';
import { 
  getCapturedLeads, 
  triggerDownloadLeadsCsv, 
  getFormattedWhatsAppNumbers, 
  CapturedLead 
} from '../services/authService';
import { 
  getRevenueMetrics, 
  exportOrdersCsv, 
  RevenueMetrics, 
  printCommercialInvoice 
} from '../services/subscriptionService';
import { playClick, playChime } from '../services/soundService';

interface AdminVisitorInsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminVisitorInsightsModal: React.FC<AdminVisitorInsightsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'revenue' | 'leads'>('traffic');
  const [data, setData] = useState<VisitorAnalyticsSummary | null>(null);
  const [revenueData, setRevenueData] = useState<RevenueMetrics | null>(null);
  const [leadsList, setLeadsList] = useState<CapturedLead[]>([]);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [leadSearch, setLeadSearch] = useState('');

  useEffect(() => {
    if (isOpen) {
      setData(getVisitorAnalytics());
      setRevenueData(getRevenueMetrics());
      setLeadsList(getCapturedLeads());
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handleCopySingleNumber = (num: string) => {
    try {
      navigator.clipboard.writeText(num);
      setCopiedNumber(num);
      playClick();
      setTimeout(() => setCopiedNumber(null), 2000);
    } catch {}
  };

  const handleCopyAllWhatsAppNumbers = () => {
    const formatted = getFormattedWhatsAppNumbers();
    if (!formatted) return;
    try {
      navigator.clipboard.writeText(formatted);
      setCopiedAll(true);
      playChime();
      setTimeout(() => setCopiedAll(false), 2500);
    } catch {}
  };

  const filteredLeads = leadsList.filter(l => {
    if (!leadSearch.trim()) return true;
    const q = leadSearch.toLowerCase();
    return (
      l.name.toLowerCase().includes(q) ||
      l.mobile.toLowerCase().includes(q) ||
      l.targetExam.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Users className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-extrabold text-white">
                  Admin Hub: Leads, Traffic & Revenue
                </h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Registered WhatsApp contacts, visitor session telemetry & commercial order ledger
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-2.5 border-b border-slate-200 bg-slate-50/70 flex items-center space-x-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('leads')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 flex items-center space-x-1.5 transition-all shrink-0 ${
              activeTab === 'leads'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp Leads ({leadsList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('traffic')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 flex items-center space-x-1.5 transition-all shrink-0 ${
              activeTab === 'traffic'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Traffic & Telemetry</span>
          </button>

          <button
            onClick={() => setActiveTab('revenue')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 flex items-center space-x-1.5 transition-all shrink-0 ${
              activeTab === 'revenue'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Commercial Revenue ({revenueData?.recentOrders.length || 0})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: WHATSAPP LEADS & GROUP BROADCAST MANAGER */}
          {activeTab === 'leads' && (
            <div className="space-y-5">
              {/* WhatsApp Broadcast Quick Action Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/80 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Broadcast Ready
                    </span>
                    <h4 className="text-sm font-black text-slate-900 mt-1">
                      Informal WhatsApp Group & Community Manager
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {leadsList.length} registered civil services aspirants collected from blueprint downloads.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopyAllWhatsAppNumbers}
                      className={`btn-tactile flex-1 sm:flex-none py-2 px-3.5 rounded-xl text-xs font-black flex items-center justify-center space-x-1.5 shadow-xs transition-all ${
                        copiedAll
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                      }`}
                    >
                      {copiedAll ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAll ? 'Copied All to Clipboard!' : 'Copy Numbers for WhatsApp'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => triggerDownloadLeadsCsv()}
                      className="btn-tactile py-2 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center space-x-1.5 shadow-2xs transition-all"
                      title="Download clean CSV for Excel or Google Contacts"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-500" />
                      <span className="hidden sm:inline">Download CSV</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search by aspirant name, phone, exam or email..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-medium"
                />
              </div>

              {/* Leads Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                {filteredLeads.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400">
                    No leads match your filter or no registrations yet.
                  </div>
                ) : (
                  <div className="overflow-x-auto max-h-80">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10 text-[11px] font-black uppercase tracking-wider text-slate-500">
                        <tr>
                          <th className="py-2.5 px-3">Aspirant Name</th>
                          <th className="py-2.5 px-3">WhatsApp Number</th>
                          <th className="py-2.5 px-3">Target Exam</th>
                          <th className="py-2.5 px-3">Preparation Pace</th>
                          <th className="py-2.5 px-3 text-right">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {filteredLeads.map((l) => (
                          <tr key={l.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-2.5 px-3 font-bold text-slate-900">
                              {l.name}
                              <div className="text-[10px] text-slate-400 font-normal">{l.email}</div>
                            </td>
                            <td className="py-2.5 px-3 font-mono font-semibold text-slate-900">
                              <div className="flex items-center space-x-1.5">
                                <span>{l.mobile}</span>
                                <button
                                  type="button"
                                  onClick={() => handleCopySingleNumber(l.mobile)}
                                  className="p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
                                  title="Copy this phone number"
                                >
                                  {copiedNumber === l.mobile ? (
                                    <Check className="w-3 h-3 text-emerald-600" />
                                  ) : (
                                    <Copy className="w-3 h-3" />
                                  )}
                                </button>
                              </div>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="uppercase text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                                {l.targetExam}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-[11px] text-slate-500">
                              {l.timeline}
                            </td>
                            <td className="py-2.5 px-3 text-right text-[10px] text-slate-400">
                              {new Date(l.capturedAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TRAFFIC & TELEMETRY VIEW */}
          {activeTab === 'traffic' && (
            <>
              {/* Key Metric Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center space-x-1.5 text-slate-500 text-xs font-semibold">
                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Unique Visitors</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {data.totalUniqueVisitors}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Identified sessions</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center space-x-1.5 text-slate-500 text-xs font-semibold">
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>Page Views</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {data.totalPageViews}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Screen transitions</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                  <div className="flex items-center space-x-1.5 text-emerald-700 text-xs font-semibold">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Leads Captured</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-900 mt-1">
                    {data.totalLeadsCaptured}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium mt-0.5">Blueprint downloads</div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/80">
                  <div className="flex items-center space-x-1.5 text-indigo-700 text-xs font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Conversion Rate</span>
                  </div>
                  <div className="text-2xl font-black text-indigo-900 mt-1">
                    {data.conversionRatePercent}%
                  </div>
                  <div className="text-[10px] text-indigo-600 font-medium mt-0.5">Visitor-to-lead</div>
                </div>
              </div>

              {/* Device & Form Factor Breakdown */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center justify-between">
                  <span>Device Form Factor Distribution</span>
                  <span className="text-indigo-600 font-bold lowercase">mobile-first index</span>
                </h4>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                      Smartphones & Mobile
                    </span>
                    <span>{data.deviceDistribution.mobile}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-600 h-full rounded-full transition-all"
                      style={{ width: `${data.deviceDistribution.mobile}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-sky-600" />
                      Desktop & Laptops
                    </span>
                    <span>{data.deviceDistribution.desktop}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-sky-500 h-full rounded-full transition-all"
                      style={{ width: `${data.deviceDistribution.desktop}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Tablet className="w-3.5 h-3.5 text-amber-600" />
                      Tablets & iPads
                    </span>
                    <span>{data.deviceDistribution.tablet}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-500 h-full rounded-full transition-all"
                      style={{ width: `${data.deviceDistribution.tablet}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Current Visitor Session Metadata */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-indigo-600" />
                    Active Session Telemetry
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">{data.activeVisitor.id}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-slate-600 text-[11px]">
                  <div><strong>OS:</strong> {data.activeVisitor.os}</div>
                  <div><strong>Browser:</strong> {data.activeVisitor.browser}</div>
                  <div><strong>Resolution:</strong> {data.activeVisitor.screenResolution}</div>
                  <div><strong>Referrer:</strong> {data.activeVisitor.referrer}</div>
                </div>
              </div>

              {/* CRM & Telemetry Download Actions */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-indigo-900">
                  Data Portability & Commercial CRM Extraction
                </h4>
                <p className="text-xs text-indigo-800/80">
                  Export all accumulated visitor telemetry and opt-in contact leads for WhatsApp marketing, CRM import, or audit logs.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <button
                    onClick={() => triggerDownloadLeadsCsv()}
                    className="w-full sm:w-auto btn-tactile px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Captured Leads CSV ({data.totalLeadsCaptured})</span>
                  </button>

                  <button
                    onClick={() => exportVisitorLogsCsv()}
                    className="w-full sm:w-auto btn-tactile px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs flex items-center justify-center space-x-2 shadow-2xs transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Export Visitor Telemetry CSV</span>
                  </button>
                </div>
              </div>
            </>
          )}

          {/* TAB 3: REVENUE & COMMERCIAL ORDERS VIEW */}
          {activeTab === 'revenue' && (
            <div className="space-y-6">
              {/* Financial KPI Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                  <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                    Gross Platform Revenue
                  </div>
                  <div className="text-2xl font-black text-amber-950 mt-1">
                    ₹{revenueData?.totalRevenueInInr.toLocaleString('en-IN') || 0}
                  </div>
                  <div className="text-[10px] text-amber-700 mt-0.5">Paid subscriptions collected</div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200">
                  <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                    Paid Subscribers
                  </div>
                  <div className="text-2xl font-black text-indigo-950 mt-1">
                    {revenueData?.paidSubscribersCount || 0}
                  </div>
                  <div className="text-[10px] text-indigo-700 mt-0.5">Active Sprint & Topper passes</div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                  <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                    Average Order Value (AOV)
                  </div>
                  <div className="text-2xl font-black text-emerald-950 mt-1">
                    ₹{revenueData?.averageOrderValueInInr || 0}
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-0.5">Per paying subscriber</div>
                </div>
              </div>

              {/* Transactions Ledger */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-white shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                      Customer Transactions & Orders Ledger
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Real-time log of commercial checkout events and customer GST tax invoices.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => exportOrdersCsv()}
                    className="btn-tactile px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center space-x-1.5 shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Export Orders CSV</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-y border-slate-200 text-[10px] font-black uppercase text-slate-500">
                      <tr>
                        <th className="py-2 px-3">Order ID / Invoice</th>
                        <th className="py-2 px-3">Aspirant</th>
                        <th className="py-2 px-3">Plan</th>
                        <th className="py-2 px-3">Payment</th>
                        <th className="py-2 px-3 text-right">Amount</th>
                        <th className="py-2 px-3 text-center">Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {revenueData?.recentOrders.map((ord) => (
                        <tr key={ord.orderId} className="hover:bg-slate-50/50">
                          <td className="py-2 px-3 font-mono font-bold text-indigo-700">
                            {ord.invoiceNumber}
                            <div className="text-[10px] text-slate-400 font-normal">{ord.orderId}</div>
                          </td>
                          <td className="py-2 px-3 font-semibold text-slate-900">
                            {ord.userName}
                            <div className="text-[10px] text-slate-400">{ord.userEmail}</div>
                          </td>
                          <td className="py-2 px-3">
                            <span className="font-bold text-slate-800">{ord.planName}</span>
                          </td>
                          <td className="py-2 px-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                              {ord.paymentMethod}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-right font-black text-slate-900">
                            ₹{ord.amountInInr}
                          </td>
                          <td className="py-2 px-3 text-center">
                            <button
                              type="button"
                              onClick={() => printCommercialInvoice(ord)}
                              className="p-1 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                              title="Print / Download PDF Invoice"
                            >
                              <Printer className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Commercial Notice */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>GST & Commercial Ledger Compliance</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  All transactions include standard 18% GST (SAC Code 999293). Real-time invoices are generated in compliance with Indian commercial e-commerce regulations.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>AspirantAtlas Commercial Hub • Version 1.4</span>
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
