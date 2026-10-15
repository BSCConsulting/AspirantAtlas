// Dynamic Geographic and Civil Services Datasets for India, Telangana & Andhra Pradesh
export interface DistrictGeoItem {
  id: string;
  name: string;
  nameTelugu: string;
  hq: string;
  zone?: string;
  region?: string;
  areaKm2: number;
  populationApprox: string;
  coastlineKm?: number;
  majorRivers: string[];
  heritage: string;
  economy: string;
  agriculture: string;
  examNotes: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface StateGeoItem {
  id: string;
  code: string;
  name: string;
  nameTelugu: string;
  capital: string;
  psc: string;
  cadre: string;
  majorRivers: string[];
  coastline: string;
  economicPillars: string;
  keyExamTopics: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export const TELANGANA_DISTRICTS: DistrictGeoItem[] = [
  {
    "id": "hyderabad",
    "name": "Hyderabad",
    "nameTelugu": "\u0c39\u0c48\u0c26\u0c30\u0c3e\u0c2c\u0c3e\u0c26\u0c4d",
    "hq": "Hyderabad",
    "zone": "Charminar (Zone VI)",
    "areaKm2": 217,
    "populationApprox": "39.4 Lakhs",
    "majorRivers": [
      "Musi River"
    ],
    "heritage": "Charminar (built 1591 by Muhammad Quli Qutb Shah), Golconda Fort (acoustic engineering & diamond trade), Qutb Shahi Tombs, Salar Jung Museum, Chowmahalla Palace, Hussain Sagar with monolithic Buddha statue.",
    "economy": "Global IT Hub (HITEC City, Financial District), Genome Valley, Pharmaceutical exports (Dr. Reddy's, Aurobindo), Aerospace SEZ, Defense laboratories (DRDO, DRDL, DMRL, NFC, ECIL).",
    "agriculture": "Urban district with intensive floriculture, peri-urban logistics and cold storage hubs.",
    "examNotes": "State Capital. Origin of Qutb Shahi dynasty and Nizams of Asaf Jahi dynasty. Crucial for TSPSC Paper-II (Hyderabad State history) and Paper-VI (1952 Mulki agitation, 1969 agitation).",
    "x": 390,
    "y": 440,
    "w": 55,
    "h": 40
  },
  {
    "id": "ranga-reddy",
    "name": "Ranga Reddy",
    "nameTelugu": "\u0c30\u0c02\u0c17\u0c3e\u0c30\u0c46\u0c21\u0c4d\u0c21\u0c3f",
    "hq": "Shamshabad",
    "zone": "Charminar (Zone VI)",
    "areaKm2": 5031,
    "populationApprox": "24.4 Lakhs",
    "majorRivers": [
      "Musi",
      "Kagna"
    ],
    "heritage": "Chilkur Balaji Temple ('Visa Balaji'), Maheshwaram Shiva Temple, historic Sarais, Shamshabad heritage.",
    "economy": "Rajiv Gandhi International Airport (RGIA), Hardware Park, Aviation SEZ (Tata-Boeing Aerospace), Pharma City layout, Fab City.",
    "agriculture": "Vegetables, maize, floriculture, paddy, dairy farming catering to the Hyderabad metropolitan market.",
    "examNotes": "Named after renowned freedom fighter and former Deputy CM K.V. Ranga Reddy (signatory to 1956 Gentlemen's Agreement).",
    "x": 350,
    "y": 485,
    "w": 65,
    "h": 50
  },
  {
    "id": "medchal-malkajgiri",
    "name": "Medchal-Malkajgiri",
    "nameTelugu": "\u0c2e\u0c47\u0c21\u0c4d\u0c1a\u0c32\u0c4d-\u0c2e\u0c32\u0c4d\u0c15\u0c3e\u0c1c\u0c4d\u200c\u0c17\u0c3f\u0c30\u0c3f",
    "hq": "Shamirpet",
    "zone": "Charminar (Zone VI)",
    "areaKm2": 1084,
    "populationApprox": "24.6 Lakhs",
    "majorRivers": [
      "Musi tributary streams",
      "Shamirpet Lake"
    ],
    "heritage": "Keesaragutta Ramalingeswara Swamy Temple (Vishnukundin era brick temple architecture), Shamirpet lake deer park.",
    "economy": "Genome Valley (India's premier biotech cluster - Bharat Biotech Covaxin, Biological E), BITS Pilani Hyderabad, Cherlapally industrial estate.",
    "agriculture": "Dairy, horticulture, poultry, intensive seed research and development farms.",
    "examNotes": "Second most populous district in Telangana. Critical center of life sciences research in TS-iPASS policy.",
    "x": 420,
    "y": 405,
    "w": 65,
    "h": 45
  },
  {
    "id": "hanumakonda",
    "name": "Hanamkonda",
    "nameTelugu": "\u0c39\u0c28\u0c41\u0c2e\u0c15\u0c4a\u0c02\u0c21",
    "hq": "Hanamkonda",
    "zone": "Basara (Zone I) / Bhadradri (Zone III)",
    "areaKm2": 1305,
    "populationApprox": "10.8 Lakhs",
    "majorRivers": [
      "Kakatiya canal network"
    ],
    "heritage": "Thousand Pillar Temple (Rudreswara Temple, built 1163 CE by Rudradeva, star-shaped plinth, perforated stone screens), Padmakshi Temple (Jain heritage), Kakatiya University.",
    "economy": "Educational epicenter of northern Telangana, healthcare hub, textile trade, grain markets.",
    "agriculture": "Cotton, paddy, chilli, maize, pulses.",
    "examNotes": "Core capital of early Kakatiyas before shifting to Warangal Fort. Famous inscription of Rudradeva describing Kakatiya genealogy.",
    "x": 510,
    "y": 365,
    "w": 60,
    "h": 45
  },
  {
    "id": "warangal",
    "name": "Warangal",
    "nameTelugu": "\u0c35\u0c30\u0c02\u0c17\u0c32\u0c4d",
    "hq": "Warangal",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 1766,
    "populationApprox": "7.1 Lakhs",
    "majorRivers": [
      "Chalka streams",
      "Munneru basin"
    ],
    "heritage": "Warangal Fort (built by Ganapatideva & Rudrama Devi), 4 monumental Kakatiya Kala Thoranams (adopted in official Telangana State Emblem), Bhadrakali Temple (Chalukyan origin), Khush Mahal.",
    "economy": "Kakatiya Mega Textile Park, Warangal grain and chilli market, Azam Jahi Mills heritage, leather crafts.",
    "agriculture": "Paddy, cotton, chilli, turmeric, pulses.",
    "examNotes": "Epicentre of Kakatiya military architecture with triple concentric defensive walls (mud, stone, moat). Marco Polo visited Motupalli during Rani Rudrama Devi's reign.",
    "x": 535,
    "y": 415,
    "w": 55,
    "h": 45
  },
  {
    "id": "mulugu",
    "name": "Mulugu",
    "nameTelugu": "\u0c2e\u0c41\u0c32\u0c41\u0c17\u0c41",
    "hq": "Mulugu",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 3881,
    "populationApprox": "2.9 Lakhs",
    "majorRivers": [
      "Godavari River",
      "Dayyala Vagu"
    ],
    "heritage": "UNESCO World Heritage Site Ramappa Temple (Kakatiya Rudreswara Temple at Palampet, built 1213 CE by Recharla Rudra; floating lightweight bricks, sandbox foundation), Laknavaram Lake (suspension bridge), Eturnagaram Wildlife Sanctuary.",
    "economy": "Eco-tourism, forest products, tendu leaf collection, bamboo, agriculture.",
    "agriculture": "Paddy, chillies, cotton, maize.",
    "examNotes": "India's 39th UNESCO World Heritage site (Ramappa). Sammakka-Sarakka Central Tribal University sanctioned here.",
    "x": 600,
    "y": 340,
    "w": 65,
    "h": 55
  },
  {
    "id": "jayashankar-bhupalpally",
    "name": "Jayashankar Bhupalpally",
    "nameTelugu": "\u0c1c\u0c2f\u0c36\u0c02\u0c15\u0c30\u0c4d \u0c2d\u0c42\u0c2a\u0c3e\u0c32\u0c2a\u0c32\u0c4d\u0c32\u0c3f",
    "hq": "Bhupalpally",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 2293,
    "populationApprox": "4.1 Lakhs",
    "majorRivers": [
      "Godavari",
      "Manair"
    ],
    "heritage": "Medaram Sammakka-Sarakka Jatara (Asia's largest biennial tribal festival commemorating the revolt against Kakatiya tribute collection), Kaleshwaram Mukteswara Swamy Temple (unique twin lingas on single panavattam).",
    "economy": "Kaleshwaram Lift Irrigation Project (KLIP - Medigadda / Lakshmi Barrage), Singareni Collieries opencast coal mines, Kakatiya Thermal Power Station (KTPS Bhoopalpally).",
    "agriculture": "Paddy, cotton, chillies, pulses.",
    "examNotes": "Named after Prof. K. Jayashankar, ideologue of the Telangana Movement. Historic hub of Godavari water disputes and lift irrigation engineering.",
    "x": 560,
    "y": 290,
    "w": 65,
    "h": 50
  },
  {
    "id": "bhadradri-kothagudem",
    "name": "Bhadradri Kothagudem",
    "nameTelugu": "\u0c2d\u0c26\u0c4d\u0c30\u0c3e\u0c26\u0c4d\u0c30\u0c3f \u0c15\u0c4a\u0c24\u0c4d\u0c24\u0c17\u0c42\u0c21\u0c46\u0c02",
    "hq": "Kothagudem",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 7483,
    "populationApprox": "10.7 Lakhs",
    "majorRivers": [
      "Godavari",
      "Kinnerasani",
      "Sabari"
    ],
    "heritage": "Sri Sita Ramachandra Swamy Temple at Bhadrachalam (built 17th century by Kancharla Gopanna / Bhakta Ramadasu), Parnasala (epic Ramayana exile abode), Kinnerasani Sanctuary.",
    "economy": "Singareni Collieries Company Limited (SCCL Head Office), Kothagudem Thermal Power Station (KTPS Paloncha), ITC Paperboards at Sarapaka, heavy sponge iron.",
    "agriculture": "Paddy, cotton, oil palm, mango orchards, bamboo and forest timber.",
    "examNotes": "Largest district in Telangana by forest area (over 57% forest cover). Agency area under 5th Schedule of the Constitution. Tribal land transfer regulations (Act 1 of 70).",
    "x": 670,
    "y": 420,
    "w": 85,
    "h": 65
  },
  {
    "id": "khammam",
    "name": "Khammam",
    "nameTelugu": "\u0c16\u0c2e\u0c4d\u0c2e\u0c02",
    "hq": "Khammam",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 4361,
    "populationApprox": "14.0 Lakhs",
    "majorRivers": [
      "Munneru",
      "Akeru",
      "Paleru"
    ],
    "heritage": "1000-year-old Khammam Fort atop Stambhadri hill (built by Kakatiyas, expanded by Musunuri Nayakas and Qutb Shahis), Palair Lake, Wyra Reservoir.",
    "economy": "Granite cutting and polishing industries, large agricultural trading yard for chillies, cotton, and pulses, cement plants.",
    "agriculture": "Chillies (Asia's top market hub), cotton, paddy, sugarcane, mangoes.",
    "examNotes": "Historic venue of the Telangana Armed Struggle (1946\u201351) and border corridor connecting Telangana with Coastal Andhra.",
    "x": 595,
    "y": 485,
    "w": 65,
    "h": 55
  },
  {
    "id": "karimnagar",
    "name": "Karimnagar",
    "nameTelugu": "\u0c15\u0c30\u0c40\u0c02\u0c28\u0c17\u0c30\u0c4d",
    "hq": "Karimnagar",
    "zone": "Basara (Zone I)",
    "areaKm2": 2128,
    "populationApprox": "10.0 Lakhs",
    "majorRivers": [
      "Manair River (Lower Manair Dam)"
    ],
    "heritage": "Elgandal Fort (Kakatiya & Asaf Jahi bastion), Silver Filigree craft of Karimnagar (GI Tag / Tarkashi art), Ujwala Park, Manair Riverfront.",
    "economy": "Granite export industry (Tan Brown and Maple Red granites exported globally), poultry capital, rice milling hub, major educational center.",
    "agriculture": "Paddy, cotton, maize, groundnut, pulses.",
    "examNotes": "Birthplace of prominent leaders in the Telangana movement; Site where KCR began his historic fast unto death on 29 November 2009 at Alugunoor.",
    "x": 480,
    "y": 305,
    "w": 60,
    "h": 45
  },
  {
    "id": "peddapalli",
    "name": "Peddapalli",
    "nameTelugu": "\u0c2a\u0c46\u0c26\u0c4d\u0c26\u0c2a\u0c32\u0c4d\u0c32\u0c3f",
    "hq": "Peddapalli",
    "zone": "Basara (Zone I)",
    "areaKm2": 2236,
    "populationApprox": "7.9 Lakhs",
    "majorRivers": [
      "Godavari",
      "Manair"
    ],
    "heritage": "Dhulikatta Buddhist Stupa (Mahayana Buddhist site, 2nd century BCE, ayaka pillars, limestone carvings), Ramagiri Khilla fort.",
    "economy": "Power House of Telangana: NTPC 2600 MW Ramagundam Super Thermal Power Station, Ramagundam Fertilizers and Chemicals Ltd (RFCL), Singareni Collieries opencast coal mines.",
    "agriculture": "Paddy, cotton, chillies, maize.",
    "examNotes": "Industrial heartland of northern Telangana. High concentration of industrial trade unions and civil services questions on thermal power & coal linkage.",
    "x": 510,
    "y": 245,
    "w": 60,
    "h": 45
  },
  {
    "id": "jagtial",
    "name": "Jagtial",
    "nameTelugu": "\u0c1c\u0c17\u0c3f\u0c24\u0c4d\u0c2f\u0c3e\u0c32",
    "hq": "Jagtial",
    "zone": "Basara (Zone I)",
    "areaKm2": 2419,
    "populationApprox": "9.8 Lakhs",
    "majorRivers": [
      "Godavari"
    ],
    "heritage": "Kotilingala (first capital of the Satavahana dynasty, coins of King Simuka discovered here), Kondagattu Sri Anjaneya Swamy Temple, Jagtial Star Fort (designed by French engineers).",
    "economy": "Major mango export cluster (Banganapalli & Suvarnarekha), turmeric processing, beedi rolling, rice mills.",
    "agriculture": "Paddy, mango, turmeric, maize, cotton, sesamum.",
    "examNotes": "Crucial for ancient Telangana history: Kotilingala excavations confirmed Satavahanas were indigenous to the Deccan.",
    "x": 450,
    "y": 240,
    "w": 55,
    "h": 45
  },
  {
    "id": "rajanna-sircilla",
    "name": "Rajanna Sircilla",
    "nameTelugu": "\u0c30\u0c3e\u0c1c\u0c28\u0c4d\u0c28 \u0c38\u0c3f\u0c30\u0c3f\u0c38\u0c3f\u0c32\u0c4d\u0c32",
    "hq": "Sircilla",
    "zone": "Basara (Zone I)",
    "areaKm2": 2019,
    "populationApprox": "5.5 Lakhs",
    "majorRivers": [
      "Manair River",
      "Mid-Manair Dam"
    ],
    "heritage": "Sri Raja Rajeshwara Swamy Temple at Vemulawada ('Dakshina Kasi', patronized by Vemulawada Chalukyas who patronized Kannada poet Pampa), Baddi Pochamma temple.",
    "economy": "Textile Capital of Telangana: Over 35,000 powerlooms, Apparel Super Hub, Bathukamma saree production center, Mid-Manair reservoir tourism.",
    "agriculture": "Paddy, cotton, maize, groundnut.",
    "examNotes": "Vemulawada Chalukyas ruled as feudatories of Rashtrakutas. Landmark transformation from weaver distress to modern textile parks.",
    "x": 420,
    "y": 300,
    "w": 55,
    "h": 45
  },
  {
    "id": "nizamabad",
    "name": "Nizamabad",
    "nameTelugu": "\u0c28\u0c3f\u0c1c\u0c3e\u0c2e\u0c3e\u0c2c\u0c3e\u0c26\u0c4d",
    "hq": "Nizamabad",
    "zone": "Basara (Zone I)",
    "areaKm2": 4288,
    "populationApprox": "15.7 Lakhs",
    "majorRivers": [
      "Godavari",
      "Manjeera"
    ],
    "heritage": "Nizamabad Fort atop Quilla hill (built by Rashtrakuta kings, later expanded by Asaf Jahis), Sri Ram Sagar Project (SRSP Pochampadu), Alisagar deer park, Ashok Sagar.",
    "economy": "Major agricultural trade center, National Turmeric Board regional base, sugar mills, beedi manufacturing, agro-processing.",
    "agriculture": "Paddy, turmeric (highest yield in TS), sugarcane, soyabean, maize.",
    "examNotes": "SRSP Dam at Pochampadu is the lifeline of northern Telangana irrigation. High frequency TSPSC topic on turmeric farmer movements.",
    "x": 330,
    "y": 260,
    "w": 65,
    "h": 50
  },
  {
    "id": "kamareddy",
    "name": "Kamareddy",
    "nameTelugu": "\u0c15\u0c3e\u0c2e\u0c3e\u0c30\u0c46\u0c21\u0c4d\u0c21\u0c3f",
    "hq": "Kamareddy",
    "zone": "Basara (Zone I)",
    "areaKm2": 3652,
    "populationApprox": "9.7 Lakhs",
    "majorRivers": [
      "Manjeera"
    ],
    "heritage": "Domakonda Fort (magnificent Gadi architecture of Kamineni Samsthanam), Koulas Fort (12th century Rashtrakuta-Kakatiya border bastion), Pocharam reservoir.",
    "economy": "Nizam Sagar dam ayacut, sugar factories, rice mills, border trade with Maharashtra.",
    "agriculture": "Sugarcane, paddy, maize, pulses, soyabean.",
    "examNotes": "Nizam Sagar was built in 1923 by Nizam VII across Manjeera River as one of India's earliest modern irrigation projects.",
    "x": 335,
    "y": 335,
    "w": 55,
    "h": 50
  },
  {
    "id": "nirmal",
    "name": "Nirmal",
    "nameTelugu": "\u0c28\u0c3f\u0c30\u0c4d\u0c2e\u0c32\u0c4d",
    "hq": "Nirmal",
    "zone": "Basara (Zone I)",
    "areaKm2": 3845,
    "populationApprox": "7.1 Lakhs",
    "majorRivers": [
      "Godavari",
      "Kadam River"
    ],
    "heritage": "Gnana Saraswathi Temple at Basara (one of only two prominent Saraswathi temples in India, on Godavari banks; Akshara Abhyasam ritual), Nirmal Toys & Paintings (400-year-old GI Tag woodcraft using Poniki wood and lacquer), Kadam Dam.",
    "economy": "Handicrafts, teak wood forests, tourism, agro-processing.",
    "agriculture": "Cotton, paddy, soyabean, pulses.",
    "examNotes": "Basara Saraswathi temple origin linked to Sage Vyasa after Mahabharata war. Nirmal woodwork patronized during Kakatiya and Nizam eras.",
    "x": 395,
    "y": 185,
    "w": 65,
    "h": 45
  },
  {
    "id": "mancherial",
    "name": "Mancherial",
    "nameTelugu": "\u0c2e\u0c02\u0c1a\u0c3f\u0c30\u0c4d\u0c2f\u0c3e\u0c32",
    "hq": "Mancherial",
    "zone": "Basara (Zone I)",
    "areaKm2": 4056,
    "populationApprox": "8.1 Lakhs",
    "majorRivers": [
      "Godavari",
      "Pranahita"
    ],
    "heritage": "Gudem Gutta Sri Satyanarayana Swamy Temple, Kawal Tiger Reserve buffer zone, Pranahita river wildlife sanctuary.",
    "economy": "Singareni Collieries coal belt (Mandamarri, Bellampalli, Srirampur), Cement factories (Mancherial Cement Company, ACC), ceramic tile clusters.",
    "agriculture": "Cotton, paddy, chillies, pulses.",
    "examNotes": "Pranahita river is Godavari's largest tributary carrying over 34% of Godavari basin discharge. Coal mines established in British Nizam Guaranteed State Railway era.",
    "x": 485,
    "y": 180,
    "w": 65,
    "h": 45
  },
  {
    "id": "kumuram-bheem-asifabad",
    "name": "Kumuram Bheem Asifabad",
    "nameTelugu": "\u0c15\u0c41\u0c2e\u0c41\u0c30\u0c02 \u0c2d\u0c40\u0c2e\u0c4d \u0c06\u0c38\u0c3f\u0c2b\u0c3e\u0c2c\u0c3e\u0c26\u0c4d",
    "hq": "Asifabad",
    "zone": "Basara (Zone I)",
    "areaKm2": 4878,
    "populationApprox": "5.1 Lakhs",
    "majorRivers": [
      "Penganga",
      "Pranahita"
    ],
    "heritage": "Jodeghat memorial (where Gond leader Kumuram Bheem fought Nizam police forces and attained martyrdom in 1940; coined slogan 'Jal, Jangal, Jameen'), Kerameri ghats.",
    "economy": "Coal mines, cotton ginning, Sirpur Paper Mills at Kagaznagar (historic paper factory), forest timber.",
    "agriculture": "Cotton (premier quality long-staple cotton), soyabean, pulses.",
    "examNotes": "Epicentre of Gond tribal movement. Mandatory for TSPSC history questions on Kumuram Bheem, Jodeghat, and Christoph von F\u00fcrer-Haimendorf's anthropological studies.",
    "x": 510,
    "y": 115,
    "w": 70,
    "h": 50
  },
  {
    "id": "adilabad",
    "name": "Adilabad",
    "nameTelugu": "\u0c06\u0c26\u0c3f\u0c32\u0c3e\u0c2c\u0c3e\u0c26\u0c4d",
    "hq": "Adilabad",
    "zone": "Basara (Zone I)",
    "areaKm2": 4153,
    "populationApprox": "7.1 Lakhs",
    "majorRivers": [
      "Penganga"
    ],
    "heritage": "Kuntala Waterfall (Telangana's highest waterfall, 147 ft on Kadam river), Pochera Waterfall, Jainath Sri Lakshmi Narayana Swamy temple, Keslapur Nagoba Jatara (sacred Gond festival of the Mesram clan).",
    "economy": "White Gold City (major cotton trading center), Ceramic industries, soyabean processing plants.",
    "agriculture": "Cotton, soyabean, red gram, jowar.",
    "examNotes": "Nagoba Jatara at Keslapur is the second largest tribal gathering in Telangana after Medaram. Gateway to Maharashtra border.",
    "x": 420,
    "y": 115,
    "w": 70,
    "h": 50
  },
  {
    "id": "sangareddy",
    "name": "Sangareddy",
    "nameTelugu": "\u0c38\u0c02\u0c17\u0c3e\u0c30\u0c46\u0c21\u0c4d\u0c21\u0c3f",
    "hq": "Sangareddy",
    "zone": "Charminar (Zone VI)",
    "areaKm2": 4403,
    "populationApprox": "15.2 Lakhs",
    "majorRivers": [
      "Manjeera"
    ],
    "heritage": "Heritage Jail Museum at Sangareddy, historic stepwells of Kondapur, Manjeera Wildlife Sanctuary (habitat of vulnerable mugger crocodiles).",
    "economy": "Major manufacturing & education hub: IIT Hyderabad at Kandi, BHEL Ramachandrapuram, Ordnance Factory Medak (OFMK), Patancheru chemical and industrial zone.",
    "agriculture": "Sugarcane, cotton, paddy, vegetables, pulses.",
    "examNotes": "Kondapur archaeological site near Sangareddy yielded rich Satavahana coins, terracotta, and Roman bullae indicating ancient trade.",
    "x": 305,
    "y": 420,
    "w": 65,
    "h": 50
  },
  {
    "id": "medak",
    "name": "Medak",
    "nameTelugu": "\u0c2e\u0c46\u0c26\u0c15\u0c4d",
    "hq": "Medak",
    "zone": "Rajanna (Zone II)",
    "areaKm2": 2786,
    "populationApprox": "7.7 Lakhs",
    "majorRivers": [
      "Haldi",
      "Manjeera"
    ],
    "heritage": "Medak Cathedral (magnificent 175-ft tall gothic revival cathedral with stained glass windows depicting the life of Christ), 12th-century Medak Fort built by Kakatiya kings, Edupayala Vana Durga Bhavani Temple (where Manjeera river splits into 7 streams).",
    "economy": "Pocharam Wildlife Sanctuary, agro-processing, ordnance supplies, emerging ecotourism.",
    "agriculture": "Paddy, maize, cotton, sugarcane.",
    "examNotes": "Original Kakatiya name was 'Methuku Durgam' (Methuku meaning grain of cooked rice, referring to the fertile rice tracts).",
    "x": 370,
    "y": 355,
    "w": 55,
    "h": 45
  },
  {
    "id": "siddipet",
    "name": "Siddipet",
    "nameTelugu": "\u0c38\u0c3f\u0c26\u0c4d\u0c27\u0c3f\u0c2a\u0c47\u0c1f",
    "hq": "Siddipet",
    "zone": "Rajanna (Zone II)",
    "areaKm2": 3632,
    "populationApprox": "10.1 Lakhs",
    "majorRivers": [
      "Musi and Manair feeders",
      "Ranganayaka Sagar"
    ],
    "heritage": "Komuravelli Mallanna Temple (famous Oggu Katha folk performances and Patnam ritual for Lord Shiva), Wargal Sri Vidya Saraswathi temple, Gollabhama sarees (GI Tag handloom with milkmaid motifs).",
    "economy": "Ranganayaka Sagar and Mallanna Sagar reservoirs of KLIP, modern agricultural logistics, vegetable clusters, model green city infrastructure.",
    "agriculture": "Paddy, cotton, maize, vegetables.",
    "examNotes": "Political stronghold of the Telangana movement. Site of major lift irrigation balancing reservoirs (Mallanna Sagar 50 TMC).",
    "x": 435,
    "y": 360,
    "w": 60,
    "h": 45
  },
  {
    "id": "jangaon",
    "name": "Jangaon",
    "nameTelugu": "\u0c1c\u0c28\u0c17\u0c3e\u0c2e",
    "hq": "Jangaon",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 2188,
    "populationApprox": "5.6 Lakhs",
    "majorRivers": [
      "Akeru",
      "Paleru"
    ],
    "heritage": "Kolanupaka Jain Temple (ancient Kalyani Chalukyan temple featuring a 5-foot-tall jade statue of Bhagwan Mahavira), Someshwara Temple, Kadavendi village.",
    "economy": "Cotton ginning, brassware crafts of Pembarti (GI Tag sheet metal brass art), grain trading.",
    "agriculture": "Cotton, paddy, maize, chillies, pulses.",
    "examNotes": "Historic birthplace of the Telangana Peasant Armed Struggle: Doddi Komaraiah was shot dead here on 4 July 1946 by Visnur Deshmukh's men, igniting the armed struggle.",
    "x": 485,
    "y": 420,
    "w": 55,
    "h": 45
  },
  {
    "id": "yadadri-bhuvanagiri",
    "name": "Yadadri Bhuvanagiri",
    "nameTelugu": "\u0c2f\u0c3e\u0c26\u0c3e\u0c26\u0c4d\u0c30\u0c3f \u0c2d\u0c41\u0c35\u0c28\u0c17\u0c3f\u0c30\u0c3f",
    "hq": "Bhuvanagiri",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 3091,
    "populationApprox": "7.4 Lakhs",
    "majorRivers": [
      "Musi",
      "Bikkeru"
    ],
    "heritage": "Sri Lakshmi Narasimha Swamy Temple at Yadagirigutta (recently reconstructed into a monumental Dravidian stone temple), Bhuvanagiri Fort (monolithic isolated rock hillock fort built by Western Chalukya ruler Tribhuvanamalla Vikramaditya VI), Pochampally Ikat Silk (India's first GI Tag).",
    "economy": "Temple tourism, Pochampally handloom silk cluster (UNESCO Best Tourism Village), Pharma SEZ (Yadagirigutta corridor), stone masonry.",
    "agriculture": "Paddy, cotton, vegetables, oilseeds.",
    "examNotes": "Pochampally was the birthplace of Acharya Vinoba Bhave's Bhoodan Movement on 18 April 1951, when Vedire Ramachandra Reddy donated 100 acres.",
    "x": 455,
    "y": 465,
    "w": 60,
    "h": 45
  },
  {
    "id": "mahabubabad",
    "name": "Mahabubabad",
    "nameTelugu": "\u0c2e\u0c39\u0c2c\u0c42\u0c2c\u0c3e\u0c2c\u0c3e\u0c26\u0c4d",
    "hq": "Mahabubabad",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 2877,
    "populationApprox": "7.7 Lakhs",
    "majorRivers": [
      "Munneru",
      "Pakhal lake feeder"
    ],
    "heritage": "Kuravi Veerabhadra Swamy Temple, historic Bayyaram tank built by Kakatiya princess Mailamba (sister of Ganapatideva), Bayyaram epigraph.",
    "economy": "Bayyaram iron ore deposits, major agricultural market for chillies and cotton, tribal forest produce.",
    "agriculture": "Chillies, cotton, paddy, maize, mango orchards.",
    "examNotes": "Bayyaram inscription gives vital genealogical details of Kakatiya dynasty. Rich in high-grade hematite iron ore.",
    "x": 570,
    "y": 420,
    "w": 55,
    "h": 45
  },
  {
    "id": "suryapet",
    "name": "Suryapet",
    "nameTelugu": "\u0c38\u0c42\u0c30\u0c4d\u0c2f\u0c3e\u0c2a\u0c47\u0c1f",
    "hq": "Suryapet",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 3379,
    "populationApprox": "11.0 Lakhs",
    "majorRivers": [
      "Krishna",
      "Musi",
      "Pulichintala reservoir"
    ],
    "heritage": "Phanigiri Buddhist Site (important Mahayana Buddhist monastic complex with torana reliefs and carved octagonal pillars), Mattapalli Sri Lakshmi Narasimha Swamy Temple on Krishna river, Pillalamarri temple.",
    "economy": "Gateway of Telangana on Hyderabad-Vijayawada NH-65, Pulichintala hydro-power project, cement plants, massive grain markets.",
    "agriculture": "Paddy, cotton, chillies, sweet lime (Mosambi).",
    "examNotes": "Phanigiri excavations yielded unique limestone sculptures dating from Ikshvaku period. Strategic transit node between Telangana and AP.",
    "x": 515,
    "y": 515,
    "w": 60,
    "h": 50
  },
  {
    "id": "nalgonda",
    "name": "Nalgonda",
    "nameTelugu": "\u0c28\u0c32\u0c4d\u0c17\u0c4a\u0c02\u0c21",
    "hq": "Nalgonda",
    "zone": "Bhadradri (Zone III)",
    "areaKm2": 7122,
    "populationApprox": "16.2 Lakhs",
    "majorRivers": [
      "Krishna",
      "Musi",
      "Dindi"
    ],
    "heritage": "Nagarjuna Sagar Dam (completed 1967 across Krishna river, world's tallest masonry dam, Nagarjunakonda Buddhist island museum), Devarakonda Fort, Rachakonda Fort (Recharla Nayaka capital), Panagal Chaya Someswara Temple (unique perennial shadow on Shiva Linga).",
    "economy": "Nagarjuna Sagar left canal ayacut, major cement manufacturing belt (Wadapally), modern rice mills, dairy.",
    "agriculture": "Paddy, cotton, sweet orange (Mosambi), groundnut.",
    "examNotes": "Epicentre of the 1946\u201351 Telangana Armed Struggle against feudal Razakars and Dora atrocities. Historical epicenter of fluorosis water challenges and Mission Bhagiratha solutions.",
    "x": 450,
    "y": 530,
    "w": 65,
    "h": 55
  },
  {
    "id": "vikarabad",
    "name": "Vikarabad",
    "nameTelugu": "\u0c35\u0c3f\u0c15\u0c3e\u0c30\u0c3e\u0c2c\u0c3e\u0c26\u0c4d",
    "hq": "Vikarabad",
    "zone": "Jogulamba (Zone VII)",
    "areaKm2": 3386,
    "populationApprox": "9.3 Lakhs",
    "majorRivers": [
      "Musi River origin (Ananthagiri Hills)",
      "Kagna"
    ],
    "heritage": "Ananthagiri Hills & Sri Anantha Padmanabha Swamy Temple (cradle of Musi river, dense deciduous herbal forests), historic Vikarabad railway junction, Kotepally reservoir.",
    "economy": "Tandur Redgram / Pigeon pea (awarded GI Tag for unique soil-induced protein richness), Tandur blue and grey limestone slabs (flooring stones exported globally), cement plants.",
    "agriculture": "Tandur redgram, maize, cotton, jowar, pulses.",
    "examNotes": "Birthplace of Musi River. Tandur limestone and redgram are major economic assets frequently highlighted in TSPSC economy papers.",
    "x": 285,
    "y": 480,
    "w": 60,
    "h": 50
  },
  {
    "id": "mahabubnagar",
    "name": "Mahabubnagar",
    "nameTelugu": "\u0c2e\u0c39\u0c2c\u0c42\u0c2c\u0c4d\u200c\u0c28\u0c17\u0c30\u0c4d",
    "hq": "Mahabubnagar",
    "zone": "Jogulamba (Zone VII)",
    "areaKm2": 2738,
    "populationApprox": "9.2 Lakhs",
    "majorRivers": [
      "Krishna",
      "Dindi"
    ],
    "heritage": "Pillalamarri (800-year-old mammoth banyan tree spread over 4 acres), Manyamkonda Sri Venkateswara Swamy Temple ('Palamoor Tirupati'), Koilsagar Dam.",
    "economy": "Palamuru-Ranga Reddy Lift Irrigation Scheme (PRLIS), cotton ginning mills, castor seed trade, solar power parks.",
    "agriculture": "Cotton, castor, maize, paddy, pulses.",
    "examNotes": "Historical Palamuru region known for historic seasonal labor migrations, now revitalized by mega lift irrigation schemes and Mission Kakatiya.",
    "x": 340,
    "y": 560,
    "w": 60,
    "h": 50
  },
  {
    "id": "narayanpet",
    "name": "Narayanpet",
    "nameTelugu": "\u0c28\u0c3e\u0c30\u0c3e\u0c2f\u0c23\u0c2a\u0c47\u0c1f",
    "hq": "Narayanpet",
    "zone": "Jogulamba (Zone VII)",
    "areaKm2": 2336,
    "populationApprox": "5.7 Lakhs",
    "majorRivers": [
      "Krishna River",
      "Bhima River confluence at Tangadgi"
    ],
    "heritage": "Narayanpet Handloom Silk and Cotton Sarees (prestigious GI Tag, characterized by contrasting double-bordered zari motifs inspired by Maratha weavers who settled during Shivaji era).",
    "economy": "Handloom weaving clusters, border trade between Telangana and Karnataka, Krishna-Bhima basin agriculture.",
    "agriculture": "Cotton, redgram, jowar, groundnut, paddy.",
    "examNotes": "Confluence of Krishna and Bhima rivers occurs at Tangadgi in this district before entering Jurala dam reservoir.",
    "x": 285,
    "y": 555,
    "w": 55,
    "h": 45
  },
  {
    "id": "jogulamba-gadwal",
    "name": "Jogulamba Gadwal",
    "nameTelugu": "\u0c1c\u0c4b\u0c17\u0c41\u0c32\u0c3e\u0c02\u0c2c \u0c17\u0c26\u0c4d\u0c35\u0c3e\u0c32",
    "hq": "Gadwal",
    "zone": "Jogulamba (Zone VII)",
    "areaKm2": 2928,
    "populationApprox": "6.1 Lakhs",
    "majorRivers": [
      "Krishna",
      "Tungabhadra confluence"
    ],
    "heritage": "Alampur Jogulamba Temple (5th of the 18 Maha Shakti Peethas; Navabrahma temples displaying Badami Chalukyan sandstone architecture), Gadwal Fort (Raja Somanadri), Confluence of Krishna & Tungabhadra at Sangameswaram.",
    "economy": "Gadwal Handloom Sarees (GI Tag famous for pure silk and cotton mix with gold zari pallu), Priyadarshini Jurala Project (first dam on Krishna in Telangana), seed production.",
    "agriculture": "Cotton, groundnut, paddy, chillies, hybrid seeds.",
    "examNotes": "Alampur is a prime archaeological treasure trove reflecting early southern temple architectural evolution under Chalukyas.",
    "x": 330,
    "y": 640,
    "w": 65,
    "h": 45
  },
  {
    "id": "wanaparthy",
    "name": "Wanaparthy",
    "nameTelugu": "\u0c35\u0c28\u0c2a\u0c30\u0c4d\u0c24\u0c3f",
    "hq": "Wanaparthy",
    "zone": "Jogulamba (Zone VII)",
    "areaKm2": 2152,
    "populationApprox": "5.8 Lakhs",
    "majorRivers": [
      "Krishna backwaters"
    ],
    "heritage": "Wanaparthy Samsthanam Palace (ruled by Janumpally Rajas, major patrons of Telugu poets and music), Sarala Sagar Dam (unique automated siphons designed by California engineers).",
    "economy": "Peanut / groundnut trading hub, seed production, sheep rearing, agro-processing.",
    "agriculture": "Groundnut, paddy, castor, cotton, pulses.",
    "examNotes": "Sarala Sagar is the first dam in Asia built with automated siphon technology. Birthplace of educationist and diplomat Raja Rameshwar Rao.",
    "x": 375,
    "y": 605,
    "w": 55,
    "h": 45
  },
  {
    "id": "nagarkurnool",
    "name": "Nagarkurnool",
    "nameTelugu": "\u0c28\u0c3e\u0c17\u0c30\u0c4d\u200c\u0c15\u0c30\u0c4d\u0c28\u0c42\u0c32\u0c4d",
    "hq": "Nagarkurnool",
    "zone": "Jogulamba (Zone VII)",
    "areaKm2": 6545,
    "populationApprox": "8.6 Lakhs",
    "majorRivers": [
      "Krishna River",
      "Dindi"
    ],
    "heritage": "Amrabad Tiger Reserve (part of the Nallamala forest range, home to Chenchu indigenous hunter-gatherer tribe), Srisailam Left Bank underground hydro-power house, Uma Maheshwaram temple (Northern gateway of Srisailam), Mallelatheertham waterfall.",
    "economy": "Nallamala forest produce, hydro-electric power generation at Srisailam, Kalwakurthy Lift Irrigation Scheme (KLIS), tourism.",
    "agriculture": "Cotton, maize, paddy, castor, groundnut.",
    "examNotes": "Amrabad Tiger Reserve is India's second largest tiger reserve by core area. Critical habitat for vulnerable Chenchu Primitive Tribal Group (PVTG).",
    "x": 425,
    "y": 615,
    "w": 70,
    "h": 55
  }
];

export const ANDHRA_PRADESH_DISTRICTS: DistrictGeoItem[] = [
  {
    "id": "srikakulam",
    "name": "Srikakulam",
    "nameTelugu": "\u0c36\u0c4d\u0c30\u0c40\u0c15\u0c3e\u0c15\u0c41\u0c33\u0c02",
    "hq": "Srikakulam",
    "region": "Uttarandhra",
    "areaKm2": 5837,
    "populationApprox": "21.9 Lakhs",
    "coastlineKm": 193,
    "majorRivers": [
      "Nagavali",
      "Vamsadhara",
      "Suvarnamukhi"
    ],
    "heritage": "Arasavalli Sri Suryanarayana Swamy Temple (rare ancient Sun Temple where sun rays touch the deity's feet twice a year), Srikurmam Temple (world's only prominent temple dedicated to Kurma Avatara of Vishnu), Salihundam Buddhist Stupa hill, Kalingapatnam port.",
    "economy": "Bhavanapadu / Mulapeta Deep Water Port, Ponduru Khadi (superfine handspun cotton praised by Mahatma Gandhi, GI tag), Cashew processing, mineral beach sands (heavy minerals).",
    "agriculture": "Paddy, cashew, coconut, sugarcane, groundnut.",
    "examNotes": "Longest coastline among AP districts (193 km). Key center of Kalinga style temple architecture.",
    "x": 680,
    "y": 120,
    "w": 75,
    "h": 50
  },
  {
    "id": "parvathipuram-manyam",
    "name": "Parvathipuram Manyam",
    "nameTelugu": "\u0c2a\u0c3e\u0c30\u0c4d\u0c35\u0c24\u0c40\u0c2a\u0c41\u0c30\u0c02 \u0c2e\u0c28\u0c4d\u0c2f\u0c02",
    "hq": "Parvathipuram",
    "region": "Uttarandhra",
    "areaKm2": 3659,
    "populationApprox": "9.3 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Nagavali",
      "Jhanjhavati",
      "Vegavathi"
    ],
    "heritage": "Jhanjhavati Rubber Dam (Asia's first rubber dam across Jhanjhavati river), Thotapalli barrage, tribal weekly markets (Shandies), indigenous Savara and Jatapu culture.",
    "economy": "Forest products, cashew processing, mini hydel power, bamboo crafts, organic tribal turmeric.",
    "agriculture": "Paddy, cashew, mango, pulses, millets, turmeric.",
    "examNotes": "Formed out of tribal areas of erstwhile Vizianagaram and Srikakulam under 2022 reorganization. 5th Schedule area governance.",
    "x": 630,
    "y": 140,
    "w": 65,
    "h": 45
  },
  {
    "id": "vizianagaram",
    "name": "Vizianagaram",
    "nameTelugu": "\u0c35\u0c3f\u0c1c\u0c2f\u0c28\u0c17\u0c30\u0c02",
    "hq": "Vizianagaram",
    "region": "Uttarandhra",
    "areaKm2": 4122,
    "populationApprox": "19.3 Lakhs",
    "coastlineKm": 28,
    "majorRivers": [
      "Champavathi",
      "Gosthani"
    ],
    "heritage": "Historic Vizianagaram Fort with Moti Mahal and clock tower, Bobbili Veena (GI Tag musical instrument carved out of single jackwood logs), historic Battle of Bobbili (1757), Gurajada Apparao memorial (author of Kanyasulkam).",
    "economy": "Jute manufacturing mills, ferro-alloys industries, Bobbili industrial growth center, mango pulp export.",
    "agriculture": "Paddy, sugarcane, mango, groundnut, jute.",
    "examNotes": "Cultural beacon of northern Andhra; Pusapati royal dynasty patronized classical music and education (Maharajah's College).",
    "x": 625,
    "y": 195,
    "w": 65,
    "h": 45
  },
  {
    "id": "visakhapatnam",
    "name": "Visakhapatnam",
    "nameTelugu": "\u0c35\u0c3f\u0c36\u0c3e\u0c16\u0c2a\u0c1f\u0c4d\u0c28\u0c02",
    "hq": "Visakhapatnam",
    "region": "Uttarandhra",
    "areaKm2": 1048,
    "populationApprox": "19.5 Lakhs",
    "coastlineKm": 135,
    "majorRivers": [
      "Gosthani",
      "Meghadrigedda"
    ],
    "heritage": "Simhachalam Sri Varaha Lakshmi Narasimha Swamy Temple (Kalinga style architecture, sandalwood paste cover), Thotlakonda and Bavikonda Buddhist monastic hills (200 BCE), Submarine Museum (INS Kursura), TU-142 aircraft museum, Dolphin's Nose lighthouse.",
    "economy": "Economic Locomotive of AP: Visakhapatnam Port Trust & Gangavaram Port, Eastern Naval Command Headquarters, Rashtriya Ispat Nigam Ltd (Vizag Steel Plant / RINL), HPCL Petroleum Refinery, Hindustan Shipyard, Pharma City (Parawada), IT SEZ at Rushikonda.",
    "agriculture": "Urban district with maritime fisheries, coastal horticulture, floriculture.",
    "examNotes": "Proposed Executive Capital of AP. Natural deep-water harbor protected by Dolphin's Nose promontory.",
    "x": 580,
    "y": 240,
    "w": 65,
    "h": 45
  },
  {
    "id": "alluri-sitharama-raju",
    "name": "Alluri Sitharama Raju",
    "nameTelugu": "\u0c05\u0c32\u0c4d\u0c32\u0c42\u0c30\u0c3f \u0c38\u0c40\u0c24\u0c3e\u0c30\u0c3e\u0c2e\u0c30\u0c3e\u0c1c\u0c41",
    "hq": "Paderu",
    "region": "Uttarandhra",
    "areaKm2": 12251,
    "populationApprox": "9.5 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Godavari",
      "Sileru",
      "Machkund"
    ],
    "heritage": "Araku Valley (organic tribal Arabica coffee, Padmapuram botanical gardens), Borra Caves (million-year-old limestone karst formations at 1400m altitude), Lambasingi ('Kashmir of AP' with sub-zero winter temperatures), Alluri Sitarama Raju martyrdom sites (Chintapalli, Rajavommangi, Krishnadevipeta).",
    "economy": "Araku Coffee (GI Tag international brand), Upper Sileru and Machkund Hydro-electric Power Stations, eco-tourism, tribal forest honey, bauxite deposits.",
    "agriculture": "Coffee, pepper, ginger, turmeric, millets, rajma, pineapples.",
    "examNotes": "Named after freedom fighter Alluri Sitarama Raju who led the Rampa Rebellion (1922\u201324) against British Madras Forest Act 1882. Largest district in AP by area.",
    "x": 525,
    "y": 185,
    "w": 85,
    "h": 65
  },
  {
    "id": "anakapalli",
    "name": "Anakapalli",
    "nameTelugu": "\u0c05\u0c28\u0c15\u0c3e\u0c2a\u0c32\u0c4d\u0c32\u0c3f",
    "hq": "Anakapalli",
    "region": "Uttarandhra",
    "areaKm2": 4292,
    "populationApprox": "17.2 Lakhs",
    "coastlineKm": 64,
    "majorRivers": [
      "Sarada",
      "Varaha"
    ],
    "heritage": "Bojjannakonda & Lingalakonda (ancient rock-cut Buddhist heritage with monolith stupas and pillared halls, 4th\u20139th century CE), Kondakarla Ava (freshwater lake and bird sanctuary).",
    "economy": "Second largest Jaggery (Gur) market in India, Atchutapuram Special Economic Zone (manufacturing, textiles, electronics), Brandix India Apparel City (BIAC), Pudimadaka naval & industrial node.",
    "agriculture": "Sugarcane, paddy, groundnut, coconut, oil palm.",
    "examNotes": "Major industrial node under the Visakhapatnam-Chennai Industrial Corridor (VCIC).",
    "x": 520,
    "y": 255,
    "w": 65,
    "h": 45
  },
  {
    "id": "kakinada",
    "name": "Kakinada",
    "nameTelugu": "\u0c15\u0c3e\u0c15\u0c3f\u0c28\u0c3e\u0c21",
    "hq": "Kakinada",
    "region": "Coastal Andhra",
    "areaKm2": 3019,
    "populationApprox": "20.9 Lakhs",
    "coastlineKm": 103,
    "majorRivers": [
      "Godavari distributaries",
      "Yeleru"
    ],
    "heritage": "Coringa Wildlife Sanctuary (second largest mangrove formation in India, habitat of endangered fishing cat and long-billed vultures), Hope Island (natural sand spit formation protecting port), Kakinada Kaja (famous sweet delicacy), Draksharamam Bhimeswara Swamy Temple (Pancharama Kshetra / Dakshina Kasi).",
    "economy": "Fertilizer City of AP (NFCL, Coromandel International), Kakinada Deep Water Port and Anchorage Port, Natural Gas extraction and processing (KG Basin hub, Reliance & ONGC pipelines), Rice and aquaculture exports.",
    "agriculture": "Paddy, coconut, oil palm, aquaculture (shrimp hatcheries).",
    "examNotes": "Deepwater port shielded naturally by Hope Island sandspit. Draksharamam inscription provides key data on Eastern Chalukyas.",
    "x": 490,
    "y": 305,
    "w": 65,
    "h": 45
  },
  {
    "id": "east-godavari",
    "name": "East Godavari",
    "nameTelugu": "\u0c24\u0c42\u0c30\u0c4d\u0c2a\u0c41 \u0c17\u0c4b\u0c26\u0c3e\u0c35\u0c30\u0c3f",
    "hq": "Rajahmundry",
    "region": "Coastal Andhra",
    "areaKm2": 2561,
    "populationApprox": "18.3 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Godavari River"
    ],
    "heritage": "Sir Arthur Cotton's historic Dowleswaram Barrage (built 1852 transforming Godavari delta), Godavari Arch Bridge and Road-cum-Rail Bridge, Markandeya Temple, Kandukuri Veeresalingam Social Reform Association & Town Hall, Nannaya University.",
    "economy": "Commercial capital of Godavari delta, paper manufacturing (AP Paper Mills), ceramic and tile industries, agro-processing, tourism.",
    "agriculture": "Paddy (Granary of South India), oil palm, banana, sugarcane, mango.",
    "examNotes": "Rajahmundry is the cultural capital of Andhra; historic court of Eastern Chalukya king Rajaraja Narendra where Nannaya translated Mahabharata into Telugu.",
    "x": 445,
    "y": 275,
    "w": 60,
    "h": 45
  },
  {
    "id": "dr-br-ambedkar-konaseema",
    "name": "Dr. B.R. Ambedkar Konaseema",
    "nameTelugu": "\u0c21\u0c3e\u0c15\u0c4d\u0c1f\u0c30\u0c4d \u0c2c\u0c3f.\u0c06\u0c30\u0c4d. \u0c05\u0c02\u0c2c\u0c47\u0c26\u0c4d\u0c15\u0c30\u0c4d \u0c15\u0c4b\u0c28\u0c38\u0c40\u0c2e",
    "hq": "Amalapuram",
    "region": "Coastal Andhra",
    "areaKm2": 2083,
    "populationApprox": "17.1 Lakhs",
    "coastlineKm": 85,
    "majorRivers": [
      "Gautami Godavari",
      "Vasishta Godavari",
      "Vainateya"
    ],
    "heritage": "Antarvedi Sri Lakshmi Narasimha Swamy Temple (sacred confluence / Sagarasangamam where Vashishta Godavari joins the Bay of Bengal), Ainavilli Siddhi Vinayaka Temple, Ryali Jaganmohini Keshava Swamy Temple (unique dual gender idol).",
    "economy": "Lush delta economy: India's premier coconut belt, coastal aquaculture, natural gas wells, coir manufacturing, backwater eco-tourism.",
    "agriculture": "Paddy, coconut, cocoa, banana, black tiger shrimp.",
    "examNotes": "Known as 'God's Own Land in Andhra'. Formed as delta island flanked by the branches of the Godavari River.",
    "x": 470,
    "y": 350,
    "w": 60,
    "h": 45
  },
  {
    "id": "eluru",
    "name": "Eluru",
    "nameTelugu": "\u0c0f\u0c32\u0c42\u0c30\u0c41",
    "hq": "Eluru",
    "region": "Coastal Andhra",
    "areaKm2": 6679,
    "populationApprox": "20.7 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Tammileru",
      "Yerrakaluva",
      "Budameru"
    ],
    "heritage": "Dwaraka Tirumala ('Chinna Tirupati' - Sri Venkateswara Swamy Temple), Kolleru Lake (one of India's largest freshwater lakes, Ramsar site, Pelican and migratory bird haven), Guntupalli Buddhist rock-cut caves.",
    "economy": "Eluru Hand-knotted Carpets & Rugs (century-old Persian-style GI Tag craft), oil palm processing mills, rice milling, leather tanning.",
    "agriculture": "Paddy, oil palm, sugarcane, cocoa, tobacco.",
    "examNotes": "Kolleru lake conservation under Ramsar convention and Operation Kolleru flood management are frequent civil services topics.",
    "x": 390,
    "y": 305,
    "w": 65,
    "h": 50
  },
  {
    "id": "west-godavari",
    "name": "West Godavari",
    "nameTelugu": "\u0c2a\u0c36\u0c4d\u0c1a\u0c3f\u0c2e \u0c17\u0c4b\u0c26\u0c3e\u0c35\u0c30\u0c3f",
    "hq": "Bhimavaram",
    "region": "Coastal Andhra",
    "areaKm2": 2178,
    "populationApprox": "17.8 Lakhs",
    "coastlineKm": 20,
    "majorRivers": [
      "Godavari delta canals",
      "Upputeru"
    ],
    "heritage": "Somarama (Somarama temple at Bhimavaram) and Ksheerarama (Palakollu) - two sacred Pancharama Kshetras, Narsapur handmade crochet lace industry.",
    "economy": "Aqua Capital of India: Multimillion-dollar shrimp and fish hatcheries, processing plants, cold storage chains; Narsapur Lace Craft (GI Tag exported to Europe and USA).",
    "agriculture": "Paddy, freshwater fisheries, tiger prawn aquaculture, coconut.",
    "examNotes": "Highest per capita aquaculture income in Andhra Pradesh. Historic hub of peasant resistance during British salt satyagraha.",
    "x": 420,
    "y": 360,
    "w": 55,
    "h": 40
  },
  {
    "id": "ntr-district",
    "name": "NTR District",
    "nameTelugu": "\u0c0e\u0c28\u0c4d\u0c1f\u0c40\u0c06\u0c30\u0c4d \u0c1c\u0c3f\u0c32\u0c4d\u0c32\u0c3e",
    "hq": "Vijayawada",
    "region": "Coastal Andhra",
    "areaKm2": 3316,
    "populationApprox": "22.2 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Krishna River",
      "Budameru"
    ],
    "heritage": "Sri Durga Malleswara Swamy Varla Devasthanam on Indrakeeladri hill, Prakasam Barrage (regulates irrigation for 13 lakh acres in Krishna delta), Kondapalli Toys (world-famous lightweight Poniki wood toys, GI Tag), Kondapalli Fort (built by Prolaya Vema Reddi), Undavalli Caves (4-storied rock-cut cave temple with huge reclining Vishnu statue, Vishnukundin era).",
    "economy": "Commercial capital of Coastal Andhra, Vijayawada Thermal Power Station (VTPS Ibrahimpatnam), Autonagar (one of Asia's largest automobile body building hubs), railway and logistics junction.",
    "agriculture": "Paddy, sugarcane, mango, chillies, vegetables.",
    "examNotes": "Named after legendary cinema icon and former CM Nandamuri Taraka Rama Rao. Prakasham Barrage is a landmark civil engineering marvel.",
    "x": 355,
    "y": 350,
    "w": 60,
    "h": 45
  },
  {
    "id": "krishna",
    "name": "Krishna",
    "nameTelugu": "\u0c15\u0c43\u0c37\u0c4d\u0c23\u0c3e",
    "hq": "Machilipatnam",
    "region": "Coastal Andhra",
    "areaKm2": 3775,
    "populationApprox": "17.4 Lakhs",
    "coastlineKm": 111,
    "majorRivers": [
      "Krishna River delta"
    ],
    "heritage": "Machilipatnam Kalamkari (ancient vegetable-dye block printed textiles, GI Tag), Manginapudi beach with natural black soil, historic Panduranga Swamy temple at Chilakalapudi, Kuchipudi village (birthplace of classical dance Kuchipudi, Siddhendra Yogi heritage).",
    "economy": "Machilipatnam Deep Sea Port project, Bandar Laddu (GI Tag delicacy), gold imitation jewelry hub (Chilakalapudi), salt pans, marine fisheries.",
    "agriculture": "Paddy, black gram, sugarcane, coconut, shrimp farming.",
    "examNotes": "Machilipatnam was the first trading settlement of the British East India Company on the Coromandel coast (1611) and Golconda sultanate's chief port.",
    "x": 395,
    "y": 415,
    "w": 65,
    "h": 45
  },
  {
    "id": "palnadu",
    "name": "Palnadu",
    "nameTelugu": "\u0c2a\u0c32\u0c4d\u0c28\u0c3e\u0c21\u0c41",
    "hq": "Narasaraopet",
    "region": "Coastal Andhra",
    "areaKm2": 7298,
    "populationApprox": "20.4 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Krishna",
      "Chandra Vanka",
      "Nagarjuna Sagar Right Canal"
    ],
    "heritage": "Battlefield of Palnadu (Karempudi - battle of 1182 CE commemorated by heroic Palnati Vira Charitra), Kotappakonda Sri Trikoteswara Swamy Temple (famed for Prabhas festival on Maha Shivaratri), Gutikonda Bilam historic cave hermitage.",
    "economy": "Limestone capital of AP: Major cement manufacturing clusters (Macherla, Dachepalli), cotton ginning, granite polishing, Nagarjuna Sagar right canal irrigation.",
    "agriculture": "Cotton, chillies, paddy, tobacco, redgram.",
    "examNotes": "Palnati Yuddham is celebrated as the Iliad of Andhra. Nagarjuna Sagar Right Canal (Jawahar Canal) provides lifeblood irrigation.",
    "x": 310,
    "y": 405,
    "w": 65,
    "h": 50
  },
  {
    "id": "guntur",
    "name": "Guntur",
    "nameTelugu": "\u0c17\u0c41\u0c02\u0c1f\u0c42\u0c30\u0c41",
    "hq": "Guntur",
    "region": "Coastal Andhra",
    "areaKm2": 2443,
    "populationApprox": "20.9 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Krishna River canal system"
    ],
    "heritage": "Amaravati Buddhist Mahachaitya (world-renowned marble/limestone relief sculptures, Dhyana Buddha 125-ft statue, ancient Satavahana capital Dharanikota), Mangalagiri Panakala Lakshmi Narasimha Swamy Temple & handloom sarees (GI Tag), Kondaveedu Fort (seat of Reddi dynasty).",
    "economy": "Spice capital: Asia's largest Chilli Market Yard, Tobacco Board headquarters, textile spinning mills, educational hub, proposed capital region.",
    "agriculture": "Chillies (Guntur Sannam chilli, GI Tag), cotton, paddy, tobacco, turmeric.",
    "examNotes": "Amaravati was the eastern capital of Satavahanas. High-frequency topic for civil services architecture (Amaravati School of Art).",
    "x": 345,
    "y": 415,
    "w": 55,
    "h": 45
  },
  {
    "id": "bapatla",
    "name": "Bapatla",
    "nameTelugu": "\u0c2c\u0c3e\u0c2a\u0c1f\u0c4d\u0c32",
    "hq": "Bapatla",
    "region": "Coastal Andhra",
    "areaKm2": 3829,
    "populationApprox": "15.9 Lakhs",
    "coastlineKm": 72,
    "majorRivers": [
      "Krishna canals",
      "Gundlakamma"
    ],
    "heritage": "Bhavanarayana Swamy Temple in Bapatla (Chola and Kakatiya architecture), historic Agricultural College established 1945, Suryalanka Beach, Vodarevu port, Chirala handloom textiles.",
    "economy": "Chirala handloom cluster (Kuppadam sarees), coastal aquaculture, salt pans, Nizampatnam fishing harbor, tourism.",
    "agriculture": "Paddy, shrimp farming, groundnut, chillies, cashew.",
    "examNotes": "Venue of the historic first Andhra Mahasabha in 1913 under B.N. Sarma demanding separate Andhra province.",
    "x": 350,
    "y": 465,
    "w": 60,
    "h": 45
  },
  {
    "id": "prakasam",
    "name": "Prakasam",
    "nameTelugu": "\u0c2a\u0c4d\u0c30\u0c15\u0c3e\u0c36\u0c02",
    "hq": "Ongole",
    "region": "Coastal Andhra",
    "areaKm2": 14322,
    "populationApprox": "22.9 Lakhs",
    "coastlineKm": 102,
    "majorRivers": [
      "Gundlakamma",
      "Musi",
      "Paleru"
    ],
    "heritage": "Motupalli historic sea port (where Kakatiya king Ganapatideva issued the celebrated Abhaya Sasanam protecting foreign seaborne merchants), Bhairavakona rock-cut cave temples (Pallava-style monolithic shrines), Singarakonda temple.",
    "economy": "Black Galaxy Granite capital (Chimakurthy quarries exported to Europe, Japan, and USA), Ramayapatnam Sea Port project, Ongole cattle breeding centers, tobacco processing.",
    "agriculture": "Tobacco, chillies, cotton, redgram, aquaculture.",
    "examNotes": "Named after Andhra Kesari Tanguturi Prakasam Pantulu (first Chief Minister of Andhra State in 1953). Famous for world-class Ongole bull breed.",
    "x": 310,
    "y": 485,
    "w": 70,
    "h": 60
  },
  {
    "id": "sps-nellore",
    "name": "Sri Potti Sreeramulu Nellore",
    "nameTelugu": "\u0c36\u0c4d\u0c30\u0c40 \u0c2a\u0c4a\u0c1f\u0c4d\u0c1f\u0c3f \u0c36\u0c4d\u0c30\u0c40\u0c30\u0c3e\u0c2e\u0c41\u0c32\u0c41 \u0c28\u0c46\u0c32\u0c4d\u0c32\u0c42\u0c30\u0c41",
    "hq": "Nellore",
    "region": "Coastal Andhra",
    "areaKm2": 10441,
    "populationApprox": "24.7 Lakhs",
    "coastlineKm": 169,
    "majorRivers": [
      "Penna River",
      "Swarnamukhi"
    ],
    "heritage": "Sriharikota Satish Dhawan Space Centre (SDSC SHAR - India's spaceport where Chandrayaan, Mangalyaan & Gaganyaan missions launch), Ranganathaswamy Temple on Penna banks (Talpagiri temple), Udayagiri Fort, Pulicat Lake & Flamingo Bird Sanctuary, Rotiyaan ki Eid (Bara Shaheed Dargah festival).",
    "economy": "Krishnapatnam Deep Sea Port, ISRO Spaceport, Thermal power cluster (Krishnapatnam), Aquaculture (Shrimp Capital of India), mica and silica mining, rice milling (Mullasannalu).",
    "agriculture": "Paddy, tiger prawn aquaculture, groundnut, sugarcane, coconut.",
    "examNotes": "Named after Amarajeevi Potti Sreeramulu whose 58-day fast led to the creation of Andhra State in 1953. Vital for ISRO space missions.",
    "x": 280,
    "y": 575,
    "w": 70,
    "h": 60
  },
  {
    "id": "kurnool",
    "name": "Kurnool",
    "nameTelugu": "\u0c15\u0c30\u0c4d\u0c28\u0c42\u0c32\u0c41",
    "hq": "Kurnool",
    "region": "Rayalaseema",
    "areaKm2": 7980,
    "populationApprox": "22.7 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Tungabhadra",
      "Handri",
      "Hundri"
    ],
    "heritage": "Historic Capital of Andhra State (1953\u20131956), Konda Reddy Buruju fort, Oravakallu Rock Garden (igneous silica formations), Rollapadu Wildlife Sanctuary (habitat of critically endangered Great Indian Bustard), Mantralayam Sri Raghavendra Swamy Mutt on Tungabhadra banks.",
    "economy": "Ultra-Mega Solar Park at Sakunala (1000 MW, one of world's largest), cement plants, cotton ginning, sunflower oil mills, judicial hub.",
    "agriculture": "Cotton, groundnut, sunflower, paddy, jowar, pulses.",
    "examNotes": "First capital of linguistic Andhra State following 1937 Sri Bagh Pact. Home to Rollapadu Great Indian Bustard sanctuary.",
    "x": 160,
    "y": 425,
    "w": 70,
    "h": 50
  },
  {
    "id": "nandyal",
    "name": "Nandyal",
    "nameTelugu": "\u0c28\u0c02\u0c26\u0c4d\u0c2f\u0c3e\u0c32",
    "hq": "Nandyal",
    "region": "Rayalaseema",
    "areaKm2": 9682,
    "populationApprox": "17.9 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Kundu",
      "Krishna"
    ],
    "heritage": "Srisailam Sri Bhramaramba Mallikarjuna Swamy Temple (one of the 12 sacred Jyotirlingas and 18 Maha Shakti Peethas), Ahobilam (sacred Nava Narasimha Kshetras in deep Nallamala canyons), Mahanandi Temple (perennial crystal clear mineral spring), Yaganti Temple (Pushkarini and growing Nandi idol), Belum Caves (longest cave network in Indian plains, 3.2 km, stalactites and stalagmites).",
    "economy": "Srisailam Hydro-electric power dam, major cement factories, limestone mining, agro-processing, spiritual tourism.",
    "agriculture": "Paddy, sunflower, cotton, Bengal gram, chillies.",
    "examNotes": "Belum caves were inhabited by Buddhist and Jain monks. Srisailam is a cornerstone of Vijayanagara and Kakatiya temple architecture.",
    "x": 215,
    "y": 465,
    "w": 75,
    "h": 55
  },
  {
    "id": "ananthapuramu",
    "name": "Ananthapuramu",
    "nameTelugu": "\u0c05\u0c28\u0c02\u0c24\u0c2a\u0c41\u0c30\u0c02",
    "hq": "Ananthapuramu",
    "region": "Rayalaseema",
    "areaKm2": 10205,
    "populationApprox": "22.5 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Penna",
      "Chitravathi",
      "Chitravati"
    ],
    "heritage": "Lepakshi Veerabhadra Swamy Temple (Vijayanagara architectural masterpiece, Hanging Pillar, monolithic 27x15 ft Basavanna / Nandi, Lepakshi frescoes), Gooty Fort (magnificent hilltop citadel), Tadipatri Bugga Ramalingeswara Temple.",
    "economy": "Groundnut hub of India, Kia Motors automotive manufacturing plant at Erramanchi, solar and wind energy farms, granite cutting and polishing.",
    "agriculture": "Groundnut, sweet lime (Mosambi), pomegranate, cotton, millets.",
    "examNotes": "Lepakshi contains India's finest Vijayanagara fresco murals. Second driest district in India after Jaisalmer, requiring water conservation study.",
    "x": 130,
    "y": 510,
    "w": 75,
    "h": 60
  },
  {
    "id": "sri-sathya-sai",
    "name": "Sri Sathya Sai",
    "nameTelugu": "\u0c36\u0c4d\u0c30\u0c40 \u0c38\u0c24\u0c4d\u0c2f\u0c38\u0c3e\u0c2f\u0c3f",
    "hq": "Puttaparthi",
    "region": "Rayalaseema",
    "areaKm2": 7771,
    "populationApprox": "18.5 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Chitravathi",
      "Penna"
    ],
    "heritage": "Prasanthi Nilayam at Puttaparthi (global spiritual center established by Sri Sathya Sai Baba, airport, Super Specialty Hospital), Penukonda Fort (historic second capital of Vijayanagara Empire after battle of Talikota 1565), Thimmamma Marrimanu (giant banyan tree in Kadiri with Guinness World Record canopy), Kadiri Lakshmi Narasimha Swamy Temple.",
    "economy": "Spiritual tourism, automobile vendor ecosystem, sericulture (silk cocoons), solar energy, groundnut processing.",
    "agriculture": "Groundnut, silk sericulture, maize, sunflower, mango.",
    "examNotes": "Penukonda served as capital during the Aravidu dynasty under Tirumala Deva Raya after Vijayanagara fell in 1565.",
    "x": 140,
    "y": 585,
    "w": 70,
    "h": 55
  },
  {
    "id": "ysr-kadapa",
    "name": "YSR Kadapa",
    "nameTelugu": "\u0c35\u0c48\u0c0e\u0c38\u0c4d\u0c06\u0c30\u0c4d \u0c15\u0c21\u0c2a",
    "hq": "Kadapa",
    "region": "Rayalaseema",
    "areaKm2": 11228,
    "populationApprox": "20.7 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Penna",
      "Papagni",
      "Kundu"
    ],
    "heritage": "Gandikota Fort & Gorge ('Grand Canyon of India' carved by Penna river through Erramala hills, Ranganatha and Madhava temples, Jamia Masjid), Vontimitta Sri Kodandarama Swamy Temple (magnificent monolithic pillars, celebrated by French traveler Tavernier), Ameen Peer Dargah (Asthana-e-Magdoom Ilahi), Pushpagiri temple complex.",
    "economy": "Mineral Treasury of AP: Tummalapalle Uranium Mines (world's largest reserves identified by Atomic Minerals Directorate), Mangampet Barytes deposits (largest open-cast barytes mine in the world), cement hub (Yerraguntla), slab polishing.",
    "agriculture": "Banana, turmeric, sweet lime, sunflower, groundnut.",
    "examNotes": "Tummalapalle uranium reserves and Gandikota canyon are premier physical and economic geography questions in civil services.",
    "x": 200,
    "y": 545,
    "w": 75,
    "h": 55
  },
  {
    "id": "annamayya",
    "name": "Annamayya",
    "nameTelugu": "\u0c05\u0c28\u0c4d\u0c28\u0c2e\u0c2f\u0c4d\u0c2f",
    "hq": "Rayachoti",
    "region": "Rayalaseema",
    "areaKm2": 7954,
    "populationApprox": "17.0 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Bahuda",
      "Mandavya",
      "Cheyyeru"
    ],
    "heritage": "Tallapaka (birthplace of Pada Kavitha Pitamaha Sri Tallapaka Annamacharya, who composed 32,000 sankeertanas for Lord Venkateswara), Horsley Hills ('Ooty of Andhra' hill station at 1290m), Madanapalle (where Rabindranath Tagore translated Jana Gana Mana into English as 'The Morning Song of India' and Margaret Cousins set its musical score at Besant Theosophical College), Veerabhadra Temple in Rayachoti.",
    "economy": "Madanapalle Tomato Market (one of the largest tomato markets in Asia), sericulture silk yarn, mango pulp processing, ecotourism.",
    "agriculture": "Tomato, groundnut, mango, sugarcane, mulberry for sericulture.",
    "examNotes": "Madanapalle connection with the National Anthem translation and Theosophical movement (Jiddu Krishnamurti birthplace).",
    "x": 195,
    "y": 625,
    "w": 70,
    "h": 55
  },
  {
    "id": "chittoor",
    "name": "Chittoor",
    "nameTelugu": "\u0c1a\u0c3f\u0c24\u0c4d\u0c24\u0c42\u0c30\u0c41",
    "hq": "Chittoor",
    "region": "Rayalaseema",
    "areaKm2": 6855,
    "populationApprox": "18.7 Lakhs",
    "coastlineKm": 0,
    "majorRivers": [
      "Palar",
      "Koundinya",
      "Kushasthali"
    ],
    "heritage": "Kanipakam Sri Varasiddhi Vinayaka Temple (growing Ganesha idol in a freshwater well), Gurramkonda Fort (historic Golconda and Maratha fortress), Kaigal Waterfalls (Dumukuralla waterfalls), Kaundinya Wildlife Sanctuary (sole Asian elephant sanctuary in AP).",
    "economy": "Mango City: Totapuri mango processing and pulp export hub, dairy products (Vijaya and Amul hubs), granite processing, border logistics on Bangalore-Chennai expressway.",
    "agriculture": "Mango, sugarcane, groundnut, paddy, sericulture, dairy.",
    "examNotes": "Koundinya sanctuary is the only habitat for Asian elephants in Andhra Pradesh. Historic trilingual border culture.",
    "x": 205,
    "y": 690,
    "w": 65,
    "h": 50
  },
  {
    "id": "tirupati",
    "name": "Tirupati",
    "nameTelugu": "\u0c24\u0c3f\u0c30\u0c41\u0c2a\u0c24\u0c3f",
    "hq": "Tirupati",
    "region": "Rayalaseema",
    "areaKm2": 9142,
    "populationApprox": "22.0 Lakhs",
    "coastlineKm": 43,
    "majorRivers": [
      "Swarnamukhi",
      "Kalasthikona"
    ],
    "heritage": "Tirumala Sri Venkateswara Swamy Temple (world's most visited sacred pilgrimage shrine atop Seshachalam hills), Sri Kalahasteeswara Temple (famed Vayu Linga of the Pancha Bhoota Sthalas, Rahu-Ketu puja, Srikalahasti Kalamkari hand-drawn textiles, GI Tag), Chandragiri Fort (11th century Vijayanagara palace & Raja Mahal), Sri Venkateswara National Park, Talakona Waterfall (highest waterfall in AP, 270 ft).",
    "economy": "Spiritual tourism capital, Sri City Integrated Business City / SEZ (host to 200+ global Fortune 500 multinationals: Isuzu, Mondelez, Alstom, Daikin, Foxconn), Electronics Manufacturing Clusters (EMC), Tirupati International Airport.",
    "agriculture": "Paddy, groundnut, sugarcane, mango, betel leaves.",
    "examNotes": "Seshachalam Biosphere Reserve (habitat of endangered Red Sanders / Pterocarpus santalinus). Sri City is the premier industrial corridor node under CBIC.",
    "x": 270,
    "y": 665,
    "w": 75,
    "h": 55
  }
];

