import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Mail, Shield, UserCheck, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email, name || undefined);
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleQuickSwitch = (quickEmail: string, quickName: string, quickOrg: string) => {
    login(quickEmail, quickName, quickOrg);
  };

  return (
    <AnimatePresence>
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLoginModalOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-md bg-[#0E152B] border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden"
          >
            {/* Top close */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white font-display">Workspace Access</h3>
                  <p className="text-xs text-slate-400">Tenant cryptographic partition</p>
                </div>
              </div>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {user && (
              <div className="mb-5 p-3.5 rounded-xl bg-white/[0.03] border border-cyan-500/20 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Active Tenant Enclave</span>
                  </div>
                  <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                  <p className="text-xs text-slate-400 truncate">{user.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-colors"
                >
                  Log Out
                </button>
              </div>
            )}

            {/* Quick-switch persona buttons for demo client */}
            <div className="mb-5">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2 font-mono">
                Quick Demo Accounts (Test Isolated Storage)
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    handleQuickSwitch('demo@vaultly.io', 'Alex Morgan', 'Apex Legal & Partners')
                  }
                  className="w-full text-left p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/[0.06] transition-all flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-cyan-300">
                      Alex Morgan (Managing Counsel)
                    </p>
                    <p className="text-[11px] text-slate-400">demo@vaultly.io · Pre-seeded legal docs</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleQuickSwitch('sarah.chen@biotech.io', 'Dr. Sarah Chen', 'BioVera Health Technologies')
                  }
                  className="w-full text-left p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/[0.06] transition-all flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-purple-300">
                      Dr. Sarah Chen (Chief Compliance)
                    </p>
                    <p className="text-[11px] text-slate-400">sarah.chen@biotech.io · Private partition</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </button>
              </div>
            </div>

            {/* Custom sign-in form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-3 border-t border-white/5">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 font-mono">
                Or Sign In with Any Custom Email
              </label>

              <div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="Enter work email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    placeholder="Password (any value)"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all"
              >
                Sign In to Private Enclave
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
