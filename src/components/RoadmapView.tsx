import React, { useState } from 'react';
import { SyllabusNode, ExamId, PhaseId, AspirantStage } from '../types';
import { 
  CheckCircle, Clock, Search, Sparkles, Filter, 
  ArrowRight, Shield, Layers, BookOpen, Compass, Check,
  Zap, Award, TrendingUp
} from 'lucide-react';
import { SmartCompassBanner } from './SmartCompassBanner';

interface RoadmapViewProps {
  nodes: SyllabusNode[];
  selectedExam: ExamId;
  completedNodeIds: string[];
  onToggleComplete: (nodeId: string) => void;
  onOpenTopic: (node: SyllabusNode) => void;
  showTelugu: boolean;
  aspirantStage?: AspirantStage;
  onOpenProfiler?: () => void;
  quizScores?: Record<string, { score: number; total: number }>;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  nodes,
  selectedExam,
  completedNodeIds,
  onToggleComplete,
  onOpenTopic,
  showTelugu,
  aspirantStage = 'beginner',
  onOpenProfiler = () => {},
  quizScores = {}
}) => {
  const [selectedPhase, setSelectedPhase] = useState<PhaseId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCoreFocusOnly, setIsCoreFocusOnly] = useState<boolean>(aspirantStage === 'beginner');

  // Filter nodes by selected exam
  const examFilteredNodes = nodes.filter(n => n.examScope.includes(selectedExam));

  // Filter by phase and core focus mode
  const phaseFilteredNodes = isCoreFocusOnly
    ? examFilteredNodes.filter(n => n.phase === 'phase1')
    : selectedPhase === 'all' 
    ? examFilteredNodes 
    : examFilteredNodes.filter(n => n.phase === selectedPhase);

  // Search filter
  const displayedNodes = phaseFilteredNodes.filter(n => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      (n.titleTelugu && n.titleTelugu.toLowerCase().includes(q)) ||
      n.subject.toLowerCase().includes(q) ||
      n.keyConcepts.some(c => c.toLowerCase().includes(q))
    );
  });

  const totalExamNodes = examFilteredNodes.length;
  const completedExamNodes = examFilteredNodes.filter(n => completedNodeIds.includes(n.id)).length;
  const progressPercent = totalExamNodes > 0 ? Math.round((completedExamNodes / totalExamNodes) * 100) : 0;

  // Domain theme helper
  const getDomainTheme = (subject: string, isState?: boolean) => {
    if (isState) {
      return {
        stripe: 'from-indigo-500 to-purple-600',
        badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        hoverBorder: 'hover:border-indigo-400',
        accentText: 'text-indigo-600'
      };
    }
    const lower = subject.toLowerCase();
    if (lower.includes('polity') || lower.includes('constitution')) {
      return {
        stripe: 'from-sky-500 to-blue-600',
        badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
        hoverBorder: 'hover:border-sky-400',
        accentText: 'text-sky-600'
      };
    }
    if (lower.includes('history')) {
      return {
        stripe: 'from-amber-500 to-orange-500',
        badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
        hoverBorder: 'hover:border-amber-400',
        accentText: 'text-amber-600'
      };
    }
    if (lower.includes('economy')) {
      return {
        stripe: 'from-emerald-500 to-teal-600',
        badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        hoverBorder: 'hover:border-emerald-400',
        accentText: 'text-emerald-600'
      };
    }
    return {
      stripe: 'from-teal-500 to-cyan-600',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      hoverBorder: 'hover:border-teal-400',
      accentText: 'text-teal-600'
    };
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Smart Compass: Guided Next Best Action & Focus Mode */}
      <SmartCompassBanner
        stage={aspirantStage}
        selectedExam={selectedExam}
        completedNodeIds={completedNodeIds}
        nodes={examFilteredNodes}
        onOpenTopic={onOpenTopic}
        onOpenProfiler={onOpenProfiler}
        isCoreFocusOnly={isCoreFocusOnly}
        onToggleCoreFocus={() => setIsCoreFocusOnly(!isCoreFocusOnly)}
        showTelugu={showTelugu}
      />

      {/* Luminous Atmospheric Hero Canvas */}
      <div className="relative rounded-3xl overflow-hidden shadow-elevation-3 border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-10">
        
        {/* Subtle decorative radiant glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-sky-300 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-400/30 flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                Active Master Roadmap
              </span>
              <span className="text-xs text-slate-300 font-semibold px-2 py-0.5 rounded-lg bg-white/5 border border-white/10">
                {selectedExam === 'upsc' ? 'Union Public Service Commission (CSE)' : selectedExam === 'appsc' ? 'Andhra Pradesh Public Service Commission' : 'Telangana Public Service Commission (TGPSC)'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {selectedExam === 'upsc' && 'UPSC Civil Services Integrated Track'}
              {selectedExam === 'appsc' && 'APPSC Group-1 & 2 Dual-Track Master Roadmap'}
              {selectedExam === 'tspsc' && 'TSPSC Group-1 & 2 Dual-Track Master Roadmap'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Synthesized visual curriculum covering the 70% universal GS bedrock alongside high-yield state-specific papers. Every node links to primary resources, infographics, quizzes, and Mains answer writing.
            </p>
          </div>

          {/* Circular Visual Mastery Gauge Tile */}
          <div className="glass-card !bg-white/10 !border-white/15 rounded-2xl p-5 shrink-0 min-w-[240px] shadow-elevation-2 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Syllabus Mastery</span>
              <span className="text-xs font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-400/30 font-mono">
                {progressPercent}%
              </span>
            </div>

            <div className="w-full bg-slate-900/60 h-3 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div 
                className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 h-full rounded-full transition-all duration-700 shadow-glow-emerald"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1 border-t border-white/10">
              <span className="font-semibold">{completedExamNodes} completed</span>
              <span className="text-slate-400">{totalExamNodes} total modules</span>
            </div>
          </div>
        </div>

      </div>

      {/* Control Bar: Phase Selector & Search */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-elevation-1 p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Phase Pills Segmented Control */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
          <button
            onClick={() => setSelectedPhase('all')}
            className={`btn-tactile px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedPhase === 'all'
                ? 'bg-slate-900 text-white shadow-elevation-2 font-black'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            All Phases ({examFilteredNodes.length})
          </button>

          {(['phase1', 'phase2', 'phase3'] as PhaseId[]).map((phase) => {
            const count = examFilteredNodes.filter(n => n.phase === phase).length;
            const active = selectedPhase === phase;
            return (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`btn-tactile px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  active
                    ? 'bg-slate-900 text-white shadow-elevation-2 font-black'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{phase === 'phase1' ? 'Phase 1: Core' : phase === 'phase2' ? 'Phase 2: Advanced' : 'Phase 3: State'}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topics, articles, concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
          />
        </div>

      </div>

      {/* Tactile Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedNodes.map((node) => {
          const isDone = completedNodeIds.includes(node.id);
          const theme = getDomainTheme(node.subject, node.isStateExclusive);

          return (
            <div
              key={node.id}
              onClick={() => onOpenTopic(node)}
              className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden shadow-elevation-2 hover:-translate-y-1 hover:shadow-elevation-hover ${
                isDone
                  ? 'border-emerald-300/80 bg-emerald-50/15 ring-1 ring-emerald-400/20'
                  : `border-slate-200/90 ${theme.hoverBorder}`
              }`}
            >
              {/* Top Accent Gradient Stripe */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${theme.stripe}`} />

              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Header row: Subject badge + High-Yield Weightage + Time */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg border shadow-2xs ${theme.badgeBg}`}>
                      {node.subject}
                    </span>

                    {/* High Yield Weightage Tag */}
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border flex items-center space-x-1 shadow-2xs ${
                      node.weightage === 'Very High'
                        ? 'bg-amber-50 text-amber-800 border-amber-200/80'
                        : node.weightage === 'High'
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200/80'
                        : 'bg-slate-50 text-slate-600 border-slate-200/80'
                    }`}>
                      <Zap className={`w-2.5 h-2.5 ${node.weightage === 'Very High' ? 'text-amber-500 fill-amber-500' : node.weightage === 'High' ? 'text-indigo-500 fill-indigo-500' : 'text-slate-400'}`} />
                      <span>{node.weightage === 'Very High' ? '★ High Yield' : node.weightage === 'High' ? 'Core Topic' : 'Standard'}</span>
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 flex items-center space-x-1 shrink-0 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{node.estMinutes}m</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className={`font-extrabold text-base text-slate-900 group-hover:${theme.accentText} transition-colors leading-snug tracking-tight`}>
                    {node.title}
                  </h3>
                  {showTelugu && node.titleTelugu && (
                    <p className="text-xs text-sky-800 font-semibold mt-1 leading-normal font-sans">
                      {node.titleTelugu}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {node.description}
                </p>

                {/* 3-Stage Milestone Progress Pips */}
                <div className="bg-slate-50/80 rounded-xl p-1.5 border border-slate-200/70 grid grid-cols-3 gap-1.5 text-center text-[10px] font-semibold">
                  {/* Pip 1: Concept */}
                  <div className={`flex items-center justify-center space-x-1 py-1 px-1 rounded-lg border transition-all ${
                    isDone 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold' 
                      : 'bg-white text-slate-500 border-slate-200/60'
                  }`}>
                    <CheckCircle className={`w-3 h-3 shrink-0 ${isDone ? 'text-emerald-600 fill-emerald-100' : 'text-slate-300'}`} />
                    <span className="truncate">{isDone ? 'Read ✓' : 'Concept'}</span>
                  </div>

                  {/* Pip 2: MCQ Drill */}
                  <div className={`flex items-center justify-center space-x-1 py-1 px-1 rounded-lg border transition-all ${
                    quizScores?.[node.id]
                      ? 'bg-sky-50 text-sky-800 border-sky-200 font-bold'
                      : 'bg-white text-slate-500 border-slate-200/60'
                  }`}>
                    <Award className={`w-3 h-3 shrink-0 ${quizScores?.[node.id] ? 'text-sky-600' : 'text-slate-300'}`} />
                    <span className="truncate">
                      {quizScores?.[node.id] ? `${quizScores[node.id].score}/${quizScores[node.id].total} Qs` : 'MCQ Drill'}
                    </span>
                  </div>

                  {/* Pip 3: Mains PYQ */}
                  <div className="flex items-center justify-center space-x-1 py-1 px-1 rounded-lg border bg-white text-slate-500 border-slate-200/60 hover:text-indigo-600 transition-colors">
                    <TrendingUp className="w-3 h-3 shrink-0 text-slate-300" />
                    <span className="truncate">Mains PYQ</span>
                  </div>
                </div>

                {/* Key Concepts Thematic Chips */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {node.keyConcepts.slice(0, 3).map((concept, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-medium bg-slate-100/70 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/60"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Footer */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                
                {/* Complete checkbox */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleComplete(node.id);
                  }}
                  className={`btn-tactile flex items-center space-x-1.5 text-xs font-bold transition-all px-3 py-1.5 rounded-xl border ${
                    isDone 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 shadow-2xs' 
                      : 'text-slate-600 bg-white border-slate-200/90 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <CheckCircle className={`w-3.5 h-3.5 ${isDone ? 'text-emerald-600 fill-emerald-100' : 'text-slate-300'}`} />
                  <span>{isDone ? 'Completed' : 'Mark Done'}</span>
                </button>

                {/* Open Hub Button */}
                <button
                  type="button"
                  onClick={() => onOpenTopic(node)}
                  className="btn-tactile flex items-center space-x-1.5 px-3.5 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs group/btn"
                >
                  <span>Explore Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
