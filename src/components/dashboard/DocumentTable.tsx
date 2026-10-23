import React, { useState } from 'react';
import {
  FileText,
  FileCheck,
  Search,
  Sparkles,
  Download,
  Trash2,
  Clock,
  Shield,
  AlertTriangle,
  Zap,
} from 'lucide-react';
import { StoredDocument } from '../../types';
import { useAuth } from '../../context/AuthContext';

export const DocumentTable: React.FC = () => {
  const { documents, deleteDocument, setSelectedDocForSummary } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (categoryFilter === 'All') return true;
    if (categoryFilter === 'Ready') return doc.status === 'ready';
    if (categoryFilter === 'Processing') return doc.status === 'processing' || doc.status === 'uploading';
    if (categoryFilter === 'Contracts') return doc.summary?.documentCategory === 'Contract';
    if (categoryFilter === 'Invoices') return doc.summary?.documentCategory === 'Invoice';
    if (categoryFilter === 'Reports') return doc.summary?.documentCategory === 'Report';
    return true;
  });

  const handleDownloadMock = (doc: StoredDocument) => {
    const dummyBlob = new Blob([`Vaultly Encrypted Document Archive: ${doc.name}`], {
      type: 'text/plain',
    });
    const url = URL.createObjectURL(dummyBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = doc.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {['All', 'Ready', 'Processing', 'Contracts', 'Invoices', 'Reports'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                categoryFilter === cat
                  ? 'bg-indigo-500/20 text-cyan-300 border border-indigo-500/40 font-semibold'
                  : 'bg-white/[0.02] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-[#0D1429] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Main Table / Card List */}
      <div className="rounded-2xl bg-[#0D1429] border border-white/10 overflow-hidden shadow-xl">
        {filteredDocs.length === 0 ? (
          <div className="py-16 px-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto text-slate-500 mb-3">
              <FileText className="w-7 h-7" />
            </div>
            <h4 className="text-sm font-semibold text-white font-display mb-1">No documents in this view</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
              {searchQuery
                ? `No documents match "${searchQuery}". Clear your search or filter.`
                : 'Upload your first confidential contract, invoice, or legal report to see the AI brief.'}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table View (Hidden on mobile) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400 font-mono uppercase text-[11px]">
                    <th className="py-3 px-5">Document Name</th>
                    <th className="py-3 px-4">Size</th>
                    <th className="py-3 px-4">Uploaded</th>
                    <th className="py-3 px-4">Enclave Status</th>
                    <th className="py-3 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredDocs.map(doc => (
                    <tr
                      key={doc.id}
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      {/* Name & Type */}
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                            {doc.name.endsWith('.pdf') ? (
                              <FileText className="w-4 h-4 text-rose-400" />
                            ) : doc.name.endsWith('.docx') ? (
                              <FileText className="w-4 h-4 text-blue-400" />
                            ) : (
                              <FileCheck className="w-4 h-4 text-emerald-400" />
                            )}
                          </div>
                          <div className="min-w-0 max-w-xs sm:max-w-sm">
                            <span
                              onClick={() => doc.status === 'ready' && setSelectedDocForSummary(doc)}
                              className={`font-medium text-white truncate block ${
                                doc.status === 'ready'
                                  ? 'hover:text-cyan-300 cursor-pointer underline-offset-2 hover:underline'
                                  : ''
                              }`}
                            >
                              {doc.name}
                            </span>
                            {doc.summary && (
                              <span className="text-[11px] text-slate-400 truncate block">
                                {doc.summary.documentCategory} · {doc.summary.readingTimeMinutes}m read · {doc.summary.sentiment}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Size */}
                      <td className="py-4 px-4 font-mono text-slate-300 tabular-nums">
                        {formatFileSize(doc.sizeBytes)}
                      </td>

                      {/* Upload Date */}
                      <td className="py-4 px-4 text-slate-400">
                        {doc.uploadedAt}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        {doc.status === 'uploading' && (
                          <div className="space-y-1 max-w-[130px]">
                            <div className="flex justify-between text-[10px] font-mono text-cyan-300">
                              <span>Uploading</span>
                              <span>{doc.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                style={{ width: `${doc.progress}%` }}
                              />
                            </div>
                          </div>
                        )}

                        {doc.status === 'processing' && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-mono animate-pulse">
                            <Zap className="w-3 h-3 text-purple-400" />
                            Analyzing...
                          </span>
                        )}

                        {doc.status === 'ready' && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px] font-mono font-medium">
                            <Shield className="w-3 h-3 text-emerald-400" />
                            Ready
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {doc.status === 'ready' && (
                            <button
                              onClick={() => setSelectedDocForSummary(doc)}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-sm shadow-indigo-500/20 flex items-center gap-1.5 transition-all"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>View Brief</span>
                            </button>
                          )}

                          <button
                            onClick={() => handleDownloadMock(doc)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                            title="Download document"
                            aria-label={`Download ${doc.name}`}
                          >
                            <Download className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => deleteDocument(doc.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Delete document"
                            aria-label={`Delete ${doc.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-white/5 p-2">
              {filteredDocs.map(doc => (
                <div key={doc.id} className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <FileText className="w-4 h-4 text-cyan-300" />
                      </div>
                      <div className="min-w-0">
                        <h4
                          onClick={() => doc.status === 'ready' && setSelectedDocForSummary(doc)}
                          className={`text-xs font-semibold text-white truncate max-w-[200px] ${
                            doc.status === 'ready' ? 'cursor-pointer hover:text-cyan-300' : ''
                          }`}
                        >
                          {doc.name}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-400">
                          {formatFileSize(doc.sizeBytes)} · {doc.uploadedAt}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteDocument(doc.id)}
                      className="text-slate-500 hover:text-rose-400 p-1"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Status row on mobile */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      {doc.status === 'uploading' && (
                        <span className="text-[11px] font-mono text-cyan-300">
                          Uploading {doc.progress}%
                        </span>
                      )}
                      {doc.status === 'processing' && (
                        <span className="text-[11px] font-mono text-purple-300 animate-pulse">
                          Analyzing...
                        </span>
                      )}
                      {doc.status === 'ready' && (
                        <span className="text-[11px] font-mono text-emerald-300">Ready</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDownloadMock(doc)}
                        className="p-1.5 text-slate-400 hover:text-white"
                        aria-label="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>

                      {doc.status === 'ready' && (
                        <button
                          onClick={() => setSelectedDocForSummary(doc)}
                          className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-lg flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>View</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
