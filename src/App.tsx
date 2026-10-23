import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { InitialLoader } from './components/common/InitialLoader';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { LoginModal } from './components/common/LoginModal';
import { AccessDeniedModal } from './components/common/AccessDeniedModal';

import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { PricingPage } from './pages/PricingPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AnimatedAppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <InitialLoader>
            <div className="min-h-screen bg-[#0B1020] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-cyan-200">
              <ScrollToTop />
              <Navbar />

              <main className="flex-1">
                <AnimatedAppRoutes />
              </main>

              <Footer />

              {/* Shared Modals and Drawers */}
              <CartDrawer />
              <LoginModal />
              <AccessDeniedModal />
            </div>
          </InitialLoader>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
