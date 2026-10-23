export interface User {
  email: string;
  name: string;
  organization: string;
  role?: string;
  avatarUrl?: string;
}

export type DocumentStatus = 'uploading' | 'processing' | 'ready' | 'error';

export interface DocumentSummary {
  executiveSummary: string;
  keyPoints: string[];
  riskClauses: string[];
  actionItems: string[];
  wordCount: number;
  readingTimeMinutes: number;
  sentiment: 'Neutral' | 'Favorable' | 'Caution Required';
  keyEntities: string[];
  documentCategory: 'Contract' | 'Invoice' | 'Report' | 'Resume' | 'Medical/Legal' | 'General';
}

export interface StoredDocument {
  id: string;
  userId: string; // Isolated per user email
  name: string;
  sizeBytes: number;
  type: string;
  uploadedAt: string;
  status: DocumentStatus;
  progress: number;
  summary?: DocumentSummary;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  category: 'storage' | 'processing' | 'expert' | 'team' | 'api' | 'subscription';
  description: string;
  imageUrl?: string;
}

export interface AddOnProduct {
  id: string;
  title: string;
  category: 'storage' | 'processing' | 'expert' | 'team' | 'api';
  price: number;
  billingUnit: 'per month' | 'one-time' | 'per doc' | 'per pack';
  description: string;
  badge?: string;
  features: string[];
  imageUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
  quotaDescription: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  documentVolume: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Security' | 'AI Technology' | 'Pricing' | 'Formats';
}
