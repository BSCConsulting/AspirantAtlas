import React, { useState, useEffect } from 'react';
import { MockTest, MockTestQuestion, TestAttemptResult, ExamId } from '../types';
import { MOCK_TESTS, generateCustomDrill, ALL_PRELIMS_QUESTIONS } from '../data/mockTests';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Bookmark, 
  AlertCircle, 
  BarChart3, 
  Check, 
  BookOpen, 
  ArrowLeft,
  Sparkles,
  Layers,
  Flame,
  Sliders,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChime, playClick } from '../services/soundService';

interface MockTestSimulatorProps {
  showTelugu: boolean;
  selectedExam: ExamId;
  onNavigateToNode?: (nodeId: string) => void;
  onTestCompleted?: (attempted: number, correct: number) => void;
}

interface ActiveTestDraft {
  test: MockTest;
  currentQuestionIndex: number;
  selectedAnswers: Record<number, number>;
  markedForReview: number[];
  timeRemainingSeconds: number;
  savedAt: string;
}

export const MockTestSimulator: React.FC<MockTestSimulatorProps> = ({
  showTelugu,
  selectedExam,
  onNavigateToNode,
  onTestCompleted
}) => {
  // Navigation / State
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<number[]>([]);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [attemptResult, setAttemptResult] = useState<TestAttemptResult | null>(null);
  const [filterExam, setFilterExam] = useState<ExamId | 'all'>('all');
  
  // In-progress test draft state
  const [activeDraft, setActiveDraft] = useState<ActiveTestDraft | null>(() => {
    try {
      const saved = localStorage.getItem('aspirant_active_test_draft');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Custom Drill Studio State
  const [isDrillStudioOpen, setIsDrillStudioOpen] = useState<boolean>(false);
  const [drillSubject, setDrillSubject] = useState<string>('All');
  const [drillCount, setDrillCount] = useState<number>(10);
  const [drillDifficulty, setDrillDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');

  const [savedAttempts, setSavedAttempts] = useState<TestAttemptResult[]>(() => {
    try {
      const saved = localStorage.getItem('aspirant_test_attempts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Auto-save active test in-progress draft
  useEffect(() => {
    if (isTestActive && activeTest) {
      const draft: ActiveTestDraft = {
        test: activeTest,
        currentQuestionIndex,
        selectedAnswers,
        markedForReview,
        timeRemainingSeconds,
        savedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      localStorage.setItem('aspirant_active_test_draft', JSON.stringify(draft));
      setActiveDraft(draft);
    }
  }, [isTestActive, activeTest, currentQuestionIndex, selectedAnswers, markedForReview, timeRemainingSeconds]);

  const handleStartCustomDrill = () => {
    const customTest = generateCustomDrill({
      subject: drillSubject === 'All' ? undefined : drillSubject,
      difficulty: drillDifficulty === 'All' ? undefined : drillDifficulty,
      count: drillCount
    });
    startTest(customTest);
  };

  const handleResumeDraft = () => {
    if (!activeDraft) return;
    setActiveTest(activeDraft.test);
    setCurrentQuestionIndex(activeDraft.currentQuestionIndex || 0);
    setSelectedAnswers(activeDraft.selectedAnswers || {});
    setMarkedForReview(activeDraft.markedForReview || []);
    setTimeRemainingSeconds(activeDraft.timeRemainingSeconds);
    setIsTestActive(true);
    setAttemptResult(null);
  };

  const handleDiscardDraft = () => {
    if (window.confirm(showTelugu 
      ? 'మీరు ఖచ్చితంగా ఈ అసంపూర్ణ టెస్ట్ డ్రాఫ్ట్‌ను తొలగించాలనుకుంటున్నారా?' 
      : 'Are you sure you want to discard this unfinished test draft?')) {
      localStorage.removeItem('aspirant_active_test_draft');
      setActiveDraft(null);
    }
  };

  const handlePauseAndExit = () => {
    if (window.confirm(showTelugu
      ? 'మీ సమాధానాలు మరియు మిగిలిన సమయం స్వయంచాలకంగా సేవ్ చేయబడ్డాయి. మీరు ఎప్పుడైనా మళ్ళీ కొనసాగించవచ్చు. ఇప్పుడు నిష్క్రమించాలనుకుంటున్నారా?'
      : 'Your answers and remaining time are auto-saved. You can resume anytime from the Prelims Mocks screen. Pause and exit now?')) {
      setIsTestActive(false);
    }
  };

  // Timer countdown
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTestActive && timeRemainingSeconds > 0) {
      interval = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTestActive, timeRemainingSeconds]);

  const startTest = (test: MockTest) => {
    setActiveTest(test);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setMarkedForReview([]);
    setTimeRemainingSeconds(test.durationMinutes * 60);
    setIsTestActive(true);
    setAttemptResult(null);
  };

  const handleSelectOption = (optionIndex: number) => {
    playClick();
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleClearAnswer = () => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestionIndex];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) =>
      prev.includes(currentQuestionIndex)
        ? prev.filter((i) => i !== currentQuestionIndex)
        : [...prev, currentQuestionIndex]
    );
  };

  const calculateResult = (): TestAttemptResult => {
    if (!activeTest) throw new Error('No active test');

    const totalQuestions = activeTest.questions.length;
    let correct = 0;
    let incorrect = 0;
    const marksPerQuestion = activeTest.totalMarks / totalQuestions;
    const negativeMarks = marksPerQuestion * activeTest.negativeMarkingRatio;

    const subjectBreakdown: Record<string, { total: number; correct: number; incorrect: number }> = {};

    activeTest.questions.forEach((q, idx) => {
      const tag = q.tag || 'General';
      if (!subjectBreakdown[tag]) {
        subjectBreakdown[tag] = { total: 0, correct: 0, incorrect: 0 };
      }
      subjectBreakdown[tag].total += 1;

      const userChoice = selectedAnswers[idx];
      if (userChoice !== undefined) {
        if (userChoice === q.correctIndex) {
          correct++;
          subjectBreakdown[tag].correct += 1;
        } else {
          incorrect++;
          subjectBreakdown[tag].incorrect += 1;
        }
      }
    });

    const attempted = correct + incorrect;
    const unattempted = totalQuestions - attempted;
    const rawScore = correct * marksPerQuestion - incorrect * negativeMarks;
    const score = Math.max(0, Math.round(rawScore * 100) / 100);
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const timeSpent = activeTest.durationMinutes * 60 - timeRemainingSeconds;

    return {
      testId: activeTest.id,
      testTitle: activeTest.title,
      totalQuestions,
      attempted,
      correct,
      incorrect,
      unattempted,
      score,
      maxScore: activeTest.totalMarks,
      accuracy,
      timeSpentSeconds: Math.max(10, timeSpent),
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + new Date().toLocaleDateString(),
      subjectBreakdown
    };
  };

  const handleAutoSubmit = () => {
    const res = calculateResult();
    setIsTestActive(false);
    setAttemptResult(res);
    saveAttempt(res);
    localStorage.removeItem('aspirant_active_test_draft');
    setActiveDraft(null);

    // Audio & celebratory visual feedback
    if (res.accuracy >= 60 || res.score >= (res.maxScore * 0.4)) {
      playChime();
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    } else {
      playClick();
    }
  };

  const handleManualSubmit = () => {
    if (window.confirm(showTelugu 
      ? `మీరు ఖచ్చితంగా టెస్ట్ సబ్మిట్ చేయాలనుకుంటున్నారా? (${Object.keys(selectedAnswers).length}/${activeTest?.questions.length} ప్రశ్నలకు సమాధానమిచ్చారు)` 
      : `Are you sure you want to submit the test? You answered ${Object.keys(selectedAnswers).length} of ${activeTest?.questions.length} questions.`)) {
      handleAutoSubmit();
    }
  };

  const saveAttempt = (res: TestAttemptResult) => {
    const updated = [res, ...savedAttempts.slice(0, 19)];
    setSavedAttempts(updated);
    localStorage.setItem('aspirant_test_attempts', JSON.stringify(updated));
    if (onTestCompleted) {
      onTestCompleted(res.attempted, res.correct);
    }
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Filtered catalog
  const filteredTests = MOCK_TESTS.filter(t => {
    if (filterExam === 'all') return true;
    return t.exam === 'all' || t.exam === filterExam;
  });

  // ==========================================
  // VIEW 1: LIVE TEST INTERFACE
  // ==========================================
  if (isTestActive && activeTest) {
    const currentQ = activeTest.questions[currentQuestionIndex];
    const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
    const isReviewed = markedForReview.includes(currentQuestionIndex);

    return (
      <div className="space-y-6 max-w-6xl mx-auto animate-fadeIn">
        {/* Test Header Bar */}
        <div className="glass-nav backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-elevation-2 p-3.5 sm:p-5 flex flex-wrap items-center justify-between gap-3 sticky top-20 sm:top-24 z-20 transition-all">
          <div className="flex items-center space-x-2.5 sm:space-x-3.5">
            <button
              onClick={handlePauseAndExit}
              className="btn-tactile px-3 py-2 rounded-xl text-xs font-bold border border-slate-200/90 text-slate-700 bg-white hover:bg-slate-50 flex items-center space-x-1.5 shadow-2xs"
              title="Pause and save test progress"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden xs:inline">Pause & Exit</span>
              <span className="xs:hidden">Exit</span>
            </button>

            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-600 flex items-center space-x-1.5">
                <span>{activeTest.subject}</span>
                <span>•</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60">
                  Auto-Saved
                </span>
              </div>
              <h2 className="text-sm sm:text-base md:text-lg font-black text-slate-900 tracking-tight line-clamp-1 mt-0.5">
                {showTelugu && activeTest.titleTelugu ? activeTest.titleTelugu : activeTest.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Countdown Badge */}
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-mono font-black text-sm border shadow-sm transition-all ${
              timeRemainingSeconds < 300 
                ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse shadow-glow-amber' 
                : 'bg-slate-900 border-slate-800 text-white shadow-elevation-1'
            }`}>
              <Clock className={`w-4 h-4 ${timeRemainingSeconds < 300 ? 'text-rose-600' : 'text-sky-400'}`} />
              <span className="tracking-wider">{formatTimer(timeRemainingSeconds)}</span>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleManualSubmit}
              className="btn-tactile px-5 py-2.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-elevation-1 hover:shadow-glow-emerald transition-all"
            >
              Submit Test
            </button>
          </div>
        </div>

        {/* Test Body: Question Card (8 cols) + OMR Palette (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Question & Options Area */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between min-h-[460px]">
            <div className="space-y-6">
              
              {/* Question Metadata */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-extrabold text-sm text-sky-900 bg-sky-50 px-3 py-1 rounded-lg border border-sky-100">
                  Question {currentQuestionIndex + 1} of {activeTest.questions.length}
                </span>

                <div className="flex items-center space-x-2">
                  {currentQ.difficulty && (
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                      currentQ.difficulty === 'Easy' 
                        ? 'bg-emerald-50 text-emerald-700' 
                        : currentQ.difficulty === 'Medium' 
                        ? 'bg-amber-50 text-amber-700' 
                        : 'bg-rose-50 text-rose-700'
                    }`}>
                      {currentQ.difficulty}
                    </span>
                  )}
                  {currentQ.tag && (
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {currentQ.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                  {showTelugu && currentQ.questionTelugu ? currentQ.questionTelugu : currentQ.question}
                </h3>
                {showTelugu && currentQ.questionTelugu && (
                  <p className="text-xs text-slate-500 italic">
                    EN: {currentQ.question}
                  </p>
                )}
              </div>

              {/* Options List */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, optIdx) => {
                  const isChosen = selectedAnswers[currentQuestionIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`btn-tactile w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 text-sm ${
                        isChosen
                          ? 'bg-sky-50/80 border-sky-500 text-sky-950 font-bold shadow-sm ring-1 ring-sky-400'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-colors ${
                        isChosen 
                          ? 'border-sky-600 bg-sky-600 text-white shadow-sm' 
                          : 'border-slate-300 text-slate-500 bg-slate-50'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span className="leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Bottom Actions Toolbar */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 mt-8">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleToggleReview}
                  className={`btn-tactile flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                    isReviewed
                      ? 'bg-purple-100 border-purple-300 text-purple-900 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5 text-purple-600" />
                  <span>{isReviewed ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>

                {isAnswered && (
                  <button
                    onClick={handleClearAnswer}
                    className="text-xs text-slate-400 hover:text-rose-600 px-2 py-1 transition-colors font-medium"
                  >
                    Clear Response
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="btn-tactile flex items-center space-x-1 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-200 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() =>
                    setCurrentQuestionIndex((prev) =>
                      Math.min(activeTest.questions.length - 1, prev + 1)
                    )
                  }
                  disabled={currentQuestionIndex === activeTest.questions.length - 1}
                  className="btn-tactile flex items-center space-x-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-sky-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-500 shadow-elevation-1 hover:shadow-glow-sky transition-all"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* OMR Question Palette (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 shadow-elevation-1 p-5 space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h4 className="font-black text-xs uppercase tracking-wider text-slate-800">
                Digital OMR Palette
              </h4>
              <span className="text-[10px] font-bold text-slate-400 font-mono">
                {Object.keys(selectedAnswers).length}/{activeTest.questions.length} Attempted
              </span>
            </div>

            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" />
                <span className="font-medium">Answered ({Object.keys(selectedAnswers).length})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="font-medium">Unanswered ({activeTest.questions.length - Object.keys(selectedAnswers).length})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-xs" />
                <span className="font-medium">Marked ({markedForReview.length})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-sky-500 bg-white" />
                <span className="font-medium">Current</span>
              </div>
            </div>

            {/* Bubble Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 sm:gap-2 max-h-72 overflow-y-auto pr-1">
              {activeTest.questions.map((_, idx) => {
                const answered = selectedAnswers[idx] !== undefined;
                const reviewed = markedForReview.includes(idx);
                const isCurrent = currentQuestionIndex === idx;

                let btnClass = 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/80';
                if (answered && reviewed) {
                  btnClass = 'bg-purple-600 text-white font-bold border-purple-700 shadow-sm';
                } else if (answered) {
                  btnClass = 'bg-emerald-600 text-white font-bold border-emerald-700 shadow-sm';
                } else if (reviewed) {
                  btnClass = 'bg-purple-100 text-purple-900 font-bold border-purple-300';
                }

                if (isCurrent) {
                  btnClass += ' ring-2 ring-sky-500 ring-offset-2 scale-105 z-10 shadow-elevation-1';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`btn-tactile h-9 rounded-xl border text-xs font-bold flex items-center justify-center transition-all ${btnClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Scoring scheme badge */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-[11px] text-slate-500 space-y-1">
              <div className="font-extrabold text-slate-800">Exam Marking Scheme:</div>
              <div>• Correct: <span className="font-bold text-emerald-700">+{((activeTest.totalMarks / activeTest.questions.length)).toFixed(1)} Marks</span></div>
              <div>• Negative Penalty: <span className="font-bold text-rose-700">-{(((activeTest.totalMarks / activeTest.questions.length) * activeTest.negativeMarkingRatio)).toFixed(2)} Marks</span> (1/3rd deduction)</div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: POST-TEST DIAGNOSTIC REPORT CARD
  // ==========================================
  if (attemptResult && activeTest) {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
        {/* Header Ribbon */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-7 sm:p-9 text-white shadow-elevation-3 border border-indigo-900/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs px-3.5 py-1 rounded-full font-black uppercase tracking-wider inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Diagnostic Evaluation Complete
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-2 tracking-tight">
                {attemptResult.testTitle}
              </h1>
              <p className="text-xs text-slate-300 mt-1 font-medium">Submitted: {attemptResult.submittedAt}</p>
            </div>

            <button
              onClick={() => {
                setActiveTest(null);
                setAttemptResult(null);
              }}
              className="btn-tactile flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Mock Test Vault</span>
            </button>
          </div>
        </div>

        {/* Score & Metric Summary Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-elevation-1 hover:shadow-elevation-2 transition-all text-center">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Net Score</div>
            <div className="text-3xl font-black text-slate-900 mt-1 tracking-tight font-mono">
              {attemptResult.score}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">out of {attemptResult.maxScore} Marks</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-elevation-1 hover:shadow-elevation-2 transition-all text-center">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accuracy</div>
            <div className="text-3xl font-black text-emerald-600 mt-1 tracking-tight font-mono">
              {attemptResult.accuracy}%
            </div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">{attemptResult.correct} of {attemptResult.attempted} correct</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-elevation-1 hover:shadow-elevation-2 transition-all text-center">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Negative Hits</div>
            <div className="text-3xl font-black text-rose-600 mt-1 tracking-tight font-mono">
              {attemptResult.incorrect}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Penalty deductions</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-elevation-1 hover:shadow-elevation-2 transition-all text-center">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time Spent</div>
            <div className="text-3xl font-black text-indigo-600 mt-1 tracking-tight font-mono">
              {Math.round(attemptResult.timeSpentSeconds / 60)}m
            </div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">{attemptResult.timeSpentSeconds % 60} seconds</div>
          </div>

        </div>

        {/* All-India Rank (AIR) & Cutoff Percentile Benchmark Simulator */}
        {(() => {
          const percentage = (attemptResult.score / attemptResult.maxScore) * 100;
          // Standard prelims cutoff benchmark is ~ 46.5%
          const cutoffPercentage = 46.5; 
          const cutoffScore = Math.round((cutoffPercentage / 100) * attemptResult.maxScore * 10) / 10;
          const scoreDelta = Math.round((attemptResult.score - cutoffScore) * 10) / 10;
          const isAboveCutoff = scoreDelta >= 0;

          // Sigmoidal normal distribution model (Mean: 35%, StdDev: 12%)
          const mean = 35;
          const stdDev = 12;
          const z = (percentage - mean) / stdDev;
          const percentile = Math.min(99.9, Math.max(5.0, Math.round((1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - 1.5976 * z))) * 1000) / 10));
          
          const totalPool = 450000;
          const simulatedRank = Math.max(1, Math.round(totalPool * (1 - percentile / 100)));

          // Coordinate mapping onto 400px width SVG curve
          const markerX = Math.min(380, Math.max(20, (percentage / 100) * 380 + 10));
          const cutoffX = (cutoffPercentage / 100) * 380 + 10;

          return (
            <div className="bg-white rounded-2xl border border-indigo-100 shadow-elevation-2 p-6 sm:p-7 space-y-6 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm tracking-tight">
                      All-India Rank (AIR) & Cutoff Percentile Curve
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Simulated cohort benchmark against 4,50,000+ real aspirants distribution
                    </p>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isAboveCutoff 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-rose-50 text-rose-700 border border-rose-200'
                }`}>
                  <Target className="w-3.5 h-3.5" />
                  {isAboveCutoff ? `Clear Prelims (+${scoreDelta} Buffer)` : `Below Cutoff (${scoreDelta} Gap)`}
                </span>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Projected AIR</span>
                  <div className="text-2xl font-black text-slate-900 font-mono mt-0.5">
                    #{simulatedRank.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Top {((simulatedRank / totalPool) * 100).toFixed(2)}% of cohort</span>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">All-India Percentile</span>
                  <div className="text-2xl font-black text-indigo-600 font-mono mt-0.5">
                    {percentile}%ile
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Scored higher than {percentile}% users</span>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Expected Exam Cutoff</span>
                  <div className="text-2xl font-black text-amber-600 font-mono mt-0.5">
                    {cutoffScore}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Required threshold ({cutoffPercentage}%)</span>
                </div>
              </div>

              {/* Gaussian Bell Curve SVG */}
              <div className="bg-gradient-to-b from-indigo-50/40 to-slate-50/60 p-4 rounded-xl border border-indigo-100/60 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>Candidate Distribution Curve</span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1.5 text-rose-600">
                      <span className="w-2.5 h-0.5 bg-rose-500 inline-block" />
                      <span>Cutoff Line ({cutoffScore})</span>
                    </span>
                    <span className="flex items-center space-x-1.5 text-indigo-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
                      <span>Your Score ({attemptResult.score})</span>
                    </span>
                  </div>
                </div>

                <div className="relative w-full h-28">
                  <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {/* Normal Distribution Bell Curve */}
                    <path
                      d="M 10 95 C 70 95, 110 90, 140 60 C 160 35, 180 10, 200 10 C 220 10, 240 35, 260 60 C 290 90, 330 95, 390 95 Z"
                      fill="url(#bellGrad)"
                      stroke="#4f46e5"
                      strokeWidth="2"
                    />

                    {/* Cutoff Reference Line */}
                    <line
                      x1={cutoffX}
                      y1="5"
                      x2={cutoffX}
                      y2="95"
                      stroke="#e11d48"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                    />

                    {/* User Score Pin */}
                    <line
                      x1={markerX}
                      y1="0"
                      x2={markerX}
                      y2="95"
                      stroke="#1e1b4b"
                      strokeWidth="2.5"
                    />
                    <circle cx={markerX} cy="10" r="5" fill="#4338ca" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex justify-between text-[10px] text-slate-400 font-mono px-1">
                  <span>0 Marks (5th %ile)</span>
                  <span className="font-semibold text-slate-600">Cohort Median (35%)</span>
                  <span>Max {attemptResult.maxScore} (99.9th %ile)</span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Subject / Topic Diagnostic Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <span>Subject & Topic Diagnostic Performance</span>
          </div>

          <div className="space-y-3">
            {Object.entries(attemptResult.subjectBreakdown).map(([subject, stat]) => {
              const acc = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
              return (
                <div key={subject} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{subject}</span>
                    <span className="text-slate-600 font-mono">
                      {stat.correct}/{stat.total} Correct ({acc}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        acc >= 70 ? 'bg-emerald-500' : acc >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${acc}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question-by-Question Detailed Review with Explanations */}
        <div className="space-y-4">
          <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-600" />
            <span>Detailed Question Review & Rationales</span>
          </h3>

          <div className="space-y-4">
            {activeTest.questions.map((q, idx) => {
              const userChoice = selectedAnswers[idx];
              const isCorrect = userChoice === q.correctIndex;
              const isUnattempted = userChoice === undefined;

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-sm space-y-3 ${
                    isCorrect
                      ? 'border-emerald-200'
                      : isUnattempted
                      ? 'border-slate-200'
                      : 'border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-500">
                      Q{idx + 1}. {q.tag}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : isUnattempted
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+{(activeTest.totalMarks / activeTest.questions.length).toFixed(1)})
                        </>
                      ) : isUnattempted ? (
                        'Unattempted (0.0)'
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Incorrect (-{((activeTest.totalMarks / activeTest.questions.length) * activeTest.negativeMarkingRatio).toFixed(2)})
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm leading-relaxed">
                    {showTelugu && q.questionTelugu ? q.questionTelugu : q.question}
                  </h4>

                  <div className="space-y-1.5 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctIndex;
                      const isOptionChosen = userChoice === optIdx;

                      let optClass = 'bg-slate-50 border-slate-200 text-slate-700';
                      if (isOptionCorrect) {
                        optClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                      } else if (isOptionChosen && !isCorrect) {
                        optClass = 'bg-rose-50 border-rose-300 text-rose-950 line-through';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${optClass}`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="font-mono font-bold text-[10px]">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span>{opt}</span>
                          </div>
                          {isOptionCorrect && (
                            <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                              Correct Answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed explanation */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1">
                    <span className="font-bold text-slate-900">Concept Explanation & Rationale: </span>
                    <span>{q.explanation}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Retake Button */}
        <div className="flex justify-center pb-8">
          <button
            onClick={() => startTest(activeTest)}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/20 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake This Test</span>
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 3: CATALOG OF MOCK TESTS
  // ==========================================
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* In-Progress Test Resume Recovery Banner */}
      {activeDraft && (
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-400/80 rounded-3xl p-5 sm:p-6 shadow-elevation-2 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-scaleUp">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">
                  Unfinished Test Saved
                </span>
                <span className="text-xs text-slate-500 font-medium">Auto-Saved at {activeDraft.savedAt}</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                {activeDraft.test.title}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Progress: <strong className="text-slate-900">{Object.keys(activeDraft.selectedAnswers).length}</strong> of {activeDraft.test.questions.length} answered • <strong className="text-slate-900">{Math.ceil(activeDraft.timeRemainingSeconds / 60)} mins</strong> remaining.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 shrink-0 self-end md:self-center">
            <button
              onClick={handleDiscardDraft}
              className="btn-tactile px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/60 border border-slate-200"
            >
              Discard
            </button>
            <button
              onClick={handleResumeDraft}
              className="btn-tactile px-5 py-2.5 rounded-xl text-xs font-black bg-amber-600 hover:bg-amber-500 text-white shadow-elevation-1 flex items-center space-x-2"
            >
              <span>Resume Test</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Catalog Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-7 sm:p-9 text-white shadow-elevation-3 border border-sky-900/40">
        {/* Ambient atmospheric mesh glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              High-Volume Prelims Mock Test Simulator
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] px-2.5 py-0.5 rounded-full font-bold">
              100% Real Exam Conditions
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
            {showTelugu ? 'ప్రిలిమ్స్ మాక్ టెస్ట్ సిమ్యులేటర్ & నెగటివ్ మార్కింగ్ పరీక్షలు' : 'Prelims Mock Test Simulator & Negative Marking Engine'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl font-normal">
            {showTelugu
              ? 'యూపీఎస్సీ, ఏపీపీఎస్సీ, టీఎస్‌పీఎస్సీ స్థాయి ప్రశ్నలతో కూడిన సెక్షనల్ మరియు పూర్తి స్థాయి మాక్ టెస్టులు. డిజిటల్ ఓఎంఆర్ షీట్, టైమర్, నెగటివ్ మార్కింగ్ మరియు సమగ్ర సబ్జెక్ట్ విశ్లేషణను ఉచితంగా సాధన చేయండి.'
              : 'Timed test simulation with digital OMR bubble palette, strict 1/3rd negative marking, and instant subject diagnostic analysis. Zero redirects, completely in-portal.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs text-slate-300">
            <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold">{filteredTests.length} High-Yield Test Sets</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
              <span className="font-semibold">Negative Marking: 1/3rd Emulation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Practice Drill Studio Action Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-sky-950 rounded-2xl border border-indigo-800/40 p-6 text-white shadow-elevation-2 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Zap className="w-3 h-3 fill-slate-950" />
                Adaptive Practice Engine
              </span>
              <span className="text-xs text-indigo-200 font-mono">
                {ALL_PRELIMS_QUESTIONS.length}+ Micro-Topic MCQs Available
              </span>
            </div>
            <h3 className="text-lg font-black tracking-tight text-white">
              Instant Custom Practice Drill Studio
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Target your weak spots on demand. Generate timed micro-drills tailored by subject, difficulty, and question count with zero preparation delay.
            </p>
          </div>

          <button
            onClick={() => setIsDrillStudioOpen(!isDrillStudioOpen)}
            className="btn-tactile flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-black bg-white text-slate-900 hover:bg-indigo-50 shadow-elevation-1 hover:shadow-glow-sky transition-all"
          >
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>{isDrillStudioOpen ? 'Close Drill Studio' : 'Configure Custom Drill'}</span>
          </button>
        </div>

        {/* Expandable Drill Studio Controls */}
        {isDrillStudioOpen && (
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-4 gap-4 animate-fadeIn">
            {/* Subject Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Target Subject</label>
              <select
                value={drillSubject}
                onChange={(e) => setDrillSubject(e.target.value)}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="All">All Subjects (Mixed Drill)</option>
                <option value="Polity">Indian Polity & Constitution</option>
                <option value="History">Modern History & Movement</option>
                <option value="Economy">Indian Economy & RBI</option>
                <option value="Environment">Environment & Ecology</option>
                <option value="State">State Specific (AP/TS)</option>
              </select>
            </div>

            {/* Question Count */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Question Volume</label>
              <div className="flex rounded-xl bg-slate-800/90 border border-slate-700 p-1">
                {[5, 10, 20].map((count) => (
                  <button
                    key={count}
                    onClick={() => setDrillCount(count)}
                    className={`flex-1 py-1 text-xs font-black rounded-lg transition-all ${
                      drillCount === count
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {count} Qs
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Difficulty Level</label>
              <select
                value={drillDifficulty}
                onChange={(e) => setDrillDifficulty(e.target.value as any)}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="All">Balanced (Exam Mix)</option>
                <option value="Easy">Foundation (Easy)</option>
                <option value="Medium">Standard Prelims (Medium)</option>
                <option value="Hard">Advanced Elimination (Hard)</option>
              </select>
            </div>

            {/* Launch Action */}
            <div className="space-y-1.5 flex flex-col justify-end">
              <label className="text-xs font-bold text-transparent select-none hidden sm:block">Action</label>
              <button
                onClick={handleStartCustomDrill}
                className="btn-tactile w-full py-2.5 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center space-x-2 shadow-glow-emerald transition-all"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>Launch Practice Drill ({Math.round(drillCount * 1.2)}m)</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-2 border-b border-slate-200">
        <div className="flex items-center space-x-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 shadow-xs">
          {(['all', 'upsc', 'appsc', 'tspsc'] as (ExamId | 'all')[]).map((exam) => (
            <button
              key={exam}
              onClick={() => setFilterExam(exam)}
              className={`btn-tactile px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider transition-all ${
                filterExam === exam
                  ? 'bg-white text-slate-900 shadow-elevation-1 font-black border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              {exam === 'all' ? 'All Tests' : exam.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Showing <strong className="text-slate-900 font-bold">{filteredTests.length}</strong> verified mock tests
        </div>
      </div>

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTests.map((test) => {
          const testAttempts = savedAttempts.filter(a => a.testId === test.id);
          const lastAttempt = testAttempts[0];

          // Subject-accent color determination
          const subLower = test.subject.toLowerCase();
          const accentBar = subLower.includes('polity') 
            ? 'border-l-indigo-500' 
            : subLower.includes('history') 
            ? 'border-l-amber-500' 
            : subLower.includes('economy') 
            ? 'border-l-emerald-500' 
            : subLower.includes('environment') 
            ? 'border-l-teal-500' 
            : 'border-l-sky-500';

          const badgeTheme = subLower.includes('polity')
            ? 'bg-indigo-50 text-indigo-700 border-indigo-200/60'
            : subLower.includes('history')
            ? 'bg-amber-50 text-amber-700 border-amber-200/60'
            : subLower.includes('economy')
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
            : subLower.includes('environment')
            ? 'bg-teal-50 text-teal-700 border-teal-200/60'
            : 'bg-sky-50 text-sky-700 border-sky-200/60';

          return (
            <div
              key={test.id}
              className={`bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-elevation-1 hover:shadow-elevation-hover hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between space-y-5 border-l-4 ${accentBar} relative overflow-hidden group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${badgeTheme}`}>
                    {test.subject}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                    {test.type === 'sectional' ? 'Sectional Mock' : 'Full Length Mock'}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-sky-950 transition-colors">
                    {showTelugu && test.titleTelugu ? test.titleTelugu : test.title}
                  </h3>
                  {showTelugu && test.titleTelugu && (
                    <p className="text-xs text-slate-400 mt-1 font-medium">{test.title}</p>
                  )}
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <div className="flex items-center space-x-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{test.durationMinutes} mins</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <span className="font-medium">{test.questions.length} Questions</span>
                  <span className="text-slate-300">•</span>
                  <span className="font-medium">{test.totalMarks} Marks</span>
                </div>
              </div>

              {/* Card Footer: Past Score or Start Action */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                {lastAttempt ? (
                  <div className="text-xs">
                    <span className="text-slate-400 font-medium">Recent: </span>
                    <strong className="text-emerald-700 font-mono font-bold">
                      {lastAttempt.score}/{lastAttempt.maxScore}
                    </strong>
                    <span className="text-slate-400 ml-1 font-medium">({lastAttempt.accuracy}%)</span>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-400 font-medium">Not attempted yet</span>
                )}

                <button
                  onClick={() => startTest(test)}
                  className="btn-tactile flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-black bg-slate-900 hover:bg-sky-600 text-white shadow-elevation-1 hover:shadow-glow-sky transition-all duration-200"
                >
                  <span>{lastAttempt ? 'Retake Test' : 'Start Test'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
