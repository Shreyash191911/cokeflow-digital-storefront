import React, { useState, useContext } from 'react';
import { CartContext } from '../App';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="flex gap-4 mb-8 justify-center">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full ${filter === cat ? 'bg-coke text-white' : 'bg-gray-200'}`} style={{ paddingTop: "10px" }} data-echo-edit-id={"edit-eaa7b681ba1daa5e26b6ff407e81dc4387c46f38cc8af97a954d444d76f87099-564"}
          >
            {cat === 'Zero' ? 'Zero Sugar' : cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}