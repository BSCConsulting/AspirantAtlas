import React, { useState } from 'react';
import { ExamId, TimelineHorizon, AspirantStage, AspirantProfile } from '../types';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  BookOpen, 
  Target, 
  Award, 
  Zap, 
  Flame, 
  Check, 
  X,
  Layers,
  GraduationCap
} from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (profile: AspirantProfile) => void;
  showTelugu: boolean;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  showTelugu
}) => {
  const [step, setStep] = useState<number>(1);
  const [targetExam, setTargetExam] = useState<ExamId>('upsc');
  const [horizon, setHorizon] = useState<TimelineHorizon>('150-days');
  const [stage, setStage] = useState<AspirantStage>('beginner');

  if (!isOpen) return null;

  const handleFinish = () => {
    const profile: AspirantProfile = {
      targetExam,
      horizon,
      stage,
      onboardedAt: new Date().toISOString()
    };
    onComplete(profile);
  };

  const handleQuickPreset = (exam: ExamId, hrz: TimelineHorizon, stg: AspirantStage) => {
    setTargetExam(exam);
    setHorizon(hrz);
    setStage(stg);
    const profile: AspirantProfile = {
      targetExam: exam,
      horizon: hrz,
      stage: stg,
      onboardedAt: new Date().toISOString()
    };
    onComplete(profile);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl border-t sm:border border-slate-200/90 shadow-elevation-3 max-w-2xl w-full overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[92vh] animate-scaleUp">
        {/* Mobile Grab Handle */}
        <div className="sm:hidden w-12 h-1 bg-slate-400 rounded-full mx-auto mt-2.5 -mb-1 z-10" />
        
        {/* Top Header Ribbon */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-7 border-b border-indigo-900/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                {showTelugu ? 'అభ్యర్థి గైడ్ & వ్యక్తిగత ప్రణాళిక' : 'Aspirant Compass • 60-Second Diagnostic'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {showTelugu ? 'మీ సన్నద్ధత స్థాయికి అనుకూలమైన ప్రణాళిక' : 'Personalize Your Zero-to-Rank Engine'}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                {showTelugu 
                  ? 'సిలబస్ గందరగోళాన్ని తొలగించండి. మీ లక్ష్యం మరియు సమయ పరిమితిని ఎంచుకుంటే, పోర్టల్ స్వయంచాలకంగా మీ కోసం సరిగ్గా కాన్ఫిగర్ అవుతుంది.'
                  : 'Avoid cognitive overload. Tell us your target exam and timeline runway, and we will auto-filter bedrock modules and guide your next high-yield action.'}
              </p>
            </div>

            <button
              onClick={onClose}
              className="btn-tactile p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Stepper Dots */}
          <div className="relative z-10 flex items-center space-x-2 pt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === s ? 'w-8 bg-indigo-400' : step > s ? 'w-4 bg-emerald-400' : 'w-4 bg-slate-700'
                }`}
              />
            ))}
            <span className="text-[11px] font-mono font-bold text-slate-400 pl-2">
              Step {step} of 3
            </span>
          </div>
        </div>

        {/* Modal Body / Steps */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 flex-1">
          
          {/* ========================================== */}
          {/* STEP 1: TARGET EXAM SELECTION              */}
          {/* ========================================== */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {showTelugu ? '1. మీ లక్ష్య పరీక్ష ఏది?' : '1. Which Civil Services Examination are you targeting?'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  The syllabus roadmap, state specializations, and mock test vaults will align directly with this choice.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                {[
                  {
                    id: 'upsc',
                    name: 'UPSC CSE',
                    title: 'Civil Services Examination',
                    badge: 'All-India Cadre',
                    desc: 'National focus, GS Papers 1-4, Essay, and All-India Current Affairs',
                    color: 'border-sky-500 bg-sky-50/70 text-sky-950 ring-1 ring-sky-400'
                  },
                  {
                    id: 'appsc',
                    name: 'APPSC Group 1',
                    title: 'Andhra Pradesh PSC',
                    badge: 'State Leadership',
                    desc: 'AP Reorganisation Act 2014, Polavaram, Rayalaseema, and coastal governance',
                    color: 'border-emerald-500 bg-emerald-50/70 text-emerald-950 ring-1 ring-emerald-400'
                  },
                  {
                    id: 'tspsc',
                    name: 'TSPSC Group 1',
                    title: 'Telangana State PSC',
                    badge: 'State Leadership',
                    desc: 'Telangana Movement, State Formation, Kakatiya heritage & Irrigation architecture',
                    color: 'border-indigo-500 bg-indigo-50/70 text-indigo-950 ring-1 ring-indigo-400'
                  }
                ].map((item) => {
                  const isSelected = targetExam === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setTargetExam(item.id as ExamId)}
                      className={`btn-tactile p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                        isSelected 
                          ? item.color + ' shadow-elevation-1' 
                          : 'border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                            {item.badge}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <div className="text-base font-black text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-500 font-medium">{item.title}</div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* 1-Click Ranker Quick Starts */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  ⚡ 1-Click Instant Presets:
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleQuickPreset('upsc', '150-days', 'beginner')}
                    className="btn-tactile px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 hover:bg-sky-100 text-sky-900 text-xs font-bold transition-colors"
                  >
                    UPSC 2026: Zero-to-Rank (150 Days)
                  </button>
                  <button
                    onClick={() => handleQuickPreset('appsc', '90-days', 'intermediate')}
                    className="btn-tactile px-3 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold transition-colors"
                  >
                    APPSC: 90-Day Standard Sprint
                  </button>
                  <button
                    onClick={() => handleQuickPreset('tspsc', '30-days', 'mains-focused')}
                    className="btn-tactile px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold transition-colors"
                  >
                    TSPSC: 30-Day Crash & Mains Drill
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* STEP 2: PREPARATION RUNWAY / HORIZON       */}
          {/* ========================================== */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {showTelugu ? '2. మీ ప్రిపరేషన్ కాలవ్యవధి ఎంత?' : '2. What is your preparation runway / timeline?'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  We auto-schedule daily phases, revision cycles, and high-yield topic weightage to fit your exact window.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                {[
                  {
                    id: '30-days',
                    name: '30-Day Crash Sprint',
                    telugu: '30 రోజుల క్రాష్ కోర్సు',
                    timeframe: '1 Month Runway',
                    desc: 'High/Very-High weightage nodes only. Rapid MCQ drills and elimination triage.',
                    icon: <Zap className="w-4 h-4 text-amber-500" />
                  },
                  {
                    id: '90-days',
                    name: '90-Day Standard Sprint',
                    telugu: '90 రోజుల సమగ్ర ప్రణాళిక',
                    timeframe: '3 Months Runway',
                    desc: 'Balanced study: Bedrock theory, daily quizzes, state specializations & weekly Mains writing.',
                    icon: <Calendar className="w-4 h-4 text-emerald-500" />
                  },
                  {
                    id: '150-days',
                    name: '150-Day Zero-to-Rank',
                    telugu: '150 రోజుల సంపూర్ణ ఫౌండేషన్',
                    timeframe: '5 Months Runway',
                    desc: 'Zero-knowledge to ranker foundation: Comprehensive syllabus coverage, PYQs, and Gemini AI grading.',
                    icon: <Target className="w-4 h-4 text-indigo-500" />
                  }
                ].map((item) => {
                  const isSelected = horizon === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setHorizon(item.id as TimelineHorizon)}
                      className={`btn-tactile p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                        isSelected 
                          ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 ring-1 ring-indigo-400 shadow-elevation-1' 
                          : 'border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                            {item.timeframe}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                        </div>
                        <div className="flex items-center space-x-1.5 pt-1">
                          {item.icon}
                          <div className="text-sm font-black text-slate-900">{item.name}</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* STEP 3: CURRENT MASTERY LEVEL / STAGE       */}
          {/* ========================================== */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {showTelugu ? '3. ప్రస్తుత మీ సన్నద్ధత స్థాయి ఏమిటి?' : '3. What is your current preparation stage?'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  This tells the Smart Compass whether to start with foundational concepts, high-volume MCQs, or Mains grading.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                {[
                  {
                    id: 'beginner',
                    title: 'Starting from Zero',
                    subtitle: 'Absolute Beginner',
                    badge: 'Recommended: Phase 1 Core',
                    desc: 'No prior background. Start with Constitutional Framework, Writs, and Modern History anchors.',
                    icon: <GraduationCap className="w-5 h-5 text-indigo-600" />
                  },
                  {
                    id: 'intermediate',
                    title: 'Foundation Ready',
                    subtitle: 'Intermediate Aspirant',
                    badge: 'Syllabus & MCQ Drills',
                    desc: 'Read standard books/NCERTs once. Ready to test concept retention and clear prelims cutoffs.',
                    icon: <BookOpen className="w-5 h-5 text-teal-600" />
                  },
                  {
                    id: 'mains-focused',
                    title: 'Mains & Rank Push',
                    subtitle: 'Advanced / Repeater',
                    badge: 'AI Answer Grading',
                    desc: 'Prelims basics clear. Focus on structuring 150-250 word answers and scoring 100+ marks in GS papers.',
                    icon: <Award className="w-5 h-5 text-amber-600" />
                  }
                ].map((item) => {
                  const isSelected = stage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setStage(item.id as AspirantStage)}
                      className={`btn-tactile p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                        isSelected 
                          ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 ring-1 ring-indigo-400 shadow-elevation-1' 
                          : 'border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                            {item.subtitle}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                        </div>
                        <div className="flex items-center space-x-2 pt-1">
                          <div className="p-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                            {item.icon}
                          </div>
                          <div className="text-sm font-black text-slate-900">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Summary of Configuration */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Configuring: <strong className="text-slate-900 font-bold">{targetExam.toUpperCase()}</strong> • <strong className="text-slate-900 font-bold">{horizon}</strong> • <strong className="text-slate-900 font-bold capitalize">{stage}</strong></span>
                </div>
                <span className="text-emerald-700 font-black text-[11px] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Auto-Filters Core Bedrock
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Navigation Buttons */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <div>
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="btn-tactile px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              >
                Back
              </button>
            ) : (
              <button
                onClick={onClose}
                className="btn-tactile px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Skip for Now
              </button>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="btn-tactile flex items-center space-x-1.5 px-5 py-2.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-500 text-white shadow-elevation-1 hover:shadow-glow-indigo transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="btn-tactile flex items-center space-x-1.5 px-6 py-2.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-elevation-1 hover:shadow-glow-emerald transition-all"
              >
                <Check className="w-4 h-4" />
                <span>Launch My Custom Engine</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
