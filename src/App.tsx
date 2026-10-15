import { useState, useEffect } from 'react';
import { ExamId, SyllabusNode, AspirantProfile, AspirantStage } from './types';
import { SYLLABUS_NODES } from './data/curriculum';
import { TOPIC_CONTENT_MAP } from './data/contentModules';
import { Header, ActiveNavTab } from './components/Header';
import { RoadmapView } from './components/RoadmapView';
import { TopicModal } from './components/TopicModal';
import { DailyDrillModal } from './components/DailyDrillModal';
import { ResourceVault } from './components/ResourceVault';
import { MockTestSimulator } from './components/MockTestSimulator';
import { MainsEvaluatorView } from './components/MainsEvaluatorView';
import { CurrentAffairsBridge } from './components/CurrentAffairsBridge';
import { StudyPlannerView } from './components/StudyPlannerView';
import { OmnisearchModal } from './components/OmnisearchModal';
import { AuthModal } from './components/AuthModal';
import { ProfileDrawer } from './components/ProfileDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { GeminiKeyModal } from './components/GeminiKeyModal';
import { OnboardingModal } from './components/OnboardingModal';
import { StudySessionModal } from './components/StudySessionModal';
import { AspirantUser, getCurrentUser } from './services/authService';
import { 
  StudySession, 
  getActiveSession, 
  startCheckIn, 
  endCheckOut, 
  recordSessionActivity 
} from './services/studySessionService';
import { Compass, ShieldCheck, ArrowLeft, ChevronRight } from 'lucide-react';

