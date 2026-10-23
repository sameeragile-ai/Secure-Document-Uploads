import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';

export const InitialLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1400;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1020] px-4"
          >
            {/* Ambient background glow */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-400/20 blur-3xl pointer-events-none animate-pulse" />

            <div className="relative z-10 flex flex-col items-center max-w-xs w-full">
              {/* Animated Logo Mark */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative mb-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 p-[2px] shadow-2xl shadow-indigo-500/30">
                  <div className="w-full h-full bg-[#0B1020] rounded-[14px] flex items-center justify-center">
                    <Shield className="w-9 h-9 text-cyan-400 stroke-[1.8]" />
                    <Sparkles className="w-4 h-4 text-purple-300 absolute -top-1 -right-1 animate-bounce" />
                  </div>
                </div>
              </motion.div>

              {/* Brand Wordmark */}
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl font-bold tracking-tight text-white mb-2 font-display"
              >
                Vaultly
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xs text-slate-400 mb-8 font-medium text-center"
              >
                Initializing Zero-Knowledge Document Enclave
              </motion.p>

              {/* Progress Line */}
              <div className="w-full bg-slate-800/80 rounded-full h-1 overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              <div className="flex justify-between w-full mt-2 text-[11px] font-mono tabular-nums text-slate-400">
                <span>ENCRYPT_CHANNEL</span>
                <span>{progress}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
};
