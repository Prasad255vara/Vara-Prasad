import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  prefilledProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledProject }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [typology, setTypology] = useState('Private Residence');
  const [scale, setScale] = useState('300 — 800 m²');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    timeline: '2026/2027',
    message: prefilledProject ? `Inquiry regarding ${prefilledProject} architectural case study.` : '',
  });

  // Bureau Live Clocks
  const [clocks, setClocks] = useState({
    kyiv: '',
    warsaw: '',
    milan: '',
    zurich: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone: string) =>
        new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setClocks({
        kyiv: formatTime('Europe/Kyiv'),
        warsaw: formatTime('Europe/Warsaw'),
        milan: formatTime('Europe/Rome'),
        zurich: formatTime('Europe/Zurich'),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2">
            <span>06. Bureau Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Commissions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            Initiate a Project
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            We work with private clients, visionary developers, and cultural institutions globally. Begin a confidential architectural consultation with our principal partners.
          </p>
        </div>

        {/* Global Bureau Locations & Live Time Clocks Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-16 border-b border-white/10">
          <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm space-y-1">
            <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block">
              Kyiv Main Bureau
            </span>
            <span className="font-display text-base font-bold text-white block uppercase">
              Velyka Vasylkivska 72
            </span>
            <span className="font-mono text-xs text-stone-400 flex items-center gap-1.5 pt-1 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{clocks.kyiv || '12:00:00'} (EET)</span>
            </span>
          </div>

          <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm space-y-1">
            <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block">
              Warsaw Studio
            </span>
            <span className="font-display text-base font-bold text-white block uppercase">
              Nowy Świat 41
            </span>
            <span className="font-mono text-xs text-stone-400 flex items-center gap-1.5 pt-1 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{clocks.warsaw || '11:00:00'} (CET)</span>
            </span>
          </div>

          <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm space-y-1">
            <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block">
              Milan Liaison
            </span>
            <span className="font-display text-base font-bold text-white block uppercase">
              Via Montenapoleone 8
            </span>
            <span className="font-mono text-xs text-stone-400 flex items-center gap-1.5 pt-1 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{clocks.milan || '11:00:00'} (CET)</span>
            </span>
          </div>

          <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm space-y-1">
            <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block">
              Zurich Desk
            </span>
            <span className="font-display text-base font-bold text-white block uppercase">
              Bahnhofstrasse 28
            </span>
            <span className="font-mono text-xs text-stone-400 flex items-center gap-1.5 pt-1 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{clocks.zurich || '11:00:00'} (CET)</span>
            </span>
          </div>
        </div>

        {/* Main Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          
          {/* Direct Bureau Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Direct Contact
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed font-light">
                For urgent tender proposals, press queries, or general monograph requests:
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">
                  Principal Mailbox
                </span>
                <a href="mailto:hello@kononenkogroup.com" className="text-white hover:text-sky-300 text-sm font-semibold transition-colors block">
                  hello@kononenkogroup.com
                </a>
                <span className="text-stone-500 text-[10px] block">
                  PGP Key encrypted communication available upon request
                </span>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">
                  Bureau Telephone
                </span>
                <a href="tel:+380442908812" className="text-white hover:text-sky-300 text-sm font-semibold transition-colors block">
                  +380 44 290 88 12
                </a>
                <span className="text-stone-500 text-[10px] block">
                  Mon – Fri · 09:00 – 19:00 CET
                </span>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">
                  Press & Monograph
                </span>
                <a href="mailto:press@kononenkogroup.com" className="text-white hover:text-sky-300 text-sm font-semibold transition-colors block">
                  press@kononenkogroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Project Brief Configurator (7 cols) */}
          <div className="lg:col-span-7 bg-[#121418] border border-white/10 p-8 sm:p-10 rounded-sm">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  Dossier Received
                </h3>
                <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our managing partners will review your project brief and respond within 24 business hours to coordinate an exploratory architectural consultation.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        location: '',
                        timeline: '2026/2027',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-stone-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                    Project Brief
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                    Commission Questionnaire
                  </h3>
                </div>

                {/* Step 1: Typology */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-stone-300 uppercase">
                    01. Project Typology
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Private Residence', 'Commercial / HQ', 'Interior Living', 'Cultural / Hotel'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTypology(t)}
                        className={`p-2.5 rounded-sm border text-xs font-mono transition-colors text-center ${
                          typology === t
                            ? 'bg-white text-black font-semibold border-white'
                            : 'bg-white/5 border-white/10 text-stone-400 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Estimated Scale */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-stone-300 uppercase">
                    02. Anticipated Usable Area
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['< 300 m²', '300 — 800 m²', '800 — 2,500 m²', '> 2,500 m²'].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setScale(s)}
                        className={`p-2.5 rounded-sm border text-xs font-mono transition-colors text-center ${
                          scale === s
                            ? 'bg-white text-black font-semibold border-white'
                            : 'bg-white/5 border-white/10 text-stone-400 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-stone-400">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marc Bernasconi"
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-stone-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-stone-400">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+41 44 ..."
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-stone-400">
                      Site Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Lake Zurich, Switzerland"
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-stone-400">
                    Brief Notes & Specific Program Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the site topography, architectural desires, budget parameters, or reference projects..."
                    className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-white text-black hover:bg-stone-200 transition-colors font-mono text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Submit Inquiry to Principal Architects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
