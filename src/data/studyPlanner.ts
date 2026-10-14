import { StudyPlanDay, PhaseId, TimelineHorizon } from '../types';

// ==========================================
// 1. FAST-TRACK 30-DAY CRASH COURSE (1 MONTH)
// ==========================================
export function generate30DayPlan(): StudyPlanDay[] {
  const plan: StudyPlanDay[] = [];

  const focusModules = [
    { day: 1, name: 'Constitutional Core & Fundamental Rights', nodeId: 'polity-constitution-framework', phase: 'phase1' as PhaseId },
    { day: 2, name: 'Directive Principles & Fundamental Duties', nodeId: 'polity-constitution-framework', phase: 'phase1' as PhaseId },
    { day: 3, name: 'Union Executive & Presidential Powers', nodeId: 'polity-executive-legislature', phase: 'phase1' as PhaseId },
    { day: 4, name: 'Parliamentary Procedures & Budget Passage', nodeId: 'polity-executive-legislature', phase: 'phase1' as PhaseId },
    { day: 5, name: 'Federal Relations & Article 356 / Governor Role', nodeId: 'polity-executive-legislature', phase: 'phase1' as PhaseId },
    { day: 6, name: 'Supreme Court & Landmark Basic Structure Judgments', nodeId: 'polity-judiciary-reforms', phase: 'phase1' as PhaseId },
    { day: 7, name: 'High Courts, Subordinate Judiciary & Judicial Review', nodeId: 'polity-judiciary-reforms', phase: 'phase1' as PhaseId },
    { day: 8, name: 'Panchayati Raj & 73rd/74th Constitutional Amendments', nodeId: 'polity-judiciary-reforms', phase: 'phase1' as PhaseId },
    { day: 9, name: 'Polity Rapid Speed Drill & High-Yield MCQs', nodeId: 'polity-constitution-framework', phase: 'phase1' as PhaseId },
    { day: 10, name: 'Sectional Mock Test: Indian Polity & Governance', phase: 'phase1' as PhaseId },

    { day: 11, name: 'Macroeconomics: GDP, Inflation & Monetary Policy', nodeId: 'econ-macro-fiscal', phase: 'phase2' as PhaseId },
    { day: 12, name: 'Fiscal Policy, FRBM Act & Union Budget Pillars', nodeId: 'econ-macro-fiscal', phase: 'phase2' as PhaseId },
    { day: 13, name: '1857 Revolt to Early Freedom Struggle (Moderate Phase)', nodeId: 'hist-modern-national-movement', phase: 'phase2' as PhaseId },
    { day: 14, name: 'Gandhian Mass Movements (NCM, CDM, Quit India)', nodeId: 'hist-modern-national-movement', phase: 'phase2' as PhaseId },
    { day: 15, name: 'Constitutional Acts (1909, 1919, 1935) & Social Reformers', nodeId: 'hist-modern-national-movement', phase: 'phase2' as PhaseId },
    { day: 16, name: 'AP Reorganisation Act 2014: Core Provisions & Assets', nodeId: 'appsc-bifurcation-act', phase: 'phase2' as PhaseId },
    { day: 17, name: 'AP Bifurcation: Section 46, 90 (Polavaram) & 94', nodeId: 'appsc-bifurcation-act', phase: 'phase2' as PhaseId },
    { day: 18, name: 'Telangana Movement: 1948–1969 Telangana Agitation', nodeId: 'tspsc-telangana-movement', phase: 'phase2' as PhaseId },
    { day: 19, name: 'Telangana State Formation: Gentlemen’s Agreement & 2014 Act', nodeId: 'tspsc-telangana-movement', phase: 'phase2' as PhaseId },
    { day: 20, name: 'Sectional Mock Test: History, Economy & State Modules', phase: 'phase2' as PhaseId },

    { day: 21, name: 'Mains 15-Mark Writing Sprint: Federalism & Governor', phase: 'phase3' as PhaseId },
    { day: 22, name: 'Mains 15-Mark Writing Sprint: Sub-classification & Quotas', phase: 'phase3' as PhaseId },
    { day: 23, name: 'Mains 15-Mark Writing Sprint: State Bifurcation & Finance', phase: 'phase3' as PhaseId },
    { day: 24, name: 'Grand Full-Length Mock Test 1 (Paper 1 - GS)', phase: 'phase3' as PhaseId },
    { day: 25, name: 'Error Log Diagnostics & Negative Marking Analysis', phase: 'phase3' as PhaseId },
    { day: 26, name: 'Grand Full-Length Mock Test 2 (Paper 2 / State Spec)', phase: 'phase3' as PhaseId },
    { day: 27, name: 'Current Affairs & Landmark Judicial Verdicts Marathon', phase: 'phase3' as PhaseId },
    { day: 28, name: 'Socio-Economic Survey & Government Schemes Flashcards', phase: 'phase3' as PhaseId },
    { day: 29, name: 'High-Yield Formulae, Articles & Timeline Review', phase: 'phase3' as PhaseId },
    { day: 30, name: 'Final Mindset, Exam Hall Time Strategy & Quick Recap', phase: 'phase3' as PhaseId }
  ];

  focusModules.forEach((m) => {
    plan.push({
      dayNumber: m.day,
      phase: m.phase,
      subject: m.name,
      title: `Day ${m.day}: ${m.name}`,
      titleTelugu: `రోజు ${m.day}: ${m.name}`,
      description: `Fast-track high-yield sprint covering core concepts, exam MCQs, and focused revision notes.`,
      tasks: [
        {
          id: `task30-${m.day}-1`,
          title: `Rapid High-Yield Reading: ${m.name}`,
          type: 'reading',
          durationMinutes: 75,
          completed: false,
          linkedNodeId: m.nodeId
        },
        {
          id: `task30-${m.day}-2`,
          title: `Visual Concept & Flowchart Review in Vault`,
          type: 'revision',
          durationMinutes: 30,
          completed: false,
          linkedNodeId: m.nodeId
        },
        {
          id: `task30-${m.day}-3`,
          title: `Speed MCQs Test (20 Questions)`,
          type: 'quiz',
          durationMinutes: 30,
          completed: false,
          linkedNodeId: m.nodeId
        },
        {
          id: `task30-${m.day}-4`,
          title: `Key Landmark Articles & Points Recap`,
          type: 'mains_practice',
          durationMinutes: 35,
          completed: false
        }
      ]
    });
  });

  return plan;
}

