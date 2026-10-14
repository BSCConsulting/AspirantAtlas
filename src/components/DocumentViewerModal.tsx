import React, { useState } from 'react';
import { DocumentDetail } from '../types';
import { 
  X, ShieldCheck, Download, Printer, BookOpen, HelpCircle, 
  CheckCircle2, Search, Sparkles, FileText, ArrowRight, Award,
  Check, RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DocumentViewerModalProps {
  document: DocumentDetail;
  onClose: () => void;
  showTelugu: boolean;
}

type DocTab = 'read' | 'queries' | 'test';

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  document,
  onClose,
  showTelugu
}) => {
  const [activeTab, setActiveTab] = useState<DocTab>('read');
  const [querySearch, setQuerySearch] = useState('');

  // Test state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showTestResults, setShowTestResults] = useState(false);

  const filteredQueries = document.queriesAndAnswers.filter(q => {
    if (!querySearch.trim()) return true;
    const term = querySearch.toLowerCase();
    return q.question.toLowerCase().includes(term) || q.answer.toLowerCase().includes(term);
  });

  const handleSelectTestOption = (qIdx: number, optIdx: number) => {
    if (showTestResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateTestScore = () => {
    let score = 0;
    document.testQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleFinishTest = () => {
    setShowTestResults(true);
    const score = calculateTestScore();
    if (score === document.testQuestions.length) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  // Direct In-Portal Download Trigger
  const handleDirectDownload = () => {
    // Generate clean self-contained text/html printable format
    const contentText = `
================================================================================
${document.title.toUpperCase()}
Authority: ${document.issuingAuthority}
Date: ${document.dateOrYear} | Pages: ${document.pages}
Source: AspirantAtlas Open Civil Services Repository
================================================================================

SUMMARY:
${document.summary}

--------------------------------------------------------------------------------
DOCUMENT SECTIONS & STATUTORY CLAUSES:
--------------------------------------------------------------------------------
${document.sections.map(s => `
[${s.numberOrCode}] ${s.title}
${s.keyHighlight ? `Key Highlight: ${s.keyHighlight}\n` : ''}
${s.content.map(c => `• ${c}`).join('\n')}
`).join('\n--------------------------------------------------------------------------------\n')}

--------------------------------------------------------------------------------
EXAM QUERIES & MODEL Q&A:
--------------------------------------------------------------------------------
${document.queriesAndAnswers.map((qa, i) => `
Q${i + 1}: ${qa.question}
Answer: ${qa.answer}
Exam Tip: ${qa.examTip}
`).join('\n')}
    `.trim();

    const blob = new Blob([contentText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = document.pdfFilename.replace('.pdf', '-AspirantAtlas.txt');
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[94vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white flex items-center justify-between border-b border-emerald-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/90 px-2 py-0.5 rounded-full border border-emerald-800 flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Primary Document Archive</span>
              </span>
              <span className="text-[11px] text-slate-300 font-medium">{document.pages}</span>
            </div>
            <h2 className="text-lg font-bold mt-1 text-white tracking-tight leading-snug">
              {document.title}
            </h2>
            {showTelugu && document.titleTelugu && (
              <p className="text-xs text-emerald-200 font-sans mt-0.5">{document.titleTelugu}</p>
            )}
            <p className="text-[11px] text-slate-400 mt-0.5">
              {document.issuingAuthority} • {document.dateOrYear}
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {/* Direct Portal Download Button */}
            <button
              onClick={handleDirectDownload}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all shadow-md"
              title="Download Document directly to device"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-2 space-x-2">
          {[
            { id: 'read', label: '1. Read Full Document', icon: BookOpen },
            { id: 'queries', label: '2. Exam Q&A & Queries', icon: Search, count: `${document.queriesAndAnswers.length}` },
            { id: 'test', label: '3. Document Test Paper', icon: HelpCircle, count: `${document.testQuestions.length} Qs` },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DocTab)}
                className={`flex items-center space-x-2 py-3 px-4 border-b-2 text-xs font-bold transition-all whitespace-nowrap ${
                  active
                    ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg shadow-xs -mb-px'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.count && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                    active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-800">
          
          {/* TAB 1: READ DOCUMENT */}
          {activeTab === 'read' && (
            <div className="space-y-6">
              
              {/* Executive Summary Box */}
              <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl text-xs leading-relaxed text-emerald-950">
                <span className="font-extrabold text-emerald-900 block mb-1 text-sm">
                  Official Document Overview & Purpose
                </span>
                {document.summary}
              </div>

              {/* Sections Breakdown */}
              <div className="space-y-4">
                {document.sections.map((section, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                          {section.numberOrCode}
                        </span>
                        <h4 className="font-bold text-sm text-slate-900">{section.title}</h4>
                      </div>
                      {section.keyHighlight && (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                          High-Yield
                        </span>
                      )}
                    </div>

                    {section.keyHighlight && (
                      <div className="bg-amber-50/70 border border-amber-200 p-2.5 rounded-lg mb-3 text-xs text-amber-900 font-medium">
                        <strong>Key Takeaway:</strong> {section.keyHighlight}
                      </div>
                    )}

                    <ul className="space-y-2 text-xs text-slate-700">
                      {section.content.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 2: EXAM QUERIES & Q&A */}
          {activeTab === 'queries' && (
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search queries and topics within this document..."
                    value={querySearch}
                    onChange={(e) => setQuerySearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {filteredQueries.length} Queries Found
                </span>
              </div>

              <div className="space-y-3">
                {filteredQueries.map((qa, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs space-y-2">
                    <h4 className="font-bold text-xs text-slate-900 flex items-start space-x-2">
                      <span className="text-emerald-600 font-extrabold text-sm leading-none">Q.</span>
                      <span>{qa.question}</span>
                    </h4>

                    <div className="pl-4 text-xs text-slate-700 leading-relaxed bg-slate-50/60 p-3 rounded-lg border border-slate-100">
                      {qa.answer}
                    </div>

                    <div className="pl-4 flex items-center space-x-2 text-[11px] text-amber-800 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span><strong>Exam Pointer:</strong> {qa.examTip}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 3: DOCUMENT TEST PAPER */}
          {activeTab === 'test' && (
            <div className="space-y-5">
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Document Mastery Check</h4>
                  <p className="text-[11px] text-slate-500">Test your command over this specific gazette/report.</p>
                </div>
                {showTestResults && (
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-lg">
                      Score: {calculateTestScore()} / {document.testQuestions.length}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedAnswers({});
                        setShowTestResults(false);
                      }}
                      className="text-xs text-slate-600 hover:text-slate-900 flex items-center space-x-1 font-semibold"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {document.testQuestions.map((q, qIdx) => {
                  const selectedOpt = selectedAnswers[qIdx];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                  return (
                    <div key={q.id} className="border border-slate-200 rounded-xl p-4 bg-white space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Question {qIdx + 1}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">{q.tag}</span>
                      </div>

                      <p className="text-xs font-bold text-slate-900 leading-snug">{q.question}</p>

                      <div className="space-y-1.5 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isThis = selectedOpt === optIdx;
                          let btnStyle = 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700';

                          if (showTestResults) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                            } else if (isThis && !isCorrect) {
                              btnStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                            } else {
                              btnStyle = 'border-slate-200 opacity-60 text-slate-400';
                            }
                          } else if (isThis) {
                            btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={showTestResults}
                              onClick={() => handleSelectTestOption(qIdx, optIdx)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {showTestResults && optIdx === q.correctIndex && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showTestResults && (
                        <div className="mt-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
                          <strong>Rationale:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!showTestResults && (
                <button
                  onClick={handleFinishTest}
                  disabled={Object.keys(selectedAnswers).length === 0}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Evaluate Test Score</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
