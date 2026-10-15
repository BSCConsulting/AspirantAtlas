import React, { useState, useEffect } from 'react';
import { MainsEvaluationReport, DimensionalScore } from '../types';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Sparkles, 
  ChevronRight, 
  RefreshCw, 
  BookOpen, 
  Compass, 
  History,
  TrendingUp,
  HelpCircle,
  Copy,
  ChevronDown,
  ChevronUp,
  BookMarked,
  Camera,
  Image as ImageIcon,
  Key,
  X,
  Zap
} from 'lucide-react';
import { evaluateMainsAnswer, getGeminiApiKey } from '../services/geminiEvaluator';
import { GeminiKeyModal } from './GeminiKeyModal';

interface MainsEvaluatorProps {
  showTelugu: boolean;
  onNavigateToNode?: (nodeId: string) => void;
  customQuestionPrompt?: { question: string; topic: string } | null;
  onEvaluationCompleted?: (score: number) => void;
}

interface QuestionPrompt {
  id: string;
  topic: string;
  marks: 10 | 15;
  idealWords: number;
  question: string;
  questionTelugu: string;
  keyArticlesOrActs: string[];
  pestleThemes: string[];
  modelIntro: string;
  modelBody: { title: string; points: string[] }[];
  modelWayForward: string;
}

