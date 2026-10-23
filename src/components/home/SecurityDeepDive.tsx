import React from 'react';
import { motion } from 'motion/react';
import { Shield, Key, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export const SecurityDeepDive: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explanatory Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono tracking-widest uppercase text-cyan-400">
              Institutional Cryptography
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display leading-tight">
              Cryptographic isolation so thorough even our founders cannot read your files
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Traditional SaaS stores your files in a shared database where a single SQL query bug could expose cross-account records. Vaultly was built from the hardware level up for sovereign risk and compliance.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Key className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Envelope Key Wrapping (KMS)</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Every document is sealed with a unique Data Encryption Key (DEK). The DEK is wrapped by a per-tenant Key Encryption Key (KEK) stored inside hardware security modules (HSM).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <EyeOff className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Zero Model Training & Volatile Memory Purge</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Document embeddings and synthesis prompts exist exclusively in RAM during processing and are wiped clean within 180 seconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Independent SOC 2 & HIPAA Attestations</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Audited by tier-1 global assurance accounting firms with continuous synthetic penetration probing and SOC 2 Type II controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Blueprint Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F1528] border border-white/10 shadow-2xl relative space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono text-cyan-300 font-semibold">
                    CRYPTOGRAPHIC_ISOLATION_DIAGRAM
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">HSM_TIER_4</span>
              </div>

              {/* Layer 1: Client Upload Envelope */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-400" />
                    Layer 1: Document Payload Ingestion
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Client TLS 1.3</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Payload SHA-256 hashed and partitioned into isolated tenant storage enclave.
                </p>
              </div>

              {/* Layer 2: Hardware KMS Barrier */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-cyan-300 flex items-center gap-2">
                    <Key className="w-4 h-4 text-cyan-400" />
                    Layer 2: Per-User Envelope Partition
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400">AES-256-GCM</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Unique KEK per user identity. Access from any other identity triggers immediate HTTP 403.
                </p>
              </div>

              {/* Layer 3: Ephemeral Neural Engine */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Layer 3: Ephemeral Neural Inference
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">RAM Purged</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Zero model weights updated. Output brief encrypted directly into tenant enclave.
                </p>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400 font-mono">
                Verified compliance with FINRA, HIPAA, SOC 2 Type II, and GDPR Art. 32
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
