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
    { day: 6, name: 'Supreme Court & Landmark Basic Structure Judgments', nodeId: 'polity-constitution-framework', phase: 'phase1' as PhaseId },
    { day: 7, name: 'High Courts, Subordinate Judiciary & Judicial Review', nodeId: 'polity-constitution-framework', phase: 'phase1' as PhaseId },
    { day: 8, name: 'Panchayati Raj & 73rd/74th Constitutional Amendments', nodeId: 'polity-executive-legislature', phase: 'phase1' as PhaseId },
    { day: 9, name: 'Polity Rapid Speed Drill & High-Yield MCQs', nodeId: 'polity-constitution-framework', phase: 'phase1' as PhaseId },
    { day: 10, name: 'Sectional Mock Test: Indian Polity & Governance', nodeId: 'polity-constitution-framework', phase: 'phase1' as PhaseId },

    { day: 11, name: 'Macroeconomics: GDP, Inflation & Monetary Policy', nodeId: 'economy-macro-monetary-fiscal', phase: 'phase2' as PhaseId },
    { day: 12, name: 'Fiscal Policy, FRBM Act & Union Budget Pillars', nodeId: 'economy-macro-monetary-fiscal', phase: 'phase2' as PhaseId },
    { day: 13, name: '1857 Revolt to Early Freedom Struggle (Moderate Phase)', nodeId: 'history-modern-freedom-struggle', phase: 'phase2' as PhaseId },
    { day: 14, name: 'Gandhian Mass Movements (NCM, CDM, Quit India)', nodeId: 'history-modern-freedom-struggle', phase: 'phase2' as PhaseId },
    { day: 15, name: 'Constitutional Acts (1909, 1919, 1935) & Social Reformers', nodeId: 'history-modern-freedom-struggle', phase: 'phase2' as PhaseId },
    { day: 16, name: 'AP Reorganisation Act 2014: Core Provisions & Assets', nodeId: 'appsc-reorganisation-act-2014', phase: 'phase2' as PhaseId },
    { day: 17, name: 'AP Bifurcation: Section 46, 90 (Polavaram) & 94', nodeId: 'appsc-reorganisation-act-2014', phase: 'phase2' as PhaseId },
    { day: 18, name: 'Telangana Movement: 1948–1969 Telangana Agitation', nodeId: 'tspsc-movement-state-formation', phase: 'phase2' as PhaseId },
    { day: 19, name: 'Telangana State Formation: Gentlemen’s Agreement & 2014 Act', nodeId: 'tspsc-movement-state-formation', phase: 'phase2' as PhaseId },
    { day: 20, name: 'Sectional Mock Test: History, Economy & State Modules', nodeId: 'economy-macro-monetary-fiscal', phase: 'phase2' as PhaseId },

    { day: 21, name: 'Mains 15-Mark Writing Sprint: Federalism & Governor', nodeId: 'polity-executive-legislature', phase: 'phase3' as PhaseId },
    { day: 22, name: 'Mains 15-Mark Writing Sprint: Sub-classification & Quotas', nodeId: 'polity-constitution-framework', phase: 'phase3' as PhaseId },
    { day: 23, name: 'Mains 15-Mark Writing Sprint: State Bifurcation & Finance', nodeId: 'appsc-reorganisation-act-2014', phase: 'phase3' as PhaseId },
    { day: 24, name: 'Grand Full-Length Mock Test 1 (Paper 1 - GS)', nodeId: 'economy-macro-monetary-fiscal', phase: 'phase3' as PhaseId },
    { day: 25, name: 'Error Log Diagnostics & Negative Marking Analysis', nodeId: 'history-modern-freedom-struggle', phase: 'phase3' as PhaseId },
    { day: 26, name: 'Grand Full-Length Mock Test 2 (Paper 2 / State Spec)', nodeId: 'tspsc-movement-state-formation', phase: 'phase3' as PhaseId },
    { day: 27, name: 'Current Affairs & Landmark Judicial Verdicts Marathon', nodeId: 'polity-constitution-framework', phase: 'phase3' as PhaseId },
    { day: 28, name: 'Socio-Economic Survey & Government Schemes Flashcards', nodeId: 'appsc-economy-welfare-schemes', phase: 'phase3' as PhaseId },
    { day: 29, name: 'High-Yield Formulae, Articles & Timeline Review', nodeId: 'polity-executive-legislature', phase: 'phase3' as PhaseId },
    { day: 30, name: 'Final Mindset, Exam Hall Time Strategy & Quick Recap', nodeId: 'economy-macro-monetary-fiscal', phase: 'phase3' as PhaseId }
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
          completed: false,
          linkedNodeId: m.nodeId
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
    subjects: { name: string; nodeId: string; days: number }[];
  }[] = [
    {
      phase: 'phase1',
      range: [1, 30],
      theme: 'Foundation & Core Constitutional Architecture',
      themeTelugu: 'పునాది & రాజ్యాంగ మూలస్తంభాలు',
      subjects: [
        { name: 'Constitutional Framework & Fundamental Rights', nodeId: 'polity-constitution-framework', days: 10 },
        { name: 'Union & State Executive, Parliament', nodeId: 'polity-executive-legislature', days: 10 },
        { name: 'Judiciary, Constitutional Bodies & Local Self-Gov', nodeId: 'polity-constitution-framework', days: 10 },
      ]
    },
    {
      phase: 'phase2',
      range: [31, 60],
      theme: 'Economy, History & State Specializations',
      themeTelugu: 'ఆర్థిక వ్యవస్థ, చరిత్ర & రాష్ట్రాల విశిష్టాంశాలు',
      subjects: [
        { name: 'Macroeconomics, Fiscal & Monetary Policies', nodeId: 'economy-macro-monetary-fiscal', days: 8 },
        { name: 'Modern Indian History & Freedom Struggle', nodeId: 'history-modern-freedom-struggle', days: 8 },
        { name: 'AP Reorganisation Act 2014 & Regional Dynamics', nodeId: 'appsc-reorganisation-act-2014', days: 7 },
        { name: 'Telangana Movement, State Formation & Culture', nodeId: 'tspsc-movement-state-formation', days: 7 },
      ]
    },
    {
      phase: 'phase3',
      range: [61, 90],
      theme: 'Mains Answer Sprint, Full Mocks & High-Yield Revision',
      themeTelugu: 'మెయిన్స్ జవాబుల సాధన, మాక్ టెస్ట్‌లు & పునశ్చరణ',
      subjects: [
        { name: 'Sectional Mocks & Error Log Diagnostics', nodeId: 'economy-macro-monetary-fiscal', days: 10 },
        { name: 'Mains 15-Mark Scaffold Writing & PESTLE Integration', nodeId: 'polity-executive-legislature', days: 10 },
        { name: 'Grand Full-Length Mock Simulation & Final Touch', nodeId: 'history-modern-freedom-struggle', days: 10 },
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
              durationMinutes: 30,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-3`,
              title: `Topic Micro-Quiz (10 MCQs with Explanations)`,
              type: 'quiz' as const,
              durationMinutes: 30,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-4`,
              title: `Mains 10-Mark Answer Drafting & Keyword Mapping`,
              type: 'mains_practice' as const,
              durationMinutes: 30,
              completed: false,
              linkedNodeId: subj.nodeId
            }
          ];
        } else if (p.phase === 'phase2') {
          taskList = [
            {
              id: `task90-${currentDay}-1`,
              title: `Advanced Syllabi Reading: ${subj.name} (Unit ${i})`,
              type: 'reading' as const,
              durationMinutes: 90,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-2`,
              title: `Comparative Analysis & Landmark Case Citations`,
              type: 'revision' as const,
              durationMinutes: 30,
              completed: false,
              linkedNodeId: subj.nodeId
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
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-2`,
              title: `In-Depth Error Log Analysis & Negative Mark Diagnostics`,
              type: 'revision' as const,
              durationMinutes: 60,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-3`,
              title: `Mains Dual Answer Writing Sprint (2 Questions x 15 Marks)`,
              type: 'mains_practice' as const,
              durationMinutes: 60,
              completed: false,
              linkedNodeId: subj.nodeId
            },
            {
              id: `task90-${currentDay}-4`,
              title: `Socio-Economic Outlook & Government Schemes Flashcard Review`,
              type: 'reading' as const,
              durationMinutes: 45,
              completed: false,
              linkedNodeId: subj.nodeId
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

  // 150-Day structured syllabus modules mapped 1-to-1 with rich study topics
  const syllabusSprints: {
    phase: PhaseId;
    startDay: number;
    endDay: number;
    subject: string;
    subjectTelugu: string;
    nodeId: string;
    focusUnits: string[];
  }[] = [
    // PHASE 1: BEDROCK CORE FOUNDATION (Days 1–50)
    {
      phase: 'phase1',
      startDay: 1,
      endDay: 10,
      subject: 'Constitutional Framework & Fundamental Rights',
      subjectTelugu: 'రాజ్యాంగ నిర్మాణం & ప్రాథమిక హక్కులు',
      nodeId: 'polity-constitution-framework',
      focusUnits: [
        'Historical Evolution & Constituent Assembly Debates',
        'Preamble & Salient Features of the Constitution',
        'Union & its Territory, Citizenship (Art 5-11)',
        'Article 12-18: Equality Before Law & Affirmative Action',
        'Article 19-22: Fundamental Freedoms & Personal Liberty',
        'Article 23-28: Right Against Exploitation & Freedom of Religion',
        'Article 29-32: Cultural Rights & Writs Jurisprudence',
        'Directive Principles of State Policy (Part IV)',
        'Fundamental Duties & Basic Structure Doctrine (Kesavananda)',
        'Polity Unit Review, Speed MCQs & Error Logging'
      ]
    },
    {
      phase: 'phase1',
      startDay: 11,
      endDay: 20,
      subject: 'President, Governor & Parliamentary System',
      subjectTelugu: 'రాష్ట్రపతి, గవర్నర్ & పార్లమెంటరీ వ్యవస్థ',
      nodeId: 'polity-executive-legislature',
      focusUnits: [
        'Presidential Elections, Impeachment & Ordinance Powers (Art 123)',
        'Governor Discretionary Powers & Article 200/356 Dynamics',
        'Parliamentary Procedures: Sessions, Motions & Question Hour',
        'Money Bills, Financial Bills & Union Budget Passage',
        'Parliamentary Committees (PAC, Estimates, CoPU)',
        'Anti-Defection Law (10th Schedule) & Speaker Powers',
        'Inter-State Relations, Zonal Councils & River Boards',
        'Emergency Provisions: National, Financial & President Rule',
        'Local Self-Government: 73rd & 74th Amendments',
        'Executive & Legislature Sectional Mock Test Drill'
      ]
    },
    {
      phase: 'phase1',
      startDay: 21,
      endDay: 30,
      subject: 'Modern Indian History & Freedom Struggle (1857-1947)',
      subjectTelugu: 'ఆధునిక భారత చరిత్ర & స్వాతంత్ర్యోద్యమం',
      nodeId: 'history-modern-freedom-struggle',
      focusUnits: [
        '1857 Great Revolt: Causes, Nature & Queen’s Proclamation 1858',
        'Socio-Religious Reform Movements (Brahmo, Arya, Satyashodhak)',
        'Moderate Phase (1885-1905): Naoroji’s Drain of Wealth & Petitions',
        'Extremist Resurgence & Partition of Bengal (Swadeshi Movement)',
        'Home Rule Movement, Lucknow Pact & Rowlatt Act Satyagraha',
        'Gandhian Non-Cooperation & Khilafat Movement (1920-22)',
        'Civil Disobedience Movement & Salt Satyagraha (1930)',
        'Government of India Act 1935 & Provincial Autonomy',
        'Quit India Movement 1942, INA Trials & Cabinet Mission',
        'Modern History Chronology Master Drill & 250W Mains Answer'
      ]
    },
    {
      phase: 'phase1',
      startDay: 31,
      endDay: 40,
      subject: 'Physiography & River Systems of India',
      subjectTelugu: 'భారతదేశ భౌగోళిక స్వరూపం & నదీ వ్యవస్థలు',
      nodeId: 'geography-physiography-drainage',
      focusUnits: [
        'Geomorphology: Himalayas, Peninsular Plateau & Coastal Plains',
        'Himalayan River Systems: Indus, Ganga & Brahmaputra Basins',
        'Peninsular River Systems: Godavari, Krishna, Cauvery, Narmada',
        'Indian Monsoon Mechanism: Jet Streams, El Niño & IOD',
        'Soils of India: Classification, Degradation & Conservation',
        'Natural Vegetation & Forest Cover (India State of Forest Report)',
        'Water Resources, Inter-linking of Rivers & Irrigation Projects',
        'Mineral & Energy Resources: Distribution & Industrial Clusters',
        'Natural Hazards: Floods, Droughts, Cyclones & Disaster Management',
        'Geography Map-Pointing, Flowcharts & Sectional MCQs'
      ]
    },
    {
      phase: 'phase1',
      startDay: 41,
      endDay: 50,
      subject: 'Macroeconomics: Monetary Policy, Inflation & Fiscal Federalism',
      subjectTelugu: 'స్థూల ఆర్థిక శాస్త్రం: ద్రవ్య విధానం & ద్రవ్యోల్బణం',
      nodeId: 'economy-macro-monetary-fiscal',
      focusUnits: [
        'National Income Accounting: GDP, GVA, Real vs Nominal Growth',
        'Monetary Policy Committee (MPC) & Flexible Inflation Targeting',
        'Inflation Dynamics: CPI vs WPI, Food Inflation & Supply Shocks',
        'Banking Sector Reforms: NPA Resolution, Insolvency & Bankruptcy Code',
        'Union Budget Architecture: Revenue vs Capital Receipts & Deficits',
        'FRBM Act Targets, Debt-to-GDP Ratio & Fiscal Prudence',
        '15th & 16th Finance Commission: Vertical & Horizontal Devolution',
        'External Sector: Balance of Payments, Forex Reserves & Trade Deficit',
        'Economic Survey & Union Budget Key Policy Themes',
        'Macroeconomics Synthesis Test & Mains 15-Marker Drafting'
      ]
    },

    // PHASE 2: ADVANCED SYLLABI & STATE SPECIALIZATIONS (Days 51–100)
    {
      phase: 'phase2',
      startDay: 51,
      endDay: 60,
      subject: 'Environment, Biodiversity & Climate Treaties',
      subjectTelugu: 'పర్యావరణం, జీవవైవిధ్యం & అంతర్జాతీయ ఒప్పందాలు',
      nodeId: 'environment-biodiversity-conventions',
      focusUnits: [
        'Ecology Principles: Trophic Levels, Ecological Succession & Biomass',
        'Biodiversity Hotspots of India & IUCN Red List Categories',
        'Protected Area Network: National Parks, Sanctuaries & Biosphere Reserves',
        'Wildlife Protection Amendment Act & Project Tiger/Elephant',
        'Wetlands & Ramsar Sites Conservation in India',
        'Climate Change: UNFCCC COP Milestones, Paris Agreement & Panchamrit',
        'Renewable Energy Transition: Solar, Green Hydrogen & Carbon Markets',
        'Air & Water Pollution Acts, Central Pollution Control Board (CPCB)',
        'Environmental Impact Assessment (EIA) Norms & Sustainable Cities',
        'Environment 30-MCQ Sectional Test & Model Answer Evaluation'
      ]
    },
    {
      phase: 'phase2',
      startDay: 61,
      endDay: 70,
      subject: 'Science & Emerging Technologies (Space, AI & Biotech)',
      subjectTelugu: 'శాస్త్ర సాంకేతిక రంగాలు (అంతరిక్షం, AI & బయోటెక్)',
      nodeId: 'scitech-emerging-technologies',
      focusUnits: [
        'ISRO Roadmap: Gaganyaan, Chandrayaan-3, Aditya-L1 & SSLV',
        'Cryogenic Engines, Launch Vehicles & Private Space Policy',
        'Artificial Intelligence, Large Language Models & Deepfakes Regulation',
        'India Semiconductor Mission & Critical Minerals Strategy',
        'Biotechnology: CRISPR-Cas9, Gene Therapy & mRNA Vaccines',
        'Quantum Technologies, Supercomputing & Quantum Mission',
        'Defense Indigenization: DRDO Missiles, Stealth Tech & Drone Rules',
        'Intellectual Property Rights (IPR), Patents & Traditional Knowledge',
        'Cybersecurity Architecture, CERT-In & DPDP Act 2023',
        'Science & Tech Speed Quiz & Mains Analytical Scaffold'
      ]
    },
    {
      phase: 'phase2',
      startDay: 71,
      endDay: 80,
      subject: 'Ethics, Integrity & Administrative Case Studies',
      subjectTelugu: 'నీతిశాస్త్రం, సత్యనిష్ఠ & పరిపాలనా అధ్యయనాలు',
      nodeId: 'ethics-governance-case-studies',
      focusUnits: [
        'Foundational Values of Civil Services: Neutrality, Empathy, Integrity',
        'Nolan Committee Principles & ARC-II Ethical Governance Roadmap',
        'Emotional Intelligence: Application in Crisis Management & Crowd Control',
        'Ethical Dilemmas in Public Procurement & Resource Allocation',
        'Conflict of Interest & Corporate Governance Standards',
        'Probity in Governance: Citizen’s Charters, Social Audits & RTI',
        'Whistleblower Protection & Anti-Corruption Mechanisms (Lokpal)',
        'Administrative Case Study Framework: Stakeholder Mapping & Options',
        'Complex Ethical Case Studies: Development vs Environmental Justice',
        'Mains GS-4 Full Paper Simulation & Model Answer Scoring'
      ]
    },
    {
      phase: 'phase2',
      startDay: 81,
      endDay: 90,
      subject: 'AP Reorganisation Act 2014 & Telangana Movement',
      subjectTelugu: 'ఏపీ పునర్వ్యవస్థీకరణ చట్టం 2014 & తెలంగాణ ఉద్యమం',
      nodeId: 'appsc-reorganisation-act-2014',
      focusUnits: [
        'AP Reorganisation Act 2014: 108 Sections & 12 Schedules Architecture',
        'Part II & Section 5: Common Capital & Territorial Division',
        'Part VI: Financial Division, Debt Sharing & Population Ratio (58.32:41.68)',
        'Section 90: Polavaram National Irrigation Project Mandates',
        'Telangana Movement: 1948 Police Action to 1952 Mulki Rules Agitation',
        'Gentlemen’s Agreement 1956 (14 Points) & 1969 Agitation',
        'Six-Point Formula 1973 & Article 371-D Presidential Orders',
        'Krishna (KRMB) & Godavari (GRMB) River Management Boards',
        'Schedule 9 & 10 Dispute: Supreme Court APSCHE Verdict 2016',
        'State Bifurcation & Regional Movements Comprehensive Test'
      ]
    },
    {
      phase: 'phase2',
      startDay: 91,
      endDay: 100,
      subject: 'State History, Culture & Socio-Economic Outlook',
      subjectTelugu: 'రాష్ట్రాల చరిత్ర, సంస్కృతి & సామాజిక-ఆర్థిక ధోరణులు',
      nodeId: 'appsc-history-andhra-movement',
      focusUnits: [
        'Satavahanas, Amaravati Art & Buddhism in Coastal Andhra',
        'Kakatiyas of Warangal: Hydraulic Tank Networks & Ramappa Temple',
        'Vijayanagara Empire: Administration, Architecture & Literature',
        'Qutb Shahis of Golkonda & Asaf Jahi Modernization',
        'Kandukuri Veeresalingam & Andhra Social Reform Awakening',
        '1953 Andhra State Formation & Potti Sreeramulu Fast-Unto-Death',
        'Telangana Folk Culture: Bathukamma, Bonalu, Sammakka-Saralamma',
        'AP Socio-Economic Survey: Ports, VCIC, Aquaculture & DBT Schemes',
        'Telangana Socio-Economic Outlook: GSDP, IT/Pharma Hub & Lift Irrigation',
        'State Modules Grand Mock Test (100 Questions) & Error Diagnostics'
      ]
    },

    // PHASE 3: MAINS WRITING, GRAND MOCKS & POLISH (Days 101–150)
    {
      phase: 'phase3',
      startDay: 101,
      endDay: 115,
      subject: 'Sectional Speed Drills, Negative Mark Diagnostics & Error Logging',
      subjectTelugu: 'సెక్షనల్ స్పీడ్ డ్రిల్స్ & నెగటివ్ మార్కింగ్ నివారణ',
      nodeId: 'polity-constitution-framework',
      focusUnits: [
        'Polity & Governance 50-MCQ Timed Simulation',
        'Modern History & Freedom Struggle 50-MCQ Timed Simulation',
        'Economy & Macro-Policy 50-MCQ Timed Simulation',
        'Geography & Environment 50-MCQ Timed Simulation',
        'Science & Tech Emerging Developments 50-MCQ Simulation',
        'AP & Telangana State Specific Syllabi 50-MCQ Simulation',
        'Error Log Review: Eliminating Conceptual Traps & Overconfidence',
        'Negative Marking Diagnostics: 50-50 Elimination Strategy',
        'Current Affairs 12-Month High-Yield Pointers Marathon',
        'Landmark Supreme Court Verdicts 2023-2025 Comprehensive Quiz',
        'Government Schemes & Socio-Economic Survey Data Points Drill',
        'Speed Test: 100 MCQs in 100 Minutes Under Real Exam Clock',
        'Weak Area Targeted Revision: Top 3 Identified Deficits',
        'Formulae, Schedules & Constitutional Articles Flashcard Sprint',
        'Milestone Sectional Mock Test Evaluation & Rank Calibration'
      ]
    },
    {
      phase: 'phase3',
      startDay: 116,
      endDay: 135,
      subject: 'Mains 15-Mark Writing Drills & Multi-Dimensional PESTLE Scaffolding',
      subjectTelugu: 'మెయిన్స్ జవాబుల సాధన & సమగ్ర నమూనా విశ్లేషణ',
      nodeId: 'polity-executive-legislature',
      focusUnits: [
        'Mains GS-2: Federal Friction & Governor Assent to Bills (Art 200)',
        'Mains GS-2: Sub-classification of SCs/STs & Equality Jurisprudence',
        'Mains GS-2: Parliamentary Committees & Executive Accountability',
        'Mains GS-3: Fiscal Deficit, FRBM Targets & Capital Expenditure',
        'Mains GS-3: Inflation Targeting vs Food Price Shocks in India',
        'Mains GS-3: Climate Resilience, Panchamrit & Green Energy Grid',
        'Mains GS-3: Semiconductor Ecosystem & Indigenous Manufacturing',
        'Mains GS-1: Revolutionary Movements vs Gandhian Mass Agitations',
        'Mains GS-1: Socio-Religious Reformers & Women’s Emancipation',
        'Mains GS-4: Administrative Dilemma: Public Interest vs Political Pressure',
        'Mains GS-4: Whistleblower Integrity Case Study Drafting',
        'Mains State Paper: AP Reorganisation Act Unfinished Agenda',
        'Mains State Paper: Telangana Irrigation & Agricultural Transformation',
        'Mains Essay: Technology as a Double-Edged Sword for Democracy',
        'Mains Essay: Federal Balance in an Era of Regional Aspirations',
        'Peer Evaluation & Model Answer Keyword Benchmarking',
        'Flowchart & Diagram Integration Workshop for Mains Answers',
        'Time Management Drill: Writing 200 Words in Exactly 8 Minutes',
        'Mains High-Scoring Value Additions (Data, Reports, Quotes)',
        'Mains 3-Hour Full Mock Simulation (GS Paper 1 or 2)'
      ]
    },
    {
      phase: 'phase3',
      startDay: 136,
      endDay: 150,
      subject: 'Grand Full-Length Mock Simulations, Topper Notes & Hall Strategy',
      subjectTelugu: 'గ్రాండ్ ఫుల్-లెంగ్త్ మాక్ సిమ్యులేషన్స్ & తుది పునశ్చరణ',
      nodeId: 'economy-macro-monetary-fiscal',
      focusUnits: [
        'Grand Full-Length Mock 1 (Paper 1 - 150 MCQs)',
        'Grand Mock 1 Deep Post-Mortem & Knowledge Gap Elimination',
        'Grand Full-Length Mock 2 (Paper 2 / State Paper - 150 MCQs)',
        'Grand Mock 2 Deep Post-Mortem & Time Pacing Fixes',
        'Topper Verified Notes Rapid Scan: Polity & Governance',
        'Topper Verified Notes Rapid Scan: Macroeconomics & Schemes',
        'Topper Verified Notes Rapid Scan: History & Freedom Movement',
        'Topper Verified Notes Rapid Scan: State Bifurcation & Culture',
        'High-Yield CheatSheet Memorization: Articles, Amendments & Acts',
        'Resource Vault Final Scan: Official Gazette Summaries',
        'OMR Sheet Bubbling Practice & Exam Hall Psychology Drill',
        'Calmness Protocol: Sleep, Nutrition & Hall Stationery Checklist',
        'Light Flashcard Review: Don’t Touch New Unread Books',
        'Confidence Reassurance: Reviewing Your 150-Day Milestone Streak',
        'Final Exam Readiness & Victory Mindset Session'
      ]
    }
  ];

  syllabusSprints.forEach((sprint) => {
    const totalDaysInSprint = sprint.endDay - sprint.startDay + 1;

    for (let d = 0; d < totalDaysInSprint; d++) {
      const dayNum = sprint.startDay + d;
      const unitName = sprint.focusUnits[d] || `Syllabus Unit ${d + 1}`;
      const isRevisionDay = dayNum % 7 === 0;

      const tasks = [
        {
          id: `task150-${dayNum}-1`,
          title: isRevisionDay 
            ? `Cumulative Revision & Mind-Mapping: ${sprint.subject}`
            : `Deep Chapter Reading: ${unitName}`,
          type: 'reading' as const,
          durationMinutes: 90,
          completed: false,
          linkedNodeId: sprint.nodeId
        },
        {
          id: `task150-${dayNum}-2`,
          title: isRevisionDay
            ? `Infographic Matrix & High-Yield Cheat Sheet Review`
            : `Visual Concept & Cheat Sheet Synthesis in Dossier`,
          type: 'revision' as const,
          durationMinutes: 35,
          completed: false,
          linkedNodeId: sprint.nodeId
        },
        {
          id: `task150-${dayNum}-3`,
          title: isRevisionDay
            ? `Weekly Benchmark Prelims Quiz (25 MCQs)`
            : `Topic-Level Prelims MCQs Practice (15 Questions)`,
          type: 'quiz' as const,
          durationMinutes: 35,
          completed: false,
          linkedNodeId: sprint.nodeId
        },
        {
          id: `task150-${dayNum}-4`,
          title: isRevisionDay
            ? `Mains 250-Word Essay or 20-Mark Analytical Question`
            : `Daily Mains 15-Marker Answer Writing & Evaluation`,
          type: 'mains_practice' as const,
          durationMinutes: 40,
          completed: false,
          linkedNodeId: sprint.nodeId
        }
      ];

      plan.push({
        dayNumber: dayNum,
        phase: sprint.phase,
        subject: sprint.subject,
        title: `Day ${dayNum}: ${unitName}`,
        titleTelugu: `రోజు ${dayNum}: ${unitName}`,
        description: `Comprehensive module covering "${unitName}" under ${sprint.subject}. Complete textbook notes, review high-yield cheat sheets, solve exam MCQs, and draft structured Mains answers.`,
        tasks
      });
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
