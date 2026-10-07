import React, { useContext, useState } from 'react';
import { CartContext } from '../App';
import { Eye, Plus, Check, Sparkles } from 'lucide-react';

export const SvgCanFallback = ({ color = '#F40009', name = 'Coca-Cola' }) => (
  <div className="svg-fallback-container">
    <div className="svg-bg-glow" style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)` }} />
    <svg width="80" height="130" viewBox="0 0 100 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="70" height="140" rx="14" fill="url(#canGradient)" stroke="#444" strokeWidth="2" />
      <ellipse cx="50" cy="20" rx="33" ry="8" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="2" />
      <ellipse cx="50" cy="18" rx="25" ry="5" fill="#9CA3AF" />
      <ellipse cx="50" cy="160" rx="32" ry="6" fill="#6B7280" />
      <path d="M 15 50 Q 50 70 85 50 L 85 130 Q 50 150 15 130 Z" fill={color} opacity="0.9" />
      <path d="M 20 85 C 35 100 65 70 80 85 C 65 92 35 92 20 85 Z" fill="#FFFFFF" />
      <text x="50" y="112" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">
        Coke
      </text>
      <defs>
        <linearGradient id="canGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A2A2E" />
          <stop offset="30%" stopColor="#4A4A50" />
          <stop offset="70%" stopColor="#3A3A3E" />
          <stop offset="100%" stopColor="#1A1A1E" />
        </linearGradient>
      </defs>
    </svg>
    <span className="fallback-brand-name">{name}</span>
  </div>
);

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useContext(CartContext);
  const [imgError, setImgError] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div 
      className="product-card-container"
      onClick={() => setQuickViewProduct && setQuickViewProduct(product)}
    >
      <div className="product-card-badge-row">
        <span className="product-tag-badge" style={{ backgroundColor: product.color || '#F40009' }}>
          {product.tag || product.category}
        </span>
        {product.nutrition?.calories === 0 && (
          <span className="zero-cal-badge">0 Cal</span>
        )}
      </div>

      <div className="product-image-wrapper">
        {!imgError ? (
          <img 
            src={product.image} 
            alt={(product.id ?? product.key) === "diet-coke" ? "Diet Coke" : ((product.id ?? product.key) === "diet-coke" ? "Diet Coke illustration" : (product.name))} 
            className="product-card-image"
            onError={() => setImgError(true)}
            loading="lazy" data-echo-edit-id={"edit-49066fd7-2525"}
          />
        ) : (
          <SvgCanFallback color={product.color} name={product.name} />
        )}
        <button 
          className="quick-view-hover-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (setQuickViewProduct) setQuickViewProduct(product);
          }}
          aria-label={`Quick View ${product.name}`}
        >
          <Eye size={16} /> Quick View
        </button>
      </div>

      <div className="product-card-content">
        <div className="flex items-center justify-between mb-1">
          <h3 className="product-card-title">{product.name}</h3>
          <span className="product-volume-label">{product.volume || '355 mL'}</span>
        </div>
        <p className="product-card-desc">{product.description}</p>
        
        <div className="product-card-footer">
          <div className="price-block">
            <span className="price-amount">${(product.priceCents / 100).toFixed(2)}</span>
          </div>
          <button 
            onClick={handleAdd}
            aria-label={`Add to Cart ${product.name}`}
            className={`add-to-cart-btn ${added ? 'btn-added' : ''}`}
          >
            {added ? (
              <><Check size={16} /> Added</>
            ) : (
              <><Plus size={16} /> Add to Cart</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}