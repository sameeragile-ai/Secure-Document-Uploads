import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotal, tax, total, totalCount } =
    useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-[#0D1429] border-l border-white/10 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111A35]/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-white font-display">Your Cart</h2>
                    <p className="text-xs text-slate-400">
                      {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-base font-medium text-slate-200 mb-1">Your cart is empty</p>
                    <p className="text-xs text-slate-400 max-w-xs mb-6">
                      Add extra storage, priority GPU pipelines, or attorney reviews to power up your workspace.
                    </p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        navigate('/pricing');
                      }}
                      className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 rounded-xl hover:opacity-95 transition-opacity"
                    >
                      Browse Add-Ons & Plans
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors flex gap-4"
                    >
                      {item.imageUrl ? (
                        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10">
                          <SafeImage
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-cyan-400 font-mono font-bold text-sm">
                          VAULT
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-white truncate">{item.title}</h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                            title="Remove"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-1 mb-3">{item.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-white/10 rounded-lg bg-black/20">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-slate-400 hover:text-white transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 text-xs font-mono font-semibold text-white tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-slate-400 hover:text-white transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <span className="text-sm font-semibold font-mono tabular-nums text-cyan-300">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#0E152B]/90 backdrop-blur-md space-y-4">
                  <div className="space-y-2 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-mono tabular-nums text-slate-200">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Tax (8%)</span>
                      <span className="font-mono tabular-nums text-slate-200">${tax.toFixed(2)}</span>
                    </div>
                    <div className="pt-2 border-t border-white/5 flex justify-between text-base font-semibold text-white">
                      <span className="font-display">Total</span>
                      <span className="font-mono tabular-nums text-cyan-300">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>256-bit SSL encrypted checkout & invoice delivery</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                  >
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
