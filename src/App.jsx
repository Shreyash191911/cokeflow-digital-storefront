import './echo-inspector.css';
import React, { useState, createContext } from 'react';
import './styles/theme.css';
import { products } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { SvgCanFallback } from './components/ProductCard';

export const CartContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      setIsCartOpen,
      quickViewProduct,
      setQuickViewProduct
    }}>
      <div className="min-h-screen flex flex-col bg-dark-theme text-white">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ProductGrid products={products} />
        </main>
        <Footer />
        <CartDrawer />
        {quickViewProduct && (
          <div className="quick-view-backdrop" onClick={() => setQuickViewProduct(null)}>
            <section role="dialog" aria-modal="true" aria-label={quickViewProduct.name} className="quick-view-modal" onClick={e => e.stopPropagation()}>
              <button aria-label="Close Quick View" onClick={() => setQuickViewProduct(null)}>Close</button>
              <SvgCanFallback color={quickViewProduct.color} name={quickViewProduct.name} />
              <h2>{quickViewProduct.name}</h2>
              <p>{quickViewProduct.description}</p>
              <p>{quickViewProduct.volume || '355 mL'} · USD {(quickViewProduct.priceCents / 100).toFixed(2)}</p>
              <button onClick={() => { addToCart(quickViewProduct); setQuickViewProduct(null); }}>Add to Cart</button>
            </section>
          </div>
        )}
      </div>
    </CartContext.Provider>
  );
}