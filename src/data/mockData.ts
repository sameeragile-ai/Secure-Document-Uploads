import { AddOnProduct, DocumentSummary, FaqItem, PricingPlan, StoredDocument, Testimonial } from '../types';

export const MOCK_COMPANIES = [
  { name: 'Meridian Capital', tag: 'FINTECH & ASSETS' },
  { name: 'Vanguard Legal LLC', tag: 'CORPORATE COUNSEL' },
  { name: 'Novus Health Partners', tag: 'CLINICAL RESEARCH' },
  { name: 'Kinetic Cloud Scale', tag: 'INFRASTRUCTURE' },
  { name: 'Aegis BioTech Corp', tag: 'LIFE SCIENCES' },
  { name: 'Beacon Private Equity', tag: 'VENTURE M&A' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for solo practitioners and independent consultants.',
    monthlyPrice: 0,
    annualPrice: 0,
    quotaDescription: 'Up to 25 documents / month',
    features: [
      '25 documents processed/mo',
      'Up to 15MB file upload size',
      'Standard AI summarization (120s queue)',
      'Plain-text & Markdown export',
      'AES-256 client-side encryption',
      'Single user workspace',
    ],
    ctaLabel: 'Start Free Forever',
  },
  {
    id: 'pro',
    name: 'Professional',
    tagline: 'For fast-moving attorneys, analysts, and founders.',
    monthlyPrice: 29,
    annualPrice: 24,
    popular: true,
    quotaDescription: 'Up to 300 documents / month',
    features: [
      '300 documents processed/mo',
      'Up to 50MB file size limit',
      'Sub-5s accelerated AI summaries',
      'Clause-level legal risk auditing',
      'Structured JSON & CSV data extraction',
      'Isolated private vault with zero-retention',
      'Priority email & ticket support',
    ],
    ctaLabel: 'Start 14-Day Free Trial',
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For boutique law firms, financial teams, and scaling orgs.',
    monthlyPrice: 99,
    annualPrice: 79,
    quotaDescription: 'Up to 1,500 documents / month',
    features: [
      '1,500 documents processed/mo',
      'Up to 100MB file size per document',
      '5 included collaborative team seats',
      'Redline & contract conflict detection',
      'Custom confidentiality & retention rules',
      'Audit log trail with tamper-proof timestamps',
      'SOC 2 Type II compliance reports',
      'Dedicated Customer Success Manager',
    ],
    ctaLabel: 'Upgrade to Business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For global corporate legal, healthcare, and banking institutions.',
    monthlyPrice: 299,
    annualPrice: 239,
    quotaDescription: 'Unlimited documents & custom SLAs',
    features: [
      'Unlimited documents & custom rate limits',
      'Bring Your Own Key (BYOK) encryption',
      'On-premise or sovereign VPC hosting options',
      'Custom fine-tuned legal/financial extractors',
      'SSO / SAML / Okta / Azure AD integration',
      '24/7/365 dedicated engineer hotline',
      'Custom BAA & GDPR enterprise agreements',
    ],
    ctaLabel: 'Contact Enterprise Sales',
  },
];

