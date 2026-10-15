export type ExamId = 'upsc' | 'appsc' | 'tspsc';

export type TrackScope = 
  | 'upsc_pure'            // Pure UPSC CSE (GS 1-4, CSAT, Essay)
  | 'tspsc_pure'           // Pure TSPSC Group 1 & 2
  | 'appsc_pure'           // Pure APPSC Group 1 & 2
  | 'tspsc_paper_2_6'      // TSPSC Special Track: Paper-II (History/Polity/Society) & Paper-VI (Telangana Movement)
  | 'appsc_group_1_2_core' // APPSC Special Track: Group 1 & 2 Core (AP History & Economy Focus)
  | 'dual_upsc_tspsc'      // Dual Track: UPSC + TSPSC Synchronized
  | 'dual_upsc_appsc';     // Dual Track: UPSC + APPSC Synchronized

export interface TrackConfig {
  id: TrackScope;
  baseExam: ExamId;
  label: string;
  labelTelugu: string;
  badge: string;
  category: 'single' | 'focused' | 'dual';
  description: string;
  papersIncluded: string[];
}

export type PhaseId = 'phase1' | 'phase2' | 'phase3';

export type NodeStatus = 'not_started' | 'in_progress' | 'completed';

export interface SyllabusNode {
  id: string;
  title: string;
  titleTelugu?: string;
  subject: string;
  phase: PhaseId;
  examScope: ExamId[];
  isStateExclusive?: boolean;
  estMinutes: number;
  description: string;
  keyConcepts: string[];
  weightage: 'High' | 'Very High' | 'Medium';
}

export interface StandardReference {
  title: string;
  source: string;
  relevance: string;
  freeUrl?: string;
}