export function App() {
  const [currentUser, setCurrentUser] = useState<AspirantUser | null>(() => getCurrentUser());
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isGeminiKeyOpen, setIsGeminiKeyOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<StudySession | null>(() => 
    getActiveSession(currentUser?.id || 'default-aspirant')
  );
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [aspirantStage, setAspirantStage] = useState<AspirantStage>(() => {
    return (localStorage.getItem('aspirant_stage') as AspirantStage) || 'beginner';
  });

  const [selectedExam, setSelectedExam] = useState<ExamId>(() => {
    return (localStorage.getItem('aspirant_selected_exam') as ExamId) || 'appsc';
  });

  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aspirant_completed_nodes');
      return saved ? JSON.parse(saved) : ['polity-constitution-framework'];
    } catch {
      return ['polity-constitution-framework'];
    }
  });

  const [quizScores, setQuizScores] = useState<Record<string, { score: number; total: number }>>(() => {
    try {
      const saved = localStorage.getItem('aspirant_quiz_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [streakDays, setStreakDays] = useState<number>(() => {
    return parseInt(localStorage.getItem('aspirant_streak_days') || '3', 10);
  });

  const [showTelugu, setShowTelugu] = useState<boolean>(() => {
    return localStorage.getItem('aspirant_show_telugu') === 'true';
  });

  const [activeTab, setActiveTab] = useState<ActiveNavTab>(() => {
    return (localStorage.getItem('aspirant_active_tab') as ActiveNavTab) || 'roadmap';
  });

  const [navHistory, setNavHistory] = useState<ActiveNavTab[]>([]);

  const handleNavigateTab = (newTab: ActiveNavTab) => {
    if (newTab !== activeTab) {
      setNavHistory((prev) => [...prev, activeTab]);
      setActiveTab(newTab);
      localStorage.setItem('aspirant_active_tab', newTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoBack = () => {
    if (navHistory.length > 0) {
      const prevTab = navHistory[navHistory.length - 1];
      setNavHistory((prev) => prev.slice(0, prev.length - 1));
      setActiveTab(prevTab);
      localStorage.setItem('aspirant_active_tab', prevTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveTab('roadmap');
      localStorage.setItem('aspirant_active_tab', 'roadmap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [selectedNode, setSelectedNode] = useState<SyllabusNode | null>(null);
  const [isDailyDrillOpen, setIsDailyDrillOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [customMainsPrompt, setCustomMainsPrompt] = useState<{ question: string; topic: string } | null>(null);

  // Global keyboard shortcut for Omnisearch (Cmd+K / Ctrl+K / '/')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    localStorage.setItem('aspirant_selected_exam', selectedExam);
  }, [selectedExam]);

  useEffect(() => {
    localStorage.setItem('aspirant_completed_nodes', JSON.stringify(completedNodeIds));
  }, [completedNodeIds]);

  useEffect(() => {
    localStorage.setItem('aspirant_quiz_scores', JSON.stringify(quizScores));
  }, [quizScores]);

  useEffect(() => {
    localStorage.setItem('aspirant_streak_days', streakDays.toString());
  }, [streakDays]);

  useEffect(() => {
    localStorage.setItem('aspirant_show_telugu', showTelugu.toString());
  }, [showTelugu]);

  useEffect(() => {
    const hasOnboarded = localStorage.getItem('aspirant_onboarded');
    if (!hasOnboarded) {
      setIsOnboardingOpen(true);
    }
  }, []);

  useEffect(() => {
    const userId = currentUser?.id || 'default-aspirant';
    const existing = getActiveSession(userId);
    setActiveSession(existing);

    if (existing) {
      const start = new Date(existing.checkInTime).getTime();
      const now = Date.now();
      setElapsedSeconds(Math.max(0, Math.floor((now - start) / 1000)));
    } else {
      setElapsedSeconds(0);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!activeSession) return;
    const updateTimer = () => {
      const start = new Date(activeSession.checkInTime).getTime();
      const now = Date.now();
      setElapsedSeconds(Math.max(0, Math.floor((now - start) / 1000)));
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [activeSession]);

  const handleStartSession = (goal: string) => {
    const userId = currentUser?.id || 'default-aspirant';
    const sess = startCheckIn(userId, goal);
    setActiveSession(sess);
    setElapsedSeconds(0);
  };

  const handleEndSession = (rating: number, notes?: string) => {
    const userId = currentUser?.id || 'default-aspirant';
    endCheckOut(userId, rating, notes);
    setActiveSession(null);
    setElapsedSeconds(0);
  };

  const handleCompleteOnboarding = (profile: AspirantProfile) => {
    setSelectedExam(profile.targetExam);
    setAspirantStage(profile.stage);
    localStorage.setItem('aspirant_onboarded', 'true');
    localStorage.setItem('aspirant_stage', profile.stage);
    localStorage.setItem('aspirant_study_horizon', profile.horizon);
    localStorage.setItem('aspirant_selected_exam', profile.targetExam);
    setIsOnboardingOpen(false);
    setActiveTab('roadmap');
  };

  const handleToggleComplete = (nodeId: string) => {
    setCompletedNodeIds(prev => {
      const willBeDone = !prev.includes(nodeId);
      if (willBeDone) {
        const userId = currentUser?.id || 'default-aspirant';
        recordSessionActivity(userId, 'node_read', { nodeId });
      }
      return willBeDone ? [...prev, nodeId] : prev.filter(id => id !== nodeId);
    });
  };

  const handleSaveQuizScore = (nodeId: string, score: number, total: number) => {
    setQuizScores(prev => ({
      ...prev,
      [nodeId]: { score, total }
    }));
    const userId = currentUser?.id || 'default-aspirant';
    recordSessionActivity(userId, 'mcq', { attempted: total, correct: score });
  };

  const handleDrillCompleted = () => {
    setStreakDays(prev => prev + 1);
    const userId = currentUser?.id || 'default-aspirant';
    recordSessionActivity(userId, 'mcq', { attempted: 5, correct: 5 });
  };

  const handleOpenTopicById = (nodeId: string) => {
    const node = SYLLABUS_NODES.find(n => n.id === nodeId);
    if (node) {
      setSelectedNode(node);
    }
  };

  const handleSearchNavigate = (
    tab: ActiveNavTab,
    payload?: { nodeId?: string; documentId?: string; testId?: string }
  ) => {
    setActiveTab(tab);
    if (payload?.nodeId) {
      const node = SYLLABUS_NODES.find(n => n.id === payload.nodeId);
      if (node) {
        setSelectedNode(node);
      }
    }
  };

  const currentExamNodes = SYLLABUS_NODES.filter(n => n.examScope.includes(selectedExam));
  const completedExamNodesCount = currentExamNodes.filter(n => completedNodeIds.includes(n.id)).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header
        selectedExam={selectedExam}
        onSelectExam={setSelectedExam}
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
        streakDays={streakDays}
        onOpenDailyDrill={() => setIsDailyDrillOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        showTelugu={showTelugu}
        setShowTelugu={setShowTelugu}
        completedCount={completedExamNodesCount}
        totalCount={currentExamNodes.length}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenGeminiKey={() => setIsGeminiKeyOpen(true)}
        onOpenCompass={() => setIsOnboardingOpen(true)}
        currentUser={currentUser}
        onOpenSessionModal={() => setIsSessionModalOpen(true)}
        activeSession={activeSession}
        elapsedSeconds={elapsedSeconds}
      />

      {/* Universal Navigation Breadcrumb & Back Bar */}
      {activeTab !== 'roadmap' && (
        <div className="bg-white/90 border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-2.5 backdrop-blur-md sticky top-16 z-30 transition-all shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs">
              <button
                onClick={handleGoBack}
                className="btn-tactile px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold flex items-center space-x-1.5 shadow-2xs transition-all"
                title="Go back to previous screen"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                <span>Back</span>
              </button>

              <span className="text-slate-300">/</span>

              <button
                onClick={() => {
                  setNavHistory([]);
                  setActiveTab('roadmap');
                  localStorage.setItem('aspirant_active_tab', 'roadmap');
                }}
                className="text-slate-500 hover:text-slate-900 font-medium transition-colors"
              >
                Roadmap
              </button>

              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

              <span className="font-bold text-slate-900">
                {activeTab === 'mock-tests' ? (showTelugu ? 'ప్రిలిమ్స్ మాక్ సిమ్యులేటర్' : 'Prelims Mock Simulator') :
                 activeTab === 'mains-evaluator' ? (showTelugu ? 'మెయిన్స్ AI ఎవాల్యుయేటర్' : 'Mains AI Studio') :
                 activeTab === 'current-affairs' ? (showTelugu ? 'సమకాలీన అంశాల బ్రిడ్జ్' : 'Editorial Bridge') :
                 activeTab === 'study-planner' ? (showTelugu ? 'అడాప్టివ్ ప్రణాళిక' : 'Adaptive Planner') :
                 activeTab === 'vault' ? (showTelugu ? 'రీసోర్స్ వాల్ట్' : 'Resource Vault') : activeTab}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-slate-500">
              <span className="hidden sm:inline">Active Scope:</span>
              <span className="font-bold text-slate-800 uppercase bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                {selectedExam}
              </span>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full pb-28 md:pb-8 overflow-x-hidden">
        {activeTab === 'roadmap' && (
          <RoadmapView
            nodes={SYLLABUS_NODES}
            selectedExam={selectedExam}
            completedNodeIds={completedNodeIds}
            onToggleComplete={handleToggleComplete}
            onOpenTopic={(node) => setSelectedNode(node)}
            showTelugu={showTelugu}
            aspirantStage={aspirantStage}
            onOpenProfiler={() => setIsOnboardingOpen(true)}
            quizScores={quizScores}
          />
        )}

        {activeTab === 'mock-tests' && (
          <MockTestSimulator
            showTelugu={showTelugu}
            selectedExam={selectedExam}
            onNavigateToNode={handleOpenTopicById}
            onTestCompleted={(attempted, correct) => {
              const userId = currentUser?.id || 'default-aspirant';
              recordSessionActivity(userId, 'mcq', { attempted, correct });
            }}
          />
        )}

        {activeTab === 'mains-evaluator' && (
          <MainsEvaluatorView
            showTelugu={showTelugu}
            onNavigateToNode={handleOpenTopicById}
            customQuestionPrompt={customMainsPrompt}
            onEvaluationCompleted={(score) => {
              const userId = currentUser?.id || 'default-aspirant';
              recordSessionActivity(userId, 'mains', { mainsScore: score });
            }}
          />
        )}

        {activeTab === 'current-affairs' && (
          <CurrentAffairsBridge
            showTelugu={showTelugu}
            selectedExam={selectedExam}
            onOpenTopic={handleOpenTopicById}
            onOpenDailyDrill={() => setIsDailyDrillOpen(true)}
            onNavigateToMains={(questionText, topic) => {
              setCustomMainsPrompt({ question: questionText, topic });
              handleNavigateTab('mains-evaluator');
            }}
            onNavigateToMocks={() => handleNavigateTab('mock-tests')}
          />
        )}

        {activeTab === 'study-planner' && (
          <StudyPlannerView
            showTelugu={showTelugu}
            onOpenTopic={handleOpenTopicById}
            onNavigateToMains={() => handleNavigateTab('mains-evaluator')}
            onNavigateToMocks={() => handleNavigateTab('mock-tests')}
          />
        )}

        {activeTab === 'vault' && (
          <ResourceVault showTelugu={showTelugu} />
        )}
      </main>

      {selectedNode && (
        <TopicModal
          node={selectedNode}
          content={TOPIC_CONTENT_MAP[selectedNode.id]}
          isCompleted={completedNodeIds.includes(selectedNode.id)}
          onToggleComplete={handleToggleComplete}
          onClose={() => setSelectedNode(null)}
          showTelugu={showTelugu}
          onSaveQuizScore={handleSaveQuizScore}
          savedQuizScore={quizScores[selectedNode.id]}
          onNavigateToMocks={() => handleNavigateTab('mock-tests')}
          onNavigateToMains={(questionText, topic) => {
            setCustomMainsPrompt({ question: questionText, topic });
            handleNavigateTab('mains-evaluator');
          }}
        />
      )}

      {isDailyDrillOpen && (
        <DailyDrillModal
          onClose={() => setIsDailyDrillOpen(false)}
          streakDays={streakDays}
          onDrillCompleted={handleDrillCompleted}
          showTelugu={showTelugu}
        />
      )}

      {/* Universal Omnisearch Spotlight Modal */}
      <OmnisearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSearchNavigate}
        showTelugu={showTelugu}
      />

      {/* Aspirant Identity & Account Management Drawer */}
      <ProfileDrawer
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onUserChanged={setCurrentUser}
        onOpenSessionModal={() => setIsSessionModalOpen(true)}
        onOpenGeminiKey={() => setIsGeminiKeyOpen(true)}
      />

      {/* Global Gemini API Key Settings Modal */}
      <GeminiKeyModal
        isOpen={isGeminiKeyOpen}
        onClose={() => setIsGeminiKeyOpen(false)}
      />

      {/* 60-Second Aspirant Diagnostic Profiler Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onComplete={handleCompleteOnboarding}
        showTelugu={showTelugu}
      />

      {/* Daily Study Check-In, Timer & Performance Ledger Modal */}
      <StudySessionModal
        isOpen={isSessionModalOpen}
        onClose={() => setIsSessionModalOpen(false)}
        userId={currentUser?.id || 'default-aspirant'}
        userName={currentUser?.name || 'Aspirant'}
        activeSession={activeSession}
        onStartSession={handleStartSession}
        onEndSession={handleEndSession}
        elapsedSeconds={elapsedSeconds}
      />

      <footer className="bg-white border-t border-slate-200 mt-16 py-8 mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-sky-600" />
            <span className="font-bold text-slate-800">AspirantAtlas Initiative</span>
            <span>• Zero-to-Rank Engine for Civil Services</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero External Paywalls</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Bilingual Architecture (English & తెలుగు)</span>
            </span>
          </div>
        </div>
      </footer>

      {/* Native Mobile Sticky Bottom Navigation Bar (<768px viewports) */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
        onOpenSessionModal={() => setIsSessionModalOpen(true)}
        activeSession={activeSession}
        elapsedSeconds={elapsedSeconds}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDailyDrill={() => setIsDailyDrillOpen(true)}
        onOpenCompass={() => setIsOnboardingOpen(true)}
        onOpenGeminiKey={() => setIsGeminiKeyOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        showTelugu={showTelugu}
        setShowTelugu={setShowTelugu}
        streakDays={streakDays}
        currentUser={currentUser}
      />
    </div>
  );
}

export default App;
