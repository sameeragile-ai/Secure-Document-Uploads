import React from 'react';
import { MOCK_COMPANIES } from '../../data/mockData';

export const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-mono mb-8">
          Trusted by risk counsel, fintech operators, and research teams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {MOCK_COMPANIES.map(company => (
            <div
              key={company.name}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group text-center"
            >
              <span className="text-sm sm:text-base font-bold text-slate-300 group-hover:text-cyan-300 font-display tracking-tight transition-colors">
                {company.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                {company.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