export const ADD_ON_PRODUCTS: AddOnProduct[] = [
  {
    id: 'addon-storage-100gb',
    title: 'Extra 100GB Secure Storage',
    category: 'storage',
    price: 9,
    billingUnit: 'per month',
    description: 'Triple-replicated encrypted storage volume across independent availability zones with instant warm retrieval.',
    badge: 'Popular',
    features: ['AES-256 hardware encryption', 'Zero-knowledge access partition', 'Instant indexing & full-text search'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'addon-priority-gpu',
    title: 'Priority Accelerated Processing',
    category: 'processing',
    price: 15,
    billingUnit: 'per month',
    description: 'Bypass shared queues with dedicated inference cluster nodes. Summaries return in under 3 seconds.',
    badge: 'High Speed',
    features: ['Dedicated enterprise queue', 'Parallel multi-document parsing', '99.99% throughput SLA'],
    imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'addon-human-review',
    title: 'Certified Legal Expert Review',
    category: 'expert',
    price: 49,
    billingUnit: 'per doc',
    description: 'A licensed attorney or chartered financial analyst verifies the AI brief, validating all liabilities and edge clauses.',
    badge: 'Human-in-the-Loop',
    features: ['Bar-certified legal check', '24-hour turnaround', 'Signed verification audit stamp'],
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'addon-team-seats',
    title: 'Team Seats (5-Seat Pack)',
    category: 'team',
    price: 25,
    billingUnit: 'per month',
    description: 'Add 5 additional team members with granular workspace permissions, shared vaults, and activity attribution.',
    badge: 'Collaboration',
    features: ['Role-based access control (RBAC)', 'Shared tag libraries', 'Individual audit logging'],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'addon-api-access',
    title: 'Developer REST API & Webhooks',
    category: 'api',
    price: 39,
    billingUnit: 'per month',
    description: 'Programmatically submit PDFs, receive webhook callbacks upon synthesis, and sync with your internal ERP/CRM.',
    badge: 'Automation',
    features: ['10,000 monthly API calls', 'Webhook event streaming', 'SDKs in TypeScript, Python, Go'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Elena Rostova',
    role: 'Senior Managing Partner',
    company: 'Apex Legal & M&A Partners',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'Vaultly reduced our 40-page indemnification reviews from 3 hours to 4 minutes. The risk clause auditing spotted an uncapped consequential damages liability that saved our client $1.4M in closing negotiations.',
    rating: 5,
    documentVolume: '4,200+ contracts processed',
  },
  {
    id: 't2',
    author: 'Marcus Vance',
    role: 'VP of Financial Operations',
    company: 'Cobalt Horizon Asset Management',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    quote: 'Our auditors demanded strict per-user cryptographic isolation. Vaultly is the only platform that passed our SOC 2 and fintech zero-knowledge verification while delivering genuinely human-grade executive briefs.',
    rating: 5,
    documentVolume: '18,000+ financial filings',
  },
  {
    id: 't3',
    author: 'Sarah Chen, M.D.',
    role: 'Chief Compliance Officer',
    company: 'BioVera Health Technologies',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    quote: 'We ingest clinical research agreements and cross-border vendor disclosures every morning. The plain-English summaries strip out legal fluff and highlight actual obligations instantly. It is utterly indispensable.',
    rating: 5,
    documentVolume: '9,500+ regulatory filings',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Security',
    question: 'How does Vaultly guarantee that other users cannot see my documents?',
    answer: 'Vaultly enforces cryptographic tenant isolation. Every document payload is partitioned using an isolated AES-256 envelope key tied specifically to your authenticated user identifier. Even within our storage layer, files cannot be decrypted or indexed across customer boundaries.',
  },
  {
    category: 'AI Technology',
    question: 'Does Vaultly train public AI models on our proprietary documents?',
    answer: 'Never. Vaultly maintains a zero-retention and zero-training guarantee. Your data is streamed ephemerally through private dedicated inference endpoints and purged immediately following structured synthesis. We sign formal Non-Training Data Agreements (NTDAs).',
  },
  {
    category: 'Formats',
    question: 'What document formats and file sizes are supported?',
    answer: 'We support PDF (both native digital text and scanned OCR), Microsoft Word (.docx), and high-resolution images (PNG, JPG, TIFF). Files up to 50MB are supported on Pro plans, and up to 100MB on Enterprise.',
  },
  {
    category: 'AI Technology',
    question: 'How accurate are the plain-English summaries and risk clause detections?',
    answer: 'Vaultly is engineered specifically for legal-tech, compliance, and institutional finance. Each synthesis extracts quantitative terms (dates, fee structures, liability limits, governing jurisdiction) with 99.4% verifiable precision and cites exact paragraph references.',
  },
  {
    category: 'Pricing',
    question: 'Can I cancel or upgrade my plan at any time?',
    answer: 'Yes. You can switch tiers or cancel month-to-month subscriptions at any moment with a single click. Unused document processing quotas roll over for 60 days on all paid plans.',
  },
  {
    category: 'Security',
    question: 'Are you compliant with SOC 2, HIPAA, and GDPR regulations?',
    answer: 'Yes. Vaultly operates in SOC 2 Type II compliant environments with automated audit logs, TLS 1.3 in-transit encryption, and strict European GDPR compliance. Enterprise customers can execute custom Business Associate Agreements (BAAs).',
  },
];

// Rich AI Summary generator based on filename heuristics
export function generateRealisticSummary(fileName: string, fileSize: number): DocumentSummary {
  const lower = fileName.toLowerCase();

  if (lower.includes('contract') || lower.includes('agreement') || lower.includes('nda') || lower.includes('terms') || lower.includes('msa')) {
    return {
      documentCategory: 'Contract',
      executiveSummary: `Comprehensive commercial agreement establishing binding commitments, service warranties, and intellectual property assignments between primary parties for a 24-month term with automatic renewal provisions.`,
      keyPoints: [
        'Term & Renewal: 24-month initial period with mandatory 60-day written cancellation notice.',
        'Payment Terms: Net 30 days upon invoice receipt with 1.5% compounding late fee per month.',
        'Intellectual Property: Client retains complete ownership of pre-existing deliverables; vendor retains modular backend frameworks.',
        'Confidentiality: 5-year survival clause governing proprietary algorithms, client lists, and pricing schedules.',
      ],
      riskClauses: [
        'Clause 14.2 (Uncapped Indemnification): Third-party IP infringement indemnities are currently uncapped.',
        'Clause 19.1 (Governing Law): New York jurisdiction with mandatory binding arbitration without class-action option.',
        'Clause 8.4 (Exclusivity): Prohibits vendor from servicing direct competitors in North America for 12 months.',
      ],
      actionItems: [
        'Negotiate an aggregate liability cap equal to 12 months of paid contract fees (Clause 14.2).',
        'Insert clause granting mutual rights to terminate for convenience with 90 days advance notice.',
        'Confirm insurance certificate of $5,000,000 cyber liability prior to execution.',
      ],
      wordCount: Math.round(fileSize / 18) || 3420,
      readingTimeMinutes: Math.max(2, Math.round(fileSize / 70000)) || 11,
      sentiment: 'Caution Required',
      keyEntities: ['Apex Ventures LLC', 'Global Tech Partners Inc.', 'State of Delaware', 'AAA Commercial Arbitration'],
    };
  }

  if (lower.includes('invoice') || lower.includes('bill') || lower.includes('receipt') || lower.includes('finance') || lower.includes('budget')) {
    return {
      documentCategory: 'Invoice',
      executiveSummary: `Commercial billing statement detailing enterprise cloud infrastructure licenses, dedicated GPU clusters, and premium support retainers rendered for the preceding billing cycle.`,
      keyPoints: [
        'Total Amount Due: $14,850.00 USD with early settlement discount applied.',
        'Billing Period: October 1, 2026 – October 31, 2026.',
        'Primary Line Item: 4x H100 dedicated inference pods (840 computing hours @ $12.50/hr).',
        'Sales Tax / VAT: Standard 8.25% jurisdictional tax assessed and itemized.',
      ],
      riskClauses: [
        'Payment Due Date: Due in 14 days. Failure to remit by due date incurs a $250 administrative fee.',
        'Auto-Debit Trigger: Stored corporate card will be automatically charged on Day 15 if ACH is pending.',
      ],
      actionItems: [
        'Route to Accounts Payable for three-way PO match against Purchase Order #PO-9942.',
        'Verify hours against Kubernetes cluster telemetry logs for node utilization.',
      ],
      wordCount: Math.round(fileSize / 30) || 820,
      readingTimeMinutes: 3,
      sentiment: 'Neutral',
      keyEntities: ['Vaultly Cloud Services LLC', 'AP Reference #982-411', 'Delaware Depository Trust'],
    };
  }

  if (lower.includes('resume') || lower.includes('cv') || lower.includes('profile') || lower.includes('candidate')) {
    return {
      documentCategory: 'Resume',
      executiveSummary: `Senior Technical Architect profile with 9+ years of experience leading distributed systems, zero-knowledge cryptographic pipelines, and enterprise LLM inference infrastructure.`,
      keyPoints: [
        'Core Technical Stack: TypeScript, Go, Rust, PostgreSQL, Kubernetes, PyTorch, LangChain, AWS.',
        'Leadership Track Record: Scaled engineering team from 4 to 28 engineers while cutting deployment cycle times by 68%.',
        'Education: M.S. in Computer Science (Distributed Systems emphasis), Stanford University.',
        'Recent Impact: Spearheaded migration to envelope encryption securing $400M+ in transacted volume.',
      ],
      riskClauses: [
        'Notice Period: Currently under 60-day non-solicit agreement with existing fintech employer.',
        'Location: Remote candidate based in Pacific Time Zone (US), requests occasional travel allowance.',
      ],
      actionItems: [
        'Schedule Stage 2 Technical Architecture session focusing on database concurrency.',
        'Request references from previous VP of Engineering at CloudScale Inc.',
      ],
      wordCount: 1140,
      readingTimeMinutes: 4,
      sentiment: 'Favorable',
      keyEntities: ['Stanford University', 'CloudScale Inc.', 'Fintech Security Summit 2025 Speaker'],
    };
  }

  if (lower.includes('report') || lower.includes('audit') || lower.includes('compliance') || lower.includes('soc') || lower.includes('security')) {
    return {
      documentCategory: 'Report',
      executiveSummary: `Independent cybersecurity and compliance audit evaluating SOC 2 Type II controls, zero-trust cryptographic boundaries, and employee key management protocols with zero high-severity findings.`,
      keyPoints: [
        'Evaluation Scope: Security, Confidentiality, and System Availability trust principles.',
        'Audit Period: 12-month rolling assessment with continuous automated synthetic probing.',
        'Overall Rating: Unqualified clean opinion issued with zero material exceptions.',
        'Recovery Time Objective (RTO): Tested cold failover in 8 minutes and 14 seconds.',
      ],
      riskClauses: [
        'Low-Risk Finding: Two staging test buckets lacked automated 90-day object lifecycle deletion rules.',
        'Recommendation: Implement mandatory hardware YubiKey enforcement for secondary database maintenance accounts.',
      ],
      actionItems: [
        'Present final audit findings to Board of Directors Audit Committee by end of month.',
        'Attach clean attestation letter to customer security portal for Enterprise prospective deals.',
      ],
      wordCount: Math.round(fileSize / 22) || 4800,
      readingTimeMinutes: 14,
      sentiment: 'Favorable',
      keyEntities: ['BDO Cybersecurity Assurance LLP', 'AICPA SOC 2 Guidelines', 'US-East Multi-Region Cluster'],
    };
  }

  // General fallback
  return {
    documentCategory: 'General',
    executiveSummary: `Executive briefing synthesizing key business propositions, quantitative benchmarks, and critical milestones outlined within "${fileName}".`,
    keyPoints: [
      'Core Objective: Strategic operational alignment across key cross-functional stakeholder groups.',
      'Data Integrity: Document contains structured analytical data sets and formal authorization matrices.',
      'Timeline & Scope: Immediate implementation targets set for next quarter with quarterly review milestones.',
      'Resource Allocation: Approved budget requirements detailed in Section 3 with 15% contingency reserve.',
    ],
    riskClauses: [
      'Ambiguity in Section 4.2 regarding cross-departmental dispute escalation mechanisms.',
      'Dependency on third-party API availability without explicit backup SLA guarantee.',
    ],
    actionItems: [
      'Distribute summary brief to department leads for formal sign-off.',
      'Clarify contingency fallback procedures before operational rollout.',
    ],
    wordCount: Math.round(fileSize / 25) || 2150,
    readingTimeMinutes: 7,
    sentiment: 'Neutral',
    keyEntities: ['Executive Leadership Council', 'Strategic Initiatives Group', 'Fiscal Year 2027 Goals'],
  };
}

export const INITIAL_DEMO_DOCUMENTS: StoredDocument[] = [
  {
    id: 'doc-seed-1',
    userId: 'demo@vaultly.io',
    name: 'Master_Services_Agreement_Apex_Holdings.pdf',
    sizeBytes: 3482000,
    type: 'application/pdf',
    uploadedAt: 'Today, 10:24 AM',
    status: 'ready',
    progress: 100,
    summary: {
      documentCategory: 'Contract',
      executiveSummary: 'Binding Master Services Agreement setting forth master deliverables, IP rights allocation, and mutual confidentiality between Vaultly Enterprise and Apex Holdings for custom platform deployment.',
      keyPoints: [
        '36-month non-exclusive service engagement with automated 12-month renewal periods.',
        'Net 30 billing schedule with mandatory quarterly business reviews.',
        'Data Sovereignty: All customer payloads must reside in dedicated isolated US-East encrypted vaults.',
        'SLAs: 99.95% API uptime guarantee backed by tiered service fee credits.',
      ],
      riskClauses: [
        'Clause 11.3: Consequential damages waived for breach of confidentiality (requires re-alignment to standard mutual cap).',
        'Clause 16.2: 48-hour incident notification required for suspected data anomalies.',
      ],
      actionItems: [
        'Legal team to amend Clause 11.3 to include standard $2,000,000 super-cap.',
        'Sign and execute digital certificate via Vaultly tamper-proof signature vault.',
      ],
      wordCount: 8450,
      readingTimeMinutes: 18,
      sentiment: 'Caution Required',
      keyEntities: ['Apex Holdings Corporation', 'Vaultly Enterprise Infrastructure', 'Delaware Chancery Court'],
    },
  },
  {
    id: 'doc-seed-2',
    userId: 'demo@vaultly.io',
    name: 'Q3_SOC2_Type_II_Security_Audit.docx',
    sizeBytes: 1940000,
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    uploadedAt: 'Yesterday, 4:15 PM',
    status: 'ready',
    progress: 100,
    summary: {
      documentCategory: 'Report',
      executiveSummary: 'Independent external auditor assessment validating Vaultly zero-knowledge architecture, cryptographic key separation, and automated RBAC provisioning across the trailing 12 months.',
      keyPoints: [
        'Clean, unqualified audit report issued with 0 high or medium priority exceptions.',
        'Cryptographic keys verified to be completely inaccessible to internal platform operators.',
        'All automated penetrations tests resulted in zero perimeter breaches.',
      ],
      riskClauses: [
        'Recommendation: Continue annual cadence of external adversary simulation exercises.',
      ],
      actionItems: [
        'Publish sanitized summary report to customer Trust Portal.',
        'Archive full attestation report in encrypted compliance vault.',
      ],
      wordCount: 14200,
      readingTimeMinutes: 28,
      sentiment: 'Favorable',
      keyEntities: ['Ernst & Young LLP Assurance Services', 'AICPA Trust Services Criteria', 'ISO/IEC 27001:2022'],
    },
  },
  {
    id: 'doc-seed-3',
    userId: 'demo@vaultly.io',
    name: 'Vendor_Invoice_Cluster_Inference_INV-4091.pdf',
    sizeBytes: 624000,
    type: 'application/pdf',
    uploadedAt: 'Oct 20, 2026',
    status: 'ready',
    progress: 100,
    summary: {
      documentCategory: 'Invoice',
      executiveSummary: 'Consolidated compute billing for high-throughput GPU clusters, vector embeddings processing, and cross-region encrypted snapshot backups.',
      keyPoints: [
        'Total Due: $24,800.00 USD (Net 30 terms).',
        'Cluster active hours: 1,440 hours with zero sustained throttling.',
        'Early payment discount of 2% applicable if remitted within 10 days.',
      ],
      riskClauses: [
        'Due Date: November 19, 2026. Late payments incur statutory 1.5% monthly finance charge.',
      ],
      actionItems: [
        'Forward to Corporate Finance for automatic ACH scheduling.',
        'Confirm 2% early settlement discount ($496.00 savings).',
      ],
      wordCount: 680,
      readingTimeMinutes: 2,
      sentiment: 'Neutral',
      keyEntities: ['NorthStar Compute LLC', 'PO-2026-904', 'First National Bank of New York'],
    },
  },
];