// ==========================================
// 2. STANDARD 90-DAY PREPARATION PLAN (3 MONTHS)
// ==========================================
export function generate90DayPlan(): StudyPlanDay[] {
  const plan: StudyPlanDay[] = [];

  const phases: {
    phase: PhaseId;
    range: [number, number];
    theme: string;
    themeTelugu: string;
    subjects: { name: string; nodeId?: string; days: number }[];
  }[] = [
    {
      phase: 'phase1',
      range: [1, 30],
      theme: 'Foundation & Core Constitutional Architecture',
      themeTelugu: 'పునాది & రాజ్యాంగ మూలస్తంభాలు',
      subjects: [
        { name: 'Constitutional Framework & Fundamental Rights', nodeId: 'polity-constitution-framework', days: 10 },
        { name: 'Union & State Executive, Parliament', nodeId: 'polity-executive-legislature', days: 10 },
        { name: 'Judiciary, Constitutional Bodies & Local Self-Gov', nodeId: 'polity-judiciary-reforms', days: 10 },
      ]
    },
    {
      phase: 'phase2',
      range: [31, 60],
      theme: 'Economy, History & State Specializations',
      themeTelugu: 'ఆర్థిక వ్యవస్థ, చరిత్ర & రాష్ట్రాల విశిష్టాంశాలు',
      subjects: [
        { name: 'Macroeconomics, Fiscal & Monetary Policies', nodeId: 'econ-macro-fiscal', days: 8 },
        { name: 'Modern Indian History & Freedom Struggle', nodeId: 'hist-modern-national-movement', days: 8 },
        { name: 'AP Reorganisation Act 2014 & Regional Dynamics', nodeId: 'appsc-bifurcation-act', days: 7 },
        { name: 'Telangana Movement, State Formation & Culture', nodeId: 'tspsc-telangana-movement', days: 7 },
      ]
    },
    {
      phase: 'phase3',
      range: [61, 90],
      theme: 'Mains Answer Sprint, Full Mocks & High-Yield Revision',
      themeTelugu: 'మెయిన్స్ జవాబుల సాధన, మాక్ టెస్ట్‌లు & పునశ్చరణ',
      subjects: [
        { name: 'Sectional Mocks & Error Log Diagnostics', days: 10 },
        { name: 'Mains 15-Mark Scaffold Writing & PESTLE Integration', days: 10 },
        { name: 'Grand Full-Length Mock Simulation & Final Touch', days: 10 },
      ]
    }
  ];

  let currentDay = 1;

  phases.forEach((p) => {
    p.subjects.forEach((subj) => {
      for (let i = 1; i <= subj.days && currentDay <= 90; i++) {
        let taskList = [];

        if (p.phase === 'phase1') {
          taskList = [
            {
              id: `task90-${currentDay}-1`,
              title: `Conceptual Reading: ${subj.name} (Unit ${i})`,
              type: 'reading' as const,
              durationMinutes: 90,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-2`,
              title: `Visual Concept & Flowchart Review in Vault`,
              type: 'revision' as const,
              durationMinutes: 45,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-3`,
              title: `Daily Prelims MCQs Practice (15 Questions)`,
              type: 'quiz' as const,
              durationMinutes: 30,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-4`,
              title: `Mains 10-Marker Answer Drafting (1 Answer)`,
              type: 'mains_practice' as const,
              durationMinutes: 45,
              completed: false,
              linkedNodeId: subj.nodeId
            }
          ];
        } else if (p.phase === 'phase2') {
          taskList = [
            {
              id: `task90-${currentDay}-1`,
              title: `Core Study: ${subj.name} (Segment ${i})`,
              type: 'reading' as const,
              durationMinutes: 100,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-2`,
              title: `Current Affairs Bridge & Court Case Integration`,
              type: 'revision' as const,
              durationMinutes: 40,
              completed: false
            },
            {
              id: `task90-${currentDay}-3`,
              title: `Sectional Prelims Mock Test (25 MCQs with Negative Marking)`,
              type: 'quiz' as const,
              durationMinutes: 45,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-4`,
              title: `Mains 15-Marker Answer Evaluation in Studio`,
              type: 'mains_practice' as const,
              durationMinutes: 45,
              completed: false,
              linkedNodeId: subj.nodeId
            }
          ];
        } else {
          taskList = [
            {
              id: `task90-${currentDay}-1`,
              title: `Timed Full-Length Mock Simulation (50 - 100 Questions)`,
              type: 'quiz' as const,
              durationMinutes: 120,
              completed: false
            },
            {
              id: `task90-${currentDay}-2`,
              title: `In-Depth Error Log Analysis & Negative Mark Diagnostics`,
              type: 'revision' as const,
              durationMinutes: 60,
              completed: false
            },
            {
              id: `task90-${currentDay}-3`,
              title: `Mains Dual Answer Writing Sprint (2 Questions x 15 Marks)`,
              type: 'mains_practice' as const,
              durationMinutes: 60,
              completed: false
            },
            {
              id: `task90-${currentDay}-4`,
              title: `Socio-Economic Outlook & Government Schemes Flashcard Review`,
              type: 'reading' as const,
              durationMinutes: 45,
              completed: false
            }
          ];
        }

        plan.push({
          dayNumber: currentDay,
          phase: p.phase,
          subject: subj.name,
          title: `Day ${currentDay}: ${subj.name} - Part ${i}`,
          titleTelugu: `రోజు ${currentDay}: ${subj.name} - భాగం ${i}`,
          description: `Master high-yield concepts in ${subj.name}. Complete syllabus reading, solve target MCQs, and draft structured answers with constitutional citations.`,
          tasks: taskList
        });

        currentDay++;
      }
    });
  });

  return plan;
}

// ==========================================
// 3. COMPREHENSIVE 150-DAY FOUNDATION (5 MONTHS)
// ==========================================
export function generate150DayPlan(): StudyPlanDay[] {
  const plan: StudyPlanDay[] = [];

  const phases150 = [
    { phase: 'phase1' as PhaseId, days: 50, title: 'NCERT & Standard Foundation Core', telugu: 'ఎన్‌సీఈఆర్‌టీ & ప్రాథమిక భావనలు' },
    { phase: 'phase2' as PhaseId, days: 50, title: 'Advanced Syllabi, State Specialties & Economy', telugu: 'ఉన్నత స్థాయి పాఠ్యాంశాలు & రాష్ట్రాల విశిష్టతలు' },
    { phase: 'phase3' as PhaseId, days: 50, title: 'Full Mocks, Mains Writing Drills & Answer Polish', telugu: 'గ్రాండ్ మాక్ టెస్టులు & మెయిన్స్ సమగ్ర సాధన' }
  ];

  let dayIndex = 1;

  phases150.forEach((ph) => {
    for (let d = 1; d <= ph.days; d++) {
      const isRevisionDay = dayIndex % 7 === 0;

      const tasks = isRevisionDay
        ? [
            {
              id: `task150-${dayIndex}-1`,
              title: `Weekly Cumulative Revision of Notes & Flowcharts`,
              type: 'revision' as const,
              durationMinutes: 90,
              completed: false
            },
            {
              id: `task150-${dayIndex}-2`,
              title: `Weekly Sectional Speed Quiz (30 MCQs)`,
              type: 'quiz' as const,
              durationMinutes: 45,
              completed: false
            },
            {
              id: `task150-${dayIndex}-3`,
              title: `Mains Essay or 20-Mark Analytical Question Drafting`,
              type: 'mains_practice' as const,
              durationMinutes: 60,
              completed: false
            }
          ]
        : [
            {
              id: `task150-${dayIndex}-1`,
              title: `Deep Conceptual Reading: ${ph.title} (Module ${d})`,
              type: 'reading' as const,
              durationMinutes: 100,
              completed: false
            },
            {
              id: `task150-${dayIndex}-2`,
              title: `Self-Notes Synthesis & Flowchart Construction`,
              type: 'revision' as const,
              durationMinutes: 40,
              completed: false
            },
            {
              id: `task150-${dayIndex}-3`,
              title: `Topic-Level Prelims MCQs Practice (15 Questions)`,
              type: 'quiz' as const,
              durationMinutes: 30,
              completed: false
            },
            {
              id: `task150-${dayIndex}-4`,
              title: `Daily Mains 15-Marker Answer Writing & Evaluation`,
              type: 'mains_practice' as const,
              durationMinutes: 45,
              completed: false
            }
          ];

      plan.push({
        dayNumber: dayIndex,
        phase: ph.phase,
        subject: ph.title,
        title: `Day ${dayIndex}: ${ph.title} - Session ${d}`,
        titleTelugu: `రోజు ${dayIndex}: ${ph.telugu} - విభాగం ${d}`,
        description: `Comprehensive 5-month preparation step covering core textbooks, visual learning, and consistent daily answer writing.`,
        tasks
      });

      dayIndex++;
    }
  });

  return plan;
}

export const STUDY_PLANS_BY_HORIZON: Record<TimelineHorizon, StudyPlanDay[]> = {
  '30-days': generate30DayPlan(),
  '90-days': generate90DayPlan(),
  '150-days': generate150DayPlan()
};

export const STUDY_PLAN_90_DAYS = STUDY_PLANS_BY_HORIZON['90-days'];
