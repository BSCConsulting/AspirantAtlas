import React, { useState, useEffect } from 'react';
import { 
  StudySession, 
  UserStudyLedger, 
  getUserLedger, 
  getDailyHeatmapData, 
  formatMinutes 
} from '../services/studySessionService';
import { 
  X, 
  Clock, 
  Play, 
  Square, 
  Calendar, 
  Flame, 
  CheckCircle, 
  Award, 
  TrendingUp, 
  Star, 
  Target, 
  BookOpen, 
  History, 
  Sparkles,
  Zap,
  Printer,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SYLLABUS_NODES } from '../data/curriculum';
import { TOPIC_CONTENT_MAP } from '../data/contentModules';
import { exportStudyMaterialPrint } from '../utils/studyMaterialExporter';

interface StudySessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  userName: string;
  activeSession: StudySession | null;
  onStartSession: (goal: string) => void;
  onEndSession: (rating: number, notes?: string) => void;
  elapsedSeconds: number;
  onOpenTopic?: (nodeId: string) => void;
  showTelugu?: boolean;
}

export const StudySessionModal: React.FC<StudySessionModalProps> = ({
  isOpen,
  onClose,
  userId,
  userName,
  activeSession,
  onStartSession,
  onEndSession,
  elapsedSeconds,
  onOpenTopic,
  showTelugu = false
}) => {
  const [activeTab, setActiveTab] = useState<'session' | 'history'>('session');
  const [sessionGoalInput, setSessionGoalInput] = useState('');
  const [productivityRating, setProductivityRating] = useState<number>(5);
  const [checkoutNotes, setCheckoutNotes] = useState('');
  const [selectedMaterialNodeId, setSelectedMaterialNodeId] = useState<string>('polity-constitution-framework');
  const [ledger, setLedger] = useState<UserStudyLedger>(() => getUserLedger(userId));

  // Reload ledger when opened or userId changes
  useEffect(() => {
    if (isOpen) {
      setLedger(getUserLedger(userId));
    }
  }, [isOpen, userId, activeSession]);

  if (!isOpen) return null;

  const quickGoals = [
    'Constitutional Framework & Fundamental Rights',
    'Modern History 1919-1947 & Freedom Struggle',
    'GS-2 Federalism & PYQ Mains Answer Practice',
    'Daily Editorial & 10-Question Prelims Speed Drill',
    'Economic Survey & Monetary Policy Revision'
  ];

  const formatTimerDigits = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getMatchingNodeId = (goal: string) => {
    const g = goal.toLowerCase();
    if (g.includes('history') || g.includes('freedom') || g.includes('1919') || g.includes('1947')) return 'history-modern-freedom';
    if (g.includes('economy') || g.includes('fiscal') || g.includes('monetary') || g.includes('survey')) return 'economy-macro-fiscal';
    if (g.includes('environment') || g.includes('biodiversity') || g.includes('climate') || g.includes('tiger')) return 'environment-biodiversity-treaties';
    if (g.includes('sci') || g.includes('tech') || g.includes('ai') || g.includes('space')) return 'scitech-emerging-ai';
    if (g.includes('ethics') || g.includes('governance') || g.includes('case')) return 'ethics-governance-case-studies';
    if (g.includes('reorganisation') || g.includes('bifurcation') || g.includes('appsc')) return 'appsc-reorganisation-act-2014';
    if (g.includes('tspsc') || g.includes('telangana')) return 'tspsc-movement-statehood';
    if (g.includes('federal') || g.includes('judiciary') || g.includes('mains')) return 'polity-federal-judiciary';
    return 'polity-constitution-framework';
  };

  useEffect(() => {
    if (activeSession) {
      setSelectedMaterialNodeId(getMatchingNodeId(activeSession.sessionGoal));
    } else if (sessionGoalInput) {
      setSelectedMaterialNodeId(getMatchingNodeId(sessionGoalInput));
    }
  }, [activeSession, sessionGoalInput]);

  const heatmap = getDailyHeatmapData(userId, 28); // 4 weeks

  const handleStart = () => {
    const goal = sessionGoalInput.trim() || 'Daily General Studies Revision & PYQ Practice';
    onStartSession(goal);
    setSessionGoalInput('');
  };

  const handleEnd = () => {
    onEndSession(productivityRating, checkoutNotes);
    setCheckoutNotes('');
    setProductivityRating(5);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-t sm:border border-slate-200 w-full max-w-3xl overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[92vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Grab Handle */}
        <div className="sm:hidden w-12 h-1 bg-slate-200 rounded-full mx-auto mt-2.5 -mb-1" />

        {/* Modal Top Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 via-white to-indigo-50/30">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm ${
              activeSession 
                ? 'bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-emerald-500/20' 
                : 'bg-gradient-to-tr from-indigo-600 to-sky-500 shadow-indigo-500/20'
            }`}>
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-black text-slate-900">
                  {userName}'s Study Ledger
                </h2>
                {activeSession && (
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Session</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">
                Check-in, track daily study hours, assignments, and performance history
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 border-b border-slate-100 flex items-center space-x-2 bg-slate-50/50">
          <button
            onClick={() => setActiveTab('session')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 flex items-center space-x-1.5 transition-all ${
              activeTab === 'session'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{activeSession ? 'Active Session & Check-Out' : 'Start Study Check-In'}</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 flex items-center space-x-1.5 transition-all ${
              activeTab === 'history'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Attendance & Performance History ({ledger.sessions.length})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'session' ? (
            activeSession ? (
              /* --- ACTIVE CHECKED-IN STATE & CHECKOUT FLOW --- */
              <div className="space-y-6">
                {/* Live Clock Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Active Study Clock</span>
                      </div>
                      <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight mt-1 text-white">
                        {formatTimerDigits(elapsedSeconds)}
                      </div>
                      <div className="text-xs text-slate-300 mt-2 flex items-center space-x-2">
                        <Target className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                        <span className="font-semibold">{activeSession.sessionGoal}</span>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center shrink-0 space-y-1">
                      <div className="text-[11px] font-bold text-slate-300 uppercase">Checked In At</div>
                      <div className="text-base font-black text-white">
                        {new Date(activeSession.checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Session Work / Assignment Accomplishments */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Live Session Accomplishments (Auto-Saved)
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-slate-900">
                          {activeSession.activities.nodesRead.length}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">Syllabus Modules Read</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-slate-900">
                          {activeSession.activities.mcqsCorrect}/{activeSession.activities.mcqsAttempted}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">MCQs Drilled (Accuracy)</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-slate-900">
                          {activeSession.activities.mainsEvaluationsCount}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">Mains Evaluated (AI)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IN-SESSION STUDY MATERIAL & NOTES LAUNCHER */}
                {(() => {
                  const currentMaterialNode = SYLLABUS_NODES.find(n => n.id === selectedMaterialNodeId) || SYLLABUS_NODES[0];
                  const currentMaterialContent = TOPIC_CONTENT_MAP[currentMaterialNode.id];
                  return (
                    <div className="p-5 rounded-2xl border-2 border-indigo-200/80 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 shadow-sm space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <span className="p-2 rounded-xl bg-indigo-600 text-white shadow-xs">
                            <BookOpen className="w-4 h-4" />
                          </span>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded-md">
                              Prescribed Study Material
                            </span>
                            <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">
                              {showTelugu && currentMaterialNode.titleTelugu ? currentMaterialNode.titleTelugu : currentMaterialNode.title}
                            </h4>
                          </div>
                        </div>

                        {/* Switcher Dropdown */}
                        <div className="flex items-center space-x-1.5 text-xs">
                          <label className="text-[11px] font-semibold text-slate-500 hidden sm:inline">Module:</label>
                          <select
                            value={selectedMaterialNodeId}
                            onChange={(e) => setSelectedMaterialNodeId(e.target.value)}
                            className="bg-white border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                          >
                            {SYLLABUS_NODES.map(node => (
                              <option key={node.id} value={node.id}>
                                {node.subject}: {node.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-slate-200 text-xs space-y-2">
                        <p className="text-slate-600 line-clamp-2 leading-relaxed">
                          {currentMaterialContent?.overview || currentMaterialNode.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100 text-[11px]">
                          <div className="flex items-center space-x-2 text-slate-500">
                            <span className="font-semibold text-slate-700">References:</span>
                            <span className="truncate max-w-[220px] sm:max-w-xs text-sky-800">
                              {currentMaterialContent?.standardReferences?.map(r => r.source).join(' • ') || 'Standard Reference Textbooks'}
                            </span>
                          </div>
                          <span className="text-slate-400 font-medium">Est. {currentMaterialNode.estMinutes} mins</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => {
                            if (onOpenTopic) {
                              onOpenTopic(currentMaterialNode.id);
                            }
                          }}
                          className="w-full sm:w-auto flex-1 btn-tactile px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-all"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Open Study Notes, Mindmaps & Infographics</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (currentMaterialContent) {
                              exportStudyMaterialPrint(currentMaterialContent, showTelugu);
                            }
                          }}
                          className="w-full sm:w-auto btn-tactile px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs flex items-center justify-center space-x-2 shadow-2xs transition-all"
                          title="Print or Save Study Notes PDF"
                        >
                          <Printer className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Print / PDF Notes</span>
                        </button>
                      </div>
                    </div>
                  );
                })()}

                {/* Check-Out Review & Debrief Section */}
                <div className="p-5 rounded-2xl border border-indigo-100 bg-indigo-50/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        Ready to Check Out?
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Rate this session's productivity and write any key learnings or takeaways.
                      </p>
                    </div>

                    {/* Productivity Rating Stars */}
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setProductivityRating(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-5 h-5 ${star <= productivityRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Optional notes: e.g., 'Mastered Kesavananda Bharati; need to revise Article 356.'"
                      value={checkoutNotes}
                      onChange={(e) => setCheckoutNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={onClose}
                      className="btn-tactile px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/60"
                    >
                      Keep Session Running
                    </button>

                    <button
                      onClick={handleEnd}
                      className="btn-tactile px-5 py-2.5 rounded-xl text-xs font-black bg-rose-600 hover:bg-rose-700 text-white flex items-center space-x-2 shadow-sm shadow-rose-600/30"
                    >
                      <Square className="w-3.5 h-3.5 fill-white" />
                      <span>Check Out & Save Log</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* --- CHECK-IN INITIALIZATION FLOW --- */
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-xl">
                  <div className="max-w-md space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">
                      Daily Discipline Engine
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Check in to start your study session
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Clock in your preparation hours. Your syllabus reading, Prelims drills, and Gemini Mains evaluations will be automatically recorded to your personal audit ledger.
                    </p>
                  </div>
                </div>

                {/* Session Goal Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700">
                    What is your target goal for this session?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Constitutional Framework & Articles 14-32 revision"
                    value={sessionGoalInput}
                    onChange={(e) => setSessionGoalInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
                  />

                  {/* Quick Goal Pills */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold text-slate-400">Quick Select Goal:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {quickGoals.map((g, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSessionGoalInput(g)}
                          className="text-[11px] font-medium bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1 rounded-lg border border-slate-200/80 transition-all text-left"
                        >
                          + {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Matched Study Material Preview */}
                {(() => {
                  const currentMaterialNode = SYLLABUS_NODES.find(n => n.id === selectedMaterialNodeId) || SYLLABUS_NODES[0];
                  const currentMaterialContent = TOPIC_CONTENT_MAP[currentMaterialNode.id];
                  return (
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/80 space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Matched Syllabus Module & Study Notes:</span>
                        </span>
                        <span className="text-[10px] font-black uppercase text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                          {currentMaterialNode.subject}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg border border-slate-200/80 text-xs">
                        <div>
                          <div className="font-bold text-slate-900">
                            {showTelugu && currentMaterialNode.titleTelugu ? currentMaterialNode.titleTelugu : currentMaterialNode.title}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            Standard Textbooks: {currentMaterialContent?.standardReferences?.map(r => r.source).join(' • ') || 'NCERT Core'}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              if (currentMaterialContent) {
                                exportStudyMaterialPrint(currentMaterialContent, showTelugu);
                              }
                            }}
                            className="p-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors"
                            title="Preview Printable Notes PDF"
                          >
                            <Printer className="w-3.5 h-3.5 text-indigo-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Action CTA */}
                <div className="pt-2 flex items-center justify-end space-x-3">
                  <button
                    onClick={onClose}
                    className="btn-tactile px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleStart}
                    className="btn-tactile px-6 py-2.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white flex items-center space-x-2 shadow-md shadow-indigo-600/30"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Check In Now</span>
                  </button>
                </div>
              </div>
            )
          ) : (
            /* --- ATTENDANCE & PERFORMANCE LEDGER VIEW --- */
            <div className="space-y-6">
              {/* Summary KPIs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Hours Clocked</div>
                  <div className="text-2xl font-black text-slate-900 mt-0.5">
                    {formatMinutes(ledger.totalStudyMinutes)}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Study Streak</div>
                  <div className="text-2xl font-black text-amber-600 mt-0.5 flex items-center space-x-1">
                    <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                    <span>{ledger.currentStreakDays} Days</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Sessions</div>
                  <div className="text-2xl font-black text-slate-900 mt-0.5">
                    {ledger.sessions.length}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Avg Session</div>
                  <div className="text-2xl font-black text-indigo-600 mt-0.5">
                    {ledger.sessions.length > 0 
                      ? formatMinutes(Math.round(ledger.totalStudyMinutes / ledger.sessions.length))
                      : '0m'
                    }
                  </div>
                </div>
              </div>

              {/* 4-Week Activity Heatmap */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>28-Day Attendance & Study Heatmap</span>
                  </h4>
                  <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-semibold">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-xs bg-slate-100" />
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-200" />
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600" />
                    <span>More</span>
                  </div>
                </div>

                <div className="grid grid-cols-7 sm:grid-cols-14 gap-1.5 pt-1">
                  {heatmap.map((day, idx) => {
                    const hrs = day.minutes / 60;
                    let color = 'bg-slate-100 border-slate-200/60';
                    if (hrs >= 4) color = 'bg-emerald-600 border-emerald-700 text-white';
                    else if (hrs >= 2) color = 'bg-emerald-400 border-emerald-500 text-white';
                    else if (hrs > 0) color = 'bg-emerald-200 border-emerald-300 text-emerald-900';

                    return (
                      <div
                        key={idx}
                        className={`p-2 rounded-xl border text-center transition-all ${color} ${
                          day.isToday ? 'ring-2 ring-indigo-500 ring-offset-1 font-bold' : ''
                        }`}
                        title={`${day.dateLabel}: ${formatMinutes(day.minutes)} (${day.sessionCount} sessions)`}
                      >
                        <div className="text-[9px] font-medium opacity-80">{day.dateLabel.split(' ')[1]}</div>
                        <div className="text-[11px] font-black">{day.minutes > 0 ? `${Math.round(hrs * 10) / 10}h` : '—'}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chronological Session History Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Chronological Check-In / Check-Out Log
                </h4>

                <div className="space-y-2">
                  {ledger.sessions.length === 0 ? (
                    <div className="p-8 text-center border border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs">
                      No study sessions recorded yet. Click "Start Study Check-In" to begin your first tracked session!
                    </div>
                  ) : (
                    ledger.sessions.map((sess) => {
                      const checkIn = new Date(sess.checkInTime);
                      const checkOut = sess.checkOutTime ? new Date(sess.checkOutTime) : null;
                      
                      return (
                        <div
                          key={sess.sessionId}
                          className="p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-indigo-300 transition-all space-y-2.5 shadow-2xs"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-extrabold text-sm text-slate-900">
                                  {sess.sessionGoal}
                                </span>
                                <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                                  {formatMinutes(sess.durationMinutes)}
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5">
                                {checkIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {checkIn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                {checkOut && ` to ${checkOut.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                              </div>
                            </div>

                            {/* Rating Stars */}
                            {sess.productivityRating && (
                              <div className="flex items-center space-x-0.5 shrink-0">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star
                                    key={s}
                                    className={`w-3.5 h-3.5 ${
                                      s <= sess.productivityRating! ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Work Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px]">
                            {sess.activities.nodesRead.length > 0 && (
                              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold flex items-center space-x-1">
                                <BookOpen className="w-3 h-3 text-slate-500" />
                                <span>{sess.activities.nodesRead.length} Modules Read</span>
                              </span>
                            )}
                            {sess.activities.mcqsAttempted > 0 && (
                              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center space-x-1">
                                <CheckCircle className="w-3 h-3 text-emerald-600" />
                                <span>{sess.activities.mcqsCorrect}/{sess.activities.mcqsAttempted} MCQs Drilled</span>
                              </span>
                            )}
                            {sess.activities.mainsEvaluationsCount > 0 && (
                              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 font-semibold flex items-center space-x-1">
                                <Award className="w-3 h-3 text-indigo-600" />
                                <span>{sess.activities.mainsEvaluationsCount} Mains Evaluated</span>
                              </span>
                            )}
                          </div>

                          {sess.notes && (
                            <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded-xl border border-slate-100">
                              "{sess.notes}"
                            </p>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
