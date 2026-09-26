import React, { useState } from 'react';
import { Building2, Home, Trees, Lamp, CheckCircle2, ArrowRight } from 'lucide-react';

interface DisciplinesProps {
  onInquireDiscipline: (discipline: string) => void;
}

export const Disciplines: React.FC<DisciplinesProps> = ({ onInquireDiscipline }) => {
  const [activeTab, setActiveTab] = useState(0);

  const disciplines = [
    {
      id: 'architecture',
      title: 'Architecture & Masterplanning',
      icon: Building2,
      subtitle: 'From initial sketch to structural realization',
      description: 'Comprehensive architectural services for private villas, corporate headquarters, and cultural pavilions. We manage every phase from volumetric concept design and municipal permitting to BIM digital twin coordination and on-site author supervision.',
      deliverables: [
        'Volumetric Concept & Topographic Analysis',
        'Parametric Facade & Environmental Engineering',
        'Municipal Permitting & Construction Documentation',
        'LOD 400 BIM Model & Digital Twin',
        'On-site Architectural Supervision',
      ],
      typicalScale: '500 m² — 25,000 m²',
      typicalTimeline: '6 — 18 Months',
    },
    {
      id: 'interiors',
      title: 'Interior Architecture',
      icon: Home,
      subtitle: 'Private residences & high-end business spaces',
      description: 'Sculptural, serene spatial design where architecture and furnishings unite. We design bespoke joinery, integrate invisible HVAC and acoustic systems, and tailor natural and artificial lighting to support natural human rhythms.',
      deliverables: [
        'Spatial Replanning & Ergonomic Layouts',
        'Custom Architectural Joinery & Millwork Design',
        'Circadian Lighting Architecture & Automation',
        'Full Material & Fixture Procurement',
        'White-Glove Turnkey Delivery',
      ],
      typicalScale: '200 m² — 4,000 m²',
      typicalTimeline: '4 — 12 Months',
    },
    {
      id: 'landscape',
      title: 'Landscape & Urbanism',
      icon: Trees,
      subtitle: 'Bioclimatic gardens & water architecture',
      description: 'Extending the interior living experience into the natural topography. We design reflective water bodies, natural rock gardens, secluded zen courtyards, and native microclimates that buffer noise and wind.',
      deliverables: [
        'Topographic Grading & Soil Hydrology',
        'Reflecting Pools & Water Features',
        'Native Biophilic Planting Plans',
        'Outdoor Lighting & Pavilion Design',
      ],
      typicalScale: '1,000 m² — 50,000 m²',
      typicalTimeline: '3 — 9 Months',
    },
    {
      id: 'products',
      title: 'Object & Product Design',
      icon: Lamp,
      subtitle: 'Collectible furniture, lighting & tactile hardware',
      description: 'Since 2012, Kononenko Bureau has garnered international acclaim for mass-attractive and limited-edition product design. We design custom luminaires, monolithic dining tables, and sculptural hardware manufactured by premier European artisans.',
      deliverables: [
        'Custom Monograph Furniture Design',
        'Bespoke Architectural Luminaires',
        'Tactile Hardware & Door Handles',
        'Prototypes & Precision Manufacturing Supervision',
      ],
      typicalScale: 'Limited Edition & Commercial Series',
      typicalTimeline: '2 — 6 Months',
    },
  ];

  const current = disciplines[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="disciplines" className="py-24 border-b border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2">
              <span>03. Practice Areas</span>
              <span aria-hidden="true">·</span>
              <span>Holistic Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Disciplines & Scope
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
            We deliver complete, integrated environments from macroscopic masterplans to microscopic brass millwork tolerances.
          </p>
        </div>

        {/* Interactive Discipline Selector Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-8 pb-12">
          {disciplines.map((d, index) => {
            const Icon = d.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={d.id}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-sm border text-left transition-all duration-200 flex flex-col justify-between h-32 ${
                  isActive
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/[0.02] border-white/10 text-stone-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tabular-nums">
                    0{index + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-stone-500'}`} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-tight line-clamp-1">
                    {d.title}
                  </h4>
                  <span className={`text-[10px] font-mono block mt-0.5 truncate ${isActive ? 'text-stone-700' : 'text-stone-500'}`}>
                    {d.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Full Dossier */}
        <div className="p-8 sm:p-12 bg-[#121418] border border-white/10 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-sm bg-white/5 border border-white/10 text-sky-400">
                <CurrentIcon className="w-5 h-5" />
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                  Discipline 0{activeTab + 1}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              {current.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-2 pt-2">
              <h5 className="font-mono text-xs uppercase tracking-wider text-stone-400">
                Key Bureau Deliverables:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Parameters Box */}
          <div className="lg:col-span-5 bg-black/40 border border-white/10 p-6 rounded-sm space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 pb-3 border-b border-white/10">
              Engagement Metrics
            </h4>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Typical Scale</span>
                <span className="text-white text-base font-semibold">{current.typicalScale}</span>
              </div>

              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Project Timeline</span>
                <span className="text-white text-base font-semibold">{current.typicalTimeline}</span>
              </div>

              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Coordination Level</span>
                <span className="text-sky-300 text-sm font-medium">Full BIM Level 2 / Architectural Supervision</span>
              </div>
            </div>

            <button
              onClick={() => onInquireDiscipline(current.title)}
              className="w-full py-3 bg-white text-black hover:bg-stone-200 transition-colors text-xs font-mono uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2"
            >
              <span>Inquire This Discipline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
