import { MockTestQuestion } from '../../types';

export const POLITY_MCQS: MockTestQuestion[] = [
  {
    id: 'pol-q1',
    question: 'Under which Article of the Constitution can the Supreme Court issue writs for the enforcement of Fundamental Rights?',
    questionTelugu: 'ప్రాథమిక హక్కుల అమలు కోసం సుప్రీంకోర్టు ఏ అధికరణం ప్రకారం రిట్లను జారీ చేయగలదు?',
    options: ['Article 32', 'Article 131', 'Article 226', 'Article 136'],
    correctIndex: 0,
    explanation: 'Article 32 guarantees the right to constitutional remedies. Dr. B.R. Ambedkar hailed it as the "heart and soul of the Constitution". High Courts issue writs under Article 226.',
    tag: 'Fundamental Rights',
    difficulty: 'Easy',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q2',
    question: 'Which Constitutional Amendment Act made the advice of the Council of Ministers binding on the President of India?',
    questionTelugu: 'మంత్రుల మండలి సలహా మేరకు రాష్ట్రపతి వ్యవహరించడాన్ని తప్పనిసరి చేసిన రాజ్యాంగ సవరణ ఏది?',
    options: ['42nd Amendment Act, 1976', '44th Amendment Act, 1978', '52nd Amendment Act, 1985', '91st Amendment Act, 2003'],
    correctIndex: 0,
    explanation: 'The 42nd Amendment Act (1976) made Cabinet advice binding on the President. The 44th Amendment (1978) gave the President power to send advice back for reconsideration once.',
    tag: 'Union Executive',
    difficulty: 'Medium',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q3',
    question: 'In which landmark case did the Supreme Court establish that the Preamble is an integral part of the Constitution and can be amended without violating Basic Structure?',
    questionTelugu: 'పీఠిక రాజ్యాంగంలో అంతర్భాగమని మరియు ప్రాథమిక నిర్మాణాన్ని ఉల్లంఘించకుండా దానిని సవరించవచ్చని సుప్రీంకోర్టు ఏ తీర్పులో పేర్కొంది?',
    options: ['Kesavananda Bharati v. State of Kerala (1973)', 'Berubari Union Case (1960)', 'Golaknath Case (1967)', 'Minerva Mills Case (1980)'],
    correctIndex: 0,
    explanation: 'In Kesavananda Bharati (1973), the 13-judge bench overruled Berubari (1960) and held that Preamble is an integral part of the Constitution and amendable under Article 368.',
    tag: 'Preamble',
    difficulty: 'Medium',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q4',
    question: 'The Tenth Schedule of the Indian Constitution, dealing with disqualification on grounds of defection, was inserted by which Amendment?',
    questionTelugu: 'పార్టీ ఫిరాయింపుల నిరోధక నిబంధనలతో కూడిన పదవ షెడ్యూల్ ఏ రాజ్యాంగ సవరణ ద్వారా చేర్చబడింది?',
    options: ['52nd Constitutional Amendment Act, 1985', '61st Constitutional Amendment Act, 1988', '91st Constitutional Amendment Act, 2003', '44th Constitutional Amendment Act, 1978'],
    correctIndex: 0,
    explanation: 'The 52nd Amendment Act, 1985 added the Tenth Schedule. The 91st Amendment (2003) deleted the provision regarding split by 1/3rd members.',
    tag: 'Parliament',
    difficulty: 'Easy',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q5',
    question: 'Which Article of the Constitution empowers the President to promulgate Ordinances during the recess of Parliament?',
    questionTelugu: 'పార్లమెంట్ సమావేశాలు లేని సమయంలో ఆర్డినెన్సులను జారీ చేయడానికి రాష్ట్రపతికి ఏ అధికరణం అధికారం ఇస్తుంది?',
    options: ['Article 123', 'Article 213', 'Article 143', 'Article 356'],
    correctIndex: 0,
    explanation: 'Article 123 confers ordinance-making power upon the President. Article 213 confers corresponding power upon State Governors.',
    tag: 'Union Executive',
    difficulty: 'Easy',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q6',
    question: 'Consider the following statements regarding the writ of Quo-Warranto:\n1. It cannot be sought by any interested person unless he has suffered personal injury.\n2. It is issued to prevent illegal usurpation of a public office.\nWhich of the statements given above is/are correct?',
    questionTelugu: 'కో-వారంటో రిట్ సంబంధించి సరైన వాక్యం ఏది?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correctIndex: 1,
    explanation: 'Unlike other writs, Quo-Warranto can be sought by any citizen, even if he is not the aggrieved party (Locus Standi is relaxed). Hence statement 1 is incorrect and statement 2 is correct.',
    tag: 'Writs & Judiciary',
    difficulty: 'Hard',
    topicId: 'polity-judiciary'
  },
  {
    id: 'pol-q7',
    question: 'Which of the following Fundamental Rights are available ONLY to Indian citizens and not to foreign nationals?',
    questionTelugu: 'భారతీయ పౌరులకు మాత్రమే వర్తించే మరియు విదేశీయులకు వర్తించని ప్రాథమిక హక్కులు ఏవి?',
    options: ['Articles 15, 16, 19, 29, and 30', 'Articles 14, 20, 21, and 25', 'Articles 19, 21, 22, and 32', 'Articles 14, 19, 21, and 30'],
    correctIndex: 0,
    explanation: 'Fundamental Rights exclusively available to citizens are Articles 15 (non-discrimination), 16 (equal public employment), 19 (six freedoms), 29 (minority culture), and 30 (educational institutions).',
    tag: 'Fundamental Rights',
    difficulty: 'Medium',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q8',
    question: 'Who among the following certifies whether a legislative bill is a Money Bill or not in the Lok Sabha?',
    questionTelugu: 'లోక్‌సభలో ఒక బిల్లు మనీ బిల్లు అవునా కాదా అని ఎవరు ధృవీకరిస్తారు?',
    options: ['The Speaker of Lok Sabha', 'The President of India', 'The Finance Minister', 'The Chairman of Rajya Sabha'],
    correctIndex: 0,
    explanation: 'Under Article 110(3), the decision of the Speaker of the Lok Sabha on whether a bill is a Money Bill is final and beyond question.',
    tag: 'Parliament',
    difficulty: 'Easy',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q9',
    question: 'The concept of "Due Process of Law" in Indian jurisprudence was decisively read into Article 21 in which case?',
    questionTelugu: 'భారత న్యాయవ్యవస్థలో ఆర్టికల్ 21 కింద "డ్యూ ప్రాసెస్ ఆఫ్ లా" సూత్రం ఏ తీర్పు ద్వారా అమల్లోకి వచ్చింది?',
    options: ['Maneka Gandhi v. Union of India (1978)', 'A.K. Gopalan v. State of Madras (1950)', 'Champakam Dorairajan Case (1951)', 'Indra Sawhney Case (1992)'],
    correctIndex: 0,
    explanation: 'In Maneka Gandhi (1978), the Supreme Court ruled that procedure established by law under Art 21 must be "just, fair, and reasonable", effectively incorporating American Due Process.',
    tag: 'Fundamental Rights',
    difficulty: 'Medium',
    topicId: 'polity-judiciary'
  },
  {
    id: 'pol-q10',
    question: 'A proclamation of Financial Emergency under Article 360 must be approved by both Houses of Parliament within what time period?',
    questionTelugu: 'ఆర్టికల్ 360 కింద ఆర్థిక అత్యవసర పరిస్థితి ప్రకటనను పార్లమెంటు ఉభయ సభలు ఎంత సమయంలోగా ఆమోదించాలి?',
    options: ['2 months', '1 month', '14 days', '6 months'],
    correctIndex: 0,
    explanation: 'A proclamation of Financial Emergency (Article 360) and State Emergency (Article 356) must be approved within 2 months. National Emergency (Article 352) requires 1 month.',
    tag: 'Emergency Provisions',
    difficulty: 'Medium',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q11',
    question: 'Under Article 280, who determines the composition, qualifications, and selection of members of the Finance Commission of India?',
    questionTelugu: 'ఆర్టికల్ 280 ప్రకారం ఫైనాన్స్ కమిషన్ సభ్యుల అర్హతలు మరియు ఎంపిక విధానాన్ని ఎవరు నిర్దేశిస్తారు?',
    options: ['Parliament by law', 'The President by order', 'The Prime Minister in consultation with CJI', 'NITI Aayog Governing Council'],
    correctIndex: 0,
    explanation: 'Article 280(2) states that Parliament may by law determine the qualifications requisite for appointment as members of the commission and the manner of selection.',
    tag: 'Constitutional Bodies',
    difficulty: 'Hard',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q12',
    question: 'The Comptroller and Auditor General (CAG) of India submits audit reports relating to the accounts of the Union to:',
    questionTelugu: 'భారత కంప్ట్రోలర్ అండ్ ఆడిటర్ జనరల్ (కాగ్) కేంద్ర ఖాతాలకు సంబంధించిన తన ఆడిట్ నివేదికలను ఎవరికి సమర్పిస్తారు?',
    options: ['The President of India', 'The Speaker of Lok Sabha', 'The Public Accounts Committee', 'The Union Finance Minister'],
    correctIndex: 0,
    explanation: 'Under Article 151(1), the CAG submits reports relating to Union accounts to the President, who causes them to be laid before each House of Parliament.',
    tag: 'Constitutional Bodies',
    difficulty: 'Medium',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q13',
    question: 'Which Constitutional Amendment introduced the Goods and Services Tax (GST) and created the GST Council under Article 279A?',
    questionTelugu: 'జీఎస్టీ కౌన్సిల్‌ను ఆర్టికల్ 279A కింద ఏర్పాటు చేసిన రాజ్యాంగ సవరణ ఏది?',
    options: ['101st Amendment Act, 2016', '100th Amendment Act, 2015', '102nd Amendment Act, 2018', '103rd Amendment Act, 2019'],
    correctIndex: 0,
    explanation: 'The 101st Constitutional Amendment Act, 2016 introduced GST and inserted Article 279A providing for the GST Council chaired by the Union Finance Minister.',
    tag: 'Federal Dynamics',
    difficulty: 'Easy',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q14',
    question: 'The power of Judicial Review in the Indian Constitution is fundamentally anchored in which Article?',
    questionTelugu: 'భారత రాజ్యాంగంలో న్యాయ సమీక్ష (జ్యుడిషియల్ రివ్యూ) అధికారం ప్రధానంగా ఏ అధికరణంపై ఆధారపడి ఉంది?',
    options: ['Article 13', 'Article 368', 'Article 143', 'Article 248'],
    correctIndex: 0,
    explanation: 'Article 13 declares that all laws inconsistent with or in derogation of Fundamental Rights shall be void to the extent of inconsistency, forming the bedrock of Judicial Review.',
    tag: 'Judiciary',
    difficulty: 'Medium',
    topicId: 'polity-judiciary'
  },
  {
    id: 'pol-q15',
    question: 'Which of the following bodies is NOT established by the Constitution of India?',
    questionTelugu: 'కింది వాటిలో భారత రాజ్యాంగం ద్వారా ఏర్పాటు చేయబడని సంస్థ ఏది?',
    options: ['NITI Aayog', 'Inter-State Council', 'Goods and Services Tax Council', 'Finance Commission'],
    correctIndex: 0,
    explanation: 'NITI Aayog is an extra-constitutional, non-statutory body created via an executive resolution of the Union Cabinet on January 1, 2015.',
    tag: 'Institutions',
    difficulty: 'Easy',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q16',
    question: 'The Inter-State Council was set up in 1990 following the recommendations of which commission?',
    questionTelugu: '1990లో అంతర్-రాష్ట్ర మండలి (Inter-State Council) ఏ కమిషన్ సిఫార్సుల మేరకు ఏర్పాటయింది?',
    options: ['Sarkaria Commission', 'Punchhi Commission', 'First Administrative Reforms Commission', 'Kothari Commission'],
    correctIndex: 0,
    explanation: 'The Sarkaria Commission (1983-88) strongly recommended establishing a permanent Inter-State Council under Article 263, which was notified by the VP Singh government in 1990.',
    tag: 'Federal Dynamics',
    difficulty: 'Medium',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q17',
    question: 'Under Article 249, Rajya Sabha can authorize Parliament to make laws on a State List subject in national interest by passing a resolution supported by:',
    questionTelugu: 'ఆర్టికల్ 249 ప్రకారం రాష్ట్ర జాబితాలోని అంశంపై పార్లమెంటు చట్టం చేయడానికి రాజ్యసభ ఏ మెజారిటీతో తీర్మానం ఆమోదించాలి?',
    options: ['Not less than two-thirds of the members present and voting', 'A simple majority of total membership', 'An absolute two-thirds majority of total membership', 'Unanimous resolution'],
    correctIndex: 0,
    explanation: 'Article 249 requires a special majority of not less than two-thirds of the members present and voting in Rajya Sabha. The resolution remains in force for up to one year.',
    tag: 'Parliament',
    difficulty: 'Hard',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q18',
    question: 'Which Article guarantees protection against self-incrimination ("No person accused of any offence shall be compelled to be a witness against himself")?',
    questionTelugu: 'తనకు తానే వ్యతిరేకంగా సాక్ష్యం చెప్పేందుకు ఏ వ్యక్తిని బలవంతం చేయరాదని తెలిపే రాజ్యాంగ అధికరణ ఏది?',
    options: ['Article 20(3)', 'Article 21', 'Article 22(1)', 'Article 19(2)'],
    correctIndex: 0,
    explanation: 'Article 20(3) confers the fundamental right against self-incrimination for any person accused of a criminal offense.',
    tag: 'Fundamental Rights',
    difficulty: 'Medium',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q19',
    question: 'The 86th Constitutional Amendment Act, 2002 inserted Article 21A making elementary education a fundamental right for children aged:',
    questionTelugu: '86వ రాజ్యాంగ సవరణ 2002 ద్వారా చేర్చబడిన ఆర్టికల్ 21A ఏ వయస్సు పిల్లలకు ఉచిత నిర్బంధ విద్యను ప్రాథమిక హక్కుగా చేసింది?',
    options: ['6 to 14 years', '3 to 6 years', '6 to 18 years', '5 to 15 years'],
    correctIndex: 0,
    explanation: 'Article 21A directs the State to provide free and compulsory education to all children of the age of 6 to 14 years in such manner as the State may determine.',
    tag: 'Fundamental Rights',
    difficulty: 'Easy',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q20',
    question: 'Under the Indian Constitution, the residuary powers of legislation are vested with:',
    questionTelugu: 'భారత రాజ్యాంగం ప్రకారం అవశిష్ట అధికారాలు (Residuary Powers) ఎవరికి ఉంటాయి?',
    options: ['The Parliament of India (Union Legislature)', 'The State Legislatures', 'Both Parliament and States jointly', 'The Supreme Court of India'],
    correctIndex: 0,
    explanation: 'Unlike the US where residuary powers rest with States, Article 248 and Entry 97 of List I vest residuary powers exclusively in the Parliament of India (Canadian model).',
    tag: 'Federal Dynamics',
    difficulty: 'Easy',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q21',
    question: 'Which committee recommended the incorporation of Fundamental Duties into Part IVA of the Constitution during the Emergency?',
    questionTelugu: 'రాజ్యాంగంలో ప్రాథమిక విధులను చేర్చాలని ఏ కమిటీ సిఫార్సు చేసింది?',
    options: ['Swaran Singh Committee', 'Verma Committee', 'Santhanam Committee', 'Dhar Commission'],
    correctIndex: 0,
    explanation: 'The Swaran Singh Committee (1976) recommended adding Fundamental Duties, resulting in the 42nd Amendment Act 1976 inserting Article 51A.',
    tag: 'Fundamental Duties',
    difficulty: 'Easy',
    topicId: 'polity-constitution-framework'
  },
  {
    id: 'pol-q22',
    question: 'What is the maximum permissible strength of the Council of Ministers including the Prime Minister in the Lok Sabha under Article 75(1A)?',
    questionTelugu: 'ఆర్టికల్ 75(1A) ప్రకారం లోక్‌సభలో ప్రధానమంత్రితో కలిపి మంత్రుల మండలి గరిష్ట పరిమితి ఎంత శాతం మించరాదు?',
    options: ['15% of the total number of members of the Lok Sabha', '10% of the total strength', '20% of the total strength', '50 ministers total'],
    correctIndex: 0,
    explanation: 'The 91st Constitutional Amendment Act 2003 capped the Council of Ministers at 15% of the total membership of the Lok Sabha (and Legislative Assemblies).',
    tag: 'Union Executive',
    difficulty: 'Medium',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q23',
    question: 'Who acts as the ex-officio Chairman of the Rajya Sabha (Council of States)?',
    questionTelugu: 'రాజ్యసభ ఎక్స్-అఫీషియో ఛైర్మన్‌గా ఎవరు వ్యవహరిస్తారు?',
    options: ['The Vice-President of India', 'The President of India', 'The Chief Justice of India', 'A member elected by Rajya Sabha'],
    correctIndex: 0,
    explanation: 'Under Article 64 and Article 89(1), the Vice-President of India is the ex-officio Chairman of the Council of States.',
    tag: 'Parliament',
    difficulty: 'Easy',
    topicId: 'polity-executive-legislature'
  },
  {
    id: 'pol-q24',
    question: 'The doctrine of "Severability" in constitutional law relates to which Article?',
    questionTelugu: 'రాజ్యాంగ న్యాయంలో "వేర్పాటు సిద్ధాంతం" (Doctrine of Severability) ఏ అధికరణానికి సంబంధించినది?',
    options: ['Article 13(1)', 'Article 32', 'Article 368', 'Article 245'],
    correctIndex: 0,
    explanation: 'Article 13(1) embodies the Doctrine of Severability: if a law violates Fundamental Rights, only the offending portion is declared void, provided the valid portion can operate independently.',
    tag: 'Judiciary',
    difficulty: 'Hard',
    topicId: 'polity-judiciary'
  },
  {
    id: 'pol-q25',
    question: 'In which schedule of the Indian Constitution are the provisions relating to the administration and control of Scheduled Areas and Scheduled Tribes contained?',
    questionTelugu: 'షెడ్యూల్డ్ ప్రాంతాలు మరియు గిరిజన ప్రాంతాల పరిపాలనకు సంబంధించిన నిబంధనలు ఏ షెడ్యూల్‌లో ఉన్నాయి?',
    options: ['Fifth Schedule', 'Sixth Schedule', 'Seventh Schedule', 'Eighth Schedule'],
    correctIndex: 0,
    explanation: 'The Fifth Schedule deals with Scheduled Areas in states other than Assam, Meghalaya, Tripura, and Mizoram (which are governed under the Sixth Schedule).',
    tag: 'Schedules',
    difficulty: 'Medium',
    topicId: 'polity-constitution-framework'
  }
];
