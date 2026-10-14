import { TopicContent } from '../../types';

export const environmentBiodiversityContent: TopicContent = {
  nodeId: 'environment-biodiversity-conventions',
  title: 'Environment, Biodiversity & Climate Treaties',
  titleTelugu: 'పర్యావరణం, జీవవైవిధ్యం & అంతర్జాతీయ ఒప్పందాలు',
  subject: 'Environment & Ecology (UPSC GS-3, APPSC Paper-III, TSPSC Paper-V)',
  overview: 'Crucial environmental jurisprudence, statutory governance (Wildlife Protection Amendment Act 2022, Forest Conservation Amendment Act 2023), global treaties (UNFCCC, COP summits, CBD Kunming-Montreal Global Biodiversity Framework), and India’s Panchamrit decarbonization commitments.',
  standardReferences: [
    {
      title: 'Wildlife (Protection) Amendment Act, 2022 (Act No. 18 of 2022)',
      source: 'Ministry of Environment, Forest and Climate Change (MoEFCC)',
      relevance: 'Primary statute governing animal protection, CITES implementation, and schedule restructuring.'
    },
    {
      title: 'State of India’s Environment Report',
      source: 'Centre for Science and Environment (CSE)',
      relevance: 'Authoritative data on emissions, air quality, wetland degradation, and forest cover.'
    },
    {
      title: 'UNFCCC Nationally Determined Contributions (NDC) Synthesis',
      source: 'United Nations Climate Change Secretariat',
      relevance: 'Benchmarks India’s updated NDCs (45% emissions intensity reduction, 50% non-fossil power by 2030).'
    }
  ],
  infographic: {
    title: 'WPA 2022 Restructuring & India Climate Commitments',
    subtitle: 'Wildlife Protection Schedules & The Panchamrit Climate Roadmap',
    type: 'matrix',
    items: [
      {
        heading: 'Schedule I (WPA 2022)',
        subheading: 'Highest Protection Animals',
        description: 'Covers endangered mammals, birds, reptiles with maximum statutory penalties. (Consolidates former Sch I & II; e.g. Tiger, Lion, Great Indian Bustard, Gangetic Dolphin).',
        badge: 'Absolute Protection',
        highlight: true
      },
      {
        heading: 'Schedule II (WPA 2022)',
        subheading: 'Lesser Threat Animal Species',
        description: 'Species with lesser degree of threat. Hunting strictly banned, penalties lower than Schedule I. Consolidates former Schedule III and IV animals.',
        badge: 'Regulated Offenses',
        highlight: false
      },
      {
        heading: 'Schedule III & IV (WPA 2022)',
        subheading: 'Protected Plants & CITES Flora/Fauna',
        description: 'Schedule III: Protected indigenous plant species. Schedule IV: Species listed in the Appendices of CITES (Convention on International Trade in Endangered Species). Eliminates Vermin schedule.',
        badge: 'CITES Alignment',
        highlight: true
      },
      {
        heading: 'Panchamrit 2070 Roadmap',
        subheading: 'Glasgow COP26 Targets',
        description: '1) 500 GW non-fossil capacity by 2030; 2) 50% energy from renewables; 3) 1 Billion tonne carbon emission reduction; 4) 45% carbon intensity reduction by 2030; 5) Net-Zero by 2070.',
        badge: 'Net-Zero 2070',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'Key International Conventions & Multilateral Accords',
        points: [
          'UNFCCC: Framework convention adopted at 1992 Rio Earth Summit. Kyoto Protocol (1997 - Annex I targets), Paris Agreement (2015 - legally binding treaty to limit global warming below 2°C, preferably 1.5°C above pre-industrial levels).',
          'Kunming-Montreal Global Biodiversity Framework (COP15 CBD 2022): "30x30 Target" to conserve 30% of terrestrial, inland water, and marine areas by 2030; halving food waste; reducing pesticide risk by 50%.',
          'Ramsar Convention (1971): Intergovernmental treaty for wetland conservation. Montreux Record: register of wetland sites where ecological character has changed or is likely to change. (Indian sites in Montreux Record: Keoladeo National Park, Rajasthan and Loktak Lake, Manipur; Chilika was removed).',
          'CITES (Washington Convention 1973): Regulates international trade in endangered species across 3 Appendices (Appendix I bans commercial trade, Appendix II controls trade, Appendix III requested by party).'
        ]
      },
      {
        title: 'Major Environmental Statutes in India',
        points: [
          'Environment (Protection) Act, 1986: Umbrella legislation enacted under Article 253 following Bhopal Gas Tragedy. Empowers Central Government to establish authorities, set emission norms, and regulate hazardous substances.',
          'Biological Diversity Act, 2002: Three-tier structure: National Biodiversity Authority (NBA - Chennai), State Biodiversity Boards (SBBs), and Biodiversity Management Committees (BMCs) at Panchayat/Municipal level managing People’s Biodiversity Registers (PBR).',
          'Forest Conservation (Amendment) Act 2023: Exempts forest land situated within 100 km of international borders for strategic linear projects of national security.'
        ]
      },
      {
        title: 'IUCN Categories: High-Yield Species for India',
        points: [
          'Critically Endangered: Great Indian Bustard (GIB), Gharial, Bengal Florican, Jerdon’s Courser, Forest Owlet, Pygmy Hog.',
          'Endangered: Asiatic Lion, Snow Leopard, Red Panda, Lion-tailed Macaque, Nilgiri Tahr, Gangetic River Dolphin.',
          'Vulnerable: One-horned Rhinoceros, Nilgiri Langur, Olive Ridley Turtle, Sloth Bear, Barasingha.'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'Article 48A',
        label: 'Protection of Environment (DPSP)',
        detail: 'Inserted by 42nd Amendment 1976: The State shall endeavor to protect and improve the environment and to safeguard forests and wildlife.'
      },
      {
        code: 'Article 51A(g)',
        label: 'Fundamental Duty to Protect Nature',
        detail: 'Duty of every citizen of India to protect and improve the natural environment including forests, lakes, rivers, and wildlife.'
      },
      {
        code: 'Section 38V, WPA 1972',
        label: 'Tiger Conservation Plan',
        detail: 'Mandates notification of core or critical tiger habitats and peripheral buffer areas under the National Tiger Conservation Authority (NTCA).'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'T.N. Godavarman Thirumulpad v. Union of India (1996)',
        significance: 'Supreme Court gave an expansive dictionary meaning to "forest" irrespective of ownership or classification, bringing all unclassified forests under the Forest Conservation Act 1980.'
      },
      {
        title: 'M.C. Mehta v. Union of India (Oleum Gas Leak 1986)',
        significance: 'Formulated the doctrine of "Absolute Liability" for hazardous enterprises, rejecting Rylands v. Fletcher exceptions.'
      }
    ],
    examPitfalls: [
      'The Wildlife (Protection) Amendment Act, 2022 reduced the total number of schedules from six to four, and completely eliminated the separate "Vermin" schedule (former Schedule V).',
      'The National Green Tribunal (NGT) was established under the NGT Act 2010 for effective and expeditious disposal of cases; it is guided by principles of Natural Justice, not bound by the Civil Procedure Code 1908.',
      'Remember that Chilika Lake in Odisha was once on the Montreux Record, but was successfully restored and removed in 2002; only Keoladeo and Loktak currently remain on it.',
      'Olive Ridley turtles undergo synchronous mass nesting known as "Arribada", primarily on the Gahirmatha and Rushikulya beaches in Odisha.'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by UPSC IFoS & GS-3 Top Scorers',
    readingTime: '11 min core revision',
    keyTakeaways: [
      'For Mains answers, always integrate the "Triple Planetary Crisis": Climate Change, Biodiversity Loss, and Environmental Pollution.',
      'Link national programs (Project Tiger, Project Elephant, Project Cheetah) to their institutional architectures (NTCA, WII, Central Zoo Authority).',
      'Highlight Article 6 of the Paris Agreement regarding bilateral carbon trading (Article 6.2) and the multilateral crediting mechanism (Article 6.4).'
    ],
    corePointers: [
      {
        title: 'Project Tiger & 50 Years of NTCA',
        notes: [
          'Launched in 1973 from Corbett National Park. India is now home to over 75% of the wild tiger population (>3,167 tigers).',
          'Two-tier habitat: Core/Critical Tiger Habitat (notified under Section 38V with statutory inviolate status) and Buffer/Peripheral area for co-existence.',
          'M-STrIPES (Monitoring System for Tigers - Intensive Protection and Ecological Status): Android-based patrolling and spatial monitoring app deployed across reserves.'
        ]
      },
      {
        title: 'Biodiversity Hotspots in India',
        notes: [
          'Criteria (Norman Myers): Must contain at least 1,500 species of vascular plants as endemics (>0.5% of world total) and must have lost at least 70% of its primary native vegetation.',
          '4 Hotspots in India: 1) Himalaya; 2) Indo-Burma (covers Northeast India south of Brahmaputra); 3) Western Ghats & Sri Lanka; 4) Sundaland (includes Nicobar Islands).'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'wildlife-protection-act-1972',
      title: 'The Wildlife (Protection) Amendment Act, 2022 (Act No. 18 of 2022)',
      issuingAuthority: 'Ministry of Law and Justice, Government of India',
      gazetteNoOrYear: 'Act No. 18 of 2022',
      downloadUrl: '/documents/wildlife-protection-amendment-act-2022.pdf',
      r2StorageKey: 'gazettes/wildlife-protection-amendment-act-2022.pdf',
      fileSize: '1.5 MB',
      isPrimaryLaw: true
    }
  ],
  microQuiz: [
    {
      id: 'env-q1',
      question: 'Under the Wildlife (Protection) Amendment Act, 2022, which international treaty’s provisions have been explicitly incorporated via Schedule IV?',
      questionTelugu: 'వన్యప్రాణి (రక్షణ) సవరణ చట్టం, 2022 ప్రకారం షెడ్యూల్ IV ద్వారా ఏ అంతర్జాతీయ ఒప్పంద నిబంధనలను స్పష్టంగా చేర్చారు?',
      options: [
        'Ramsar Convention on Wetlands',
        'CITES (Convention on International Trade in Endangered Species)',
        'Basel Convention on Hazardous Wastes',
        'Bonn Convention on Migratory Species (CMS)'
      ],
      correctIndex: 1,
      explanation: 'The 2022 Amendment inserted Schedule IV specifically to provide domestic legislative backing to specimens listed in the Appendices of CITES.',
      tag: 'Environmental Law'
    },
    {
      id: 'env-q2',
      question: 'Which of the following wetlands of India is currently listed on the "Montreux Record" of the Ramsar Convention?',
      questionTelugu: 'రామ్‌సర్ కన్వెన్షన్‌లోని "మాంట్రెక్స్ రికార్డ్" లో భారతదేశానికి చెందిన ఏ చిత్తడి నేల ప్రస్తుతం జాబితా చేయబడింది?',
      options: ['Chilika Lake', 'Loktak Lake', 'Vembanad Lake', 'Kolleru Lake'],
      correctIndex: 1,
      explanation: 'Currently, Loktak Lake (Manipur) and Keoladeo National Park (Rajasthan) are the two Indian sites on the Montreux Record. Chilika Lake was removed in 2002 after successful ecological restoration.',
      tag: 'Wetlands'
    },
    {
      id: 'env-q3',
      question: 'The historic "30x30 Target" to protect 30% of the planet’s land and oceans by 2030 was adopted under which global framework?',
      questionTelugu: '2030 నాటికి భూమి మరియు సముద్రాలలో 30% భాగాన్ని పరిరక్షించాలనే "30x30 లక్ష్యం" ఏ ప్రపంచ ఒప్పందం ప్రకారం ఆమోదించబడింది?',
      options: [
        'Paris Climate Agreement (COP21)',
        'Kunming-Montreal Global Biodiversity Framework (COP15)',
        'Kyoto Protocol',
        'Stockholm Convention on POPs'
      ],
      correctIndex: 1,
      explanation: 'Target 3 of the Kunming-Montreal Global Biodiversity Framework adopted at COP15 CBD in 2022 mandates protecting 30% of terrestrial and marine ecosystems by 2030.',
      tag: 'International Conventions'
    },
    {
      id: 'env-q4',
      question: 'What is the IUCN Red List conservation status of the Great Indian Bustard (Ardeotis nigriceps)?',
      questionTelugu: 'గ్రేట్ ఇండియన్ బస్టర్డ్ (బట్టమేక పిట్ట) యొక్క IUCN రెడ్ లిస్ట్ పరిరక్షణ స్థితి ఏమిటి?',
      options: ['Vulnerable', 'Endangered', 'Critically Endangered', 'Near Threatened'],
      correctIndex: 2,
      explanation: 'The Great Indian Bustard is categorized as Critically Endangered due to severe habitat loss, collisions with overhead high-voltage power transmission lines, and predator attacks.',
      tag: 'Species in News'
    },
    {
      id: 'env-q5',
      question: 'In which landmark case did the Supreme Court of India adopt an expansive definition of "forest" to include all tracts recorded as forest in government records?',
      questionTelugu: 'ఏ చారిత్రక కేసులో సుప్రీం కోర్టు "అడవి" అనే పదానికి విస్తృత నిర్వచనాన్ని ఇచ్చింది?',
      options: [
        'M.C. Mehta v. Kamal Nath (Public Trust Doctrine)',
        'T.N. Godavarman Thirumulpad v. Union of India (1996)',
        'Vellore Citizens Welfare Forum case',
        'Subhash Kumar v. State of Bihar'
      ],
      correctIndex: 1,
      explanation: 'In the landmark T.N. Godavarman case (1996), the Supreme Court ruled that the Forest Conservation Act applies to all areas recorded as forests in government records, irrespective of ownership.',
      tag: 'Judicial Precedents'
    }
  ],
  mainsScaffold: {
    question: 'The Forest (Conservation) Amendment Act, 2023 balances national security imperatives against ecological sensitivity in border regions. Critically analyze the potential environmental implications of exempting linear strategic projects within 100 km of international borders. (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Introduce the context of the Forest (Conservation) Amendment Act, 2023, which inserted Section 1A exempting forest lands located within a distance of 100 km along international borders or Line of Control from statutory central clearance for constructing strategic linear projects.',
      body: [
        {
          subheading: '1. Strategic & National Security Imperatives',
          points: [
            'Border Infrastructure Parity: India faces acute geopolitical tensions along the LAC with China. Rapid road connectivity, missile silos, and radar stations require quick clearance without prolonged bureaucratic hurdles.',
            'Disaster & Military Logistics: Enables all-weather strategic access to forward outposts in Ladakh, Sikkim, and Arunachal Pradesh.'
          ]
        },
        {
          subheading: '2. Severe Ecological Vulnerabilities and Risks',
          points: [
            'Ecological Fragility of the Himalayas: The 100 km border belt covers almost the entire Indian Himalayan Region, recognized as a global biodiversity hotspot characterized by young, seismically active, and landslide-prone topography.',
            'Fragmenting Wildlife Corridors: Uncontrolled linear projects dissect critical habitats of endangered species like the Snow Leopard, Red Panda, and Musk Deer.',
            'Erosion of Tribal & Forest Rights: Potential circumvention of Gram Sabha consent under the Forest Rights Act (FRA) 2006 for community forest resources.'
          ]
        },
        {
          subheading: '3. Way Forward: Balancing Security and Ecology',
          points: [
            'Mandatory Regional Strategic Environmental Assessments (SEA) rather than project-by-project piecemeal clearances.',
            'Adoption of green engineering: Tunneling, eco-ducts, wildlife underpasses, and slope stabilization techniques.',
            'Continuous oversight by an independent ecological committee alongside the armed forces.'
          ]
        }
      ],
      conclusion: 'Conclude that national security cannot be safeguarded in isolation from ecological security. Long-term defense preparedness must integrate climate resilience and ecosystem preservation.'
    }
  }
};
