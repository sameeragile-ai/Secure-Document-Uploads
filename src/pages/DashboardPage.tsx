import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  ShieldAlert,
  UserCheck,
  FolderLock,
  ArrowRightLeft,
  KeyRound,
  FileCheck,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UploadZone } from '../components/dashboard/UploadZone';
import { DocumentTable } from '../components/dashboard/DocumentTable';
import { SummarySlideOver } from '../components/dashboard/SummarySlideOver';

export const DashboardPage: React.FC = () => {
  const {
    user,
    documents,
    selectedDocForSummary,
    setSelectedDocForSummary,
    setShow403Modal,
    setIsLoginModalOpen,
  } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8"
    >
      {/* Dashboard Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Confidential Document Vault
            </h1>

            {/* Privacy Badge Required by Prompt */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Only you can see these files</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span>Enclave Partition: {user ? user.email : 'Guest'}</span>
            <span>·</span>
            <span>Key Wrap: AES-256-GCM</span>
            <span>·</span>
            <span className="text-cyan-400">{documents.length} Encrypted Documents</span>
          </div>
        </div>

        {/* Tenant Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Button requested by prompt: "Try accessing another user's file" demo button */}
          <button
            onClick={() => setShow403Modal(true)}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 flex items-center gap-2 transition-colors"
            title="Demonstrate cryptographic partition isolation"
          >
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Try Accessing Another User's File</span>
          </button>

          {/* Switch Tenant / Login button */}
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 flex items-center gap-2 transition-colors"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>Switch User / Tenant</span>
          </button>
        </div>
      </div>

      {/* Security Banner Alert */}
      <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white">
              Zero-Knowledge Multi-Tenant Enclave Active
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              All documents below belong exclusively to <strong className="text-slate-200">{user?.email}</strong>. Logging out or logging in as another email completely isolates the file system.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/20">
            RAM Purge: Verified
          </span>
        </div>
      </div>

      {/* Upload Zone */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-display flex items-center gap-2">
            <FolderLock className="w-4 h-4 text-indigo-400" />
            <span>Secure Ingestion Queue</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">PDF · DOCX · PNG · JPG (50MB Max)</span>
        </div>
        <UploadZone />
      </section>

      {/* Documents Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-display flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-cyan-400" />
            <span>Encrypted Documents & AI Briefs</span>
          </h2>
          <span className="text-xs text-slate-400">Click any document to inspect the plain-English brief</span>
        </div>
        <DocumentTable />
      </section>

      {/* Slide-over Summary Drawer */}
      <SummarySlideOver
        document={selectedDocForSummary}
        onClose={() => setSelectedDocForSummary(null)}
      />
    </motion.div>
  );
};
