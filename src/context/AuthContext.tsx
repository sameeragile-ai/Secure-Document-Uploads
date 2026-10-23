import React, { createContext, useContext, useEffect, useState } from 'react';
import { generateRealisticSummary, INITIAL_DEMO_DOCUMENTS } from '../data/mockData';
import { StoredDocument, User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, name?: string, organization?: string) => void;
  logout: () => void;
  documents: StoredDocument[];
  addDocument: (file: File) => void;
  deleteDocument: (id: string) => void;
  selectedDocForSummary: StoredDocument | null;
  setSelectedDocForSummary: (doc: StoredDocument | null) => void;
  show403Modal: boolean;
  setShow403Modal: (show: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  switchUserQuick: (email: string, name: string) => void;
}

const DEFAULT_USER: User = {
  email: 'demo@vaultly.io',
  name: 'Alex Morgan',
  organization: 'Apex Legal & Partners',
  role: 'Managing Partner',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('vaultly_current_user');
      return stored ? JSON.parse(stored) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  const [documents, setDocuments] = useState<StoredDocument[]>([]);
  const [selectedDocForSummary, setSelectedDocForSummary] = useState<StoredDocument | null>(null);
  const [show403Modal, setShow403Modal] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  // Load documents for current user
  useEffect(() => {
    if (!user) {
      setDocuments([]);
      return;
    }

    const storageKey = `vaultly_docs_${user.email.toLowerCase().trim()}`;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setDocuments(JSON.parse(raw));
      } else {
        // Pre-seed demo documents if this is the default user
        if (user.email === DEFAULT_USER.email) {
          localStorage.setItem(storageKey, JSON.stringify(INITIAL_DEMO_DOCUMENTS));
          setDocuments(INITIAL_DEMO_DOCUMENTS);
        } else {
          setDocuments([]);
        }
      }
    } catch (e) {
      console.error('Failed reading user documents from localStorage', e);
      setDocuments([]);
    }
  }, [user]);

  // Persist documents when they change
  const saveDocumentsForUser = (userEmail: string, docs: StoredDocument[]) => {
    try {
      const storageKey = `vaultly_docs_${userEmail.toLowerCase().trim()}`;
      localStorage.setItem(storageKey, JSON.stringify(docs));
    } catch (e) {
      console.error('Failed persisting docs', e);
    }
  };

  const login = (email: string, name?: string, organization?: string) => {
    const formattedEmail = email.trim().toLowerCase();
    const newUser: User = {
      email: formattedEmail,
      name: name?.trim() || formattedEmail.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      organization: organization?.trim() || 'Independent Counsel',
      role: 'Private Workspace Owner',
    };
    setUser(newUser);
    try {
      localStorage.setItem('vaultly_current_user', JSON.stringify(newUser));
    } catch (e) {
      console.error('Failed saving user', e);
    }
    setIsLoginModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('vaultly_current_user');
    } catch (e) {
      console.error('Failed removing user', e);
    }
  };

  const switchUserQuick = (email: string, name: string) => {
    login(email, name, 'Enterprise Tenant Partition');
  };

  // Add document with simulated chunked upload & realistic synthesis
  const addDocument = (file: File) => {
    if (!user) return;

    const docId = `doc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const newDoc: StoredDocument = {
      id: docId,
      userId: user.email,
      name: file.name,
      sizeBytes: file.size,
      type: file.type || 'application/octet-stream',
      uploadedAt: 'Just now',
      status: 'uploading',
      progress: 12,
    };

    setDocuments(prev => {
      const updated = [newDoc, ...prev];
      saveDocumentsForUser(user.email, updated);
      return updated;
    });

    // Chunked progress simulation: 12% -> 45% -> 80% -> 100% -> 'processing' -> 'ready'
    let progressStep = 15;
    const interval = setInterval(() => {
      progressStep += Math.floor(Math.random() * 25) + 15;
      if (progressStep >= 100) {
        clearInterval(interval);
        setDocuments(prev => {
          const updated = prev.map(d => (d.id === docId ? { ...d, progress: 100, status: 'processing' as const } : d));
          saveDocumentsForUser(user.email, updated);
          return updated;
        });

        // After 2.5 seconds in processing, generate realistic plain-English summary
        setTimeout(() => {
          const realisticSummary = generateRealisticSummary(file.name, file.size);
          setDocuments(prev => {
            const updated = prev.map(d =>
              d.id === docId
                ? {
                    ...d,
                    status: 'ready' as const,
                    summary: realisticSummary,
                  }
                : d
            );
            saveDocumentsForUser(user.email, updated);
            return updated;
          });
        }, 2800);
      } else {
        setDocuments(prev => {
          const updated = prev.map(d => (d.id === docId ? { ...d, progress: progressStep } : d));
          saveDocumentsForUser(user.email, updated);
          return updated;
        });
      }
    }, 350);
  };

  const deleteDocument = (id: string) => {
    if (!user) return;
    setDocuments(prev => {
      const updated = prev.filter(d => d.id !== id);
      saveDocumentsForUser(user.email, updated);
      return updated;
    });
    if (selectedDocForSummary?.id === id) {
      setSelectedDocForSummary(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        documents,
        addDocument,
        deleteDocument,
        selectedDocForSummary,
        setSelectedDocForSummary,
        show403Modal,
        setShow403Modal,
        isLoginModalOpen,
        setIsLoginModalOpen,
        switchUserQuick,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
