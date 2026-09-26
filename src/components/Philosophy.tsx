import React, { useState } from 'react';
import { Sparkles, Sun, Shield, Mountain, Compass } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState(0);

  const pillars = [
    {
      number: '01',
      title: 'Monolithic Purity',
      subtitle: 'Eliminating decorative noise in favor of primary geometric mass',
      description: 'We conceive buildings as monolithic sculptural masses carved from earth and stone. By shedding superficial ornamentation, the innate honesty of structure and proportion becomes the emotional anchor of the inhabitant.',
      icon: Shield,
    },
    {
      number: '02',
      title: 'Light as Building Material',
      subtitle: 'Sculpting space through solar orientation and shadow casting',
      description: 'Natural light is not an afterthought—it is our primary structural material. Every aperture, ceiling cove, and window reveal is calculated according to astronomical azimuths to choreograph shifting daylight through the day.',
      icon: Sun,
    },
    {
      number: '03',
      title: 'Contextual Topography',
      subtitle: 'Harmonious dialogue with landforms, bedrock, and climate',
      description: 'We do not impose foreign templates onto the landscape. Whether terracing an alpine incline in St. Moritz or anchoring a coastal cliff on the Black Sea, our architecture bows to geological and microclimatic realities.',
      icon: Mountain,
    },
    {
      number: '04',
      title: 'Tactile Longevity',
      subtitle: 'Material durability designed to age gracefully over decades',
      description: 'We specify authentic materials that acquire character rather than decay with time: honed Roman travertine, fair-faced architectural concrete, charred larch siding, and solid patinated brass hardware.',
      icon: Compass,
    },
  ];

  const materials = [
    {
      name: 'Honed Roman Travertine',
      origin: 'Tivoli Quarries, Italy',
      traits: 'Warm porous texture, soft natural light absorption, eternal durability.',
      colorHex: '#3a342c',
    },
    {
      name: 'Fair-Faced Architectural Concrete',
      origin: 'Custom aggregate blend',
      traits: 'Silky smooth surface finish with exposed tie-rod holes celebrating structural truth.',
      colorHex: '#282b30',
    },
    {
      name: 'Charred Japanese Larch (Shou Sugi Ban)',
      origin: 'Sustainable Alpine timber',
      traits: 'Deep matte black carbonized surface impervious to weather, rot, and insects.',
      colorHex: '#18191c',
    },
    {
      name: 'Low-Iron Structural Glazing',
      origin: 'Saint-Gobain Diamant',
      traits: 'Zero greenish tint, maximum optical clarity connecting interior with nature.',
      colorHex: '#1c2834',
    },
  ];

  return (
    <section id="philosophy" className="py-24 border-b border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl pb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2">
            <span>02. Bureau Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>Ethos & Methodology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-balance">
            The Art of Transforming Ideas Into Form
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg leading-relaxed font-light">
            Founded on the conviction that timeless architecture arises from the synthesis of radical engineering and deep human sensitivity.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 border-b border-white/10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="p-6 bg-white/[0.02] border border-white/10 rounded-sm flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-xl font-bold text-sky-400 tabular-nums">
                      {pillar.number}
                    </span>
                    <Icon className="w-4 h-4 text-stone-500" />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-stone-400 mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 font-mono text-[10px] text-stone-400 uppercase">
                  Kononenko Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Materiality Atelier Showcase */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
              Materiality Atelier
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Tactile Authenticity
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              We select materials not from samples catalogs, but directly from regional quarries and specialized fabricators, ensuring unyielding structural permanence.
            </p>

            <div className="space-y-2 pt-2">
              {materials.map((mat, idx) => (
                <button
                  key={mat.name}
                  onClick={() => setActiveMaterial(idx)}
                  className={`w-full text-left p-3 rounded-sm border transition-all flex items-center justify-between font-mono text-xs ${
                    activeMaterial === idx
                      ? 'bg-white/10 border-white text-white font-semibold'
                      : 'bg-white/5 border-white/10 text-stone-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>0{idx + 1}. {mat.name}</span>
                  <span className="text-[10px] opacity-60">SELECT</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Material Inspection Canvas */}
          <div className="lg:col-span-7 p-8 rounded-sm border border-white/10 relative overflow-hidden bg-[#111317]">
            <div
              className="absolute inset-0 opacity-40 transition-colors duration-700"
              style={{ backgroundColor: materials[activeMaterial].colorHex }}
            />
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-sky-400 uppercase tracking-wider">
                  Material Specification Dossier
                </span>
                <span className="font-mono text-xs text-stone-400">
                  REF / MAT-0{activeMaterial + 1}
                </span>
              </div>

              <div>
                <h4 className="font-display text-2xl font-bold uppercase text-white">
                  {materials[activeMaterial].name}
                </h4>
                <p className="font-mono text-xs text-stone-400 mt-1">
                  Source: {materials[activeMaterial].origin}
                </p>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed font-light">
                {materials[activeMaterial].traits}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
                <div>
                  <span className="text-stone-400 text-[10px] block uppercase">Weathering</span>
                  <span className="text-white font-medium">Graceful Patina</span>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block uppercase">Fire Rating</span>
                  <span className="text-white font-medium">Class A1 Non-combustible</span>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block uppercase">Embodied Carbon</span>
                  <span className="text-emerald-400 font-medium">Low Impact Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
