import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  ShoppingBag,
  Sparkles,
  Zap,
  ArrowRight,
  Shield,
  HelpCircle,
  CheckCircle,
} from 'lucide-react';
import { ADD_ON_PRODUCTS, PRICING_PLANS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { SafeImage } from '../components/common/SafeImage';
import { AddOnProduct } from '../types';

export const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { addToCart, setIsCartOpen } = useCart();
  const [addedAddonIds, setAddedAddonIds] = useState<Record<string, boolean>>({});

  const handleAddAddon = (addon: AddOnProduct) => {
    addToCart({
      id: addon.id,
      title: addon.title,
      price: addon.price,
      category: addon.category,
      description: addon.description,
      imageUrl: addon.imageUrl,
    });

    setAddedAddonIds(prev => ({ ...prev, [addon.id]: true }));
    setTimeout(() => {
      setAddedAddonIds(prev => ({ ...prev, [addon.id]: false }));
    }, 2000);
  };

  const handleSelectPlan = (planName: string, price: number) => {
    addToCart({
      id: `plan-${planName.toLowerCase()}`,
      title: `${planName} Plan (${isAnnual ? 'Annual' : 'Monthly'})`,
      price: price,
      category: 'subscription',
      description: `Vaultly ${planName} subscription tier billed ${isAnnual ? 'annually' : 'monthly'}.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-cyan-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Scalable Tiers</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Simple pricing for individuals and multinational legal teams
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Never pay per-token or worry about opaque compute overages. Choose the right tier for your organization or augment your workspace with modular add-ons.
        </p>

        {/* Toggle billing */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-slate-800 p-1 relative border border-white/10 transition-colors focus:outline-none"
            aria-label="Toggle annual billing discount"
          >
            <div
              className={`w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-semibold flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Annual Billing
            <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-500/30">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Main Pricing Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
        {PRICING_PLANS.map(plan => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
          return (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#121B38] border-2 border-indigo-500/60 shadow-2xl shadow-indigo-950/70 -translate-y-2'
                  : 'bg-[#0E152B]/80 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular for Firms
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
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelectPlan(plan.name, price)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-md shadow-indigo-500/30'
                    : 'text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{plan.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Add-ons Store Section */}
      <section className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-cyan-400">
              Workspace Extensions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight mt-1">
              Modular Power Add-Ons
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Add specialized capabilities to any plan. Billed per workspace with zero long-term commitment.
            </p>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="self-start sm:self-center px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 text-xs text-cyan-300 font-semibold flex items-center gap-2 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Open Cart Drawer</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADD_ON_PRODUCTS.map(addon => {
            const isAdded = !!addedAddonIds[addon.id];
            return (
              <div
                key={addon.id}
                className="rounded-2xl bg-[#0D1429] border border-white/10 hover:border-indigo-500/30 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/40"
              >
                <div>
                  {/* Image with fallback */}
                  <div className="h-44 w-full relative overflow-hidden bg-slate-900 border-b border-white/10">
                    <SafeImage
                      src={addon.imageUrl}
                      alt={addon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1429] via-transparent to-transparent" />
                    {addon.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
                        {addon.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-white font-display group-hover:text-cyan-200 transition-colors">
                        {addon.title}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-lg font-bold font-mono text-cyan-400 tabular-nums">
                          ${addon.price}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 block">
                          {addon.billingUnit}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {addon.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {addon.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleAddAddon(addon)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                        : 'text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-md shadow-indigo-500/25 active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart (${addon.price})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enterprise Consultation Band */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 justify-center md:justify-start">
            <Shield className="w-4 h-4" />
            <span>CUSTOM SOVEREIGN DEPLOYMENTS</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Need on-premise VPC hosting or Bring-Your-Own-Key (BYOK)?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            We collaborate with enterprise legal, healthcare, and state banking systems to deploy dedicated air-gapped enclaves with custom BAAs.
          </p>
        </div>

        <button
          onClick={() => {
            alert('Enterprise consultation request noted! An enterprise security engineer will reach out within 2 hours.');
          }}
          className="px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 whitespace-nowrap transition-colors"
        >
          Request Enterprise Consultation
        </button>
      </div>
    </motion.div>
  );
};
