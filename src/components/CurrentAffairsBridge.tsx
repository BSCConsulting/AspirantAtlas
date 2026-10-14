import React, { useState } from 'react';
import { CurrentAffairsItem, ExamId } from '../types';
import { CURRENT_AFFAIRS_ITEMS } from '../data/currentAffairs';
import { 
  Compass, 
  ExternalLink, 
  Calendar, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Scale, 
  Filter,
  Search,
  Tag,
  Zap,
  Flame,
  Check
} from 'lucide-react';

interface CurrentAffairsBridgeProps {
  showTelugu: boolean;
  selectedExam: ExamId;
  onOpenTopic: (nodeId: string) => void;
  onOpenDailyDrill?: () => void;
  onNavigateToMains?: (questionText: string, topic: string) => void;
  onNavigateToMocks?: (topicTag: string) => void;
}

export const CurrentAffairsBridge: React.FC<CurrentAffairsBridgeProps> = ({
  showTelugu,
  selectedExam,
  onOpenTopic,
  onOpenDailyDrill,
  onNavigateToMains,
  onNavigateToMocks
}) => {
  const [filterExam, setFilterExam] = useState<ExamId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDigestIdx, setActiveDigestIdx] = useState<number>(0);

  const filteredItems = CURRENT_AFFAIRS_ITEMS.filter((item) => {
    const matchesExam = filterExam === 'all' || item.examScope.includes(filterExam);
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.linkedTopicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.titleTelugu && item.titleTelugu.includes(searchQuery));
    return matchesExam && matchesSearch;
  });

  const topDigestItems = CURRENT_AFFAIRS_ITEMS.slice(0, 4);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-teal-900/40">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-teal-300" />
              Daily Editorial-to-Syllabus Bridge
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">
              Zero Passive Reading
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            {showTelugu ? 'ఎడిటోరియల్ - సిలబస్ అనుసంధాన కేంద్రం' : 'Daily Editorial-to-Syllabus Bridge'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {showTelugu
              ? 'ప్రతిరోజు వచ్చే సమకాలీన అంశాలు, సుప్రీంకోర్టు తీర్పులు, ప్రభుత్వ కమిటీలను నేరుగా సిలబస్ అంశాలతో అనుసంధానించండి. ప్రతి అంశానికి ప్రిలిమ్స్ పాయింటర్ మరియు మెయిన్స్ ప్రశ్నల మోడల్స్ అందుబాటులో ఉన్నాయి.'
              : 'Don\'t read news passively. Every high-yield current event is structurally anchored directly to its constitutional article and syllabus node with dedicated Prelims pointers and Mains question hooks.'}
          </p>
        </div>
      </div>

      {/* Morning 3-Minute Digest Widget */}
      <div className="bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 rounded-2xl border border-amber-200/80 shadow-sm p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <span>Morning 3-Minute Exam Digest</span>
                <span className="bg-amber-200 text-amber-900 text-[10px] px-1.5 py-0.2 rounded font-bold">Today</span>
              </div>
              <div className="text-xs text-slate-500">Essential high-yield takeaways for Prelims & Mains</div>
            </div>
          </div>

          {onOpenDailyDrill && (
            <button
              onClick={onOpenDailyDrill}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-sm transition-all"
            >
              <Flame className="w-3.5 h-3.5 fill-white" />
              <span>Take Today's Drill</span>
            </button>
          )}
        </div>

        {/* Digest Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {topDigestItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveDigestIdx(idx)}
              className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                activeDigestIdx === idx
                  ? 'border-amber-500 bg-white shadow-sm ring-1 ring-amber-400 font-bold text-slate-900'
                  : 'border-slate-200/80 bg-white/60 hover:bg-white text-slate-600'
              }`}
            >
              <div className="text-[10px] uppercase font-bold text-amber-700">Pointer {idx + 1}</div>
              <div className="truncate text-[11px] mt-0.5">{item.title}</div>
            </button>
          ))}
        </div>

        {/* Active Digest Card */}
        {topDigestItems[activeDigestIdx] && (
          <div className="bg-white rounded-xl p-4 border border-amber-200/60 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-sm text-slate-900 line-clamp-1">
                {showTelugu && topDigestItems[activeDigestIdx].titleTelugu 
                  ? topDigestItems[activeDigestIdx].titleTelugu 
                  : topDigestItems[activeDigestIdx].title}
              </h4>
              <button
                onClick={() => onOpenTopic(topDigestItems[activeDigestIdx].linkedNodeId)}
                className="text-[11px] font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 shrink-0 bg-teal-50 px-2.5 py-0.5 rounded-lg border border-teal-200"
              >
                <span>Syllabus Hub</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              {topDigestItems[activeDigestIdx].summary}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs pt-1 border-t border-slate-100">
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                ⚡ Prelims: {topDigestItems[activeDigestIdx].prelimsPointer.slice(0, 100)}...
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Exam Toggle */}
        <div className="flex items-center space-x-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          {(['all', 'upsc', 'appsc', 'tspsc'] as (ExamId | 'all')[]).map((exam) => (
            <button
              key={exam}
              onClick={() => setFilterExam(exam)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                filterExam === exam
                  ? 'bg-white text-teal-900 shadow-sm border border-slate-200 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {exam === 'all' ? 'All Feeds' : exam.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={showTelugu ? 'అంశాన్ని లేదా కీవర్డ్‌ను వెతకండి...' : 'Search current affairs, court verdicts, articles...'}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
        </div>

      </div>

      {/* Current Affairs Cards Feed */}
      <div className="space-y-6">
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-sm">
            No current affairs items found matching your filters.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-md transition-all p-6 sm:p-7 space-y-5"
            >
              {/* Header: Date, Source & Syllabus Link Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="font-medium text-slate-700">{item.source}</span>
                </div>

                <button
                  onClick={() => onOpenTopic(item.linkedNodeId)}
                  className="flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 transition-colors"
                  title="Explore related syllabus node in Interactive Hub"
                >
                  <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                  <span>Syllabus: {item.linkedTopicTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Title & Telugu translation */}
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  {showTelugu && item.titleTelugu ? item.titleTelugu : item.title}
                </h3>
                {showTelugu && item.titleTelugu && (
                  <p className="text-xs text-slate-500 italic mt-1">{item.title}</p>
                )}
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.summary}
              </p>

              {/* High Yield Takeaways */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  High-Yield Analytical Pointers:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {item.highYieldPoints.map((pt, pidx) => (
                    <li key={pidx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dual Exam Callouts: Prelims Pointer & Mains Hook */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                {/* Prelims Pointer */}
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 flex flex-col justify-between space-y-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-900">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Prelims High-Yield Fact</span>
                    </div>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      {item.prelimsPointer}
                    </p>
                  </div>
                  {onNavigateToMocks && (
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onNavigateToMocks(item.linkedTopicTitle)}
                        className="btn-tactile flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-black bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-all"
                      >
                        <Zap className="w-3.5 h-3.5 fill-white" />
                        <span>Practice MCQs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Mains Hook */}
                <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-xl p-4 flex flex-col justify-between space-y-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-indigo-900">
                      <Award className="w-4 h-4 text-indigo-600" />
                      <span>Mains Question Hook</span>
                    </div>
                    <p className="text-xs text-indigo-950 leading-relaxed italic">
                      {item.mainsQuestionHook}
                    </p>
                  </div>
                  {onNavigateToMains && (
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onNavigateToMains(item.mainsQuestionHook, item.linkedTopicTitle)}
                        className="btn-tactile flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Grade Answer with Gemini</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};
