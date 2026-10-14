import { SyllabusNode } from '../types';

export const SYLLABUS_NODES: SyllabusNode[] = [
  // ==========================================
  // PHASE 1: BEDROCK CORE (Common to all 3)
  // ==========================================
  {
    id: 'polity-constitution-framework',
    title: 'Constitutional Framework & Fundamental Rights',
    titleTelugu: 'రాజ్యాంగ నిర్మాణం & ప్రాథమిక హక్కులు',
    subject: 'Indian Polity & Governance',
    phase: 'phase1',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 45,
    description: 'Historical evolution, Preamble, Articles 12-35 (FR), Basic Structure doctrine, DPSP & Fundamental Duties.',
    keyConcepts: ['Article 21 & Privacy', 'Basic Structure Doctrine', 'Writs (Art 32 & 226)', 'DPSP vs FR Balance'],
    weightage: 'Very High'
  },
  {
    id: 'polity-executive-legislature',
    title: 'President, Governor & Parliamentary System',
    titleTelugu: 'రాష్ట్రపతి, గవర్నర్ & పార్లమెంటరీ వ్యవస్థ',
    subject: 'Indian Polity & Governance',
    phase: 'phase1',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 40,
    description: 'Federal balance of powers, Ordinance making (Art 123 vs 213), Governor discretionary powers & Parliamentary Committees.',
    keyConcepts: ['Art 163 Discretion', 'Sarkaria & Punchhi Commissions', 'Money Bill certification', 'Anti-Defection Law (10th Schedule)'],
    weightage: 'Very High'
  },
  {
    id: 'history-modern-freedom-struggle',
    title: 'Modern Indian History & Freedom Struggle (1857-1947)',
    titleTelugu: 'ఆధునిక భారత చరిత్ర & స్వాతంత్ర్యోద్యమం',
    subject: 'Modern History',
    phase: 'phase1',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 50,
    description: 'Socio-religious reform movements, Congress sessions, Gandhian mass movements, Revolutionary nationalism and 1947 Partition.',
    keyConcepts: ['Non-Cooperation & Civil Disobedience', 'Quit India Movement 1942', 'Government of India Acts (1909, 1919, 1935)', 'INA & Naval Mutiny'],
    weightage: 'High'
  },
  {
    id: 'geography-physiography-drainage',
    title: 'Physiography & River Systems of India',
    titleTelugu: 'భారతదేశ భౌగోళిక స్వరూపం & నదీ వ్యవస్థలు',
    subject: 'Geography',
    phase: 'phase1',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 35,
    description: 'Himalayan vs Peninsular drainage, Godavari and Krishna river basins, Monsoon mechanism and soil-climate zones.',
    keyConcepts: ['Himalayan vs Peninsular Rivers', 'Monsoon Jet Streams & El Niño', 'Krishna-Godavari Inter-linking', 'Soil Degredation'],
    weightage: 'High'
  },
  {
    id: 'economy-macro-monetary-fiscal',
    title: 'Macroeconomics: Monetary Policy, Inflation & Fiscal Federalism',
    titleTelugu: 'స్థూల ఆర్థిక శాస్త్రం: ద్రవ్య విధానం & ద్రవ్యోల్బణం',
    subject: 'Indian Economy',
    phase: 'phase1',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 45,
    description: 'RBI Monetary Policy Committee (MPC) transmission, CPI vs WPI inflation, Fiscal Deficit, FRBM Act and Finance Commission devolution.',
    keyConcepts: ['MPC Framework & Repo Rate', 'Headline vs Core Inflation', 'Finance Commission Horizontal Sharing', 'GST Council Dynamics'],
    weightage: 'Very High'
  },

  // ==========================================
  // PHASE 2: ADVANCED GS & VALUE ADDITION
  // ==========================================
  {
    id: 'environment-biodiversity-conventions',
    title: 'Environment, Biodiversity & Climate Treaties',
    titleTelugu: 'పర్యావరణం, జీవవైవిధ్యం & అంతర్జాతీయ ఒప్పందాలు',
    subject: 'Environment & Ecology',
    phase: 'phase2',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 40,
    description: 'Wildlife Protection Amendment Act, Ramsar Wetlands, UNFCCC COP summits, IUCN Red List status and Carbon Markets.',
    keyConcepts: ['Wildlife Protection Act Schedules', 'Panchamrit Targets', 'Wetlands Conservation Rules', 'Renewable Energy Transition'],
    weightage: 'Very High'
  },
  {
    id: 'scitech-emerging-technologies',
    title: 'Science & Emerging Technologies (Space, AI & Biotech)',
    titleTelugu: 'శాస్త్ర సాంకేతిక రంగాలు (అంతరిక్షం, AI & బయోటెక్)',
    subject: 'Science & Technology',
    phase: 'phase2',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 35,
    description: 'ISRO Roadmap (Gaganyaan, Chandrayaan, SSLV), CRISPR-Cas9 gene editing, Quantum mission, Semiconductor ecosystem in India.',
    keyConcepts: ['India Semiconductor Mission', 'Cryogenic Propulsion & SSLV', 'Generative AI & Data Privacy', 'Gene Drive & Ethics'],
    weightage: 'High'
  },
  {
    id: 'ethics-governance-case-studies',
    title: 'Ethics, Integrity & Administrative Case Studies',
    titleTelugu: 'నీతిశాస్త్రం, సత్యనిష్ఠ & పరిపాలనా అధ్యయనాలు',
    subject: 'Ethics & Governance',
    phase: 'phase2',
    examScope: ['upsc', 'appsc', 'tspsc'],
    estMinutes: 45,
    description: 'Nolan Committee principles, civil service neutrality vs commitment, ethical dilemmas in public procurement and case studies.',
    keyConcepts: ['Foundational Civil Service Values', 'Emotional Intelligence in Administration', 'Whistleblowing & 2nd ARC', 'Conflict of Interest'],
    weightage: 'High'
  },

  // ==========================================
  // PHASE 3: ANDHRA PRADESH STATE EXCLUSIVE (APPSC)
  // ==========================================
  {
    id: 'appsc-reorganisation-act-2014',
    title: 'AP Reorganisation Act, 2014 & Bifurcation Dynamics',
    titleTelugu: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం, 2014 & విభజన సమస్యలు',
    subject: 'AP State Specific',
    phase: 'phase3',
    examScope: ['appsc'],
    isStateExclusive: true,
    estMinutes: 55,
    description: 'Detailed analysis of 108 Sections & 12 Schedules: Assets & Liabilities (58.32:41.68), KRMB & GRMB, Polavaram National Project and Capital issues.',
    keyConcepts: ['Part VI Financial Distribution', 'Section 90 Polavaram status', 'Schedule 9 & 10 Dispute (APSCHE Case)', 'Special Category Status'],
    weightage: 'Very High'
  },
  {
    id: 'appsc-history-andhra-movement',
    title: 'History & Culture of AP: Satavahanas to Modern Andhra Movement',
    titleTelugu: 'ఆంధ్రుల చరిత్ర & సంస్కృతి: శాతవాహనుల నుండి ఆంధ్రోద్యమం వరకు',
    subject: 'AP State Specific',
    phase: 'phase3',
    examScope: ['appsc'],
    isStateExclusive: true,
    estMinutes: 50,
    description: 'Satavahana dynasty administration, Amaravati art, Eastern Chalukyas, Vijayanagara golden age, Potti Sreeramulu fast and 1953 Andhra State.',
    keyConcepts: ['Amaravati Stupa Architecture', 'Nannaya, Tikkana & Telugu literature', 'Kandukuri Veeresalingam Social Reform', 'Sri Bagh Pact 1937'],
    weightage: 'Very High'
  },
  {
    id: 'appsc-economy-welfare-schemes',
    title: 'AP Socio-Economic Survey, Coastal Economy & Welfare Policies',
    titleTelugu: 'ఆంధ్రప్రదేశ్ సామాజిక-ఆర్థిక సర్వే & సంక్షేమ పథకాలు',
    subject: 'AP State Specific',
    phase: 'phase3',
    examScope: ['appsc'],
    isStateExclusive: true,
    estMinutes: 40,
    description: 'Macro-indicators of AP Economy, Gross State Domestic Product (GSDP), Aquaculture and Blue Economy, Ports & Industrial Corridors (VCIC, CBIC).',
    keyConcepts: ['AP GSDP growth drivers', 'Visakhapatnam-Chennai Corridor', 'Direct Benefit Transfer (DBT) welfare models', 'Aquaculture & Horticulture export dominance'],
    weightage: 'High'
  },

  // ==========================================
  // PHASE 3: TELANGANA STATE EXCLUSIVE (TSPSC / TGPSC)
  // ==========================================
  {
    id: 'tspsc-movement-state-formation',
    title: 'Telangana Movement & State Formation (1948–2014)',
    titleTelugu: 'తెలంగాణ ఉద్యమం & రాష్ట్ర ఆవిర్భావం (1948–2014)',
    subject: 'Telangana State Specific',
    phase: 'phase3',
    examScope: ['tspsc'],
    isStateExclusive: true,
    estMinutes: 60,
    description: 'Hyderabad State Police Action 1948, 1952 Mulki Rules agitation, Gentlemen’s Agreement 1956, 1969 Agitation, Six-Point Formula 1973, G.O. 610, and 2001–2014 final struggle.',
    keyConcepts: ['1956 Gentlemen’s Agreement 14 Points', '1969 Agitation & Eight-Point Plan', 'Article 371-D & Presidential Order 1975', 'Sri Krishna Committee (6 Options)'],
    weightage: 'Very High'
  },
  {
    id: 'tspsc-history-culture-heritage',
    title: 'Telangana History, Kakatiyas, Qutb Shahis & Cultural Heritage',
    titleTelugu: 'తెలంగాణ చరిత్ర, కాకతీయులు, కుతుబ్ షాహీలు & సంస్కృతి',
    subject: 'Telangana State Specific',
    phase: 'phase3',
    examScope: ['tspsc'],
    isStateExclusive: true,
    estMinutes: 45,
    description: 'Kakatiya hydraulic system (Chain of Tanks), Ramappa Temple (UNESCO), Qutb Shahi syncretic culture, Asaf Jahi modernization and Telangana folk traditions (Bathukamma, Bonalu).',
    keyConcepts: ['Ramappa & Warangal Fort architecture', 'Golkonda Diamond trade & Deccani Urdu', 'Komaram Bheem & Jal Jangal Jameen', 'Folk arts (Chindu Bhagavatham, Oggu Katha)'],
    weightage: 'Very High'
  },
  {
    id: 'tspsc-economy-socio-economic-outlook',
    title: 'Telangana Socio-Economic Outlook, Irrigation & Industrial Growth',
    titleTelugu: 'తెలంగాణ సామాజిక-ఆర్థిక ధోరణులు, నీటిపారుదల & పారిశ్రామిక విధానం',
    subject: 'Telangana State Specific',
    phase: 'phase3',
    examScope: ['tspsc'],
    isStateExclusive: true,
    estMinutes: 40,
    description: 'Per capita income trends, Service sector & IT/Life Sciences hub (Genome Valley), Kaleshwaram & Palamuru-Ranga Reddy projects, TS-iPASS, and flagship welfare schemes.',
    keyConcepts: ['State Per Capita Income vs National Average', 'Genome Valley & Pharma City leadership', 'Godavari & Krishna Lift Irrigation schemes', 'Rythu Bharosa & Six Guarantees framework'],
    weightage: 'High'
  }
];
