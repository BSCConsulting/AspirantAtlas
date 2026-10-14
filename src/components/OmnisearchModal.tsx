import React, { useState, useEffect, useRef } from 'react';
import { OmnisearchItem } from '../types';
import { ActiveNavTab } from './Header';
import { SYLLABUS_NODES } from '../data/curriculum';
import { DOCUMENT_DETAILS_MAP } from '../data/documentDetails';
import { MOCK_TESTS } from '../data/mockTests';
import { CURRENT_AFFAIRS_ITEMS } from '../data/currentAffairs';
import { 
  Search, 
  X, 
  BookOpen, 
  Sparkles, 
  Award, 
  Scale, 
  Layers, 
  FileText, 
  ChevronRight, 
  CornerDownLeft,
  ArrowRight
} from 'lucide-react';

interface OmnisearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: ActiveNavTab, payload?: { nodeId?: string; documentId?: string; testId?: string }) => void;
  showTelugu: boolean;
}

export const OmnisearchModal: React.FC<OmnisearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  showTelugu
}) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Build the master searchable index
  const searchIndex: OmnisearchItem[] = [
    // 1. Syllabus Nodes
    ...SYLLABUS_NODES.map((node) => ({
      id: `topic-${node.id}`,
      type: 'topic' as const,
      title: node.title,
      titleTelugu: node.titleTelugu,
      category: 'Syllabus Hub',
      snippet: `${node.subject} • ${node.keyConcepts.slice(0, 3).join(', ')}`,
      targetTab: 'roadmap' as ActiveNavTab,
      nodeId: node.id
    })),

    // 2. Resource Vault Primary Documents
    ...Object.entries(DOCUMENT_DETAILS_MAP).map(([docId, doc]) => ({
      id: `doc-${docId}`,
      type: 'document' as const,
      title: doc.title,
      titleTelugu: doc.titleTelugu,
      category: 'Resource Vault',
      snippet: `${doc.issuingAuthority} • ${doc.summary.slice(0, 90)}...`,
      targetTab: 'vault' as ActiveNavTab,
      documentId: docId
    })),

    // 3. Mock Tests
    ...MOCK_TESTS.map((test) => ({
      id: `mock-${test.id}`,
      type: 'mock-test' as const,
      title: test.title,
      titleTelugu: test.titleTelugu,
      category: 'Prelims Mocks',
      snippet: `${test.subject} • ${test.questions.length} Questions • ${test.durationMinutes} mins`,
      targetTab: 'mock-tests' as ActiveNavTab,
      testId: test.id
    })),

    // 4. Current Affairs
    ...CURRENT_AFFAIRS_ITEMS.map((ca) => ({
      id: `ca-${ca.id}`,
      type: 'current-affairs' as const,
      title: ca.title,
      titleTelugu: ca.titleTelugu,
      category: 'Editorial Bridge',
      snippet: `${ca.source} • ${ca.summary.slice(0, 90)}...`,
      targetTab: 'current-affairs' as ActiveNavTab,
      nodeId: ca.linkedNodeId
    })),

    // 5. Mains Prompts
    {
      id: 'mains-governor',
      type: 'mains-prompt' as const,
      title: 'Governor Office: Federal Bridge vs Friction Point (Article 200/356)',
      titleTelugu: 'గవర్నర్ వ్యవస్థ & సమాఖ్య వివాదాలు',
      category: 'Mains Studio',
      snippet: '15 Marks Model Answer • Sarkaria & Punchhi Commissions • SC 2024 Guidelines',
      targetTab: 'mains-evaluator' as ActiveNavTab
    },
    {
      id: 'mains-sub-class',
      type: 'mains-prompt' as const,
      title: 'Sub-classification of SCs & STs: Substantive Equality (7-Judge Bench)',
      titleTelugu: 'ఎస్సీ, ఎస్టీ ఉపవర్గీకరణ & సమానత్వ సూత్రం',
      category: 'Mains Studio',
      snippet: '15 Marks Model Answer • Articles 14, 15(4), 16(4), 341 • Davinder Singh Case',
      targetTab: 'mains-evaluator' as ActiveNavTab
    },
    {
      id: 'mains-ap-bifurcation',
      type: 'mains-prompt' as const,
      title: 'AP Reorganisation Act 2014: Fiscal Deficit & Capital Revival',
      titleTelugu: 'ఏపీ పునర్విభజన చట్టం 2014 & ఆర్థిక సవాళ్లు',
      category: 'Mains Studio',
      snippet: '15 Marks Model Answer • Section 46, 90 Polavaram & Amaravati Reconstruction',
      targetTab: 'mains-evaluator' as ActiveNavTab
    }
  ];

  // Filtering results
  const q = query.trim().toLowerCase();
  const results = searchIndex.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
    if (!matchesCategory) return false;

    if (!q) return true;

    const inTitle = item.title.toLowerCase().includes(q);
    const inTelugu = item.titleTelugu ? item.titleTelugu.includes(q) : false;
    const inSnippet = item.snippet.toLowerCase().includes(q);
    const inCategory = item.category.toLowerCase().includes(q);

    return inTitle || inTelugu || inSnippet || inCategory;
  }).slice(0, 10);

  // Keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (item: OmnisearchItem) => {
    onNavigate(item.targetTab, {
      nodeId: item.nodeId,
      documentId: item.documentId,
      testId: item.testId
    });
    onClose();
  };

  if (!isOpen) return null;

  const getIcon = (type: OmnisearchItem['type']) => {
    switch (type) {
      case 'topic':
        return <Layers className="w-4 h-4 text-sky-600" />;
      case 'document':
        return <BookOpen className="w-4 h-4 text-emerald-600" />;
      case 'mock-test':
        return <Sparkles className="w-4 h-4 text-amber-600" />;
      case 'mains-prompt':
        return <Award className="w-4 h-4 text-indigo-600" />;
      case 'current-affairs':
        return <Scale className="w-4 h-4 text-teal-600" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 p-4 flex items-center space-x-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={showTelugu ? "సిలబస్, వాల్ట్ పుస్తకాలు, మాక్ టెస్ట్స్, కరెంట్ అఫైర్స్ వెతకండి..." : "Search syllabus, primary docs, mock tests, current affairs, articles..."}
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] font-mono font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 p-3 px-4 border-b border-slate-100 bg-white overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'All' },
            { id: 'topic', label: 'Syllabus' },
            { id: 'document', label: 'Vault Docs' },
            { id: 'mock-test', label: 'Prelims Mocks' },
            { id: 'mains-prompt', label: 'Mains Prompts' },
            { id: 'current-affairs', label: 'Current Affairs' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-colors whitespace-nowrap text-[11px] ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              No matching resources found for "{query}". Try searching for <span className="font-semibold text-slate-600">Constitution</span>, <span className="font-semibold text-slate-600">Polavaram</span>, or <span className="font-semibold text-slate-600">Article 32</span>.
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors flex items-center justify-between text-xs ${
                    isSelected ? 'bg-sky-50/80 text-sky-950 font-medium' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-start space-x-3 min-w-0 pr-3">
                    <div className="mt-0.5 p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs shrink-0">
                      {getIcon(item.type)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-slate-900 truncate">
                          {showTelugu && item.titleTelugu ? item.titleTelugu : item.title}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {item.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 text-slate-400 shrink-0">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded">
                        <span>Select</span>
                        <CornerDownLeft className="w-2.5 h-2.5" />
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer Key Hints */}
        <div className="p-3 px-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center space-x-3">
            <span><kbd className="font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px]">↑</kbd> <kbd className="font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px]">↓</kbd> to navigate</span>
            <span><kbd className="font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px]">↵</kbd> to select</span>
          </div>
          <span>AspirantAtlas Omnisearch</span>
        </div>
      </div>
    </div>
  );
};
