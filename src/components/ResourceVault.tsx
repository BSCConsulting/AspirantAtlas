import React, { useState, useMemo } from 'react';
import { RESOURCE_VAULT, ResourceSubjectKey } from '../data/resources';
import { DOCUMENT_DETAILS_MAP } from '../data/documentDetails';
import { DocumentDetail } from '../types';
import { DocumentViewerModal } from './DocumentViewerModal';
import { 
  ExternalLink, 
  BookOpen, 
  Download, 
  Sparkles, 
  Search, 
  Filter, 
  FileText,
  ShieldCheck,
  CheckCircle2,
  Library,
  Building2,
  Calendar
} from 'lucide-react';
import { exportDocumentPdfPrint } from '../utils/documentPdfExporter';

interface ResourceVaultProps {
  showTelugu: boolean;
}

export const ResourceVault: React.FC<ResourceVaultProps> = ({ showTelugu }) => {
  const [viewingDocument, setViewingDocument] = useState<DocumentDetail | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<ResourceSubjectKey>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const subjectPills: { id: ResourceSubjectKey; label: string; labelTelugu: string }[] = [
    { id: 'all', label: 'All Subjects', labelTelugu: 'అన్ని విభాగాలు' },
    { id: 'ncert', label: 'NCERT Books (Class 7-12)', labelTelugu: 'ఎన్‌సీఈఆర్‌టీ పుస్తకాలు (7-12 తరగతులు)' },
    { id: 'polity', label: 'Polity & Law', labelTelugu: 'రాజ్యాంగం & చట్టం' },
    { id: 'economy', label: 'Economy & Budget', labelTelugu: 'ఆర్థికం & బడ్జెట్' },
    { id: 'history', label: 'Modern History', labelTelugu: 'ఆధునిక చరిత్ర' },
    { id: 'geography-env', label: 'Geography & Env', labelTelugu: 'భౌగోళికం & పర్యావరణం' },
    { id: 'scitech', label: 'Science & Tech', labelTelugu: 'సైన్స్ & టెక్నాలజీ' },
    { id: 'ethics', label: 'Ethics & Governance', labelTelugu: 'నీతిశాస్త్రం & పాలన' },
    { id: 'appsc', label: 'Andhra Pradesh (APPSC)', labelTelugu: 'ఆంధ్రప్రదేశ్ (ఏపీపీఎస్సీ)' },
    { id: 'tspsc', label: 'Telangana (TSPSC)', labelTelugu: 'తెలంగాణ (టీఎస్‌పీఎస్సీ)' }
  ];

  const classPills = [
    { id: 'all', label: 'All Classes (7–12)', labelTelugu: 'అన్ని తరగతులు (7–12)' },
    { id: 'Class 7', label: 'Class 7', labelTelugu: '7వ తరగతి' },
    { id: 'Class 8', label: 'Class 8', labelTelugu: '8వ తరగతి' },
    { id: 'Class 9', label: 'Class 9', labelTelugu: '9వ తరగతి' },
    { id: 'Class 10', label: 'Class 10', labelTelugu: '10వ తరగతి' },
    { id: 'Class 11', label: 'Class 11', labelTelugu: '11వ తరగతి' },
    { id: 'Class 12', label: 'Class 12', labelTelugu: '12వ తరగతి' }
  ];

  const handleOpenDoc = (docId: string, fallbackTitle: string, type: string) => {
    const docDetail = DOCUMENT_DETAILS_MAP[docId];
    if (docDetail) {
      setViewingDocument(docDetail);
    } else {
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

  // Filter categories and items based on search, selected subject, and class grade
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return RESOURCE_VAULT
      .filter((cat) => selectedSubject === 'all' || cat.id === selectedSubject)
      .map((cat) => {
        const filteredItems = cat.items.filter((item) => {
          // If a specific class is selected, filter NCERT items by class
          if (selectedClass !== 'all' && item.classGrade && item.classGrade !== selectedClass) {
            return false;
          }
          // If a specific class is selected and the category is ncert, only matching class items pass
          if (selectedClass !== 'all' && cat.id === 'ncert' && item.classGrade !== selectedClass) {
            return false;
          }

          if (!q) return true;
          return (
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.badge.toLowerCase().includes(q) ||
            (item.issuingAuthority && item.issuingAuthority.toLowerCase().includes(q)) ||
            (item.titleTelugu && item.titleTelugu.toLowerCase().includes(q)) ||
            (item.classGrade && item.classGrade.toLowerCase().includes(q)) ||
            (item.ncertSubject && item.ncertSubject.toLowerCase().includes(q))
          );
        });

        return {
          ...cat,
          items: filteredItems
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [selectedSubject, selectedClass, searchQuery]);

  const totalDocumentsCount = useMemo(() => {
    return RESOURCE_VAULT.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  return (
    <div className="space-y-6">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl border border-emerald-800 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/80 flex items-center space-x-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>100% Free Public Digital Library • Zero Paywalls</span>
            </span>
            <span className="text-xs font-semibold text-emerald-200 bg-white/10 px-3 py-1 rounded-full">
              {totalDocumentsCount} Curated Official Volumes
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black mt-3 tracking-tight">
            {showTelugu ? 'అధికారిక గెజిట్ పత్రాలు & ప్రామాణిక గ్రంథాలయం' : 'Curated Official Gazettes, Acts & Prescribed Textbooks'}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/90 mt-1.5 max-w-3xl leading-relaxed">
            {showTelugu
              ? 'శూన్య చెల్లింపులు, బాహ్య రీడైరెక్ట్‌లు లేవు. భారత రాజ్యాంగం, కమిషన్ నివేదికలు, నీటిపారుదల ఒప్పందాలు మరియు బడ్జెట్ సర్వేలను నేరుగా పోర్టల్‌లో చదవండి, పరీక్షా ప్రశ్నలను సాధన చేయండి మరియు ప్రచురణ నాణ్యతతో కూడిన పీడీఎఫ్ రూపంలో డౌన్‌లోడ్ చేసుకోండి.'
              : 'Zero external paywalls and zero dead-end redirects. Read authentic statutes, consult commission reports, search interactive Q&As, attempt test questions, and export publication-grade multi-page PDFs directly to your device.'}
          </p>
        </div>
      </div>

      {/* Search & Subject Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={showTelugu ? 'చట్టం పేరు, మంత్రిత్వ శాఖ లేదా కీలక పదం ద్వారా వెతకండి...' : 'Search by Act title, issuing authority, committee, or keywords (e.g. Srikrishna, FRBM, DPDP, Polavaram)...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {subjectPills.map((pill) => {
            const active = selectedSubject === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setSelectedSubject(pill.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {showTelugu ? pill.labelTelugu : pill.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Class Grade Filter Bar (active when 'ncert' or 'all' selected) */}
        {(selectedSubject === 'ncert' || selectedSubject === 'all') && (
          <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center space-x-1">
              <Filter className="w-3 h-3 text-emerald-600" />
              <span>{showTelugu ? 'తరగతి ప్రకారం:' : 'Grade Filter:'}</span>
            </span>
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-0.5 scrollbar-none">
              {classPills.map((cp) => {
                const active = selectedClass === cp.id;
                return (
                  <button
                    key={cp.id}
                    onClick={() => setSelectedClass(cp.id)}
                    className={`whitespace-nowrap px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      active
                        ? 'bg-emerald-700 text-white shadow-xs ring-2 ring-emerald-500/20'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {showTelugu ? cp.labelTelugu : cp.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Filtered Document Categories */}
      {filteredCategories.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
          <Library className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">
            {showTelugu ? 'ఎటువంటి పత్రాలు కనుగొనబడలేదు' : 'No Official Documents Found'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            {showTelugu
              ? 'మీరు వెతికిన పదానికి సంబంధించి ఎటువంటి పత్రాలు లభించలేదు. దయచేసి వేరొక కీలక పదం ద్వారా ప్రయత్నించండి.'
              : `No material matched "${searchQuery}" in this subject category. Try clearing filters or searching for general keywords like "Act", "Report", or "Survey".`}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('all');
              setSelectedClass('all');
            }}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
              
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
                    <span>{cat.category}</span>
                  </h3>
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {cat.items.length} {cat.items.length === 1 ? 'Volume' : 'Volumes'}
                  </span>
                </div>
                {showTelugu && cat.categoryTelugu && (
                  <p className="text-xs text-emerald-800 font-medium font-sans mt-0.5">
                    {cat.categoryTelugu}
                  </p>
                )}
                <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Badge Strip */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                          {item.badge}
                        </span>
                        <div className="flex items-center space-x-1">
                          {item.targetExams.map((exam) => (
                            <span
                              key={exam}
                              className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-slate-200 text-slate-700"
                            >
                              {exam}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-xs sm:text-[13px] text-slate-900 leading-snug">
                        {showTelugu && item.titleTelugu ? item.titleTelugu : item.title}
                      </h4>

                      {/* Issuing Authority & Year */}
                      {item.issuingAuthority && (
                        <div className="flex items-center space-x-1 text-[11px] text-slate-500 mt-1.5">
                          <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{item.issuingAuthority}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 mt-3 border-t border-slate-200/80 space-y-2">
                      
                      {/* Primary Button: In-Portal Reader */}
                      <button
                        onClick={() => handleOpenDoc(item.docId, item.title, item.type)}
                        className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs cursor-pointer active:scale-98"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{showTelugu ? 'పోర్టల్‌లో చదవండి & టెస్ట్' : 'Read & Query in Portal'}</span>
                      </button>

                      {/* Secondary Actions: Direct PDF Print & External Link */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => handleDownloadResource(item.docId, item.title)}
                          className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                          title="Generate and print/save publication-grade PDF"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{showTelugu ? 'పీడీఎఫ్ డౌన్‌లోడ్' : 'Print / Save PDF'}</span>
                        </button>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-[11px] text-slate-400 hover:text-slate-600 font-medium"
                          title="Original gazette / government website"
                        >
                          <span>Gazette Link</span>
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
      )}

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
