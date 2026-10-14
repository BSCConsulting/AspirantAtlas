export interface ResourceCategory {
  category: string;
  categoryTelugu?: string;
  description: string;
  items: {
    id: string;
    docId: string;
    title: string;
    description: string;
    type: 'Official Gazette' | 'NCERT Book' | 'Government Report' | 'PYQ Archive';
    url: string;
    badge: string;
    fileSize?: string;
  }[];
}

export const RESOURCE_VAULT: ResourceCategory[] = [
  {
    category: 'Official Acts & Statutory Documents',
    categoryTelugu: 'అధికారిక చట్టాలు & గెజిట్ పత్రాలు',
    description: 'Direct legislative texts and gazettes for precise statutory references.',
    items: [
      {
        id: 'rv-ap-reorg',
        docId: 'ap-reorganisation-act-2014-statute',
        title: 'Andhra Pradesh Reorganisation Act, 2014 (Act No. 6 of 2014)',
        description: 'Complete 108 sections and 13 schedules published by the Ministry of Law & Justice, Govt of India.',
        type: 'Official Gazette',
        url: 'https://legislative.gov.in',
        badge: 'Official Law',
        fileSize: '2.4 MB'
      },
      {
        id: 'rv-skc',
        docId: 'sri-krishna-committee-report',
        title: 'Report of the Committee for Consultations on the Situation in AP (Sri Krishna Committee)',
        description: 'Comprehensive 500-page historical and socio-economic report examining the 6 options for Andhra Pradesh and Telangana.',
        type: 'Government Report',
        url: 'https://www.mha.gov.in',
        badge: 'Core Reference',
        fileSize: '4.8 MB'
      },
      {
        id: 'rv-coi',
        docId: 'constitution-of-india-official',
        title: 'Constitution of India (Updated Bilingual Edition)',
        description: 'The complete text of the Indian Constitution with latest constitutional amendments up to 106th CAA.',
        type: 'Official Gazette',
        url: 'https://legislative.gov.in/constitution-of-india/',
        badge: 'National Core',
        fileSize: '5.2 MB'
      }
    ]
  },
  {
    category: 'State Socio-Economic Surveys & Budgets',
    categoryTelugu: 'సామాజిక-ఆర్థిక సర్వేలు & బడ్జెట్ ప్రతులు',
    description: 'Gold-standard state government statistical publications for AP and Telangana economics.',
    items: [
      {
        id: 'rv-tseo',
        docId: 'telangana-socio-economic-outlook-report',
        title: 'Telangana Socio-Economic Outlook (Latest Edition)',
        description: 'Published annually by the Department of Planning, Government of Telangana. Primary source for GSDP, irrigation projects, and welfare statistics.',
        type: 'Government Report',
        url: 'https://planning.telangana.gov.in',
        badge: 'TSPSC Must-Read',
        fileSize: '3.4 MB'
      },
      {
        id: 'rv-apse',
        docId: 'ap-socio-economic-survey-report',
        title: 'Socio-Economic Survey of Andhra Pradesh',
        description: 'Annual official economic survey published by Department of Planning, AP Government. Covers district profiles, ports, agriculture, and welfare metrics.',
        type: 'Government Report',
        url: 'https://planning.ap.gov.in',
        badge: 'APPSC Must-Read',
        fileSize: '3.1 MB'
      },
      {
        id: 'rv-ues',
        docId: 'union-economic-survey-budget-report',
        title: 'Union Economic Survey & Budget Highlights',
        description: 'Ministry of Finance, Government of India annual survey covering macro indicators, capital expenditure, and fiscal federalism.',
        type: 'Government Report',
        url: 'https://www.indiabudget.gov.in',
        badge: 'UPSC Core',
        fileSize: '4.1 MB'
      }
    ]
  },
  {
    category: 'Foundational Textbooks & Open Materials',
    categoryTelugu: 'ప్రాథమిక పాఠ్యపుస్తకాలు & ఉచిత పుస్తక నిధి',
    description: 'Official NCERT and Telugu Akademi recommended book lists.',
    items: [
      {
        id: 'rv-ncert-polity',
        docId: 'ncert-constitution-at-work',
        title: 'NCERT Class 11: Indian Constitution at Work',
        description: 'The definitive conceptual starter for understanding constitutional philosophy, rights, and federal governance.',
        type: 'NCERT Book',
        url: 'https://ncert.nic.in/textbook.php',
        badge: 'Free Download',
        fileSize: '2.8 MB'
      },
      {
        id: 'rv-ncert-history',
        docId: 'ncert-themes-in-indian-history',
        title: 'NCERT Class 11: Themes in World & Indian History',
        description: 'Key foundation for ancient, medieval, and modern Indian historical movements and socio-cultural developments.',
        type: 'NCERT Book',
        url: 'https://ncert.nic.in/textbook.php',
        badge: 'Free Download',
        fileSize: '3.5 MB'
      },
      {
        id: 'rv-telugu-akademi',
        docId: 'telugu-akademi-history-culture',
        title: 'Telugu Akademi: History and Culture of Andhra Pradesh & Telangana',
        description: 'The standard reference prescribed by APPSC and TSPSC for dynastic chronologies and regional movement questions.',
        type: 'Government Report',
        url: 'https://teluguacademy.net',
        badge: 'State Prescribed',
        fileSize: '5.6 MB'
      }
    ]
  }
];
