import React, { useState, useEffect } from 'react';
import { Sparkles, X, CheckCircle, ShieldCheck } from 'lucide-react';
import { safeGetString, safeSetString } from '../utils/storageHelper';

interface ActivityItem {
  id: string;
  avatar: string;
  text: string;
  location: string;
  timeAgo: string;
  badge?: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    avatar: '👨‍🎓',
    text: 'Completed AP Economy & Industrial Policy Module',
    location: 'Vijayawada',
    timeAgo: '4m ago',
    badge: 'Study Ledger'
  },
  {
    id: 'act-2',
    avatar: '👩‍💼',
    text: 'Scored 84/100 in GS Paper-I Prelims Mock #2',
    location: 'New Delhi',
    timeAgo: '9m ago',
    badge: 'AIR 450 Target'
  },
  {
    id: 'act-3',
    avatar: '⚡',
    text: 'Upgraded to Topper All-Access Pass (Annual)',
    location: 'Hyderabad',
    timeAgo: '14m ago',
    badge: '⚡ PRO Member'
  },
  {
    id: 'act-4',
    avatar: '📚',
    text: 'Downloaded 2026 Micro-Syllabus Blueprint PDF',
    location: 'Visakhapatnam',
    timeAgo: '19m ago',
    badge: 'Free Kit'
  },
  {
    id: 'act-5',
    avatar: '✍️',
    text: 'Evaluated GS-II Mains Answer with Gemini AI Studio',
    location: 'Tirupati',
    timeAgo: '27m ago',
    badge: 'Mains AI'
  }
];

export const CommunityActivityToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(() => {
    return safeGetString('aspirant_social_toast_dismissed') === 'true';
  });

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Fade out then switch
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setIsVisible(true);
      }, 500);
    }, 12000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    safeSetString('aspirant_social_toast_dismissed', 'true');
  };

  if (isDismissed) return null;

  const current = ACTIVITIES[currentIndex];

  return (
    <div className={`hidden sm:flex fixed bottom-5 left-5 z-40 transition-all duration-500 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
    }`}>
      <div className="bg-slate-900/90 hover:bg-slate-900 text-white border border-slate-700/60 shadow-2xl backdrop-blur-xl rounded-2xl p-3 pr-4 flex items-center space-x-3 max-w-sm transition-all ring-1 ring-white/10">
        
        {/* Animated Avatar / Icon */}
        <div className="relative shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500/30 via-sky-500/20 to-amber-500/20 border border-slate-700 flex items-center justify-center text-lg shadow-inner">
            {current.avatar}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full animate-ping" />
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-medium">
            <span className="text-slate-200 font-semibold">{current.location}</span>
            <span>•</span>
            <span>{current.timeAgo}</span>
            {current.badge && (
              <>
                <span>•</span>
                <span className="text-amber-300 font-bold">{current.badge}</span>
              </>
            )}
          </div>
          <p className="text-xs text-slate-100 font-medium truncate mt-0.5 leading-snug">
            {current.text}
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="text-slate-500 hover:text-slate-300 p-1 rounded-lg hover:bg-white/5 transition-colors shrink-0"
          title="Dismiss live feed"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
