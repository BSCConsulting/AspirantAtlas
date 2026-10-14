import { TopicContent } from '../../types';

export const tspscEconomyContent: TopicContent = {
  nodeId: 'tspsc-economy-socio-economic-outlook',
  title: 'Telangana Socio-Economic Outlook, Irrigation & Industrial Growth',
  titleTelugu: 'తెలంగాణ సామాజిక-ఆర్థిక ధోరణులు, నీటిపారుదల & పారిశ్రామిక విధానం',
  subject: 'Telangana State Specific (Paper-V Group 1 & Paper-III Group 2)',
  overview: 'The economic transformation of Telangana: High per capita income growth, services and IT/Life Sciences hub (Genome Valley, Pharma City), industrial ease of doing business under TS-iPASS, multi-stage lift irrigation engineering (Kaleshwaram KLIP, Palamuru-Ranga Reddy), and the Six Guarantees welfare architecture.',
  standardReferences: [
    {
      title: 'Telangana Socio-Economic Outlook (Latest Annual Edition)',
      source: 'Directorate of Economics and Statistics, Government of Telangana',
      relevance: 'Primary authoritative government statistical document for all TSPSC Group-1 and Group-2 economy papers.'
    },
    {
      title: 'Telangana State Industrial Project Approval and Self-Certification System (TS-iPASS) Act, 2014',
      source: 'Industries & Commerce Department, Government of Telangana',
      relevance: 'Statutory basis for single-window clearances, penal provisions, and ease of doing business.'
    },
    {
      title: 'Report of the Comptroller and Auditor General (CAG) on State Finances: Telangana',
      source: 'Comptroller and Auditor General of India (CAG)',
      relevance: 'Detailed audit scrutiny of state debt, off-budget borrowings (SPVs), and lift irrigation expenditures.'
    }
  ],
  infographic: {
    title: 'Telangana Economic Growth Model: High-Yield Drivers',
    subtitle: 'Services Dominance, Industrial Innovation & Irrigation Investments',
    type: 'matrix',
    items: [
      {
        heading: 'Per Capita Income Outperformance',
        subheading: 'Consistently 1.8x National Average',
        description: 'Telangana ranks among the top major states in Per Capita Income (PCI), driven by the high productivity of the Hyderabad metropolitan cluster and service exports.',
        badge: 'PCI Leader',
        highlight: true
      },
      {
        heading: 'Life Sciences & Genome Valley',
        subheading: '1/3rd of Global Vaccines',
        description: 'Genome Valley hosts Bharat Biotech, Biological E, Dr. Reddy’s, Novartis. Produces one-third of global vaccines; expanding into Medical Devices Park at Sultanpur.',
        badge: 'Global Vaccine Capital',
        highlight: true
      },
      {
        heading: 'Industrial Policy: TS-iPASS',
        subheading: 'Statutory Right to Clearances',
        description: 'Single-window system with deemed approvals within 15–30 days. Penal provision against defaulting bureaucrats (₹1,000 per day delay). Attracted thousands of industrial units.',
        badge: 'Single Window Ease',
        highlight: false
      },
      {
        heading: 'Mega Lift Irrigation Engineering',
        subheading: 'Kaleshwaram & Palamuru Projects',
        description: 'Multi-stage lifting of Godavari and Krishna waters to the upper Deccan plateau (Medigadda, Sundilla, Annaram barrages), transforming dry uplands into irrigated paddies.',
        badge: 'Hydraulic Transformation',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'Sectoral Dynamics of Telangana GSDP',
        points: [
          'Services Sector: The undisputed engine of the state economy, contributing ~62-65% to Gross State Value Added (GSVA). Dominated by Software/IT exports (>₹2.4 lakh crore), financial services, and real estate.',
          'Industries Sector: Contributes ~18-20% to GSVA, anchored by biotechnology, pharmaceuticals, bulk drugs, aerospace, defense (Adani-Elbit, Tata Boeing Aerospace), and textiles (Kakatiya Mega Textile Park).',
          'Agriculture & Allied Sector: Contributes ~18-20% to GSVA. Tremendous surge in paddy production, making Telangana the second-largest contributor of paddy to the Central Pool (FCI).'
        ]
      },
      {
        title: 'Key Industrial & Innovation Ecosystems',
        points: [
          'T-Hub: India’s largest startup technology incubator, fostering deep-tech and entrepreneurial ventures.',
          'WE-Hub: India’s first state-led incubator dedicated exclusively to women entrepreneurs.',
          'T-Works: India’s largest prototyping center for hardware and product innovation.',
          'TS-iPASS: Single-window clearance act granting statutory deemed approvals based on self-certification within 15 days for mega projects.'
        ]
      },
      {
        title: 'Welfare Framework & DBT Schemes',
        points: [
          'Rythu Bharosa / Rythu Bandhu: Direct investment support per acre per season deposited directly into landholder bank accounts.',
          'Six Guarantees Framework: Mahalakshmi (free RTC bus travel for women, ₹500 LPG cylinder, ₹2500 financial assistance), Rythu Bharosa, Gruha Jyothi (200 units free electricity), Indiramma Indlu (housing assistance), Yuva Vikasam, and Cheyutha (pension).',
          'Mission Bhagiratha: Grid network of piped drinking water supplying treated surface water from Krishna and Godavari to every rural household.'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'TS-iPASS Act, 2014',
        label: 'Industrial Project Approval Act',
        detail: 'Statutory framework providing single-window clearances, self-certification, and penalty on officials for unauthorized delays.'
      },
      {
        code: 'FRBM Act (Telangana)',
        label: 'Fiscal Responsibility Targets',
        detail: 'Statutory ceiling on fiscal deficit (3% of GSDP) and limits on sovereign debt guarantees.'
      },
      {
        code: 'Article 371-D',
        label: 'Presidential Order 2018 (New Zonal System)',
        detail: 'Created 7 Zones and 2 Multi-Zones in Telangana, reserving 95% of direct recruitment in local cadres for local youth.'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Creation of 33 Districts Reorganisation (2016)',
        significance: 'Administrative decentralization carving 33 compact districts from 10 erstwhile districts to bring collectors and administrative machinery closer to the grassroots.'
      },
      {
        title: 'National Commission on Godavari Lift Irrigation (2024)',
        significance: 'National Dam Safety Authority (NDSA) inquiry into sinking of Medigadda Barrage piers, highlighting critical safety protocols in mega civil infrastructure.'
      }
    ],
    examPitfalls: [
      'Services sector is the LARGEST contributor to Telangana’s GSDP (>60%), unlike states where agriculture or manufacturing dominate.',
      'Genome Valley is located in Shamirpet (Medchal-Malkajgiri district), not HITEC City or Madhapur.',
      'Off-budget borrowings (loans taken by Special Purpose Vehicles like Kaleshwaram Irrigation Project Corporation Ltd - KIPCL) are guaranteed by the state budget and scrutinized by CAG under Article 293.',
      'The New Zonal System notified under Article 371-D Presidential Order (2018) provides 95% reservation for locals in government jobs up to the post of Revenue Divisional Officer (RDO).'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by TSPSC Group-1 Rankers & Planning Dept Experts',
    readingTime: '11 min core revision',
    keyTakeaways: [
      'In TSPSC Mains economics answers, compare Telangana’s economic indicators with All-India averages: GSDP growth rate, per capita income, and female labour force participation.',
      'Emphasize the geographical dichotomy: Hyderabad metropolitan region drives fiscal revenues, while the rural hinterland depends heavily on lift-irrigation and DBT welfare transfers.',
      'Always address fiscal sustainability: Balance capital asset creation against escalating debt servicing liabilities and off-budget liabilities.'
    ],
    corePointers: [
      {
        title: 'Kaleshwaram Lift Irrigation Project (KLIP) Engineering Matrix',
        notes: [
          'Harnesses Godavari water at Medigadda (below the confluence of Pranahita and Godavari) where ~280 TMC flows during monsoon.',
          'Consists of 3 Barrages: Medigadda (Laxmi), Annaram (Saraswati), and Sundilla (Parvati).',
          'Reverse pumping mechanism lifts water over 500 meters in altitude across 7 links and 28 packages to Mid-Manair, Lower Manair, and Kondapochamma Sagar reservoirs.',
          'World’s largest underground pumping station at Laxmipur (Gayatri pump house) with 7 pumps of 139 MW each.'
        ]
      },
      {
        title: 'Genome Valley: The Global Life Sciences Epitome',
        notes: [
          'India’s first organized Life Sciences and Biotechnology cluster spread over 600 sq km.',
          'Hosts over 200 companies with 15,000+ scientific workforce, including marquee names like Bharat Biotech (Covaxin), Biological E (Corbevax), Indian Immunologicals, Sanofi, and Ferring.',
          'Accounts for nearly 30% of global polio vaccines and 1/3rd of all childhood vaccine formulations distributed worldwide.'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'telangana-socio-economic-outlook-2024',
      title: 'Telangana Socio-Economic Outlook (2024)',
      issuingAuthority: 'Directorate of Economics and Statistics, Government of Telangana',
      gazetteNoOrYear: 'Annual Economic Survey 2024',
      downloadUrl: '/documents/telangana-socio-economic-outlook-2024.pdf',
      r2StorageKey: 'gazettes/telangana-socio-economic-outlook-2024.pdf',
      fileSize: '3.4 MB',
      isPrimaryLaw: false
    }
  ],
  microQuiz: [
    {
      id: 'tse-q1',
      question: 'Which sector contributes the largest percentage (>60%) to the Gross State Domestic Product (GSDP) of Telangana?',
      questionTelugu: 'తెలంగాణ స్థూల రాష్ట్ర దేశీయోత్పత్తి (GSDP) లో అత్యధిక శాతం (>60%) వాటాను ఏ రంగం అందిస్తుంది?',
      options: ['Agriculture & Allied Sector', 'Industrial & Manufacturing Sector', 'Services Sector', 'Mining & Quarrying Sector'],
      correctIndex: 2,
      explanation: 'The Services sector (anchored by IT, software exports, finance, and real estate in the Hyderabad region) contributes over 60-64% of Telangana’s GSDP.',
      tag: 'State Economy'
    },
    {
      id: 'tse-q2',
      question: 'Under the TS-iPASS Act of 2014, what is the statutory time limit within which clearances must be granted for mega industrial projects?',
      questionTelugu: 'TS-iPASS చట్టం, 2014 ప్రకారం మెగా పారిశ్రామిక ప్రాజెక్టులకు అనుమతులు మంజూరు చేయాల్సిన చట్టబద్ధమైన గడువు ఎంత?',
      options: ['7 days', '15 days', '30 days', '60 days'],
      correctIndex: 1,
      explanation: 'Under TS-iPASS, mega industrial projects (investments above ₹200 crore) are entitled to receive all statutory clearances within 15 days based on self-certification.',
      tag: 'Industrial Policy'
    },
    {
      id: 'tse-q3',
      question: 'The renowned biotechnology cluster "Genome Valley", which manufactures one-third of the world’s vaccine supplies, is located in which district?',
      questionTelugu: 'ప్రపంచంలోని మూడో వంతు వ్యాక్సిన్లను తయారుచేసే ప్రసిద్ధ బయోటెక్నాలజీ క్లస్టర్ "జీనోమ్ వ్యాలీ" ఏ జిల్లాలో ఉంది?',
      options: ['Hyderabad', 'Medchal-Malkajgiri (Shamirpet)', 'Rangareddy', 'Sangareddy'],
      correctIndex: 1,
      explanation: 'Genome Valley is situated at Shamirpet in the Medchal-Malkajgiri district on the outskirts of Hyderabad.',
      tag: 'Life Sciences'
    },
    {
      id: 'tse-q4',
      question: 'Under the revised Presidential Order of 2018 (New Zonal System under Article 371-D), what percentage of direct recruitment jobs in local cadres is reserved for local candidates in Telangana?',
      questionTelugu: '2018 నాటి నూతన జోనల్ వ్యవస్థ (రాజ్యాంగంలోని ఆర్టికల్ 371-D) ప్రకారం స్థానిక కేడర్ ఉద్యోగాల ప్రత్యక్ష నియామకాలలో స్థానికులకు ఎంత శాతం రిజర్వేషన్ కల్పించారు?',
      options: ['75%', '85%', '90%', '95%'],
      correctIndex: 3,
      explanation: 'The 2018 Presidential Order created a 7-zone system that reserves 95% of direct recruitment in local cadres for local candidates of Telangana.',
      tag: 'Zonal System'
    },
    {
      id: 'tse-q5',
      question: 'At which point does the Kaleshwaram Lift Irrigation Project (KLIP) lift Godavari floodwaters downstream of the confluence of the Pranahita and Godavari rivers?',
      questionTelugu: 'కాళేశ్వరం ఎత్తిపోతల పథకం (KLIP) ప్రాణహిత మరియు గోదావరి నదుల సంగమం వద్ద ఏ బ్యారేజీ నుండి నీటిని ఎత్తిపోస్తుంది?',
      options: ['Medigadda (Laxmi Barrage)', 'Sundilla (Parvati Barrage)', 'Annaram (Saraswati Barrage)', 'Mid-Manair Dam'],
      correctIndex: 0,
      explanation: 'Medigadda (Laxmi Barrage) is the starting point of KLIP where Godavari waters are intercepted below the confluence with Pranahita.',
      tag: 'Irrigation Projects'
    }
  ],
  mainsScaffold: {
    question: 'Examine the structural strengths and fiscal challenges of Telangana’s economic model. In what ways can the state diversify its revenue base beyond the Hyderabad metropolitan agglomeration? (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Introduce Telangana as one of India’s fastest-growing states since its 2014 creation, driven by high per capita income, robust IT/Life Sciences clusters, and proactive industrial policies like TS-iPASS.',
      body: [
        {
          subheading: '1. Core Structural Strengths of the Telangana Economy',
          points: [
            'Global Tech & Life Sciences Hub: Hyderabad accounts for over ₹2.4 lakh crore in software exports and manufactures 1/3rd of the world’s vaccines in Genome Valley.',
            'Agricultural Transformation: Massive lift irrigation projects (KLIP) and investment support (Rythu Bandhu/Bharosa) turned the state into a premier national paddy producer.',
            'Business Ease: TS-iPASS eliminates bureaucratic friction with deemed approvals and legal penalties for official delays.'
          ]
        },
        {
          subheading: '2. Fiscal Challenges and Regional Asymmetries',
          points: [
            'Heavy Geographical Concentration: Hyderabad, Medchal-Malkajgiri, and Rangareddy contribute over 50% of the state’s GSDP, creating an uneven development gradient with interior rural districts.',
            'Escalating Debt Servicing: Rapid capital expenditure on mega lift irrigation projects financed through Special Purpose Vehicles (off-budget borrowings) has placed severe debt-servicing burdens on the state exchequer.',
            'High Revenue Expenditure: Expansive universal welfare schemes (Six Guarantees, loan waivers) compress capital expenditure in rural health, higher education, and rural industrialization.'
          ]
        },
        {
          subheading: '3. Strategic Pathways for Balanced Diversification',
          points: [
            'Regional Industrial Decongestion: Accelerate secondary tier-2 growth hubs: Warangal (Kakatiya Mega Textile Park), Karimnagar, Nizamabad, and Khammam.',
            'Agro-Processing & Food Parks: Establish cold chains and food processing clusters to add value to surplus paddy, cotton, and chilli production rather than selling raw commodities.',
            'Clean Energy & Logistics: Capitalize on central dry port locations along North-South transport corridors to develop renewable energy parks and multimodal logistics hubs.'
          ]
        }
      ],
      conclusion: 'Conclude that bridging the urban-rural economic divide while ensuring fiscal prudence under FRBM benchmarks will be crucial to sustain Telangana’s economic trajectory over the coming decades.'
    }
  }
};
