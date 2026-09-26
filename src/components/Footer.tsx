import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenSection: (href: string) => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
  onOpenSection,
  onOpenContactModal,
}) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#090a0d] border-t border-white/10 pt-20 pb-12 relative overflow-hidden text-stone-400">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Massive Bureau Sign-off Typography */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400 block mb-3">
              Kononenko Group · knko.pro
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
              Shaping Spaces
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onOpenContactModal}
              className="px-6 py-3 bg-white text-black hover:bg-stone-200 transition-colors font-mono text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center gap-2"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onScrollToTop}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-sm transition-colors"
              title="Return to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10 text-xs font-mono">
          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Bureau Navigation
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onOpenSection('#projects')} className="hover:text-white transition-colors">
                  Selected Works (10)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSection('#philosophy')} className="hover:text-white transition-colors">
                  Philosophy & Method
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSection('#disciplines')} className="hover:text-white transition-colors">
                  Practice Disciplines
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSection('#team')} className="hover:text-white transition-colors">
                  Leadership Collective
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSection('#awards')} className="hover:text-white transition-colors">
                  International Honors
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Typologies
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>Private Modernist Villas</li>
              <li>Alpine Cliff Residences</li>
              <li>Commercial & Mixed-Use Atriums</li>
              <li>Penthouse Interiors for Life</li>
              <li>Biophilic Wellness Pavilions</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">
              International Studios
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>Kyiv: Velyka Vasylkivska 72</li>
              <li>Warsaw: Nowy Świat 41</li>
              <li>Milan: Via Montenapoleone 8</li>
              <li>Zurich: Bahnhofstrasse 28</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Architecture Portals
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="https://archdaily.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>ArchDaily Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Behance Monograph</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Instagram @kononenko.bureau</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-stone-500">
          <div>
            © 2012–{currentYear} Kononenko Architectural Bureau. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Awwwards Site of the Day Winner</span>
            <span aria-hidden="true">·</span>
            <span>Developer Award Honoree</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
