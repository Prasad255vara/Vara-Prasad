import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/projectsData';
import { Award, Compass, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const activeMember = TEAM_MEMBERS[selectedMemberIndex];

  return (
    <section id="team" className="py-24 border-b border-white/10 relative overflow-hidden">
      {/* Background circular halo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-950/10 blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2">
            <span>04. Studio Leadership</span>
            <span aria-hidden="true">·</span>
            <span>Multidisciplinary Collective</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            Architecture of Unity
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            Over 45 architects, interior specialists, structural engineers, and parametric modelers operating across Zurich, Milan, Warsaw, and Kyiv.
          </p>
        </div>

        {/* Dynamic Circular Composition Layout (Codrops Case Study Signature) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Circular Wheel Dial Interface (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[420px] sm:min-h-[480px]">
            {/* Outer Orbit Rings */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/10 blueprint-grid opacity-30" />
            <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-sky-400/20" />
            
            {/* Center Bureau Monogram */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#121418] border border-white/20 flex flex-col items-center justify-center text-center shadow-2xl z-10">
              <span className="font-display text-lg font-bold text-white tracking-widest">
                KNKO
              </span>
              <span className="font-mono text-[9px] text-sky-400 tracking-wider">
                BUREAU
              </span>
            </div>

            {/* Orbiting Team Member Nodes */}
            {TEAM_MEMBERS.map((member, index) => {
              const total = TEAM_MEMBERS.length;
              // Compute circular angle
              const angle = (index * (2 * Math.PI)) / total - Math.PI / 2;
              const radius = 150; // pixels from center for desktop
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isSelected = selectedMemberIndex === index;

              return (
                <button
                  key={member.id}
                  onClick={() => setSelectedMemberIndex(index)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-all duration-500 flex flex-col items-center group focus:outline-none z-20 ${
                    isSelected
                      ? 'scale-110'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  title={member.name}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-display font-bold text-xs transition-all border ${
                      isSelected
                        ? 'bg-white text-black border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                        : 'bg-[#181a20] text-stone-300 border-white/20 group-hover:border-white'
                    }`}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className={`text-[10px] font-mono mt-1 whitespace-nowrap px-1.5 py-0.5 rounded ${isSelected ? 'bg-sky-500/20 text-sky-300' : 'text-stone-400'}`}>
                    {member.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Team Member Profile Dossier (6 cols) */}
          <div className="lg:col-span-6 bg-[#121418] border border-white/10 p-8 sm:p-10 rounded-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
                Leadership Profile
              </span>
              <span className="font-mono text-xs text-stone-400">
                {activeMember.experience} in Practice
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                {activeMember.name}
              </h3>
              <p className="font-mono text-xs text-stone-400 mt-1">
                {activeMember.role}
              </p>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                Specialization: {activeMember.discipline}
              </p>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              {activeMember.bio}
            </p>

            <blockquote className="p-4 bg-white/[0.02] border-l-2 border-white/30 text-stone-300 italic text-xs leading-relaxed">
              {activeMember.motto}
            </blockquote>

            <div className="pt-2 border-t border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                Signature Realized Projects:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeMember.keyProjects.map((p, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-mono text-stone-300 rounded-sm"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
