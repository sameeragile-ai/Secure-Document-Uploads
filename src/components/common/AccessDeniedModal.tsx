import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X, Lock, KeyRound, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AccessDeniedModal: React.FC = () => {
  const { show403Modal, setShow403Modal, user } = useAuth();

  return (
    <AnimatePresence>
      {show403Modal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow403Modal(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            className="relative z-10 w-full max-w-lg bg-[#0F1426] border border-rose-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
          >
            {/* Ambient warning glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                  <ShieldAlert className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                      HTTP 403 FORBIDDEN
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">ENCLAVE_ISOLATION_VIOLATION</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mt-1">
                    Cryptographic Tenant Boundary Enforced
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setShow403Modal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                You attempted to inspect or decrypt a document belonging to a foreign tenant partition (
                <code className="text-cyan-300 bg-black/40 px-1.5 py-0.5 rounded font-mono text-xs">
                  tenant_vanguard_legal#doc-90412
                </code>
                ).
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Target Resource:</span>
                  <span className="text-rose-300">/vault/encrypted_blobs/vanguard-nda.pdf</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Requesting Identity:</span>
                  <span className="text-cyan-300 truncate max-w-[200px]">
                    {user?.email || 'unauthenticated_guest'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Cryptographic Key ID:</span>
                  <span className="text-slate-300">KEY-AES256-GCM-PARTITION-09</span>
                </div>
                <div className="flex items-center justify-between text-rose-400 pt-2 border-t border-white/5 font-semibold">
                  <span>Signature Attestation:</span>
                  <span>REJECTED (Key Ring Mismatch)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-500/[0.08] border border-indigo-500/20 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Why this happens in Vaultly:</span>
                </div>
                <p className="text-slate-300 text-[12px] leading-relaxed">
                  Unlike conventional cloud databases where a shared query could inadvertently leak cross-account rows, Vaultly encrypts each user’s payload with a unique envelope key held exclusively in their personal enclave. Even our database administrators cannot decrypt or read your files.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShow403Modal(false)}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
              >
                Return to My Private Vault
              </button>
              <button
                onClick={() => setShow403Modal(false)}
                className="py-2.5 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors flex items-center justify-center gap-1.5"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Verify Audit Logs</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
