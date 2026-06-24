
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, MessageCircle, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 text-[10px] uppercase tracking-widest font-medium border-b border-gray-50">
          <div className="hidden md:block">Now Pay in 3 Installments</div>
          <div className="flex items-center space-x-4">
            <span>USD / EN</span>
          </div>
        </div>
        <div className="flex justify-between items-center h-16">
          <div className="hidden lg:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-tighter">
            <Link to="/library" className="hover:text-accent">Summer 2026 Men</Link>
            <Link to="/library" className="hover:text-accent">Women</Link>
            <Link to="/library" className="hover:text-accent">Winter 2025 Men</Link>
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <span className="text-2xl font-serif italic tracking-tighter text-text-primary">TeeTales</span>
          </Link>

          <div className="flex items-center space-x-5">
            <button className="hover:text-accent"><Search className="w-4 h-4" /></button>
            <Link to="/customize" className="hidden md:block hover:text-accent"><User className="w-4 h-4" /></Link>
            <Link to="/customize" className="relative hover:text-accent">
              <ShoppingBag className="w-4 h-4" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/923431659033?text=Hi, I just customized a T-shirt/Hoodie on TeeTales. I would like to confirm my order. Please guide me for 50% advance payment."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
  >
    <MessageCircle className="text-white w-6 h-6" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-white font-medium whitespace-nowrap">
      Order on WhatsApp
    </span>
  </a>
);
