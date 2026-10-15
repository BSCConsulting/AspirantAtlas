import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  Award, 
  Clock, 
  Menu, 
  X, 
  Scale, 
  Calendar, 
  BookOpen, 
  Search, 
  Compass, 
  Globe, 
  Key, 
  Flame,
  User,
  MapPin
} from 'lucide-react';
import { ActiveNavTab } from './Header';
import { StudySession } from '../services/studySessionService';
import { AspirantUser } from '../services/authService';

interface MobileBottomNavProps {
  activeTab: ActiveNavTab;
  setActiveTab: (tab: ActiveNavTab) => void;
  onOpenSessionModal: () => void;
  activeSession: StudySession | null;
  elapsedSeconds: number;
  onOpenSearch?: () => void;
  onOpenDailyDrill: () => void;
  onOpenCompass?: () => void;
  onOpenGeminiKey?: () => void;
  onOpenAuth?: () => void;
  showTelugu: boolean;
  setShowTelugu: (val: boolean) => void;
  streakDays: number;
  currentUser: AspirantUser | null;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenSessionModal,
  activeSession,
  elapsedSeconds,
  onOpenSearch,
  onOpenDailyDrill,
  onOpenCompass,
  onOpenGeminiKey,
  onOpenAuth,
  showTelugu,
  setShowTelugu,
  streakDays,
  currentUser
}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const formatTimerShort = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) return `${hrs}h ${mins % 60}m`;
    return `${mins}m`;
  };

  return (
    <>
      {/* Sticky Mobile Bottom Navigation Bar (Visible only on <768px screens) */}
      <nav 
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-2xl px-2 py-1 flex items-center justify-around safe-area-bottom"
        aria-label="Mobile Navigation"
      >
        {/* 1. Roadmap */}
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`flex-1 flex flex-col items-center justify-center py-1 min-h-[48px] rounded-xl transition-all ${
            activeTab === 'roadmap' ? 'text-indigo-600 font-extrabold' : 'text-slate-500 font-medium'
          }`}
        >
          <Layers className={`w-5 h-5 ${activeTab === 'roadmap' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Roadmap</span>
        </button>

        {/* 2. Prelims Mocks */}
        <button
          onClick={() => setActiveTab('mock-tests')}
          className={`flex-1 flex flex-col items-center justify-center py-1 min-h-[48px] rounded-xl transition-all ${
            activeTab === 'mock-tests' ? 'text-sky-600 font-extrabold' : 'text-slate-500 font-medium'
          }`}
        >
          <Sparkles className={`w-5 h-5 ${activeTab === 'mock-tests' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Prelims</span>
        </button>

        {/* 3. Mains Studio */}
        <button
          onClick={() => setActiveTab('mains-evaluator')}
          className={`flex-1 flex flex-col items-center justify-center py-1 min-h-[48px] rounded-xl transition-all ${
            activeTab === 'mains-evaluator' ? 'text-indigo-600 font-extrabold' : 'text-slate-500 font-medium'
          }`}
        >
          <Award className={`w-5 h-5 ${activeTab === 'mains-evaluator' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Mains AI</span>
        </button>

        {/* 4. Study Log & Active Timer */}
        <button
          onClick={onOpenSessionModal}
          className={`flex-1 flex flex-col items-center justify-center py-1 min-h-[48px] rounded-xl transition-all relative ${
            activeSession ? 'text-emerald-700 font-black' : 'text-slate-500 font-medium'
          }`}
        >
          <div className="relative">
            <Clock className={`w-5 h-5 ${activeSession ? 'text-emerald-600 stroke-[2.5]' : 'stroke-[1.8]'}`} />
            {activeSession && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">
            {activeSession ? formatTimerShort(elapsedSeconds) : 'Study Log'}
          </span>
        </button>

        {/* 5. More Menu Sheet */}
        <button
          onClick={() => setIsMoreMenuOpen(true)}
          className={`flex-1 flex flex-col items-center justify-center py-1 min-h-[48px] rounded-xl transition-all ${
            isMoreMenuOpen ? 'text-slate-900 font-extrabold' : 'text-slate-500 font-medium'
          }`}
        >
          <Menu className="w-5 h-5 stroke-[1.8]" />
          <span className="text-[10px] mt-0.5 tracking-tight">More</span>
        </button>
      </nav>

      {/* Slide-Up "More" Bottom Sheet on Mobile */}
      {isMoreMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsMoreMenuOpen(false)} />

          <div 
            className="relative z-10 bg-white rounded-t-3xl border-t border-slate-200 p-5 space-y-4 max-h-[85vh] overflow-y-auto animate-slideUp shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grab Handle */}
            <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto" />

            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <span className="text-base font-black text-slate-900">Explore Hub & Tools</span>
              </div>
              <button
                onClick={() => setIsMoreMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* User Quick Info */}
            <div 
              onClick={() => {
                setIsMoreMenuOpen(false);
                if (onOpenAuth) onOpenAuth();
              }}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {currentUser ? currentUser.name.charAt(0) : <User className="w-4 h-4" />}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">
                    {currentUser ? currentUser.name : 'Sign In as Aspirant'}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {currentUser ? `${currentUser.targetExam.toUpperCase()} CSE • ${currentUser.email}` : 'Sync progress across devices'}
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
                {currentUser ? 'Manage' : 'Sign In'}
              </span>
            </div>

            {/* Additional Modules Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={() => {
                  setActiveTab('current-affairs');
                  setIsMoreMenuOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left space-y-1 transition-all ${
                  activeTab === 'current-affairs' ? 'bg-indigo-50 border-indigo-300 font-bold' : 'bg-white border-slate-200'
                }`}
              >
                <Scale className="w-5 h-5 text-indigo-600" />
                <div className="text-xs font-extrabold text-slate-900">Editorial Bridge</div>
                <div className="text-[10px] text-slate-400">Daily Current Affairs</div>
              </button>

              <button
                onClick={() => {
                  setActiveTab('study-planner');
                  setIsMoreMenuOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left space-y-1 transition-all ${
                  activeTab === 'study-planner' ? 'bg-indigo-50 border-indigo-300 font-bold' : 'bg-white border-slate-200'
                }`}
              >
                <Calendar className="w-5 h-5 text-indigo-600" />
                <div className="text-xs font-extrabold text-slate-900">Study Planner</div>
                <div className="text-[10px] text-slate-400">Adaptive Timetable</div>
              </button>

              <button
                onClick={() => {
                  setActiveTab('vault');
                  setIsMoreMenuOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left space-y-1 transition-all ${
                  activeTab === 'vault' ? 'bg-indigo-50 border-indigo-300 font-bold' : 'bg-white border-slate-200'
                }`}
              >
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <div className="text-xs font-extrabold text-slate-900">Resource Vault</div>
                <div className="text-[10px] text-slate-400">Gazettes & Laws</div>
              </button>

              <button
                onClick={() => {
                  setActiveTab('maps');
                  setIsMoreMenuOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left space-y-1 transition-all ${
                  activeTab === 'maps' ? 'bg-rose-50 border-rose-300 font-bold' : 'bg-white border-slate-200'
                }`}
              >
                <MapPin className="w-5 h-5 text-rose-600" />
                <div className="text-xs font-extrabold text-slate-900">GeoAtlas Maps</div>
                <div className="text-[10px] text-slate-400">India, TS & AP GIS</div>
              </button>

              {onOpenSearch && (
                <button
                  onClick={() => {
                    setIsMoreMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="p-3 rounded-2xl border border-slate-200 bg-white text-left space-y-1"
                >
                  <Search className="w-5 h-5 text-slate-600" />
                  <div className="text-xs font-extrabold text-slate-900">Omnisearch</div>
                  <div className="text-[10px] text-slate-400">Search Hub & Acts</div>
                </button>
              )}
            </div>

            {/* Quick System Tools Strip */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setShowTelugu(!showTelugu);
                }}
                className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 flex items-center justify-center space-x-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{showTelugu ? 'తెలుగు Active' : 'English'}</span>
              </button>

              <button
                onClick={() => {
                  setIsMoreMenuOpen(false);
                  onOpenDailyDrill();
                }}
                className="flex-1 py-2.5 px-3 rounded-xl border border-amber-200 bg-amber-50 text-xs font-bold text-amber-900 flex items-center justify-center space-x-1.5"
              >
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{streakDays}d Streak</span>
              </button>

              {onOpenGeminiKey && (
                <button
                  onClick={() => {
                    setIsMoreMenuOpen(false);
                    onOpenGeminiKey();
                  }}
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600"
                  title="Gemini AI Key"
                >
                  <Key className="w-4 h-4 text-slate-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
