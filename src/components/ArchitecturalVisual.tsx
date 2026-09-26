import React from 'react';
import { Project } from '../data/projectsData';

interface ArchitecturalVisualProps {
  project: Project;
  mode?: 'render' | 'blueprint';
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  className?: string;
  isHovered?: boolean;
  showOverlayDetails?: boolean;
}

export const ArchitecturalVisual: React.FC<ArchitecturalVisualProps> = ({
  project,
  mode = 'render',
  aspectRatio = 'video',
  className = '',
  isHovered = false,
  showOverlayDetails = true,
}) => {
  const aspectClass = {
    video: 'aspect-[16/10]',
    wide: 'aspect-[21/9]',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  }[aspectRatio];

  // Specific architectural SVG layouts depending on the project
  const renderArchitecturalArtwork = () => {
    switch (project.slug) {
      case 'glass-villa':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gv-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d131a" />
                <stop offset="60%" stopColor="#182330" />
                <stop offset="100%" stopColor="#253545" />
              </linearGradient>
              <linearGradient id="gv-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffeed1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e59844" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gv-water" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#141c24" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0a0e13" />
              </linearGradient>
            </defs>

            {/* Background Sky & Alpine Silhouette */}
            <rect width="800" height="500" fill="url(#gv-sky)" />
            <path d="M0 290 L180 210 L340 260 L520 180 L680 230 L800 170 L800 500 L0 500 Z" fill="#0e141b" opacity="0.85" />
            <path d="M0 320 L150 280 L290 310 L480 250 L640 290 L800 240 L800 500 L0 500 Z" fill="#121a22" />

            {/* Hillside Ground Base */}
            <path d="M0 380 Q 300 370 800 390 L800 500 L0 500 Z" fill="#080b0f" />

            {/* Cantilever Lower Concrete Podium */}
            <rect x="140" y="310" width="460" height="90" fill="#20252b" stroke="#333a44" strokeWidth="1" />
            <rect x="140" y="325" width="200" height="75" fill="#161a1f" />

            {/* Cantilever Upper Glass Volume (Hanging 8.4m forward) */}
            <rect x="220" y="220" width="480" height="110" fill="#1b2836" fillOpacity="0.4" stroke="#475569" strokeWidth="1.5" />
            
            {/* Interior Warm Illumination glow */}
            <rect x="230" y="230" width="300" height="90" fill="url(#gv-glow)" opacity={isHovered ? 0.95 : 0.8} className="transition-opacity duration-700" />
            <rect x="540" y="235" width="150" height="80" fill="#fcd34d" opacity="0.35" />

            {/* Structural Mullions and Floor Plinth */}
            <line x1="220" y1="330" x2="700" y2="330" stroke="#94a3b8" strokeWidth="3" />
            <line x1="220" y1="220" x2="700" y2="220" stroke="#64748b" strokeWidth="2" />
            <line x1="320" y1="220" x2="320" y2="330" stroke="#334155" strokeWidth="1.5" />
            <line x1="420" y1="220" x2="420" y2="330" stroke="#334155" strokeWidth="1.5" />
            <line x1="520" y1="220" x2="520" y2="330" stroke="#334155" strokeWidth="1.5" />
            <line x1="620" y1="220" x2="620" y2="330" stroke="#334155" strokeWidth="1.5" />

            {/* Cantilever Supporting Core Column */}
            <rect x="360" y="330" width="80" height="70" fill="#1c2127" stroke="#2e353f" />

            {/* Reflective Water Pool */}
            <polygon points="120,400 680,400 730,470 60,470" fill="url(#gv-water)" stroke="#222f3e" strokeWidth="1" />
            {/* Pool Water Reflection Ribbons */}
            <ellipse cx="400" cy="425" rx="160" ry="8" fill="#e59844" opacity="0.25" />
            <ellipse cx="360" cy="445" rx="90" ry="4" fill="#fcd34d" opacity="0.15" />

            {/* Minimalist Pine Tree Silhouettes */}
            <path d="M110 390 L115 280 L120 390 Z" fill="#090d11" />
            <path d="M90 400 L95 310 L100 400 Z" fill="#090d11" />
            <path d="M720 410 L725 300 L730 410 Z" fill="#090d11" />
            <path d="M745 420 L750 330 L755 420 Z" fill="#090d11" />
          </svg>
        );

      case 'hillside-900':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#17181c" />
            {/* Alpine Slope Line */}
            <polygon points="0,150 800,420 800,500 0,500" fill="#101114" />
            <polygon points="0,220 800,470 800,500 0,500" fill="#090a0c" />

            {/* Terraced Stepped Boxes */}
            {/* Upper Tier */}
            <polygon points="180,210 420,210 420,280 180,280" fill="#2d2b27" stroke="#4a463e" strokeWidth="1.5" />
            <rect x="200" y="225" width="180" height="45" fill="#f59e0b" opacity="0.45" />

            {/* Middle Tier */}
            <polygon points="260,270 560,270 560,345 260,345" fill="#22211f" stroke="#3d3a35" strokeWidth="1.5" />
            <rect x="290" y="285" width="220" height="50" fill="#fef3c7" opacity="0.6" />
            <line x1="360" y1="285" x2="360" y2="335" stroke="#1f2937" strokeWidth="2" />
            <line x1="430" y1="285" x2="430" y2="335" stroke="#1f2937" strokeWidth="2" />

            {/* Lower Tier */}
            <polygon points="340,335 680,335 680,415 340,415" fill="#1a1918" stroke="#33312c" strokeWidth="1.5" />
            <rect x="370" y="350" width="260" height="55" fill="#d97706" opacity="0.35" />

            {/* Charred Larch Vertical Slats */}
            <g stroke="#141413" strokeWidth="2">
              <line x1="200" y1="210" x2="200" y2="280" />
              <line x1="210" y1="210" x2="210" y2="280" />
              <line x1="220" y1="210" x2="220" y2="280" />
              <line x1="570" y1="335" x2="570" y2="415" />
              <line x1="580" y1="335" x2="580" y2="415" />
              <line x1="590" y1="335" x2="590" y2="415" />
              <line x1="600" y1="335" x2="600" y2="415" />
            </g>
          </svg>
        );

      case 'dzen-community':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#131715" />
            {/* Concentric curved walls */}
            <ellipse cx="400" cy="270" rx="360" ry="180" stroke="#2d3730" strokeWidth="3" fill="#101512" />
            <ellipse cx="400" cy="270" rx="270" ry="135" stroke="#3f4e44" strokeWidth="2" fill="#0d120f" />
            <ellipse cx="400" cy="270" rx="180" ry="90" stroke="#526558" strokeWidth="1.5" fill="#16201b" />
            
            {/* Central Serene Water Court */}
            <ellipse cx="400" cy="270" rx="100" ry="50" fill="#1e2d26" stroke="#688070" strokeWidth="1" />
            <circle cx="400" cy="270" r="14" fill="#a7f3d0" opacity="0.75" />

            {/* Rhythmic Colonnade Radii */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * Math.PI) / 8;
              const x1 = 400 + Math.cos(angle) * 110;
              const y1 = 270 + Math.sin(angle) * 55;
              const x2 = 400 + Math.cos(angle) * 260;
              const y2 = 270 + Math.sin(angle) * 130;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2c3a32" strokeWidth="1.5" strokeDasharray="4 6" />;
            })}
          </svg>
        );

      case 'khamovniki-12':
      case 'cloud-nine':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#181716" />
            {/* Minimalist Interior Travertine Wall */}
            <rect x="0" y="0" width="320" height="500" fill="#24211e" stroke="#38332e" strokeWidth="1" />
            {/* Horizontal stone slab joints */}
            <line x1="0" y1="120" x2="320" y2="120" stroke="#161413" strokeWidth="2" />
            <line x1="0" y1="240" x2="320" y2="240" stroke="#161413" strokeWidth="2" />
            <line x1="0" y1="360" x2="320" y2="360" stroke="#161413" strokeWidth="2" />

            {/* Large Floor-to-Ceiling City Window View */}
            <rect x="320" y="40" width="480" height="380" fill="#0f1115" stroke="#2f3238" strokeWidth="3" />
            <line x1="560" y1="40" x2="560" y2="420" stroke="#1e2127" strokeWidth="4" />
            {/* Distant city glow */}
            <ellipse cx="560" cy="300" rx="180" ry="60" fill="#f59e0b" opacity="0.1" />

            {/* Low-profile Bespoke Linen Sofa */}
            <rect x="260" y="320" width="340" height="90" rx="4" fill="#3a3733" stroke="#524e49" strokeWidth="1.5" />
            <rect x="290" y="280" width="280" height="55" rx="3" fill="#47433e" stroke="#5c5751" strokeWidth="1" />
            
            {/* Monolithic Dark Marble Coffee Table */}
            <polygon points="460,390 620,390 590,440 430,440" fill="#141518" stroke="#4b5563" strokeWidth="1" />
            <line x1="430" y1="440" x2="430" y2="465" stroke="#25272c" strokeWidth="6" />
            <line x1="590" y1="440" x2="590" y2="465" stroke="#25272c" strokeWidth="6" />

            {/* Recessed Warm Ceiling Cove Light */}
            <line x1="0" y1="30" x2="800" y2="30" stroke="#fef08a" strokeWidth="3" opacity="0.8" />
          </svg>
        );

      case 'levshinsky-lobby':
      case 'naiman-hq':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#15171b" />
            {/* Monumental Double-Height Fluted Limestone Columns */}
            {[80, 220, 580, 720].map((colX, i) => (
              <g key={i}>
                <rect x={colX} y="0" width="70" height="500" fill="#252930" stroke="#3c434f" strokeWidth="1" />
                <line x1={colX + 15} y1="0" x2={colX + 15} y2="500" stroke="#1d2026" strokeWidth="2" />
                <line x1={colX + 35} y1="0" x2={colX + 35} y2="500" stroke="#1d2026" strokeWidth="2" />
                <line x1={colX + 55} y1="0" x2={colX + 55} y2="500" stroke="#1d2026" strokeWidth="2" />
              </g>
            ))}

            {/* Central Sculptural Stone Reception Monolith */}
            <polygon points="320,310 480,310 520,380 280,380" fill="#1a1c21" stroke="#60a5fa" strokeOpacity="0.4" strokeWidth="1.5" />
            <rect x="290" y="380" width="220" height="50" fill="#101115" />

            {/* Warm Linear Grazing Wall Light */}
            <rect x="0" y="0" width="800" height="40" fill="#fef3c7" opacity="0.15" />
            <line x1="0" y1="3" x2="800" y2="3" stroke="#fcd34d" strokeWidth="3" opacity="0.9" />

            {/* Large Glazed Central Courtyard Frame */}
            <rect x="310" y="80" width="180" height="210" fill="#0d1015" stroke="#334155" strokeWidth="2" />
            <line x1="400" y1="80" x2="400" y2="290" stroke="#1e293b" strokeWidth="2" />
            <ellipse cx="400" cy="220" rx="30" ry="40" fill="#38bdf8" opacity="0.1" />
          </svg>
        );

      default:
        // Generic bespoke architectural pavilion / residence
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#191a1e" />
            <path d="M0 340 Q 400 320 800 350 L800 500 L0 500 Z" fill="#0e0f12" />
            {/* Cantilever Volumes */}
            <rect x="180" y="200" width="440" height="130" fill="#262931" stroke="#3f4452" strokeWidth="1.5" />
            <rect x="220" y="220" width="240" height="90" fill="#fbbf24" opacity="0.35" />
            <rect x="480" y="230" width="120" height="70" fill="#38bdf8" opacity="0.2" />
            <line x1="180" y1="330" x2="620" y2="330" stroke="#94a3b8" strokeWidth="2" />
            {/* Supporting Concrete Fin */}
            <polygon points="260,330 320,330 300,430 240,430" fill="#1b1c21" stroke="#323641" />
            <polygon points="500,330 550,330 530,420 480,420" fill="#1b1c21" stroke="#323641" />
          </svg>
        );
    }
  };

  // Precise CAD Blueprint / Vector Line Art Schematic
  const renderBlueprintArtwork = () => {
    return (
      <svg className="w-full h-full bg-[#08121e]" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`cad-grid-${project.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1d4ed8" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
        </defs>

        {/* Blueprint CAD Grid */}
        <rect width="800" height="500" fill={`url(#cad-grid-${project.id})`} />

        {/* Architectural Elevation Guidelines */}
        <g stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.8">
          {/* Main Structural Outlines */}
          <rect x="140" y="160" width="520" height="190" strokeDasharray="none" strokeWidth="1.8" />
          <rect x="180" y="200" width="220" height="120" stroke="#7dd3fc" strokeWidth="1.2" />
          <rect x="420" y="200" width="200" height="120" stroke="#7dd3fc" strokeWidth="1.2" />

          {/* Cantilever Extension Line */}
          <line x1="140" y1="240" x2="660" y2="240" stroke="#38bdf8" strokeWidth="1" />
          
          {/* Trusses / Structural diagonals */}
          <line x1="180" y1="200" x2="400" y2="320" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="400" y1="200" x2="180" y2="320" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="420" y1="200" x2="620" y2="320" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Foundation & Ground Datum Line */}
          <line x1="60" y1="390" x2="740" y2="390" stroke="#60a5fa" strokeWidth="2" />
          <line x1="60" y1="400" x2="740" y2="400" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="6 3" />

          {/* Dimension Lines (Horizontal) */}
          <g stroke="#93c5fd" strokeWidth="0.8">
            <line x1="140" y1="120" x2="660" y2="120" />
            <line x1="140" y1="110" x2="140" y2="130" strokeWidth="1.5" />
            <line x1="660" y1="110" x2="660" y2="130" strokeWidth="1.5" />
            <line x1="400" y1="110" x2="400" y2="130" strokeWidth="1.5" />
          </g>

          {/* Dimension Lines (Vertical) */}
          <g stroke="#93c5fd" strokeWidth="0.8">
            <line x1="100" y1="160" x2="100" y2="350" />
            <line x1="90" y1="160" x2="110" y2="160" strokeWidth="1.5" />
            <line x1="90" y1="350" x2="110" y2="350" strokeWidth="1.5" />
          </g>

          {/* Section Marker Symbols */}
          <circle cx="100" cy="160" r="4" fill="#38bdf8" />
          <circle cx="660" cy="120" r="4" fill="#38bdf8" />
        </g>

        {/* Blueprint Dimension Annotations & Typography */}
        <g fill="#93c5fd" className="font-mono text-[10px]" opacity="0.9">
          <text x="360" y="112" textAnchor="middle">SPAN: 24,800 mm</text>
          <text x="80" y="260" textAnchor="middle" transform="rotate(-90 80 260)">ELEV: +8.400</text>
          <text x="80" y="396" textAnchor="middle">DATUM ±0.000</text>
          <text x="400" y="440" textAnchor="middle" fill="#60a5fa" letterSpacing="0.1em">
            [SECTION A-A · SCALE 1:100 · KONONENKO CAD SPEC]
          </text>
          <text x="190" y="185" fill="#38bdf8" fontSize="11" fontWeight="bold">
            AXIS 01 / {project.title.toUpperCase()}
          </text>
          <text x="500" y="185" fill="#bae6fd" fontSize="9">
            AREA: {project.area} · SPEC 2026-REV.4
          </text>
        </g>
      </svg>
    );
  };

  return (
    <div className={`relative overflow-hidden rounded-sm bg-[#111317] border border-white/5 transition-all duration-500 ${aspectClass} ${className}`}>
      {/* Artwork rendering */}
      {mode === 'blueprint' ? renderBlueprintArtwork() : renderArchitecturalArtwork()}

      {/* Subtle hairline vignette */}
      <div className="absolute inset-0 pointer-events-none border border-white/[0.04]" />

      {/* Blueprint toggle state indicator watermark badge */}
      {showOverlayDetails && (
        <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
          <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
            {mode === 'blueprint' ? 'CAD SCHEMATIC' : 'ARCHITECTURAL VIEW'}
          </span>
          <span className="font-mono text-[9px] text-white/50 bg-black/40 px-1.5 py-0.5">
            {project.area}
          </span>
        </div>
      )}

      {/* Status indicator on bottom-right */}
      {showOverlayDetails && (
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/10 text-white/70">
            {project.status}
          </span>
        </div>
      )}
    </div>
  );
};
