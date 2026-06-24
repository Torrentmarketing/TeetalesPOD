
import React from 'react';
import { motion } from 'motion/react';
import { Upload, Plus, Minus, Move, ShoppingCart, MessageCircle, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { CustomizationState, ProductType, ColorOption, Design } from '../types';
import { COLORS, DESIGNS } from '../constants';
import { ProductMockup } from '../components/ProductMockup';

export const Customizer = () => {
  const [searchParams] = useSearchParams();
  const initialDesignId = searchParams.get('design');

  const [state, setState] = React.useState<CustomizationState>({
    productType: 'tshirt',
    color: COLORS[0],
    design: DESIGNS.find(d => d.id === initialDesignId) || null,
    customImage: null,
    size: 'M',
    scale: 1,
    position: { x: 0, y: 0 },
  });

  const [showCheckout, setShowCheckout] = React.useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setState(prev => ({ ...prev, customImage: event.target?.result as string, design: null }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOrder = () => {
    const message = `Hi TeeTales! I've customized a ${state.productType} (${state.color.name}, Size: ${state.size}) with the "${state.design?.name || 'Custom'}" design. I'd like to confirm my order and pay the 50% advance.`;
    const whatsappUrl = `https://wa.me/923431659033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Controls */}
        <div className="w-full lg:w-[450px] space-y-10 order-2 lg:order-1">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tighter mb-2">Customize Your Gear</h1>
            <p className="text-gray-500 text-sm">Premium quality, printed on demand.</p>
          </div>

          {/* Product Type */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">1. Select Product</h3>
            <div className="flex gap-3">
              {(['tshirt', 'hoodie'] as ProductType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setState(s => ({ ...s, productType: type }))}
                  className={`flex-1 py-3 border text-[11px] font-bold uppercase tracking-widest transition-all ${
                    state.productType === type ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {type === 'tshirt' ? 'Regular T-Shirt' : 'Hoodie'}
                </button>
              ))}
            </div>

            {/* Product Details Block */}
            {state.productType === 'tshirt' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 p-5 bg-gray-50 border border-gray-100 rounded-xl text-[11px] text-gray-600 space-y-4 leading-relaxed"
              >
                <div>
                  <h4 className="font-extrabold text-gray-900 text-xs uppercase tracking-wider mb-1">
                    Unisex Regular Fit T-Shirt
                  </h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    170 GSM Lightweight 100% Combed Cotton Tee
                  </p>
                </div>

                <p>
                  Designed for everyday comfort and versatility, this premium unisex regular fit t-shirt is crafted from 100% combed cotton and finished in a lightweight 170 GSM fabric. Soft, breathable and comfortable, it is ideal for daily wear throughout the year.
                </p>
                
                <p>
                  Unlike oversized or drop shoulder styles, this t-shirt features a classic regular fit with a structured shoulder line and a clean, timeless silhouette. The versatile design makes it suitable for both men and women and easy to pair with jeans, shorts, joggers or layered outfits.
                </p>

                <p>
                  Made from premium combed cotton, the fabric offers a smoother, softer feel against the skin while maintaining durability and shape through regular wear and washing.
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-200/60">
                  <details className="cursor-pointer outline-none group">
                    <summary className="font-bold text-gray-800 uppercase tracking-widest hover:text-black list-none flex items-center justify-between">
                      <span>• Premium Features</span>
                      <span className="text-[9px] text-gray-400 group-open:rotate-180 transition-transform">&darr;</span>
                    </summary>
                    <ul className="list-disc pl-4 mt-2 space-y-1 text-gray-500">
                      <li>100% Combed Cotton</li>
                      <li>Lightweight 170 GSM Fabric</li>
                      <li>Unisex Regular Fit</li>
                      <li>Classic Crew Neck / Round Neck</li>
                      <li>Short Sleeves</li>
                      <li>Soft and Breathable Fabric</li>
                      <li>Comfortable for All-Day Wear</li>
                      <li>Suitable for Men and Women</li>
                      <li>Ideal for Casual Wear, Layering and Everyday Use</li>
                    </ul>
                  </details>

                  <details className="cursor-pointer outline-none group">
                    <summary className="font-bold text-gray-800 uppercase tracking-widest hover:text-black list-none flex items-center justify-between">
                      <span>• Premium Construction</span>
                      <span className="text-[9px] text-gray-400 group-open:rotate-180 transition-transform">&darr;</span>
                    </summary>
                    <ul className="list-disc pl-4 mt-2 space-y-1 text-gray-500">
                      <li>High stitch density of approximately 11–12 stitches per inch (SPI)</li>
                      <li>Clean and durable seam construction</li>
                      <li>Professional garment finishing</li>
                      <li>Designed to maintain shape through regular wear and washing</li>
                      <li>Quality craftsmanship throughout the garment</li>
                    </ul>
                  </details>

                  <details className="cursor-pointer outline-none group">
                    <summary className="font-bold text-gray-800 uppercase tracking-widest hover:text-black list-none flex items-center justify-between">
                      <span>• Fit Information</span>
                      <span className="text-[9px] text-gray-400 group-open:rotate-180 transition-transform">&darr;</span>
                    </summary>
                    <ul className="list-disc pl-4 mt-2 space-y-1 text-gray-500">
                      <li>Unisex Regular Fit</li>
                      <li>Classic Straight Cut</li>
                      <li>Structured Shoulder Line</li>
                      <li>Comfortable Everyday Fit</li>
                      <li>True-to-Size Styling</li>
                    </ul>
                  </details>
                </div>

                <div className="pt-2 border-t border-gray-200/60 flex justify-between items-center text-[10px]">
                  <span className="font-bold text-gray-800 uppercase tracking-wider">Available Colours:</span>
                  <span className="text-gray-500 font-semibold">Black · White · Grey</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Color Selector */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">2. Choose Color</h3>
            <div className="flex flex-wrap gap-3">
              {COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setState(s => ({ ...s, color }))}
                  className={`w-8 h-8 rounded-full border transition-all p-0.5 ${
                    state.color.value === color.value ? 'border-black scale-110' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full rounded-full border border-gray-100" style={{ backgroundColor: color.hex }} />
                </button>
              ))}
            </div>
          </div>

          {/* Design Selector */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">3. Pick a Design</h3>
              <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-black">
                <Upload className="w-3 h-3" />
                Upload
                <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
              </label>
            </div>
            <div className="grid grid-cols-5 gap-2 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
              {DESIGNS.map((design) => (
                <button
                  key={design.id}
                  onClick={() => setState(s => ({ ...s, design, customImage: null }))}
                  className={`aspect-square border transition-all p-2 ${
                    state.design?.id === design.id ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-300'
                  }`}
                >
                  <img src={design.image} alt={design.name} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">4. Select Size</h3>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setState(s => ({ ...s, size }))}
                  className={`w-10 h-10 border text-[10px] font-bold uppercase tracking-widest transition-all ${
                    state.size === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 space-y-4">
            <button 
              onClick={handleOrder}
              className="w-full py-4 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
            >
              Order via WhatsApp
            </button>
            <p className="text-center text-[10px] text-gray-400 italic leading-relaxed">
              “Since every piece is custom-made just for you, we require a 50% advance to start production.”
            </p>
          </div>
        </div>

        {/* Right: Preview (Mockup) */}
        <div className="flex-1 w-full order-1 lg:order-2 lg:sticky lg:top-32">
          <ProductMockup state={state} />
          
          <div className="mt-6 p-6 bg-gray-50 border border-gray-100">
            <h3 className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
              <Move className="w-3 h-3" /> Adjust Placement
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex-1 space-y-3">
                <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest">
                  <span>Scale</span>
                  <span>{Math.round(state.scale * 100)}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setState(s => ({ ...s, scale: Math.max(0.5, s.scale - 0.1) }))} className="hover:text-black"><Minus className="w-3 h-3" /></button>
                  <input 
                    type="range" min="0.5" max="2" step="0.1" value={state.scale} 
                    onChange={(e) => setState(s => ({ ...s, scale: parseFloat(e.target.value) }))}
                    className="flex-1 accent-black"
                  />
                  <button onClick={() => setState(s => ({ ...s, scale: Math.min(2, s.scale + 0.1) }))} className="hover:text-black"><Plus className="w-3 h-3" /></button>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex-1 space-y-3">
                <div className="text-[9px] font-bold uppercase tracking-widest">Position</div>
                <div className="grid grid-cols-3 gap-1 w-24">
                  <div />
                  <button onClick={() => setState(s => ({ ...s, position: { ...s.position, y: s.position.y - 5 } }))} className="p-1 border border-gray-200 hover:bg-white flex justify-center"><Plus className="w-2 h-2 rotate-180" /></button>
                  <div />
                  <button onClick={() => setState(s => ({ ...s, position: { ...s.position, x: s.position.x - 5 } }))} className="p-1 border border-gray-200 hover:bg-white flex justify-center"><Plus className="w-2 h-2 -rotate-90" /></button>
                  <button onClick={() => setState(s => ({ ...s, position: { x: 0, y: 0 } }))} className="p-1 border border-gray-200 hover:bg-white text-[7px] font-bold flex items-center justify-center">RST</button>
                  <button onClick={() => setState(s => ({ ...s, position: { ...s.position, x: s.position.x + 5 } }))} className="p-1 border border-gray-200 hover:bg-white flex justify-center"><Plus className="w-2 h-2 rotate-90" /></button>
                  <div />
                  <button onClick={() => setState(s => ({ ...s, position: { ...s.position, y: s.position.y + 5 } }))} className="p-1 border border-gray-200 hover:bg-white flex justify-center"><Plus className="w-2 h-2" /></button>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutSection = ({ state, onBack }: { state: CustomizationState; onBack: () => void }) => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
      <button onClick={onBack} className="text-accent font-bold mb-8 flex items-center gap-2 hover:underline">
        ← Back to Customizer
      </button>
      
      <div className="bg-white/5 rounded-3xl border border-white/10 p-8 space-y-8">
        <h2 className="text-3xl font-black">Complete Your Order</h2>
        
        <div className="flex gap-6 p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-white/10">
            <img src={state.customImage || state.design?.image} className="w-full h-full object-contain p-2" />
          </div>
          <div>
            <h4 className="font-bold text-lg capitalize">{state.productType} - {state.color.name}</h4>
            <p className="text-white/50 text-sm">Size: {state.size}</p>
            <p className="text-accent font-bold mt-1">Rs. 1,499.00</p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Phone Number</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" placeholder="+92 300 1234567" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/60">Shipping Address</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none h-24" placeholder="Your full address..." />
          </div>

          <div className="p-6 bg-cta/10 rounded-2xl border border-cta/20 space-y-3">
            <h4 className="font-bold flex items-center gap-2 text-cta">
              <ShieldCheck className="w-5 h-5" /> Payment Instruction
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Since every piece is custom-made just for you, we require a 50% advance to start production. 
              No Cash on Delivery available for custom orders.
            </p>
          </div>

          <a 
            href={`https://wa.me/yournumber?text=Hi, I just customized a ${state.productType} on TeeTales. I would like to confirm my order. Please guide me for 50% advance payment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-[#25D366] text-white font-black text-xl rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 mt-8"
          >
            <MessageCircle className="w-6 h-6" /> Confirm via WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
};

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
