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
  Check,
  ChevronDown,
  ChevronUp,
  BookMarked,
  GraduationCap
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
  const [expandedMainsIds, setExpandedMainsIds] = useState<Record<string, boolean>>({});

  const toggleExpandMains = (id: string) => {
    setExpandedMainsIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
        {topDigestItems[activeDigestIdx] && (() => {
          const currentDigest = topDigestItems[activeDigestIdx];
          const isMainsExpanded = !!expandedMainsIds[`digest-${currentDigest.id}`];

          return (
            <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                    Lead Editorial Pointer
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{currentDigest.date}</span>
                </div>
                <button
                  onClick={() => onOpenTopic(currentDigest.linkedNodeId)}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 shrink-0 bg-teal-50 hover:bg-teal-100 px-3 py-1 rounded-xl border border-teal-200 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                  <span>Syllabus: {currentDigest.linkedTopicTitle}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div>
                <h4 className="font-extrabold text-base text-slate-900 leading-snug">
                  {showTelugu && currentDigest.titleTelugu 
                    ? currentDigest.titleTelugu 
                    : currentDigest.title}
                </h4>
                {showTelugu && currentDigest.titleTelugu && (
                  <p className="text-xs text-slate-400 italic mt-0.5">{currentDigest.title}</p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                {currentDigest.summary}
              </p>

              {/* Dual Focus: Prelims Fact & Mains Question Hook */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                
                {/* Full Untruncated Prelims Fact */}
                <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-xs font-black text-amber-900">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Prelims High-Yield Fact</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed font-medium">
                    {currentDigest.prelimsPointer}
                  </p>
                </div>

                {/* Mains Question Hook */}
                <div className="bg-indigo-50/90 border border-indigo-200/90 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-xs font-black text-indigo-900">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Mains Question Hook (15M / 250W)</span>
                  </div>
                  <p className="text-xs text-indigo-950 leading-relaxed italic font-medium">
                    {currentDigest.mainsQuestionHook}
                  </p>
                </div>
              </div>

              {/* Interactive Mains Analytical Blueprint & Dimensions Drawer */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpandMains(`digest-${currentDigest.id}`)}
                    className="btn-tactile text-xs font-bold text-slate-700 hover:text-indigo-900 bg-slate-100/90 hover:bg-slate-200/70 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center space-x-1.5 transition-all"
                  >
                    <BookMarked className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{isMainsExpanded ? 'Hide Mains 250-Word Structure' : 'Study Mains Answer Blueprint & Dimensions'}</span>
                    {isMainsExpanded ? <ChevronUp className="w-3.5 h-3.5 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 ml-1" />}
                  </button>

                  {onNavigateToMains && (
                    <button
                      onClick={() => onNavigateToMains(currentDigest.mainsQuestionHook, currentDigest.linkedTopicTitle)}
                      className="btn-tactile flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Attempt in Mains Studio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Expanded Mains Answer Fodder */}
                {isMainsExpanded && (
                  <div className="mt-3.5 p-4 bg-gradient-to-br from-indigo-50/50 via-white to-slate-50 rounded-2xl border border-indigo-200/80 shadow-inner space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-indigo-600" />
                        Examiner's Expected Value Points & Case Precedents:
                      </span>
                      <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-full">
                        GS-2 / GS-3 Focus
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-700">
                      {currentDigest.highYieldPoints.map((pt, pidx) => (
                        <li key={pidx} className="flex items-start space-x-2 bg-white/80 p-2.5 rounded-lg border border-slate-100">
                          <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                            {pidx + 1}
                          </span>
                          <span className="leading-relaxed font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200/80 text-xs text-amber-950 flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-900 block font-bold">Recommended 250-Word Structure:</strong>
                        <span className="leading-relaxed">
                          <strong>Intro:</strong> Define substantive equality & state the Davinder Singh (2024) overruling of Chinnaiah. • 
                          <strong>Body:</strong> Pro-sub-classification (combating intra-group inequality) vs Concerns (creamy layer debate, empirical data tests). • 
                          <strong>Conclusion:</strong> Affirm statutory commissions and objective criteria to preserve social cohesion.
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
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
                <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-xl p-4 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-indigo-900">
                      <GraduationCap className="w-4 h-4 text-indigo-600" />
                      <span>Mains Question Hook (15 Marks)</span>
                    </div>
                    <p className="text-xs text-indigo-950 leading-relaxed italic font-medium">
                      {item.mainsQuestionHook}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-indigo-100">
                    <button
                      onClick={() => toggleExpandMains(item.id)}
                      className="btn-tactile text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-white/80 hover:bg-white px-2.5 py-1 rounded-lg border border-indigo-200 flex items-center space-x-1 transition-all"
                    >
                      <BookMarked className="w-3 h-3 text-indigo-600" />
                      <span>{expandedMainsIds[item.id] ? 'Hide Blueprint' : 'Mains Blueprint'}</span>
                      {expandedMainsIds[item.id] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {onNavigateToMains && (
                      <button
                        onClick={() => onNavigateToMains(item.mainsQuestionHook, item.linkedTopicTitle)}
                        className="btn-tactile flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Grade Answer</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Expanded Blueprint in Feed Card */}
                  {expandedMainsIds[item.id] && (
                    <div className="p-3 bg-white/90 rounded-xl border border-indigo-200 text-xs text-slate-700 space-y-2 animate-fadeIn">
                      <div className="font-bold text-indigo-900 text-[11px] uppercase tracking-wider">
                        Core Dimensions to Address in 250 Words:
                      </div>
                      <ul className="space-y-1 text-slate-600">
                        {item.highYieldPoints.map((pt, pidx) => (
                          <li key={pidx} className="flex items-start space-x-1.5">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
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
