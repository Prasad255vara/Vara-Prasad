import React, { useState } from 'react';
import { LayoutGrid, List, GalleryVerticalEnd, ArrowUpRight, Filter, Compass } from 'lucide-react';
import { Project, PROJECTS } from '../data/projectsData';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface ProjectShowcaseProps {
  blueprintMode: boolean;
  onOpenProject: (projectId: string) => void;
}

type ViewMode = 'grid' | 'list' | 'gallery';

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  blueprintMode,
  onOpenProject,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const categories = [
    'All',
    'Private Architecture',
    'Commercial Architecture',
    'Interiors for Life',
    'Interiors for Business',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="projects" className="py-24 border-b border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header with View Modes and Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2">
              <span>01. Selected Works</span>
              <span aria-hidden="true">·</span>
              <span>{filteredProjects.length} Projects Realized</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Architectural Works
            </h2>
          </div>

          {/* Interactive View Mode Segmented Control Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-stone-400 mr-1 hidden sm:inline-block">
              View Mode:
            </span>
            <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Grid View: Visual architectural cards with parallax"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>

              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="List View: Monographic index table with hover preview"
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>

              <button
                onClick={() => setViewMode('gallery')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm transition-colors ${
                  viewMode === 'gallery'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Active Gallery View: Infinite visual wall with project isolation"
              >
                <GalleryVerticalEnd className="w-3.5 h-3.5" />
                <span>Active Gallery</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 py-6 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wide rounded-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 text-stone-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
              {cat === 'All' ? ` (${PROJECTS.length})` : ` (${PROJECTS.filter((p) => p.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* ---------------- VIEW MODE 1: GRID VIEW ---------------- */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pt-12">
            {filteredProjects.map((project, idx) => {
              // Asymmetric staggered offset for architectural rhythm
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={project.id}
                  onClick={() => onOpenProject(project.id)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className={`group cursor-pointer flex flex-col justify-between ${isEven ? 'md:mt-16' : ''}`}
                >
                  <div className="relative overflow-hidden mb-4">
                    <ArchitecturalVisual
                      project={project}
                      mode={blueprintMode ? 'blueprint' : 'render'}
                      aspectRatio="video"
                      isHovered={hoveredProjectId === project.id}
                      className="transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {/* View project floating badge on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 bg-white text-black text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-xl">
                        <span>Inspect Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                        <span>{project.categoryShort}</span>
                        <span aria-hidden="true" className="text-stone-600">·</span>
                        <span>{project.year}</span>
                        <span aria-hidden="true" className="text-stone-600">·</span>
                        <span>{project.area}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400/80">
                        {project.location.split(',')[0]}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-stone-300 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <p className="text-xs text-stone-400 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ---------------- VIEW MODE 2: LIST VIEW ---------------- */}
        {viewMode === 'list' && (
          <div className="pt-8 relative" onMouseMove={handleMouseMove}>
            <div className="hidden md:grid grid-cols-12 py-3 border-b border-white/20 font-mono text-[11px] text-stone-400 uppercase tracking-widest">
              <span className="col-span-1">No.</span>
              <span className="col-span-4">Project Title</span>
              <span className="col-span-3">Typology</span>
              <span className="col-span-2">Location</span>
              <span className="col-span-1 text-right">Area</span>
              <span className="col-span-1 text-right">Year</span>
            </div>

            <div className="divide-y divide-white/10">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => onOpenProject(project.id)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className="group py-5 grid grid-cols-2 md:grid-cols-12 items-center gap-4 cursor-pointer hover:bg-white/[0.03] transition-colors px-2 -mx-2"
                >
                  <span className="hidden md:block col-span-1 font-mono text-xs text-stone-400 group-hover:text-sky-400 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="col-span-2 md:col-span-4 flex items-center gap-3">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors uppercase">
                      {project.title}
                    </h3>
                  </div>

                  <span className="hidden md:block col-span-3 text-xs text-stone-400">
                    {project.category}
                  </span>

                  <span className="hidden md:block col-span-2 text-xs text-stone-400">
                    {project.location}
                  </span>

                  <span className="col-span-1 text-right font-mono text-xs text-stone-400 tabular-nums">
                    {project.area}
                  </span>

                  <div className="col-span-1 text-right flex items-center justify-end gap-2 font-mono text-xs text-stone-400 tabular-nums">
                    <span>{project.year}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Hover Floating Mini Visual Preview for List Mode */}
            {hoveredProjectId && (
              <div
                className="fixed z-50 pointer-events-none w-64 h-40 hidden md:block rounded-sm overflow-hidden shadow-2xl border border-white/20 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                style={{
                  left: cursorPos.x + 20,
                  top: cursorPos.y - 120,
                }}
              >
                {(() => {
                  const p = PROJECTS.find((item) => item.id === hoveredProjectId);
                  if (!p) return null;
                  return (
                    <ArchitecturalVisual
                      project={p}
                      mode={blueprintMode ? 'blueprint' : 'render'}
                      aspectRatio="video"
                      showOverlayDetails={false}
                      className="w-full h-full"
                    />
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* ---------------- VIEW MODE 3: ACTIVE GALLERY (Awwwards/Codrops Highlight) ---------------- */}
        {viewMode === 'gallery' && (
          <div className="pt-8">
            <div className="p-4 mb-6 bg-white/5 border border-white/10 rounded-sm flex items-center justify-between text-xs font-mono text-stone-400">
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Interactive Active Gallery: Hover any artwork to illuminate that project’s related frames while others recede into architectural outlines.</span>
              </span>
              <span className="text-stone-300 font-semibold uppercase">
                {hoveredProjectId ? `Active: ${PROJECTS.find(p => p.id === hoveredProjectId)?.title}` : 'Hover to Focus'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const isCurrentHovered = hoveredProjectId === project.id;
                const isAnyHovered = hoveredProjectId !== null;
                const shouldRecede = isAnyHovered && !isCurrentHovered;

                return (
                  <div
                    key={project.id}
                    onClick={() => onOpenProject(project.id)}
                    onMouseEnter={() => setHoveredProjectId(project.id)}
                    onMouseLeave={() => setHoveredProjectId(null)}
                    className={`cursor-pointer transition-all duration-500 transform ${
                      shouldRecede
                        ? 'opacity-25 grayscale scale-[0.98]'
                        : isCurrentHovered
                        ? 'opacity-100 scale-[1.02] shadow-[0_0_30px_rgba(56,189,248,0.2)]'
                        : 'opacity-90'
                    }`}
                  >
                    <div className="relative">
                      <ArchitecturalVisual
                        project={project}
                        mode={shouldRecede ? 'blueprint' : (blueprintMode ? 'blueprint' : 'render')}
                        aspectRatio="video"
                        isHovered={isCurrentHovered}
                        className="w-full"
                      />

                      {isCurrentHovered && (
                        <div className="absolute top-2 right-2 bg-sky-500 text-black px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                          Selected Anchor
                        </div>
                      )}
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <div>
                        <h4 className="font-display text-base font-bold uppercase text-white">
                          {project.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
                          <span>{project.categoryShort}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.area}</span>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-stone-400">
                        {project.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
