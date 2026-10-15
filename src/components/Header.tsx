import React, { useState } from 'react';
import { ExamId } from '../types';
import { 
  BookOpen, 
  Sparkles, 
  Flame, 
  Layers, 
  Compass, 
  Globe, 
  Award, 
  Scale, 
  Calendar, 
  Search, 
  User, 
  Clock,
  SlidersHorizontal,
  ChevronDown,
  TrendingUp,
  Gift,
  Crown,
  Volume2,
  VolumeX,
  MapPin
} from 'lucide-react';
import { AspirantUser } from '../services/authService';
import { StudySession } from '../services/studySessionService';
import { isSoundEnabled, setSoundEnabled, playChime, playClick } from '../services/soundService';

export type ActiveNavTab = 'roadmap' | 'mock-tests' | 'mains-evaluator' | 'current-affairs' | 'study-planner' | 'vault' | 'maps';

interface HeaderProps {
  selectedExam: ExamId;
  onSelectExam: (exam: ExamId) => void;
  activeTab: ActiveNavTab;
  setActiveTab: (tab: ActiveNavTab) => void;
  streakDays: number;
  onOpenDailyDrill: () => void;
  onOpenSearch?: () => void;
  showTelugu: boolean;
  setShowTelugu: (val: boolean) => void;
  completedCount: number;
  totalCount: number;
  onOpenAuth?: () => void;
  onOpenGeminiKey?: () => void;
  onOpenCompass?: () => void;
  onOpenDashboard?: () => void;
  onOpenLeadCapture?: () => void;
  onOpenPricing?: () => void;
  currentUser?: AspirantUser | null;
  onOpenSessionModal?: () => void;
  activeSession?: StudySession | null;
  elapsedSeconds?: number;
}

