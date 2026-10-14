import { TopicContent } from '../../types';

export const historyModernContent: TopicContent = {
  nodeId: 'history-modern-freedom-struggle',
  title: 'Modern Indian History & Freedom Struggle (1857-1947)',
  titleTelugu: 'ఆధునిక భారత చరిత్ర & స్వాతంత్ర్యోద్యమం (1857-1947)',
  subject: 'Modern History (UPSC GS-1, APPSC Paper-I, TSPSC Paper-II)',
  overview: 'The crucible of modern Indian nationhood spanning the Great Revolt of 1857, early socio-religious awakening, moderate constitutionalism, extremist resurgence, revolutionary nationalism, Gandhian mass movements, constitutional negotiations, and the 1947 transfer of power.',
  standardReferences: [
    {
      title: "India's Struggle for Independence (1857-1947)",
      source: 'Bipan Chandra, Mridula Mukherjee, Aditya Mukherjee',
      relevance: 'The definitive historiographical narrative for UPSC & State PSC Mains analytical questions.'
    },
    {
      title: 'A Brief History of Modern India',
      source: 'Spectrum Publications (Rajiv Ahir, IPS)',
      relevance: 'Gold standard for Prelims chronology, Governor-Generals, Congress sessions, and socio-religious reform tables.'
    },
    {
      title: 'The Indian Independence Act, 1947 (10 & 11 Geo. 6. c. 30)',
      source: 'The National Archives / Gazette of India',
      relevance: 'Primary legal text on partition boundaries, lapse of paramountcy, and transfer of power.'
    }
  ],
  infographic: {
    title: 'Milestones of the Indian Freedom Movement (1857-1947)',
    subtitle: 'From the Sepoy Mutiny to the Sovereign Dawn',
    type: 'timeline',
    items: [
      {
        heading: '1857: The First War of Independence',
        subheading: 'Revolt of 1857 & Queen’s Proclamation 1858',
        description: 'End of East India Company rule; governance transferred to the British Crown via the Government of India Act 1858. Abolition of Doctrine of Lapse.',
        badge: 'Crown Rule',
        highlight: true
      },
      {
        heading: '1885–1905: Moderate Era',
        subheading: 'Petitions, Prayers & Economic Critique',
        description: 'Formation of INC by A.O. Hume. Dadabhai Naoroji (Drain of Wealth theory, Poverty and Un-British Rule in India), R.C. Dutt, and Gokhale expose colonial economic exploitation.',
        badge: 'Constitutional Agitation',
        highlight: false
      },
      {
        heading: '1905–1919: Swadeshi & Extremist Phase',
        subheading: 'Partition of Bengal & Home Rule Leagues',
        description: 'Lord Curzon partitions Bengal (1905). Rise of Lal-Bal-Pal and Aurobindo Ghosh. Surat Split (1907). Tilak and Annie Besant launch Home Rule League (1916). Lucknow Pact (1916).',
        badge: 'Swadeshi & Boycott',
        highlight: true
      },
      {
        heading: '1920–1934: Gandhian Mass Mobilization',
        subheading: 'Non-Cooperation, Swaraj & Salt Satyagraha',
        description: 'Rowlatt Act & Jallianwala Bagh (1919). Non-Cooperation Movement (1920-22) suspended after Chauri Chaura. Dandi March & Civil Disobedience Movement (1930). Gandhi-Irwin Pact & Poona Pact (1932).',
        badge: 'Satyagraha & Ahimsa',
        highlight: true
      },
      {
        heading: '1942–1947: Final Leap to Freedom',
        subheading: 'Quit India, INA, Naval Mutiny & Independence',
        description: 'Cripps Mission fails; "Do or Die" call in Quit India Movement (Aug 1942). Netaji Subhas Chandra Bose and Indian National Army (INA) march. Royal Indian Navy (RIN) Mutiny (Feb 1946). Cabinet Mission Plan and Indian Independence Act 1947.',
        badge: 'Purna Swaraj',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'Three Major Gandhian Movements: Quick Comparison',
        points: [
          'Non-Cooperation Movement (1920-22): Triggered by Khilafat question, Punjab atrocities (Jallianwala Bagh), and self-government demand. Boycott of government schools, law courts, and foreign cloth. Called off after violent Chauri Chaura incident (Feb 5, 1922).',
          'Civil Disobedience Movement (1930-34): Commenced with historic Dandi March (March 12 - April 6, 1930) defying the Salt Law. Active violation of unjust laws, non-payment of land revenue, forest law defiance in Central Provinces and Andhra (Palnadu). Unprecedented participation of women.',
          'Quit India Movement (August 1942): Sparked by failure of Cripps Mission and looming Japanese threat. Resolution passed at Gowalia Tank, Bombay ("Do or Die"). Entire senior leadership arrested overnight; turned into leaderless, spontaneous revolution with parallel governments (Ballia, Tamluk, Satara).'
        ]
      },
      {
        title: 'Landmark Reform Movements & Reformers',
        points: [
          'Brahmo Samaj (1828): Raja Ram Mohan Roy; campaigned against Sati (Regulation XVII, 1829), idol worship, and polytheism.',
          'Prarthana Samaj (1867): Atmaram Pandurang, M.G. Ranade; focus on inter-dining, inter-caste marriage, and upliftment of women.',
          'Arya Samaj (1875): Swami Dayanand Saraswati; "Go Back to the Vedas", Shuddhi movement, rejected hereditary caste.',
          'Ramakrishna Mission (1897): Swami Vivekananda; synthesized Vedanta with social service and nation building.',
          'Satyashodhak Samaj (1873): Jyotirao Phule; champion of non-Brahmin movement, education for Dalits and girls (Gulamgiri).'
        ]
      },
      {
        title: 'Constitutional Milestones Under British Rule',
        points: [
          'Morley-Minto Reforms (1909): Introduced communal electorates for Muslims, legalizing political separatism.',
          'Montagu-Chelmsford Reforms (1919): Introduced Dyarchy in provinces (Transferred and Reserved subjects), bicameral central legislature.',
          'Government of India Act 1935: Envisaged All-India Federation, introduced Provincial Autonomy, abolished Dyarchy in provinces and introduced it at the Centre (never implemented).'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'GOI Act 1858',
        label: 'Act for the Better Government of India',
        detail: 'Abolished Court of Directors and Board of Control; created office of Secretary of State for India assisted by a 15-member council.'
      },
      {
        code: 'Sec 7, Ind. Indep. Act 1947',
        label: 'Lapse of Suzerainty',
        detail: 'Lapse of British paramountcy over all Indian Princely States, reverting sovereignty to monarchs until accession.'
      },
      {
        code: 'Poona Pact 1932',
        label: 'Depressed Classes Reservation',
        detail: 'Agreement between B.R. Ambedkar and Mahatma Gandhi; abandoned separate electorates in exchange for reserved seats in general electorates (increased from 71 to 148).'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Lucknow Pact (1916)',
        significance: 'Reunion of Moderates and Extremists after 9 years; joint charter of demands submitted by Congress and Muslim League accepting separate electorates.'
      },
      {
        title: 'Lahore Congress Session (1929)',
        significance: 'Under Jawaharlal Nehru chairmanship, Congress declared "Purna Swaraj" (Complete Independence) as its goal and unfurled tricolor on Ravi river; decided to observe Jan 26, 1930 as Independence Day.'
      },
      {
        title: 'Subhas Chandra Bose & Forward Bloc (1939)',
        significance: 'Resigned Congress presidency after Tripuri crisis; allied with Axis powers in WWII to liberate India via the Azad Hind Fauj (INA).'
      }
    ],
    examPitfalls: [
      'Do not confuse the Morley-Minto Reforms (1909: communal electorates for Muslims) with the Montagu-Chelmsford Reforms (1919: dyarchy in provinces and separate electorates extended to Sikhs, Indian Christians, Anglo-Indians).',
      'Gandhi attended only ONE Round Table Conference: the Second Round Table Conference (1931) in London following the Gandhi-Irwin Pact.',
      'The Simon Commission (1927) was opposed across India specifically because it did not include a single Indian member (all-white commission), not because of its reform agenda.',
      'Remember that the Cripps Mission (1942) offered "Dominion Status" after the war, which was rejected by Gandhi as a "post-dated cheque on a crashing bank".'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by UPSC AIR-14 & APPSC Group-1 Rankers',
    readingTime: '12 min core revision',
    keyTakeaways: [
      'Master the ideological transitions: Moderate constitutionalism -> Militant nationalism -> Revolutionary zeal -> Gandhian mass hegemony.',
      'Always quote primary leaders, contemporary newspapers (Kesari, Young India, Al-Hilal), and resolutions in Mains answers.',
      'Remember the role of peasant and working-class movements (Kisan Sabhas, Eka movement, Bardoli Satyagraha) as force-multipliers for Congress.',
      'Modern History Mains questions frequently test why mass movements were suspended (e.g. Non-Cooperation after Chauri Chaura).'
    ],
    corePointers: [
      {
        title: 'The "Struggle-Truce-Struggle" (S-T-S) Paradigm of Mahatma Gandhi',
        notes: [
          'Bipan Chandra articulated that Gandhian strategy was rooted in S-T-S: a phase of vigorous extra-legal struggle is necessarily followed by a phase of truce (consolidation).',
          'Masses possess limited capacity for sacrifice; prolonged agitation leads to exhaustion and government repression.',
          'Truce periods were actively utilized for constructive work: Khadi promotion, eradication of untouchability, Hindu-Muslim unity, and national education.',
          'Contrasted with the Nehruvian socialist critique of "Struggle-Victory" (continuous uninterrupted confrontation).'
        ]
      },
      {
        title: 'Revolutionary Nationalism: Two Phases',
        notes: [
          'Phase 1 (1907-1917): Anushilan Samiti, Jugantar in Bengal; Abhinav Bharat (Savarkar) in Maharashtra; Ghadar Party (Lala Har Dayal) in North America. Focus on individual heroism, assassinations of oppressive colonial officials.',
          'Phase 2 (1920s-1930s): Hindustan Socialist Republican Association (HSRA - Bhagat Singh, Chandrashekhar Azad, Sukhdev). Shift from individual terrorism to socialist mass awakening; bombing of Central Legislative Assembly (1929) "to make the deaf hear".',
          'Surya Sen and the Chittagong Armoury Raid (1930): Armed guerrilla warfare and temporary provisional revolutionary government.'
        ]
      },
      {
        title: 'The Economic Drain Theory as Intellectual Bedrock',
        notes: [
          'Dadabhai Naoroji demonstrated that nearly a third of total Indian revenues were drained annually out of India without any economic or material return.',
          'Components of Drain: Home Charges (interest on public debt, railway guarantees, pensions of British officers), military expenses of imperial wars outside India, and remittances.',
          'Destroyed the moral legitimacy of the British "civilizing mission" and transformed economic discontent into political nationalism.'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'modern-history-freedom-struggle-archive',
      title: 'The Indian Independence Act, 1947 (10 & 11 Geo. 6. c. 30)',
      issuingAuthority: 'Parliament of the United Kingdom / National Archives of India',
      gazetteNoOrYear: '18 July 1947',
      downloadUrl: '/documents/indian-independence-act-1947.pdf',
      r2StorageKey: 'gazettes/indian-independence-act-1947.pdf',
      fileSize: '1.2 MB',
      isPrimaryLaw: true
    }
  ],
  microQuiz: [
    {
      id: 'mnh-q1',
      question: 'Which of the following was the primary reason for the nationwide boycott of the Simon Commission appointed in 1927?',
      questionTelugu: '1927 లో నియమించబడిన సైమన్ కమిషన్‌ను దేశవ్యాప్తంగా బహిష్కరించడానికి ప్రధాన కారణం ఏమిటి?',
      options: [
        'It proposed the division of Punjab and Bengal',
        'It did not include any Indian member in the commission',
        'It recommended the abolition of provincial autonomy',
        'It was headed by a military general'
      ],
      correctIndex: 1,
      explanation: 'The Indian Statutory Commission (Simon Commission) was composed entirely of British parliamentarians with zero Indian representation, which was viewed as an insult to the self-respect of Indians.',
      tag: 'Constitutional History'
    },
    {
      id: 'mnh-q2',
      question: 'The historic "Poona Pact" of September 1932 was signed between whom?',
      questionTelugu: 'సెప్టెంబర్ 1932 నాటి చారిత్రక "పూనా ఒప్పందం" ఎవరి మధ్య కుదిరింది?',
      options: [
        'Mahatma Gandhi and Lord Willingdon',
        'Dr. B.R. Ambedkar and Mahatma Gandhi (represented by Madan Mohan Malaviya)',
        'Jawaharlal Nehru and Muhammad Ali Jinnah',
        'Subhas Chandra Bose and Sardar Patel'
      ],
      correctIndex: 1,
      explanation: 'The Poona Pact abandoned Ramsay MacDonald’s Communal Award of separate electorates for Depressed Classes and instead provided reserved seats within the general electorate.',
      tag: 'Gandhian Era'
    },
    {
      id: 'mnh-q3',
      question: 'During which session did the Indian National Congress declare "Purna Swaraj" (Complete Independence) as its ultimate goal?',
      questionTelugu: 'భారత జాతీయ కాంగ్రెస్ ఏ సమావేశంలో "పూర్ణ స్వరాజ్" ను తన అంతిమ లక్ష్యంగా ప్రకటించింది?',
      options: [
        'Calcutta Session 1928',
        'Lahore Session 1929',
        'Karachi Session 1931',
        'Tripuri Session 1939'
      ],
      correctIndex: 1,
      explanation: 'Under the presidency of Jawaharlal Nehru at the Lahore Session in December 1929, the INC passed the historic Purna Swaraj resolution.',
      tag: 'Congress Sessions'
    },
    {
      id: 'mnh-q4',
      question: 'Who founded the "Satyashodhak Samaj" in Maharashtra in 1873 to fight caste oppression?',
      questionTelugu: 'కుల వివక్షకు వ్యతిరేకంగా పోరాడటానికి 1873 లో మహారాష్ట్రలో "సత్యశోధక్ సమాజ్" ను స్థాపించినది ఎవరు?',
      options: [
        'Mahadev Govind Ranade',
        'Jyotirao Govindrao Phule',
        'Gopal Hari Deshmukh',
        'B.R. Ambedkar'
      ],
      correctIndex: 1,
      explanation: 'Jyotirao Phule established the Satyashodhak Samaj (Truth-Seekers’ Society) in 1873 to liberate the Shudras and Ati-Shudras from socio-religious exploitation.',
      tag: 'Socio-Religious Reform'
    },
    {
      id: 'mnh-q5',
      question: 'Which event triggered Mahatma Gandhi to abruptly suspend the Non-Cooperation Movement in February 1922?',
      questionTelugu: 'ఫిబ్రవరి 1922 లో సహాయ నిరాకరణోద్యమాన్ని మహాత్మా గాంధీ హఠాత్తుగా నిలిపివేయడానికి దారితీసిన సంఘటన ఏది?',
      options: [
        'Jallianwala Bagh massacre',
        'Chauri Chaura incident in Gorakhpur',
        'Arrest of Ali Brothers',
        'Kakori train robbery'
      ],
      correctIndex: 1,
      explanation: 'On February 5, 1922, an agitated mob set fire to a police station in Chauri Chaura (Gorakhpur district, UP), killing 22 policemen. Committed to absolute non-violence, Gandhi withdrew the movement.',
      tag: 'National Movements'
    }
  ],
  mainsScaffold: {
    question: 'Critically examine the "Struggle-Truce-Struggle" (S-T-S) strategy adopted by Mahatma Gandhi during the Indian National Movement. How did it help in building a sustained mass movement against colonial rule? (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Introduce Mahatma Gandhi’s philosophy of mass mobilization, noting that unlike violent revolutions which seek immediate military overthrow, the Indian national struggle was a protracted war of attrition against colonial legitimacy, characterized by the Struggle-Truce-Struggle (S-T-S) cyclical paradigm.',
      body: [
        {
          subheading: '1. Rationale Behind the S-T-S Strategy',
          points: [
            'Capacity of the Masses: Bipan Chandra observed that masses cannot sustain sacrifices and heroic actions indefinitely. Prolonged agitation without respite causes exhaustion and apathy.',
            'Preventing Ruthless State Repression: High-pitched movements gave the colonial state an excuse to unleash brutal force. Pausing before total crushing preserved cadres and moral high ground.',
            'Re-negotiating Terms: Truce phases (e.g. Gandhi-Irwin Pact 1931) forced the British to treat Congress as an equal negotiating entity, eroding the myth of British prestige.'
          ]
        },
        {
          subheading: '2. The Creative Utilization of the "Truce" Phase',
          points: [
            'Constructive Programme: Truce was not passive inactivity; Gandhi directed millions of volunteers toward Khadi production, anti-untouchability campaigns (Harijan Sevak Sangh), village sanitation, and national education.',
            'Expanding Base: Reached the rural hinterland, women, Dalits, and tribal belts who subsequently became front-line warriors in the next phase of active struggle.'
          ]
        },
        {
          subheading: '3. Critique and Counter-Perspectives',
          points: [
            'Left and Socialist Critique: Leaders like Jawaharlal Nehru and Subhas Chandra Bose argued that S-T-S compromised momentum just when British authority was trembling (e.g. post-Chauri Chaura, Gandhi-Irwin pact).',
            'Compromise Perception: Often seen as concessions to the bourgeois and capitalist classes who feared the radicalization of the masses.'
          ]
        }
      ],
      conclusion: 'Conclude that despite contemporary critiques, S-T-S was a masterstroke in asymmetric warfare. It eroded the colonial state’s hegemony layer by layer without exhausting the people, culminating in the irresistible wave of the Quit India movement and eventual independence.'
    }
  }
};
