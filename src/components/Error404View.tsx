import React from 'react';
import { ArrowLeft, Compass, RotateCcw } from 'lucide-react';

interface Error404ViewProps {
  onReturnHome: () => void;
}

export const Error404View: React.FC<Error404ViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#0a0c0f] text-white flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid-dense opacity-30 pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 relative z-10">
        <button
          onClick={onReturnHome}
          className="flex items-center gap-3 text-white focus:outline-none group"
        >
          <span className="font-display text-xl font-bold uppercase tracking-tight">
            Kononenko
          </span>
          <span className="font-mono text-xs text-stone-500 border-l border-white/20 pl-3 uppercase">
            Architectural Bureau
          </span>
        </button>

        <span className="font-mono text-xs text-rose-400/90 border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 rounded-sm">
          STATUS 404 / VOID COORDINATE
        </span>
      </div>

      {/* Center Layered Parallax Composition */}
      <div className="relative my-auto py-12 flex flex-col items-center justify-center text-center z-10">
        
        {/* Layered Architectural Blueprint Wireframe */}
        <div className="w-full max-w-3xl h-64 relative mb-6">
          <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6">
              <rect x="150" y="80" width="500" height="160" strokeDasharray="4 4" />
              <line x1="150" y1="160" x2="650" y2="160" stroke="#0284c7" />
              <line x1="400" y1="80" x2="400" y2="240" stroke="#0284c7" />
              
              {/* Crossed Void Markers */}
              <line x1="150" y1="80" x2="650" y2="240" stroke="#e11d48" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="150" y1="240" x2="650" y2="80" stroke="#e11d48" strokeWidth="1.5" strokeOpacity="0.7" />
            </g>

            <g fill="#94a3b8" className="font-mono text-[10px]" opacity="0.8">
              <text x="400" y="60" textAnchor="middle" fill="#f43f5e">
                [SPATIAL COORDINATE UNMAPPED IN THIS BLUEPRINT]
              </text>
              <text x="400" y="270" textAnchor="middle">
                LAT: NULL · LON: NULL · ELEVATION: 0.000m
              </text>
            </g>
          </svg>
        </div>

        {/* Oversized Typographic Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter text-white uppercase text-balance">
          404 — Void Space
        </h1>

        <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-xl font-light leading-relaxed">
          The requested spatial volume does not exist or has been redesigned. In architecture, every blank expanse is simply an invitation for new structure.
        </p>

        {/* Action Button to return home */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={onReturnHome}
            className="px-6 py-3 bg-white text-black hover:bg-stone-200 transition-colors font-mono text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center gap-2 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Bureau Index</span>
          </button>
        </div>
      </div>

      {/* Footer Details */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-mono text-stone-500 relative z-10">
        <span>© 2012–2026 Kononenko Architectural Bureau</span>
        <span>Awwwards Site of the Day Case Study Reference</span>
      </div>

    </div>
  );
};
