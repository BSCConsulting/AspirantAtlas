import React, { useState, useEffect } from 'react';
import { StudyPlanDay, PhaseId, TimelineHorizon } from '../types';
import { STUDY_PLANS_BY_HORIZON } from '../data/studyPlanner';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  Award, 
  Flame, 
  RotateCcw, 
  Filter, 
  Calendar, 
  Layers, 
  Sparkles, 
  Check, 
  ChevronRight,
  TrendingUp,
  ArrowRight,
  Zap,
  Target,
  ShieldCheck
} from 'lucide-react';

interface StudyPlannerViewProps {
  showTelugu: boolean;
  onOpenTopic: (nodeId: string) => void;
  onNavigateToMains?: () => void;
  onNavigateToMocks?: () => void;
}

export const StudyPlannerView: React.FC<StudyPlannerViewProps> = ({
  showTelugu,
  onOpenTopic,
  onNavigateToMains,
  onNavigateToMocks
}) => {
  const [selectedHorizon, setSelectedHorizon] = useState<TimelineHorizon>(() => {
    return (localStorage.getItem('aspirant_study_horizon') as TimelineHorizon) || '90-days';
  });

  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aspirant_completed_tasks');
      return saved ? JSON.parse(saved) : ['task90-1-1', 'task90-1-2'];
    } catch {
      return ['task90-1-1', 'task90-1-2'];
    }
  });

  const [selectedPhase, setSelectedPhase] = useState<PhaseId>('phase1');
  const [filterMode, setFilterMode] = useState<'all' | 'pending' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('aspirant_study_horizon', selectedHorizon);
  }, [selectedHorizon]);

  useEffect(() => {
    localStorage.setItem('aspirant_completed_tasks', JSON.stringify(completedTaskIds));
  }, [completedTaskIds]);

  const toggleTask = (taskId: string) => {
    setCompletedTaskIds((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  // Get current plan based on selected horizon
  const currentPlan = STUDY_PLANS_BY_HORIZON[selectedHorizon] || STUDY_PLANS_BY_HORIZON['90-days'];

  // Phase filtering
  const phaseDays = currentPlan.filter((d) => d.phase === selectedPhase);

  // Total task statistics
  const totalTasksCount = currentPlan.reduce((acc, d) => acc + d.tasks.length, 0);
  const completedTasksCount = currentPlan.reduce((acc, d) => {
    return acc + d.tasks.filter((t) => completedTaskIds.includes(t.id)).length;
  }, 0);
  const overallProgressPct = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  // Filtered days based on pending/completed filter
  const displayedDays = phaseDays.filter((d) => {
    const isDayCompleted = d.tasks.every((t) => completedTaskIds.includes(t.id));
    if (filterMode === 'completed') return isDayCompleted;
    if (filterMode === 'pending') return !isDayCompleted;
    return true;
  });

  const horizonDetails: Record<TimelineHorizon, { name: string; telugu: string; subtitle: string; icon: React.ReactNode; badge: string }> = {
    '30-days': {
      name: '30-Day Crash Sprint',
      telugu: '30 రోజుల క్రాష్ కోర్సు',
      subtitle: 'High-velocity revision of High/Very-High weightage nodes, speed MCQs, and triage',
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      badge: '1 Month'
    },
    '90-days': {
      name: '90-Day Standard Sprint',
      telugu: '90 రోజుల సమగ్ర ప్రణాళిక',
      subtitle: 'Ideal balance of theory, daily quizzes, state specializations, and Mains writing',
      icon: <Target className="w-4 h-4 text-sky-500" />,
      badge: '3 Months (Recommended)'
    },
    '150-days': {
      name: '150-Day Foundation Track',
      telugu: '150 రోజుల విస్తృత పునాది',
      subtitle: 'Zero-knowledge to rank deep dive with NCERT building blocks and weekly revision',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
      badge: '5 Months'
    }
  };

  const getPhaseMeta = (phase: PhaseId) => {
    if (selectedHorizon === '30-days') {
      return {
        phase1: { title: 'Days 1-10: Polity Core', telugu: 'రోజులు 1-10: పాలిటీ కోర్' },
        phase2: { title: 'Days 11-20: History, Economy & State', telugu: 'రోజులు 11-20: చరిత్ర, ఆర్థికం & రాష్ట్రాలు' },
        phase3: { title: 'Days 21-30: Grand Mocks & Mains Sprint', telugu: 'రోజులు 21-30: గ్రాండ్ మాక్స్ & మెయిన్స్' }
      }[phase];
    } else if (selectedHorizon === '150-days') {
      return {
        phase1: { title: 'Days 1-50: NCERT Core Foundation', telugu: 'రోజులు 1-50: ఎన్‌సీఈఆర్‌టీ పునాది' },
        phase2: { title: 'Days 51-100: Advanced Syllabi & Specializations', telugu: 'రోజులు 51-100: అడ్వాన్స్‌డ్ సిలబస్' },
        phase3: { title: 'Days 101-150: Full Mocks & Answer Polishing', telugu: 'రోజులు 101-150: మెయిన్స్ పాలిషింగ్' }
      }[phase];
    }
    return {
      phase1: { title: 'Days 1-30: Constitutional Architecture', telugu: 'రోజులు 1-30: రాజ్యాంగ మూలాలు' },
      phase2: { title: 'Days 31-60: Economy, History & State Specializations', telugu: 'రోజులు 31-60: ఆర్థికం, చరిత్ర & రాష్ట్రాలు' },
      phase3: { title: 'Days 61-90: Mains Answer Sprint & Grand Mocks', telugu: 'రోజులు 61-90: మెయిన్స్ సాధన & మాక్స్' }
    }[phase];
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-indigo-900/40">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-300" />
              Adaptive Timeline Study Engine
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">
              Auto-Adjusts to Your Exam Date
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            {showTelugu ? 'అడాప్టివ్ టైమ్‌లైన్ & రోజువారీ సిలబస్ చెక్‌లిస్ట్' : 'Adaptive Timeline & Guided Daily Checklist'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {showTelugu
              ? 'మీ పరీక్షా సమయానికి అనుగుణంగా 30 రోజులు (క్రాష్ కోర్స్), 90 రోజులు (ప్రామాణికం), లేదా 150 రోజులు (సమగ్ర పునాది) ఎంచుకోండి. రోజువారీ పఠనం, రివిజన్ మరియు మెయిన్స్ సాధన లక్ష్యాలు దానంతటవే సర్దుబాటు అవుతాయి.'
              : 'Choose your target preparation horizon (1, 3, or 5 months). Daily tasks automatically adjust their pace, weightage priorities, and revision cycles.'}
          </p>
        </div>
      </div>

      {/* 3-Pill Horizon Pace Selector */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-indigo-600" />
            <span>Select Target Preparation Timeline Horizon</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">
            {currentPlan.length} Total Days Scheduled
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(['30-days', '90-days', '150-days'] as TimelineHorizon[]).map((horizon) => {
            const active = selectedHorizon === horizon;
            const meta = horizonDetails[horizon];

            return (
              <button
                key={horizon}
                onClick={() => {
                  setSelectedHorizon(horizon);
                  setSelectedPhase('phase1');
                }}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  active
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-sm ring-1 ring-indigo-500/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center space-x-2">
                    {meta.icon}
                    <span className="font-extrabold text-xs text-slate-900">
                      {showTelugu ? meta.telugu : meta.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    active ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {meta.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {meta.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress & Metric Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Tasks Completed
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              {completedTasksCount} / {totalTasksCount}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Micro-tasks checked</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Timeline Progress
            </div>
            <div className="text-2xl font-extrabold text-emerald-600 mt-1">
              {overallProgressPct}%
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Syllabus coverage index</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Active Phase
            </div>
            <div className="text-sm font-extrabold text-indigo-900 mt-1 line-clamp-1">
              {getPhaseMeta(selectedPhase).title}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {showTelugu ? getPhaseMeta(selectedPhase).telugu : `${phaseDays.length} Days in Phase`}
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
        </div>

      </div>

      {/* Phase Selection Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {(['phase1', 'phase2', 'phase3'] as PhaseId[]).map((phaseId) => {
            const active = selectedPhase === phaseId;
            const pMeta = getPhaseMeta(phaseId);
            return (
              <button
                key={phaseId}
                onClick={() => setSelectedPhase(phaseId)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                  active
                    ? 'bg-white text-indigo-950 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{pMeta.title.split(':')[0]}</span>
                <span className="hidden md:inline font-normal text-slate-400">• {pMeta.title.split(':')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Filter modes: All, Pending, Completed */}
        <div className="flex items-center space-x-1.5 text-xs">
          {(['all', 'pending', 'completed'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilterMode(mode)}
              className={`px-3 py-1.5 rounded-lg font-semibold uppercase tracking-wider text-[10px] transition-colors ${
                filterMode === mode
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Days List */}
      <div className="space-y-6">
        {displayedDays.map((day) => {
          const completedCount = day.tasks.filter((t) => completedTaskIds.includes(t.id)).length;
          const isAllDayCompleted = completedCount === day.tasks.length;

          return (
            <div
              key={day.dayNumber}
              className={`bg-white rounded-2xl border transition-all p-6 sm:p-7 space-y-5 shadow-sm ${
                isAllDayCompleted
                  ? 'border-emerald-200 bg-emerald-50/20'
                  : 'border-slate-200 hover:border-indigo-300'
              }`}
            >
              {/* Day Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                    isAllDayCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  }`}>
                    D{day.dayNumber}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">
                      {showTelugu && day.titleTelugu ? day.titleTelugu : day.title}
                    </h3>
                    <p className="text-xs text-slate-500">{day.subject}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    isAllDayCompleted
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {completedCount} / {day.tasks.length} Done
                  </span>
                </div>
              </div>

              {/* Day Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {day.description}
              </p>

              {/* Tasks Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {day.tasks.map((task) => {
                  const isDone = completedTaskIds.includes(task.id);

                  let typeBadge = 'bg-slate-100 text-slate-700';
                  if (task.type === 'reading') typeBadge = 'bg-sky-50 text-sky-700 border-sky-200';
                  if (task.type === 'revision') typeBadge = 'bg-purple-50 text-purple-700 border-purple-200';
                  if (task.type === 'quiz') typeBadge = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                  if (task.type === 'mains_practice') typeBadge = 'bg-amber-50 text-amber-700 border-amber-200';

                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start space-x-3 ${
                        isDone
                          ? 'bg-emerald-50/60 border-emerald-200 text-slate-500 line-through'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50/80'
                      }`}
                    >
                      <button
                        type="button"
                        className="shrink-0 mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors"
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300" />
                        )}
                      </button>

                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="font-semibold leading-snug break-words">
                          {task.title}
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${typeBadge}`}>
                            {task.type.replace('_', ' ')}
                          </span>
                          <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                            <Clock className="w-3 h-3" /> {task.durationMinutes}m
                          </span>

                          {task.linkedNodeId && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenTopic(task.linkedNodeId!);
                              }}
                              className="text-[10px] font-bold text-sky-600 hover:text-sky-800 flex items-center gap-0.5 bg-sky-50 px-2 py-0.5 rounded border border-sky-200"
                            >
                              <span>Hub</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
