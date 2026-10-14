import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { X, Flame, Check, ArrowRight, RotateCcw, Award, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyDrillModalProps {
  onClose: () => void;
  streakDays: number;
  onDrillCompleted: () => void;
  showTelugu: boolean;
}

export const DailyDrillModal: React.FC<DailyDrillModalProps> = ({
  onClose,
  streakDays,
  onDrillCompleted,
  showTelugu
}) => {
  // A rapid-fire 5-question drill combining UPSC, APPSC, and TSPSC high-yield questions
  const DRILL_QUESTIONS: QuizQuestion[] = [
    {
      id: 'drill-1',
      question: 'Which of the following Fundamental Rights under Part III of the Constitution can be claimed by foreign nationals residing in India?',
      questionTelugu: 'భారతదేశంలో నివసిస్తున్న విదేశీ పౌరులు కూడా పొందే ప్రాథమిక హక్కు ఏది?',
      options: [
        'Article 15 (Prohibition of discrimination)',
        'Article 19 (Six freedoms of speech and movement)',
        'Article 21 (Protection of life and personal liberty)',
        'Article 29 (Protection of language and culture of minorities)'
      ],
      correctIndex: 2,
      explanation: 'Article 21 is available to all persons (both citizens and non-citizens alike). Articles 15, 16, 19, 29, and 30 are exclusively reserved for Indian citizens.',
      tag: 'Indian Polity'
    },
    {
      id: 'drill-2',
      question: 'Under Part VI of the AP Reorganisation Act 2014, on what precise basis was the apportioning of liquid cash and public debt decided between AP and Telangana?',
      questionTelugu: 'ఏపీ పునర్వ్యవస్థీకరణ చట్టం ప్రకారం నగదు నిల్వలు మరియు అప్పుల విభజన ఏ ప్రాతిపదికన జరిగింది?',
      options: [
        '50:50 parity division',
        '2011 Census Population Ratio (58.32% : 41.68%)',
        'State revenue contribution ratio of 2013-14',
        'Geographical land area proportion'
      ],
      correctIndex: 1,
      explanation: 'The Act strictly assigned liquid assets and public debt liabilities based on the 2011 Census population distribution: 58.32% for Andhra Pradesh and 41.68% for Telangana.',
      tag: 'AP Reorganisation'
    },
    {
      id: 'drill-3',
      question: 'The historic 1956 Gentlemen’s Agreement signed at Hyderabad House provided for how many minimum years of continuous residence to qualify as a Mulki in Telangana?',
      questionTelugu: '1956 పెద్దమనుషుల ఒప్పందం ప్రకారం తెలంగాణలో ముల్కీగా అర్హత సాధించడానికి ఎన్ని సంవత్సరాల నివాసం ఉండాలి?',
      options: ['5 years', '10 years', '12 years', '15 years'],
      correctIndex: 2,
      explanation: 'Clause 6 of the Gentlemen’s Agreement preserved the 12-year continuous residency requirement in the Telangana region to establish domicile (Mulki status).',
      tag: 'Telangana Movement'
    },
    {
      id: 'drill-4',
      question: 'Which constitutional writ literally translates to "We Command" and is used to compel a public official to perform an obligatory statutory duty?',
      questionTelugu: 'ప్రభుత్వ అధికారి తన చట్టబద్ధమైన విధిని నిర్వర్తించేలా ఆదేశించే రిట్ ఏది?',
      options: ['Habeas Corpus', 'Mandamus', 'Certiorari', 'Quo-Warranto'],
      correctIndex: 1,
      explanation: 'Mandamus is Latin for "We Command", directing public officials, corporations, or lower courts to perform public duties they have failed or refused to do.',
      tag: 'Constitutional Writs'
    },
    {
      id: 'drill-5',
      question: 'The Apex Council responsible for resolving water-sharing disputes and supervising the Krishna and Godavari River Management Boards is chaired by:',
      questionTelugu: 'కృష్ణా మరియు గోదావరి బోర్డులను పర్యవేక్షించే అపెక్స్ కౌన్సిల్ చైర్మన్ ఎవరు?',
      options: [
        'Union Minister of Jal Shakti (Water Resources)',
        'Chief Minister of Andhra Pradesh',
        'Chief Minister of Telangana',
        'Chairman of Central Water Commission'
      ],
      correctIndex: 0,
      explanation: 'Under Section 84 of the AP Reorganisation Act 2014, the Apex Council is chaired by the Union Minister of Water Resources / Jal Shakti with both Chief Ministers as members.',
      tag: 'Water Governance'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = DRILL_QUESTIONS[currentIndex];
  const selectedOpt = selectedAnswers[currentIndex];
  const hasAnsweredCurrent = selectedOpt !== undefined;

  const handleSelect = (optIdx: number) => {
    if (selectedAnswers[currentIndex] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleNext = () => {
    if (currentIndex < DRILL_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
      onDrillCompleted();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [idx, optIdx]) => {
    return acc + (optIdx === DRILL_QUESTIONS[Number(idx)].correctIndex ? 1 : 0);
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl border-t sm:border border-slate-200 max-h-[90vh] overflow-y-auto">
        {/* Mobile Grab Handle */}
        <div className="sm:hidden w-12 h-1 bg-slate-200 rounded-full mx-auto mt-2 mb-1" />
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-white fill-white animate-bounce" />
            <div>
              <h3 className="font-extrabold text-base">Daily Active Recall Drill</h3>
              <p className="text-[11px] text-amber-100 font-medium">Keep your {streakDays}-day streak burning!</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-amber-600/60 text-amber-100 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!isCompleted ? (
            <div className="space-y-4">
              
              {/* Progress dots */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 pb-2 border-b border-slate-100">
                <span>Question {currentIndex + 1} of {DRILL_QUESTIONS.length}</span>
                <span className="text-amber-600 font-mono text-[11px] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  {currentQ.tag}
                </span>
              </div>

              {/* Question Text */}
              <p className="text-sm font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </p>
              {showTelugu && currentQ.questionTelugu && (
                <p className="text-xs text-slate-600 font-medium font-sans">
                  {currentQ.questionTelugu}
                </p>
              )}

              {/* Options */}
              <div className="space-y-2 pt-1">
                {currentQ.options.map((opt, optIdx) => {
                  let style = 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-800';

                  if (hasAnsweredCurrent) {
                    if (optIdx === currentQ.correctIndex) {
                      style = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                    } else if (optIdx === selectedOpt) {
                      style = 'border-rose-400 bg-rose-50 text-rose-900';
                    } else {
                      style = 'border-slate-200 opacity-50 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={hasAnsweredCurrent}
                      onClick={() => handleSelect(optIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs flex items-center justify-between transition-all ${style}`}
                    >
                      <span>{opt}</span>
                      {hasAnsweredCurrent && optIdx === currentQ.correctIndex && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Reveal Explanation if answered */}
              {hasAnsweredCurrent && (
                <div className="bg-sky-50 border border-sky-100 p-3 rounded-xl text-xs text-sky-950 animate-in fade-in">
                  <span className="font-bold text-sky-900 block mb-0.5">Quick Rationale:</span>
                  {currentQ.explanation}
                </div>
              )}

              {/* Next Button */}
              {hasAnsweredCurrent && (
                <div className="pt-2">
                  <button
                    onClick={handleNext}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span>{currentIndex < DRILL_QUESTIONS.length - 1 ? 'Next Question' : 'Complete Daily Drill'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Completed Screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Drill Completed!</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                You scored <strong className="text-slate-900 font-bold">{score} out of {DRILL_QUESTIONS.length}</strong> on today's active recall challenge. Your streak has progressed!
              </p>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl max-w-xs mx-auto flex items-center justify-center space-x-2 text-amber-900 font-bold text-xs">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Streak Active: {streakDays} Days</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  Return to Roadmap
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
