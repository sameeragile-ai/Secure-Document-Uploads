import React, { useState } from 'react';
import { FileText, Shield } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackIcon?: 'file' | 'shield';
  fallbackText?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackIcon = 'shield',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950/60 via-slate-900 to-violet-950/60 border border-white/10 text-slate-400 p-4 ${className}`}
        role="img"
        aria-label={alt || 'Image placeholder'}
      >
        {fallbackIcon === 'shield' ? (
          <Shield className="w-8 h-8 text-indigo-400/80 mb-1" />
        ) : (
          <FileText className="w-8 h-8 text-cyan-400/80 mb-1" />
        )}
        <span className="text-xs font-medium text-slate-300 text-center truncate max-w-full">
          {fallbackText || alt || 'Vaultly Asset'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Vaultly asset'}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
