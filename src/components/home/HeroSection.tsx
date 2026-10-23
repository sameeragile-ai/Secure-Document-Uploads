import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  Zap,
  ArrowRight,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Server,
  Layers,
  Star,
  Users,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  // Looping interactive product simulation state
  const [simStep, setSimStep] = useState<'uploading' | 'processing' | 'ready'>('uploading');
  const [simProgress, setSimProgress] = useState(25);
  const [typedText, setTypedText] = useState('');

  const fullSummaryText =
    'Cross-border Master Services Agreement executed. Uncapped indemnification identified in Clause 14.2 requiring immediate liability cap amendment prior to closing.';

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (simStep === 'uploading') {
      const progInterval = setInterval(() => {
        setSimProgress(prev => {
          if (prev >= 100) {
            clearInterval(progInterval);
            setSimStep('processing');
            return 100;
          }
          return prev + 15;
        });
      }, 250);
      return () => clearInterval(progInterval);
    }

    if (simStep === 'processing') {
      timer = setTimeout(() => {
        setSimStep('ready');
      }, 1600);
      return () => clearTimeout(timer);
    }

    if (simStep === 'ready') {
      let charIdx = 0;
      setTypedText('');
      const typeInterval = setInterval(() => {
        if (charIdx < fullSummaryText.length) {
          setTypedText(fullSummaryText.substring(0, charIdx + 1));
          charIdx++;
        } else {
          clearInterval(typeInterval);
          // Wait and loop back
          timer = setTimeout(() => {
            setSimProgress(15);
            setTypedText('');
            setSimStep('uploading');
          }, 4500);
        }
      }, 22);

      return () => {
        clearInterval(typeInterval);
        clearTimeout(timer);
      };
    }
  }, [simStep]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated ambient mesh blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 0.95, 1],
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 20, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-1/4 w-[28rem] h-[28rem] rounded-full bg-purple-600/15 blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top pill/kicker */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-medium text-slate-300">
                Institutional-Grade Document Enclave
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs font-mono text-cyan-300">v3.4 Release</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.12]"
            >
              Upload any document.{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Understand it in seconds.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Bank-grade AES-256 encryption. Completely private per-user tenant storage. Instantly transform complex 50-page contracts, financial filings, and medical reports into verified, plain-English executive summaries and risk audits.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="/dashboard"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Upload a Document</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:text-white"
              >
                <span>See How It Works</span>
              </a>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-300">AES-256 Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-medium text-slate-300">Private Per User</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="font-medium text-slate-300">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Server className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-300">99.9% Uptime</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Tilted Mock Product Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotateY: 10, rotateX: 6 }}
              animate={{ opacity: 1, scale: 1, rotateY: -3, rotateX: 2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              style={{ perspective: 1000 }}
              className="w-full max-w-lg rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-cyan-400/40 shadow-2xl shadow-indigo-950/60 transition-transform duration-500"
            >
              <div className="w-full bg-[#0E152C]/95 backdrop-blur-2xl rounded-[15px] p-6 border border-white/10 space-y-5">
                {/* Simulated Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                    <Lock className="w-3 h-3" />
                    <span>ENCRYPTED_VAULT_ACTIVE</span>
                  </div>
                </div>

                {/* File Header */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">MSA_Apex_Holdings_2026.pdf</h4>
                      <p className="text-[11px] text-slate-400 font-mono">3.4 MB · 42 pages · PDF</p>
                    </div>
                  </div>

                  {simStep === 'uploading' && (
                    <span className="text-[11px] font-mono font-semibold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
                      Uploading {simProgress}%
                    </span>
                  )}
                  {simStep === 'processing' && (
                    <span className="text-[11px] font-mono font-semibold text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded flex items-center gap-1 animate-pulse">
                      <Zap className="w-3 h-3" />
                      Analyzing Clauses...
                    </span>
                  )}
                  {simStep === 'ready' && (
                    <span className="text-[11px] font-mono font-semibold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Ready
                    </span>
                  )}
                </div>

                {/* Progress bar during upload */}
                {simStep === 'uploading' && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>Chunked AES Stream</span>
                      <span>{simProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-300"
                        style={{ width: `${simProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Shimmer skeleton during processing */}
                {simStep === 'processing' && (
                  <div className="space-y-2.5 py-2">
                    <div className="h-3 w-3/4 rounded bg-slate-800 animate-shimmer" />
                    <div className="h-3 w-full rounded bg-slate-800 animate-shimmer" />
                    <div className="h-3 w-5/6 rounded bg-slate-800 animate-shimmer" />
                  </div>
                )}

                {/* Live Synthesized Summary */}
                {simStep === 'ready' && (
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-display">
                        <Sparkles className="w-3.5 h-3.5" />
                        Executive Brief
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">3 min read</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-200 leading-relaxed font-sans min-h-[72px]">
                      {typedText}
                      <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />
                    </div>

                    {/* Detected Risk Flag */}
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-amber-300 block">Critical Risk Flag:</span>
                        <span className="text-slate-300 text-[11px]">
                          Section 14.2 lacks mutual liability limitation. Recommended cap: $2.5M.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>SHA-256: 7f83...bc91</span>
                  <span>ISOLATED TENANT #4492</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Stats Counters Row */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-display tabular-nums">
              2.4M+
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Documents securely summarized</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-display tabular-nums flex items-center justify-center gap-1">
              <Users className="w-6 h-6 text-purple-400 inline" />
              18,400+
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Legal, finance & clinical teams</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400 font-display tabular-nums flex items-center justify-center gap-1">
              <Star className="w-6 h-6 text-cyan-300 fill-cyan-300 inline" />
              4.9 / 5.0
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Verified customer satisfaction rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
