import { TopicContent } from '../../types';

export const scitechEmergingContent: TopicContent = {
  nodeId: 'scitech-emerging-technologies',
  title: 'Science & Emerging Technologies (Space, AI & Biotech)',
  titleTelugu: 'శాస్త్ర సాంకేతిక రంగాలు (అంతరిక్షం, AI & బయోటెక్)',
  subject: 'Science & Technology (UPSC GS-3, APPSC Paper-III, TSPSC Paper-V)',
  overview: 'High-yield frontier technologies: ISRO space exploration roadmap (Gaganyaan, Chandrayaan-3, Aditya-L1, SSLV), National Quantum Mission, CRISPR-Cas9 genome editing, India Semiconductor Mission (ISM), Generative AI governance, and Digital Personal Data Protection (DPDP) Act 2023.',
  standardReferences: [
    {
      title: 'Department of Science and Technology (DST) Annual Report',
      source: 'Ministry of Science and Technology, Government of India',
      relevance: 'Primary government progress report on National Quantum Mission and R&D funding.'
    },
    {
      title: 'ISRO Vision & Roadmap 2047: Bharatiya Antariksha Station',
      source: 'Indian Space Research Organisation (ISRO)',
      relevance: 'Authoritative timeline for Gaganyaan, space station deployment (2035), and manned lunar landing (2040).'
    },
    {
      title: 'Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)',
      source: 'Ministry of Law and Justice / MeitY',
      relevance: 'Statutory framework for personal data fiduciary obligations, consent architecture, and data principal rights.'
    }
  ],
  infographic: {
    title: 'Frontier Technologies Architecture: India’s Strategic Missions',
    subtitle: 'Space, Quantum Computing, Genome Editing & Semiconductor Fab Ecosystem',
    type: 'matrix',
    items: [
      {
        heading: 'Gaganyaan & Chandrayaan-3',
        subheading: 'Human Spaceflight & Lunar South Pole',
        description: 'LVM3 human-rated launch vehicle carrying Crew Module to 400 km LEO for 3 days. Chandrayaan-3 made India the 1st country to soft-land near the lunar South Pole.',
        badge: 'Space Dominance',
        highlight: true
      },
      {
        heading: 'National Quantum Mission (NQM)',
        subheading: 'Rs 6,003 Crore Allocation',
        description: 'Targeting 50-1000 physical qubits in 8 years across 4 thematic hubs: Quantum Computing, Quantum Communication (satellite QKD over 2000 km), Sensing, and Materials.',
        badge: 'Quantum Supremacy',
        highlight: true
      },
      {
        heading: 'CRISPR-Cas9 & Gene Therapy',
        subheading: 'Molecular Scissors & Sickle Cell Mission',
        description: 'Cas9 endonuclease guided by synthetic gRNA to introduce targeted double-strand breaks. Central to National Sickle Cell Anaemia Elimination Mission 2047.',
        badge: 'Precision Biotech',
        highlight: false
      },
      {
        heading: 'India Semiconductor Mission (ISM)',
        subheading: '76,000 Crore Incentive Outlay',
        description: '50% fiscal support for setting up Silicon semiconductor fabs, Display fabs, Compound semiconductor, and Assembly, Testing, Marking and Packaging (ATMP) units.',
        badge: 'Hardware Autonomy',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'ISRO Launch Vehicles: Key Differentiators',
        points: [
          'PSLV (Polar Satellite Launch Vehicle): Workhorse 4-stage launcher alternating solid and liquid fuel (S-L-S-L). Launched Chandrayaan-1, Mangalyaan (MOM), and Aditya-L1.',
          'GSLV Mk II: 3-stage vehicle featuring an indigenously developed Cryogenic Upper Stage (CE-7.5) utilizing liquid oxygen (LOX at -183°C) and liquid hydrogen (LH2 at -253°C).',
          'LVM3 (GSLV Mk III): Heavy lift launcher with two solid strap-on motors (S200), core liquid stage (L110), and high-thrust cryogenic stage (C25). Capable of launching 4 tonnes to GTO and 8 tonnes to LEO. Designated carrier for Gaganyaan.',
          'SSLV (Small Satellite Launch Vehicle): 3-stage all-solid vehicle with a liquid Velocity Trimming Module (VTM), tailored for rapid on-demand launch of mini/micro satellites up to 500 kg to 500 km planar orbit.'
        ]
      },
      {
        title: 'National Quantum Mission (NQM) Pillars',
        points: [
          'Duration: 2023-24 to 2030-31 with outlay of ₹6,003 Crore, making India the 6th country globally with a dedicated quantum initiative.',
          'Hub 1: Quantum Computing (developing superconducting and photonic quantum computers scaling from 50 to 1,000 physical qubits).',
          'Hub 2: Quantum Communication (satellite-based secure Quantum Key Distribution - QKD across 2,000 km inter-city networks).',
          'Hub 3: Quantum Sensing and Metrology (high sensitivity atomic clocks and magnetometers for defense and navigation).',
          'Hub 4: Quantum Materials and Devices (topological insulators and quantum dots).'
        ]
      },
      {
        title: 'Digital Personal Data Protection (DPDP) Act 2023 Essentials',
        points: [
          'Data Principal: The individual to whom the personal data relates.',
          'Data Fiduciary: The entity determining the purpose and means of data processing.',
          'Consent Manager: Intermediary registered with Data Protection Board to manage consent on behalf of individuals.',
          'Cross-border Transfers: Transfers allowed to all jurisdictions unless specifically blacklisted/restricted by the Central Government ("Negative List" approach).'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'DPDP Act 2023',
        label: 'Data Protection Board of India',
        detail: 'Statutory adjudicatory body established under Section 18 to inquire into breaches and impose financial penalties up to ₹250 Crore.'
      },
      {
        code: 'Guidelines for Safety Assessment, 2022',
        label: 'Genome Edited Plants Exemption',
        detail: 'Exempts Site Directed Nuclease (SDN-1 and SDN-2) genome-edited plants lacking foreign introduced DNA from rigorous GMO biosafety trials under EPA 1986 Rules.'
      },
      {
        code: 'Section 43A, IT Act 2000',
        label: 'Compensation for Data Breach',
        detail: 'Governs liability of body corporates handling sensitive personal data, transitioning to the comprehensive DPDP regime.'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Justice K.S. Puttaswamy v. Union of India (2017)',
        significance: 'Nine-judge bench unanimously declared Right to Privacy as a Fundamental Right under Article 21, establishing the constitutional bedrock for the DPDP Act.'
      },
      {
        title: 'Nobel Prize in Chemistry (2020)',
        significance: 'Awarded to Emmanuelle Charpentier and Jennifer Doudna for the development of CRISPR-Cas9 genetic scissors, revolutionizing life sciences.'
      }
    ],
    examPitfalls: [
      'In CRISPR-Cas9, Cas9 is an endonuclease enzyme (molecular scissor); the guide RNA (gRNA) provides the complementary sequence targeting the exact location on the DNA.',
      'SDN-1 and SDN-2 genome editing techniques do NOT introduce foreign DNA into the host genome; only SDN-3 involves insertion of foreign genes (transgenic GMO).',
      'Quantum Computers operate on Quantum Bits (Qubits) that exploit Superposition and Entanglement, unlike classical computers that use binary bits (0 or 1).',
      'Cryogenic engines operate using liquid oxygen and liquid hydrogen at cryogenic temperatures; they are significantly more efficient (higher specific impulse) than solid or hypergolic liquid propellants.'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by ISRO Scientists & UPSC S&T Mentors',
    readingTime: '10 min core revision',
    keyTakeaways: [
      'In Science & Tech questions, always structure answers into: Basic Scientific Principle -> Indigenous Application/Mission -> Societal & Economic Utility -> Challenges/Ethical Dilemmas.',
      'Distinguish clearly between Artificial Narrow Intelligence (ANI), Artificial General Intelligence (AGI), and Artificial Super Intelligence (ASI).',
      'For semiconductor questions, emphasize the difference between "Fabless design" (where India possesses 20% of global talent) and "Foundry manufacturing" (where India currently faces raw material and capital constraints).'
    ],
    corePointers: [
      {
        title: 'Aditya-L1: Strategic Lagrange Point 1 Placement',
        notes: [
          'Positioned at the Sun-Earth Lagrangian point L1 (approx 1.5 million km from Earth).',
          'Advantage: Gravitational forces of Sun and Earth balance out, allowing the spacecraft to remain in a stable halo orbit with uninterrupted, continuous observation of the Sun without eclipses or occultation.',
          'Key Payloads: VELC (Visible Emission Line Coronagraph - solar corona and coronal mass ejections), SUIT (Solar Ultraviolet Imaging Telescope), and ASPEX.'
        ]
      },
      {
        title: 'Sickle Cell Anaemia & CRISPR Elimination',
        notes: [
          'Sickle cell anaemia is an autosomal recessive genetic blood disorder caused by a single point mutation in the HBB gene on chromosome 11, replacing glutamic acid with valine.',
          'Casgevy: World’s first approved CRISPR-based ex-vivo gene editing therapy targeting the BCL11A gene to reactivate fetal hemoglobin (HbF) production.',
          'Critical for India: Targets high prevalence across 17 tribal states under the National Sickle Cell Anaemia Elimination Mission.'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'dpdp-act-2023-gazette',
      title: 'The Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)',
      issuingAuthority: 'Ministry of Law and Justice, Government of India',
      gazetteNoOrYear: '11 August 2023',
      downloadUrl: '/documents/digital-personal-data-protection-act-2023.pdf',
      r2StorageKey: 'gazettes/digital-personal-data-protection-act-2023.pdf',
      fileSize: '1.1 MB',
      isPrimaryLaw: true
    }
  ],
  microQuiz: [
    {
      id: 'sci-q1',
      question: 'Which enzyme functions as the molecular "scissor" in the CRISPR-Cas9 genome editing mechanism?',
      questionTelugu: 'CRISPR-Cas9 జన్యు సవరణ ప్రక్రియలో పరమాణు "కత్తెర"గా పనిచేసే ఎంజైమ్ ఏది?',
      options: ['DNA Ligase', 'Cas9 Endonuclease', 'RNA Polymerase', 'Reverse Transcriptase'],
      correctIndex: 1,
      explanation: 'Cas9 is an RNA-guided endonuclease enzyme that cuts DNA double strands at a specific site identified by the synthetic guide RNA (gRNA).',
      tag: 'Biotechnology'
    },
    {
      id: 'sci-q2',
      question: 'Why was the Aditya-L1 spacecraft placed specifically in a halo orbit around the Lagrangian Point L1?',
      questionTelugu: 'ఆదిత్య-L1 అంతరిక్ష నౌకను లాగ్రాంజ్ పాయింట్ L1 చుట్టూ ఉన్న హాలో కక్ష్యలో ప్రత్యేకంగా ఎందుకు ప్రవేశపెట్టారు?',
      options: [
        'It allows the satellite to land on the Sun during solar minimum',
        'It provides continuous, uninterrupted observation of the Sun without occultation or eclipses',
        'It is the only orbit that allows solar panels to recharge communication batteries',
        'It shields the spacecraft from all solar flares and coronal mass ejections'
      ],
      correctIndex: 1,
      explanation: 'A satellite placed in the halo orbit around L1 has the unique major advantage of continuously viewing the Sun without any occultation or eclipses.',
      tag: 'Space Technology'
    },
    {
      id: 'sci-q3',
      question: 'Under the India Semiconductor Mission (ISM), what percentage of fiscal support on pari-passu basis is provided by the Central Government for setting up Silicon semiconductor fabs?',
      questionTelugu: 'ఇండియా సెమీకండక్టర్ మిషన్ (ISM) కింద సిలికాన్ సెమీకండక్టర్ ఫ్యాబ్‌ల స్థాపన కోసం కేంద్ర ప్రభుత్వం అందించే ఆర్థిక సహాయం శాతం ఎంత?',
      options: ['25%', '33%', '50%', '75%'],
      correctIndex: 2,
      explanation: 'The revised ISM scheme provides a uniform fiscal support of 50% of the project cost on a pari-passu basis for all technology nodes in Silicon semiconductor fabs.',
      tag: 'Semiconductor Mission'
    },
    {
      id: 'sci-q4',
      question: 'What fundamental quantum mechanics properties enable Quantum Computers to perform calculations exponentially faster than classical computers?',
      questionTelugu: 'క్వాంటం కంప్యూటర్లు సాంప్రదాయ కంప్యూటర్ల కంటే విపరీతమైన వేగంతో గణనలు చేయడానికి వీలు కల్పించే ప్రాథమిక లక్షణాలు ఏవి?',
      options: [
        'Electromagnetic Induction and Radiation',
        'Superposition and Quantum Entanglement',
        'Nuclear Fission and Critical Mass',
        'Brownian Motion and Capillary Action'
      ],
      correctIndex: 1,
      explanation: 'Quantum computers use qubits that can exist in multiple states simultaneously (Superposition) and exhibit correlated behavior across distances (Entanglement).',
      tag: 'Quantum Technology'
    },
    {
      id: 'sci-q5',
      question: 'Under the Digital Personal Data Protection (DPDP) Act, 2023, what is the maximum financial penalty that the Data Protection Board can impose for a significant data breach?',
      questionTelugu: 'డిజిటల్ పర్సనల్ డేటా ప్రొటెక్షన్ చట్టం, 2023 ప్రకారం డేటా ఉల్లంఘనకు డేటా ప్రొటెక్షన్ బోర్డు విధించగల గరిష్ట జరిమానా ఎంత?',
      options: ['₹50 Crore', '₹100 Crore', '₹250 Crore', '₹500 Crore'],
      correctIndex: 2,
      explanation: 'The DPDP Act 2023 empowers the Data Protection Board of India to levy penalties up to ₹250 Crore for failure to take reasonable security safeguards to prevent personal data breach.',
      tag: 'Cyber Law & Governance'
    }
  ],
  mainsScaffold: {
    question: 'Examine India’s strategic rationale behind launching the India Semiconductor Mission (ISM). What are the geopolitical, capital, and infrastructural challenges in establishing a domestic semiconductor fab ecosystem? (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Define semiconductors as the foundational hardware substrate of the modern fourth industrial revolution, powering everything from smartphones and automobiles to precision-guided missiles and AI data centers.',
      body: [
        {
          subheading: '1. Strategic and Economic Rationale',
          points: [
            'Geopolitical Vulnerability: Global semiconductor manufacturing is concentrated in Taiwan (TSMC ~60% advanced chips) and East Asia, posing acute supply-chain risks during regional conflicts or blockades.',
            'Economic Sovereignty: Semiconductor imports represent one of India’s largest import bills after crude oil; domestic fabrication is essential to prevent trade deficits and digital dependency.',
            'Defense and Cyber Security: Imported chips pose embedded hardware Trojan risks in critical defense, space, and telecommunication infrastructure.'
          ]
        },
        {
          subheading: '2. Major Structural Challenges',
          points: [
            'Capital Intensity: A commercial semiconductor fabrication plant requires $8–10 billion in upfront capital expenditure with a fast obsolescence cycle (upgrades needed every 3–4 years).',
            'Infrastructural Demands: Requires millions of gallons of ultra-pure water daily, uninterrupted zero-fluctuation power grids, and vibration-free seismic stability.',
            'Specialized Ecosystem: Lack of domestic supply chains for high-purity specialty chemicals, gases, lithography machinery (ASML EUV machines), and advanced packaging foundries.'
          ]
        },
        {
          subheading: '3. Strategic Way Forward',
          points: [
            'Capitalize on Strengths: Leverage India’s dominant position in fabless chip design (20% of global semiconductor design engineers).',
            'Focus on Mature Nodes First: Prioritize 28nm to 65nm mature nodes used in automotive, industrial IoT, and defense before attempting cutting-edge sub-3nm nodes.',
            'Alliances: Deepen Quad and bilateral partnerships with USA (CHIPS Act cooperation), Japan, and Taiwan.'
          ]
        }
      ],
      conclusion: 'Conclude that semiconductor self-reliance is not merely an industrial ambition but a foundational requirement for India’s technological sovereignty in the 21st century.'
    }
  }
};
