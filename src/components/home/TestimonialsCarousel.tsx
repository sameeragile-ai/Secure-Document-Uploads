import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';
import { SafeImage } from '../common/SafeImage';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(prevIdx => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex(prevIdx => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-black/20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-cyan-400">
            Client Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Trusted by the counsel defending high-stakes transactions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-[#0F162D] border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[340px] flex flex-col justify-between">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                {current.documentVolume}
              </div>
            </div>

            <div className="py-6 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed italic">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30 shrink-0">
                  <SafeImage
                    src={current.avatarUrl}
                    alt={current.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-display">{current.author}</h4>
                  <p className="text-xs text-slate-400">
                    {current.role} · <span className="text-slate-300">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-500 px-2 tabular-nums">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
