import React from 'react';
import { SyllabusNode, AspirantStage, ExamId } from '../types';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  Award, 
  Filter, 
  RotateCcw,
  SlidersHorizontal,
  Layers,
  ChevronRight
} from 'lucide-react';

interface SmartCompassBannerProps {
  stage: AspirantStage;
  selectedExam: ExamId;
  completedNodeIds: string[];
  nodes: SyllabusNode[];
  onOpenTopic: (node: SyllabusNode) => void;
  onOpenProfiler: () => void;
  isCoreFocusOnly: boolean;
  onToggleCoreFocus: () => void;
  showTelugu: boolean;
  onLaunchTopicDrill?: (topicTag: string) => void;
  onLaunchMainsTopic?: (topicTitle: string) => void;
}

export const SmartCompassBanner: React.FC<SmartCompassBannerProps> = ({
  stage,
  selectedExam,
  completedNodeIds,
  nodes,
  onOpenTopic,
  onOpenProfiler,
  isCoreFocusOnly,
  onToggleCoreFocus,
  showTelugu,
  onLaunchTopicDrill,
  onLaunchMainsTopic
}) => {
  // Find the next recommended bedrock node
  // Priority order: Polity first, then Modern History, then Economy, then Environment, then State Special
  const bedrockPriorityTags = [
    'Constitutional Framework',
    'Fundamental Rights & Duties',
    'Indian Polity & Governance',
    'Modern Indian History',
    'Indian Economy & Budget',
    'Environment & Ecology',
    'Andhra Pradesh Reorganisation Act'
  ];

  const uncompletedNodes = nodes.filter(n => !completedNodeIds.includes(n.id));

  // Find the best match
  let nextNode = uncompletedNodes.find(n => 
    bedrockPriorityTags.some(tag => n.title.toLowerCase().includes(tag.toLowerCase()) || n.subject.toLowerCase().includes('polity'))
  );

  if (!nextNode && uncompletedNodes.length > 0) {
    nextNode = uncompletedNodes[0];
  }

  // Fallback if all are completed
  const targetNode = nextNode || nodes[0];

  const completedCount = nodes.filter(n => completedNodeIds.includes(n.id)).length;
  const progressPercent = nodes.length > 0 ? Math.round((completedCount / nodes.length) * 100) : 0;

  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-elevation-2 border border-indigo-800/40 relative overflow-hidden animate-fadeIn">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Side: Smart Recommendation & Flywheel Breadcrumb */}
        <div className="space-y-3.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Compass className="w-3 h-3 fill-slate-950" />
              Aspirant Compass • Next High-Yield Action
            </span>

            <span className="bg-white/10 text-indigo-200 border border-white/10 text-[11px] px-2.5 py-0.5 rounded-full font-mono font-semibold">
              Stage: {stage.toUpperCase()} ({progressPercent}% Anchor Complete)
            </span>

            <button
              onClick={onOpenProfiler}
              className="text-[11px] text-indigo-300 hover:text-white underline font-semibold ml-1 transition-colors"
              title="Change target exam, timeline runway, or stage"
            >
              Recalibrate Plan
            </button>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
              {showTelugu ? 'సిఫార్సు చేయబడిన తదుపరి అడుగు:' : 'Recommended Next Step:'}{' '}
              <span className="text-amber-300">
                {showTelugu && targetNode?.titleTelugu ? targetNode.titleTelugu : targetNode?.title}
              </span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              {showTelugu
                ? 'స్టాటిక్ పునాదిని బలోపేతం చేయండి. కాన్సెప్ట్ నోడ్ చదివిన వెంటనే 5-ప్రశ్నల ప్రిలిమ్స్ డ్రిల్ మరియు 1 మెయిన్స్ ప్రశ్నను సాధన చేయండి.'
                : 'Follow the ranker loop: Anchor on core static theory first, execute a 5-question speed elimination drill, and validate with Gemini AI Mains grading.'}
            </p>
          </div>

          {/* 3-Step Flywheel Breadcrumb */}
          <div className="flex items-center space-x-2 text-[11px] text-slate-300 pt-1">
            <div className="flex items-center space-x-1.5 font-bold text-sky-300 bg-sky-950/60 px-2.5 py-1 rounded-lg border border-sky-800/50">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>1. Study Concept</span>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <div className="flex items-center space-x-1.5 font-bold text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-800/50">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>2. 5-Q Prelims Drill</span>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <div className="flex items-center space-x-1.5 font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/50">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>3. Gemini Mains AI</span>
            </div>
          </div>
        </div>

        {/* Right Side: Action Trigger & Core Focus Mode Toggle */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-center gap-3 shrink-0">
          
          {/* Primary Action Button */}
          {targetNode && (
            <button
              onClick={() => onOpenTopic(targetNode)}
              className="btn-tactile flex items-center justify-center space-x-2 px-6 py-3 rounded-2xl text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-elevation-1 hover:shadow-glow-amber transition-all"
            >
              <span>Explore {targetNode.subject.split(' ')[0]} Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {/* Focus Mode Pill Toggle */}
          <button
            onClick={onToggleCoreFocus}
            className={`btn-tactile flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              isCoreFocusOnly
                ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300 shadow-xs'
                : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10'
            }`}
            title="Toggle Focus Mode to display only Phase 1 Core Bedrock nodes and remove cognitive clutter"
          >
            <Filter className="w-3.5 h-3.5 text-indigo-300" />
            <span>
              {isCoreFocusOnly ? 'Focus Mode Active (Phase 1 Only)' : 'Focus Mode: Filter Phase 1 Core'}
            </span>
          </button>

        </div>

      </div>
    </div>
  );
};