const QUESTION_BANK: QuestionPrompt[] = [
  {
    id: 'mains-q1',
    topic: 'Polity & Federalism',
    marks: 15,
    idealWords: 250,
    question: 'The office of the Governor was envisioned as an institutional bridge of federal harmony, but has increasingly emerged as a friction point in Union-State relations. Critically analyze in light of recent constitutional jurisprudence.',
    questionTelugu: 'గవర్నర్ వ్యవస్థ సమాఖ్య సామరస్యానికి ఒక సంధానకర్తగా ఊహించబడింది, కానీ ఇటీవలి కాలంలో కేంద్ర-రాష్ట్ర సంబంధాలలో వివాదాస్పద అంశంగా మారింది. ఇటీవలి రాజ్యాంగ తీర్పుల వెలుగులో విమర్శనాత్మకంగా విశ్లేషించండి.',
    keyArticlesOrActs: ['Article 153', 'Article 163', 'Article 200', 'Article 356', 'Sarkaria Commission', 'Punchhi Commission', 'S.R. Bommai case', 'Shamsher Singh case'],
    pestleThemes: ['Constitutional', 'Political', 'Federal', 'Administrative', 'Judicial'],
    modelIntro: 'Article 153 provides for the Governor as the constitutional head of the state. While intended as an anchor of federal unity, discretionary powers under Article 163 and legislative assent under Article 200 have caused severe inter-governmental friction.',
    modelBody: [
      {
        title: 'Core Friction Points in State Governance',
        points: [
          'Withholding Assent (Article 200): Sitting indefinitely on state bills without returning them "as soon as possible".',
          'Discretionary Role in Government Formation: Arbitrary discretion during hung assemblies without adhering to the Sarkaria conventions.',
          'Misuse of Article 356: Historical imposition of President\'s Rule, though curbed by S.R. Bommai (1994).'
        ]
      },
      {
        title: 'Judicial Directives & Constitutional Guardrails',
        points: [
          'Punjab & Tamil Nadu Governor cases (2023-24): Supreme Court held Governors cannot veto bills by sitting on them indefinitely; withholding assent requires immediate return.',
          'Shamsher Singh (1974) doctrine: Governor must act solely on the aid and advice of the Council of Ministers, barring rare exceptional discretion.',
          'Nabam Rebia (2016): Governor\'s discretion is limited and subject to judicial review.'
        ]
      }
    ],
    modelWayForward: 'Implement Sarkaria and Punchhi Commission recommendations: Consultation with the Chief Minister prior to appointment, fixed timelines for Article 200 assent, and insulating the Governor from partisan political currents.'
  },
  {
    id: 'mains-q2',
    topic: 'Sub-classification & Equality',
    marks: 15,
    idealWords: 250,
    question: 'Sub-classification within backward classes is an extension of substantive equality rather than a compromise with it. Critically evaluate with reference to the recent Supreme Court 7-judge bench ruling.',
    questionTelugu: 'వెనుకబడిన తరగతుల్లో ఉపవర్గీకరణ అనేది సమానత్వ సూత్రాన్ని మరింత పటిష్టం చేయడమే తప్ప దానిని బలహీనపరచడం కాదు. సుప్రీంకోర్టు 7-న్యాయమూర్తుల ధర్మాసనం తీర్పు ఆధారంగా విశ్లేషించండి.',
    keyArticlesOrActs: ['Article 14', 'Article 15(4)', 'Article 16(4)', 'Article 341', 'E.V. Chinnaiah', 'Indra Sawhney', 'Substantive Equality', 'Empirical Data'],
    pestleThemes: ['Social', 'Constitutional', 'Judicial', 'Policy', 'Inclusivity'],
    modelIntro: 'The Supreme Court\'s 7-judge Constitution bench landmark judgment in State of Punjab v. Davinder Singh (2024) overruled the E.V. Chinnaiah verdict, affirming that Scheduled Castes are not a monolithic group and can be sub-classified to achieve substantive equality under Articles 14 and 16(4).',
    modelBody: [
      {
        title: 'Constitutional Justification for Sub-Classification',
        points: [
          'Affirmative Action as Substantive Equality: Article 14 permits reasonable classification; treating unequals equally perpetuates inequality.',
          'Article 341 Re-interpretation: Presidential list identifies the castes, but the State retains power to apportion quotas based on degrees of backwardness without modifying the list itself.',
          'Preventing Elite Capture: Ensures the most disadvantaged and marginalized sub-castes (e.g. Madigas, Valmikis) receive meaningful access to state benefits.'
        ]
      },
      {
        title: 'Mandatory Safeguards & Judicial Limits',
        points: [
          'Empirical Proof: State must produce verifiable, quantifiable socio-economic data proving acute under-representation.',
          'No 100% Exclusivity: State cannot appropriate the entire quota for a single sub-caste, denying others their reasonable share.'
        ]
      }
    ],
    modelWayForward: 'States must institute independent, statutory Commissions to conduct rigorous empirical surveys before implementing sub-quotas, preserving social cohesion while delivering targeted justice.'
  },
  {
    id: 'mains-q3',
    topic: 'AP Reorganisation Act & Economy',
    marks: 15,
    idealWords: 250,
    question: 'Discuss the lingering socio-economic and infrastructural repercussions of the Andhra Pradesh Reorganisation Act, 2014 on the state finances. How can a sustainable development model be realized?',
    questionTelugu: 'ఆంధ్రప్రదేశ్ పునర్విభజన చట్టం 2014 రాష్ట్ర ఆర్థిక వ్యవస్థ, మౌలిక సదుపాయాలపై చూపిన ప్రభావాలను చర్చించండి. స్థిరమైన వృద్ధి సాధనకు మార్గదర్శకాలను సూచించండి.',
    keyArticlesOrActs: ['AP Reorganisation Act 2014', 'Section 46', 'Section 90', 'Section 94', 'Polavaram Project', 'Amaravati', 'Revenue Deficit'],
    pestleThemes: ['Economic', 'Fiscal', 'Infrastructural', 'Industrial', 'Regional Equity'],
    modelIntro: 'The bifurcation of Andhra Pradesh in 2014 stripped the successor state of Hyderabad, its primary revenue engine (~60% of commercial taxes), leaving AP with an immediate ₹16,000+ crore structural revenue deficit, inadequate tier-1 urban infrastructure, and elongated coastal logistics.',
    modelBody: [
      {
        title: 'Major Fiscal & Structural Repercussions',
        points: [
          'Capital Loss & Revenue Asymmetry: Loss of IT and pharma hub revenues created persistent fiscal strain and high debt-to-GSDP ratios.',
          'Polavaram National Project (Section 90): Crucial lifeline for Rayalaseema drought mitigation and Krishna-Godavari interlinking requiring timely central reimbursement.',
          'Industrial & Tax Incentives (Section 94): Subdued realization of promised central concessions hindered major greenfield manufacturing investments.'
        ]
      },
      {
        title: 'Strategic Levers for Sustainable Revival',
        points: [
          'Port-Led Industrial Growth: Leveraging the 974 km coastline through ports like Ramayapatnam, Bhavanapadu, and Machilipatnam.',
          'Agriculture Value Addition: Aqua-farming, horticulture processing, and decentralized Rayalaseema solar/wind energy corridors.'
        ]
      }
    ],
    modelWayForward: 'Expediting the Amaravati capital construction via multilateral funding, completing Polavaram up to 41.15m contour, and rigorous fiscal consolidation will place AP on a high-growth trajectory.'
  },
  {
    id: 'mains-q4',
    topic: 'Ethics & Civil Service Neutrality (GS-4)',
    marks: 10,
    idealWords: 150,
    question: 'Political neutrality and intellectual integrity are the bedrock of civil service values. How should a civil servant navigate situations where political executive directives conflict with constitutional morality?',
    questionTelugu: 'రాజకీయ తటస్థత మరియు మేధో సమగ్రత పౌర సేవా విలువల పునాది. కార్యనిర్వాహక ఆదేశాలు రాజ్యాంగ నైతికతతో విభేదించినప్పుడు ఒక సివిల్ సర్వెంట్ ఎలా వ్యవహరించాలి?',
    keyArticlesOrActs: ['Article 311', 'Civil Services Conduct Rules 1964', 'Nolan Committee Principles', 'Constitutional Morality', 'Second ARC 4th Report'],
    pestleThemes: ['Ethical', 'Administrative', 'Constitutional', 'Moral', 'Professional'],
    modelIntro: 'Civil service neutrality requires serving the elected government of the day with professional competence while maintaining steadfast allegiance to the Constitution rather than any political ideology.',
    modelBody: [
      {
        title: 'Core Dilemma & Resolution Protocol',
        points: [
          'Written Dissent & Objective Recording: Record factual objections respectfully on official files citing rules and judicial precedents before executing lawful written orders.',
          'Upholding Constitutional Morality: When an order is manifestly illegal or unconstitutional, obedience cannot override fundamental law (Nolan Principles of Integrity and Accountability).',
          'Use of Institutional Redressal: Seeking formal clarification from superior administrative echelons or appellate oversight authorities.'
        ]
      }
    ],
    modelWayForward: 'Institutionalizing statutory Civil Services Boards to insulate officers against arbitrary transfers and fostering administrative courage anchored in ethical leadership.'
  },
  {
    id: 'mains-q5',
    topic: 'Indian Economy & Inclusive Growth (GS-3)',
    marks: 15,
    idealWords: 250,
    question: 'Despite robust GDP growth, India faces the twin challenges of low female labor force participation and manufacturing stagnancy. Analyze the structural impediments and suggest transformative solutions.',
    questionTelugu: 'శరవేగంగా జీడీపీ వృద్ధి చెందుతున్నప్పటికీ, మహిళా శ్రామిక భాగస్వామ్యం తక్కువగా ఉండటం మరియు ఉత్పాదక రంగ స్తబ్దత వంటి సవాళ్లను భారతదేశం ఎదుర్కొంటోంది. నిర్మాణాత్మక అడ్డంకులను విశ్లేషించి పరిష్కారాలను సూచించండి.',
    keyArticlesOrActs: ['Periodic Labour Force Survey (PLFS)', 'National Manufacturing Policy', 'PLI Schemes', 'Care Economy', 'Apprenticeship Act'],
    pestleThemes: ['Economic', 'Social', 'Industrial', 'Demographic', 'Fiscal'],
    modelIntro: 'India\'s demographic dividend presents a narrow historical window. However, a sub-30% female labor force participation rate (FLFPR) and manufacturing contributing barely ~15% of GDP threaten the realization of a \$5 trillion inclusive economy.',
    modelBody: [
      {
        title: 'Structural Impediments',
        points: [
          'Care Economy Burden & Mobility Barriers: Disproportionate unpaid domestic responsibilities and safety concerns restrict formal female employment.',
          'Missing Middle in Industry: Capital-intensive growth creates few semi-skilled factory jobs, bypassing surplus farm laborers.',
          'Inverted Duty Structures & Logistics Friction: High compliance burdens and power tariffs hinder export competitiveness.'
        ]
      },
      {
        title: 'Transformative Levers',
        points: [
          'State Support for Care Infrastructure: Subsidized creches and maternity incentives under Mission Shakti.',
          'Labor-Intensive Manufacturing Zones: Targeted incentives for textiles, electronics assembly, and food processing.'
        ]
      }
    ],
    modelWayForward: 'Convergence of PLI schemes with MSME value chains and institutional credit guarantees will unlock labor-absorptive, gender-balanced growth.'
  },
  {
    id: 'mains-q6',
    topic: 'Internal Security & Drone Warfare (GS-3)',
    marks: 15,
    idealWords: 250,
    question: 'The weaponization of emerging technologies like commercial drones and autonomous swarms has redefined asymmetric warfare on India\'s borders. Evaluate the defense preparedness and regulatory framework.',
    questionTelugu: 'వాణిజ్య డ్రోన్లు మరియు అటానమస్ స్వార్మ్‌ల వంటి ఆధునిక సాంకేతికతల ఉపయోగం సరిహద్దుల్లో అసమాన యుద్ధ రీతులను మార్చేసింది. భారతదేశ రక్షణ సంసిద్ధత మరియు నియంత్రణ చట్రాన్ని సమీక్షించండి.',
    keyArticlesOrActs: ['Drone Rules 2021', 'National Counter-RPA Strategy', 'Theatre Commands', 'Integrated Air Defense', 'Border Security Force Act'],
    pestleThemes: ['Security', 'Technological', 'Geopolitical', 'Regulatory', 'Defense'],
    modelIntro: 'Low-cost commercial unmanned aerial systems (UAS) operating at radar blind spots have revolutionized cross-border smuggling of narcotics, arms, and improvised explosive devices (IEDs), particularly across the western border.',
    modelBody: [
      {
        title: 'Operational Challenges for Border Forces',
        points: [
          'Asymmetric Cost-Curve: Intercepting inexpensive quadcopters with expensive conventional air defense missiles is financially unsustainable.',
          'Swarm Capability & GPS Spoofing: Coordinated multi-drone attacks challenge point-defense systems.',
          'Dual-Use Ambiguity: Distinguishing between civilian payload carriers and hostile intrusions in littoral zones.'
        ]
      },
      {
        title: 'Counter-Measures & Institutional Preparedness',
        points: [
          'Soft & Hard Kill Counter-UAS: Deploying RF jammers, laser-based directed energy weapons (DEWs), and acoustic sensor arrays.',
          'Integrated Theatre Command Air Defense: Real-time intelligence sharing between BSF, Army, and IAF.'
        ]
      }
    ],
    modelWayForward: 'Accelerating domestic defense R&D via iDEX (Innovations for Defence Excellence) and establishing indigenous counter-drone corridors along critical national infrastructure.'
  }
];

