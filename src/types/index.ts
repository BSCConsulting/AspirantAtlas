export type ExamId = 'upsc' | 'appsc' | 'tspsc';

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
  targetTab: 'roadmap' | 'mock-tests' | 'mains-evaluator' | 'current-affairs' | 'study-planner' | 'vault';
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
  horizon: TimelineHorizon;
  stage: AspirantStage;
  onboardedAt: string;
}

