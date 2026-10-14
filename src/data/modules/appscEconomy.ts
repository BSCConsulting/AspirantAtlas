import { TopicContent } from '../../types';

export const appscEconomyContent: TopicContent = {
  nodeId: 'appsc-economy-welfare-schemes',
  title: 'AP Socio-Economic Survey, Coastal Economy & Welfare Policies',
  titleTelugu: 'ఆంధ్రప్రదేశ్ సామాజిక-ఆర్థిక సర్వే & సంక్షేమ పథకాలు',
  subject: 'AP State Specific (Paper-V Group 1 & Paper-II Group 2)',
  overview: 'In-depth analysis of Andhra Pradesh economy: Gross State Domestic Product (GSDP) drivers, agricultural and aquaculture dominance, ports & coastal industrial corridors (VCIC, CBIC), Direct Benefit Transfer (DBT) welfare models, and Polavaram irrigation architecture.',
  standardReferences: [
    {
      title: 'Socio-Economic Survey of Andhra Pradesh (Latest Edition)',
      source: 'Department of Planning, Government of Andhra Pradesh',
      relevance: 'The single most critical primary document for all APPSC Group 1 & Group 2 economy questions.'
    },
    {
      title: 'Andhra Pradesh State Budget & Macro-Fiscal Overview',
      source: 'Finance Department, Government of Andhra Pradesh',
      relevance: 'Authoritative data on revenue deficit, fiscal deficit, and debt-to-GSDP trajectory.'
    },
    {
      title: 'Visakhapatnam-Chennai Industrial Corridor (VCIC) Development Plan',
      source: 'Asian Development Bank (ADB) / APIIC',
      relevance: 'Blueprint for coastal manufacturing nodes, industrial corridors, and multimodal connectivity.'
    }
  ],
  infographic: {
    title: 'Andhra Pradesh Economic Engine: Coastal Strengths & Corridors',
    subtitle: 'GSDP Growth Pillars, Port Infrastructure & Agricultural Dominance',
    type: 'matrix',
    items: [
      {
        heading: 'Agriculture & Allied Leadership',
        subheading: 'Aquaculture & Horticulture Hub',
        description: 'AP ranks 1st in India in total fish and shrimp production (over 30% of national fish output and ~70% of farmed shrimp exports). Ranks 1st in oil palm, papaya, and chillies.',
        badge: 'Blue Economy No. 1',
        highlight: true
      },
      {
        heading: 'Longest Continental Coastline',
        subheading: '974 km Maritime Gateway',
        description: 'Second longest coastline in India after Gujarat. Major Port: Visakhapatnam Port Authority; Non-Major Ports: Gangavaram, Krishnapatnam, Kakinada, Machilipatnam, Bhavanapadu (Mulapeta).',
        badge: 'Port-Led Growth',
        highlight: true
      },
      {
        heading: 'Industrial Corridors (VCIC & CBIC)',
        subheading: 'ADB & JICA Funded Nodes',
        description: 'VCIC: Visakhapatnam, Chittoor, Machilipatnam, Donakonda nodes. CBIC: Krishnapatnam node. Seamlessly connects ports to industrial hinterlands.',
        badge: 'Manufacturing Hubs',
        highlight: false
      },
      {
        heading: 'Macro-Fiscal Dynamics',
        subheading: 'Debt & Deficit Challenges',
        description: 'High GSDP growth counterbalanced by substantial public debt commitments and revenue deficits following the loss of Hyderabad revenue engine.',
        badge: 'Fiscal Rebalancing',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'Sectoral Composition of AP GSDP',
        points: [
          'Agriculture & Allied Sector: Represents a significantly higher share of GSDP (~35-38%) compared to the national average (~18%), driven primarily by the booming fisheries, aquaculture, livestock, and horticulture sub-sectors.',
          'Industries Sector: Contributes ~22-25% to GSDP, with strength in pharmaceuticals (Jawaharlal Nehru Pharma City in Parawada), automobile manufacturing (Sri City), and agro-processing.',
          'Services Sector: Contributes ~38-42% to GSDP, led by trade, logistics, maritime transport, banking, and public administration.'
        ]
      },
      {
        title: 'Welfare Architecture & Navaratnalu / Direct Benefit Transfers',
        points: [
          'Direct Benefit Transfer (DBT): Universal coverage of welfare schemes deposited directly into beneficiary bank accounts without intermediary leakage.',
          'Farmer Welfare: Rythu Bharosa / input assistance schemes, free crop insurance (YSR Uchitha Vyavasaya Bima), and Rythu Bharosa Kendras (RBKs) for seed-to-sale farmer support.',
          'Human Capital: Amma Vodi / Vidya Deevena (fee reimbursement) and Vasathi Deevena (hostel/boarding support) targeting gross enrolment ratio (GER) in higher education.',
          'Healthcare: Dr. YSR Aarogyasri providing cashless tertiary medical treatment to low-income families.'
        ]
      },
      {
        title: 'Polavaram National Project (Indira Sagar)',
        points: [
          'Multi-purpose irrigation project on the Godavari river near Ramayyapeta in Eluru/East Godavari border.',
          'Envisages irrigating 7.2 lakh acres, generating 960 MW hydro power, supplying 23.4 TMC drinking water to Visakhapatnam city and industrial corridor, and diverting 80 TMC to the Krishna basin.',
          'Statutory National Project under Section 90 of the AP Reorganisation Act 2014, with central funding for the irrigation component.'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'AP Reorg Act 2014, Sec 90',
        label: 'Polavaram National Project',
        detail: 'Statutory declaration of Polavaram as a National Project; Central Government is guarantor for execution and financing.'
      },
      {
        code: 'AP Maritime Board Act 2016',
        label: 'Port & Maritime Governance',
        detail: 'Established AP Maritime Board to develop, manage, and regulate non-major ports and coastal shipping.'
      },
      {
        code: 'AP FRBM Act 2005',
        label: 'Fiscal Discipline Target',
        detail: 'Mandates containment of fiscal deficit within 3% of GSDP and steady reduction of debt-to-GSDP ratio.'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Sri City SEZ Model (Tada, Tirupati District)',
        significance: 'Exemplary multi-product Special Economic Zone and Domestic Tariff Area attracting global manufacturers (Isuzu, Alstom, Mondelez, Foxconn) capitalizing on proximity to Chennai ports.'
      },
      {
        title: 'Panchayat Secretaries & Village/Ward Secretariat System',
        significance: 'Grassroots administrative decentralization delivering 500+ government citizen services within 72 hours through Village/Ward Secretariats and volunteers.'
      }
    ],
    examPitfalls: [
      'Andhra Pradesh’s coastline is 974 km, making it the SECOND longest in mainland India, not the first (Gujarat is first with 1600 km).',
      'Do not confuse Visakhapatnam Port Authority (a Major Port governed by the Major Port Authorities Act, 2021 under Central Govt) with Gangavaram or Krishnapatnam (Non-Major Ports under AP Maritime Board).',
      'The primary driver of AP’s agricultural outperformance is NOT food grains like paddy/wheat, but the Allied Sectors: Aquaculture, Fisheries, and Horticulture.',
      'The Krishna-Godavari Basin (KG Basin) is renowned for deepwater natural gas reserves (Reliance D6 block, ONGC), not onshore coal mining.'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by APPSC Group-1 Deputy Collectors & RDOs',
    readingTime: '10 min core revision',
    keyTakeaways: [
      'In APPSC Mains economics answers, always cite the latest GSDP growth rates, per capita income figures, and inflation indices directly from the Planning Department Survey.',
      'Highlight the strategic shift from raw agricultural commodity trading to value-added agro-food processing and cold-chain logistics.',
      'Analyze the economic consequences of bifurcation: residual AP inherited 58.32% of population and liabilities but lost Hyderabad’s high-yield corporate and commercial tax base.'
    ],
    corePointers: [
      {
        title: 'Visakhapatnam-Chennai Industrial Corridor (VCIC) Nodes',
        notes: [
          'Part of India’s East Coast Economic Corridor (ECEC), supported by Asian Development Bank (ADB).',
          'Four Priority Nodes: 1) Visakhapatnam Node; 2) Machilipatnam Node; 3) Donakonda Node; 4) Chittoor Node (Srikalahasti-Yerpedu cluster).',
          'Focus Sectors: Pharmaceuticals, textiles, automobiles, metallurgy, and petrochemicals.'
        ]
      },
      {
        title: 'Aquaculture in Andhra Pradesh: Economic Powerhouse',
        notes: [
          'Known as the "Shrimp Capital of India", concentrated in West Godavari, Krishna, and Bapatla districts.',
          'Litopenaeus vannamei (Pacific White Shrimp) accounts for the overwhelming majority of frozen shrimp exports to USA, China, and EU.',
          'Challenges: Anti-dumping duties in USA, stringent antibiotic residue norms, and volatility in global shrimp feed prices.'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'ap-socio-economic-survey-2024',
      title: 'Socio-Economic Survey of Andhra Pradesh (2023-24)',
      issuingAuthority: 'Department of Planning, Government of Andhra Pradesh',
      gazetteNoOrYear: 'Annual Report 2024',
      downloadUrl: '/documents/ap-socio-economic-survey-2024.pdf',
      r2StorageKey: 'gazettes/ap-socio-economic-survey-2024.pdf',
      fileSize: '3.1 MB',
      isPrimaryLaw: false
    }
  ],
  microQuiz: [
    {
      id: 'ape-q1',
      question: 'Which sub-sector within Agriculture & Allied activities contributes the largest export earnings for Andhra Pradesh?',
      questionTelugu: 'వ్యవసాయం మరియు అనుబంధ రంగాలలో ఆంధ్రప్రదేశ్‌కు అత్యధిక ఎగుమతి ఆదాయాన్ని అందించే ఉపరంగం ఏది?',
      options: ['Floriculture', 'Aquaculture & Marine Products', 'Cotton Cultivation', 'Sericulture'],
      correctIndex: 1,
      explanation: 'Aquaculture (especially Vannamei shrimp) is the largest export earner for Andhra Pradesh, with the state accounting for nearly 70% of India’s cultured shrimp exports.',
      tag: 'AP Economy'
    },
    {
      id: 'ape-q2',
      question: 'Under Section 90 of the Andhra Pradesh Reorganisation Act, 2014, which irrigation project was statutorily declared as a National Project?',
      questionTelugu: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం, 2014 లోని 90వ సెక్షన్ ప్రకారం ఏ ప్రాజెక్టును జాతీయ ప్రాజెక్టుగా ప్రకటించారు?',
      options: [
        'Veligonda Project',
        'Polavaram Irrigation Project (Indira Sagar)',
        'Gundlakamma Reservoir',
        'Vamsadhara Phase-II'
      ],
      correctIndex: 1,
      explanation: 'Section 90 declared the Polavaram Irrigation Project to be a National Project, with the Central Government undertaking to finance and execute the project.',
      tag: 'Bifurcation Act'
    },
    {
      id: 'ape-q3',
      question: 'The Visakhapatnam-Chennai Industrial Corridor (VCIC) is financially supported primarily by which multilateral financial institution?',
      questionTelugu: 'విశాఖపట్నం-చెన్నై పారిశ్రామిక కారిడార్ (VCIC) కు ఏ బహుళపక్ష ఆర్థిక సంస్థ ప్రధానంగా ఆర్థిక సహాయం అందిస్తుంది?',
      options: ['World Bank', 'Asian Development Bank (ADB)', 'New Development Bank (NDB)', 'International Monetary Fund (IMF)'],
      correctIndex: 1,
      explanation: 'The Asian Development Bank (ADB) is the lead development and financing partner for the VCIC under the East Coast Economic Corridor (ECEC) program.',
      tag: 'Industrial Development'
    },
    {
      id: 'ape-q4',
      question: 'What is the total length of the continental coastline of Andhra Pradesh along the Bay of Bengal?',
      questionTelugu: 'బంగాళాఖాతం వెంబడి ఆంధ్రప్రదేశ్ రాష్ట్ర తీరరేఖ మొత్తం పొడవు ఎంత?',
      options: ['850 km', '974 km', '1,050 km', '1,200 km'],
      correctIndex: 1,
      explanation: 'Andhra Pradesh has a coastline of 974 km, making it the second longest in mainland India after Gujarat.',
      tag: 'State Geography & Economy'
    },
    {
      id: 'ape-q5',
      question: 'The famous "Sri City" integrated business city and multi-product SEZ is located in which district of Andhra Pradesh?',
      questionTelugu: 'ప్రసిద్ధ "శ్రీ సిటీ" మల్టీ-ప్రొడక్ట్ సెజ్ ఆంధ్రప్రదేశ్‌లోని ఏ జిల్లాలో ఉంది?',
      options: ['Visakhapatnam', 'Tirupati (erstwhile Chittoor)', 'Krishna', 'Kurnool'],
      correctIndex: 1,
      explanation: 'Sri City is located at Tada/Satyavedu in Tirupati district (erstwhile Chittoor), right on the border with Tamil Nadu close to Chennai ports.',
      tag: 'Industrial Hubs'
    }
  ],
  mainsScaffold: {
    question: 'Evaluate the role of the coastal economy and port-led industrialization in shaping Andhra Pradesh’s long-term economic development. What structural bottlenecks must the state overcome? (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Highlight Andhra Pradesh’s 974 km coastline as its greatest natural economic asset, enabling it to emerge as India’s maritime gateway to Southeast and East Asia.',
      body: [
        {
          subheading: '1. Pillars of Coastal & Port-Led Industrialization',
          points: [
            'Port Clusters: Visakhapatnam Port, Gangavaram, Krishnapatnam, Kakinada, and upcoming greenfield ports at Machilipatnam, Mulapeta, and Ramayapatnam provide immense cargo-handling capacity.',
            'Hinterland Connectivity: East Coast Economic Corridor (VCIC) integrates port logistics with inland industrial clusters (Parawada Pharma City, Atchutapuram, Sri City).',
            'Blue Economy Supremacy: Global leadership in marine aquaculture exports and coastal tourism.'
          ]
        },
        {
          subheading: '2. Structural Bottlenecks & Challenges',
          points: [
            'Last-Mile Evacuation & Multimodal Freight: Congestion on railway links and lack of dedicated freight corridors connecting non-major ports to interior states (Telangana, Karnataka, Chhattisgarh).',
            'Ecological Vulnerability: Frequent tropical cyclones, coastal erosion in Visakhapatnam and Konaseema, and threat of storm surges.',
            'Capital Shortages & Fiscal Constraints: High state debt-to-GSDP ratios limit state equity participation in mega infrastructure projects.'
          ]
        },
        {
          subheading: '3. Strategic Policy Recommendations',
          points: [
            'Operationalize the AP Maritime Board to formulate unified port tariffs and logistics policies.',
            'Promote port-proximate value addition: Establish coastal petroleum, chemical, and petrochemical investment regions (PCPIR) and mega food parks.',
            'Invest in climate-resilient coastal infrastructure, mangrove afforestation, and cold-chain logistics for marine catch.'
          ]
        }
      ],
      conclusion: 'Conclude that port-led industrialization is Andhra Pradesh’s definitive path toward achieving a trillion-dollar GSDP, transforming the state into the premier logistics and manufacturing hub of peninsular India.'
    }
  }
};
