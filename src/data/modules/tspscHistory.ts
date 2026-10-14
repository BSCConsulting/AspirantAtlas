import { TopicContent } from '../../types';

export const tspscHistoryContent: TopicContent = {
  nodeId: 'tspsc-history-culture-heritage',
  title: 'Telangana History, Kakatiyas, Qutb Shahis & Cultural Heritage',
  titleTelugu: 'తెలంగాణ చరిత్ర, కాకతీయులు, కుతుబ్ షాహీలు & సంస్కృతి',
  subject: 'Telangana State Specific (Paper-II Group 1 & Paper-II Group 2)',
  overview: 'The historical and cultural tapestry of Telangana: Kakatiya dynasty hydraulic engineering (Chain of Tanks), Ramappa Temple UNESCO World Heritage architectural marvel, Qutb Shahi syncretic culture (Deccani Urdu, Golkonda diamonds), Asaf Jahi modernization, tribal revolts (Komaram Bheem’s Jal-Jangal-Zameen), and living folk traditions (Bathukamma, Bonalu, Sammakka-Saralamma).',
  standardReferences: [
    {
      title: 'History of Telangana (From Pre-History to 1948)',
      source: 'Telugu Akademi, Government of Telangana',
      relevance: 'The statutory syllabus textbook for all TSPSC / TGPSC Group-1 and Group-2 examinations.'
    },
    {
      title: 'UNESCO World Heritage Nomination Dossier: Kakatiya Rudreswara (Ramappa) Temple',
      source: 'Archaeological Survey of India (ASI) / UNESCO World Heritage Centre',
      relevance: 'Authoritative structural details on floating bricks, sandbox technology, and temple iconography.'
    },
    {
      title: 'A Social and Cultural History of Telangana',
      source: 'Prof. Adapa Satyanarayana & Dr. B. Rama Chandra Reddy',
      relevance: 'Essential for socio-cultural analysis of Golkonda, Asaf Jahi feudalism, and peasant armed struggles.'
    }
  ],
  infographic: {
    title: 'Heritage of Telangana: Kakatiya Engineering to Tribal Resistance',
    subtitle: 'Chain Tanks, UNESCO Architecture, Syncretic Culture & Folk Legacies',
    type: 'matrix',
    items: [
      {
        heading: 'Kakatiya Chain Tank System',
        subheading: 'Hydraulic Masterpieces',
        description: 'Interconnected irrigation tanks built across contours: Ramappa, Pakhal, Laknavaram, Ghanpur. Surplus from upper tank cascades to lower tank, defying semi-arid drought.',
        badge: 'Water Wisdom',
        highlight: true
      },
      {
        heading: 'Ramappa (Rudreswara) Temple',
        subheading: 'UNESCO World Heritage (2021)',
        description: 'Built by General Recharla Rudra (1213 CE) during Ganapati Deva reign. Known for lightweight "floating bricks" (density < 1.0 g/cm³), sandbox foundation, and dancing bracket figures.',
        badge: 'UNESCO Marvel',
        highlight: true
      },
      {
        heading: 'Qutb Shahi Syncretic Culture',
        subheading: '1518–1687: Ganga-Jamuni Tehzeeb',
        description: 'Muhammad Quli Qutb Shah founded Hyderabad (1591) and built Charminar. Patronized Telugu literature (Addanki Gangadhara Kavi wrote Radhamadhava Samvadam). Golkonda diamond trade.',
        badge: 'Syncretic Golden Age',
        highlight: false
      },
      {
        heading: 'Komaram Bheem & Tribal Freedom',
        subheading: 'Jodeghat Martyrdom 1940',
        description: 'Gond tribal hero who coined the immortal battle cry "Jal, Jangal, Zameen" (Water, Forest, Land) fighting against Nizam feudal landlords (Patels/Patwaris) and forest guards.',
        badge: 'Adivasi Hero',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'Kakatiya Dynasty (1158–1323 CE): Highlights',
        points: [
          'Rulers: Prola II, Rudradeva (1158–1195, built Thousand Pillar Temple in Hanumakonda), Ganapati Deva (1199–1262, expanded kingdom, Motupalli charter for foreign trade), Rani Rudrama Devi (1262–1289, Marco Polo visited Motupalli), Prataparudra II (1289–1323, faced Delhi Sultanate invasions of Malik Kafur and Ulugh Khan).',
          'Administrative System: Nayankara System (assignment of villages/nayamus to military chieftains in return for maintaining troops).',
          'Motupalli Abhaya Sasanam (1244 CE): Issued by Ganapati Deva ensuring security and fair customs duties for foreign maritime merchants.'
        ]
      },
      {
        title: 'Qutb Shahis of Golkonda (1518–1687 CE)',
        points: [
          'Sultan Quli Qutb-ul-Mulk (1518-1543): Founded the dynasty after Bahmani Sultanate fragmentation.',
          'Ibrahim Qutb Shah (Malkibharama): Deep patron of Telugu poets; appointed Murahari Rao as general; constructed Hussain Sagar lake in 1562.',
          'Muhammad Quli Qutb Shah: Built Charminar in 1591 to commemorate the eradication of plague; wrote poetic verses in Dakhni Urdu (Kulliyat-e-Quli Qutb Shah).',
          'Abul Hasan Tana Shah (1672–1687): Appointed Madanna and Akkanna as prime minister and army commander; Kancharla Gopanna (Bhakt Ramadas) built Bhadrachalam temple during his reign. Overthrown by Mughal Emperor Aurangzeb in 1687.'
        ]
      },
      {
        title: 'Telangana Folk Traditions & Living Festivals',
        points: [
          'Bathukamma: Floral festival celebrated during Navaratri by Telangana women using seasonal flowers (Gunugu, Tangedu, Gummadi, Katla). Symbolizes respect for nature and ecological harmony.',
          'Bonalu: Ashada masam thanksgiving festival to Goddess Mahakali (Lashkar Bonalu, Golkonda Bonalu, Lal Darwaza). Features Rangam (oracle prediction) and Pothuraju.',
          'Sammakka-Saralamma (Medaram) Jatara: Asia’s largest tribal congregation held biennially in Mulugu district honoring mother-daughter tribal warriors who fought against Kakatiya oppressive taxes.',
          'Folk Theatre: Oggu Katha (pastoral narrative of Mallanna and Beerappa sung by Kuruma community), Chindu Bhagavatham, Perini Sivatandavam (dance of warriors revived by Nataraja Ramakrishna).'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'UNESCO Criterion (i) & (iv)',
        label: 'Ramappa Temple World Heritage',
        detail: 'Inscribed in 2021 as Masterpiece of human creative genius exhibiting exceptional technological ensemble in Kakatiya architecture.'
      },
      {
        code: 'Salad Bowl Cultural Policy',
        label: 'Ganga-Jamuni Tehzeeb',
        detail: 'Constitutional recognition of Telangana’s composite heritage synthesizing Telugu, Dakhni, Urdu, and tribal traditions.'
      },
      {
        code: 'Motupalli Charter (1244 CE)',
        label: 'Abhaya Sasanam',
        detail: 'Historic sovereign charter protecting foreign merchant ships and waiving arbitrary seizure of shipwrecked vessels.'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Inauguration of Ramappa as UNESCO Site (July 2021)',
        significance: '39th UNESCO World Heritage site in India and first in Telangana, bringing global recognition to Kakatiya sandstone and floating brick craftsmanship.'
      },
      {
        title: 'Komaram Bheem Memorial at Jodeghat',
        significance: 'Established to commemorate the supreme sacrifice of Komaram Bheem on September 1, 1940 defending tribal autonomy and self-rule.'
      }
    ],
    examPitfalls: [
      'The Thousand Pillar Temple at Hanumakonda was built by Rudradeva (1163 CE), whereas the Ramappa Temple at Palampet was built by General Recharla Rudra during Ganapati Deva’s reign (1213 CE).',
      'The Venetian traveler Marco Polo visited the port of Motupalli during the reign of Rani Rudrama Devi (around 1289–1293 CE), not during Ganapati Deva.',
      'Sammakka-Saralamma fought against the Kakatiya kings, NOT the Mughals or the British.',
      'Hussain Sagar lake was built by Ibrahim Qutb Shah in 1562, named after Hussain Shah Wali who supervised the construction.'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by TSPSC Group-1 State Rankers',
    readingTime: '11 min core revision',
    keyTakeaways: [
      'In TSPSC Mains Paper-II, weave the continuity between Kakatiya hydraulic engineering (chain of tanks) and the modern Mission Kakatiya restoration program.',
      'Highlight the syncretic nature of Telangana’s cultural identity: Golkonda Sultans patronized Telugu and celebrated Hindu festivals, fostering Hindu-Muslim composite living.',
      'Always quote folk epics, songs of Suddala Hanumanthu, and Balladeers when discussing the Telangana armed resistance.'
    ],
    corePointers: [
      {
        title: 'Ramappa Temple Architectural Innovations',
        notes: [
          'Sandbox Technology: Foundation pit filled with a mixture of sand, lime, jaggery, and karakkaya (black myrobalan), acting as a seismic shock absorber during earthquakes.',
          'Floating Bricks: The roof and shikhara were constructed with lightweight porous bricks made of clay and sawdust that float on water, drastically reducing load on granite pillars.',
          'Carvings: High-polish black basalt bracket figures (Madanikas / Salabhanjikas) depicting 12 dancing postures mentioned in Jayapa Senani’s Nritya Ratnavali.'
        ]
      },
      {
        title: 'Telangana Peasant Armed Struggle (1946–1951)',
        notes: [
          'Triggered on July 4, 1946 when Doddi Komaraiah was martyred resisting the goons of Visnoor Deshmukh (Ramachandra Reddy) at Kadavendi.',
          'Led by the Andhra Maha Sabha and Communist Party of India (CPI) against the feudal oppression of Jagirdars, Deshmukhs, and the predatory private militia Razakars of Kasim Razvi.',
          'Liberated 3,000 villages and distributed 10 lakh acres of land to landless agricultural laborers.'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'kakatiya-heritage-ramappa-records',
      title: 'UNESCO World Heritage Nomination Dossier: Kakatiya Rudreswara (Ramappa) Temple',
      issuingAuthority: 'Archaeological Survey of India / Department of Heritage Telangana',
      gazetteNoOrYear: 'Inscribed July 2021 (Ref. 1570)',
      downloadUrl: '/documents/ramappa-temple-unesco-dossier.pdf',
      r2StorageKey: 'gazettes/ramappa-temple-unesco-dossier.pdf',
      fileSize: '2.8 MB',
      isPrimaryLaw: false
    }
  ],
  microQuiz: [
    {
      id: 'tsh-q1',
      question: 'The UNESCO World Heritage Ramappa Temple at Palampet was built in 1213 CE by which military commander during the reign of Ganapati Deva?',
      questionTelugu: 'పాలంపేటలోని యునెస్కో ప్రపంచ వారసత్వ సంపద రామప్ప దేవాలయాన్ని 1213 లో గణపతి దేవుని పాలనలో నిర్మించిన సైన్యాధ్యక్షుడు ఎవరు?',
      options: ['Recharla Rudra', 'Jayapa Senani', 'Gona Ganna Reddy', 'Prataparudra'],
      correctIndex: 0,
      explanation: 'Recharla Rudra, the chief commander of the Kakatiya king Ganapati Deva, constructed the Rudreswara (Ramappa) Temple in 1213 CE.',
      tag: 'Kakatiya Architecture'
    },
    {
      id: 'tsh-q2',
      question: 'Which Venetian traveler visited the Kakatiya kingdom through the port of Motupalli and wrote glowingly about the prosperous trade and Queen Rudrama Devi?',
      questionTelugu: 'మోటుపల్లి ఓడరేవు ద్వారా కాకతీయ రాజ్యాన్ని సందర్శించి, రాణి రుద్రమదేవి పాలనను మరియు విదేశీ వాణిజ్యాన్ని ప్రశంసించిన వెనీషియన్ యాత్రికుడు ఎవరు?',
      options: ['Nicolo de Conti', 'Marco Polo', 'Ibn Battuta', 'Abdur Razzaq'],
      correctIndex: 1,
      explanation: 'Marco Polo visited the Motupalli port around 1289–1293 CE and recorded the remarkable governance of Queen Rudrama Devi and the thriving diamond and muslin trade.',
      tag: 'Foreign Accounts'
    },
    {
      id: 'tsh-q3',
      question: 'The legendary slogan "Jal, Jangal, Zameen" (Water, Forest, Land) was coined during the anti-feudal tribal rebellion by which freedom fighter?',
      questionTelugu: '"జల్, జంగల్, జమీన్" (నీరు, అడవి, భూమి) అనే అమర నినాదాన్ని ఏ గిరిజన విప్లవ వీరుడు రూపొందించాడు?',
      options: ['Birsa Munda', 'Komaram Bheem', 'Alluri Sitarama Raju', 'Kumram Suru'],
      correctIndex: 1,
      explanation: 'Komaram Bheem, the legendary Gond tribal leader, coined "Jal, Jangal, Zameen" during his guerrilla struggle against the Nizam’s oppressive forest and land revenue policies at Jodeghat.',
      tag: 'Tribal Movements'
    },
    {
      id: 'tsh-q4',
      question: 'Which Qutb Shahi Sultan constructed the historic Charminar in Hyderabad in 1591 to commemorate the eradication of a deadly plague epidemic?',
      questionTelugu: '1591 లో ప్లేగు వ్యాధి నిర్మూలనకు గుర్తుగా హైదరాబాదులో చారిత్రక చార్మినార్‌ను నిర్మించిన కుతుబ్ షాహీ సుల్తాన్ ఎవరు?',
      options: ['Sultan Quli Qutb Shah', 'Ibrahim Qutb Shah', 'Muhammad Quli Qutb Shah', 'Abul Hasan Tana Shah'],
      correctIndex: 2,
      explanation: 'Muhammad Quli Qutb Shah founded the city of Hyderabad and built the majestic Charminar in 1591 CE as the architectural centerpiece of the new capital.',
      tag: 'Qutb Shahi Era'
    },
    {
      id: 'tsh-q5',
      question: 'Whose martyrdom on July 4, 1946 at Kadavendi village triggered the historic Telangana Peasant Armed Struggle?',
      questionTelugu: 'జూలై 4, 1946 న కడవెండి గ్రామంలో ఎవరి అమరత్వం చారిత్రక తెలంగాణ సాయుధ రైతు పోరాటానికి నాంది పలికింది?',
      options: ['Doddi Komaraiah', 'Chityala Ailamma (Chakala Ilamma)', 'Ravi Narayana Reddy', 'Baddam Yella Reddy'],
      correctIndex: 0,
      explanation: 'The martyrdom of Doddi Komaraiah, a young activist shot by the goons of Visnoor Deshmukh, sparked the massive mass uprising across Telangana.',
      tag: 'Telangana Armed Struggle'
    }
  ],
  mainsScaffold: {
    question: 'Examine the hydraulic engineering and tank irrigation system developed during the Kakatiya period. How has this ancient wisdom served as the conceptual foundation for modern water rejuvenation in Telangana? (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Introduce the Kakatiyas (12th–14th century) as master hydraulic engineers of the semi-arid Deccan plateau, who transformed a drought-prone granite landscape into a granary through innovative tank architecture.',
      body: [
        {
          subheading: '1. Engineering Genius of the Kakatiya "Chain of Tanks"',
          points: [
            'Cascading Contour Topography: Tanks were constructed in a cascading ladder-like hierarchy across natural drainage valleys. The surplus discharge of an upper tank flowed into the feeder channel of the downstream tank, ensuring zero rainwater runoff loss.',
            'Engineering Scale: Built mega reservoirs across natural gaps in hills: Ramappa Lake (irrigating 10,000 acres), Pakhal Lake (30 sq km area), Laknavaram (surrounded by 13 hillocks with 3-ring sluices).',
            'Sluices & Earthen Bunds: Developed stone-lined sluices (Thumulu) with regulatory stone plugs and overflow weirs (Alagu) to prevent bund breaches during torrential downpours.'
          ]
        },
        {
          subheading: '2. Socio-Economic Impact on Medieval Telangana',
          points: [
            'Expansion of Cultivable Frontier: Brought vast tracts of scrub jungle under paddy cultivation.',
            'Decentralized Maintenance: Tank maintenance was integrated into village social contracts through Dasa Vandham (allocation of tax-free land to families maintaining bunds and clearing silt).'
          ]
        },
        {
          subheading: '3. Revival in Modern Governance: "Mission Kakatiya"',
          points: [
            'Desilting & Storage Restoration: The government of Telangana launched Mission Kakatiya (Our Village - Our Tank) to restore over 46,000 cascading tanks.',
            'Fertility & Groundwater Recharging: Silt excavated from tank beds was distributed to farmers’ fields, enriching soil fertility while simultaneously recharging the water table across semi-arid districts.'
          ]
        }
      ],
      conclusion: 'Conclude that the Kakatiya hydraulic legacy proves that traditional ecological knowledge, when synthesized with modern engineering, provides the most sustainable defense against climate change and water scarcity.'
    }
  }
};
