import React, { useState, useEffect } from 'react';
import { ArrowDown, Layers, Compass, Eye, Sparkles } from 'lucide-react';
import { BUREAU_STATS, PROJECTS } from '../data/projectsData';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface HeroProps {
  blueprintMode: boolean;
  onToggleBlueprint: () => void;
  onExploreProjects: () => void;
  onOpenProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  blueprintMode,
  onToggleBlueprint,
  onExploreProjects,
  onOpenProject,
}) => {
  const [heroProjectIndex, setHeroProjectIndex] = useState(0);
  const featuredProjects = [PROJECTS[0], PROJECTS[1], PROJECTS[2]]; // Glass Villa, Hillside 900, Dzen Community
  const currentProject = featuredProjects[heroProjectIndex];

  // Auto-cycle through featured hero projects every 9s if user doesn't click
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroProjectIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between border-b border-white/10 overflow-hidden">
      {/* Subtle blueprint grid overlay background */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${blueprintMode ? 'blueprint-grid-dense opacity-80' : 'blueprint-grid opacity-30'}`} />

      {/* Atmospheric lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-950/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Editorial Eyebrow & Bureau Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-stone-400 uppercase">
            <span>Kononenko Bureau</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Est. 2012</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-300">Zurich / Milan / Kyiv</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] text-stone-400 tracking-wider">
              Accepting 2026/2027 Commissions
            </span>
          </div>
        </div>

        {/* Oversized Typographic Headline */}
        <div className="mb-10 max-w-5xl">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.04] uppercase text-balance">
            Translating Architecture Into Shapes of Time
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-400 max-w-3xl leading-relaxed font-light">
            Multidisciplinary architectural and interior bureau. We balance structural precision with emotional sensitivity to create monolithic, timeless spaces for life and business.
          </p>
        </div>

        {/* Hero Interactive Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 pb-6">
          
          {/* Main Visual Display (8 Cols) */}
          <div className="lg:col-span-8 group relative cursor-pointer" onClick={() => onOpenProject(currentProject.id)}>
            <div className="relative">
              <ArchitecturalVisual
                project={currentProject}
                mode={blueprintMode ? 'blueprint' : 'render'}
                aspectRatio="wide"
                className="w-full shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Interactive Hover Prompt */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 bg-white text-black text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Case Study</span>
                </span>
              </div>
            </div>

            {/* Project Switcher Bar */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {featuredProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHeroProjectIndex(idx);
                    }}
                    className={`px-3 py-1 text-xs font-mono transition-all rounded-sm ${
                      heroProjectIndex === idx
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/5 text-stone-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    0{idx + 1}. {p.title}
                  </button>
                ))}
              </div>

              {/* Blueprint Mode Switcher Trigger */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBlueprint();
                }}
                className="flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-sky-300 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>{blueprintMode ? 'Switch to Photorealistic View' : 'Toggle CAD Blueprint Mode'}</span>
              </button>
            </div>
          </div>

          {/* Project Focus Specs & Architectural Statement (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:pl-4">
            <div className="border border-white/10 bg-[#121418]/60 p-6 rounded-sm backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-sky-400">
                  Featured Monograph
                </span>
                <span className="font-mono text-xs text-stone-400">
                  {currentProject.year}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                  {currentProject.title}
                </h3>
                <p className="text-xs text-stone-400 font-mono mt-1">
                  {currentProject.location} · {currentProject.area}
                </p>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                {currentProject.concept}
              </p>

              <div className="pt-2 border-t border-white/10">
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                  Core Structural Materials
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.materials.slice(0, 3).map((mat) => (
                    <span
                      key={mat}
                      className="text-[11px] text-stone-300 font-light"
                    >
                      {mat} <span className="text-stone-600 last:hidden">·</span>
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenProject(currentProject.id)}
                className="w-full mt-2 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black transition-colors text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 rounded-sm"
              >
                <span>Read Full Case Study</span>
                <span className="font-mono">→</span>
              </button>
            </div>

            {/* Quick architectural ethos quote */}
            <div className="text-xs text-stone-400 italic border-l border-white/20 pl-4 leading-relaxed">
              “Form follows clarity, light follows mass. An architectural space must feel inevitable once built.”
            </div>
          </div>
        </div>

        {/* Bureau Metrics & Quantitative Adjacency Bar */}
        <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {BUREAU_STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-stone-300">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-stone-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-6 flex justify-between items-center text-xs font-mono text-stone-400">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-sky-400 rounded-full animate-pulse" />
          <span>Coordinates: 50.4501° N, 30.5234° E · Elevation +142m</span>
        </span>
        <button
          onClick={onExploreProjects}
          className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors group"
        >
          <span>Scroll to explore projects</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
