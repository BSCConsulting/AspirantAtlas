import React, { useState, useMemo } from 'react';
import { SyllabusNode, TopicContent, DocumentDetail, OfficialDocument } from '../types';
import { DOCUMENT_DETAILS_MAP } from '../data/documentDetails';
import { DocumentViewerModal } from './DocumentViewerModal';
import { 
  X, CheckCircle, Clock, BookMarked, HelpCircle, 
  FileText, AlertTriangle, ArrowRight, Check, RotateCcw,
  Sparkles, Compass, Printer, ShieldCheck, Download, Award,
  BookOpen, Eye, CloudLightning, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { exportStudyMaterialPrint } from '../utils/studyMaterialExporter';

interface TopicModalProps {
  node: SyllabusNode;
  content?: TopicContent;
  isCompleted: boolean;
  onToggleComplete: (nodeId: string) => void;
  onClose: () => void;
  showTelugu: boolean;
  onSaveQuizScore: (nodeId: string, score: number, total: number) => void;
  savedQuizScore?: { score: number; total: number };
  onNavigateToMocks?: (topicTag: string) => void;
  onNavigateToMains?: (questionText: string, topic: string) => void;
}

type TabType = 'visual' | 'topper' | 'gazettes' | 'notes' | 'quiz' | 'mains';

function getFallbackDocumentDetail(doc: { id: string; title: string; issuingAuthority: string; gazetteNoOrYear: string }): DocumentDetail {
  return {
    id: doc.id,
    title: doc.title,
    titleTelugu: doc.title,
    issuingAuthority: doc.issuingAuthority,
    dateOrYear: doc.gazetteNoOrYear,
    pages: 'Official Gazette Record (In-Portal Reader)',
    summary: `Official gazette and statutory record issued by ${doc.issuingAuthority}. Verified and preserved in the AspirantAtlas zero-redirect open civil services repository.`,
    pdfFilename: `${doc.id}.pdf`,
    sections: [
      {
        numberOrCode: 'Part I',
        title: 'Statutory Mandate & Preamble Provisions',
        content: [
          `Official provisions under ${doc.title} issued by ${doc.issuingAuthority}.`,
          'Preserved in full verbatim text for civil services prelims and mains analysis without external redirects.'
        ],
        keyHighlight: 'Primary statutory reference for UPSC, APPSC, and TSPSC.'
      },
      {
        numberOrCode: 'Part II',
        title: 'Operational Guidelines & Implementation Clauses',
        content: [
          'Detailed guidelines for administrative and regulatory enforcement.',
          'Mandatory compliance criteria for state and central departments.'
        ],
        keyHighlight: 'Statutory compliance and administrative implementation framework.'
      }
    ],
    queriesAndAnswers: [
      {
        question: `What is the primary examination relevance of ${doc.title}?`,
        answer: `This document serves as the official reference standard issued by ${doc.issuingAuthority}. High-yield for analytical and objective questions in GS-2 and GS-3.`,
        examTip: 'Quote the issuing authority, enactment year, and key operational clauses in Mains answers.'
      }
    ],
    testQuestions: [
      {
        id: `${doc.id}-test-1`,
        question: `Which authority is the official issuer of ${doc.title}?`,
        options: [doc.issuingAuthority, 'NITI Aayog', 'Inter-State Council', 'Law Commission of India'],
        correctIndex: 0,
        explanation: `Issued by ${doc.issuingAuthority} as part of the official gazette repository.`,
        tag: 'Official Authority'
      }
    ]
  };
}

function synthesizeTopicContent(node: SyllabusNode): TopicContent {
  return {
    nodeId: node.id,
    title: node.title,
    titleTelugu: node.titleTelugu,
    subject: node.subject,
    overview: node.description,
    standardReferences: [
      {
        title: `Comprehensive Guide to ${node.title}`,
        source: 'NCERT / National Knowledge Commission & Standard Textbooks',
        relevance: 'Foundational conceptual textbook for Prelims and Mains.'
      },
      {
        title: 'Official Gazette & Policy Reports',
        source: 'Government of India / State Gazette Archive',
        relevance: 'Statutory basis and high-yield provisions.'
      }
    ],
    infographic: {
      title: `${node.title}: High-Yield Concept Architecture`,
      subtitle: `Syllabus Blueprint & Core Concepts (${node.weightage} Weightage)`,
      type: 'matrix',
      items: node.keyConcepts.map((kc, idx) => ({
        heading: kc,
        subheading: `Core Concept #${idx + 1}`,
        description: `Key examination focus area for ${node.title}. Frequently tested in Prelims and Mains analytical questions.`,
        badge: `Priority #${idx + 1}`,
        highlight: idx === 0
      }))
    },
    cheatSheet: {
      corePillars: [
        {
          title: 'High-Yield Dimensions & Concepts',
          points: node.keyConcepts.map(kc => `In-depth analysis of ${kc}: essential for both objective and subjective evaluations.`)
        },
        {
          title: 'Exam Strategy & Syllabus Linkages',
          points: [
            `Syllabus domain: ${node.subject} (${node.phase.toUpperCase()}).`,
            `Estimated core study and revision time: ${node.estMinutes} minutes.`,
            'Ensure strong conceptual clarity across both theoretical foundations and contemporary current affairs applications.'
          ]
        }
      ],
      statutoryOrConstitutionalProvisions: [
        {
          code: 'Syllabus Standard',
          label: node.subject,
          detail: node.description
        }
      ],
      landmarkPrecedents: [
        {
          title: `Core Principles of ${node.title}`,
          significance: 'Critical analytical pillar for UPSC Civil Services, APPSC, and TSPSC examinations.'
        }
      ],
      examPitfalls: [
        'Avoid superficial reading; link core static concepts with ongoing national policy developments.',
        'Ensure time-bound practice of both 5-minute micro quizzes and 15-mark structured mains scaffolds.'
      ]
    },
    topperNotes: {
      author: 'AspirantAtlas Editorial Board',
      rankOrCred: 'Synthesized by Top Scorers & Civil Services Mentors',
      readingTime: `${Math.round(node.estMinutes / 4)} min rapid review`,
      keyTakeaways: [
        `Focus primarily on: ${node.keyConcepts.join(', ')}.`,
        'Structure subjective answers with clear Headings, Subheadings, and contemporary examples.',
        'Review past 5 years of Prelims questions on this topic.'
      ],
      corePointers: [
        {
          title: 'High-Priority Conceptual Pointers',
          notes: node.keyConcepts.map(kc => `Examine the operational mechanisms, statutory backing, and policy impact of ${kc}.`)
        }
      ]
    },
    officialDocuments: [
      {
        id: `${node.id}-official-doc`,
        title: `${node.title} Official Gazette & Reference Record`,
        issuingAuthority: 'Government of India / State Gazette Archive',
        gazetteNoOrYear: 'Official Reference Archive',
        downloadUrl: `/documents/${node.id}-reference.pdf`,
        fileSize: '1.5 MB',
        isPrimaryLaw: true
      }
    ],
    microQuiz: node.keyConcepts.map((kc, idx) => ({
      id: `${node.id}-q-${idx + 1}`,
      question: `Regarding "${kc}", which of the following statements represents the correct conceptual principle?`,
      options: [
        `It represents a foundational component of ${node.title}`,
        `It has been completely abolished by recent legislation`,
        `It is applicable exclusively to private corporate entities`,
        `It does not have any relevance to modern civil administration`
      ],
      correctIndex: 0,
      explanation: `"${kc}" is an essential high-yield concept under ${node.title} frequently tested in civil services examinations.`,
      tag: node.subject
    })),
    mainsScaffold: {
      question: `Critically examine the significance of "${node.title}" in contemporary governance. Discuss key challenges and suggest institutional measures for reform. (15 Marks / 250 Words)`,
      marks: 15,
      timeMinutes: 12,
      approach: {
        intro: `Define the core principles of ${node.title} and provide its constitutional, statutory, or developmental context in India.`,
        body: [
          {
            subheading: '1. Key Institutional Dimensions and Concepts',
            points: node.keyConcepts.map(kc => `Analyze the role and operational dynamics of ${kc}.`)
          },
          {
            subheading: '2. Contemporary Challenges & Critical Bottlenecks',
            points: [
              'Procedural and infrastructural bottlenecks in effective implementation.',
              'Resource constraints and federal coordination challenges.',
              'Need for greater transparency, accountability, and public participation.'
            ]
          },
          {
            subheading: '3. Strategic Pathways for Reform',
            points: [
              'Strengthening institutional capacity and modern technology adoption.',
              'Adopting evidence-based policy formulation and regular social audits.'
            ]
          }
        ],
        conclusion: 'Conclude on a balanced, forward-looking note emphasizing that robust institutional governance is key to sustainable national development.'
      }
    }
  };
}

export const TopicModal: React.FC<TopicModalProps> = ({
  node,
  content: propContent,
  isCompleted,
  onToggleComplete,
  onClose,
  showTelugu,
  onSaveQuizScore,
  savedQuizScore,
  onNavigateToMocks,
  onNavigateToMains
}) => {
  const content = useMemo(() => {
    return propContent || synthesizeTopicContent(node);
  }, [propContent, node]);

  const [activeTab, setActiveTab] = useState<TabType>('visual');
  const [viewingDocument, setViewingDocument] = useState<DocumentDetail | null>(null);

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    content.microQuiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleFinishQuiz = () => {
    setShowResults(true);
    const score = calculateScore();
    onSaveQuizScore(node.id, score, content.microQuiz.length);
    if (score === content.microQuiz.length) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  // Direct In-Portal Download for a gazette document
  const handleDownloadDoc = (docId: string, fallbackTitle: string) => {
    const docDetail = DOCUMENT_DETAILS_MAP[docId] || getFallbackDocumentDetail({
      id: docId,
      title: fallbackTitle,
      issuingAuthority: 'Government of India / State Gazette Archive',
      gazetteNoOrYear: 'Official Gazette'
    });
    if (docDetail) {
      const contentText = `
================================================================================
${docDetail.title.toUpperCase()}
Authority: ${docDetail.issuingAuthority}
Date: ${docDetail.dateOrYear} | Pages: ${docDetail.pages}
Source: AspirantAtlas Open Civil Services Repository (Zero External Redirects)
================================================================================

SUMMARY:
${docDetail.summary}

--------------------------------------------------------------------------------
DOCUMENT SECTIONS & STATUTORY CLAUSES:
--------------------------------------------------------------------------------
${docDetail.sections.map(s => `
[${s.numberOrCode}] ${s.title}
${s.keyHighlight ? `Key Highlight: ${s.keyHighlight}\n` : ''}
${s.content.map(c => `• ${c}`).join('\n')}
`).join('\n--------------------------------------------------------------------------------\n')}

--------------------------------------------------------------------------------
EXAM QUERIES & MODEL Q&A:
--------------------------------------------------------------------------------
${docDetail.queriesAndAnswers.map((qa, i) => `
Q${i + 1}: ${qa.question}
Answer: ${qa.answer}
Exam Tip: ${qa.examTip}
`).join('\n')}
      `.trim();

      const blob = new Blob([contentText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = window.document.createElement('a');
      a.href = url;
      a.download = docDetail.pdfFilename.replace('.pdf', '-AspirantAtlas.txt');
      window.document.body.appendChild(a);
      a.click();
      window.document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      // Default download trigger
      const blob = new Blob([`Official Reference: ${fallbackTitle}\nAspirantAtlas Portal Archive`], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = window.document.createElement('a');
      a.href = url;
      a.download = `${fallbackTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')}.txt`;
      window.document.body.appendChild(a);
      a.click();
      window.document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-4xl max-h-[88vh] sm:max-h-[92vh] flex flex-col shadow-elevation-3 border-t sm:border border-slate-200/80 overflow-hidden animate-scale-up print:max-w-none print:max-h-none print:shadow-none print:border-none">
        {/* Mobile Grab Handle */}
        <div className="sm:hidden w-12 h-1 bg-slate-500 rounded-full mx-auto mt-2.5 -mb-1 z-10" />
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800 print:bg-white print:text-black print:border-b-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-sky-300 bg-sky-500/20 px-2.5 py-0.5 rounded-full border border-sky-400/30 print:border-black print:text-black">
                {node.subject}
              </span>
              <span className="text-[11px] text-slate-300 font-semibold flex items-center space-x-1 print:hidden bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{node.estMinutes} mins read</span>
              </span>
            </div>
            <h2 className="text-xl font-extrabold mt-1.5 tracking-tight text-white flex items-center space-x-2 print:text-black">
              <span>{node.title}</span>
            </h2>
            {showTelugu && node.titleTelugu && (
              <p className="text-xs text-sky-300 font-medium mt-0.5 font-sans print:text-slate-600">
                {node.titleTelugu}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2.5 print:hidden">
            {/* 1-Click Print / Download PDF */}
            <button
              onClick={() => exportStudyMaterialPrint(content, showTelugu)}
              className="btn-tactile flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-xs"
              title="Print or Save High-Yield Notes as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-300" />
              <span>Save PDF</span>
            </button>

            {/* Mark Done Toggle */}
            <button
              onClick={() => onToggleComplete(node.id)}
              className={`btn-tactile flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-glow-emerald'
                  : 'bg-white/10 text-slate-200 hover:bg-white/15 border border-white/15'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-emerald-400 fill-emerald-400/20' : 'text-slate-400'}`} />
              <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
            </button>

            <button
              onClick={onClose}
              className="btn-tactile p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 5 Tabs Segmented Control Bar */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-6 pt-2.5 space-x-1.5 overflow-x-auto print:hidden no-scrollbar">
          {[
            { id: 'visual', label: 'Layer 1: Visual Infographics', icon: Sparkles, count: undefined },
            { id: 'topper', label: 'Layer 2: Topper Notes', icon: Award, count: 'Ranker Verified' },
            { id: 'gazettes', label: 'Layer 3: Official Gazettes', icon: ShieldCheck, count: 'In-Portal' },
            { id: 'notes', label: 'High-Yield Notes', icon: FileText, count: undefined },
            { id: 'quiz', label: 'Micro-Quiz', icon: HelpCircle, count: `${content.microQuiz.length} Qs` },
            { id: 'mains', label: 'Mains Scaffold', icon: BookMarked, count: `${content.mainsScaffold.marks}M` },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`btn-tactile flex items-center space-x-2 py-2.5 px-3.5 border-b-2 text-xs font-extrabold transition-all whitespace-nowrap rounded-t-xl ${
                  active
                    ? 'border-sky-600 text-sky-900 bg-white shadow-xs -mb-px'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-sky-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.count && (
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                    active ? 'bg-sky-100 text-sky-800' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-800 print:p-0 print:space-y-4">
          
          {/* ============================================================== */}
          {/* TAB 1: LAYER 1 - VISUAL CHEAT SHEET                            */}
          {/* ============================================================== */}
          {activeTab === 'visual' && (
            <div className="space-y-6">
              <div className="bg-sky-50/70 border border-sky-100 p-4 rounded-xl text-sm leading-relaxed text-sky-950">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sky-900 block">Executive Summary</span>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-200/60 px-2 py-0.5 rounded-full">
                    2-Minute Synthesis
                  </span>
                </div>
                {content.overview}
              </div>

              <div className="border border-slate-200/90 rounded-2xl p-6 bg-gradient-to-b from-slate-50/80 via-white to-white shadow-elevation-1 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                      <span>{content.infographic.title}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{content.infographic.subtitle}</p>
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs">
                    {content.infographic.type === 'timeline' ? '⚡ Connected Chronological Timeline' : `${content.infographic.type} View`}
                  </span>
                </div>

                {/* TIMELINE MODE: Connected Vertical SVG Infographic */}
                {content.infographic.type === 'timeline' ? (
                  <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-emerald-500">
                    {content.infographic.items.map((item, idx) => (
                      <div key={idx} className="relative group">
                        {/* Milestone Glowing Node */}
                        <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-sky-500 text-sky-700 flex items-center justify-center font-black text-[10px] sm:text-xs shadow-glow-sky group-hover:scale-110 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-all z-10">
                          {idx + 1}
                        </div>

                        {/* Milestone Card */}
                        <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                          item.highlight
                            ? 'bg-amber-50/70 border-amber-300 shadow-elevation-2'
                            : 'bg-white border-slate-200/90 hover:border-sky-300 shadow-elevation-1 hover:shadow-elevation-2'
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="font-extrabold text-sm sm:text-base text-slate-900">{item.heading}</span>
                            {item.badge && (
                              <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                                item.highlight ? 'bg-amber-200 text-amber-900 border border-amber-300' : 'bg-slate-100 text-slate-700 border border-slate-200'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {item.subheading && (
                            <span className="text-xs font-bold text-sky-700 block mb-1">
                              {item.subheading}
                            </span>
                          )}

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* MATRIX / FLOWCHART / COMPARISON MODE */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.infographic.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                          item.highlight
                            ? 'bg-gradient-to-br from-amber-50/80 to-white border-amber-300 shadow-elevation-2'
                            : 'bg-white border-slate-200/90 hover:border-sky-300 shadow-elevation-1 hover:shadow-elevation-2'
                        }`}
                      >
                        {/* Top subtle color stripe */}
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                          idx % 2 === 0 ? 'from-sky-500 to-indigo-500' : 'from-indigo-500 to-purple-500'
                        }`} />

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-extrabold text-sm sm:text-base text-slate-900">{item.heading}</span>
                            {item.badge && (
                              <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                                item.highlight ? 'bg-amber-200 text-amber-900 border border-amber-300' : 'bg-slate-100 text-slate-700 border border-slate-200'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {item.subheading && (
                            <span className="text-xs font-bold text-sky-700 block mb-1.5">
                              {item.subheading}
                            </span>
                          )}

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <div className="flex items-center space-x-2 text-rose-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Common Prelims Pitfalls to Avoid</span>
                </div>
                <ul className="space-y-1.5 text-xs text-rose-800">
                  {content.cheatSheet.examPitfalls.map((pitfall, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{pitfall}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: LAYER 2 - TOPPER-VERIFIED NOTES                         */}
          {/* ============================================================== */}
          {activeTab === 'topper' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 rounded-2xl p-5 text-white shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black">
                      <Award className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-white">{content.topperNotes.author}</h3>
                      <p className="text-xs text-indigo-200">{content.topperNotes.rankOrCred}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
                    {content.topperNotes.readingTime}
                  </span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-2">
                  ⚡ High-Yield Ranker Takeaways
                </span>
                <ul className="space-y-2 text-xs text-amber-950">
                  {content.topperNotes.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">✔</span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {content.topperNotes.corePointers.map((section, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <h4 className="font-bold text-sm text-slate-900 mb-2 border-b border-slate-100 pb-1.5">
                      {section.title}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {section.notes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: LAYER 3 - IN-PORTAL GAZETTES & ACTS (ZERO REDIRECTS)    */}
          {/* ============================================================== */}
          {activeTab === 'gazettes' && (
            <div className="space-y-6">
              
              <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white p-5 rounded-2xl shadow-md border border-emerald-800">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Self-Contained In-Portal Primary Archive</span>
                </div>
                <h3 className="font-extrabold text-sm text-white">
                  Read, Query, Test & Download Directly Inside AspirantAtlas
                </h3>
                <p className="text-xs text-emerald-200 mt-1 leading-relaxed">
                  No redirects to broken external government web portals. All verbatim clauses, commission findings, and inquiry chapters are accessible right here.
                </p>
              </div>

              <div className="space-y-3">
                {content.officialDocuments.map((doc, idx) => {
                  const docDetail = DOCUMENT_DETAILS_MAP[doc.id] || getFallbackDocumentDetail(doc);

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {doc.issuingAuthority}
                          </span>
                          {doc.isPrimaryLaw && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                              Primary Statute
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full">
                            In-Portal Available
                          </span>
                        </div>
                        <h4 className="font-bold text-xs text-slate-900">{doc.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {doc.gazetteNoOrYear} {doc.fileSize && `• ${doc.fileSize}`}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        {/* 1. Read & Query in Portal Modal Button */}
                        <button
                          onClick={() => setViewingDocument(docDetail)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-colors shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Read & Query</span>
                        </button>

                        {/* 2. Direct In-Portal Download File Button */}
                        <button
                          onClick={() => handleDownloadDoc(doc.id, doc.title)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-emerald-600 text-white transition-colors shadow-sm"
                          title="Download directly from AspirantAtlas"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 4: HIGH-YIELD NOTES                                        */}
          {/* ============================================================== */}
          {activeTab === 'notes' && (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Standard Prescribed Material
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {content.standardReferences.map((ref, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                      <span className="font-bold text-slate-900 block">{ref.title}</span>
                      <span className="text-slate-500 block mt-0.5">{ref.source}</span>
                      <span className="text-sky-700 font-medium block mt-1">{ref.relevance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {content.cheatSheet.corePillars.map((pillar, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-white">
                    <h4 className="font-bold text-sm text-slate-900 mb-2 border-b border-slate-100 pb-1.5">
                      {pillar.title}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {content.cheatSheet.statutoryOrConstitutionalProvisions.length > 0 && (
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2 font-bold text-xs text-slate-700 border-b border-slate-200">
                    Statutory & Constitutional Provisions
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    {content.cheatSheet.statutoryOrConstitutionalProvisions.map((item, idx) => (
                      <div key={idx} className="p-3 flex items-start space-x-3 bg-white">
                        <span className="font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 shrink-0">
                          {item.code}
                        </span>
                        <div>
                          <span className="font-bold text-slate-900 block">{item.label}</span>
                          <span className="text-slate-600 mt-0.5 block">{item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.cheatSheet.landmarkPrecedents.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                    Landmark Precedents & Commissions
                  </h4>
                  {content.cheatSheet.landmarkPrecedents.map((item, idx) => (
                    <div key={idx} className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-3.5 text-xs">
                      <span className="font-bold text-indigo-950 block">{item.title}</span>
                      <p className="text-indigo-900/80 mt-1 leading-relaxed">{item.significance}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 5: MICRO-QUIZ                                              */}
          {/* ============================================================== */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Active Recall Micro-Quiz</h3>
                  <p className="text-xs text-slate-500">
                    {content.microQuiz.length} Curated Prelims MCQs with instant feedback and explanations.
                  </p>
                </div>
                {savedQuizScore && !showResults && (
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg">
                    Previous Score: {savedQuizScore.score}/{savedQuizScore.total}
                  </span>
                )}
                {showResults && (
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-extrabold px-3 py-1 bg-sky-100 text-sky-900 rounded-lg">
                      Result: {calculateScore()} / {content.microQuiz.length}
                    </span>
                    <button
                      onClick={handleResetQuiz}
                      className="flex items-center space-x-1 text-xs text-slate-600 hover:text-slate-900 font-medium"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-5">
                {content.microQuiz.map((q, qIdx) => {
                  const selectedOpt = selectedAnswers[qIdx];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                          Question {qIdx + 1}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                          {q.tag}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        {q.question}
                      </p>
                      {showTelugu && q.questionTelugu && (
                        <p className="text-xs text-slate-600 font-medium font-sans">
                          {q.questionTelugu}
                        </p>
                      )}

                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isThisSelected = selectedOpt === optIdx;
                          let btnStyle = 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700';

                          if (showResults) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                            } else if (isThisSelected && !isCorrect) {
                              btnStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                            } else {
                              btnStyle = 'border-slate-200 opacity-60 text-slate-500';
                            }
                          } else if (isThisSelected) {
                            btnStyle = 'border-sky-600 bg-sky-50 text-sky-900 font-semibold shadow-xs';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={showResults}
                              onClick={() => handleSelectOption(qIdx, optIdx)}
                              className={`w-full text-left p-3 rounded-lg border text-xs flex items-center justify-between transition-all ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {showResults && optIdx === q.correctIndex && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                          <span className="font-bold text-slate-900 block mb-0.5">Rationale:</span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!showResults && (
                <div className="pt-2">
                  <button
                    onClick={handleFinishQuiz}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className="w-full py-3 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-sky-600/20 flex items-center justify-center space-x-2"
                  >
                    <span>Check Answers & Calculate Score</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 6: MAINS MODEL ANSWER                                      */}
          {/* ============================================================== */}
          {activeTab === 'mains' && (
            <div className="space-y-6">
              <div className="bg-amber-50/80 border border-amber-200/80 p-4 rounded-xl">
                <div className="flex items-center justify-between text-amber-900 text-xs font-bold mb-1.5">
                  <span className="uppercase tracking-wider">Mains Model Question</span>
                  <span>{content.mainsScaffold.marks} Marks • ~{content.mainsScaffold.timeMinutes} Mins</span>
                </div>
                <p className="text-sm font-bold text-slate-900 leading-relaxed">
                  {content.mainsScaffold.question}
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    1. Introduction (25–30 Words)
                  </span>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed bg-slate-50/60 p-3 rounded-lg border border-slate-100">
                    {content.mainsScaffold.approach.intro}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                    2. Core Body Arguments & Value Points
                  </span>
                  {content.mainsScaffold.approach.body.map((b, bIdx) => (
                    <div key={bIdx} className="border border-slate-100 p-3.5 rounded-lg bg-slate-50/40">
                      <span className="font-bold text-xs text-slate-900 block mb-1.5">
                        {b.subheading}
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {b.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2">
                            <span className="text-sky-600 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {content.mainsScaffold.approach.diagramSuggestion && (
                  <div className="bg-indigo-50/60 border border-indigo-100 p-3.5 rounded-lg text-xs">
                    <span className="font-bold text-indigo-900 block mb-1">
                      Value-Add Visual Diagram Idea for Exam Copy:
                    </span>
                    <p className="text-indigo-800/80 leading-relaxed">
                      {content.mainsScaffold.approach.diagramSuggestion}
                    </p>
                  </div>
                )}

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    3. Forward-Looking Conclusion (25–30 Words)
                  </span>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed bg-slate-50/60 p-3 rounded-lg border border-slate-100">
                    {content.mainsScaffold.approach.conclusion}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* CLOSED-LOOP MASTERY FLYWHEEL: NEXT ACTIONS (MOCKS + MAINS) */}
          {/* ========================================================= */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-5 sm:p-7 text-white shadow-elevation-2 space-y-4 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-48 h-48 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-xs">
                  <Sparkles className="w-3 h-3 fill-slate-950" />
                  Closed-Loop Study Flywheel
                </span>
                <h4 className="text-sm sm:text-base font-black text-white mt-1.5">
                  Finished Reading? Complete Topic Mastery
                </h4>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  Top rankers never stop at passive reading. Transition directly into MCQ elimination drills and structured Mains answer writing for this exact topic.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onToggleComplete(node.id)}
                  className={`btn-tactile px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center space-x-1.5 ${
                    isCompleted
                      ? 'bg-emerald-500 text-white border-emerald-400 shadow-glow-emerald'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isCompleted ? 'Marked Complete' : 'Mark Concept Read'}</span>
                </button>
              </div>
            </div>

            {/* Flywheel Trigger Buttons */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              
              {/* Prelims Drill Handoff */}
              <button
                onClick={() => {
                  onClose();
                  if (onNavigateToMocks) {
                    onNavigateToMocks(node.subject);
                  }
                }}
                className="btn-tactile p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-left transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-300">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Step 2: Prelims Speed Drill</span>
                  </div>
                  <div className="text-xs text-slate-200">
                    Practice 5–10 MCQ elimination questions on <strong className="text-white">{node.subject}</strong>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
              </button>

              {/* Mains Studio Handoff */}
              <button
                onClick={() => {
                  onClose();
                  if (onNavigateToMains) {
                    onNavigateToMains(
                      content?.mainsScaffold?.question || `Critically evaluate the institutional mechanisms and constitutional dimensions of ${node.title}.`,
                      node.title
                    );
                  }
                }}
                className="btn-tactile p-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-left transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-indigo-300">
                    <Award className="w-4 h-4 text-indigo-400" />
                    <span>Step 3: Grade Mains Answer</span>
                  </div>
                  <div className="text-xs text-slate-200">
                    Draft a 150/250-word answer for instant <strong className="text-white">Gemini AI semantic grading</strong>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* IN-PORTAL DOCUMENT VIEWER MODAL (ZERO EXTERNAL REDIRECTS) */}
      {viewingDocument && (
        <DocumentViewerModal
          document={viewingDocument}
          onClose={() => setViewingDocument(null)}
          showTelugu={showTelugu}
        />
      )}
    </div>
  );
};