export const Header: React.FC<HeaderProps> = ({
  selectedExam,
  onSelectExam,
  activeTab,
  setActiveTab,
  streakDays,
  onOpenDailyDrill,
  onOpenSearch,
  showTelugu,
  setShowTelugu,
  onOpenAuth,
  onOpenGeminiKey,
  onOpenCompass,
  onOpenDashboard,
  onOpenLeadCapture,
  onOpenPricing,
  currentUser,
  onOpenSessionModal,
  activeSession,
  elapsedSeconds = 0
}) => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) {
      playChime();
    } else {
      playClick();
    }
  };

  const examTitles: Record<ExamId, { short: string; full: string; telugu: string }> = {
    upsc: { short: 'UPSC CSE', full: 'Civil Services', telugu: 'సివిల్స్' },
    appsc: { short: 'APPSC', full: 'Group 1 & 2', telugu: 'ఏపీపీఎస్సీ' },
    tspsc: { short: 'TSPSC', full: 'Group 1 & 2', telugu: 'టీఎస్‌పీఎస్సీ' }
  };

  const navItems: { id: ActiveNavTab; label: string; telugu: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'roadmap', label: 'Roadmap Hub', telugu: 'సిలబస్ రోడ్‌మ్యాప్', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'mock-tests', label: 'Prelims Mocks', telugu: 'ప్రిలిమ్స్ మాక్స్', icon: <Sparkles className="w-3.5 h-3.5" />, badge: 'Sim' },
    { id: 'mains-evaluator', label: 'Mains Studio', telugu: 'మెయిన్స్ ఎవాల్యుయేటర్', icon: <Award className="w-3.5 h-3.5" />, badge: 'AI' },
    { id: 'current-affairs', label: 'Editorial Bridge', telugu: 'సమకాలీన అంశాలు', icon: <Scale className="w-3.5 h-3.5" /> },
    { id: 'study-planner', label: 'Adaptive Planner', telugu: 'అడాప్టివ్ ప్రణాళిక', icon: <Calendar className="w-3.5 h-3.5" /> },
    { id: 'vault', label: 'Resource Vault', telugu: 'రీసోర్స్ వాల్ట్', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'maps', label: 'GeoAtlas Maps', telugu: 'జియో అట్లాస్', icon: <MapPin className="w-3.5 h-3.5 text-rose-500" />, badge: '3D GIS' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Bar: Single unified 64px row with perfect vertical alignment */}
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4 lg:gap-6">
          
          {/* 1. Left: Brand Emblem & Title + Mobile Exam Selector */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-600 to-indigo-500 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0">
              <span className="font-black text-sm sm:text-base md:text-lg tracking-tight text-slate-900 leading-none whitespace-nowrap">
                AspirantAtlas
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                Rank Engine
              </span>
            </div>

            {/* Mobile Compact Exam Selector Dropdown */}
            <div className="md:hidden ml-1 shrink-0">
              <select
                value={selectedExam}
                onChange={(e) => onSelectExam(e.target.value as ExamId)}
                aria-label="Target Exam Scope"
                className="bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 text-[10px] font-black text-slate-800 rounded-lg py-1 px-1.5 focus:outline-none transition-all cursor-pointer"
              >
                <option value="upsc">UPSC</option>
                <option value="appsc">APPSC</option>
                <option value="tspsc">TSPSC</option>
              </select>
            </div>
          </div>

          {/* 2. Center: Sleek, Single-Line Segmented Exam Control (Desktop) */}
          <div className="hidden md:inline-flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/70 shadow-xs shrink-0">
            {(['upsc', 'appsc', 'tspsc'] as ExamId[]).map((exam) => {
              const active = selectedExam === exam;
              return (
                <button
                  key={exam}
                  onClick={() => onSelectExam(exam)}
                  className={`btn-tactile px-2.5 lg:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                    active
                      ? 'bg-white text-slate-900 shadow-sm font-black border border-slate-200/80'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <span>{examTitles[exam].short}</span>
                  <span className="hidden xl:inline text-[10px] text-slate-400 font-medium">
                    {showTelugu ? examTitles[exam].telugu : examTitles[exam].full}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3. Right: Consolidated Action Controls (All consistent 36px height) */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0">
            
            {/* Search Input Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="hidden sm:flex btn-tactile h-9 px-2.5 lg:px-3 bg-slate-100/80 hover:bg-slate-100 border border-slate-200/80 rounded-xl text-xs text-slate-500 hover:text-slate-900 items-center space-x-2 transition-all group shrink-0"
                title="Search Hub (Cmd+K or /)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                <span className="hidden lg:inline text-xs font-medium">Search...</span>
                <kbd className="hidden xl:inline-block font-mono text-[10px] bg-white border border-slate-200 text-slate-500 px-1.5 py-0.2 rounded font-bold shadow-2xs">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Daily Study Check-In / Active Clock */}
            {onOpenSessionModal && (
              activeSession ? (
                <button
                  onClick={onOpenSessionModal}
                  className="btn-tactile h-9 px-2 sm:px-2.5 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-300 rounded-xl text-xs font-black text-emerald-800 flex items-center space-x-1 sm:space-x-1.5 transition-all shadow-2xs group shrink-0"
                  title="Active Study Session (Click to view or check out)"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="font-mono text-xs">
                    {Math.floor(elapsedSeconds / 3600).toString().padStart(2, '0')}:{Math.floor((elapsedSeconds % 3600) / 60).toString().padStart(2, '0')}:{Math.floor(elapsedSeconds % 60).toString().padStart(2, '0')}
                  </span>
                  <span className="hidden md:inline text-[10px] font-bold text-emerald-700 bg-emerald-200/60 px-1 py-0.2 rounded">
                    Check Out
                  </span>
                </button>
              ) : (
                <button
                  onClick={onOpenSessionModal}
                  className="btn-tactile h-9 px-2 sm:px-2.5 bg-indigo-50/90 hover:bg-indigo-100/80 border border-indigo-200/80 rounded-xl text-xs font-bold text-indigo-700 flex items-center space-x-1 sm:space-x-1.5 transition-all shadow-2xs shrink-0"
                  title="Daily Study Check-In & Attendance"
                >
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="hidden sm:inline">Check In</span>
                </button>
              )
            )}

            {/* Dashboard & Rank Predictor Button (Direct on xl+, available in Tools dropdown on all screens) */}
            {onOpenDashboard && (
              <button
                onClick={onOpenDashboard}
                className="hidden xl:flex btn-tactile h-9 px-2.5 rounded-xl border border-indigo-200/90 bg-indigo-50/80 hover:bg-indigo-100 text-indigo-800 text-xs font-black transition-all shadow-2xs items-center space-x-1.5 shrink-0"
                title="Aspirant Analytics Dashboard & Rank Predictor"
              >
                <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                <span>Dashboard</span>
              </button>
            )}

            {/* Commercial PRO Upgrade / Badge Button */}
            {currentUser?.isPro ? (
              <div
                className="h-9 px-2 sm:px-2.5 rounded-xl bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-300 text-amber-900 text-xs font-black flex items-center space-x-1.5 shadow-2xs cursor-default shrink-0"
                title="AspirantAtlas PRO Subscriber Active"
              >
                <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span className="hidden sm:inline">PRO</span>
              </div>
            ) : (
              onOpenPricing && (
                <button
                  onClick={onOpenPricing}
                  className="btn-tactile h-9 px-2 sm:px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-black transition-all shadow-xs flex items-center space-x-1.5 animate-pulse shrink-0"
                  title="View Commercial Pro Subscription Plans"
                >
                  <Crown className="w-3.5 h-3.5 text-amber-100 fill-amber-100" />
                  <span className="hidden sm:inline">Upgrade</span>
                </button>
              )
            )}

            {/* Audio Feedback Toggle Button (Available directly on xl+, and inside Tools menu on all screens) */}
            <button
              onClick={toggleSound}
              className={`hidden xl:flex btn-tactile h-9 w-9 rounded-xl border text-xs font-bold transition-all items-center justify-center shadow-2xs shrink-0 ${
                soundOn 
                  ? 'bg-white border-slate-200/90 text-indigo-600 hover:bg-slate-50' 
                  : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200'
              }`}
              title={soundOn ? 'Tactile Audio Cues Active (Click to Mute)' : 'Tactile Audio Muted (Click to Unmute)'}
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-indigo-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Consolidated Quick Tools Menu Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={`btn-tactile h-9 px-2 sm:px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1 sm:space-x-1.5 shadow-2xs ${
                  isToolsOpen 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                    : 'bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50'
                }`}
                title="Quick Tools (Language, AI Key, Habit Drill, Guide)"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tools</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Quick Tools Popover Dropdown */}
              {isToolsOpen && (
                <>
                  <div className="fixed inset-0 z-40 bg-slate-900/15 backdrop-blur-[1px]" onClick={() => setIsToolsOpen(false)} />
                  <div className="absolute right-0 sm:right-1 mt-2 w-72 max-w-[calc(100vw-1.5rem)] bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-2xl p-2.5 z-50 animate-scaleUp space-y-1 ring-1 ring-slate-900/5">
                    <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                      <span>Aspirant Utilities</span>
                      <span className="text-emerald-600 font-extrabold">Live Active</span>
                    </div>

                    {/* GeoAtlas Maps Shortcut */}
                    <button
                      onClick={() => {
                        setIsToolsOpen(false);
                        setActiveTab('maps');
                      }}
                      className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-900 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-rose-500" />
                        <span>Dynamic Maps (India, TS, AP)</span>
                      </div>
                      <span className="text-[10px] bg-rose-100 text-rose-800 font-extrabold px-1.5 py-0.2 rounded">
                        GIS
                      </span>
                    </button>

                    {/* Performance Dashboard */}
                    {onOpenDashboard && (
                      <button
                        onClick={() => {
                          setIsToolsOpen(false);
                          onOpenDashboard();
                        }}
                        className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-900 flex items-center space-x-2 transition-colors"
                      >
                        <TrendingUp className="w-4 h-4 text-indigo-600" />
                        <span>Performance Dashboard</span>
                      </button>
                    )}

                    {/* Daily Habit Drill */}
                    <button
                      onClick={() => {
                        setIsToolsOpen(false);
                        onOpenDailyDrill();
                      }}
                      className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span>Daily Habit Drill</span>
                      </div>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded">
                        {streakDays}d
                      </span>
                    </button>

                    {/* Language Toggle */}
                    <button
                      onClick={() => {
                        setShowTelugu(!showTelugu);
                      }}
                      className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-900 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-indigo-600" />
                        <span>Language</span>
                      </div>
                      <span className="text-[10px] bg-indigo-100 text-indigo-800 font-extrabold px-2 py-0.5 rounded-full">
                        {showTelugu ? 'తెలుగు' : 'English'}
                      </span>
                    </button>

                    {/* Audio Feedback Toggle */}
                    <button
                      onClick={toggleSound}
                      className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-900 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        {soundOn ? <Volume2 className="w-4 h-4 text-indigo-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                        <span>Audio Feedback</span>
                      </div>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        soundOn ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {soundOn ? 'Active' : 'Muted'}
                      </span>
                    </button>

                    {/* Compass Diagnostic Guide */}
                    {onOpenCompass && (
                      <button
                        onClick={() => {
                          setIsToolsOpen(false);
                          onOpenCompass();
                        }}
                        className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100 flex items-center space-x-2 transition-colors"
                      >
                        <Compass className="w-4 h-4 text-sky-600" />
                        <span>Compass Guide</span>
                      </button>
                    )}

                    {/* Free Blueprint Kit */}
                    {onOpenLeadCapture && (
                      <button
                        onClick={() => {
                          setIsToolsOpen(false);
                          onOpenLeadCapture();
                        }}
                        className="w-full px-3 py-2 rounded-xl text-xs font-bold text-amber-950 bg-amber-50 hover:bg-amber-100/80 rounded-xl flex items-center justify-between transition-colors border border-amber-200/60"
                      >
                        <div className="flex items-center space-x-2">
                          <Gift className="w-4 h-4 text-amber-600" />
                          <span>Free 2026 Blueprint Kit</span>
                        </div>
                        <span className="text-[10px] bg-amber-200/80 text-amber-900 font-extrabold px-1.5 py-0.2 rounded">
                          Free
                        </span>
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* User Profile & Account Drawer Button */}
            {onOpenAuth && (
              <button
                onClick={onOpenAuth}
                className="btn-tactile h-9 pl-2 pr-2 sm:pr-2.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all shadow-2xs flex items-center space-x-1.5 sm:space-x-2 shrink-0"
                title="Aspirant Profile & Cloud Sync"
              >
                {currentUser ? (
                  <>
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center font-black text-[10px] shrink-0 ${
                      currentUser.isPro ? 'bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 font-black shadow-xs ring-1 ring-amber-400' : 'bg-indigo-600 text-white'
                    }`}>
                      {currentUser.name.charAt(0)}
                    </div>
                    <span className="hidden sm:inline truncate max-w-[80px]">
                      {currentUser.name.split(' ')[0]}
                    </span>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${currentUser.isPro ? 'bg-amber-400 ring-2 ring-amber-300 animate-pulse' : 'bg-emerald-500 shadow-xs'}`} />
                  </>
                ) : (
                  <>
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span className="hidden sm:inline">Sign In</span>
                  </>
                )}
              </button>
            )}

          </div>

        </div>

        {/* Navigation Ribbon: Clean, Centered Segmented Pill Bar (Desktop only, mobile uses bottom bar) */}
        <div className="hidden md:flex items-center justify-center py-2.5 overflow-x-auto border-t border-slate-100 no-scrollbar">
          <div className="inline-flex items-center bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60 shadow-inner space-x-1 shrink-0">
            {navItems.map((item) => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`btn-tactile flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-white text-slate-900 shadow-sm font-black border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <span className={active ? 'text-indigo-600' : 'text-slate-500'}>
                    {item.icon}
                  </span>
                  <span>{showTelugu ? item.telugu : item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-extrabold uppercase ${
                      active ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </header>
  );
};
