import React, { useState } from 'react';
import { 
  X, 
  User, 
  Cloud, 
  RefreshCw, 
  Download, 
  Upload, 
  LogOut, 
  ShieldCheck, 
  Award, 
  Clock, 
  Flame, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Key,
  Phone,
  TrendingUp,
  Users,
  ChevronRight,
  Crown,
  Copy,
  Check
} from 'lucide-react';
import { 
  AspirantUser, 
  DEMO_PROFILES, 
  loginWithDemo, 
  loginWithEmail, 
  logout, 
  syncCloudData, 
  exportFullCloudBackupJson, 
  importCloudBackupJson,
  exportLeadsCsv,
  getCapturedLeads,
  getFormattedWhatsAppNumbers,
  triggerDownloadLeadsCsv
} from '../services/authService';
import { validateIndianMobile, sanitizePhoneInput } from '../utils/phoneValidator';
import { getUserLedger, formatMinutes } from '../services/studySessionService';
import { ExamId } from '../types';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AspirantUser | null;
  onUserChanged: (user: AspirantUser | null) => void;
  onOpenSessionModal?: () => void;
  onOpenGeminiKey?: () => void;
  onOpenDashboard?: () => void;
  onOpenLeadCapture?: () => void;
  onOpenVisitorInsights?: () => void;
  onOpenPricing?: () => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUserChanged,
  onOpenSessionModal,
  onOpenGeminiKey,
  onOpenDashboard,
  onOpenLeadCapture,
  onOpenVisitorInsights,
  onOpenPricing
}) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState('');
  const [emailName, setEmailName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedExam, setSelectedExam] = useState<ExamId>('upsc');
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);
  const [copiedDrawerNumbers, setCopiedDrawerNumbers] = useState(false);
  const [drawerMobileError, setDrawerMobileError] = useState<string | null>(null);

  if (!isOpen) return null;

  const userLedger = currentUser ? getUserLedger(currentUser.id) : null;

  const handleDemoLogin = (profileId: string) => {
    const user = loginWithDemo(profileId);
    onUserChanged(user);
    setIsEmailFormOpen(false);
  };

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailName.trim() || !emailAddress.trim()) return;
    const user = loginWithEmail(emailName, emailAddress, selectedExam);
    onUserChanged(user);
    setIsEmailFormOpen(false);
  };

  const handleSignOut = () => {
    logout();
    onUserChanged(null);
  };

  const handleSyncNow = async () => {
    setIsSyncing(true);
    setSyncStatusMsg('Synchronizing progress with cloud storage...');
    const res = await syncCloudData();
    setIsSyncing(false);
    setSyncStatusMsg(`Synchronized at ${res.syncedAt}`);
    setTimeout(() => setSyncStatusMsg(''), 4000);
  };

  const handleExportBackup = () => {
    const jsonStr = exportFullCloudBackupJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AspirantAtlas_${currentUser?.name.replace(/\s+/g, '_') || 'Portfolio'}_Backup.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importCloudBackupJson(content);
        if (success) {
          alert('Study ledger & portfolio restored successfully! Refreshing...');
          window.location.reload();
        } else {
          alert('Invalid backup JSON format.');
        }
      }
    };
    reader.readAsText(file);
  };

  const leadsCount = getCapturedLeads().length;

  const handleExportLeads = () => {
    const csvStr = exportLeadsCsv();
    const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AspirantAtlas_Captured_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container (Slide out on desktop, bottom sheet on small mobile) */}
      <div 
        className="relative z-10 w-full max-w-md bg-white h-full sm:h-screen sm:shadow-2xl sm:border-l border-slate-200 flex flex-col justify-between overflow-hidden animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 via-white to-indigo-50/30">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-600 flex items-center justify-center text-white shadow-sm">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                {currentUser ? 'Aspirant Profile' : 'Aspirant Sign In'}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                {currentUser ? 'Managed study account & cloud sync' : 'Sign in to preserve your streak & test scores'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          {currentUser ? (
            /* --- LOGGED IN PROFILE VIEW --- */
            <div className="space-y-6">
              {/* User Identity Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white font-black text-lg flex items-center justify-center shadow-md shadow-indigo-500/30">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-base text-white">{currentUser.name}</h4>
                    <p className="text-xs text-slate-300 font-mono">{currentUser.email}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white uppercase tracking-wider">
                        {currentUser.targetExam.toUpperCase()} CSE
                      </span>
                      <span className="text-[10px] text-emerald-400 flex items-center space-x-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Cloud Active</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* KPI Ribbon */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[9px] uppercase font-bold text-slate-400">Total Hours</div>
                    <div className="text-sm font-black text-white mt-0.5">
                      {userLedger ? formatMinutes(userLedger.totalStudyMinutes) : '0m'}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[9px] uppercase font-bold text-slate-400">Streak</div>
                    <div className="text-sm font-black text-amber-400 mt-0.5 flex items-center justify-center space-x-0.5">
                      <Flame className="w-3 h-3 fill-amber-400" />
                      <span>{userLedger?.currentStreakDays || 0}d</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[9px] uppercase font-bold text-slate-400">Sessions</div>
                    <div className="text-sm font-black text-white mt-0.5">
                      {userLedger?.sessions.length || 0}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pro Subscription Status Banner */}
              {currentUser.isPro ? (
                <div className="p-4 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50/40 flex items-center justify-between shadow-2xs">
                  <div className="space-y-0.5">
                    <div className="text-xs font-black text-amber-950 flex items-center space-x-1.5">
                      <Crown className="w-4 h-4 text-amber-600 fill-amber-500" />
                      <span>PRO ACTIVE ({currentUser.plan?.toUpperCase() || 'TOPPER'})</span>
                    </div>
                    <p className="text-[11px] text-amber-800/80">
                      Valid through {currentUser.subscriptionExpiresAt || 'Oct 2027'} • Invoice #{currentUser.invoiceId || 'INV-2026-AA01'}
                    </p>
                  </div>
                  {onOpenPricing && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenPricing();
                      }}
                      className="btn-tactile px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-xs shrink-0"
                    >
                      Plans
                    </button>
                  )}
                </div>
              ) : (
                <div className="p-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-amber-50/50 flex items-center justify-between shadow-2xs">
                  <div className="space-y-0.5">
                    <div className="text-xs font-black text-amber-950 flex items-center space-x-1.5">
                      <Crown className="w-4 h-4 text-amber-600 fill-amber-500" />
                      <span>Upgrade to AspirantAtlas PRO</span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Unlimited AI evaluations, 210+ question vault & master notes.
                    </p>
                  </div>
                  {onOpenPricing && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenPricing();
                      }}
                      className="btn-tactile px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl text-xs font-black shadow-xs shrink-0"
                    >
                      ₹499+
                    </button>
                  )}
                </div>
              )}

              {/* Cloud Sync Status */}
              <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                    <Cloud className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Cloud Synchronization</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {syncStatusMsg || `Last synchronized: ${currentUser.lastSyncedAt || 'Just now'}`}
                  </p>
                </div>

                <button
                  onClick={handleSyncNow}
                  disabled={isSyncing}
                  className="btn-tactile px-3 py-1.5 bg-white border border-slate-200/90 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 flex items-center space-x-1.5 shadow-2xs transition-all"
                >
                  <RefreshCw className={`w-3 h-3 text-slate-500 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Syncing...' : 'Sync'}</span>
                </button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <h5 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Quick Navigation
                </h5>
                {onOpenDashboard && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDashboard();
                    }}
                    className="w-full p-3.5 rounded-xl border border-indigo-300/80 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white text-xs font-black flex items-center justify-between shadow-xs transition-all group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <TrendingUp className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <div className="leading-tight">Aspirant Performance Dashboard</div>
                        <div className="text-[10px] text-slate-300 font-normal">AIR Rank Projection & Motion Timeline</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </button>
                )}

                {onOpenSessionModal && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSessionModal();
                    }}
                    className="w-full p-3 rounded-xl border border-indigo-200/80 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-900 text-xs font-bold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      <span>View Study Check-In & Attendance Ledger</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-500" />
                  </button>
                )}
              </div>

              {/* 1-Click Switch Account / Demo Profiles */}
              <div className="space-y-2.5">
                <h5 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Switch Active Aspirant Account
                </h5>
                <div className="space-y-2">
                  {DEMO_PROFILES.map((p) => {
                    const active = currentUser.id === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleDemoLogin(p.id)}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                          active
                            ? 'bg-indigo-50 border-indigo-300 ring-1 ring-indigo-400/20 shadow-2xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <div className={`w-7 h-7 rounded-lg text-white font-bold text-xs flex items-center justify-center ${
                            active ? 'bg-indigo-600' : 'bg-slate-400'
                          }`}>
                            {p.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900 leading-tight">
                              {p.name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {p.targetExam.toUpperCase()} CSE • {p.dailyGoalHours}h Goal
                            </div>
                          </div>
                        </div>

                        {active && (
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Data Export / Import */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2.5">
                <div className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Portable Portfolio Backup</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Export your entire progress, streak, check-in history, and test logs to transfer across browsers.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleExportBackup}
                    className="btn-tactile py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center space-x-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Export JSON</span>
                  </button>

                  <label className="btn-tactile py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center space-x-1.5 cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-slate-500" />
                    <span>Restore JSON</span>
                    <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
                  </label>
                </div>

                {leadsCount > 0 && (
                  <div className="p-3.5 rounded-2xl border border-emerald-300 bg-emerald-50/70 space-y-2.5 mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-950">
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp Community Leads ({leadsCount})</span>
                      </div>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 font-extrabold px-1.5 py-0.2 rounded">
                        CRM Ready
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      Captured numbers for your informal WhatsApp groups & daily current affairs broadcast.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          const formatted = getFormattedWhatsAppNumbers();
                          if (formatted) {
                            navigator.clipboard.writeText(formatted);
                            setCopiedDrawerNumbers(true);
                            setTimeout(() => setCopiedDrawerNumbers(false), 2000);
                          }
                        }}
                        className="btn-tactile flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-xs"
                      >
                        {copiedDrawerNumbers ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedDrawerNumbers ? 'Copied Numbers!' : 'Copy for WhatsApp'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleExportLeads}
                        className="btn-tactile py-2 px-3 rounded-xl border border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-900 text-xs font-bold flex items-center space-x-1 shadow-2xs"
                        title="Download CSV"
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-600" />
                        <span>CSV</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Evaluation Engine & Key Config */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Mains AI Evaluation Engine</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Gemini Flash Ready
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Powers OCR handwriting transcription, question grading, and model benchmarks.
                </p>
                {onOpenGeminiKey && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenGeminiKey();
                    }}
                    className="btn-tactile w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center space-x-1.5"
                  >
                    <Key className="w-3.5 h-3.5 text-slate-500" />
                    <span>Configure Custom API Key</span>
                  </button>
                )}
              </div>

              {/* Traffic & Commercial Insights Hub */}
              {onOpenVisitorInsights && (
                <div className="p-4 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/60 to-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Traffic & Commercial Telemetry</span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded-full">
                      Admin
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    View real-time visitor sessions, device distribution, and export captured leads.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenVisitorInsights();
                    }}
                    className="btn-tactile w-full py-2 px-3 rounded-xl bg-white border border-indigo-200 hover:bg-indigo-50 text-xs font-bold text-indigo-900 flex items-center justify-center space-x-1.5 transition-all shadow-2xs"
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                    <span>View Visitor Traffic & Conversion Hub</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* --- GUEST / SIGN-IN VIEW --- */
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">
                  Guest Session
                </span>
                <h4 className="text-lg font-black text-white">Sign In to Save Your Journey</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Log in to track your syllabus completion, clock daily study hours, save test percentiles, and sync across devices.
                </p>
              </div>

              {/* Guest Quick Tools: Dashboard & Free Kit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {onOpenDashboard && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDashboard();
                    }}
                    className="p-3 rounded-xl border border-indigo-200 bg-indigo-50/70 hover:bg-indigo-100/80 text-left flex items-center space-x-2.5 transition-all text-xs font-bold text-indigo-950"
                  >
                    <TrendingUp className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <div>My Dashboard</div>
                      <div className="text-[10px] text-slate-500 font-normal">AIR Predictor</div>
                    </div>
                  </button>
                )}

                {onOpenLeadCapture && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenLeadCapture();
                    }}
                    className="p-3 rounded-xl border border-amber-200 bg-amber-50/70 hover:bg-amber-100/80 text-left flex items-center space-x-2.5 transition-all text-xs font-bold text-amber-950"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <div>
                      <div>Free 2026 Kit</div>
                      <div className="text-[10px] text-slate-500 font-normal">Blueprint PDF</div>
                    </div>
                  </button>
                )}

                {onOpenPricing && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenPricing();
                    }}
                    className="p-3 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 hover:bg-amber-100 text-left flex items-center space-x-2.5 transition-all text-xs font-bold text-amber-950 sm:col-span-2 shadow-2xs"
                  >
                    <Crown className="w-4 h-4 text-amber-600 fill-amber-500 shrink-0" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span>AspirantAtlas PRO Plans</span>
                        <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-black uppercase">From ₹499</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-normal">Unlimited AI Evaluations & Prelims Vault</div>
                    </div>
                  </button>
                )}
              </div>

              {/* 1-Click Instant Demo Profiles */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Instant 1-Click Topper Profiles
                  </h5>
                  <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    Pre-seeded
                  </span>
                </div>

                <div className="space-y-2">
                  {DEMO_PROFILES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleDemoLogin(p.id)}
                      className="w-full p-3 rounded-xl border border-slate-200/90 hover:border-indigo-400 bg-white hover:bg-indigo-50/30 text-left flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {p.name}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {p.targetExam.toUpperCase()} CSE • {p.prepHorizonDays}d Plan
                          </div>
                        </div>
                      </div>

                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Login Form Option */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                {!isEmailFormOpen ? (
                  <button
                    onClick={() => setIsEmailFormOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center space-x-2 transition-all"
                  >
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span>Or Sign In with Personal Email</span>
                  </button>
                ) : (
                  <form onSubmit={handleCustomLogin} className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <h5 className="text-xs font-black text-slate-800">Personal Email Sign-In</h5>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. S. Venkat"
                        value={emailName}
                        onChange={(e) => setEmailName(e.target.value)}
                        required
                        className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="venkat@aspirant.org"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        required
                        className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        WhatsApp / Mobile <span className="text-[10px] text-slate-400 font-normal">(for daily study reminders)</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Target Exam</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['upsc', 'appsc', 'tspsc'] as ExamId[]).map((e) => (
                          <button
                            key={e}
                            type="button"
                            onClick={() => setSelectedExam(e)}
                            className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                              selectedExam === e
                                ? 'bg-indigo-600 text-white border-indigo-700'
                                : 'bg-white border-slate-200 text-slate-600'
                            }`}
                          >
                            {e.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsEmailFormOpen(false)}
                        className="btn-tactile flex-1 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/60"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-tactile flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* AI Evaluation Engine & Key Config for Guests */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Mains AI Evaluation Engine</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Gemini Flash Ready
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Evaluate handwritten answers, question grading, and model benchmarks.
                </p>
                {onOpenGeminiKey && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenGeminiKey();
                    }}
                    className="btn-tactile w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center space-x-1.5"
                  >
                    <Key className="w-3.5 h-3.5 text-slate-500" />
                    <span>Configure Custom API Key</span>
                  </button>
                )}
              </div>

              {/* Traffic & Commercial Insights Hub for Guests / Admins */}
              {onOpenVisitorInsights && (
                <div className="p-4 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/60 to-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Traffic & Commercial Telemetry</span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded-full">
                      Admin
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    View real-time visitor sessions, device distribution, and export captured leads.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenVisitorInsights();
                    }}
                    className="btn-tactile w-full py-2 px-3 rounded-xl bg-white border border-indigo-200 hover:bg-indigo-50 text-xs font-bold text-indigo-900 flex items-center justify-center space-x-1.5 transition-all shadow-2xs"
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                    <span>View Visitor Traffic & Conversion Hub</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Bottom Footer */}
        {currentUser && (
          <div className="p-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-medium">
              Signed in as {currentUser.name.split(' ')[0]}
            </span>

            <button
              onClick={handleSignOut}
              className="btn-tactile px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/80 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all shadow-2xs"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-600" />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
