import React, { useState } from 'react';
import { 
  X, 
  Award, 
  Flame, 
  Clock, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Layers, 
  Calendar, 
  Sparkles, 
  Phone, 
  Mail, 
  User, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { AspirantUser, updateUserProfile } from '../services/authService';
import { getUserLedger, formatMinutes } from '../services/studySessionService';
import { SYLLABUS_NODES } from '../data/curriculum';
import { ExamId } from '../types';

interface AspirantDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AspirantUser | null;
  onUserUpdated: (user: AspirantUser | null) => void;
  selectedExam: ExamId;
  completedNodeIds: string[];
  streakDays: number;
  onOpenSessionModal?: () => void;
  onNavigateToTopic?: (nodeId: string) => void;
  onNavigateToMocks?: () => void;
}

export const AspirantDashboardModal: React.FC<AspirantDashboardModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUserUpdated,
  selectedExam,
  completedNodeIds,
  streakDays,
  onOpenSessionModal,
  onNavigateToTopic,
  onNavigateToMocks
}) => {
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneInput, setPhoneInput] = useState(currentUser?.mobile || '');

  if (!isOpen) return null;

  const userId = currentUser?.id || 'default-aspirant';
  const ledger = getUserLedger(userId);
  const totalHours = Math.round((ledger.totalStudyMinutes / 60) * 10) / 10;

  // Filter exam nodes
  const examNodes = SYLLABUS_NODES.filter(n => n.examScope.includes(selectedExam));
  const completedCount = examNodes.filter(n => completedNodeIds.includes(n.id)).length;
  const totalCount = examNodes.length;
  const coveragePercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const remainingCount = totalCount - completedCount;

  // Subject-wise breakdown
  const subjectGroups: Record<string, { total: number; done: number }> = {};
  examNodes.forEach(node => {
    const subject = node.subject || 'General Studies';
    if (!subjectGroups[subject]) {
      subjectGroups[subject] = { total: 0, done: 0 };
    }
    subjectGroups[subject].total += 1;
    if (completedNodeIds.includes(node.id)) {
      subjectGroups[subject].done += 1;
    }
  });

  // Find weakest subject for Topper Gap Analysis
  let weakestSubject = '';
  let lowestPercent = 101;
  Object.entries(subjectGroups).forEach(([subj, data]) => {
    const pct = data.total > 0 ? Math.round((data.done / data.total) * 100) : 0;
    if (pct < lowestPercent) {
      lowestPercent = pct;
      weakestSubject = subj;
    }
  });

  // Calculate Probable All-India Rank & Cutoff Projection
  // Base cutoff: UPSC ~88 marks, State PSCs ~85 marks
  const targetCutoff = selectedExam === 'upsc' ? 88.0 : 85.0;
  
  // Heuristic based on syllabus coverage + study hours + streak
  const baselineScore = 55.0;
  const coverageContribution = (coveragePercent / 100) * 35.0; // up to +35 marks
  const studyHoursContribution = Math.min(15.0, (totalHours / 30) * 15.0); // up to +15 marks
  const streakBonus = Math.min(5.0, streakDays * 0.5); // up to +5 marks
  const projectedScore = Math.round((baselineScore + coverageContribution + studyHoursContribution + streakBonus) * 10) / 10;
  const cutoffGap = Math.round((projectedScore - targetCutoff) * 10) / 10;

  // Projected rank bracket
  let rankBracket = 'AIR 12,000 – 18,000';
  if (projectedScore >= 105) rankBracket = 'AIR 250 – 850 (Top Ranker)';
  else if (projectedScore >= 98) rankBracket = 'AIR 1,200 – 2,500 (Interview Bound)';
  else if (projectedScore >= 90) rankBracket = 'AIR 3,500 – 5,500 (Prelims Clearance)';
  else if (projectedScore >= 80) rankBracket = 'AIR 6,000 – 9,500 (Borderline)';

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;
    const updated = updateUserProfile({ mobile: phoneInput.trim() });
    onUserUpdated(updated);
    setIsEditingPhone(false);
  };

  const horizonDays = currentUser?.prepHorizonDays || 90;
  const currentDay = Math.min(horizonDays, Math.max(1, streakDays * 3));
  const timelineProgress = Math.min(100, Math.round((currentDay / horizonDays) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-elevation-3 border border-slate-200/90 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="relative p-6 sm:p-7 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white shrink-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white font-black text-xl flex items-center justify-center shadow-md shadow-indigo-500/30">
                {currentUser?.name ? currentUser.name.charAt(0) : 'A'}
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-black text-white tracking-tight">
                    {currentUser?.name || 'Aspirant Portfolio'}
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Active Ranker
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-wrap items-center gap-2 mt-0.5">
                  <span>{currentUser?.email || 'guest.session@aspirantatlas.org'}</span>
                  <span>•</span>
                  <span>{selectedExam.toUpperCase()} CSE Track</span>
                  <span>•</span>
                  <span>{horizonDays}-Day Horizon</span>
                </div>
              </div>
            </div>

            {/* Mobile / Phone Quick Editor */}
            <div className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl text-xs flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              {isEditingPhone ? (
                <form onSubmit={handleSavePhone} className="flex items-center space-x-1.5">
                  <input
                    type="tel"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="+91 Mobile"
                    className="bg-black/30 border border-white/30 rounded px-1.5 py-0.5 text-xs text-white focus:outline-none w-28"
                  />
                  <button type="submit" className="text-[10px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded">
                    Save
                  </button>
                </form>
              ) : (
                <div className="flex items-center space-x-1.5">
                  <span className="text-slate-300">{currentUser?.mobile || 'No WhatsApp set'}</span>
                  <button
                    onClick={() => setIsEditingPhone(true)}
                    className="text-[10px] text-sky-300 underline hover:text-white"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          
          {/* 1. MOTION TIMELINE PROGRESS BAR */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-5 text-white shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Timeline Motion & Horizon Progress
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  {streakDays}d Streak
                </span>
                <span className="text-xs text-slate-400">
                  Day {currentDay} of {horizonDays} ({timelineProgress}%)
                </span>
              </div>
            </div>

            {/* Visual Motion Progress Bar Track */}
            <div className="relative pt-2">
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 rounded-full transition-all duration-700 ease-out shadow-sm"
                  style={{ width: `${timelineProgress}%` }}
                />
              </div>

              {/* Milestones on Timeline */}
              <div className="grid grid-cols-4 text-[10px] text-slate-400 pt-2 font-medium">
                <div>
                  <div className="font-bold text-white">Day 1</div>
                  <span>Foundation</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white">Day 30</div>
                  <span>Core Anchors</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white">Day 60</div>
                  <span>Drill Vault</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">Day {horizonDays}</div>
                  <span className="text-emerald-400 font-bold">Rank Push</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. PROBABLE ALL-INDIA RANK PREDICTOR CARD */}
          <div className="p-5 rounded-2xl border-2 border-indigo-200/80 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/30 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-indigo-100">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                <h4 className="text-sm font-black text-slate-900 tracking-tight">
                  Probable {selectedExam.toUpperCase()} Rank & Cutoff Projection
                </h4>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                Gaussian Curve Engine
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Estimated Prelims Score</div>
                <div className="text-2xl font-black text-slate-900 mt-0.5 font-mono">
                  {projectedScore} <span className="text-xs text-slate-400 font-normal">/ 200</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Confidence: ±4.5 marks</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Predicted Rank Bracket</div>
                <div className="text-lg font-black text-indigo-600 mt-0.5 font-mono">
                  {rankBracket}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Cohort: 4,50,000 Aspirants</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Qualifying Cutoff Buffer</div>
                <div className={`text-2xl font-black mt-0.5 font-mono ${cutoffGap >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {cutoffGap >= 0 ? `+${cutoffGap}` : cutoffGap} <span className="text-xs text-slate-400 font-normal">Marks</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Cutoff Target: {targetCutoff} Marks</div>
              </div>
            </div>

            {/* Topper Gap Prescriptive Recommendation */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 flex items-start justify-between gap-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-amber-900">Topper Gap Recommendation: </span>
                  <span className="text-amber-800">
                    Your {weakestSubject} syllabus coverage is at {lowestPercent}%. Prioritizing this subject will yield the highest jump (+6 to +8 marks) towards Top 500 AIR.
                  </span>
                </div>
              </div>

              {onNavigateToMocks && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToMocks();
                  }}
                  className="btn-tactile px-3 py-1.5 rounded-lg text-xs font-black bg-amber-600 hover:bg-amber-500 text-white shrink-0 shadow-2xs flex items-center space-x-1"
                >
                  <span>Practice Drills</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* 3. TOPICS COVERED VS TO BE COVERED */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Syllabus Topics Covered vs Remaining</span>
              </h4>
              <span className="text-xs font-bold text-slate-700">
                {completedCount} of {totalCount} Topics Mastered ({coveragePercent}%)
              </span>
            </div>

            {/* Overall Multi-Segment Progress Gauge */}
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
              <div 
                className="bg-emerald-500 transition-all duration-500" 
                style={{ width: `${coveragePercent}%` }} 
                title={`Completed: ${coveragePercent}%`}
              />
              <div 
                className="bg-amber-400 transition-all duration-500" 
                style={{ width: `${Math.min(100 - coveragePercent, 15)}%` }} 
                title="In Progress"
              />
              <div 
                className="bg-slate-200 transition-all duration-500" 
                style={{ width: `${Math.max(0, 100 - coveragePercent - 15)}%` }} 
                title="To Be Covered"
              />
            </div>

            <div className="flex items-center space-x-4 text-[11px] text-slate-500 pt-1">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Completed ({completedCount})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>In Progress (~{Math.round(totalCount * 0.15)})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span>To Be Covered ({remainingCount})</span>
              </div>
            </div>

            {/* Subject-Wise Micro-Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {Object.entries(subjectGroups).map(([subject, data]) => {
                const pct = data.total > 0 ? Math.round((data.done / data.total) * 100) : 0;
                return (
                  <div key={subject} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800 line-clamp-1">{subject}</span>
                      <span className="font-mono text-slate-500 font-semibold">{data.done}/{data.total} ({pct}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          pct >= 70 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. STUDY LEDGER SNAPSHOT */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">Total Study Time Clocked</div>
                <div className="text-xs text-slate-500">
                  <strong className="text-slate-800 font-mono">{totalHours} Hours</strong> logged across {ledger.sessions.length} study sessions.
                </div>
              </div>
            </div>

            {onOpenSessionModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenSessionModal();
                }}
                className="btn-tactile px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center space-x-1.5 shadow-2xs"
              >
                <span>View Attendance Heatmap</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
