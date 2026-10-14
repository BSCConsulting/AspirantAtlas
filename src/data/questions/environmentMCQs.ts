import { MockTestQuestion } from '../../types';

export const ENVIRONMENT_MCQS: MockTestQuestion[] = [
  {
    id: 'env-q1',
    question: 'The Ramsar Convention on Wetlands entered into force in 1975. The Montreux Record maintained under the convention is a register of wetland sites where:',
    questionTelugu: 'రామ్‌సార్ కన్వెన్షన్ పరిధిలోని మాంట్రెక్స్ రికార్డ్ (Montreux Record) లో ఏ విధమైన చిత్తడి నేలలను నమోదు చేస్తారు?',
    options: [
      'Ecological character has changed, is changing, or is likely to change as a result of human interference',
      'Extensive mangrove afforestation projects are being funded by UNEP',
      'No human activity of any nature is legally permitted',
      'Exclusive international tourism is promoted'
    ],
    correctIndex: 0,
    explanation: 'Montreux Record is a register of wetland sites on the Ramsar List where changes in ecological character have occurred, are occurring, or are likely to occur from technological developments, pollution, or human interference. Currently, Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur) are on India’s Montreux Record.',
    tag: 'Wetlands',
    difficulty: 'Medium',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q2',
    question: 'Under the Wildlife (Protection) Amendment Act 2022, the total number of Schedules was rationalized from six down to:',
    questionTelugu: 'వన్యప్రాణి రక్షణ సవరణ చట్టం 2022 ప్రకారం మొత్తం షెడ్యూళ్ల సంఖ్య 6 నుంచి ఎన్ని షెడ్యూళ్లకు తగ్గించబడింది?',
    options: ['4 Schedules', '3 Schedules', '5 Schedules', '2 Schedules'],
    correctIndex: 0,
    explanation: 'The 2022 Amendment reduced schedules from 6 to 4: Schedule I (specially protected animals), Schedule II (lesser protection), Schedule III (protected plants), and Schedule IV (CITES specimens). Vermin classification was deleted.',
    tag: 'Wildlife Legislation',
    difficulty: 'Hard',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q3',
    question: 'Which of the following National Parks in India is the only floating national park in the world and the last natural habitat of the endangered Eld’s deer (Sangai)?',
    questionTelugu: 'ప్రపంచంలోనే ఏకైక తేలియాడే జాతీయ పార్కు మరియు అంతరించిపోతున్న సంగై జింకల సహజ ఆవాసం ఏది?',
    options: ['Keibul Lamjao National Park, Manipur', 'Kaziranga National Park, Assam', 'Sundarbans National Park, West Bengal', 'Silent Valley National Park, Kerala'],
    correctIndex: 0,
    explanation: 'Keibul Lamjao National Park located on Loktak Lake in Manipur is the world’s only floating national park, characterized by floating decomposed vegetative mats called "Phumdis".',
    tag: 'Protected Areas',
    difficulty: 'Easy',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q4',
    question: 'The "Kigali Amendment" agreed upon in 2016 under the Montreal Protocol aims for the global phase-down of which greenhouse gases?',
    questionTelugu: 'మాంట్రియల్ ప్రోటోకాల్ పరిధిలోని "కిగాలీ సవరణ" (2016) ఏ వాయువుల దశలవారీ తొలగింపును లక్ష్యంగా చేసుకుంది?',
    options: ['Hydrofluorocarbons (HFCs)', 'Chlorofluorocarbons (CFCs)', 'Carbon Monoxide (CO)', 'Sulphur Dioxide (SO2)'],
    correctIndex: 0,
    explanation: 'While CFCs were targeted to protect the ozone layer, the Kigali Amendment specifically mandates phase-down of Hydrofluorocarbons (HFCs), which do not deplete ozone but possess severe global warming potential.',
    tag: 'Climate Treaties',
    difficulty: 'Medium',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q5',
    question: 'In an ecological pyramid, which of the following pyramids is ALWAYS upright without exception in any terrestrial or aquatic ecosystem?',
    questionTelugu: 'ఆవరణ వ్యవస్థలో ఎల్లప్పుడూ నిటారుగా (Upright) మాత్రమే ఉండే పిరమిడ్ ఏది?',
    options: ['Pyramid of Energy', 'Pyramid of Biomass', 'Pyramid of Numbers', 'Pyramid of Population'],
    correctIndex: 0,
    explanation: 'The Pyramid of Energy is always upright because according to Lindeman’s 10% law, thermodynamic energy is invariably lost as heat at each trophic level transfer.',
    tag: 'Ecology Fundamentals',
    difficulty: 'Easy',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q6',
    question: 'The "Great Green Wall of India" initiative announced by the government seeks to combat land degradation and desertification through a green belt stretching along which mountain range?',
    questionTelugu: 'భారతదేశంలో భూ క్షీణత మరియు ఎడారీకరణను నిరోధించే గ్రీన్ వాల్ ప్రాజెక్ట్ ఏ పర్వత శ్రేణి వెంట ప్రతిపాదించబడింది?',
    options: ['Aravalli Range', 'Western Ghats', 'Vindhya Range', 'Satpura Range'],
    correctIndex: 0,
    explanation: 'The 1,400 km long green ecological corridor is designed along the Aravalli hill range from Porbandar to Panipat to stop the eastward expansion of the Thar Desert.',
    tag: 'Desertification',
    difficulty: 'Medium',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q7',
    question: 'Which tiger reserve in India has the highest density of wild tigers in the country and is situated in the Terai arc landscape?',
    questionTelugu: 'భారతదేశంలో అత్యధిక పులుల సాంద్రత కలిగిన టైగర్ రిజర్వ్ ఏది?',
    options: ['Jim Corbett Tiger Reserve, Uttarakhand', 'Bandipur Tiger Reserve, Karnataka', 'Kanha Tiger Reserve, Madhya Pradesh', 'Ranthambore Tiger Reserve, Rajasthan'],
    correctIndex: 0,
    explanation: 'Corbett Tiger Reserve in Uttarakhand holds the highest tiger density in India and the world (over 260 tigers within the reserve), according to the Status of Tigers in India 2022 report.',
    tag: 'Tiger Conservation',
    difficulty: 'Easy',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q8',
    question: 'Eutrophication in freshwater water bodies (lakes and ponds) is primarily triggered by excessive concentration of which nutrients?',
    questionTelugu: 'మంచినీటి సరస్సులలో యుట్రోఫికేషన్‌కు (నాచు పేరుకుపోవడం) ప్రధాన కారణమైన పోషకాలు ఏవి?',
    options: ['Nitrogen and Phosphorus', 'Sodium and Potassium', 'Calcium and Magnesium', 'Iron and Zinc'],
    correctIndex: 0,
    explanation: 'Runoff of agricultural fertilizers and untreated sewage carrying excessive nitrates and phosphates triggers rapid algal blooms, depleting dissolved oxygen (BOD spikes) and causing fish kills.',
    tag: 'Pollution',
    difficulty: 'Easy',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q9',
    question: 'The Kunming-Montreal Global Biodiversity Framework (GBF) adopted at COP15 set the landmark "30x30" target, which commits countries to protect what percentage of land and oceans by 2030?',
    questionTelugu: 'COP15 లో ఆమోదించబడిన కున్మింగ్-మాంట్రియల్ గ్లోబల్ బయోడైవర్సిటీ ఫ్రేమ్‌వర్క్ ప్రకారం 2030 నాటికి ఎంత శాతం భూభాగం మరియు మహాసముద్రాలను సంరక్షించాలి?',
    options: ['30% of global land, coastal, and marine areas', '50% of terrestrial biomes', '20% of inland water bodies', '40% of tropical rainforests'],
    correctIndex: 0,
    explanation: 'Target 3 of the Kunming-Montreal GBF mandates that at least 30% of terrestrial, inland water, coastal, and marine ecosystems must be effectively conserved through protected area systems by 2030.',
    tag: 'Biodiversity Treaties',
    difficulty: 'Medium',
    topicId: 'environment-climate-biodiversity'
  },
  {
    id: 'env-q10',
    question: 'Which of the following National Parks is situated at the tri-junction of Tamil Nadu, Kerala, and Karnataka as part of the Nilgiri Biosphere Reserve?',
    questionTelugu: 'తమిళనాడు, కేరళ మరియు కర్ణాటక సరిహద్దుల కూడలి వద్ద నీలగిరి బయోస్పియర్ రిజర్వ్‌లో భాగంగా ఉన్న పార్కు ఏది?',
    options: ['Mudumalai National Park', 'Anamalai Tiger Reserve', 'Periyar National Park', 'Kudremukh National Park'],
    correctIndex: 0,
    explanation: 'Mudumalai Tiger Reserve lies in Tamil Nadu at the tri-junction with Wayanad Wildlife Sanctuary (Kerala) and Bandipur National Park (Karnataka), forming a contiguous elephant and tiger corridor.',
    tag: 'Protected Areas',
    difficulty: 'Medium',
    topicId: 'environment-climate-biodiversity'
  }
];
