import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, Compass, Layers, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import { Project, PROJECTS } from '../data/projectsData';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
  onSelectProject: (id: string) => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  projectId,
  onClose,
  onSelectProject,
  onInquireProject,
}) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'blueprint' | 'floorplan'>('visual');
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const project = PROJECTS.find((p) => p.id === projectId);
  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);

  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  useEffect(() => {
    // ESC key closes modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && nextProject) onSelectProject(nextProject.id);
      if (e.key === 'ArrowLeft' && prevProject) onSelectProject(prevProject.id);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, nextProject, prevProject, onSelectProject]);

  // Set default selected room on project change
  useEffect(() => {
    if (project && project.floorPlanRooms.length > 0) {
      setSelectedRoomId(project.floorPlanRooms[0].id);
    }
  }, [project]);

  if (!project) return null;

  const currentRoom = project.floorPlanRooms.find((r) => r.id === selectedRoomId);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-20 bg-[#0c0d10]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Project Breadcrumb */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
            Case Monograph
          </span>
          <span className="text-stone-600 font-mono">/</span>
          <span className="font-display text-lg font-bold uppercase text-white">
            {project.title}
          </span>
        </div>

        {/* Modal Controls */}
        <div className="flex items-center gap-3">
          {/* Navigation Prev / Next */}
          <div className="hidden sm:flex items-center gap-1 border border-white/10 rounded-sm bg-white/5 p-0.5">
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
              title={`Previous: ${prevProject.title}`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-[11px] text-stone-400 px-2 tabular-nums">
              {currentIndex + 1} / {PROJECTS.length}
            </span>
            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
              title={`Next: ${nextProject.title}`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white hover:bg-white/10 rounded-sm border border-white/10 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Case Study Content Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10">
        
        {/* Main Hero Visual / Interactive Stage */}
        <div className="space-y-4 mb-12">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-colors ${
                  activeTab === 'visual'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-stone-400 hover:text-white'
                }`}
              >
                Photorealistic View
              </button>
              <button
                onClick={() => setActiveTab('blueprint')}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-colors ${
                  activeTab === 'blueprint'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40 font-semibold'
                    : 'bg-white/5 text-stone-400 hover:text-white'
                }`}
              >
                CAD Blueprint Elevation
              </button>
              <button
                onClick={() => setActiveTab('floorplan')}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-colors ${
                  activeTab === 'floorplan'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-stone-400 hover:text-white'
                }`}
              >
                Interactive Floor Plan
              </button>
            </div>

            <span className="font-mono text-xs text-stone-400 hidden sm:inline-block">
              {project.location} · {project.area}
            </span>
          </div>

          {/* Visual Display based on active tab */}
          <div className="rounded-sm overflow-hidden border border-white/10 bg-[#121418]">
            {activeTab === 'visual' && (
              <ArchitecturalVisual
                project={project}
                mode="render"
                aspectRatio="wide"
                showOverlayDetails={true}
                className="w-full"
              />
            )}

            {activeTab === 'blueprint' && (
              <ArchitecturalVisual
                project={project}
                mode="blueprint"
                aspectRatio="wide"
                showOverlayDetails={true}
                className="w-full"
              />
            )}

            {activeTab === 'floorplan' && (
              <div className="relative aspect-[21/9] bg-[#09111b] p-6 flex flex-col justify-between">
                {/* SVG Floor Plan Schematic */}
                <div className="absolute inset-0 blueprint-grid-dense opacity-40 pointer-events-none" />

                <svg className="w-full h-full" viewBox="0 0 900 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Walls */}
                  <rect x="80" y="60" width="740" height="330" stroke="#38bdf8" strokeWidth="2.5" fill="#0c1624" fillOpacity="0.8" />
                  
                  {/* Internal Room Dividers */}
                  <line x1="380" y1="60" x2="380" y2="390" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="80" y1="230" x2="380" y2="230" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="380" y1="210" x2="820" y2="210" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="620" y1="210" x2="620" y2="390" stroke="#38bdf8" strokeWidth="1.5" />

                  {/* Structural Columns */}
                  {[
                    [120, 100], [340, 100], [500, 100], [780, 100],
                    [120, 350], [340, 350], [500, 350], [780, 350]
                  ].map(([cx, cy], i) => (
                    <rect key={i} x={cx - 6} y={cy - 6} width="12" height="12" fill="#38bdf8" />
                  ))}

                  {/* Glazed Walls / Terrace Sliding Portals */}
                  <line x1="420" y1="60" x2="780" y2="60" stroke="#93c5fd" strokeWidth="3" strokeDasharray="12 6" />
                  <line x1="80" y1="100" x2="80" y2="200" stroke="#93c5fd" strokeWidth="3" strokeDasharray="12 6" />

                  {/* Interactive Room Hotspots */}
                  {project.floorPlanRooms.map((room) => {
                    const posX = (room.x / 100) * 740 + 80;
                    const posY = (room.y / 100) * 330 + 60;
                    const isSelected = selectedRoomId === room.id;

                    return (
                      <g
                        key={room.id}
                        className="cursor-pointer group"
                        onClick={() => setSelectedRoomId(room.id)}
                      >
                        <circle
                          cx={posX}
                          cy={posY}
                          r={isSelected ? 16 : 12}
                          fill={isSelected ? '#38bdf8' : '#1e293b'}
                          stroke={isSelected ? '#bae6fd' : '#475569'}
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <text
                          x={posX}
                          y={posY + 4}
                          textAnchor="middle"
                          fill={isSelected ? '#000000' : '#ffffff'}
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {room.id.toUpperCase()}
                        </text>

                        {/* Room Label */}
                        <text
                          x={posX}
                          y={posY + 26}
                          textAnchor="middle"
                          fill={isSelected ? '#38bdf8' : '#94a3b8'}
                          fontSize="11"
                          fontFamily="sans-serif"
                          fontWeight={isSelected ? 'bold' : 'normal'}
                        >
                          {room.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Selected Room Details Bar */}
                {currentRoom && (
                  <div className="absolute bottom-4 left-6 right-6 p-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-sky-500 text-black font-bold uppercase">
                        {currentRoom.id.toUpperCase()}
                      </span>
                      <span className="text-white font-semibold">{currentRoom.name}</span>
                      <span className="text-stone-400">({currentRoom.area})</span>
                      <span className="hidden md:inline text-stone-300 border-l border-white/20 pl-3">
                        {currentRoom.details}
                      </span>
                    </div>
                    <span className="text-sky-400 hidden sm:inline">Click other pins to inspect</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Project Header Info & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left Column: Concept & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                Architectural Concept
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-1">
                {project.title}
              </h2>
              <p className="font-mono text-xs text-stone-400 mt-1">
                Lead Architects: {project.leadArchitect}
              </p>
            </div>

            <p className="text-base text-stone-300 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="p-6 bg-white/[0.03] border-l-2 border-sky-400 text-stone-300 text-sm leading-relaxed space-y-2">
              <h4 className="font-display font-semibold uppercase text-white tracking-wider text-xs">
                Spatial Organization
              </h4>
              <p>{project.concept}</p>
            </div>

            {/* Materials Palette Showcase */}
            <div className="pt-4 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400">
                Curated Materials Palette
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.materials.map((mat, i) => (
                  <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-sm space-y-1">
                    <span className="font-mono text-[9px] text-stone-400 block">
                      MAT 0{i + 1}
                    </span>
                    <span className="text-xs text-white font-medium block">
                      {mat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specification Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-white/10 bg-[#121418] p-6 rounded-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-400">
                  Project Dossier
                </span>
                <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{project.status}</span>
                </span>
              </div>

              <div className="divide-y divide-white/5 font-mono text-xs">
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-400">Typology</span>
                  <span className="text-white text-right">{project.category}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-400">Location</span>
                  <span className="text-white text-right">{project.location}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-400">Year Realized</span>
                  <span className="text-white text-right">{project.year}</span>
                </div>
                {project.specs.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between">
                    <span className="text-stone-400">{item.label}</span>
                    <span className="text-white text-right font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Inquiry Action */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    onClose();
                    onInquireProject(project.title);
                  }}
                  className="w-full py-3 bg-white text-black hover:bg-stone-200 transition-colors text-xs font-mono uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2"
                >
                  <span>Commission Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Next / Previous Quick Jump Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => onSelectProject(prevProject.id)}
                className="p-3 bg-white/5 border border-white/10 hover:border-white/25 rounded-sm text-left group transition-colors"
              >
                <span className="font-mono text-[10px] text-stone-400 uppercase block mb-1">
                  ← Previous Case
                </span>
                <span className="font-display text-sm font-bold text-white group-hover:text-sky-300 block truncate uppercase">
                  {prevProject.title}
                </span>
              </button>

              <button
                onClick={() => onSelectProject(nextProject.id)}
                className="p-3 bg-white/5 border border-white/10 hover:border-white/25 rounded-sm text-right group transition-colors"
              >
                <span className="font-mono text-[10px] text-stone-400 uppercase block mb-1">
                  Next Case →
                </span>
                <span className="font-display text-sm font-bold text-white group-hover:text-sky-300 block truncate uppercase">
                  {nextProject.title}
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
