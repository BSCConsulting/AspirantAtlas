#!/usr/bin/env python3
"""
Generator script for Batch D standard reference books (APPSC & TSPSC State Specializations):
1. telugu-akademi-andhra-history (History & Culture of Andhra Pradesh - Telugu Akademi)
2. telugu-akademi-telangana-history (History & Culture of Telangana - Telugu Akademi)
3. telangana-movement-state-formation-v-prakash (Telangana Movement & State Formation - V. Prakash / Telugu Akademi)
4. ap-economy-sociology-telugu-akademi (Andhra Pradesh Economy & Structure - Telugu Akademi)
5. telangana-economy-development-telugu-akademi (Telangana Economy: Structure & Growth - Telugu Akademi)
6. ap-telangana-geography-telugu-akademi (Geography of AP & Telangana - Telugu Akademi)
"""

import json

batch_d = {
  "telugu-akademi-andhra-history": {
    "id": "telugu-akademi-andhra-history",
    "title": "History & Culture of Andhra Pradesh: Standard Reference (Telugu Akademi)",
    "titleTelugu": "ఆంధ్రప్రదేశ్ సమగ్ర చరిత్ర & సంస్కృతి (తెలుగు అకాడమీ ప్రామాణిక గ్రంథం)",
    "issuingAuthority": "Telugu Akademi / Dr. P. Raghunadha Rao",
    "dateOrYear": "Official Telugu Akademi Standard",
    "pages": "20 Comprehensive Chapters",
    "summary": "The definitive, authoritative reference text prescribed for APPSC Group 1, Group 2, and UPSC regional history. Comprehensive coverage from ancient Andhra kingdoms (Satavahanas, Ikshvakus, Vishnukundins, Eastern Chalukyas of Vengi), medieval flowering under Kakatiyas, Reddi kingdoms of Kondavidu and Rajahmundry, and the golden era of the Vijayanagara Empire (Sri Krishnadevaraya), to European colonial arrival, 1857 resistance, Andhra Movement, 1953 Kurnool capital formation, 1956 Visalandhra, and post-bifurcation cultural heritage.",
    "pdfFilename": "telugu-akademi-andhra-history-standard.pdf",
    "sections": [
      {
        "numberOrCode": "Chapters 1–5",
        "title": "Ancient Andhra: Satavahanas, Ikshvakus & Vishnukundins",
        "content": [
          "Satavahana Dynasty (2nd Century BCE – 3rd Century CE): Founder Simuka; Gautamiputra Satakarni (Nasik inscription by Gautami Balasri: 'Trisamudra-toya-pita-vahana'); Hala (Gatha Saptasati in Maharashtri Prakrit); Amaravati School of Art (white marble/limestone relief sculptures, Jataka tales, Stupas); Trade with Roman Empire via ports of Motupalli and Ghantasala.",
          "Ikshvakus of Vijayapuri (Nagarjunakonda): Capital Vijayapuri in Palnadu; Royal women (Chamtisri, Bhatideva) patronized Mahayana Buddhism (Nagarjuna, Chaityas, Stupas) while kings performed Vedic sacrifices (Asvamedha, Vajapeya); Transition from Prakrit to Sanskrit in epigraphy.",
          "Vishnukundins & Eastern Chalukyas: Vishnukundins (worship of Sriparvata Svami / Mallikarjuna; cave architecture at Mogalrajapuram and Undavalli); Eastern Chalukyas of Vengi (Kubja Vishnuvardhana 624 CE; Rajaraja Narendra and court poet Nannaya Bhattu beginning Mahabharata translation into Telugu; foundation of Telugu literary culture)."
        ],
        "keyHighlight": "Amaravati School of Art relief carvings and royal female patronage of Buddhism under the Ikshvakus of Nagarjunakonda."
      },
      {
        "numberOrCode": "Chapters 6–12",
        "title": "Medieval Flourishing: Kakatiyas, Reddis & Vijayanagara Empire",
        "content": [
          "Kakatiya Dynasty: Expansion under Prola II, Rudradeva (Anumakonda Thousand Pillar Temple), Ganapatideva (Motupalli Abhaya Sasanam promoting maritime commerce), Rani Rudrama Devi (defended kingdom against Yadavas and Pandyas; Marco Polo's accounts), and Prataparudra II; Nayankara system (feudal military-administrative structure); Irrigation revolution: Ramappa Lake, Pakhal Lake, Laknavaram Lake.",
          "Reddi Kingdoms of Kondavidu & Rajahmundry: Prolaya Vema Reddi, Anavema Reddi, Kumaragiri Reddi (Vasantarajeeyam treatise on dance); Golden age of Telugu literature: Errapragada (completed Mahabharata Aranya Parva), Srinatha (Kavi Sarvabhauma, Kasikhandam, Palnati Vira Charitra), and Bammera Potana (Andhra Maha Bhagavatam); Spring festivals (Vasantotsavas).",
          "Vijayanagara Empire (1336–1646): Sangama, Saluva, Tuluva, Aravidu dynasties; Sri Krishnadevaraya (reign 1509–1529): Amuktamalyada (Telugus political treatise: Saptanga theory of statecraft); Ashtadiggajas (Allasani Peddana - Manucharitra, Tenali Ramakrishna); Architecture: Hampi monuments, Kalyana Mandapas, Lepakshi Veerabhadra Temple (frescoes, hanging pillar); Battle of Rakkasi-Tangadi / Talikota (1565)."
        ],
        "keyHighlight": "Ganapatideva's Motupalli Charter protecting foreign maritime traders and Sri Krishnadevaraya's Amuktamalyada statecraft."
      },
      {
        "numberOrCode": "Chapters 13–20",
        "title": "Colonial Period, Freedom Struggle & Andhra State Formation",
        "content": [
          "British Rule & Resistance: Acquisition of Northern Circars (Treaty of 1766) and Ceded Districts / Rayalaseema (1800 Treaty of Subsidiary Alliance with Nizam); Arthur Cotton's irrigation engineering: Godavari Barrage at Dowleswaram (1852) and Krishna Barrage at Vijayawada (1855) transforming coastal famines into the granary of South India; Rampa Rebellion of Alluri Sitarama Raju (1922–1924) against Madras Forest Act 1882.",
          "Social Reform & Renaissance in Andhra: Kandukuri Veeresalingam Pantulu (Father of Modern Telugu Renaissance: Rajahmundry Social Reform Association, first widow remarriage in 1881, Vivekavardhani journal, first Telugu novel Rajasekhara Charitramu); Gurajada Apparao (Kanyasulkam drama exposing child marriage and dowry); Gidugu Ramamurthy (Vyavaharika Bhasha movement for spoken Telugu).",
          "The Andhra Movement & State Formation: Bapatla Andhra Mahasabha (1913); Demand for separate Andhra province from bilingual Madras Presidency; Sri Bagh Pact (14 November 1937: agreement between Coastal Andhra and Rayalaseema leaders ensuring university, high court, and capital safeguards for Rayalaseema); Martyrdom of Amarajeevi Potti Sreeramulu (58-day hunger fast, died 15 December 1952); Formation of Andhra State with capital at Kurnool (1 October 1953) under Chief Minister Tanguturi Prakasam Pantulu; Gentlemen's Agreement (1956) leading to Visalandhra / Andhra Pradesh on 1 November 1956."
        ],
        "keyHighlight": "The Sri Bagh Pact (1937) terms and Potti Sreeramulu's 58-day historic fast culminating in the 1953 Andhra State."
      }
    ],
    "queriesAndAnswers": [
      {
        "question": "What were the key provisions of the Sri Bagh Pact signed on 14 November 1937 between the leaders of Coastal Andhra and Rayalaseema?",
        "answer": "The Sri Bagh Pact was formulated at the residence of Kasi Nageswara Rao Pantulu ('Sri Bagh' in Madras) to resolve Rayalaseema's fears of coastal domination before demanding statehood: 1) University & Higher Education: Rayalaseema would have two university centers or preference in professional colleges; 2) Irrigation Safeguards: Rayalaseema, being a drought-prone region, was granted priority rights over Krishna and Tungabhadra river waters before allocation to coastal projects; 3) Location of Capital and High Court: Rayalaseema leaders were given the choice between hosting the State Capital or the High Court (they chose Kurnool as capital when Andhra State was created in 1953, while High Court was placed at Guntur); 4) Legislative Representation: Allocation of assembly seats based on area rather than purely on population density.",
        "examTip": "Foundational milestone for APPSC Group 1 & 2 History and political development questions."
      },
      {
        "question": "Why is Kandukuri Veeresalingam Pantulu revered as the Father of Modern Telugu Renaissance?",
        "answer": "Kandukuri Veeresalingam (1848–1919) pioneered progressive socio-cultural transformation in Telugu society: 1) Women's Emancipation: Conducted South India's first widow remarriage on 11 December 1881, founded the Rajahmundry Social Reform Association, and established girls' schools and destitute widows' shelters; 2) Literary Innovations: Authored the first Telugu novel 'Rajasekhara Charitramu' (1878), the first Telugu autobiography, the first modern Telugu drama, and the first comprehensive history of Andhra poets ('Andhra Kavula Charitramu'); 3) Journalistic Crusades: Founded the weekly journal 'Vivekavardhani' to expose administrative bribery, superstition, caste exploitation, and nautch girl traditions.",
        "examTip": "High-frequency question in APPSC history papers."
      }
    ],
    "testQuestions": [
      {
        "id": "ah-q1",
        "question": "At which historic coastal port did the Kakatiya ruler Ganapatideva issue the celebrated 'Abhaya Sasanam' (Charter of Security) guaranteeing safety and fair customs duties to foreign seaborne merchants?",
        "options": [
          "Ghantasala",
          "Kalingapatnam",
          "Motupalli",
          "Machilipatnam"
        ],
        "correctIndex": 2,
        "explanation": "In 1244 CE, Kakatiya Emperor Ganapatideva issued the Motupalli Pillar Inscription (Abhaya Sasanam) at the port of Motupalli (present-day Bapatla/Prakasam district). It abolished the barbaric customary practice of seizing foreign ships and cargo that suffered shipwreck, and codified transparent, fixed customs duties on import-export commodities.",
        "tag": "Kakatiya Administration"
      },
      {
        "id": "ah-q2",
        "question": "Who served as the first Chief Minister of Andhra State when it was inaugurated on 1 October 1953 with Kurnool as its capital?",
        "options": [
          "Neelam Sanjiva Reddy",
          "Tanguturi Prakasam Pantulu",
          "Burgula Ramakrishna Rao",
          "Bezawada Gopala Reddy"
        ],
        "correctIndex": 1,
        "explanation": "Tanguturi Prakasam Pantulu ('Andhra Kesari') was sworn in as the first Chief Minister of the newly carved Andhra State on 1 October 1953, with Kurnool as the capital and C.M. Trivedi as the first Governor. Neelam Sanjiva Reddy served as Deputy Chief Minister (and later became the first CM of unified Andhra Pradesh in 1956).",
        "tag": "Andhra State Formation"
      }
    ]
  },

  "telugu-akademi-telangana-history": {
    "id": "telugu-akademi-telangana-history",
    "title": "History & Culture of Telangana: Standard Reference (Telugu Akademi)",
    "titleTelugu": "తెలంగాణ సమగ్ర చరిత్ర & సంస్కృతి (తెలుగు అకాడమీ ప్రామాణిక గ్రంథం)",
    "issuingAuthority": "Telugu Akademi / Prof. V. Ramakrishna et al.",
    "dateOrYear": "Official Telugu Akademi Standard",
    "pages": "18 Comprehensive Chapters",
    "summary": "The premier academic standard text prescribed for TSPSC Group 1, Group 2, and competitive examinations on Telangana history and culture. Exhaustive coverage from Kotilingala (first Satavahana capital) and prehistoric rock art (Pandavula Gutta) to Ikshvakus, Vishnukundins, Badami Chalukyas, Vemulawada Chalukyas (Pampa, Somadeva Suri), Kakatiyas of Warangal, Musunuri Nayaks, Bahmani kingdom, Qutb Shahis of Golconda (Indo-Islamic syncretism, Charminar, Deccani Urdu, Kuchipudi patronage), and Asaf Jahi Nizams (1724–1948).",
    "pdfFilename": "telugu-akademi-telangana-history-standard.pdf",
    "sections": [
      {
        "numberOrCode": "Chapters 1–4",
        "title": "Pre-History, Kotilingala & Early Telangana Dynasties",
        "content": [
          "Pre-Historic Telangana: Paleolithic and Megalithic sites: Pandavula Gutta (Regonda, Jayashankar Bhupalpally - rock art paintings), Hastinapur, Dongatogu; Megalithic burial types: Cairn circles, Menhirs, Dolmens across Nalgonda and Mahabubnagar.",
          "Early Historic Horizon & Kotilingala: Excavations at Kotilingala (Peddapalli district on Godavari banks) yielding coins of pre-Satavahana kings (Gobhadra, Samagopa, Kamvaya) and founder king Simuka; Establishes Telangana as the cradle of the Satavahana Empire; Kondapur ('Terracotta capital' of Deccan excavated by Department of Archaeology).",
          "Post-Satavahana Formations: Ikshvakus; Vishnukundins (Keesaragutta temple complex in Medchal, worship of Ramalingeswara, copper plate inscriptions with lion seal); Mudigonda Chalukyas and Vemulawada Chalukyas (feudatories of Rashtrakutas; Arikesari II was the patron of Adikavi Pampa who composed Vikramarjuna Vijaya; Somadeva Suri authored Yasastilaka Champu; Rajarajeshwara Temple at Vemulawada)."
        ],
        "keyHighlight": "Kotilingala archaeological excavations proving the Telangana origins of the early Satavahanas."
      },
      {
        "numberOrCode": "Chapters 5–10",
        "title": "The Kakatiyas of Warangal & The Medieval Transition",
        "content": [
          "Imperial Kakatiyas (1000–1323 CE): Orugallu / Warangal fortress with circular stone and mud fortifications; Beta I, Prola II (declared independence from Western Chalukyas); Rudradeva (1163 CE Anumakonda inscription); Ganapatideva shifted capital from Anumakonda to Orugallu; Rani Rudrama Devi (1262–1289 CE: styled herself as 'Rudradeva Maharaja'; defeated Seuna Yadavas; celebrated by Venetian traveler Marco Polo); Prataparudra II (last ruler, captured by Ulugh Khan / Muhammad bin Tughlaq in 1323 CE).",
          "Socio-Economic & Irrigation Mastery: Chain-link tank system (Cheruvulu) connecting cascading natural reservoirs preventing drought: Ramappa Cheruvu, Pakhal, Laknavaram, Sanigaram, Bayyaram; Nayankara system; Temple Architecture: Ramappa Temple / Rudreswara (built 1213 CE by General Recharla Rudra; sandbox technology, floating bricks, UNESCO World Heritage Site 2021); Warangal Kirti Toranas.",
          "Post-Kakatiya Resistance & Musunuri Nayaks: Fall of Warangal (1323); Confederation of 75 Nayaks led by Musunuri Prolaya Nayak and Musunuri Kapaya Nayak (liberated Warangal from Delhi Sultanate in 1336 CE and ruled until Bahmani expansion); Padma Nayaks / Velama rulers of Rachakonda and Devarakonda (Singabhupala II, patron of poet Potana)."
        ],
        "keyHighlight": "Ramappa Temple's UNESCO World Heritage status (sandbox foundation + floating lightweight porous bricks) and the Kakatiya cascading tank network."
      },
      {
        "numberOrCode": "Chapters 11–18",
        "title": "Qutb Shahis of Golconda & Asaf Jahi Rule",
        "content": [
          "Qutb Shahi Dynasty (1518–1687 CE): Founded by Sultan Quli Qutb-ul-Mulk; Ibrahim Qutb Shah ('Malkibhrama' - passionate patron of Telugu literature e.g., Addanki Gangadhara, Kandukuru Rudrakavi, Ponneganti Telaganarya who wrote Yayati Charitra, the first Achha Telugu work); Muhammad Quli Qutb Shah (founded Hyderabad city in 1591 CE, constructed Charminar to commemorate eradication of plague, built Mecca Masjid; Urdu poet under pen-name 'Maani').",
          "Syncretic Culture of Golconda: Madanna and Akkanna as Prime Minister and Commander-in-Chief under Abul Hasan Tana Shah; Bhakta Ramadasu (Kancharla Gopanna, Tahsildar of Palvancha who built Bhadrachalam Rama temple and composed Dasarathi Satakam); Golconda diamond trade (Kollur mines: Koh-i-Noor, Hope Diamond); Fall of Golconda to Aurangzeb in 1687 CE after 8-month siege.",
          "Asaf Jahi Dynasty (1724–1948): Mir Qamar-ud-din Khan (Nizam-ul-Mulk, declared autonomy from Mughals in 1724); Mir Mahbub Ali Khan (6th Nizam: Beloved ruler, flood relief during 1908 Musi flood); Mir Osman Ali Khan (7th Nizam: Founded Osmania University in 1918 with Urdu medium, built High Court, Osmania General Hospital, State Bank of Hyderabad, Nizam Sugar Factory, Osman Sagar and Himayat Sagar reservoirs designed by Sir M. Visvesvaraya)."
        ],
        "keyHighlight": "Ibrahim Qutb Shah's patronage of Telugu literature ('Malkibhrama') and the 1591 founding of Hyderabad."
      }
    ],
    "queriesAndAnswers": [
      {
        "question": "What engineering innovations make the Kakatiya-era Ramappa Temple (Rudreswara Temple) a unique UNESCO World Heritage Site?",
        "answer": "Ramappa Temple (constructed in 1213 CE under Kakatiya general Recharla Rudra during Ganapatideva's reign) features two miraculous medieval civil engineering innovations: 1) Sandbox Technology: The entire temple foundation rests inside a deep subterranean pit filled with a special mixture of river sand, granite powder, jaggery, and karakkaya (black myrobalan), which acts as a giant seismic shock absorber, enabling the temple to survive massive earthquakes without structural damage; and 2) Floating Bricks: The superstructure (shikhara) was constructed using ultra-lightweight, porous, spongy clay bricks that possess a density lower than water, allowing them to literally float on water and drastically reducing the vertical dead load on the stone pillars.",
        "examTip": "One of the most essential cultural heritage topics for TSPSC Group 1 & 2."
      },
      {
        "question": "Why was the Qutb Shahi ruler Ibrahim Qutb Shah celebrated as 'Malkibhrama' in Telugu literature?",
        "answer": "Ibrahim Qutb Shah (reigned 1550–1580), who had spent seven years in exile at the Vijayanagara court of Aliya Rama Raya, developed an immense love for Telugu culture and language. Upon ascending the Golconda throne, he patronized Telugu scholars and poets extensively in his royal court. Telugu poets affectionately immortalized him in their verses as 'Malkibhrama'. During his reign, Addanki Gangadhara Kavi composed 'Uratiraghavapandaveeyam', Kandukuru Rudrakavi received village grants, and Ponneganti Telaganarya authored 'Yayati Charitra' (the celebrated first Achha Telugu poem without a single Sanskrit word), dedicating it to Ibrahim's minister Amin Khan.",
        "examTip": "Benchmark question on medieval Deccan communal syncretism."
      }
    ],
    "testQuestions": [
      {
        "id": "th-q1",
        "question": "At which archaeological site in Telangana were the oldest coins bearing the legend of King Simuka (the founder of the Satavahana dynasty) discovered?",
        "options": [
          "Kondapur",
          "Kotilingala",
          "Phanigiri",
          "Dhulikatta"
        ],
        "correctIndex": 1,
        "explanation": "Archaeological excavations conducted by Dr. P.V. Parabrahma Sastry at Kotilingala (in present-day Peddapalli district) on the banks of the Godavari River yielded coins of founder King Simuka along with other early Satavahana rulers (Satakarni I, Satavahana) and pre-Satavahana kings (Gobhadra, Samagopa), establishing Kotilingala as the early nuclear base of Satavahana power.",
        "tag": "Satavahana Archaeological Origins"
      },
      {
        "id": "th-q2",
        "question": "Which Telugu poet composed 'Yayati Charitra', renowned in literary history as the very first 'Achha Telugu' (pure Telugu without Sanskrit loans) kavya, under Qutb Shahi patronage?",
        "options": [
          "Addanki Gangadhara Kavi",
          "Kandukuru Rudrakavi",
          "Ponneganti Telaganarya",
          "Sarangu Tammaya"
        ],
        "correctIndex": 2,
        "explanation": "Ponneganti Telaganarya authored 'Yayati Charitra' in pure, chaste Telugu without borrowing Sanskrit loan words (Achha Telugu) during the reign of Ibrahim Qutb Shah, dedicating it to Amin Khan of Patancheru.",
        "tag": "Qutb Shahi Literature"
      }
    ]
  },

  "telangana-movement-state-formation-v-prakash": {
    "id": "telangana-movement-state-formation-v-prakash",
    "title": "Telangana Movement and State Formation: The Idea of Telangana (V. Prakash / Telugu Akademi)",
    "titleTelugu": "తెలంగాణ ఉద్యమం & రాష్ట్ర ఆవిర్భావం (వి. ప్రకాష్ / తెలుగు అకాడమీ ప్రామాణిక గ్రంథం)",
    "issuingAuthority": "V. Prakash / Telugu Akademi",
    "dateOrYear": "Official Telugu Akademi Reference",
    "pages": "25 Thematic Chapters",
    "summary": "The monumental, definitive reference treatise for Paper VI (Telangana Movement and State Formation) in TSPSC Group 1 and Group 2 examinations. Comprehensively analyzes: 1) The Idea of Telangana (Historical background, Hyderabad State, 1948 Police Action, 1952 Mulki Agitation, 1956 Gentlemen's Agreement & safeguards violation); 2) Mobilisational Phase (1969 Agitation, Osmania University student revolt, Telangana Praja Samithi, 8-Point Formula, 1972 Jai Andhra Agitation, 6-Point Formula, Article 371D, Presidential Order 1975, G.O. 610, Girglani Commission); 3) Towards Telangana State (2001 formation of TRS, mass mobilizations: Dhoom Dhaam, Vanta Varpu, Million March, Srikrishna Committee report, AP Reorganisation Act 2014, and 2 June 2014 Telangana Statehood).",
    "pdfFilename": "telangana-movement-v-prakash-standard.pdf",
    "sections": [
      {
        "numberOrCode": "Part I: Chapters 1–8",
        "title": "Historical Roots, 1948 Police Action & 1952 Mulki Rules",
        "content": [
          "Hyderabad State Under Nizams: Mulki Rules origin (1919 Farman issued by 7th Nizam Mir Osman Ali Khan defining Mulki as a person residing in Hyderabad State for at least 15 years; 1933 Nizam's Executive Council regulations protecting local employment).",
          "Operation Polo & Integration (September 1948): Majlis Ittehadul Muslimeen (MIM) and Razakar militia led by Kasim Razvi; Indian Army's 'Operation Polo' (Police Action) led by Major General J.N. Chaudhuri from 13–17 September 1948; Military government (1948–49) followed by M.K. Vellodi civil administration; First democratic elections in 1952 forming Burgula Ramakrishna Rao government.",
          "1952 Mulki Agitation ('Non-Mulki Go Back'): Sparked by influx of non-local officials from Madras and Bombay; Warangal student protests (headed by Buka Ramachandra Rao); City College incident (3 September 1952: police firing killing students including Shankar, Ramulu; Justice Jaganmohan Reddy Commission of Inquiry).",
          "States Reorganisation Commission (SRC / Fazal Ali Commission 1953–55): Members: Justice Fazal Ali (Chairman), K.M. Panikkar, H.N. Kunzru; Paragraphs 369–389 on Hyderabad State: Explicitly cautioned against immediate merger with Andhra; Recommended keeping Telangana as a separate State ('Hyderabad State') for 5 years, with merger contingent on 2/3rd majority vote in Telangana legislature after 1961 elections.",
          "Gentlemen's Agreement (20 February 1956): Signed at Hyderabad House, New Delhi; 14 signatories (8 from Andhra including Bezawada Gopala Reddy, Neelam Sanjiva Reddy, Alluri Satyanarayana Raju, G. Latchanna; 4 from Telangana: Burgula Ramakrishna Rao, K.V. Ranga Reddy, Marri Channa Reddy, J.V. Narsing Rao); Key safeguards: Regional Council for Telangana, 60:40 expenditure ratio, domicile rule of 12 years for Telangana employment, sale of agricultural lands only with Regional Committee consent, Deputy CM post from Telangana if CM from Andhra."
        ],
        "keyHighlight": "Fazal Ali Commission's cautionary recommendation (separate Telangana state for at least 5 years) and the 14-point Gentlemen's Agreement safeguards."
      },
      {
        "numberOrCode": "Part II: Chapters 9–16",
        "title": "1969 Agitation, Constitutional Crises & G.O. 610",
        "content": [
          "1969 Telangana Agitation: Genesis: Rampant violation of Gentlemen's Agreement safeguards, diversion of Telangana revenue surpluses (Kumar Lalit and Justice Bhargava committees), non-implementation of Mulki rules in Kothagudem Thermal Power Station (KTPS); Hunger strike by Ravindranath at Palvancha (January 1969); Osmania University Student Joint Action Committee (Mallikarjun, Venkataram Reddy); Formation of Telangana Praja Samithi (TPS - founded by Ananthula Madan Mohan, later led by Dr. Marri Channa Reddy); Over 369 students and youths martyred in police firings.",
          "Political Formulae & Crackdown: Prime Minister Indira Gandhi's 8-Point Formula (April 1969) and 5-Point Formula; TPS contested 1971 Lok Sabha elections winning 10 out of 14 parliamentary seats in Telangana; Merger of TPS into Congress in 1971; Supreme Court 5-judge bench judgment (October 1972) upholding validity of Mulki Rules.",
          "1972 Jai Andhra Movement & Article 371D: Agitation in Coastal Andhra against Supreme Court Mulki judgment; Demand for separate Andhra; Climaxed in 6-Point Formula (September 1973: uniform admission and recruitment preferences across 6 zones); 32nd Constitutional Amendment Act 1973 inserting Article 371D (Special provisions for Andhra Pradesh) and Article 371E (Central University at Hyderabad); Presidential Order of 1975 dividing State into 6 zones.",
          "G.O. 610 & Girglani Commission: Government Order 610 (issued 30 December 1985 by N.T. Rama Rao government to repatriate thousands of non-local employees illegally appointed in Telangana zones by 31 March 1986); Continuous non-implementation led Chandrababu Naidu government to appoint One-Man Commission of J.M. Girglani IAS (2001); Girglani Report documented widespread violations across 35 government departments."
        ],
        "keyHighlight": "Article 371D constitutional safeguards, the 6-Point Formula, and the G.O. 610 violations documented by the Girglani Commission."
      },
      {
        "numberOrCode": "Part III: Chapters 17–25",
        "title": "The Resurgence (2001–2014): Mass Movements to Statehood",
        "content": [
          "Birth of TRS & Cultural Renaissance: Kalvakuntla Chandrashekar Rao (KCR) resigned as Deputy Speaker of AP Assembly on 27 April 2001 to found Telangana Rashtra Samithi (TRS); Simha Garjana at Karimnagar; Cultural resurgence through folk songs, Dhoom Dhaam troupes (Rasamaayi Balakrishna, Gaddar, Goreti Venkanna), reviving Bathukamma, Bonalu, and Sammakka-Sarakka Jatara as symbols of self-respect.",
          "Fast Unto Death & Dec 9 Statement (2009): Supreme Court judgment on Hyderabad as 'Free Zone' for police recruitment (October 2009); KCR launched indefinite fast on 29 November 2009; Student agitations at Osmania and Kakatiya universities; Massive national political crisis leading to Union Home Minister P. Chidambaram's midnight declaration on 9 December 2009 that the process of forming Telangana State would be initiated.",
          "Forms of Mass Agitation (2010–2013): Formation of Telangana Joint Action Committee (TJAC - Prof. M. Kodandaram); Non-cooperation movement, Million March on Tank Bund (10 March 2011), Vanta-Varpu (cooking on highways), Sakala Janula Samme (General Strike lasting 42 days in September-October 2011, paralyzing coal production at Singareni and transport), Sagara Haram (human chain around Hussain Sagar).",
          "Justice Srikrishna Committee (2010) & AP Reorganisation Act 2014: Five-member committee evaluating 6 options (Option 5: Bifurcation with Hyderabad as capital of Telangana); CWC resolution on 30 July 2013; Cabinet approval of Andhra Pradesh Reorganisation Bill; Historic passage in Lok Sabha on 18 February 2014 and Rajya Sabha on 20 February 2014; Presidential assent on 1 March 2014; The appointed day: 2 June 2014, when Telangana emerged as the 29th State of the Indian Union with KCR as first Chief Minister."
        ],
        "keyHighlight": "Complete chronology from KCR's 2009 Fast Unto Death and Dec 9 declaration to the AP Reorganisation Act 2014 and 2 June 2014 Appointed Day."
      }
    ],
    "queriesAndAnswers": [
      {
        "question": "What was the significance of Government Order 610 (G.O. 610) issued in 1985, and what were the findings of the J.M. Girglani Commission regarding it?",
        "answer": "G.O. 610 was issued on 30 December 1985 by the N.T. Rama Rao government in response to intense representations by Telangana employees' unions that non-local candidates had been recruited into Zone V and Zone VI (Telangana districts) in violation of the Presidential Order of 1975. The order mandated the repatriation of all such non-local employees to their parent zones by 31 March 1986. Due to lack of political will, G.O. 610 remained completely unenforced for over 15 years. In 2001, the J.M. Girglani One-Man Commission was appointed to investigate. In its landmark final report (2004), the Commission revealed that over 50,000 to 70,000 non-locals had been illegally absorbed in Telangana cadre posts across 35 government departments, police, and educational institutions through flawed recruitment notifications, fake local certificates, and transfers, deeply intensifying the feeling of administrative betrayal among Telangana youth.",
        "examTip": "One of the most pivotal administrative case studies in Telangana Movement history."
      },
      {
        "question": "What were the primary recommendations of the States Reorganisation Commission (Fazal Ali Commission) concerning Hyderabad State in 1955?",
        "answer": "In its 1955 report (Paragraphs 369 to 389), the States Reorganisation Commission (chaired by Justice Fazal Ali, with members H.N. Kunzru and K.M. Panikkar) carefully examined the demand for 'Visalandhra' versus a separate Telangana State ('Hyderabad State') and made two farsighted recommendations: 1) It explicitly noted that the people of Telangana feared that in a unified Telugu state, they would be dominated by the economically and educationally more advanced Coastal Andhra populace; 2) It recommended that the Telangana districts of Hyderabad State should be constituted into a separate, distinct State ('Hyderabad State') for a probationary period of 5 years. Following the 1961 general elections, if the newly elected legislature of this separate state voted with a two-thirds majority in favor of merging with Andhra, only then should Visalandhra be created. However, political leaders bypassed this recommendation to force the 1956 merger under the Gentlemen's Agreement.",
        "examTip": "A frequent essay and 15-mark analytical question in TSPSC Mains Paper VI."
      }
    ],
    "testQuestions": [
      {
        "id": "tm-q1",
        "question": "On which historic date did the Union Home Minister P. Chidambaram make the midnight announcement that 'the process of forming the state of Telangana has been initiated'?",
        "options": [
          "29 November 2009",
          "9 December 2009",
          "23 December 2009",
          "30 July 2013"
        ],
        "correctIndex": 1,
        "explanation": "On 9 December 2009, following Kalvakuntla Chandrashekar Rao's 11-day fast-unto-death and massive student mobilizations across Osmania and Kakatiya universities, Union Home Minister P. Chidambaram formally announced that the Government of India had decided to initiate the process of forming a separate Telangana State.",
        "tag": "Telangana Movement Milestones"
      },
      {
        "id": "tm-q2",
        "question": "Which Constitutional Amendment Act inserted Article 371D into the Constitution of India, providing special provisions for equitable public employment and educational opportunities in Andhra Pradesh following the Six-Point Formula?",
        "options": [
          "28th Constitutional Amendment Act, 1972",
          "32nd Constitutional Amendment Act, 1973",
          "42nd Constitutional Amendment Act, 1976",
          "44th Constitutional Amendment Act, 1978"
        ],
        "correctIndex": 1,
        "explanation": "The 32nd Constitutional Amendment Act, 1973 was enacted to give effect to the Six-Point Formula agreed upon after the 1972 Jai Andhra agitation. It inserted Article 371D (authorizing the President to issue orders for organizing local cadres in civil posts and educational reservations) and Article 371E (establishment of a Central University in Hyderabad).",
        "tag": "Constitutional Safeguards"
      }
    ]
  },

  "ap-economy-sociology-telugu-akademi": {
    "id": "ap-economy-sociology-telugu-akademi",
    "title": "Andhra Pradesh Economy: Performance, Structure & Policies (Telugu Akademi)",
    "titleTelugu": "ఆంధ్రప్రదేశ్ ఆర్థిక వ్యవస్థ & సామాజిక స్వరూపం (తెలుగు అకాడమీ ప్రామాణిక గ్రంథం)",
    "issuingAuthority": "Telugu Akademi / Andhra Pradesh State Authors",
    "dateOrYear": "Official Telugu Akademi Standard",
    "pages": "18 Comprehensive Chapters",
    "summary": "The authoritative textbook for APPSC Group 1 Paper IV and Group 2 Paper II on Andhra Pradesh Economy. Covers post-bifurcation macroeconomic profile, reorganization from 13 to 26 districts (April 2022), agrarian structure and aquaculture dominance, Polavaram National Irrigation Project, industrial development corridors (VCIC, CBIC), maritime infrastructure (Ramayapatnam, Bhavanapadu, Machilipatnam ports), renewable energy (solar-wind hybrid parks), AP Reorganisation Act 2014 financial disputes (Special Category Status, revenue deficit grants), and welfare programs (Navaratnalu, Direct Benefit Transfers).",
    "pdfFilename": "ap-economy-telugu-akademi-standard.pdf",
    "sections": [
      {
        "numberOrCode": "Chapters 1–6",
        "title": "Macro Profile, District Restructuring & Agrarian Hub",
        "content": [
          "Macroeconomic Profile: Gross State Domestic Product (GSDP) growth trends; Sectoral composition: High share of Primary sector (~35-38%, driven by agriculture and horticulture), Secondary sector (~22-25%), and Tertiary sector (~38-42%).",
          "District Restructuring: Reorganization of AP from 13 to 26 districts on 4 April 2022 to facilitate decentralized district administration and align with parliamentary constituencies; Revenue divisions and mandal administrative reorganization.",
          "Agrarian Transformation & Aquaculture: Leading producer of fruits (mango, papaya, banana, sweet orange), chillies, oil palm, and tobacco; Aqua-capital of India: Godavari, Krishna, and Nellore districts driving over 70% of India's cultured shrimp (Vannamei) and inland fish production; Rythu Bharosa Kendras (RBKs) for farm-gate inputs, seed testing, and e-crop booking.",
          "Irrigation Infrastructure: Polavaram Irrigation Project (Indira Sagar on Godavari: National Project status under Section 90 of AP Reorganisation Act 2014; earth-cum-rock fill dam, spillway, right canal linking Godavari water to Krishna basin at Prakasam Barrage via Pattiseema lift); Handri-Neeva Sujala Sravanthi (HNSS) and Galeru-Nagari Sujala Sravanthi (GNSS) in Rayalaseema."
        ],
        "keyHighlight": "Andhra Pradesh as India's aquaculture capital (~70% of cultured shrimp exports) and the Polavaram Godavari-Krishna river link."
      },
      {
        "numberOrCode": "Chapters 7–18",
        "title": "Industrial Corridors, Ports, Energy & Fiscal Federalism",
        "content": [
          "Maritime Infrastructure & Ports: Second longest coastline in India (974 km); Major Port: Visakhapatnam Port Authority; Non-major operative ports: Gangavaram, Kakinada Deep Water, Krishnapatnam; Greenfield port development: Ramayapatnam, Machilipatnam, Mulapeta (Bhavanapadu); Port-led industrialization and Sagar Mala projects.",
          "Industrial Corridors & Manufacturing: Visakhapatnam-Chennai Industrial Corridor (VCIC: Asian Development Bank funded; nodes at Visakhapatnam, Chittoor, Srikalahasti, Donakonda); Chennai-Bengaluru Industrial Corridor (CBIC: Krishnapatnam node); Electronic Manufacturing Clusters (EMCs at Tirupati); Sri City multi-product Special Economic Zone.",
          "Fiscal Dilemmas & Reorganisation Act 2014: Section 46 (Special financial support for Rayalaseema and North Coastal Andhra backward districts); Section 47 (Division of assets and liabilities based on population ratio 58.32:41.68); Controversy over Special Category Status (SCS) vs Special Assistance Measure; Post-devolution revenue deficit grants recommended by 15th Finance Commission.",
          "Direct Benefit Transfers & Social Infrastructure: Nadu-Nedu school infrastructure upgradation, Amma Vodi, YSR Cheyutha, Aarogyasri universal health coverage; Micro-finance SHGs through YSR Aasara and Sunna Vaddi (zero interest loans)."
        ],
        "keyHighlight": "Visakhapatnam-Chennai Industrial Corridor (VCIC) development nodes and Section 46 backward region packages under the 2014 Act."
      }
    ],
    "queriesAndAnswers": [
      {
        "question": "What is the strategic significance of the Polavaram Multi-Purpose Irrigation Project for Andhra Pradesh under the AP Reorganisation Act, 2014?",
        "answer": "Under Section 90 of the Andhra Pradesh Reorganisation Act, 2014, the Polavaram Multi-Purpose Project (Indira Sagar) was declared a 'National Project' of the Government of India, making it the legal obligation of the Central Government to execute the project and fund all its irrigation components, land acquisition, and rehabilitation & resettlement (R&R) costs. Strategically, the project creates a live storage capacity of 194 TMC of Godavari waters to: 1) Irrigate 7.2 lakh acres across West Godavari, East Godavari, Krishna, and Visakhapatnam districts; 2) Divert 80 TMC of surplus Godavari water into the Krishna River upstream of Prakasam Barrage, thereby releasing upstream Krishna waters to the drought-prone Rayalaseema region; 3) Supply 23.4 TMC of drinking and industrial water to the Visakhapatnam metropolis and steel plant; and 4) Generate 960 MW of hydroelectric power.",
        "examTip": "Highest-priority infrastructure topic in APPSC exams."
      }
    ],
    "testQuestions": [
      {
        "id": "ape-q1",
        "question": "On 4 April 2022, the Government of Andhra Pradesh reorganized the administrative map of the state by restructuring its previous 13 districts into how many new districts?",
        "options": [
          "21 districts",
          "24 districts",
          "26 districts",
          "28 districts"
        ],
        "correctIndex": 2,
        "explanation": "On 4 April 2022, the Andhra Pradesh state government headed by Y.S. Jagan Mohan Reddy formally inaugurated 13 new districts, taking the total number of districts in the state from 13 to 26, largely aligning each new district with parliamentary constituency boundaries for administrative decentralization.",
        "tag": "AP District Restructuring"
      }
    ]
  },

  "telangana-economy-development-telugu-akademi": {
    "id": "telangana-economy-development-telugu-akademi",
    "title": "Telangana Economy: Structure, Growth & Policy Reforms (Telugu Akademi)",
    "titleTelugu": "తెలంగాణ ఆర్థిక వ్యవస్థ: స్వరూపం & విధానాలు (తెలుగు అకాడమీ ప్రామాణిక గ్రంథం)",
    "issuingAuthority": "Telugu Akademi / Telangana State Authors",
    "dateOrYear": "Official Telugu Akademi Standard",
    "pages": "16 Comprehensive Chapters",
    "summary": "The premier reference work for TSPSC Group 1 Paper V and Group 2 Paper III on Telangana Economy. Exhaustive analysis of State Gross Domestic Product (GSDP) and per capita income (consistently outperforming national averages), structural transformation of the economy, Hyderabad as a mega IT, aerospace, and life-sciences growth engine (Genome Valley, Pharma City), agrarian rejuvenation via Mission Kakatiya and Kaleshwaram Lift Irrigation Scheme, piped drinking water revolution via Mission Bhagiratha, farmer welfare models (Rythu Bandhu, Rythu Bima), social justice schemes (Dalit Bandhu), and the industrial facilitation revolution under TS-iPASS.",
    "pdfFilename": "telangana-economy-telugu-akademi-standard.pdf",
    "sections": [
      {
        "numberOrCode": "Chapters 1–5",
        "title": "Macroeconomic Growth, Per Capita Income & Hyderabad Engine",
        "content": [
          "Macro Performance & Sectoral Structure: High GSDP growth rate; Telangana per capita income ranking among the top large states in India (consistently exceeding ₹3 lakh at current prices); Sectoral shift: Dominant Services sector (~63-65%), Secondary/Industrial sector (~18-20%), and Primary/Agriculture sector (~16-18%).",
          "Hyderabad Growth Engine: Hyderabad contributes over 45% of Telangana's GSDP; Global IT hub (Cyberabad, HITEC City - major corporate campuses of Google, Microsoft, Amazon, Apple, Meta); IT exports crossing ₹2.4 lakh crore; Genome Valley (India's premier organized life-sciences cluster producing over 1/3rd of the world's vaccines including Covaxin); Aerospace & Defence Park at Adibatla.",
          "Industrial Innovation & TS-iPASS: Telangana State Industrial Project Approval and Self-Certification System (TS-iPASS Act 2014): Statutory right to clearances within 15–30 days with deemed approvals and penalties on defaulting officials; T-Hub (world's largest startup incubator), WE-Hub (women entrepreneurs), and TASK (Telangana Academy for Skill and Knowledge)."
        ],
        "keyHighlight": "TS-iPASS deemed approval timeline (15-30 days) and Genome Valley's status as global vaccine manufacturing hub."
      },
      {
        "numberOrCode": "Chapters 6–16",
        "title": "Irrigation Revolution, Agrarian Schemes & Social Justice",
        "content": [
          "Irrigation Architecture: Kaleshwaram Multi-Stage Lift Irrigation Project (KLIP on Godavari at Medigadda; lifts water over 500 meters across 7 links, 28 packages, utilizing giant 139 MW pumps e.g., Laxmi, Saraswati, Parvati barrages; Mallanna Sagar and Kondapochamma Sagar reservoirs); Mission Kakatiya: Restoring 46,531 cascading minor irrigation chain tanks across Telangana, desilting over 25 crore cubic meters of tank silt for field application.",
          "Drinking Water Revolution: Mission Bhagiratha: Piped treated drinking water to every rural and urban household (Har Ghar Jal) tapping surplus surface water from Krishna and Godavari reservoirs, eliminating endemic fluorosis in Nalgonda district.",
          "Farmer Welfare & Agriculture: Rythu Bandhu Scheme (pioneering agricultural investment support scheme providing direct benefit transfer of ₹10,000 per acre per year across Kharif and Rabi seasons, which served as the conceptual blueprint for PM-KISAN); Rythu Bima (₹5 lakh life insurance to nominee within 10 days of farmer death, state government paying 100% premium).",
          "Social Security & Financial Empowerment: Dalit Bandhu (one-time direct grant of ₹10 lakh per eligible Dalit family without bank linkage for enterprise creation); Aasara pensions for senior citizens, widows, beedi workers, weavers, and disabled; Kalyana Lakshmi / Shaadi Mubarak financial assistance for girl child marriages."
        ],
        "keyHighlight": "Mission Kakatiya tank chain rejuvenation and the Kaleshwaram Lift Irrigation Scheme engineering scale."
      }
    ],
    "queriesAndAnswers": [
      {
        "question": "What is the engineering mechanism and strategic objective of the Kaleshwaram Lift Irrigation Project (KLIP)?",
        "answer": "The Kaleshwaram Lift Irrigation Project (KLIP), constructed at the confluence of the Godavari and Pranhita rivers at Kaleshwaram, is the world's largest multi-stage lift irrigation system. Because the Telangana plateau sits at an elevation of 300 to 650 meters above sea level while the Godavari flows at around 100 meters, gravity irrigation is impossible. KLIP overcomes this topographic barrier by reversing the river flow: it harnesses 139 MW world-class pumping machines to lift 195 TMC of Godavari water in stages across 7 links, 28 packages, and over 1,800 km of canals and tunnels into massive storage reservoirs like Mallanna Sagar (50 TMC) and Kondapochamma Sagar (15 TMC). Strategic objectives include: 1) Irrigating over 37 lakh acres across 13 drought-prone Telangana districts; 2) Supplying 30 TMC of drinking water to the Greater Hyderabad municipal area; 3) Supplying 16 TMC for industrial corridors; and 4) Rejuvenating Godavari riverbeds for round-the-year water tables.",
        "examTip": "Central flagship topic for TSPSC Group 1 & 2 Economy and Geography."
      },
      {
        "question": "How did the TS-iPASS Act of 2014 revolutionize industrial clearances and the ease of doing business in Telangana?",
        "answer": "The Telangana State Industrial Project Approval and Self-Certification System (TS-iPASS) Act, 2014 replaced bureaucratic red tape with a single-window self-certification regime: 1) Statutory Right to Clearances: Clearances are legally guaranteed within 15 days for mega projects (investment > ₹200 crore) and within 30 days for other industrial units; 2) Self-Certification: Entrepreneurs submit a single common application form along with a self-declaration, allowing immediate project setup; 3) Deemed Approval: If any regulatory department fails to issue an approval or query within the stipulated timeline, the clearance is deemed to be approved automatically by law; 4) Penal Accountability: Officers delaying files beyond the statutory timeline without valid justification face disciplinary action and financial penalties.",
        "examTip": "High-yield topic for TSPSC industrial policy questions."
      }
    ],
    "testQuestions": [
      {
        "id": "te-q1",
        "question": "Which of the following pioneering farmer welfare schemes launched by the Government of Telangana provided direct investment support per acre per season and served as the conceptual model for the national PM-KISAN scheme?",
        "options": [
          "Rythu Bima",
          "Rythu Bandhu",
          "Dalit Bandhu",
          "Mission Kakatiya"
        ],
        "correctIndex": 1,
        "explanation": "Rythu Bandhu (Agriculture Investment Support Scheme), launched in May 2018 at Dharmarajpalli in Karimnagar, provided financial assistance directly into farmers' bank accounts (initially ₹4,000, later ₹5,000 per acre per season) to purchase seeds, fertilizers, and pesticides, eliminating moneylender dependence. Its massive success served as the blueprint for the Government of India's PM-KISAN scheme in 2019.",
        "tag": "Telangana Agricultural Welfare"
      }
    ]
  },

  "ap-telangana-geography-telugu-akademi": {
    "id": "ap-telangana-geography-telugu-akademi",
    "title": "Geography of Andhra Pradesh & Telangana: Regional Synthesis (Telugu Akademi)",
    "titleTelugu": "ఆంధ్రప్రదేశ్ & తెలంగాణ ప్రాంతీయ భౌగోళిక శాస్త్రం (తెలుగు అకాడమీ ప్రామాణిక గ్రంథం)",
    "issuingAuthority": "Telugu Akademi / Regional Geography Specialists",
    "dateOrYear": "Official Telugu Akademi Standard",
    "pages": "16 Comprehensive Chapters",
    "summary": "The comprehensive physical, economic, and human geography textbook for Telugu states preparation. Covers physiography (Deccan plateau, Coastal plains, Eastern Ghats - Nallamalas, Erramalas, Seshachalam hills), river basins (Krishna, Godavari, Penna, Tungabhadra, Musi, Manjira, Pranhita), climate regimes & rainfall variations (South-West vs North-East monsoon patterns), forest ecosystems and protected areas (Kawal, Amrabad Tiger Reserves, Papikonda National Park, Coringa Mangroves, Kolleru and Pulicat lakes), soil profiles (Black regur, Red soils, Laterite), and mineral belts (Singareni coal, Kadapa limestone, Mangampeta barites, KG Basin hydrocarbons).",
    "pdfFilename": "ap-telangana-geography-telugu-akademi.pdf",
    "sections": [
      {
        "numberOrCode": "Chapters 1–5",
        "title": "Physiography, Mountain Ranges & Geological Structure",
        "content": [
          "Physiographic Divisions: 1) Coastal Plains of AP: Extends 974 km from Srikakulam to Tirupati; Emergent shoreline with fertile deltas of Godavari and Krishna; 2) Eastern Ghats: Broken, discontinuous relict hill ranges; Sub-ranges: Velikondas, Palakondas, Seshachalam Hills (India's first Biosphere Reserve for Red Sanders - Pterocarpus santalinus), Nallamalas (dense dry-deciduous forest, Srisailam plateau), Erramalas; Highest peak: Jindhagada Peak (1690m in Araku valley, Visakhapatnam); 3) Telangana Plateau: Forms part of the Deccan semi-arid tableland; Divided into Godavari basin in north and Krishna basin in south.",
          "Geological Rock Systems: Dharwar schists (gold and iron ore in Anantapur and Khammam); Cuddapah System: Crescent-shaped sedimentary basin (limestone, shale, quartzite, Barytes at Mangampeta - world's largest single deposit); Gondwana Coalfields along the Godavari Pranhita valley (Singareni Collieries Company Limited - SCCL); Deccan Traps basalt covering Nizamabad and Adilabad; Krishna-Godavari (KG) offshore tertiary hydrocarbon basin."
        ],
        "keyHighlight": "Seshachalam Biosphere Reserve (endemic Red Sanders) and the Cuddapah Basin's world-class barytes deposits at Mangampeta."
      },
      {
        "numberOrCode": "Chapters 6–11",
        "title": "Drainage Systems, Monsoon Dynamics & Water Disputes",
        "content": [
          "The Godavari River Basin: Enters Telangana at Kandakurthi (Nizamabad); Major tributaries in Telangana: Manjira (right bank, Nizam Sagar and Singur dams), Pranhita (combined flow of Penganga, Wardha, Wainganga - largest tributary), Kadem, Manair (Lower Manair Dam); In AP: Enters near Papikonda hills, forms massive delta at Rajahmundry dividing into Gautami, Vasishta, and Vainateya branches before emptying into Bay of Bengal.",
          "The Krishna River Basin: Enters Telangana at Tangadi (Mahabaleshwar origin); Major tributaries: Bhima, Tungabhadra (joins near Alampur), Dindi, Musi (flows through Hyderabad, joins Krishna at Wadapally), Paleru, Munneru; Dams: Jurala, Srisailam (major hydroelectric storage), Nagarjuna Sagar (world's largest masonry dam), Pulichintala, and Prakasam Barrage (Vijayawada).",
          "Inter-State Water Disputes: Krishna Water Disputes Tribunal (KWDT-I: Bachawat Award 1976 allocating 800 TMC to unified AP; KWDT-II: Brijesh Kumar Tribunal); Post-bifurcation Godavari River Management Board (GRMB) and Krishna River Management Board (KRMB) established under Section 85 of the AP Reorganisation Act 2014 to regulate water and power sharing."
        ],
        "keyHighlight": "The confluence of Godavari tributaries and the statutory functions of KRMB and GRMB under the 2014 Bifurcation Act."
      },
      {
        "numberOrCode": "Chapters 12–16",
        "title": "Forests, Wildlife, Protected Areas & Mineral Economy",
        "content": [
          "Forest Distribution & Protected Areas: Amrabad Tiger Reserve (Nallamalas in Nagarkurnool and Nalgonda - largest tiger reserve in Telangana, indigenous Chenchu tribe habitat); Kawal Tiger Reserve (Jannaram, Mancherial); Papikonda National Park (Godavari gorge in AP); Coringa Wildlife Sanctuary (second largest mangrove formation in India after Sundarbans, fishing cat habitat); Wetlands: Kolleru Lake (freshwater lake between Godavari and Krishna deltas, Ramsar site) and Pulicat Lake (brackish water lagoon on AP-Tamil Nadu border, flamingo festival).",
          "Mineral Distribution: Singareni Collieries (coal in Adilabad, Mancherial, Peddapalli, Bhadradri Kothagudem); Barytes (Mangampeta in Kadapa); Bauxite (Visakhapatnam agency tracts); Limestone for cement manufacturing (Piduguralla, Macherla in Palnadu; Jaggayyapet in NTR; Miryalguda in Nalgonda); Uranium (Tummalapalle in Kadapa - one of the world's largest low-grade uranium deposits); Oil and Natural Gas (KG-D6 deepwater basin)."
        ],
        "keyHighlight": "Tummalapalle uranium reserves in Kadapa and Coringa mangroves as critical coastal ecosystems."
      }
    ],
    "queriesAndAnswers": [
      {
        "question": "What is the ecological significance of the Seshachalam Hills, and why is it designated as a Biosphere Reserve?",
        "answer": "Designated in 2010 as India's 16th Biosphere Reserve (located in the Southern Eastern Ghats across Tirupati and Kadapa districts), Seshachalam Hills is ecologically unique as the exclusive global endemic habitat of Red Sanders (Pterocarpus santalinus), a prized timber species highly protected under CITES Appendix II. The rugged sandstone gorge landscape also harbors the sacred Tirumala shrine and shelters rare fauna including the Slender Loris, Golden Gecko, Yellow-throated Bulbul, and Mouse Deer.",
        "examTip": "Key question for APPSC environment and geography questions."
      }
    ],
    "testQuestions": [
      {
        "id": "apt-q1",
        "question": "Which of the following is the highest peak in the Eastern Ghats, situated in the Araku Valley region of Andhra Pradesh at an altitude of approximately 1,690 meters?",
        "options": [
          "Mahendragiri",
          "Arma Konda / Jindhagada Peak",
          "Nallamala Peak",
          "Seshachalam Peak"
        ],
        "correctIndex": 1,
        "explanation": "Jindhagada Peak (also known as Arma Konda), located in the Araku Valley region of the Eastern Ghats in Visakhapatnam / Alluri Sitharama Raju district, is the highest mountain peak in the entire Eastern Ghats range, rising to an elevation of 1,690 meters (surpassing Mahendragiri in Odisha).",
        "tag": "Eastern Ghats Physiography"
      }
    ]
  }
}

code = """import { DocumentDetail } from '../types';

export const BATCH_D_DOCUMENT_DETAILS: Record<string, DocumentDetail> = """ + json.dumps(batch_d, indent=2, ensure_ascii=False) + ";\n"

with open("src/data/documentDetailsBatchD.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Generated src/data/documentDetailsBatchD.ts successfully with", len(batch_d), "state specialization works!")