export const INDIA_STATES: StateGeoItem[] = [
  {
    "id": "IN-AP",
    "code": "AP",
    "name": "Andhra Pradesh",
    "nameTelugu": "\u0c06\u0c02\u0c27\u0c4d\u0c30\u0c2a\u0c4d\u0c30\u0c26\u0c47\u0c36\u0c4d",
    "capital": "Amaravati",
    "psc": "APPSC (Group 1 & 2)",
    "cadre": "Andhra Pradesh Cadre",
    "majorRivers": [
      "Godavari",
      "Krishna",
      "Penna",
      "Nagavali"
    ],
    "coastline": "974 km (2nd longest in India)",
    "economicPillars": "Aquaculture, Ports (Vizag, Kakinada, Krishnapatnam), Space (ISRO SHAR), Pharmaceuticals, Agriculture.",
    "keyExamTopics": "1953 Andhra State formation, 1937 Sri Bagh Pact, AP Reorganisation Act 2014, Polavaram National Irrigation Project, VCIC & CBIC corridors.",
    "x": 420,
    "y": 630,
    "w": 85,
    "h": 70
  },
  {
    "id": "IN-TG",
    "code": "TG",
    "name": "Telangana",
    "nameTelugu": "\u0c24\u0c46\u0c32\u0c02\u0c17\u0c3e\u0c23",
    "capital": "Hyderabad",
    "psc": "TGPSC / TSPSC (Group 1 & 2)",
    "cadre": "Telangana Cadre",
    "majorRivers": [
      "Godavari",
      "Krishna",
      "Manjeera",
      "Musi"
    ],
    "coastline": "Landlocked plateau state",
    "economicPillars": "Information Technology (HITEC City), Life Sciences & Vaccines (Genome Valley), Mega Lift Irrigation (KLIP), Minerals (Singareni Coal).",
    "keyExamTopics": "1948 Operation Polo, 1952 Mulki agitation, 1956 Gentlemen's Agreement, 1969 Telangana agitation, Article 371-D, G.O. Ms 610, Srikrishna Committee, AP Reorganisation Act 2014.",
    "x": 390,
    "y": 550,
    "w": 80,
    "h": 65
  },
  {
    "id": "IN-TN",
    "code": "TN",
    "name": "Tamil Nadu",
    "nameTelugu": "\u0c24\u0c2e\u0c3f\u0c33\u0c28\u0c3e\u0c21\u0c41",
    "capital": "Chennai",
    "psc": "TNPSC",
    "cadre": "Tamil Nadu Cadre",
    "majorRivers": [
      "Kaveri",
      "Vaigai",
      "Palar",
      "Thamirabarani"
    ],
    "coastline": "1076 km",
    "economicPillars": "Automobile manufacturing ('Detroit of Asia'), Textiles, Electronics, Wind energy, Ports (Chennai, Ennore, Tuticorin).",
    "keyExamTopics": "Sangam literature, Chola local self-governance (Uttiramerur Kudavolai), Dravidian movement, Justice Party, Kaveri water dispute.",
    "x": 400,
    "y": 730,
    "w": 75,
    "h": 85
  },
  {
    "id": "IN-KA",
    "code": "KA",
    "name": "Karnataka",
    "nameTelugu": "\u0c15\u0c30\u0c4d\u0c23\u0c3e\u0c1f\u0c15",
    "capital": "Bengaluru",
    "psc": "KPSC",
    "cadre": "Karnataka Cadre",
    "majorRivers": [
      "Krishna",
      "Kaveri",
      "Tungabhadra",
      "Sharavathi"
    ],
    "coastline": "320 km",
    "economicPillars": "Silicon Valley of India, Aerospace, Coffee plantations, Biotech, Iron ore mining, Silk sericulture.",
    "keyExamTopics": "Vijayanagara Empire (Hampi), Hoysala temple architecture, Badami Chalukyas, Western Ghats ecology, Jog Falls.",
    "x": 310,
    "y": 610,
    "w": 85,
    "h": 85
  },
  {
    "id": "IN-KL",
    "code": "KL",
    "name": "Kerala",
    "nameTelugu": "\u0c15\u0c47\u0c30\u0c33",
    "capital": "Thiruvananthapuram",
    "psc": "Kerala PSC",
    "cadre": "Kerala Cadre",
    "majorRivers": [
      "Periyar",
      "Bharathappuzha",
      "Pamba"
    ],
    "coastline": "580 km",
    "economicPillars": "Spice trade, Tourism, Remittance economy, Maritime ports (Cochin Port, Vizhinjam transshipment), Rubber.",
    "keyExamTopics": "Kerala Model of Development (high HDI), 1921 Malabar Rebellion, Temple Entry Proclamations, Western Ghats conservation (Gadgil & Kasturirangan).",
    "x": 330,
    "y": 740,
    "w": 50,
    "h": 80
  },
  {
    "id": "IN-MH",
    "code": "MH",
    "name": "Maharashtra",
    "nameTelugu": "\u0c2e\u0c39\u0c3e\u0c30\u0c3e\u0c37\u0c4d\u0c1f\u0c4d\u0c30",
    "capital": "Mumbai",
    "psc": "MPSC",
    "cadre": "Maharashtra Cadre",
    "majorRivers": [
      "Godavari",
      "Krishna",
      "Tapi",
      "Bhima"
    ],
    "coastline": "720 km",
    "economicPillars": "Financial Capital of India (RBI, BSE, NSE), Automobiles, Cotton textiles, Petrochemicals, Sugarcane co-operatives.",
    "keyExamTopics": "Maratha Empire & Chhatrapati Shivaji, Ashta Pradhan system, Ajanta and Ellora caves, 1960 Samyukta Maharashtra Movement.",
    "x": 300,
    "y": 480,
    "w": 105,
    "h": 85
  },
  {
    "id": "IN-GJ",
    "code": "GJ",
    "name": "Gujarat",
    "nameTelugu": "\u0c17\u0c41\u0c1c\u0c30\u0c3e\u0c24\u0c4d",
    "capital": "Gandhinagar",
    "psc": "GPSC",
    "cadre": "Gujarat Cadre",
    "majorRivers": [
      "Narmada",
      "Tapi",
      "Sabarmati",
      "Mahi"
    ],
    "coastline": "1600 km (Longest in India)",
    "economicPillars": "Petroleum refining (Jamnagar), Diamonds, Chemicals, Textiles, Ports (Deendayal Kandla, Mundra), Dairy (Amul).",
    "keyExamTopics": "Indus Valley sites (Lothal, Dholavira), Sardar Sarovar Project, Dandi March 1930, Gir Asiatic Lion conservation.",
    "x": 200,
    "y": 410,
    "w": 95,
    "h": 80
  },
  {
    "id": "IN-RJ",
    "code": "RJ",
    "name": "Rajasthan",
    "nameTelugu": "\u0c30\u0c3e\u0c1c\u0c38\u0c4d\u0c25\u0c3e\u0c28\u0c4d",
    "capital": "Jaipur",
    "psc": "RPSC",
    "cadre": "Rajasthan Cadre",
    "majorRivers": [
      "Chambal",
      "Banas",
      "Luni"
    ],
    "coastline": "Landlocked (Thar Desert)",
    "economicPillars": "Solar energy (Bhadla Solar Park), Marble and minerals, Tourism, Handloom textiles, Dairy.",
    "keyExamTopics": "Rajput dynasties, Hill Forts of Rajasthan, Kalibangan Harappan site, Indira Gandhi Canal, Aravalli ecological buffer.",
    "x": 240,
    "y": 300,
    "w": 100,
    "h": 95
  },
  {
    "id": "IN-MP",
    "code": "MP",
    "name": "Madhya Pradesh",
    "nameTelugu": "\u0c2e\u0c27\u0c4d\u0c2f\u0c2a\u0c4d\u0c30\u0c26\u0c47\u0c36\u0c4d",
    "capital": "Bhopal",
    "psc": "MPPSC",
    "cadre": "Madhya Pradesh Cadre",
    "majorRivers": [
      "Narmada",
      "Chambal",
      "Betwa",
      "Son"
    ],
    "coastline": "Heart of India (Landlocked)",
    "economicPillars": "Soyabean, Wheat ('Sharbati'), Diamonds (Panna), Forest timber, Tiger reserves (Kanha, Bandhavgarh).",
    "keyExamTopics": "Bhimbetka rock shelters, Sanchi Stupa, Khajuraho temples, Ken-Betwa river interlinking project.",
    "x": 360,
    "y": 390,
    "w": 115,
    "h": 85
  },
  {
    "id": "IN-UP",
    "code": "UP",
    "name": "Uttar Pradesh",
    "nameTelugu": "\u0c09\u0c24\u0c4d\u0c24\u0c30\u0c2a\u0c4d\u0c30\u0c26\u0c47\u0c36\u0c4d",
    "capital": "Lucknow",
    "psc": "UPPSC / UPPCS",
    "cadre": "Uttar Pradesh Cadre",
    "majorRivers": [
      "Ganga",
      "Yamuna",
      "Ghaghara",
      "Gomti"
    ],
    "coastline": "Gangetic Plain",
    "economicPillars": "Agriculture (Wheat, Sugarcane, Dairy), IT & Manufacturing (Noida), Leather (Kanpur), Handicrafts (Varanasi Silk, Moradabad Brass).",
    "keyExamTopics": "1857 Revolt epicenters (Meerut, Jhansi, Kanpur, Awadh), Mahajanapadas, Mughal architecture (Taj Mahal, Fatehpur Sikri), Namami Gange.",
    "x": 420,
    "y": 280,
    "w": 110,
    "h": 80
  },
  {
    "id": "IN-BR",
    "code": "BR",
    "name": "Bihar",
    "nameTelugu": "\u0c2c\u0c40\u0c39\u0c3e\u0c30\u0c4d",
    "capital": "Patna",
    "psc": "BPSC",
    "cadre": "Bihar Cadre",
    "majorRivers": [
      "Ganga",
      "Kosi ('Sorrow of Bihar')",
      "Gandak",
      "Son"
    ],
    "coastline": "Middle Gangetic Plain",
    "economicPillars": "Agriculture (Makhana, Litchi, Maize), Handloom (Bhagalpur silk), Tourism (Buddhist Circuit).",
    "keyExamTopics": "Magadha Empire, Mauryan administrative zenith (Pataliputra), Nalanda and Vikramashila universities, Champaran Satyagraha 1917.",
    "x": 550,
    "y": 310,
    "w": 80,
    "h": 65
  },
  {
    "id": "IN-WB",
    "code": "WB",
    "name": "West Bengal",
    "nameTelugu": "\u0c2a\u0c36\u0c4d\u0c1a\u0c3f\u0c2e \u0c2c\u0c46\u0c02\u0c17\u0c3e\u0c32\u0c4d",
    "capital": "Kolkata",
    "psc": "WBPSC",
    "cadre": "West Bengal Cadre",
    "majorRivers": [
      "Ganga / Hooghly",
      "Teesta",
      "Damodar ('Sorrow of Bengal')"
    ],
    "coastline": "157 km (Sundarbans)",
    "economicPillars": "Jute, Rice, Darjeeling Tea, Haldia Port, Leather, Heavy engineering, IT.",
    "keyExamTopics": "Battle of Plassey (1757) and Buxar (1764), Bengal Renaissance (Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar), Sundarbans mangrove delta, Partition of Bengal 1905.",
    "x": 620,
    "y": 350,
    "w": 70,
    "h": 90
  },
  {
    "id": "IN-OD",
    "code": "OD",
    "name": "Odisha",
    "nameTelugu": "\u0c12\u0c21\u0c3f\u0c36\u0c3e",
    "capital": "Bhubaneswar",
    "psc": "OPSC",
    "cadre": "Odisha Cadre",
    "majorRivers": [
      "Mahanadi",
      "Brahmani",
      "Baitarani"
    ],
    "coastline": "480 km",
    "economicPillars": "Mineral Superpower: Iron ore, Bauxite, Chromite, Steel and Aluminum smelters, Paradip Port.",
    "keyExamTopics": "Kalinga War 261 BCE, Konark Sun Temple, Jagannath Temple Puri, Chilika Lake (first Ramsar site), Hirakud Dam.",
    "x": 540,
    "y": 470,
    "w": 85,
    "h": 75
  },
  {
    "id": "IN-DL",
    "code": "DL",
    "name": "National Capital Territory of Delhi",
    "nameTelugu": "\u0c22\u0c3f\u0c32\u0c4d\u0c32\u0c40 \u0c1c\u0c3e\u0c24\u0c40\u0c2f \u0c30\u0c3e\u0c1c\u0c27\u0c3e\u0c28\u0c3f \u0c2a\u0c4d\u0c30\u0c3e\u0c02\u0c24\u0c02",
    "capital": "New Delhi",
    "psc": "UPSC (Union Public Service Commission)",
    "cadre": "AGMUT Cadre",
    "majorRivers": [
      "Yamuna River"
    ],
    "coastline": "National Capital Center",
    "economicPillars": "National governance, Services, R&D, Startups, Telecom, Constitutional organs (Supreme Court, Parliament).",
    "keyExamTopics": "Article 239AA special status, Delhi Sultanate, Mughal capital Shahjahanabad, Lutyens' Delhi design, Air quality and CAQM policies.",
    "x": 340,
    "y": 240,
    "w": 40,
    "h": 35
  }
];
