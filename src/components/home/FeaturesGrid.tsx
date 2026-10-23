import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  BrainCircuit,
  SearchCode,
  FileCheck2,
  LockKeyhole,
  CheckSquare,
} from 'lucide-react';

const FEATURES = [
  {
    icon: LockKeyhole,
    title: 'Zero-Knowledge Tenant Isolation',
    description:
      'Each workspace is cryptographically partitioned using individual AES-256-GCM envelope keys. Documents cannot be decrypted across tenant boundaries—even by our database engineers.',
    metric: '256-bit isolation',
    color: 'from-indigo-500 to-cyan-400',
  },
  {
    icon: BrainCircuit,
    title: 'Executive Plain-English Synthesis',
    description:
      'Strip out impenetrable legalese and dense bureaucratic phrasing. Receive calibrated 3-minute executive briefs summarizing rights, warranties, fee structures, and renewal triggers.',
    metric: '3-min synthesis',
    color: 'from-purple-500 to-indigo-400',
  },
  {
    icon: ShieldAlert,
    title: 'Clause-Level Risk & Liability Audits',
    description:
      'Automatically unmask high-risk provisions: uncapped indemnities, one-sided termination rights, unilateral IP assignment clauses, and non-standard governing jurisdictions.',
    metric: '99.4% precision',
    color: 'from-amber-400 to-rose-500',
  },
  {
    icon: SearchCode,
    title: 'Multi-Format Intelligent Extraction',
    description:
      'Upload native digital PDFs, Word DOCX documents, or scanned camera receipts. Our neural OCR engine normalizes skewed angles and reconstructs complex tabular balance sheets.',
    metric: 'PDF, DOCX, PNG, JPG',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: CheckSquare,
    title: 'Action Item & Obligation Checklists',
    description:
      'Converts passive text into chronological checklists. Every payment due date, notice deadline, compliance delivery date, and audit milestone is explicitly isolated with assigned parties.',
    metric: 'Automated checklists',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: FileCheck2,
    title: 'Zero-Model-Retention Guarantee',
    description:
      'Your documents are processed ephemerally in volatile memory and purged immediately following structured extraction. We never train public foundation models on customer files.',
    metric: '100% ephemeral',
    color: 'from-indigo-400 to-purple-400',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-mono tracking-widest uppercase text-cyan-400">
            Defensive Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Built for contracts where a missed clause costs millions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Vaultly bridges the chasm between raw legal complexity and executive velocity. Every extraction is cited back to the source text for instantaneous verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-7 rounded-2xl bg-[#0F162D]/70 hover:bg-[#121B38]/90 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>

                  <h3 className="text-lg font-semibold text-white font-display mb-3 group-hover:text-cyan-200 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Specification</span>
                  <span className="text-cyan-300 font-medium">{feat.metric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
