# Vaultly - Secure Document Review & AI Summaries

Vaultly is a legal-tech & fintech grade document intelligence platform that allows users to securely upload sensitive documents (PDF, DOCX, images) and receive plain-English AI summaries, risk audits, and key action points with isolated per-user storage.

## Features
- **Bank-Grade Isolation**: Client-side cryptographic isolation and per-user segregated document store.
- **Plain-English AI Summaries**: Intelligent chunking, clause risk audits, executive synthesis, and key action extraction.
- **Drag-and-Drop Ingestion**: Multi-file drag-and-drop supporting PDF, DOCX, PNG, JPG up to 50MB with real-time simulated chunk progress and status tracking.
- **Interactive Slide-Over Inspector**: Full drawer view with risk indicators, compliance notes, and copy/export capabilities.
- **Cart & Add-ons Store**: Add-on store with real-time cart drawer, persisted state, item counts, and full checkout flow.
- **Simulated 403 Access Denied Demo**: Interactive tenant security test verifying cross-account access prevention.
- **Glassmorphism Midnight UI**: Deep midnight navy `#0B1020` base, signature electric indigo to cyan gradients, and typography using Sora and Manrope.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Deploying to Vercel

Vaultly is pre-configured for seamless zero-config deployment to Vercel:
1. Push this repository to GitHub or GitLab.
2. In the Vercel Dashboard, click **New Project** and select the repository.
3. Keep default settings (`Framework: Vite`, `Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**. The included `vercel.json` ensures all client-side routes resolve cleanly without 404s.