export interface InfographicData {
  title: string;
  type: 'timeline' | 'comparison' | 'matrix' | 'flowchart';
  subtitle: string;
  items: {
    heading: string;
    subheading?: string;
    description: string;
    badge?: string;
    highlight?: boolean;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionTelugu?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tag: string;
}

export interface MainsScaffold {
  question: string;
  marks: number;
  timeMinutes: number;
  approach: {
    intro: string;
    body: {
      subheading: string;
      points: string[];
    }[];
    diagramSuggestion?: string;
    conclusion: string;
  };
}

export interface TopperVerifiedNotes {
  author: string;
  rankOrCred: string;
  keyTakeaways: string[];
  readingTime: string;
  corePointers: {
    title: string;
    notes: string[];
  }[];
}

export interface OfficialDocument {
  id: string;
  title: string;
  issuingAuthority: string;
  gazetteNoOrYear: string;
  downloadUrl: string;
  r2StorageKey?: string;
  fileSize?: string;
  isPrimaryLaw?: boolean;
}

export interface DocumentSection {
  numberOrCode: string;
  title: string;
  content: string[];
  keyHighlight?: string;
}

export interface ExamQueryItem {
  question: string;
  answer: string;
  examTip: string;
}

export interface DocumentDetail {
  id: string;
  title: string;
  titleTelugu?: string;
  issuingAuthority: string;
  dateOrYear: string;
  pages: string;
  summary: string;
  sections: DocumentSection[];
  queriesAndAnswers: ExamQueryItem[];
  testQuestions: QuizQuestion[];
  pdfFilename: string;
}

export interface TopicContent {
  nodeId: string;
  title: string;
  titleTelugu?: string;
  subject: string;
  overview: string;
  standardReferences: StandardReference[];
  infographic: InfographicData;
  cheatSheet: {
    corePillars: { title: string; points: string[] }[];
    statutoryOrConstitutionalProvisions: { code: string; label: string; detail: string }[];
    landmarkPrecedents: { title: string; significance: string }[];
    examPitfalls: string[];
  };
  topperNotes: TopperVerifiedNotes;
  officialDocuments: OfficialDocument[];
  microQuiz: QuizQuestion[];
  mainsScaffold: MainsScaffold;
}

export interface UserProgress {
  selectedExam: ExamId;
  completedNodeIds: string[];
  quizScores: Record<string, { score: number; total: number; date: string }>;
  streakDays: number;
  lastActive: string;
  dailyDrillCompletedToday: boolean;
}

// ==========================================
// MOCK TEST SIMULATOR TYPES
// ==========================================
export interface MockTestQuestion extends QuizQuestion {
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  topicId?: string;
}

export interface MockTest {
  id: string;
  title: string;
  titleTelugu?: string;
  exam: ExamId | 'all';
  type: 'sectional' | 'full_length' | 'previous_year';
  subject: string;
  durationMinutes: number;
  totalMarks: number;
  negativeMarkingRatio: number; // e.g. 0.33
  questions: MockTestQuestion[];
}

export interface TestAttemptResult {
  testId: string;
  testTitle: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  maxScore: number;
  accuracy: number;
  timeSpentSeconds: number;
  submittedAt: string;
  subjectBreakdown: Record<string, { total: number; correct: number; incorrect: number }>;
}

// ==========================================
// MAINS EVALUATOR TYPES
// ==========================================
export interface DimensionalScore {
  name: string;
  score: number;
  maxScore: number;
  feedback: string;
  foundKeywords: string[];
}

export interface MainsEvaluationReport {
  id: string;
  questionId: string;
  questionText: string;
  marksAwarded: number;
  totalMarks: number;
  percentage: number;
  overallVerdict: 'Outstanding' | 'Good' | 'Average' | 'Needs Improvement';
  summaryFeedback: string;
  wordCount: number;
  idealWordCount: number;
  dimensions: DimensionalScore[];
  structuralFeedback: {
    intro: { present: boolean; comment: string };
    body: { present: boolean; paragraphs: number; comment: string };
    conclusion: { present: boolean; comment: string };
  };
  missingKeyConcepts: string[];
  suggestedDiagrams: string;
  evaluatedAt: string;
  isGeminiEvaluated?: boolean;
  paragraphAnnotations?: {
    paragraphIndex: number;
    snippet: string;
    tag: 'strength' | 'weakness' | 'suggestion';
    comment: string;
  }[];
  modelComparisonGaps?: string[];
  extractedHandwrittenText?: string;
}

// ==========================================
// CURRENT AFFAIRS BRIDGE TYPES
// ==========================================
export interface CurrentAffairsItem {
  id: string;
  title: string;
  titleTelugu?: string;
  date: string;
  source: string;
  linkedNodeId: string;
  linkedTopicTitle: string;
  examScope: ExamId[];
  summary: string;
  highYieldPoints: string[];
  prelimsPointer: string;
  mainsQuestionHook: string;
}

// ==========================================
// 90-DAY STUDY PLANNER TYPES
// ==========================================
export interface StudyTask {
  id: string;
  title: string;
  type: 'reading' | 'revision' | 'quiz' | 'mains_practice';
  durationMinutes: number;
  completed: boolean;
  linkedNodeId?: string;
  resourceLink?: string;
}

export interface StudyPlanDay {
  dayNumber: number;
  phase: PhaseId;
  subject: string;
  title: string;
  titleTelugu?: string;
  description: string;
  tasks: StudyTask[];
}

export type TimelineHorizon = '30-days' | '90-days' | '150-days';

export interface OmnisearchItem {
  id: string;
  type: 'topic' | 'document' | 'mock-test' | 'mains-prompt' | 'current-affairs';
  title: string;
  titleTelugu?: string;
  category: string;
  snippet: string;
  targetTab: 'roadmap' | 'mock-tests' | 'mains-evaluator' | 'current-affairs' | 'study-planner' | 'vault' | 'maps';
  nodeId?: string;
  documentId?: string;
  testId?: string;
}

// ==========================================
// ASPIRANT ONBOARDING & GUIDANCE TYPES
// ==========================================
export type AspirantStage = 'beginner' | 'intermediate' | 'mains-focused';

export interface AspirantProfile {
  targetExam: ExamId;
  targetTrack?: TrackScope;
  horizon: TimelineHorizon;
  stage: AspirantStage;
  onboardedAt: string;
}

export const TRACK_CONFIGS: TrackConfig[] = [
  {
    id: 'upsc_pure',
    baseExam: 'upsc',
    label: 'UPSC CSE Pure',
    labelTelugu: 'యూపీఎస్సీ సివిల్స్ ప్రత్యేకం',
    badge: 'IAS / IPS / IFS',
    category: 'single',
    description: 'Strict focus on UPSC Prelims GS 1-2 & Mains GS 1-4 with Essay and optional orientation.',
    papersIncluded: ['Prelims Paper 1 & 2', 'Mains GS 1, 2, 3, 4', 'Essay']
  },
  {
    id: 'tspsc_pure',
    baseExam: 'tspsc',
    label: 'TSPSC Group 1 & 2',
    labelTelugu: 'టీఎస్‌పీఎస్సీ గ్రూప్ 1 & 2',
    badge: 'Telangana Cadre',
    category: 'single',
    description: 'Complete Telangana State Public Service Commission curriculum (Prelims & Mains Papers 1-6).',
    papersIncluded: ['Prelims GS', 'Paper-I General Essay', 'Paper-II History/Polity/Society', 'Paper-III Economy', 'Paper-IV Science & Tech', 'Paper-V Data Interpretation', 'Paper-VI Telangana Movement']
  },
  {
    id: 'appsc_pure',
    baseExam: 'appsc',
    label: 'APPSC Group 1 & 2',
    labelTelugu: 'ఏపీపీఎస్సీ గ్రూప్ 1 & 2',
    badge: 'Andhra Cadre',
    category: 'single',
    description: 'Comprehensive APPSC syllabus including AP Bifurcation Act, AP History, and AP Economy.',
    papersIncluded: ['Screening Test', 'Mains Paper-I General Essay', 'Paper-II AP History & Constitution', 'Paper-III Indian & AP Economy', 'Paper-IV Science & Tech', 'Paper-V Data Interpretation']
  },
  {
    id: 'tspsc_paper_2_6',
    baseExam: 'tspsc',
    label: 'TSPSC Paper-II & VI Focus',
    labelTelugu: 'తెలంగాణ మూవ్‌మెంట్ & పేపర్-2, 6 స్పెషల్',
    badge: 'High Weightage (300M)',
    category: 'focused',
    description: 'Decisive scoring track: Telangana History, Indian Constitution, Society (Paper-II) and Telangana Movement & State Formation (Paper-VI).',
    papersIncluded: ['Paper-II Section 1: History & Culture of India & Telangana', 'Paper-II Section 2: Indian Constitution', 'Paper-II Section 3: Society & Issues', 'Paper-VI Telangana Movement & State Formation (3 Phases)']
  },
  {
    id: 'appsc_group_1_2_core',
    baseExam: 'appsc',
    label: 'APPSC Group 1 & 2 Core Focus',
    labelTelugu: 'ఏపీ హిస్టరీ & ఎకానమీ కోర్ ఫోకస్',
    badge: 'AP State Core',
    category: 'focused',
    description: 'High-yield state-specific topics: Socio-Economic History of AP, Bifurcation Act 2014, and AP Budget & Schemes.',
    papersIncluded: ['Mains Paper-II AP History & Social Reforms', 'Mains Paper-III AP Economy & Bifurcation Challenges', 'Group-2 Paper-II Specifics']
  },
  {
    id: 'dual_upsc_tspsc',
    baseExam: 'tspsc',
    label: 'Dual Track: UPSC + TSPSC',
    labelTelugu: 'యూపీఎస్సీ + టీఎస్‌పీఎస్సీ డ్యూయల్ ట్రాక్',
    badge: 'Dual Aspirant',
    category: 'dual',
    description: 'Synchronized syllabus covering overlapping national GS topics while dedicating state study blocks for Telangana.',
    papersIncluded: ['UPSC GS 1-4', 'TSPSC Papers 1-6 with Movement sync']
  },
  {
    id: 'dual_upsc_appsc',
    baseExam: 'appsc',
    label: 'Dual Track: UPSC + APPSC',
    labelTelugu: 'యూపీఎస్సీ + ఏపీపీఎస్సీ డ్యూయల్ ట్రాక్',
    badge: 'Dual Aspirant',
    category: 'dual',
    description: 'Harmonized syllabus mapping standard NCERT/UPSC foundation to AP State specifics.',
    papersIncluded: ['UPSC GS 1-4', 'APPSC Mains Papers 1-5 with AP History sync']
  }
];

