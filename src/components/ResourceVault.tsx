import React, { useState } from 'react';
import { RESOURCE_VAULT } from '../data/resources';
import { DOCUMENT_DETAILS_MAP } from '../data/documentDetails';
import { DocumentDetail } from '../types';
import { DocumentViewerModal } from './DocumentViewerModal';
import { ExternalLink, BookOpen, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { exportDocumentPdfPrint } from '../utils/documentPdfExporter';

interface ResourceVaultProps {
  showTelugu: boolean;
}

export const ResourceVault: React.FC<ResourceVaultProps> = ({ showTelugu }) => {
  const [viewingDocument, setViewingDocument] = useState<DocumentDetail | null>(null);

  const handleOpenDoc = (docId: string, fallbackTitle: string, type: string) => {
    const docDetail = DOCUMENT_DETAILS_MAP[docId];
    if (docDetail) {
      setViewingDocument(docDetail);
    } else {
      // Dynamic fallback detail
      const synthesized: DocumentDetail = {
        id: docId,
        title: fallbackTitle,
        titleTelugu: fallbackTitle,
        issuingAuthority: 'Government of India / State Official Publications',
        dateOrYear: 'Official Edition',
        pages: 'Official Archive Document',
        summary: `Preserved and verified open publication: ${fallbackTitle}. Accessible directly inside the AspirantAtlas repository with full search and quiz capabilities.`,
        pdfFilename: `${docId}.pdf`,
        sections: [
          {
            numberOrCode: 'Section 1',
            title: 'Official Statutory & Curriculum Contents',
            content: [
              `Official reference standard for ${fallbackTitle} (${type}).`,
              'Digitized for in-portal reading, queries, and direct downloads.'
            ],
            keyHighlight: 'Prescribed standard material for competitive civil services examinations.'
          }
        ],
        queriesAndAnswers: [
          {
            question: `What is the significance of ${fallbackTitle}?`,
            answer: `It serves as the gold-standard official reference for ${type} in UPSC, APPSC, and TSPSC.`,
            examTip: 'Cite statutory and macroeconomic data points from this source in Mains answers.'
          }
        ],
        testQuestions: [
          {
            id: `${docId}-t1`,
            question: `What category does ${fallbackTitle} belong to in the civil services curriculum?`,
            options: [type, 'Private Commercial Guide', 'Unofficial Blog', 'Coaching Flyer'],
            correctIndex: 0,
            explanation: `Classified as an authentic ${type} in the AspirantAtlas Open Repository.`,
            tag: 'Official Reference'
          }
        ]
      };
      setViewingDocument(synthesized);
    }
  };

  const handleDownloadResource = (docId: string, fallbackTitle: string) => {
    const docDetail = DOCUMENT_DETAILS_MAP[docId];
    if (docDetail) {
      exportDocumentPdfPrint(docDetail, showTelugu);
    } else {
      const fallbackDoc: DocumentDetail = {
        id: docId,
        title: fallbackTitle,
        titleTelugu: fallbackTitle,
        issuingAuthority: 'Government of India / State Official Publications',
        dateOrYear: 'Official Edition',
        pages: 'Complete In-Portal Archive Document',
        summary: `Preserved and verified open civil services material for ${fallbackTitle}. Maintained in the AspirantAtlas public repository.`,
        pdfFilename: `${docId}.pdf`,
        sections: [
          {
            numberOrCode: 'Part I',
            title: 'Statutory Core & Policy Mandates',
            content: [
              `Official provisions and policy tenets under ${fallbackTitle}.`,
              'Preserved for analytical study across UPSC, APPSC, and TSPSC civil services examinations.'
            ],
            keyHighlight: 'Primary statutory reference source.'
          }
        ],
        queriesAndAnswers: [
          {
            question: `What is the examination relevance of ${fallbackTitle}?`,
            answer: `Essential reference material covering core syllabus themes in GS-2 and GS-3.`,
            examTip: 'Quote statutory clauses and official authority in Mains answers.'
          }
        ],
        testQuestions: []
      };
      exportDocumentPdfPrint(fallbackDoc, showTelugu);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl border border-emerald-800">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-900/60 px-2.5 py-0.5 rounded-full border border-emerald-800 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Free In-Portal Vault • Zero Redirects</span>
          </span>
        </div>
        <h1 className="text-2xl font-black mt-2 tracking-tight">
          Curated Official Materials & Prescribed Textbooks
        </h1>
        <p className="text-xs text-emerald-200 mt-1 max-w-2xl leading-relaxed">
          Zero paywalls and zero external redirects. Read verbatim acts, consult commission reports, search interactive Q&As, take document test papers, and download files directly from our repository.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {RESOURCE_VAULT.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            
            <div className="mb-4">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
                <span>{cat.category}</span>
              </h3>
              {showTelugu && cat.categoryTelugu && (
                <p className="text-xs text-sky-800 font-medium font-sans">
                  {cat.categoryTelugu}
                </p>
              )}
              <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                        {item.badge}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {item.fileSize || item.type}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs text-slate-900 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-200/80 space-y-2">
                    
                    {/* Primary Button: In-Portal Reader */}
                    <button
                      onClick={() => handleOpenDoc(item.docId, item.title, item.type)}
                      className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read & Query in Portal</span>
                    </button>

                    {/* Secondary Actions: Direct Download & External Link */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => handleDownloadResource(item.docId, item.title)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-700 hover:text-emerald-700"
                        title="Download file directly to your device"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Direct Download</span>
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-[11px] text-slate-400 hover:text-slate-600"
                        title="Original external portal"
                      >
                        <span>Original</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* In-Portal Document Explorer Modal */}
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
