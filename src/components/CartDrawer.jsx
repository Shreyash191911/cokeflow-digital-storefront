import React, { useContext, useState } from 'react';
import { CartContext } from '../App';
import { X, Trash2, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { SvgCanFallback } from './ProductCard';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [checkingOut, setCheckingOut] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + (item.priceCents * (item.quantity || 1)), 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const total = subtotal - discountAmount;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'REFRESH20') {
      setAppliedDiscount(0.2);
      setPromoSuccess('20% discount applied successfully!');
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try REFRESH20');
      setPromoSuccess('');
    }
  };

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      alert('Thank you for your order! Your refreshment is on the way.');
      setCheckingOut(false);
      setIsCartOpen(false);
    }, 1500);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex justify-end">
      <div 
        className="absolute inset-0" 
        onClick={() => setIsCartOpen(false)} 
        aria-hidden="true"
      />
      <div className="relative h-full w-full max-w-md bg-surface p-6 shadow-2xl flex flex-col border-l border-white/10 text-white">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-coke" size={24} />
            <h2 className="text-2xl font-bold tracking-tight">Your Refreshment Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Close Cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-gray-500">
              <ShoppingBag size={32} />
            </div>
            <p className="text-lg font-semibold text-white mb-1">Your cart is empty</p>
            <p className="text-sm text-gray-400 mb-6">Add some ice-cold Coca-Cola flavors to start your refreshment journey!</p>
            <button 
              onClick={() => setIsCartOpen(false)} 
              className="bg-coke text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-600 transition-colors"
            >
              Browse Drinks
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto space-y-4 pr-1 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="w-16 h-16 rounded bg-black/40 flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10">
                    <SvgCanFallback color={item.color} name={item.name} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white text-sm truncate pr-2">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{item.volume || '355 mL'}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-white/10 rounded bg-black/20">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)} 
                          className="px-2 py-0.5 text-gray-400 hover:text-white text-sm font-bold"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-white">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)} 
                          className="px-2 py-0.5 text-gray-400 hover:text-white text-sm font-bold"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-sm text-white">
                        ${((item.priceCents * (item.quantity || 1)) / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code Section */}
            <div className="border-t border-white/10 pt-4 mb-4">
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Promo Code (REFRESH20)" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-grow bg-black/40 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-coke"
                />
                <button 
                  type="submit"
                  className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded text-sm font-bold transition-colors"
                >
                  Apply
                </button>
              </form>
              {promoError && <p className="text-xs text-red-400 mt-1">{promoError}</p>}
              {promoSuccess && <p className="text-xs text-green-400 mt-1 flex items-center gap-1"><Check size={12} /> {promoSuccess}</p>}
            </div>

            {/* Pricing Summary */}
            <div className="border-t border-white/10 pt-4 space-y-2 bg-black/20 p-4 rounded-lg">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span>${(subtotal / 100).toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-sm text-green-400">
                  <span>Discount (20%)</span>
                  <span>-${(discountAmount / 100).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping</span>
                <span className="text-green-400 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-white/5">
                <span>Total</span>
                <span className="text-coke">${(total / 100).toFixed(2)}</span>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={checkingOut}
                className="w-full bg-coke hover:bg-red-600 text-white py-3 mt-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/20 disabled:opacity-50"
              >
                {checkingOut ? (
                  <><div className="loading-spinner" /> Processing...</>
                ) : (
                  <><Sparkles size={18} /> Complete Refreshment Order</>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}