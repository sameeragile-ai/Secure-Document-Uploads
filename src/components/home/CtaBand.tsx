import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';

export const CtaBand: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-indigo-500/50 via-purple-500/40 to-cyan-400/50 shadow-2xl shadow-indigo-950/80">
          <div className="rounded-[23px] bg-[#0A0F1E] px-8 py-16 sm:px-16 text-center relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-medium text-slate-300">
                  Ready for your next due diligence or contract review
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                Upload your first document. Zero configuration required.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Test the client-side cryptographic partition right now. Review plain-English briefs and risk assessments with zero setup.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/dashboard"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Launch Live Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-colors"
                >
                  View Tier Pricing
                </Link>
              </div>

              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-indigo-400" />
                  Ephemeral RAM processing
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  Instant cancellation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
