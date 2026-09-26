import React from 'react';
import { AWARDS_LIST } from '../data/projectsData';
import { Trophy, ArrowUpRight } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-24 border-b border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2">
              <span>05. International Recognition</span>
              <span aria-hidden="true">·</span>
              <span>35+ Global Accolades</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Awards & Honors
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="p-2 rounded-sm bg-white/5 border border-white/10 text-amber-400">
              <Trophy className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-stone-400">
              Consistently recognized by Awwwards, DNA Paris, Chicago Athenaeum & Novum.
            </span>
          </div>
        </div>

        {/* Awards Table Index */}
        <div className="divide-y divide-white/10 pt-4">
          <div className="hidden md:grid grid-cols-12 py-3 font-mono text-[11px] text-stone-400 uppercase tracking-widest">
            <span className="col-span-2">Year</span>
            <span className="col-span-3">Award Institution</span>
            <span className="col-span-4">Recognition / Distinction</span>
            <span className="col-span-3 text-right">Awarded Project</span>
          </div>

          {AWARDS_LIST.map((award, index) => (
            <div
              key={index}
              className="py-4 grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 hover:bg-white/[0.02] transition-colors px-2 -mx-2"
            >
              <div className="col-span-2 font-mono text-xs text-sky-400 font-semibold tabular-nums">
                {award.year}
              </div>

              <div className="col-span-3 font-display font-semibold uppercase text-stone-200 text-sm">
                {award.body}
              </div>

              <div className="col-span-4 text-xs text-stone-300 font-medium">
                {award.title}
              </div>

              <div className="col-span-3 text-left md:text-right font-mono text-xs text-stone-400">
                {award.project}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
