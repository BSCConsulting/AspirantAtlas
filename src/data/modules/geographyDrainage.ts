import { TopicContent } from '../../types';

export const geographyDrainageContent: TopicContent = {
  nodeId: 'geography-physiography-drainage',
  title: 'Physiography & River Systems of India',
  titleTelugu: 'భారతదేశ భౌగోళిక స్వరూపం & నదీ వ్యవస్థలు',
  subject: 'Geography (UPSC GS-1, APPSC Paper-I, TSPSC Paper-II)',
  overview: 'Comprehensive physical geography covering Himalayan vs Peninsular drainage systems, antecedent rivers, Indian monsoon mechanisms (Jet Streams, IOD, ENSO), river-interlinking dynamics, and watershed management.',
  standardReferences: [
    {
      title: 'India: Physical Environment (NCERT Class XI)',
      source: 'National Council of Educational Research and Training (NCERT)',
      relevance: 'Foundational benchmark for river courses, drainage patterns, and monsoon onset.'
    },
    {
      title: 'Certificate Physical and Human Geography',
      source: 'G.C. Leong (Oxford University Press)',
      relevance: 'Essential for climatological mechanisms, pressure cells, and tropical cyclones.'
    },
    {
      title: 'Central Water Commission (CWC) Integrated Basin Reports',
      source: 'Ministry of Jal Shakti, Government of India',
      relevance: 'Primary hydrological data on Krishna, Godavari, and inter-basin transfer projects.'
    }
  ],
  infographic: {
    title: 'Himalayan vs Peninsular River Systems: Strategic Comparison',
    subtitle: 'Evolutionary Age, Hydrological Regime & Economic Utility',
    type: 'comparison',
    items: [
      {
        heading: 'Himalayan Drainage (Indus, Ganga, Brahmaputra)',
        subheading: 'Perennial & Geologically Youthful',
        description: 'Fed by both glaciers and rainfall. Antecedent drainage carving deep V-shaped valleys, gorges, and shifting meandering courses across the alluvial plains (e.g., Kosi - Sorrow of Bihar).',
        badge: 'Glacial + Rainfed',
        highlight: true
      },
      {
        heading: 'Peninsular Drainage (Godavari, Krishna, Cauvery)',
        subheading: 'Superimposed & Geologically Mature',
        description: 'Exclusively rain-fed with marked seasonal discharge variations. Flowing through graded, shallow valleys with hard rocky beds. Graded profiles with very little meandering.',
        badge: 'Rainfed (Seasonal)',
        highlight: true
      },
      {
        heading: 'West-Flowing Peninsular Exceptions (Narmada, Tapi)',
        subheading: 'Fault Trough & Estuarine Outlets',
        description: 'Flow through rift valleys between Vindhyas and Satpuras; drain into Arabian Sea forming estuaries rather than extensive deltas due to steep gradient and hard rock terrain.',
        badge: 'Rift Valley Flow',
        highlight: false
      },
      {
        heading: 'Monsoon Dynamics & Teleconnections',
        subheading: 'Somali Jet, TEJ, IOD & El Niño',
        description: 'Driven by differential heating of land and sea, Tibetan Plateau heating, Tropical Easterly Jet (TEJ), positive/negative Indian Ocean Dipole (IOD), and Walker Circulation anomalies.',
        badge: 'Climate Engine',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'Peninsular River Basins: East vs West Flowing',
        points: [
          'East-Flowing (Bay of Bengal): Mahanadi, Godavari (Dakshin Ganga - 1465 km, rises at Trimbakeshwar), Krishna (rises at Mahabaleshwar - 1400 km), Cauvery (rises at Talakaveri - 800 km). Characterized by extensive fertile deltas, gentle gradient, and wide river basins.',
          'West-Flowing (Arabian Sea): Narmada (Amarkantak), Tapi (Betul), Sharavati (Jog Falls), Periyar, Bharathappuzha. Rapid, steep fall, minimal sediment deposition, creating estuaries and ideal sites for hydroelectric generation.'
        ]
      },
      {
        title: 'Mechanism of Indian Summer Monsoon',
        points: [
          'Differential Heating: Rapid heating of the Indian landmass compared to the surrounding Indian Ocean creates intense thermal low-pressure over Northwest India and Pakistan.',
          'Shifting of ITCZ: Northward migration of Inter-Tropical Convergence Zone (ITCZ) over the Ganga plains (Monsoon Trough).',
          'Role of Jet Streams: Withdrawal of the Subtropical Westerly Jet Stream from south of the Himalayas allows the Tropical Easterly Jet (TEJ) to establish over peninsular India, steering low-pressure depressions.',
          'ENSO vs Indian Ocean Dipole (IOD): El Niño typically suppresses monsoon rainfall, whereas a Positive IOD (warmer western Indian Ocean) counters El Niño and brings above-average rainfall to India.'
        ]
      },
      {
        title: 'River Inter-Linking Projects in Deccan',
        points: [
          'Pattiseema Lift Irrigation: India’s first operational river-linking project connecting Godavari surplus water to the Krishna delta (Budameru diversion channel) without building a major reservoir.',
          'Polavaram Project: Statutory National Project envisaging transfer of 80 TMC of Godavari water to Krishna upstream of Prakasam Barrage.',
          'Ken-Betwa Link: First national river inter-linking project under the National Perspective Plan transferring water from Ken in MP to Betwa in UP to irrigate drought-prone Bundelkhand.'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'Article 262',
        label: 'Inter-State River Water Disputes',
        detail: 'Empowers Parliament to enact legislation for adjudication of disputes relating to waters of inter-state rivers and river valleys; excludes jurisdiction of Supreme Court.'
      },
      {
        code: 'ISWD Act 1956',
        label: 'Inter-State River Water Disputes Act',
        detail: 'Provides statutory framework for constituting tribunals (e.g. Krishna Water Disputes Tribunal - KWDT I & II, Godavari Water Disputes Tribunal - GWDT).'
      },
      {
        code: 'Sec 84, AP Reorg Act 2014',
        label: 'River Management Boards',
        detail: 'Constitutes Krishna River Management Board (KRMB) and Godavari River Management Board (GRMB) under Central jurisdiction.'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Bachawat Tribunal Award (KWDT-I, 1976)',
        significance: 'Allocated 2060 TMC of Krishna waters between Maharashtra (560 TMC), Karnataka (700 TMC), and unified Andhra Pradesh (800 TMC) based on 75% dependability.'
      },
      {
        title: 'Brijesh Kumar Tribunal (KWDT-II, 2010/2013)',
        significance: 'Allocated surplus flows at 65% dependability, subject to ongoing legal dispute before the Supreme Court following state bifurcation.'
      }
    ],
    examPitfalls: [
      'Cauvery rises in Kodagu (Brahmagiri hills), not the Western Ghats of Maharashtra. Godavari rises at Trimbakeshwar (Nashik) and Krishna at Mahabaleshwar (Satara).',
      'The Narmada and Tapi do not form deltas because they flow in fault-bounded rift valleys with high velocities and discharge directly into deep tidal waters of the Gulf of Khambhat.',
      'Do not confuse the Southwest Monsoon Arabian Sea branch (which hits the Western Ghats first creating orographic rainfall) with the Bay of Bengal branch (which strikes the Arakan Yoma and deflects westward across the Indo-Gangetic plain).'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by UPSC AIR-22 & State PSC Toppers',
    readingTime: '10 min core revision',
    keyTakeaways: [
      'Always draw a neat sketch map of India showing drainage divides, rift valleys, and monsoon wind vectors in GS-1 answers.',
      'Link geomorphology directly to agricultural vulnerability (e.g. drought in Rayalaseema rain-shadow zone vs floods in Godavari delta).',
      'Understand the structural difference between "Antecedent Drainage" (rivers older than the Himalayas cutting through rising mountains) and "Superimposed Drainage" (rivers flowing over older structures without regard to underlying geology).'
    ],
    corePointers: [
      {
        title: 'Drainage Patterns: Quick Identification Table',
        notes: [
          'Dendritic: Tree branch-like pattern found in granite and plain terrains (e.g., Godavari, Mahanadi, Indo-Gangetic rivers).',
          'Trellis: Tributaries join main stream at near right angles; found in folded structures with alternating hard and soft rocks (e.g., rivers of Chota Nagpur plateau, Singhbhum).',
          'Radial: Rivers originate from a central dome or peak and flow outward in all directions (e.g., Amarkantak plateau giving rise to Narmada, Son, and Johilla).',
          'Centripetal: Streams flow inward into a central depression or lake (e.g., Loktak Lake in Manipur, Sambhar Lake in Rajasthan).'
        ]
      },
      {
        title: 'Western Ghats as Great Orographic Barrier',
        notes: [
          'Continuous escarpment with only few passes (Thal Ghat, Bhor Ghat, Palghat Gap).',
          'Windward western slope receives heavy precipitation (250-400 cm); leeward Deccan plateau falls under severe rain-shadow effect (e.g., Mahabaleshwar receives ~600 cm, whereas Wai just 30 km east receives ~60 cm).',
          'Explains the semi-arid drought vulnerability of Telangana and Rayalaseema requiring mega lift-irrigation investments.'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'national-water-policy-gazette',
      title: 'National Water Policy Framework & River Basin Management Guidelines',
      issuingAuthority: 'Ministry of Jal Shakti / Central Water Commission',
      gazetteNoOrYear: 'Updated Framework 2020-2024',
      downloadUrl: '/documents/national-water-policy-guidelines.pdf',
      r2StorageKey: 'gazettes/national-water-policy-guidelines.pdf',
      fileSize: '1.4 MB',
      isPrimaryLaw: false
    }
  ],
  microQuiz: [
    {
      id: 'geo-q1',
      question: 'Which of the following rivers is an example of an "antecedent drainage" system in the Himalayas?',
      questionTelugu: 'హిమాలయాలలో "పూర్వవర్తి నదీ వ్యవస్థ" (Antecedent drainage) కు ఉదాహరణ ఏది?',
      options: ['Chambal', 'Satluj', 'Damodar', 'Betwa'],
      correctIndex: 1,
      explanation: 'The Satluj, Indus, and Brahmaputra are classic antecedent rivers that existed prior to the uplift of the Himalayas and continued cutting deep gorges as the mountain ranges rose.',
      tag: 'Drainage Systems'
    },
    {
      id: 'geo-q2',
      question: 'The Narmada river flows westward towards the Arabian Sea primarily because:',
      questionTelugu: 'నర్మదా నది అరేబియా సముద్రం వైపు పశ్చిమంగా ప్రవహించడానికి ప్రధాన కారణం:',
      options: [
        'The general slope of the Indian peninsula is from east to west',
        'It flows along a linear rift valley formed due to faulting',
        'The Vindhya range blocks all eastward movement of water',
        'It originates from glacial melt in the Satpura ranges'
      ],
      correctIndex: 1,
      explanation: 'Narmada flows westward because it occupies a tectonic rift valley (graben) between the Vindhyas and Satpura ranges, sloping towards the west.',
      tag: 'Physiography'
    },
    {
      id: 'geo-q3',
      question: 'The "Pattiseema Lift Irrigation Scheme" connects which two major river systems?',
      questionTelugu: '"పట్టిసీమ ఎత్తిపోతల పథకం" ఏ రెండు ప్రధాన నదీ వ్యవస్థలను అనుసంధానిస్తుంది?',
      options: [
        'Krishna and Penna',
        'Godavari and Krishna',
        'Mahanadi and Godavari',
        'Cauvery and Vaigai'
      ],
      correctIndex: 1,
      explanation: 'Pattiseema pumps surplus floodwaters of the Godavari river into the Polavaram Right Main Canal to discharge into the Krishna river upstream of Prakasam Barrage.',
      tag: 'River Inter-Linking'
    },
    {
      id: 'geo-q4',
      question: 'Which climatological phenomenon refers to the irregular warming of surface waters in the eastern tropical Pacific Ocean?',
      questionTelugu: 'తూర్పు ఉష్ణమండల పసిఫిక్ మహాసముద్రంలో ఉపరితల నీరు అసాధారణంగా వేడెక్కడాన్ని ఏ శీతోష్ణస్థితి దృగ్విషయం అంటారు?',
      options: ['La Niña', 'El Niño', 'Positive Indian Ocean Dipole', 'Walker Circulation'],
      correctIndex: 1,
      explanation: 'El Niño involves the anomalous warming of eastern and central equatorial Pacific sea surface temperatures, historically associated with weak or deficit Indian monsoons.',
      tag: 'Climatology'
    },
    {
      id: 'geo-q5',
      question: 'At which place does the Alaknanda river meet the Bhagirathi river to form the holy river Ganga?',
      questionTelugu: 'అలకనంద నది, భగీరథి నదితో కలిసి గంగా నదిగా ఏ ప్రదేశంలో ఏర్పడుతుంది?',
      options: ['Vishnuprayag', 'Rudraprayag', 'Karnaprayag', 'Devprayag'],
      correctIndex: 3,
      explanation: 'At Devprayag in Uttarakhand, the Bhagirathi and Alaknanda rivers converge to officially form the river Ganga.',
      tag: 'Himalayan Rivers'
    }
  ],
  mainsScaffold: {
    question: 'Compare and contrast the Himalayan and Peninsular river systems in India in terms of origin, hydrological regime, and susceptibility to natural hazards. (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Briefly define the two mega drainage regimes of India, highlighting how their differing geomorphological ages (youthful tertiary orogeny vs ancient Gondwana shield) dictate their distinct hydrological behavior.',
      body: [
        {
          subheading: '1. Contrasts in Origin and Physical Characteristics',
          points: [
            'Himalayan Rivers: Originate in snowbound glaciers and high-altitude lakes; possess immense catchment areas; flow through unstable, youthful folded mountains carving deep gorges (Indus, Brahmaputra).',
            'Peninsular Rivers: Originate in relict Western Ghats or central highlands (plateaus); possess well-defined, graded valleys with low gradients and mature profiles.'
          ]
        },
        {
          subheading: '2. Hydrological Regime & Seasonal Behavior',
          points: [
            'Perennial vs Seasonal: Himalayan rivers receive water from both snowmelt (summer) and rainfall (monsoon), ensuring year-round flow. Peninsular rivers are almost entirely rain-fed, showing drastic lean-season drop in volume.',
            'Silt Load: Himalayan rivers carry colossal silt loads due to active erosion of fragile rocks, causing intense sedimentation and frequent avulsion (river course shifts like Kosi). Peninsular beds are rocky with low sediment yield.'
          ]
        },
        {
          subheading: '3. Susceptibility to Natural Hazards',
          points: [
            'Floods: Himalayan basins suffer devastating flash floods, glacial lake outburst floods (GLOFs), and river bank breaches. Peninsular rivers face flash floods only during intense cyclonic cloudbursts in deltas (e.g. Godavari floods in Konaseema).',
            'Drought Vulnerability: Upper reaches of Peninsular rivers face severe dry-season water stress and inter-state disputes (Cauvery, Krishna).'
          ]
        }
      ],
      conclusion: 'Conclude by emphasizing integrated river basin management, catchment afforestation in the Himalayas, and strategic lift irrigation and water harvesting in the Peninsular plateau to ensure national water security.'
    }
  }
};
