import React, { useRef, useState } from 'react';
import { UploadCloud, AlertCircle, FileText, Check, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50MB
const ALLOWED_EXTENSIONS = ['.pdf', '.docx', '.png', '.jpg', '.jpeg'];
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'image/png',
  'image/jpeg',
];

export const UploadZone: React.FC = () => {
  const { addDocument } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploadSuccessCount, setUploadSuccessCount] = useState<number>(0);

  const validateAndUpload = (files: FileList | File[]) => {
    setErrorMessage(null);
    let successCount = 0;

    Array.from(files).forEach(file => {
      // Validate file size
      if (file.size > MAX_FILE_SIZE_BYTES) {
        setErrorMessage(`"${file.name}" exceeds the 50MB limit (${(file.size / (1024 * 1024)).toFixed(1)}MB).`);
        return;
      }

      // Validate file extension/type
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();
      const isValidExt = ALLOWED_EXTENSIONS.includes(ext);
      const isValidMime = ALLOWED_MIME_TYPES.includes(file.type);

      if (!isValidExt && !isValidMime) {
        setErrorMessage(`"${file.name}" has an unsupported format. Please upload PDF, DOCX, PNG, or JPG.`);
        return;
      }

      addDocument(file);
      successCount++;
    });

    if (successCount > 0) {
      setUploadSuccessCount(prev => prev + successCount);
      setTimeout(() => setUploadSuccessCount(0), 4000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndUpload(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndUpload(e.target.files);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 border-2 border-dashed ${
          isDragging
            ? 'border-cyan-400 bg-cyan-950/20 scale-[1.01] shadow-2xl shadow-cyan-500/20'
            : 'border-white/10 hover:border-indigo-500/40 bg-white/[0.02] hover:bg-white/[0.04]'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.docx,.png,.jpg,.jpeg"
          onChange={handleFileInputChange}
          className="hidden"
        />

        <div className="max-w-md mx-auto space-y-4 pointer-events-none">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center mx-auto text-cyan-400">
            <UploadCloud className="w-8 h-8 animate-pulse" />
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              {isDragging ? 'Release to encrypt and upload' : 'Drag & drop confidential documents here'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              or <span className="text-cyan-400 font-semibold underline underline-offset-4">browse files</span> from your secure workstation
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">PDF</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">DOCX</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">PNG / JPG</span>
            <span className="text-slate-500">·</span>
            <span>Max 50MB per document</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Files are sealed client-side before transmission</span>
          </div>
        </div>
      </div>

      {/* Error Message banner */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-xs text-rose-300">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span className="flex-1 font-medium">{errorMessage}</span>
          <button
            onClick={() => setErrorMessage(null)}
            className="text-rose-400 hover:text-rose-200 font-bold px-1"
          >
            &times;
          </button>
        </div>
      )}

      {/* Success notification */}
      {uploadSuccessCount > 0 && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-300">
          <Check className="w-4 h-4 shrink-0 text-emerald-400" />
          <span>
            {uploadSuccessCount} document{uploadSuccessCount > 1 ? 's' : ''} added to secure enclave pipeline.
          </span>
        </div>
      )}
    </div>
  );
};
