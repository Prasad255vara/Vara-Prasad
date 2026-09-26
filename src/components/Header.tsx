import React, { useState } from 'react';
import { Menu, X, Compass, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  blueprintMode: boolean;
  onToggleBlueprint: () => void;
  onOpenContactModal: () => void;
  onSelectView?: (view: 'home' | '404') => void;
}

export const Header: React.FC<HeaderProps> = ({
  blueprintMode,
  onToggleBlueprint,
  onOpenContactModal,
  onSelectView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Disciplines', href: '#disciplines' },
    { label: 'Team', href: '#team' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contacts', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onSelectView) onSelectView('home');
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0d10]/85 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onSelectView) onSelectView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 text-white focus-visible:outline-none"
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-stone-300 transition-colors uppercase">
            Kononenko
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-stone-400 border-l border-white/20 pl-3 uppercase">
            Architectural Bureau
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wider text-stone-400">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              if (onSelectView) onSelectView('404');
            }}
            className="hover:text-stone-300 text-stone-500 font-mono text-xs transition-colors duration-200 cursor-pointer focus-visible:outline-none"
            title="Inspect 404 Concept Case Page"
          >
            404 View
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4">
          {/* Blueprint CAD Mode Switcher */}
          <button
            onClick={onToggleBlueprint}
            className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono tracking-wider transition-all duration-300 border ${
              blueprintMode
                ? 'bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                : 'bg-white/5 text-stone-400 border-white/10 hover:text-white hover:border-white/25'
            }`}
            title="Toggle between Completed Build Photography and Vector CAD Blueprint Schematic"
          >
            <Compass className={`w-3.5 h-3.5 ${blueprintMode ? 'text-sky-400 animate-spin-slow' : 'text-stone-400'}`} />
            <span className="whitespace-nowrap">
              {blueprintMode ? 'CAD BLUEPRINT' : 'BLUEPRINT MODE'}
            </span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContactModal}
            className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-black bg-white hover:bg-stone-200 transition-colors rounded-sm whitespace-nowrap flex items-center gap-1.5 shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d10] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-display tracking-wide text-stone-300 hover:text-white py-1 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onSelectView) onSelectView('404');
              }}
              className="text-left font-mono text-sm text-stone-500 hover:text-stone-300 py-1"
            >
              Inspect 404 Concept Case Page
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onToggleBlueprint();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between w-full p-2.5 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-stone-300"
            >
              <span>Blueprint View Mode</span>
              <span className={`px-2 py-0.5 rounded text-[10px] ${blueprintMode ? 'bg-sky-500 text-black font-bold' : 'bg-stone-700 text-stone-300'}`}>
                {blueprintMode ? 'ON' : 'OFF'}
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-sm text-center"
            >
              Inquire Bureau Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
