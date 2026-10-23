import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../../data/mockData';

export const PricingPreview: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-mono tracking-widest uppercase text-cyan-400">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Predictable plans. Zero hidden document overages.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            All plans include private tenant partitioning, AES-256 envelope encryption, and our zero-training AI guarantee.
          </p>

          {/* Billing Switch */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-slate-800 p-1 relative border border-white/10 transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map(plan => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-[#121B38] border-2 border-indigo-500/50 shadow-2xl shadow-indigo-950/60 -translate-y-2'
                    : 'bg-[#0E152B]/80 border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white font-display">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[36px]">{plan.tagline}</p>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white font-display tabular-nums">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">/month</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 block mt-1">
                      {plan.quotaDescription}
                    </span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                    {plan.features.slice(0, 5).map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/pricing"
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-center transition-all ${
                    plan.popular
                      ? 'text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-md shadow-indigo-500/30'
                      : 'text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Explore all features, SLA tiers, and modular add-ons</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
