import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Trash2,
  Sparkles,
  Download,
  Receipt,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, tax, total, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Form states
  const [cardName, setCardName] = useState('Alex Morgan');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('884');
  const [billingAddress, setBillingAddress] = useState('100 Montgomery St, Suite 1400, San Francisco, CA');

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      const generatedOrder = `VLT-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366F1', '#A855F7', '#22D3EE', '#38BDF8', '#10B981'],
        });
      } catch (err) {
        console.warn('Confetti error', err);
      }

      clearCart();
    }, 1600);
  };

  const handleDownloadReceipt = () => {
    const receiptContent = `=========================================
VAULTLY TECHNOLOGIES INC. - RECEIPT
Order ID: ${orderNumber}
Date: ${new Date().toLocaleString()}
Status: COMPLETED (Bank-Grade Verified)
=========================================

Total Paid: $${total.toFixed(2)} USD (incl. $${tax.toFixed(2)} tax)
Payment Method: Visa Ending 4242
Billed To: ${cardName}
Billing Address: ${billingAddress}

Thank you for trusting Vaultly with your confidential document intelligence.
=========================================`;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Vaultly_Receipt_${orderNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen pt-32 pb-24 px-4 max-w-xl mx-auto text-center space-y-6"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-2xl shadow-emerald-500/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 font-mono text-xs font-semibold">
            <span>Payment Confirmed</span>
            <span>·</span>
            <span>{orderNumber}</span>
          </div>

          <h1 className="text-3xl font-extrabold text-white font-display">
            Welcome to Enhanced Workspace Security
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
            Your capabilities and quotas have been provisioned in your cryptographic tenant enclave. A receipt has been issued to your billing contact.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0D1429] border border-white/10 text-left space-y-3 font-mono text-xs">
          <div className="flex justify-between text-slate-400">
            <span>Transaction Reference:</span>
            <span className="text-cyan-300">{orderNumber}</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Verification:</span>
            <span className="text-emerald-400">TLS 1.3 / 256-bit Token</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Settlement:</span>
            <span className="text-white font-semibold">Instant Enclave Upgrade</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleDownloadReceipt}
            className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Invoice Receipt</span>
          </button>

          <Link
            to="/dashboard"
            className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
          >
            <span>Open Dashboard</span>
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Secure Checkout
          </h1>
          <p className="text-xs text-slate-400">256-bit encrypted checkout session</p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="py-20 text-center rounded-2xl bg-[#0D1429] border border-white/10 p-8 space-y-4">
          <Receipt className="w-12 h-12 text-slate-500 mx-auto" />
          <h2 className="text-lg font-bold text-white font-display">Your cart is empty</h2>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Add a subscription plan or power add-ons before proceeding to checkout.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-400"
          >
            View Plans & Add-ons
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Payment Details */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1429] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h2 className="text-base font-semibold text-white font-display">Payment Details</h2>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                PCI-DSS Level 1
              </span>
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  required
                  value={cardName}
                  onChange={e => setCardName(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Card Number (Demo Sandbox)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <CreditCard className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    CVC / Security Code
                  </label>
                  <input
                    type="text"
                    required
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    placeholder="123"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Billing Address
                </label>
                <input
                  type="text"
                  required
                  value={billingAddress}
                  onChange={e => setBillingAddress(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>30-day money back guarantee & instant cancellation anytime.</span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 hover:opacity-95 shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2 disabled:opacity-50 transition-transform active:scale-95"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verifying Bank-Grade Authorization...</span>
                    </>
                  ) : (
                    <span>Authorize & Pay ${total.toFixed(2)}</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D1429] border border-white/10 p-6 sm:p-8 space-y-6">
            <h2 className="text-base font-semibold text-white font-display pb-3 border-b border-white/10">
              Order Summary ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h2>

            <div className="divide-y divide-white/5 max-h-72 overflow-y-auto space-y-3">
              {cart.map(item => (
                <div key={item.id} className="pt-3 first:pt-0 flex items-start justify-between gap-3 text-xs">
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-400">
                      Qty: {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono tabular-nums text-slate-200 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-500 hover:text-rose-400 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span className="font-mono tabular-nums">${tax.toFixed(2)}</span>
              </div>
              <div className="pt-3 border-t border-white/5 flex justify-between text-base font-bold text-white">
                <span className="font-display">Total Due</span>
                <span className="font-mono tabular-nums text-cyan-300">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