export const MainsEvaluatorView: React.FC<MainsEvaluatorProps> = ({ 
  showTelugu,
  customQuestionPrompt,
  onEvaluationCompleted
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionPrompt>(() => {
    if (customQuestionPrompt) {
      return {
        id: `custom-${Date.now()}`,
        topic: customQuestionPrompt.topic,
        marks: 15,
        idealWords: 250,
        question: customQuestionPrompt.question,
        questionTelugu: customQuestionPrompt.question,
        keyArticlesOrActs: ['Constitutional Provisions', 'Statutory Acts', 'Expert Committees'],
        pestleThemes: ['Governance', 'Policy', 'Socio-Economic', 'Administrative'],
        modelIntro: `Contextualized introduction analyzing ${customQuestionPrompt.topic} within the contemporary governance landscape.`,
        modelBody: [
          {
            title: 'Critical Dimensions & Institutional Analysis',
            points: [
              'Key friction points and structural policy challenges.',
              'Impact across governance, accountability, and citizen service delivery.',
              'Judicial and statutory mandates.'
            ]
          }
        ],
        modelWayForward: 'Implement committee recommendations, ensure transparency, and establish continuous monitoring mechanisms.'
      };
    }
    return QUESTION_BANK[0];
  });

  useEffect(() => {
    if (customQuestionPrompt) {
      setSelectedQuestion({
        id: `custom-${Date.now()}`,
        topic: customQuestionPrompt.topic,
        marks: 15,
        idealWords: 250,
        question: customQuestionPrompt.question,
        questionTelugu: customQuestionPrompt.question,
        keyArticlesOrActs: ['Constitutional Provisions', 'Statutory Acts', 'Expert Committees'],
        pestleThemes: ['Governance', 'Policy', 'Socio-Economic', 'Administrative'],
        modelIntro: `Contextualized introduction analyzing ${customQuestionPrompt.topic} within the contemporary governance landscape.`,
        modelBody: [
          {
            title: 'Critical Dimensions & Institutional Analysis',
            points: [
              'Key friction points and structural policy challenges.',
              'Impact across governance, accountability, and citizen service delivery.',
              'Judicial and statutory mandates.'
            ]
          }
        ],
        modelWayForward: 'Implement committee recommendations, ensure transparency, and establish continuous monitoring mechanisms.'
      });
    }
  }, [customQuestionPrompt]);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [handwrittenImage, setHandwrittenImage] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [report, setReport] = useState<MainsEvaluationReport | null>(null);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);
  const [showFodderVault, setShowFodderVault] = useState<boolean>(true);
  const [isGeminiModalOpen, setIsGeminiModalOpen] = useState<boolean>(false);
  const [hasGeminiKey, setHasGeminiKey] = useState<boolean>(() => !!getGeminiApiKey());
  const [pastReports, setPastReports] = useState<MainsEvaluationReport[]>(() => {
    try {
      const saved = localStorage.getItem('aspirant_mains_reports');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Timer interval
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Word count calculation
  const wordCount = userAnswer.trim() === '' ? 0 : userAnswer.trim().split(/\s+/).length;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setHandwrittenImage(base64);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleEvaluate = async () => {
    if (wordCount < 30 && !handwrittenImage) {
      alert(showTelugu 
        ? 'దయచేసి కనీసం 30 పదాలతో మీ జవాబును రాయండి లేదా చేతిరాత కాపీని అప్‌లోడ్ చేయండి.' 
        : 'Please write at least 30 words or upload a handwritten answer sheet photo.');
      return;
    }

    setIsEvaluating(true);
    setIsTimerRunning(false);

    try {
      const evaluatedReport = await evaluateMainsAnswer({
        questionText: selectedQuestion.question,
        keyArticlesOrActs: selectedQuestion.keyArticlesOrActs,
        userAnswerText: userAnswer,
        imageBase64: handwrittenImage || undefined,
        totalMarks: selectedQuestion.marks
      });

      // If text was extracted from handwritten image and user textarea was empty, populate it
      if (evaluatedReport.extractedHandwrittenText && !userAnswer) {
        setUserAnswer(evaluatedReport.extractedHandwrittenText);
      }

      setReport(evaluatedReport);
      const updated = [evaluatedReport, ...pastReports.slice(0, 9)];
      setPastReports(updated);
      localStorage.setItem('aspirant_mains_reports', JSON.stringify(updated));
      if (onEvaluationCompleted) {
        onEvaluationCompleted(evaluatedReport.marksAwarded);
      }
    } catch (err) {
      console.error('Failed to evaluate Mains answer:', err);
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setUserAnswer('');
    setReport(null);
    setShowModelAnswer(false);
    setTimerSeconds(0);
    setIsTimerRunning(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Studio Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-elevation-3 border border-indigo-900/50 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-10">
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-indigo-500/15 via-sky-500/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-indigo-500/25 text-indigo-300 border border-indigo-400/30 text-xs px-3.5 py-1 rounded-full font-black uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300 animate-pulse" />
              Mains Answer Evaluator Studio
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] px-2.5 py-0.5 rounded-full font-bold">
              Instant 5-Pillar Rubric (15M)
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {showTelugu ? 'ఎఐ మెయిన్స్ ఆన్సర్ ఎవాల్యుయేటర్ & ఫీడ్‌బ్యాక్ స్టూడియో' : 'AI Mains Answer Evaluation & Diagnostic Studio'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {showTelugu 
              ? 'యూపీఎస్సీ, ఏపీపీఎస్సీ, టీఎస్‌పీఎస్సీ మెయిన్స్ ప్రశ్నలకు మీ జవాబును రాసి క్షణాల్లో 15 మార్కుల సమగ్ర ఎవాల్యుయేషన్, రాజ్యాంగ ఆర్టికల్స్ గుర్తింపు, మరియు మోడల్ సమాధానాన్ని పొందండి.'
              : 'Draft or paste your Mains answers for instant multi-dimensional evaluation out of 15/20 Marks. Assesses structural cohesion, constitutional case citations, PESTLE breadth, and provides topper model answers.'}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setIsGeminiModalOpen(true)}
              className="btn-tactile flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-sm transition-all"
            >
              <Key className="w-3.5 h-3.5 text-sky-300" />
              <span>{hasGeminiKey ? 'Gemini 1.5/2.5 Flash Connected ✓' : 'Connect Gemini API Key'}</span>
            </button>
            <span className="text-[11px] text-slate-400">
              {hasGeminiKey ? 'Semantic Chief Examiner Grading Enabled' : 'Offline Heuristic Mode Active'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Question Selection & Writing Studio (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Question Selector Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-elevation-2 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                Select Curated Question Prompt
              </label>
              <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-200 shadow-2xs">
                {selectedQuestion.marks} Marks • ~{selectedQuestion.idealWords} Words
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {QUESTION_BANK.map((q, idx) => {
                const active = selectedQuestion.id === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setSelectedQuestion(q);
                      handleReset();
                    }}
                    className={`btn-tactile p-2.5 rounded-xl border text-left text-xs transition-all ${
                      active
                        ? 'border-indigo-600 bg-indigo-50/80 font-black text-indigo-950 shadow-elevation-1 ring-1 ring-indigo-500/30'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-[9px] uppercase font-black text-indigo-600 mb-0.5">
                      {idx === 0 ? 'GS-2' : idx === 1 ? 'GS-2' : idx === 2 ? 'State' : idx === 3 ? 'GS-4' : idx === 4 ? 'GS-3' : 'GS-3'}
                    </div>
                    <div className="line-clamp-2 leading-tight font-medium text-[11px]">{q.topic}</div>
                  </button>
                );
              })}
            </div>

            {/* Custom Editorial Hook Active Badge */}
            {selectedQuestion.id.startsWith('custom-') && (
              <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 text-indigo-950 px-3.5 py-2.5 rounded-xl text-xs flex flex-wrap items-center justify-between gap-2 shadow-xs">
                <span className="font-extrabold flex items-center gap-1.5 text-indigo-900">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Imported Editorial Prompt: {selectedQuestion.topic}</span>
                </span>
                <span className="text-[10px] uppercase font-black bg-indigo-200/90 text-indigo-950 px-2.5 py-0.5 rounded-full border border-indigo-300/50">
                  Daily Bridge Active
                </span>
              </div>
            )}

            {/* Selected Question Details */}
            <div className="bg-slate-50/80 rounded-2xl p-4.5 border border-slate-200/80 shadow-inner">
              <h3 className="font-extrabold text-slate-900 text-sm leading-relaxed mb-2">
                {showTelugu ? selectedQuestion.questionTelugu : selectedQuestion.question}
              </h3>
              {showTelugu && (
                <p className="text-xs text-slate-500 italic border-t border-slate-200/60 pt-2">
                  English: {selectedQuestion.question}
                </p>
              )}
            </div>

            {/* Topper Answer Blueprint & Value-Addition Fodder Vault */}
            <div className="bg-gradient-to-br from-indigo-50/70 via-sky-50/40 to-white rounded-2xl border border-indigo-200/90 shadow-xs p-4.5 space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-2xs">
                    <BookMarked className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-extrabold text-xs text-indigo-950 uppercase tracking-wider">
                    Topper Fodder & Answer Writing Vault
                  </span>
                </div>
                <button
                  onClick={() => setShowFodderVault(!showFodderVault)}
                  className="btn-tactile text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-indigo-200 shadow-2xs"
                >
                  <span>{showFodderVault ? 'Hide Blueprint' : 'Peek at Key Articles & Dimensions'}</span>
                  {showFodderVault ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {showFodderVault && (
                <div className="space-y-3 pt-1 border-t border-indigo-100 animate-fadeIn">
                  
                  {/* Badges: Articles, Acts & PESTLE Dimensions */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-500">Key Provisions & Precedents:</span>
                      {selectedQuestion.keyArticlesOrActs.map((art, aIdx) => (
                        <span key={aIdx} className="text-[10px] font-mono font-bold bg-white text-indigo-900 border border-indigo-200 px-2 py-0.5 rounded-md shadow-2xs">
                          {art}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-500">PESTLE Angles:</span>
                      {selectedQuestion.pestleThemes.map((theme, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold bg-indigo-100/80 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Model Outline Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-slate-700">
                    <div className="bg-white/90 p-3 rounded-xl border border-slate-200/90 shadow-2xs space-y-1">
                      <span className="font-extrabold text-[11px] text-sky-800 uppercase tracking-wider block">
                        1. Introduction Hook
                      </span>
                      <p className="line-clamp-3 text-slate-600 leading-relaxed font-medium">
                        {selectedQuestion.modelIntro}
                      </p>
                    </div>

                    <div className="bg-white/90 p-3 rounded-xl border border-slate-200/90 shadow-2xs space-y-1">
                      <span className="font-extrabold text-[11px] text-indigo-800 uppercase tracking-wider block">
                        2. Core Dimensions
                      </span>
                      <ul className="space-y-0.5 text-slate-600 line-clamp-3 leading-relaxed">
                        {selectedQuestion.modelBody[0]?.points.slice(0, 2).map((pt, pidx) => (
                          <li key={pidx} className="truncate">• {pt}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/90 p-3 rounded-xl border border-slate-200/90 shadow-2xs space-y-1">
                      <span className="font-extrabold text-[11px] text-emerald-800 uppercase tracking-wider block">
                        3. Way Forward
                      </span>
                      <p className="line-clamp-3 text-slate-600 leading-relaxed font-medium">
                        {selectedQuestion.modelWayForward}
                      </p>
                    </div>
                  </div>

                  {/* Insert Outline Button */}
                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Struggling to structure? Insert the standard framework into your canvas.
                    </span>
                    <button
                      onClick={() => {
                        const scaffold = `## 1. Introduction Hook\n${selectedQuestion.modelIntro}\n\n## 2. Core Dimensions & Constitutional Arguments\n${selectedQuestion.modelBody.map(b => `### ${b.title}\n${b.points.map(p => `- ${p}`).join('\n')}`).join('\n\n')}\n\n## 3. Way Forward & Constitutional Morality\n${selectedQuestion.modelWayForward}`;
                        setUserAnswer(scaffold);
                      }}
                      className="btn-tactile text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-white hover:bg-slate-50 px-3 py-1 rounded-lg border border-indigo-200 shadow-2xs flex items-center gap-1 transition-all"
                    >
                      <Copy className="w-3 h-3 text-indigo-600" />
                      <span>Insert Scaffold Framework into Canvas</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Answer Control Toolbar with Dynamic Word-Count Gauge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              
              {/* Dynamic Word Gauge */}
              <div className="flex items-center space-x-2.5">
                <span className="text-xs font-bold text-slate-500">Word Count:</span>
                <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl font-mono text-xs font-black border transition-all ${
                  wordCount > selectedQuestion.idealWords + 40
                    ? 'bg-rose-50 border-rose-300 text-rose-700'
                    : wordCount >= 180
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 shadow-glow-emerald'
                    : wordCount >= 100
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  <span>{wordCount}</span>
                  <span className="text-slate-400">/</span>
                  <span>{selectedQuestion.idealWords}w</span>
                </div>
              </div>

              {/* Exam Timer */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`btn-tactile flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                    isTimerRunning
                      ? 'bg-rose-50 border-rose-200 text-rose-700 animate-pulse'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isTimerRunning ? 'Pause' : 'Start Timer'}</span>
                </button>
                <span className="font-mono font-black text-slate-800 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-xs">
                  {formatTimer(timerSeconds)}
                </span>
              </div>

            </div>

            {/* Writing Canvas */}
            <div className="relative">
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder={showTelugu 
                  ? "మీ సమాధానాన్ని ఇక్కడ టైప్ చేయండి... లేదా క్రింద ఉన్న బటన్ ద్వారా చేతిరాత కాపీని అప్‌లోడ్ చేయండి..." 
                  : "Type your structured answer here... Or upload a photo of your handwritten UPSC answer sheet below..."}
                rows={11}
                className="w-full p-5 rounded-2xl border border-slate-200/90 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none text-slate-800 text-sm leading-relaxed resize-y font-sans transition-all shadow-inner bg-slate-50/30 focus:bg-white"
              />
            </div>

            {/* Handwritten Answer Upload Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="flex items-center space-x-2.5">
                <label className="btn-tactile flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 cursor-pointer shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Upload Handwritten Paper (OCR)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <span className="text-[11px] text-slate-400 hidden sm:inline">Photos of handwritten copies evaluated via Gemini Vision</span>
              </div>

              {handwrittenImage && (
                <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-xl text-xs font-bold">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Answer Photo Attached</span>
                  <button
                    onClick={() => setHandwrittenImage(null)}
                    className="text-slate-400 hover:text-rose-600 ml-1"
                    title="Remove Image"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleReset}
                className="btn-tactile flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Answer</span>
              </button>

              <button
                onClick={handleEvaluate}
                disabled={isEvaluating}
                className={`btn-tactile flex items-center space-x-2 px-6 py-2.5 rounded-xl font-black text-xs text-white shadow-elevation-2 transition-all ${
                  isEvaluating
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-glow-indigo hover:shadow-elevation-hover'
                }`}
              >
                {isEvaluating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Evaluating 5 Dimensions...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Evaluate Answer (15 Marks)</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Model Answer Toggle Drawer */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setShowModelAnswer(!showModelAnswer)}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Topper Model Answer & Scaffold Framework</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showModelAnswer ? 'rotate-180' : ''}`} />
            </button>

            {showModelAnswer && (
              <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-4 text-xs leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1 text-indigo-700">
                    High-Scoring Introduction
                  </h4>
                  <p className="text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                    {selectedQuestion.modelIntro}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-indigo-700">
                    Body Segments & Arguments
                  </h4>
                  {selectedQuestion.modelBody.map((b, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5">
                      <div className="font-bold text-slate-800">{b.title}</div>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        {b.points.map((pt, pidx) => (
                          <li key={pidx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1 text-indigo-700">
                    Constructive Way Forward
                  </h4>
                  <p className="text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                    {selectedQuestion.modelWayForward}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Diagnostic Report Card & Past Analytics (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {report ? (
            /* Live Evaluation Report */
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6 animate-fadeIn">
              
              {/* Score Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Marks Awarded
                  </div>
                  <div className="flex items-baseline space-x-1.5 mt-0.5">
                    <span className="text-3xl font-extrabold text-slate-900">
                      {report.marksAwarded}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">
                      / {report.totalMarks}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold border ${
                    report.overallVerdict === 'Outstanding'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : report.overallVerdict === 'Good'
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                      : report.overallVerdict === 'Average'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {report.overallVerdict} ({report.percentage}%)
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {report.evaluatedAt}
                  </div>
                </div>
              </div>

              {/* Engine Badge */}
              <div className="flex items-center justify-between">
                {report.isGeminiEvaluated ? (
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-300 text-sky-950 text-xs font-black shadow-2xs">
                    <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
                    <span>Graded by Gemini 1.5/2.5 Flash</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Heuristic Rubric Evaluation</span>
                  </div>
                )}
                <span className="text-[11px] text-slate-400 font-mono">
                  {report.wordCount} Words Analyzed
                </span>
              </div>

              {/* Summary Diagnostic */}
              <div className="bg-indigo-50/60 rounded-xl p-3.5 border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
                <span className="font-bold">Evaluation Summary: </span>
                {report.summaryFeedback}
              </div>

              {/* 5-Pillar Score Breakdown */}
              <div className="space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  5-Pillar Dimensional Rubric
                </div>

                {report.dimensions.map((dim, idx) => {
                  const pct = Math.round((dim.score / dim.maxScore) * 100);
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">{dim.name}</span>
                        <span className="font-mono font-bold text-slate-700">
                          {dim.score} / {dim.maxScore}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-indigo-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-500 leading-tight">
                        {dim.feedback}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Paragraph-by-Paragraph Annotations (Examiner Margin Feedback) */}
              {report.paragraphAnnotations && report.paragraphAnnotations.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Examiner Paragraph Annotations</span>
                  </div>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {report.paragraphAnnotations.map((anno, aidx) => (
                      <div
                        key={aidx}
                        className={`p-3 rounded-xl border text-xs space-y-1 ${
                          anno.tag === 'strength'
                            ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                            : anno.tag === 'weakness'
                            ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                            : 'bg-amber-50/70 border-amber-200 text-amber-950'
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold text-[11px]">
                          <span>Para {anno.paragraphIndex + 1}: "{anno.snippet}"</span>
                          <span className="uppercase text-[9px] px-1.5 py-0.5 rounded font-black tracking-wider bg-white/90 border border-slate-200">
                            {anno.tag}
                          </span>
                        </div>
                        <p className="leading-snug text-slate-700">{anno.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topper Model Comparison Gaps */}
              {report.modelComparisonGaps && report.modelComparisonGaps.length > 0 && (
                <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-sky-950">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                    <span>Topper Benchmark Difference (Points to Add)</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-sky-900 leading-relaxed">
                    {report.modelComparisonGaps.map((gap, gidx) => (
                      <li key={gidx}>{gap}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Missing High-Yield Keywords / Concepts */}
              {report.missingKeyConcepts.length > 0 && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Missing Topper Citations / Provisions</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {report.missingKeyConcepts.map((kw, kidx) => (
                      <span key={kidx} className="bg-white text-amber-900 border border-amber-300 text-[11px] px-2 py-0.5 rounded-md font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Diagrammatic Recommendation */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-indigo-600" />
                  Suggested Value-Addition Visual:
                </span>
                <p className="text-slate-600">{report.suggestedDiagrams}</p>
              </div>

            </div>
          ) : (
            /* Empty State / How it Works Guide */
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <Award className="w-5 h-5 text-indigo-600" />
                <span>How the Mains Evaluator Scores You</span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-800">Core Demand & Conceptual Balance (3.5M):</strong> Direct adherence to command words (Critically analyze, Discuss, Evaluate).
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-800">Constitutional & Judicial Citations (3.0M):</strong> Mandatory inclusion of Articles, Landmark Judgments, and Law Commission reports.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-800">Structural Architecture (2.5M):</strong> Defined Introduction, thematic headings, and balanced synthesis.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-slate-800">PESTLE Dimensionality (3.0M):</strong> Interlinking Political, Economic, Social, Legal, and Administrative facets.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <strong className="text-slate-800">Actionable Way Forward (2.5M):</strong> Concrete, committee-backed policy roadmap.
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-[11px] text-slate-500 italic">
                Tip: Writing 1 answer every day under timed conditions increases mains selection probability by over 300%.
              </div>
            </div>
          )}

          {/* Past Submissions History */}
          {pastReports.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <History className="w-4 h-4 text-slate-500" />
                  Recent Submissions
                </span>
                <span className="text-slate-400 font-normal">{pastReports.length} attempts</span>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {pastReports.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setReport(r)}
                    className="w-full p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50 hover:bg-white text-left transition-colors flex items-center justify-between text-xs"
                  >
                    <div className="truncate max-w-[200px]">
                      <div className="font-semibold text-slate-800 truncate">{r.questionText}</div>
                      <div className="text-[10px] text-slate-400">{r.evaluatedAt}</div>
                    </div>
                    <div className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {r.marksAwarded}/{r.totalMarks}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Gemini API Key Configuration Modal */}
      <GeminiKeyModal
        isOpen={isGeminiModalOpen}
        onClose={() => setIsGeminiModalOpen(false)}
        onKeyUpdated={() => setHasGeminiKey(!!getGeminiApiKey())}
      />
    </div>
  );
};
