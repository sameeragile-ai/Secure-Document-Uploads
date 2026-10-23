import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070B16] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[6px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">Vaultly</span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Institutional-grade document review with instant AI summaries. Engineered with zero-knowledge cryptographic tenant isolation and verified compliance for legal, healthcare, and finance.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 font-mono">
                <Lock className="w-3 h-3 text-cyan-400" />
                AES-256-GCM
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 font-mono">
                <FileCheck className="w-3 h-3 text-indigo-400" />
                SOC 2 Type II
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 font-mono">
                HIPAA / GDPR Ready
              </span>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">Product</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/#features" className="hover:text-cyan-300 transition-colors">
                  Document Intelligence
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="hover:text-cyan-300 transition-colors">
                  Risk Clause Auditing
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cyan-300 transition-colors">
                  Pricing & Add-ons
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-cyan-300 transition-colors">
                  Live Dashboard Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Security & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">Security</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  Cryptographic Enclave Architecture
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  Zero-Model-Retention Policy
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  Penetration Testing Attestations
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  Subprocessor Registry
                </span>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">Governance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  Data Processing Agreement (DPA)
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  System Status: 99.98% Uptime
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Vaultly Technologies Inc. All rights reserved. Built for enterprise security.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer">
              <span>Security Whitepaper</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer">
              <span>API Reference</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
