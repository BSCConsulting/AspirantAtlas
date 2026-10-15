export type ResourceSubjectKey = 
  | 'all'
  | 'polity'
  | 'economy'
  | 'history'
  | 'geography-env'
  | 'scitech'
  | 'ethics'
  | 'appsc'
  | 'tspsc';

export interface ResourceVaultItem {
  id: string;
  docId: string;
  title: string;
  titleTelugu?: string;
  description: string;
  type: 'Official Gazette' | 'NCERT Book' | 'Government Report' | 'PYQ Archive' | 'Statutory Act';
  subjectKey: ResourceSubjectKey;
  targetExams: ('upsc' | 'appsc' | 'tspsc')[];
  url: string;
  badge: string;
  fileSize?: string;
  issuingAuthority?: string;
  year?: string;
}

export interface ResourceCategory {
  id: ResourceSubjectKey;
  category: string;
  categoryTelugu?: string;
  description: string;
  items: ResourceVaultItem[];
}

export const RESOURCE_VAULT: ResourceCategory[] = [
  // ==========================================
  // 1. INDIAN POLITY & CONSTITUTIONAL LAW
  // ==========================================
  {
    id: 'polity',
    category: 'Indian Polity & Constitutional Law',
    categoryTelugu: 'భారత రాజ్యాంగం & పరిపాలనా చట్టాలు',
    description: 'Primary legislative texts, bare acts, and landmark administrative reforms commission reports.',
    items: [
      {
        id: 'rv-coi',
        docId: 'constitution-of-india-official',
        title: 'Constitution of India (Updated Bilingual Edition with 106th CAA)',
        titleTelugu: 'భారత రాజ్యాంగం (తాజా సవరణలతో కూడిన అధికారిక ప్రతి)',
        description: 'Complete statutory text of the Constitution of India across 395 Articles and 12 Schedules with the Women’s Reservation Act (106th CAA).',
        type: 'Official Gazette',
        subjectKey: 'polity',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://legislative.gov.in/constitution-of-india/',
        badge: 'National Core',
        fileSize: '5.2 MB',
        issuingAuthority: 'Ministry of Law and Justice, Govt of India',
        year: '2024 Edition'
      },
      {
        id: 'rv-rpa',
        docId: 'rpa-1950-1951-acts',
        title: 'Representation of the People Acts (1950 & 1951) & Electoral Reforms',
        titleTelugu: 'ప్రజాప్రాతినిధ్య చట్టాలు (1950 & 1951) & ఎన్నికల సంస్కరణలు',
        description: 'Statutory basis for allocation of seats, voter qualifications, conduct of elections, corrupt practices, and disqualification of lawmakers (Section 8).',
        type: 'Statutory Act',
        subjectKey: 'polity',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://legislative.gov.in',
        badge: 'Statutory Law',
        fileSize: '2.1 MB',
        issuingAuthority: 'Legislative Department, Ministry of Law and Justice',
        year: 'Official Statute'
      },
      {
        id: 'rv-arc2-ethics',
        docId: 'arc2-ethics-in-governance',
        title: '2nd ARC 4th Report: Ethics in Governance',
        titleTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్: పరిపాలనలో నీతిశాస్త్రం',
        description: 'Landmark reform roadmap on combating corruption, code of conduct for civil servants, whistleblower protection, and Lokpal mechanisms.',
        type: 'Government Report',
        subjectKey: 'polity',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://darpg.gov.in',
        badge: 'Mains Gold Standard',
        fileSize: '3.6 MB',
        issuingAuthority: 'Department of Administrative Reforms & Public Grievances (DARPG)',
        year: 'Second ARC'
      },
      {
        id: 'rv-sarkaria-punchhi',
        docId: 'sarkaria-punchhi-commissions',
        title: 'Inter-State Council Digest: Sarkaria & Punchhi Commissions on Federalism',
        titleTelugu: 'సమాఖ్య వ్యవస్థపై సర్కారియా & పుంఛీ కమిషన్ల సిఫార్సులు',
        description: 'Comprehensive recommendations on Article 356 (President’s Rule), discretionary powers of Governors, and Inter-State River Water Disputes.',
        type: 'Government Report',
        subjectKey: 'polity',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://interstatecouncil.gov.in',
        badge: 'Federal Dynamics',
        fileSize: '4.2 MB',
        issuingAuthority: 'Inter-State Council Secretariat, Ministry of Home Affairs',
        year: 'Official Digest'
      }
    ]
  },

  // ==========================================
  // 2. MACROECONOMICS, FISCAL FEDERALISM & BUDGET
  // ==========================================
  {
    id: 'economy',
    category: 'Macroeconomics, Fiscal Federalism & Budget',
    categoryTelugu: 'స్థూల ఆర్థిక వ్యవస్థ & బడ్జెట్ నివేదికలు',
    description: 'Gold-standard economic surveys, Finance Commission devolution formulas, and banking frameworks.',
    items: [
      {
        id: 'rv-ues',
        docId: 'union-economic-survey-budget-report',
        title: 'Union Economic Survey & Budget Highlights',
        titleTelugu: 'కేంద్ర ఆర్థిక సర్వే & బడ్జెట్ ముఖ్యాంశాలు',
        description: 'Ministry of Finance annual flagship survey across 8 thematic chapters: real GDP growth, fiscal consolidation, inflation targeting, external sector, and PM GatiShakti.',
        type: 'Government Report',
        subjectKey: 'economy',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://www.indiabudget.gov.in',
        badge: 'UPSC/State Core',
        fileSize: '4.1 MB',
        issuingAuthority: 'Department of Economic Affairs, Ministry of Finance',
        year: 'Latest Survey'
      },
      {
        id: 'rv-fc15',
        docId: 'finance-commission-15-report',
        title: 'Report of the 15th Finance Commission (2021–2026)',
        titleTelugu: '15వ ఆర్థిక సంఘం తుది నివేదిక (2021-26)',
        description: 'Statutory formula for 41% vertical tax devolution to States, horizontal equity criteria (Income Distance, Demographic Performance), and local body grants.',
        type: 'Government Report',
        subjectKey: 'economy',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://fincomindia.nic.in',
        badge: 'Statutory Devolution',
        fileSize: '4.7 MB',
        issuingAuthority: 'Finance Commission of India (N.K. Singh Committee)',
        year: '2021-26 Mandate'
      },
      {
        id: 'rv-frbm',
        docId: 'frbm-act-targets-rules',
        title: 'Fiscal Responsibility & Budget Management (FRBM) Act & Debt Rules',
        titleTelugu: 'ఎఫ్‌ఆర్‌బీఎం చట్టం & ద్రవ్య లోటు లక్ష్యాలు',
        description: 'Legal ceilings on fiscal deficit (3% of GDP target), escape clauses, Debt-to-GDP sustainability trajectories (60% combined limit), and NK Singh recommendations.',
        type: 'Statutory Act',
        subjectKey: 'economy',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://dea.gov.in',
        badge: 'Fiscal Prudence',
        fileSize: '1.9 MB',
        issuingAuthority: 'Ministry of Finance, Government of India',
        year: 'Amended Rules'
      },
      {
        id: 'rv-rbi-mpc',
        docId: 'rbi-mpc-banking-reforms',
        title: 'RBI Monetary Policy Framework & Banking Stability Report',
        titleTelugu: 'ఆర్బీఐ ద్రవ్య విధాన ముసాయిదా & బ్యాంకింగ్ సంస్కరణలు',
        description: 'Flexible Inflation Targeting (4% ± 2%) under RBI Act Sec 45ZB, Liquidity Adjustment Facility corridor (Repo, SDF, MSF), and Asset Quality Review (IBC).',
        type: 'Government Report',
        subjectKey: 'economy',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://rbi.org.in',
        badge: 'Monetary Architecture',
        fileSize: '3.3 MB',
        issuingAuthority: 'Reserve Bank of India',
        year: 'RBI Reports'
      }
    ]
  },

  // ==========================================
  // 3. MODERN INDIAN HISTORY & FREEDOM STRUGGLE
  // ==========================================
  {
    id: 'history',
    category: 'Modern Indian History & Freedom Struggle',
    categoryTelugu: 'ఆధునిక భారతదేశ చరిత్ర & స్వాతంత్ర్యోద్యమం',
    description: 'Constitutional reform acts under British rule, transfer of power documents, and historiographical compendiums.',
    items: [
      {
        id: 'rv-goi-acts',
        docId: 'constitutional-acts-1909-1919-1935',
        title: 'Government of India Acts Compendium (1909, 1919, 1935)',
        titleTelugu: 'భారత ప్రభుత్వ చట్టాలు (1909, 1919, 1935 సంకలనం)',
        description: 'Comparative statutory analysis of Morley-Minto separate electorates, Montagu-Chelmsford provincial dyarchy, and GoI Act 1935 federal architecture.',
        type: 'Official Gazette',
        subjectKey: 'history',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://nationalarchives.nic.in',
        badge: 'Constitutional History',
        fileSize: '3.2 MB',
        issuingAuthority: 'National Archives of India / Gazette Records',
        year: 'Historical Statute'
      },
      {
        id: 'rv-indep-act',
        docId: 'indian-independence-act-1947',
        title: 'The Indian Independence Act, 1947 (10 & 11 Geo. 6. c. 30)',
        titleTelugu: 'భారత స్వాతంత్ర్య చట్టం, 1947',
        description: 'The statutory instrument partitioning British India into India and Pakistan, abolishing Crown paramountcy over princely states, and establishing dominion constitutions.',
        type: 'Official Gazette',
        subjectKey: 'history',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://www.legislation.gov.uk',
        badge: 'Sovereign Milestone',
        fileSize: '1.8 MB',
        issuingAuthority: 'British Parliament / Gazette of India Archive',
        year: '1947 Act'
      },
      {
        id: 'rv-ncert-history',
        docId: 'ncert-themes-in-indian-history',
        title: 'NCERT Class 12: Themes in Indian History (Part III)',
        titleTelugu: 'ఎన్‌సీఈఆర్‌టీ చరిత్ర: భారత స్వాతంత్ర్య సంగ్రామం',
        description: 'Foundational textbook covering the Revolt of 1857, colonial cities, Mahatma Gandhi and the nationalist movement, understanding partition, and framing the constitution.',
        type: 'NCERT Book',
        subjectKey: 'history',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://ncert.nic.in/textbook.php',
        badge: 'NCERT Foundation',
        fileSize: '3.5 MB',
        issuingAuthority: 'National Council of Educational Research and Training (NCERT)',
        year: 'National Curriculum'
      }
    ]
  },

  // ==========================================
  // 4. GEOGRAPHY, ENVIRONMENT & RIVER SYSTEMS
  // ==========================================
  {
    id: 'geography-env',
    category: 'Geography, River Systems & Environment',
    categoryTelugu: 'భౌగోళిక శాస్త్రం, నదీ వ్యవస్థలు & పర్యావరణం',
    description: 'National forest reports, river basin technical data, and statutory biodiversity conservation laws.',
    items: [
      {
        id: 'rv-isfr',
        docId: 'isfr-forest-report-latest',
        title: 'India State of Forest Report (ISFR)',
        titleTelugu: 'భారత అటవీ నివేదిక (ఐఎస్‌ఎఫ్‌ఆర్)',
        description: 'Forest Survey of India (FSI) official assessment of forest cover (21.71%), tree cover, mangrove expansion, carbon stocks, and forest fire hotspots.',
        type: 'Government Report',
        subjectKey: 'geography-env',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://fsi.nic.in',
        badge: 'Ecological Data',
        fileSize: '4.5 MB',
        issuingAuthority: 'Forest Survey of India, MoEFCC',
        year: 'Biennial Edition'
      },
      {
        id: 'rv-cwc-rivers',
        docId: 'cwc-river-basins-interlinking',
        title: 'Central Water Commission: Krishna & Godavari Basin Hydrology & River Inter-linking',
        titleTelugu: 'గోదావరి, కృష్ణా నదీ పరీవాహక ప్రాంతాల హైడ్రాలజీ & నదుల అనుసంధానం',
        description: 'Technical water yield studies, reservoir storage capacities, Krishna-Godavari water dispute tribunals (KWDT & GWDT), and national water development agency (NWDA) links.',
        type: 'Government Report',
        subjectKey: 'geography-env',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://cwc.gov.in',
        badge: 'Water Resources',
        fileSize: '3.8 MB',
        issuingAuthority: 'Central Water Commission (CWC), Ministry of Jal Shakti',
        year: 'Official Study'
      },
      {
        id: 'rv-wpa',
        docId: 'wildlife-protection-act-2022',
        title: 'Wildlife (Protection) Amendment Act, 2022',
        titleTelugu: 'వన్యప్రాణి (సంరక్షణ) సవరణ చట్టం, 2022',
        description: 'Statutory rationalization reducing schedules from VI to IV, strict compliance with CITES appendices, enhanced penal provisions, and invasive alien species control.',
        type: 'Statutory Act',
        subjectKey: 'geography-env',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://moef.gov.in',
        badge: 'Conservation Law',
        fileSize: '2.5 MB',
        issuingAuthority: 'Ministry of Environment, Forest and Climate Change',
        year: 'Act No. 18 of 2022'
      }
    ]
  },

  // ==========================================
  // 5. SCIENCE & EMERGING TECHNOLOGIES
  // ==========================================
  {
    id: 'scitech',
    category: 'Science & Emerging Technologies',
    categoryTelugu: 'శాస్త్ర సాంకేతిక రంగాలు & సరికొత్త ఆవిష్కరణలు',
    description: 'National semiconductor roadmaps, ISRO space exploration dossiers, and data privacy legislation.',
    items: [
      {
        id: 'rv-isro-space',
        docId: 'isro-space-missions-roadmap',
        title: 'ISRO Space Exploration Dossier (Gaganyaan, Chandrayaan & SSLV)',
        titleTelugu: 'ఇస్రో అంతరిక్ష యాత్రల నివేదిక (గగన్‌యాన్, చంద్రయాన్ & ఎస్ఎస్ఎల్వీ)',
        description: 'Comprehensive operational briefs on India’s human spaceflight mission (Gaganyaan), cryogenic propulsion technology, Small Satellite Launch Vehicle (SSLV), and Indian Space Policy 2023.',
        type: 'Government Report',
        subjectKey: 'scitech',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://isro.gov.in',
        badge: 'Space Tech',
        fileSize: '3.9 MB',
        issuingAuthority: 'Department of Space, Government of India / ISRO',
        year: 'Official Dossier'
      },
      {
        id: 'rv-semiconductor',
        docId: 'india-semiconductor-mission-ism',
        title: 'India Semiconductor Mission (ISM) & Critical Minerals Strategy',
        titleTelugu: 'భారత సెమీకండక్టర్ మిషన్ & కీలక ఖనిజాల వ్యూహం',
        description: '₹76,000 crore incentive structure for semiconductor wafer fabs, display fabs, ATMP/OSAT units, and design linked incentive (DLI) schemes.',
        type: 'Government Report',
        subjectKey: 'scitech',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://meity.gov.in',
        badge: 'Industrial Strategy',
        fileSize: '2.7 MB',
        issuingAuthority: 'Ministry of Electronics and Information Technology (MeitY)',
        year: 'National Mission'
      },
      {
        id: 'rv-dpdp',
        docId: 'dpdp-act-2023-statute',
        title: 'Digital Personal Data Protection (DPDP) Act, 2023',
        titleTelugu: 'డిజిటల్ వ్యక్తిగత డేటా రక్షణ చట్టం, 2023',
        description: 'Statutory rights of Data Principals, obligations of Data Fiduciaries, Data Protection Board of India establishment, cross-border data transfers, and penalties up to ₹250 crore.',
        type: 'Statutory Act',
        subjectKey: 'scitech',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://meity.gov.in',
        badge: 'Data Governance',
        fileSize: '2.2 MB',
        issuingAuthority: 'Ministry of Law and Justice / MeitY',
        year: 'Act No. 22 of 2023'
      }
    ]
  },

  // ==========================================
  // 6. ETHICS, INTEGRITY & GOVERNANCE
  // ==========================================
  {
    id: 'ethics',
    category: 'Ethics, Integrity & Governance',
    categoryTelugu: 'నీతిశాస్త్రం, సత్యనిష్ఠ & పౌర కేంద్ర పరిపాలన',
    description: 'Nolan committee standards, civil service conduct rules, and citizen-centric governance frameworks.',
    items: [
      {
        id: 'rv-arc2-citizen',
        docId: 'arc2-citizen-centric-admin',
        title: '2nd ARC 12th Report: Citizen Centric Administration & Sevottam Model',
        titleTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్: పౌర కేంద్ర పరిపాలన & సేవోత్తమ్ మోడల్',
        description: 'Statutory citizen charters, public grievance redressal mechanisms, Sevottam delivery model, single-window service delivery, and social accountability tools.',
        type: 'Government Report',
        subjectKey: 'ethics',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://darpg.gov.in',
        badge: 'GS-4 Ethics Core',
        fileSize: '3.4 MB',
        issuingAuthority: 'DARPG, Government of India',
        year: 'Second ARC'
      },
      {
        id: 'rv-nolan-principles',
        docId: 'nolan-committee-principles',
        title: 'Nolan Committee Seven Principles of Public Life & Civil Service Conduct Rules',
        titleTelugu: 'నోలన్ కమిటీ ప్రజా జీవన 7 సూత్రాలు & సివిల్ సర్వీస్ నిబంధనలు',
        description: 'Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership principles synthesized with Central Civil Services (Conduct) Rules 1964.',
        type: 'Government Report',
        subjectKey: 'ethics',
        targetExams: ['upsc', 'appsc', 'tspsc'],
        url: 'https://dopt.gov.in',
        badge: 'Foundational Ethics',
        fileSize: '1.7 MB',
        issuingAuthority: 'Committee on Standards in Public Life / DoPT',
        year: 'Benchmark Standard'
      }
    ]
  },

  // ==========================================
  // 7. ANDHRA PRADESH STATE-SPECIFIC REPOSITORY
  // ==========================================
  {
    id: 'appsc',
    category: 'Andhra Pradesh State Repository (APPSC)',
    categoryTelugu: 'ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రత్యేక ప్రతులు (ఏపీపీఎస్సీ)',
    description: 'Complete 2014 Bifurcation statutes, Polavaram National Project gazettes, and socio-economic survey reports.',
    items: [
      {
        id: 'rv-ap-reorg',
        docId: 'ap-reorganisation-act-2014-statute',
        title: 'Andhra Pradesh Reorganisation Act, 2014 (Act No. 6 of 2014)',
        titleTelugu: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం, 2014 (చట్టం నం. 6)',
        description: 'Complete 108 sections and 13 schedules published by the Ministry of Law & Justice: Part VI financial division (58.32:41.68), KRMB & GRMB, and Section 90 Polavaram.',
        type: 'Official Gazette',
        subjectKey: 'appsc',
        targetExams: ['appsc', 'upsc'],
        url: 'https://legislative.gov.in',
        badge: 'Statutory Act',
        fileSize: '2.4 MB',
        issuingAuthority: 'Ministry of Law and Justice, Govt of India',
        year: 'Act No. 6 of 2014'
      },
      {
        id: 'rv-apse',
        docId: 'ap-socio-economic-survey-report',
        title: 'Socio-Economic Survey of Andhra Pradesh (Latest Edition)',
        titleTelugu: 'ఆంధ్రప్రదేశ్ సామాజిక-ఆర్థిక సర్వే',
        description: 'Annual official economic survey published by Department of Planning, AP Government: GSDP indicators, ports, aquaculture leadership, and Navaratnalu DBT policies.',
        type: 'Government Report',
        subjectKey: 'appsc',
        targetExams: ['appsc'],
        url: 'https://planning.ap.gov.in',
        badge: 'APPSC Must-Read',
        fileSize: '3.1 MB',
        issuingAuthority: 'Department of Planning, Government of Andhra Pradesh',
        year: 'Official Survey'
      },
      {
        id: 'rv-ap-history',
        docId: 'ap-history-telugu-akademi',
        title: 'Telugu Akademi: History & Culture of Andhra Pradesh & Sri Bagh Pact 1937',
        titleTelugu: 'తెలుగు అకాడమీ: ఆంధ్రుల చరిత్ర, సంస్కృతి & శ్రీభాగ్ ఒప్పందం',
        description: 'Definitive historical authority on Satavahanas, Eastern Chalukyas, Kakatiyas, Vijayanagara Empire, Kandukuri social reforms, and 1953 Andhra State formation.',
        type: 'Government Report',
        subjectKey: 'appsc',
        targetExams: ['appsc'],
        url: 'https://teluguacademy.net',
        badge: 'Telugu Akademi Standard',
        fileSize: '5.1 MB',
        issuingAuthority: 'Telugu Akademi, Government of Andhra Pradesh',
        year: 'Prescribed Text'
      }
    ]
  },

  // ==========================================
  // 8. TELANGANA STATE-SPECIFIC REPOSITORY
  // ==========================================
  {
    id: 'tspsc',
    category: 'Telangana State Repository (TSPSC / TGPSC)',
    categoryTelugu: 'తెలంగాణ రాష్ట్ర ప్రత్యేక ప్రతులు (టీఎస్‌పీఎస్సీ)',
    description: 'Sri Krishna Committee 500-page report, Gentlemen’s Agreement, Presidential Orders, and Socio-Economic Outlook.',
    items: [
      {
        id: 'rv-skc',
        docId: 'sri-krishna-committee-report',
        title: 'Report of the Committee for Consultations on AP (Sri Krishna Committee)',
        titleTelugu: 'జస్టిస్ శ్రీకృష్ణ కమిటీ సమగ్ర నివేదిక (505 పేజీలు & 6 ప్రత్యామ్నాయాలు)',
        description: 'Comprehensive 505-page historical, socio-economic, and regional disparity report evaluating the 6 options for Andhra Pradesh and Telangana.',
        type: 'Government Report',
        subjectKey: 'tspsc',
        targetExams: ['tspsc', 'upsc'],
        url: 'https://www.mha.gov.in',
        badge: 'TSPSC Core',
        fileSize: '4.8 MB',
        issuingAuthority: 'Ministry of Home Affairs, Government of India',
        year: 'December 2010'
      },
      {
        id: 'rv-art371d',
        docId: 'article-371-d-presidential-order',
        title: 'Article 371-D, Six-Point Formula 1973 & Presidential Orders (Zonal System)',
        titleTelugu: 'ఆర్టికల్ 371-డి, ఆరు సూత్రాల పథకం 1973 & రాష్ట్రపతి ఉత్తర్వులు',
        description: 'Statutory basis for equitable opportunities in public employment and education, 7-zone system, and Andhra Pradesh Educational Institutions Order 1974.',
        type: 'Official Gazette',
        subjectKey: 'tspsc',
        targetExams: ['tspsc'],
        url: 'https://legislative.gov.in',
        badge: 'Constitutional Order',
        fileSize: '2.6 MB',
        issuingAuthority: 'Ministry of Law and Justice, Govt of India',
        year: 'Presidential Orders'
      },
      {
        id: 'rv-go610',
        docId: 'go-ms-610-1985',
        title: 'G.O. Ms No. 610 (1985) & J.M. Girglani One-Man Commission Report',
        titleTelugu: 'జీవో నం. 610 (1985) & జె.ఎం. గిర్గలాని ఏకసభ్య కమిషన్ నివేదిక',
        description: 'Government Order rectifying non-local employee appointments in Telangana zones and Girglani Commission findings across 35 government departments.',
        type: 'Official Gazette',
        subjectKey: 'tspsc',
        targetExams: ['tspsc'],
        url: 'https://telangana.gov.in',
        badge: 'Historic Order',
        fileSize: '3.1 MB',
        issuingAuthority: 'General Administration Department, Government of Telangana',
        year: 'Official Record'
      },
      {
        id: 'rv-tseo',
        docId: 'telangana-socio-economic-outlook-report',
        title: 'Telangana Socio-Economic Outlook (Latest Edition)',
        titleTelugu: 'తెలంగాణ సామాజిక-ఆర్థిక ధోరణులు (తాజా నివేదిక)',
        description: 'Published annually by Department of Planning: GSDP leadership, Life Sciences & IT corridor, Kaleshwaram & Palamuru-Ranga Reddy projects, and Rythu Bharosa.',
        type: 'Government Report',
        subjectKey: 'tspsc',
        targetExams: ['tspsc'],
        url: 'https://planning.telangana.gov.in',
        badge: 'TSPSC Must-Read',
        fileSize: '3.4 MB',
        issuingAuthority: 'Department of Planning, Government of Telangana',
        year: 'Annual Survey'
      }
    ]
  }
];
