import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowLeft, Home, Lock } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-36 pb-24 px-4 flex flex-col items-center justify-center text-center max-w-lg mx-auto space-y-6"
    >
      <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 shadow-xl shadow-indigo-500/10">
        <ShieldAlert className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          ERROR 404: RESOURCE_UNAVAILABLE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-2">
          Document Path Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          The requested partition, route, or document hash does not exist in this cryptographic vault or was moved to another encrypted enclave.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
        <Link
          to="/"
          className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <Link
          to="/dashboard"
          className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-colors"
        >
          <Lock className="w-4 h-4 text-cyan-400" />
          <span>Open Dashboard Vault</span>
        </Link>
      </div>
    </motion.div>
  );
};
