import React, { useState } from 'react';
import { X, Cloud, User, Download, Upload, LogOut, CheckCircle2, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { AspirantUser, DEMO_PROFILES, getCurrentUser, loginWithDemo, loginWithEmail, logout, syncCloudData, exportFullCloudBackupJson, importCloudBackupJson } from '../services/authService';
import { ExamId } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserChanged: (user: AspirantUser | null) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onUserChanged }) => {
  const [currentUser, setCurrentUser] = useState<AspirantUser | null>(() => getCurrentUser());
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState<string>('');
  const [emailName, setEmailName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [selectedExam, setSelectedExam] = useState<ExamId>('upsc');
  const [activeTab, setActiveTab] = useState<'profile' | 'signin' | 'backup'>('profile');

  if (!isOpen) return null;

  const handleDemoSelect = (profileId: string) => {
    const user = loginWithDemo(profileId);
    setCurrentUser(user);
    onUserChanged(user);
    setActiveTab('profile');
  };

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailName.trim() || !emailAddress.trim()) return;
    const user = loginWithEmail(emailName, emailAddress, selectedExam);
    setCurrentUser(user);
    onUserChanged(user);
    setActiveTab('profile');
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    onUserChanged(null);
  };

  const handleSyncNow = async () => {
    setIsSyncing(true);
    setSyncStatusMsg('Synchronizing attempts, streak & notes with cloud vault...');
    const res = await syncCloudData();
    setIsSyncing(false);
    setSyncStatusMsg(`Successfully synchronized at ${res.syncedAt}`);
    const updated = getCurrentUser();
    setCurrentUser(updated);
    onUserChanged(updated);
  };

  const handleDownloadBackup = () => {
    const jsonStr = exportFullCloudBackupJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AspirantAtlas_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUploadBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importCloudBackupJson(content);
        if (success) {
          alert('Backup restored successfully! The page will now reload.');
          window.location.reload();
        } else {
          alert('Failed to parse backup JSON file.');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-modal bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-elevation-1">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Aspirant Identity & Cloud Sync</h3>
              <p className="text-xs text-slate-500 font-medium">Cross-device progress, test analytics & cloud vault</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center space-x-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'profile' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
            }`}
          >
            {currentUser ? 'My Profile' : '1-Click Demo Profiles'}
          </button>
          {!currentUser && (
            <button
              onClick={() => setActiveTab('signin')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                activeTab === 'signin' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
              }`}
            >
              Custom Sign In
            </button>
          )}
          <button
            onClick={() => setActiveTab('backup')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'backup' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
            }`}
          >
            Cloud Backup & Export
          </button>
        </div>

        {/* TAB 1: Profile or Demo Profiles */}
        {activeTab === 'profile' && (
          <div className="space-y-5">
            {currentUser ? (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50/40 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white font-black text-lg flex items-center justify-center shadow-sm">
                      {currentUser.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base">{currentUser.name}</h4>
                      <p className="text-xs text-slate-500 font-mono">{currentUser.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md">
                          Target: {currentUser.targetExam.toUpperCase()}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Joined {currentUser.joinedDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    title="Sign Out"
                    className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>

                {/* Cloud Sync Status Card */}
                <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-emerald-950 flex items-center gap-1.5">
                        <span>Cloud Vault Synchronized</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-[11px] text-emerald-800">Last synced: {currentUser.lastSyncedAt}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleSyncNow}
                    disabled={isSyncing}
                    className="btn-tactile px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
                  >
                    {isSyncing ? 'Syncing...' : 'Sync Now'}
                  </button>
                </div>

                {syncStatusMsg && (
                  <p className="text-[11px] text-slate-500 text-center font-medium">{syncStatusMsg}</p>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs text-slate-600 font-medium leading-relaxed">
                  Select a pre-configured ranker profile to instantly experience cloud persistence, customized timelines, and mock analytics:
                </div>

                <div className="space-y-2.5">
                  {DEMO_PROFILES.map((profile) => (
                    <button
                      key={profile.id}
                      onClick={() => handleDemoSelect(profile.id)}
                      className="btn-tactile w-full p-3.5 rounded-2xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 flex items-center justify-between transition-all group text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center font-bold text-xs text-slate-700 transition-colors">
                          {profile.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-black text-slate-900 text-xs">{profile.name}</div>
                          <div className="text-[11px] text-slate-500 font-medium">
                            {profile.targetExam.toUpperCase()} Track • {profile.prepHorizonDays}-Day Sprint
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                        <span>Select</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Custom Sign In */}
        {activeTab === 'signin' && (
          <form onSubmit={handleCustomLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                Aspirant Name
              </label>
              <input
                type="text"
                required
                value={emailName}
                onChange={(e) => setEmailName(e.target.value)}
                placeholder="e.g. Vikramaditya Reddy"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="vikram@ias.org"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                Primary Target Examination
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['upsc', 'appsc', 'tspsc'] as ExamId[]).map((ex) => (
                  <button
                    key={ex}
                    type="button"
                    onClick={() => setSelectedExam(ex)}
                    className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                      selectedExam === ex
                        ? 'bg-slate-900 text-white shadow-elevation-1'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {ex.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn-tactile w-full py-2.5 rounded-xl text-xs font-black bg-sky-600 hover:bg-sky-500 text-white shadow-elevation-1 hover:shadow-glow-sky transition-all mt-2"
            >
              Create / Sign In Aspirant Account
            </button>
          </form>
        )}

        {/* TAB 3: Cloud Backup & JSON Migration */}
        {activeTab === 'backup' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-xs text-slate-600 space-y-2 leading-relaxed">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-sky-600" />
                <span>100% Zero-Lockin Data Portability</span>
              </div>
              <p>
                Download your full test attempts, Mains evaluation history, streak, and bookmarks as a portable JSON file to restore on any computer or smartphone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadBackup}
                className="btn-tactile p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-left space-y-2 transition-all shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-black text-xs text-slate-900">Export Backup JSON</div>
                  <div className="text-[11px] text-slate-500">Download all data locally</div>
                </div>
              </button>

              <label className="btn-tactile p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-left space-y-2 transition-all shadow-xs cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Upload className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-black text-xs text-slate-900">Restore from File</div>
                  <div className="text-[11px] text-slate-500">Upload JSON backup file</div>
                </div>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleUploadBackup}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
