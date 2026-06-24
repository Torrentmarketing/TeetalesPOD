
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { DESIGNS } from '../constants';

export const Library = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const categories = ['All', 'Motivational', 'Funny', 'Minimal', 'Trendy'];

  const filteredDesigns = activeCategory === 'All' 
    ? DESIGNS 
    : DESIGNS.filter(d => d.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-4">Design Library</h1>
        <p className="text-text-secondary text-sm">Choose a design to start customizing your product.</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all ${
              activeCategory === cat ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-gray-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {filteredDesigns.map((design) => (
          <motion.div
            layout
            key={design.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group"
          >
            <Link to={`/customize?design=${design.id}`}>
              <div className="aspect-[3/4] bg-white border border-gray-100 overflow-hidden mb-4 group-hover:border-accent/20 transition-colors relative">
                <img src={design.image} alt={design.name} className="w-full h-full object-contain p-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest">Customize</span>
                </div>
              </div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest">{design.name}</h3>
              <p className="text-[10px] text-gray-400 mt-1">{design.category}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
