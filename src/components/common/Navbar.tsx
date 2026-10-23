import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ShoppingBag, Menu, X, ArrowUpRight, User as UserIcon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalCount, setIsCartOpen } = useCart();
  const { user, setIsLoginModalOpen } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/#features' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Dashboard', path: '/dashboard' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      if (location.pathname === '/') {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/${path.substring(1)}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1020]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white font-display flex items-center gap-1">
              Vaultly
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 -mt-1 hidden sm:inline">
              Zero-Knowledge AI
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
          {navLinks.map(link => {
            const active = isActive(link.path);
            return (
              <div key={link.label} className="relative">
                {link.path.startsWith('/#') ? (
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={`px-4 py-2 text-xs lg:text-sm font-medium transition-colors rounded-full whitespace-nowrap ${
                      active ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-xs lg:text-sm font-medium transition-colors rounded-full whitespace-nowrap inline-block ${
                      active ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA & Cart */}
        <div className="hidden sm:flex items-center gap-3">
          {/* User quick status/switch */}
          {user && (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs text-slate-300 flex items-center gap-2 transition-colors"
              title="Click to switch test tenant or logout"
            >
              <UserIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="max-w-[110px] truncate">{user.name}</span>
            </button>
          )}

          {/* Cart Icon with badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-slate-200 hover:text-white transition-all hover:scale-105 active:scale-95"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {totalCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-mono text-[11px] font-bold flex items-center justify-center shadow-lg shadow-indigo-500/50"
                >
                  {totalCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Primary CTA button */}
          <Link
            to="/dashboard"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide uppercase text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-md shadow-indigo-500/25 flex items-center gap-1.5 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{user ? 'Open Vault' : 'Get Started'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger & Cart */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-slate-300 hover:text-white"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-[10px] font-bold flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1020]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {link.path.startsWith('/#') ? (
                    <button
                      onClick={() => handleLinkClick(link.path)}
                      className="w-full text-left py-2 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                {user ? (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between"
                  >
                    <span>Logged in as {user.name}</span>
                    <span className="text-cyan-400 font-semibold">Switch</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    Sign In
                  </button>
                )}

                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-center text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
