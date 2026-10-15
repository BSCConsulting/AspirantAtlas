import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  Compass, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  BookOpen, 
  Landmark, 
  Wheat, 
  Factory, 
  Shield, 
  Award, 
  ChevronRight, 
  Info,
  Waves,
  Mountain,
  FileText,
  Volume2
} from 'lucide-react';
import { 
  TELANGANA_DISTRICTS, 
  ANDHRA_PRADESH_DISTRICTS, 
  INDIA_STATES, 
  DistrictGeoItem, 
  StateGeoItem 
} from '../data/geoMapData';
import { ExamId } from '../types';
import { playClick, playChime } from '../services/soundService';

export type MapViewType = 'india' | 'telangana' | 'andhra';

interface DynamicGeoAtlasProps {
  showTelugu: boolean;
  selectedExam: ExamId;
  onSelectExam?: (exam: ExamId) => void;
  onNavigateVault?: (subjectFilter?: string) => void;
}

export const DynamicGeoAtlas: React.FC<DynamicGeoAtlasProps> = ({
  showTelugu,
  selectedExam,
  onSelectExam,
  onNavigateVault
}) => {
  const [activeMap, setActiveMap] = useState<MapViewType>(() => {
    if (selectedExam === 'tspsc') return 'telangana';
    if (selectedExam === 'appsc') return 'andhra';
    return 'india';
  });

  const [selectedTgDistrict, setSelectedTgDistrict] = useState<DistrictGeoItem>(TELANGANA_DISTRICTS[0]); // Hyderabad
  const [selectedApDistrict, setSelectedApDistrict] = useState<DistrictGeoItem>(ANDHRA_PRADESH_DISTRICTS[3]); // Visakhapatnam
  const [selectedIndiaState, setSelectedIndiaState] = useState<StateGeoItem>(INDIA_STATES[0]); // AP

  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const handleSelectMap = (mapType: MapViewType) => {
    playClick();
    setActiveMap(mapType);
    setSearchQuery('');
    setFilterRegion('all');
  };

  // Filtered lists for search
  const filteredTgDistricts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return TELANGANA_DISTRICTS.filter(d => {
      const matchesSearch = !q || d.name.toLowerCase().includes(q) || d.nameTelugu.includes(q) || d.hq.toLowerCase().includes(q) || d.heritage.toLowerCase().includes(q);
      const matchesZone = filterRegion === 'all' || (d.zone && d.zone.includes(filterRegion));
      return matchesSearch && matchesZone;
    });
  }, [searchQuery, filterRegion]);

  const filteredApDistricts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return ANDHRA_PRADESH_DISTRICTS.filter(d => {
      const matchesSearch = !q || d.name.toLowerCase().includes(q) || d.nameTelugu.includes(q) || d.hq.toLowerCase().includes(q) || d.heritage.toLowerCase().includes(q);
      const matchesRegion = filterRegion === 'all' || d.region === filterRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, filterRegion]);

  const filteredIndiaStates = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return INDIA_STATES.filter(s => {
      return !q || s.name.toLowerCase().includes(q) || s.nameTelugu.includes(q) || s.capital.toLowerCase().includes(q) || s.psc.toLowerCase().includes(q);
    });
  }, [searchQuery]);

  return (
    <div className="space-y-6 animate-fadeIn pb-12 w-full max-w-7xl mx-auto px-2 sm:px-4">
      
      {/* 1. Header Banner with Dynamic Motion Accents */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-800/80 p-6 sm:p-8 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{showTelugu ? 'డైనమిక్ జియో అట్లాస్' : 'Dynamic Civil Services GeoAtlas'}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300">
                {activeMap === 'india' ? '28 States & UTs' : activeMap === 'telangana' ? '33 Districts Data' : '26 Districts Data'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white flex items-center space-x-3">
              <span>
                {activeMap === 'india' 
                  ? (showTelugu ? 'భారతదేశ రాష్ట్రాలు & పబ్లిక్ సర్వీస్ కమిషన్లు' : 'India National Map & Civil Services Matrix')
                  : activeMap === 'telangana'
                  ? (showTelugu ? 'తెలంగాణ రాష్ట్ర పటం: సమగ్ర 33 జిల్లాల సమాచారం' : 'Telangana State Map: All 33 Districts Profile')
                  : (showTelugu ? 'ఆంధ్రప్రదేశ్ రాష్ట్ర పటం: సమగ్ర 26 జిల్లాల సమాచారం' : 'Andhra Pradesh State Map: All 26 Districts Profile')}
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300/90 max-w-2xl leading-relaxed">
              {showTelugu 
                ? 'పటంపై ఉన్న ప్రాంతాలను ఎంచుకోండి. నదీ పరివాహక ప్రాంతాలు, చారిత్రక కట్టడాలు, భౌగోళిక గుర్తింపులు (GI Tags), మరియు సివిల్స్ పరీక్షా ప్రాముఖ్యత కలిగిన అంశాలను క్షణాల్లో పరిశీలించండి.'
                : 'Interactive spatial exploration for UPSC, APPSC & TSPSC. Click and hover on states and districts to inspect geographic coordinates, river basins, historical monuments, GI tags, and high-frequency exam facts.'}
            </p>
          </div>

          {/* Quick Map Selector Toggle Buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-lg backdrop-blur-md shrink-0 flex-wrap sm:flex-nowrap gap-1">
            <button
              onClick={() => handleSelectMap('india')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center space-x-2 ${
                activeMap === 'india'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <span className="text-base">🇮🇳</span>
              <span>{showTelugu ? 'భారతదేశం' : 'India'}</span>
            </button>

            <button
              onClick={() => handleSelectMap('telangana')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center space-x-2 ${
                activeMap === 'telangana'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <span className="text-base">🏛️</span>
              <span>{showTelugu ? 'తెలంగాణ (33)' : 'Telangana (33)'}</span>
            </button>

            <button
              onClick={() => handleSelectMap('andhra')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center space-x-2 ${
                activeMap === 'andhra'
                  ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <span className="text-base">🌊</span>
              <span>{showTelugu ? 'ఆంధ్రప్రదేశ్ (26)' : 'Andhra Pradesh (26)'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Live Infographics Metric Ticker */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Selected Territory</span>
            <span className="font-black text-amber-300 text-sm truncate block">
              {activeMap === 'india' ? selectedIndiaState.name : activeMap === 'telangana' ? selectedTgDistrict.name : selectedApDistrict.name}
            </span>
          </div>

          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">
              {activeMap === 'india' ? 'Cadre / Capital' : 'Headquarters'}
            </span>
            <span className="font-black text-sky-300 text-sm truncate block">
              {activeMap === 'india' ? selectedIndiaState.capital : activeMap === 'telangana' ? selectedTgDistrict.hq : selectedApDistrict.hq}
            </span>
          </div>

          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Major Drainage Basin</span>
            <span className="font-black text-emerald-300 text-sm truncate block">
              {activeMap === 'india' 
                ? selectedIndiaState.majorRivers[0] 
                : activeMap === 'telangana'
                ? selectedTgDistrict.majorRivers[0]
                : selectedApDistrict.majorRivers[0]}
            </span>
          </div>

          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Target Exam PSC</span>
            <span className="font-black text-indigo-300 text-sm truncate block">
              {activeMap === 'india' ? selectedIndiaState.psc : activeMap === 'telangana' ? 'TGPSC / TSPSC' : 'APPSC'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Map Explorer & Deep Inspector Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (7/12): Dynamic Interactive Canvas & District Selector */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-6 space-y-4">
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={showTelugu ? 'జిల్లా లేదా రాష్ట్రం పేరు ద్వారా వెతకండి...' : 'Filter by district or state name...'}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-xs text-slate-800 placeholder:text-slate-400 outline-none"
              />
            </div>

            {/* Region / Zone Filter */}
            {activeMap === 'andhra' && (
              <div className="flex items-center space-x-1 shrink-0 overflow-x-auto pb-1 sm:pb-0">
                {['all', 'Uttarandhra', 'Coastal Andhra', 'Rayalaseema'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setFilterRegion(r)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all whitespace-nowrap ${
                      filterRegion === r 
                        ? 'bg-sky-600 text-white shadow-2xs' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {r === 'all' ? 'All (26)' : r}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Geographic Map Visualization Viewport with Authentic SVG Vector Canvas */}
          <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-3 sm:p-5 border border-slate-800 overflow-hidden min-h-[500px] flex flex-col justify-between shadow-2xl">
            {/* Background Map Atmosphere Grid & Topographic lines */}
            <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Map Top Status Pill & Dynamic Live Coordinates HUD */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pb-2 border-b border-slate-800/80">
              <span className="flex items-center space-x-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-radar" />
                <span className="text-slate-200 font-extrabold tracking-wide">
                  {activeMap === 'india' ? '🇮🇳 Spatial India Cadre Vector Map' : activeMap === 'telangana' ? '🏛️ Telangana 33 Districts Spatial Vector Map' : '🌊 Andhra Pradesh 26 Districts Coastal Arc Vector Map'}
                </span>
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-amber-300 font-mono bg-amber-950/60 border border-amber-800/50 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Compass className="w-3 h-3 text-amber-400" />
                  <span>Interactive Spatial GIS</span>
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700">
                  Hover or tap any territory
                </span>
              </div>
            </div>

            {/* Dynamic Floating HUD Overlay Card (Appears dynamically as user hovers/scrolls) */}
            <div className="relative z-20 my-2">
              <div className="bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 rounded-xl p-2.5 sm:p-3 text-white shadow-xl flex items-center justify-between gap-3 transition-all animate-fadeIn">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-sm font-black text-indigo-300 shrink-0">
                    📍
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="font-black text-sm text-amber-300 truncate">
                        {activeMap === 'india' 
                          ? selectedIndiaState.name 
                          : activeMap === 'telangana' 
                          ? selectedTgDistrict.name 
                          : selectedApDistrict.name}
                      </span>
                      {showTelugu && (
                        <span className="text-xs text-slate-300 font-sans truncate">
                          ({activeMap === 'india' 
                            ? selectedIndiaState.nameTelugu 
                            : activeMap === 'telangana' 
                            ? selectedTgDistrict.nameTelugu 
                            : selectedApDistrict.nameTelugu})
                        </span>
                      )}
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 shrink-0">
                        {activeMap === 'india' 
                          ? selectedIndiaState.code 
                          : activeMap === 'telangana' 
                          ? (selectedTgDistrict.zone || 'TS') 
                          : (selectedApDistrict.region || 'AP')}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 truncate">
                      {activeMap === 'india'
                        ? `Capital: ${selectedIndiaState.capital} • PSC: ${selectedIndiaState.psc} • Cadre: ${selectedIndiaState.cadre}`
                        : activeMap === 'telangana'
                        ? `HQ: ${selectedTgDistrict.hq} • Rivers: ${selectedTgDistrict.majorRivers.join(', ')} • Area: ${selectedTgDistrict.areaKm2} km²`
                        : `HQ: ${selectedApDistrict.hq} • Coastline: ${selectedApDistrict.coastlineKm || 0} km • Rivers: ${selectedApDistrict.majorRivers.join(', ')}`}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center space-x-2 shrink-0">
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-1 rounded-lg font-bold">
                    {activeMap === 'india' ? 'UPSC / State PSC' : activeMap === 'telangana' ? 'TGPSC Paper-II & VI' : 'APPSC Paper-II & III'}
                  </span>
                </div>
              </div>
            </div>

            {/* Authentic Vector SVG Spatial Geographic Canvas */}
            <div className="relative z-10 flex-1 flex items-center justify-center p-1 sm:p-2 overflow-hidden">
              <svg
                viewBox="120 90 600 600"
                className="w-full h-auto max-h-[420px] select-none transition-all drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Glowing Filter for Selected / Hovered Territory */}
                  <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="radarPulse" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="godavariGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="krishnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Topographic Background Graticule Lines */}
                <g opacity="0.12" stroke="#94a3b8" strokeDasharray="3 6" strokeWidth="0.8">
                  <line x1="120" y1="200" x2="720" y2="200" />
                  <line x1="120" y1="350" x2="720" y2="350" />
                  <line x1="120" y1="500" x2="720" y2="500" />
                  <line x1="120" y1="650" x2="720" y2="650" />
                  <line x1="250" y1="90" x2="250" y2="690" />
                  <line x1="400" y1="90" x2="400" y2="690" />
                  <line x1="550" y1="90" x2="550" y2="690" />
                </g>

                {/* Animated Major River System Lines (Physical Geography Overlay) */}
                {activeMap === 'telangana' && (
                  <g className="rivers-overlay pointer-events-none">
                    {/* Godavari River Flow Path (North-West to South-East) */}
                    <path
                      d="M 280 270 Q 380 230 460 250 T 560 310 T 640 450 T 680 500"
                      fill="none"
                      stroke="url(#godavariGradient)"
                      strokeWidth="3.5"
                      strokeDasharray="6 3"
                      className="animate-pulse"
                    />
                    <text x="590" y="380" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7">
                      🌊 Godavari River
                    </text>

                    {/* Krishna River Flow Path (South-West to South-East) */}
                    <path
                      d="M 260 560 Q 330 580 400 590 T 500 580 T 580 540"
                      fill="none"
                      stroke="url(#krishnaGradient)"
                      strokeWidth="3.5"
                      strokeDasharray="6 3"
                      className="animate-pulse"
                    />
                    <text x="360" y="615" fill="#2dd4bf" fontSize="10" fontWeight="bold" opacity="0.7">
                      🌊 Krishna River
                    </text>

                    {/* Musi River Tributary */}
                    <path
                      d="M 370 470 Q 430 470 515 520"
                      fill="none"
                      stroke="#93c5fd"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      opacity="0.6"
                    />
                    <text x="440" y="475" fill="#93c5fd" fontSize="8" fontWeight="bold" opacity="0.6">
                      Musi River
                    </text>
                  </g>
                )}

                {activeMap === 'andhra' && (
                  <g className="rivers-overlay pointer-events-none">
                    {/* Bay of Bengal Coastline Oceanic Glow Arc */}
                    <path
                      d="M 720 100 Q 640 220 560 320 T 450 440 T 360 580 T 350 740"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="12"
                      strokeOpacity="0.15"
                    />
                    <path
                      d="M 710 105 Q 635 220 555 320 T 445 440 T 355 580 T 345 735"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="2.5"
                      strokeDasharray="5 3"
                    />
                    <text x="580" y="480" fill="#38bdf8" fontSize="12" fontWeight="black" opacity="0.6" letterSpacing="2">
                      BAY OF BENGAL 🌊
                    </text>

                    {/* Godavari & Krishna Deltas */}
                    <path
                      d="M 460 320 Q 510 340 540 380"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3"
                      strokeDasharray="4 2"
                    />
                    <text x="490" y="325" fill="#38bdf8" fontSize="9" fontWeight="bold" opacity="0.8">
                      Godavari Delta (Konaseema)
                    </text>

                    <path
                      d="M 360 460 Q 400 440 430 460"
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth="3"
                      strokeDasharray="4 2"
                    />
                    <text x="360" y="435" fill="#2dd4bf" fontSize="9" fontWeight="bold" opacity="0.8">
                      Krishna Delta (Prakasam Barrage)
                    </text>
                  </g>
                )}

                {/* 1. TELANGANA 33 DISTRICTS SPATIAL VECTOR MAP */}
                {activeMap === 'telangana' && (
                  <g className="telangana-districts-spatial">
                    {filteredTgDistricts.map((d) => {
                      const isSelected = selectedTgDistrict.id === d.id;
                      // Color based on Zone
                      const isNorth = d.zone?.includes('Kaleshwaram') || d.zone?.includes('Basara');
                      const isCentral = d.zone?.includes('Charminar') || d.zone?.includes('Yadadri');
                      const fillColor = isSelected
                        ? '#10b981' // Bright Emerald when selected
                        : isNorth
                        ? '#064e3b' // Deep Emerald for North
                        : isCentral
                        ? '#1e1b4b' // Deep Indigo for Central
                        : '#3b0764'; // Deep Purple for South

                      const strokeColor = isSelected
                        ? '#34d399'
                        : isNorth
                        ? '#059669'
                        : isCentral
                        ? '#6366f1'
                        : '#a855f7';

                      return (
                        <g
                          key={d.id}
                          className="cursor-pointer transition-all duration-300 group"
                          onClick={() => {
                            playClick();
                            setSelectedTgDistrict(d);
                          }}
                          onMouseEnter={() => setSelectedTgDistrict(d)}
                          filter={isSelected ? 'url(#svgGlow)' : undefined}
                        >
                          {/* Animated radar beacon wave for selected territory */}
                          {isSelected && (
                            <circle
                              cx={d.x + d.w / 2}
                              cy={d.y + d.h / 2}
                              r={Math.max(d.w, d.h) / 1.1}
                              fill="#10b981"
                              opacity="0.25"
                              className="animate-ping pointer-events-none"
                            />
                          )}

                          {/* Territorial Polygon Cell */}
                          <rect
                            x={d.x}
                            y={d.y}
                            width={d.w}
                            height={d.h}
                            rx="10"
                            fill={fillColor}
                            stroke={strokeColor}
                            strokeWidth={isSelected ? '2.5' : '1.2'}
                            className="transition-all duration-200 group-hover:stroke-white group-hover:brightness-125"
                          />

                          {/* District Label Text */}
                          <text
                            x={d.x + d.w / 2}
                            y={d.y + d.h / 2 - 2}
                            textAnchor="middle"
                            fill={isSelected ? '#ffffff' : '#f1f5f9'}
                            fontSize={d.w < 55 ? '8.5' : '10'}
                            fontWeight="900"
                            className="pointer-events-none select-none tracking-tight"
                          >
                            {d.name.length > 12 ? d.name.slice(0, 10) + '..' : d.name}
                          </text>

                          {/* HQ Subtitle / River Marker */}
                          <text
                            x={d.x + d.w / 2}
                            y={d.y + d.h / 2 + 10}
                            textAnchor="middle"
                            fill={isSelected ? '#a7f3d0' : '#94a3b8'}
                            fontSize="7.5"
                            fontWeight="bold"
                            className="pointer-events-none select-none"
                          >
                            HQ: {d.hq}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                )}

                {/* 2. ANDHRA PRADESH 26 DISTRICTS SPATIAL VECTOR MAP */}
                {activeMap === 'andhra' && (
                  <g className="andhra-districts-spatial">
                    {filteredApDistricts.map((d) => {
                      const isSelected = selectedApDistrict.id === d.id;
                      const isCoastal = d.region === 'Coastal Andhra';
                      const isUttar = d.region === 'Uttarandhra';
                      const fillColor = isSelected
                        ? '#0284c7' // Bright Sky Blue when selected
                        : isUttar
                        ? '#064e3b' // Emerald for Uttarandhra
                        : isCoastal
                        ? '#0c4a6e' // Deep Ocean Blue for Coastal
                        : '#78350f'; // Warm Amber for Rayalaseema

                      const strokeColor = isSelected
                        ? '#38bdf8'
                        : isUttar
                        ? '#10b981'
                        : isCoastal
                        ? '#0284c7'
                        : '#f59e0b';

                      return (
                        <g
                          key={d.id}
                          className="cursor-pointer transition-all duration-300 group"
                          onClick={() => {
                            playClick();
                            setSelectedApDistrict(d);
                          }}
                          onMouseEnter={() => setSelectedApDistrict(d)}
                          filter={isSelected ? 'url(#svgGlow)' : undefined}
                        >
                          {isSelected && (
                            <circle
                              cx={d.x + d.w / 2}
                              cy={d.y + d.h / 2}
                              r={Math.max(d.w, d.h) / 1.1}
                              fill="#0284c7"
                              opacity="0.25"
                              className="animate-ping pointer-events-none"
                            />
                          )}

                          <rect
                            x={d.x}
                            y={d.y}
                            width={d.w}
                            height={d.h}
                            rx="10"
                            fill={fillColor}
                            stroke={strokeColor}
                            strokeWidth={isSelected ? '2.5' : '1.2'}
                            className="transition-all duration-200 group-hover:stroke-white group-hover:brightness-125"
                          />

                          <text
                            x={d.x + d.w / 2}
                            y={d.y + d.h / 2 - 2}
                            textAnchor="middle"
                            fill={isSelected ? '#ffffff' : '#f8fafc'}
                            fontSize={d.w < 55 ? '8.5' : '10'}
                            fontWeight="900"
                            className="pointer-events-none select-none tracking-tight"
                          >
                            {d.name.length > 13 ? d.name.slice(0, 11) + '..' : d.name}
                          </text>

                          <text
                            x={d.x + d.w / 2}
                            y={d.y + d.h / 2 + 10}
                            textAnchor="middle"
                            fill={isSelected ? '#bae6fd' : '#cbd5e1'}
                            fontSize="7.5"
                            fontWeight="bold"
                            className="pointer-events-none select-none"
                          >
                            {d.coastlineKm ? `🌊 ${d.coastlineKm}km` : `⛰️ ${d.hq}`}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                )}

                {/* 3. INDIA NATIONAL CADRE SPATIAL VECTOR MAP */}
                {activeMap === 'india' && (
                  <g className="india-states-spatial">
                    {filteredIndiaStates.map((s) => {
                      const isSelected = selectedIndiaState.id === s.id;
                      const fillColor = isSelected
                        ? '#4f46e5' // Bright Indigo when selected
                        : '#1e1b4b'; // Midnight Indigo default

                      const strokeColor = isSelected ? '#818cf8' : '#4338ca';

                      return (
                        <g
                          key={s.id}
                          className="cursor-pointer transition-all duration-300 group"
                          onClick={() => {
                            playClick();
                            setSelectedIndiaState(s);
                          }}
                          onMouseEnter={() => setSelectedIndiaState(s)}
                          filter={isSelected ? 'url(#svgGlow)' : undefined}
                        >
                          {isSelected && (
                            <circle
                              cx={s.x + s.w / 2}
                              cy={s.y + s.h / 2}
                              r={Math.max(s.w, s.h) / 1.2}
                              fill="#4f46e5"
                              opacity="0.25"
                              className="animate-ping pointer-events-none"
                            />
                          )}

                          <rect
                            x={s.x}
                            y={s.y}
                            width={s.w}
                            height={s.h}
                            rx="12"
                            fill={fillColor}
                            stroke={strokeColor}
                            strokeWidth={isSelected ? '2.5' : '1.2'}
                            className="transition-all duration-200 group-hover:stroke-white group-hover:brightness-125"
                          />

                          <text
                            x={s.x + s.w / 2}
                            y={s.y + s.h / 2 - 4}
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="11"
                            fontWeight="900"
                            className="pointer-events-none select-none"
                          >
                            {s.code}
                          </text>

                          <text
                            x={s.x + s.w / 2}
                            y={s.y + s.h / 2 + 10}
                            textAnchor="middle"
                            fill={isSelected ? '#c7d2fe' : '#94a3b8'}
                            fontSize="8"
                            fontWeight="bold"
                            className="pointer-events-none select-none"
                          >
                            {s.name.length > 11 ? s.name.slice(0, 9) + '..' : s.name}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                )}
              </svg>
            </div>

            {/* Dynamic Interactive Territory Scroll Reel (Scroll across districts dynamically) */}
            <div className="relative z-10 pt-3 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-bold flex items-center space-x-1 text-slate-300">
                  <span>📜 Territory Navigation Reel:</span>
                  <span className="text-indigo-400 font-normal">Scroll horizontally or click to focus map</span>
                </span>
                <span className="font-mono text-amber-300">
                  {activeMap === 'india' 
                    ? `${filteredIndiaStates.length} States` 
                    : activeMap === 'telangana' 
                    ? `${filteredTgDistricts.length} Districts` 
                    : `${filteredApDistricts.length} Districts`}
                </span>
              </div>

              {/* Horizontal Scroll Reel */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
                {activeMap === 'india' && (
                  filteredIndiaStates.map((s) => {
                    const active = selectedIndiaState.id === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          playClick();
                          setSelectedIndiaState(s);
                        }}
                        className={`px-3 py-1.5 rounded-xl border text-xs whitespace-nowrap transition-all shrink-0 flex items-center space-x-1.5 ${
                          active
                            ? 'bg-indigo-600 border-indigo-400 text-white font-black shadow-md'
                            : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] bg-slate-900/60 px-1.5 py-0.2 rounded font-black">{s.code}</span>
                        <span>{s.name}</span>
                      </button>
                    );
                  })
                )}

                {activeMap === 'telangana' && (
                  filteredTgDistricts.map((d) => {
                    const active = selectedTgDistrict.id === d.id;
                    return (
                      <button
                        key={d.id}
                        onClick={() => {
                          playClick();
                          setSelectedTgDistrict(d);
                        }}
                        className={`px-2.5 py-1.5 rounded-xl border text-xs whitespace-nowrap transition-all shrink-0 flex items-center space-x-1.5 ${
                          active
                            ? 'bg-emerald-600 border-emerald-400 text-white font-black shadow-md'
                            : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] text-emerald-400 font-black">🏛️</span>
                        <span>{d.name}</span>
                        <span className="text-[9px] text-slate-400">({d.hq})</span>
                      </button>
                    );
                  })
                )}

                {activeMap === 'andhra' && (
                  filteredApDistricts.map((d) => {
                    const active = selectedApDistrict.id === d.id;
                    return (
                      <button
                        key={d.id}
                        onClick={() => {
                          playClick();
                          setSelectedApDistrict(d);
                        }}
                        className={`px-2.5 py-1.5 rounded-xl border text-xs whitespace-nowrap transition-all shrink-0 flex items-center space-x-1.5 ${
                          active
                            ? 'bg-sky-600 border-sky-400 text-white font-black shadow-md'
                            : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] text-sky-400">{d.coastlineKm ? '🌊' : '⛰️'}</span>
                        <span>{d.name}</span>
                        <span className="text-[9px] text-slate-400">({d.hq})</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5/12): Deep Civil Services Territory Inspector */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-6 space-y-5">
          
          {/* Header of Inspector */}
          {activeMap === 'india' && (
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-indigo-100 text-indigo-800 border border-indigo-200">
                      {selectedIndiaState.code} State Profile
                    </span>
                    <span className="text-xs text-slate-400 font-bold">Capital: {selectedIndiaState.capital}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    {selectedIndiaState.name}
                  </h3>
                  {showTelugu && (
                    <p className="text-xs text-indigo-700 font-bold font-sans">
                      {selectedIndiaState.nameTelugu}
                    </p>
                  )}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  🏛️
                </div>
              </div>

              {/* Cadre & PSC Info */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] text-slate-400 uppercase font-black block">Public Service Commission</span>
                  <span className="font-extrabold text-slate-800 text-xs mt-0.5 block">{selectedIndiaState.psc}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] text-slate-400 uppercase font-black block">All India Services Cadre</span>
                  <span className="font-extrabold text-slate-800 text-xs mt-0.5 block">{selectedIndiaState.cadre}</span>
                </div>
              </div>

              {/* Major Rivers & Coastline */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Waves className="w-3.5 h-3.5 text-sky-600" />
                  <span>Drainage & Coastline</span>
                </h4>
                <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 text-xs text-slate-700 space-y-1">
                  <div><strong className="text-sky-900">Major Rivers:</strong> {selectedIndiaState.majorRivers.join(', ')}</div>
                  <div><strong className="text-sky-900">Coastline:</strong> {selectedIndiaState.coastline}</div>
                </div>
              </div>

              {/* Economic Pillars */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Factory className="w-3.5 h-3.5 text-amber-600" />
                  <span>Economic Drivers & Pillars</span>
                </h4>
                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-slate-800 leading-relaxed">
                  {selectedIndiaState.economicPillars}
                </div>
              </div>

              {/* High Yield Exam Notes */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Key Civil Services Takeaways</span>
                </h4>
                <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 font-medium leading-relaxed">
                  {selectedIndiaState.keyExamTopics}
                </div>
              </div>
            </div>
          )}

          {activeMap === 'telangana' && (
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {selectedTgDistrict.zone || 'Telangana'}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">HQ: {selectedTgDistrict.hq}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    {selectedTgDistrict.name} District
                  </h3>
                  {showTelugu && (
                    <p className="text-xs text-emerald-700 font-bold font-sans">
                      {selectedTgDistrict.nameTelugu}
                    </p>
                  )}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  🏛️
                </div>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] text-slate-400 uppercase font-black block">Geographical Area</span>
                  <span className="font-extrabold text-slate-800 text-xs mt-0.5 block">{selectedTgDistrict.areaKm2.toLocaleString()} km²</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] text-slate-400 uppercase font-black block">Population (Approx)</span>
                  <span className="font-extrabold text-slate-800 text-xs mt-0.5 block">{selectedTgDistrict.populationApprox}</span>
                </div>
              </div>

              {/* Major Rivers */}
              <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 text-xs text-slate-700">
                <span className="font-black text-sky-900 flex items-center space-x-1 mb-1">
                  <Waves className="w-3.5 h-3.5 text-sky-600" />
                  <span>River Basins & Reservoirs:</span>
                </span>
                <span>{selectedTgDistrict.majorRivers.join(', ')}</span>
              </div>

              {/* Historic Heritage & Monuments */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Landmark className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Historical Heritage & Culture</span>
                </h4>
                <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-800 leading-relaxed">
                  {selectedTgDistrict.heritage}
                </div>
              </div>

              {/* Economy & Agriculture */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Factory className="w-3.5 h-3.5 text-amber-600" />
                  <span>Economy & Agricultural Produce</span>
                </h4>
                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-slate-800 leading-relaxed">
                  <div><strong>Economy:</strong> {selectedTgDistrict.economy}</div>
                  <div className="mt-1"><strong>Crops:</strong> {selectedTgDistrict.agriculture}</div>
                </div>
              </div>

              {/* TSPSC Exam Takeaways */}
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 font-medium leading-relaxed">
                <span className="font-black text-emerald-900 flex items-center space-x-1 mb-1">
                  <Award className="w-3.5 h-3.5 text-emerald-700" />
                  <span>TSPSC Paper-II & Paper-VI Takeaway:</span>
                </span>
                {selectedTgDistrict.examNotes}
              </div>
            </div>
          )}

          {activeMap === 'andhra' && (
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-sky-100 text-sky-800 border border-sky-200">
                      {selectedApDistrict.region}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">HQ: {selectedApDistrict.hq}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    {selectedApDistrict.name} District
                  </h3>
                  {showTelugu && (
                    <p className="text-xs text-sky-700 font-bold font-sans">
                      {selectedApDistrict.nameTelugu}
                    </p>
                  )}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  {selectedApDistrict.coastlineKm ? '🌊' : '⛰️'}
                </div>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] text-slate-400 uppercase font-black block">Geographical Area</span>
                  <span className="font-extrabold text-slate-800 text-xs mt-0.5 block">{selectedApDistrict.areaKm2.toLocaleString()} km²</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] text-slate-400 uppercase font-black block">Coastline Length</span>
                  <span className="font-extrabold text-slate-800 text-xs mt-0.5 block">
                    {selectedApDistrict.coastlineKm ? `${selectedApDistrict.coastlineKm} km` : 'Inland District'}
                  </span>
                </div>
              </div>

              {/* Major Rivers */}
              <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 text-xs text-slate-700">
                <span className="font-black text-sky-900 flex items-center space-x-1 mb-1">
                  <Waves className="w-3.5 h-3.5 text-sky-600" />
                  <span>River Systems & Canals:</span>
                </span>
                <span>{selectedApDistrict.majorRivers.join(', ')}</span>
              </div>

              {/* Historic Heritage & Monuments */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Landmark className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Historical Heritage & Culture</span>
                </h4>
                <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-800 leading-relaxed">
                  {selectedApDistrict.heritage}
                </div>
              </div>

              {/* Economy & Agriculture */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Factory className="w-3.5 h-3.5 text-amber-600" />
                  <span>Economic Drivers & Agriculture</span>
                </h4>
                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-slate-800 leading-relaxed">
                  <div><strong>Economy:</strong> {selectedApDistrict.economy}</div>
                  <div className="mt-1"><strong>Crops & Farming:</strong> {selectedApDistrict.agriculture}</div>
                </div>
              </div>

              {/* APPSC Exam Takeaways */}
              <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 text-xs text-sky-950 font-medium leading-relaxed">
                <span className="font-black text-sky-900 flex items-center space-x-1 mb-1">
                  <Award className="w-3.5 h-3.5 text-sky-700" />
                  <span>APPSC Group 1 & 2 Exam Takeaway:</span>
                </span>
                {selectedApDistrict.examNotes}
              </div>
            </div>
          )}

          {/* Action Button: Jump to Study Material in Vault */}
          <div className="pt-2">
            <button
              onClick={() => {
                playChime();
                if (onNavigateVault) {
                  if (activeMap === 'telangana') onNavigateVault('tspsc');
                  else if (activeMap === 'andhra') onNavigateVault('appsc');
                  else onNavigateVault('geography-env');
                }
              }}
              className="btn-tactile w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-700 hover:from-indigo-700 hover:to-sky-800 text-white font-black text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md"
            >
              <BookOpen className="w-4 h-4 text-indigo-200" />
              <span>
                {activeMap === 'telangana'
                  ? 'Study Telangana State Materials in Vault'
                  : activeMap === 'andhra'
                  ? 'Study Andhra Pradesh Materials in Vault'
                  : 'Study Geography & State Reports in Vault'}
              </span>
              <ChevronRight className="w-4 h-4 text-indigo-300" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
