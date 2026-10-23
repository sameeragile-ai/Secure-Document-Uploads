import React from 'react';
import { motion } from 'motion/react';
import { UploadCloud, Cpu, FileCheck } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Drop & Enclave Seal',
    subtitle: 'Client-Side Key Binding',
    description:
      'Drag and drop PDF, DOCX, or scanned files up to 50MB. Files are signed with client-side envelope encryption and partitioned into your tenant vault before cloud upload.',
    icon: UploadCloud,
  },
  {
    number: '02',
    title: 'Isolated Neural Synthesis',
    subtitle: 'Zero-Retention Parsing',
    description:
      'Dedicated inference models scan document geometry, extract tabular figures, cross-examine clauses against standard risk matrices, and identify uncapped liabilities.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Verified Action Brief',
    subtitle: 'Instant Plain-English Delivery',
    description:
      'Receive a 3-minute executive summary, numbered risk warnings, and actionable obligation checklists. Export formatted briefs or copy to your team clipboard.',
    icon: FileCheck,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black/30 border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="text-xs font-mono tracking-widest uppercase text-cyan-400">
            Pipeline Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            From 40-page legal maze to 3-minute brief
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered with strict zero-knowledge isolation. How Vaultly turns impenetrable filings into decisive clarity in three automated steps.
          </p>
        </div>

        {/* Steps container with connecting line */}
        <div className="relative">
          {/* Connecting gradient line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 -translate-y-8 h-[2px] bg-gradient-to-r from-indigo-500/20 via-purple-500/50 to-cyan-400/50 pointer-events-none">
            <motion.div
              animate={{
                x: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-24 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-8 rounded-2xl bg-[#0D1429] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top row with step number and icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                      {step.subtitle}
                    </div>

                    <h3 className="text-xl font-bold text-white font-display mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STEP_{step.number}_LATENCY</span>
                    <span className="text-cyan-300">{idx === 0 ? '< 1.2s' : idx === 1 ? '< 2.8s' : 'Instant'}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
