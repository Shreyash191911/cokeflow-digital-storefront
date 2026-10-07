import React, { useContext } from 'react';
import { CartContext } from '../App';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const { cart, setIsCartOpen } = useContext(CartContext);
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-coke" role="img" aria-label="Coca-Cola Store">Coca-Cola Store</div>
      <button 
        onClick={() => setIsCartOpen(true)} 
        className="flex items-center gap-2 bg-coke px-4 py-2 rounded-full"
        aria-label="Open Cart"
      >
        <ShoppingCart size={20} />
        <span>{cart.length} items</span>
      </button>
    </nav>
  );
}