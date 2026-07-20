import React, { useState, useEffect } from "react";
import { Star, Check, Shield, Truck, RotateCcw, ChevronDown, ChevronUp, MessageCircle, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "react-router-dom";

// Types
interface ColorOption {
  name: string;
  hex: string;
  value: string;
  image: string;
}

interface ShirtConfig {
  id: number;
  color: ColorOption;
  size: string;
}

const COLORS: ColorOption[] = [
  { name: "Black", hex: "#000000", value: "black", image: "/Round Neck T-shirt Model Black1.png" },
  { name: "White", hex: "#ffffff", value: "white", image: "/Round Neck T-shirt Model white1.png" },
  { name: "Navy", hex: "#0b1d3a", value: "navy", image: "/Round Neck T-shirt Model Black2.png" },
  { name: "Charcoal", hex: "#374151", value: "charcoal", image: "/teetales-3.png" },
  { name: "Hazel Grey", hex: "#9CA3AF", value: "hazel-grey", image: "/teetales-1.png" },
  { name: "Army Green", hex: "#3F6212", value: "army-green", image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80&w=800" },
  { name: "Maroon", hex: "#7F1D1D", value: "maroon", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800" },
  { name: "Royal Blue", hex: "#1E3A8A", value: "royal-blue", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80" },
  { name: "Pink", hex: "#FBCFE8", value: "pink", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80" },
  { name: "Brown", hex: "#78350F", value: "brown", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" },
];

const SIZES = ["S", "M", "L", "XL", "XXL"];

const PACK_OPTIONS = [
  { size: 1, label: "1 T-Shirt", price: 1149, badge: "", save: "0" },
  { size: 3, label: "Pack of 3 T-Shirts", price: 2299, badge: "POPULAR", save: "Rs. 1,148" },
  { size: 5, label: "Pack of 5 T-Shirts", price: 3549, badge: "BEST VALUE", save: "Rs. 2,196" },
  { size: 7, label: "Pack of 7 T-Shirts", price: 4799, badge: "WARDROBE BUILDER", save: "Rs. 3,244" },
  { size: 10, label: "Pack of 10 T-Shirts", price: 6599, badge: "FAMILY PACK", save: "Rs. 4,891" },
];

export default function PackBuilder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sizeParam = parseInt(searchParams.get("size") || "5");
  const initialPack = PACK_OPTIONS.find((p) => p.size === sizeParam) || PACK_OPTIONS[2];

  const [selectedPack, setSelectedPack] = useState(initialPack);
  const [globalSize, setGlobalSize] = useState("M");
  const [shirts, setShirts] = useState<ShirtConfig[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>("details");
  const [mainImage, setMainImage] = useState(COLORS[0].image);
  const [addedToCart, setAddedToCart] = useState(false);

  // Sync selectedPack when URL query parameter size changes
  useEffect(() => {
    const sizeParam = parseInt(searchParams.get("size") || "5");
    const p = PACK_OPTIONS.find((opt) => opt.size === sizeParam);
    if (p) {
      setSelectedPack(p);
    }
  }, [searchParams]);

  // Initialize shirt list when pack size or global size changes
  useEffect(() => {
    const updatedShirts: ShirtConfig[] = Array.from({ length: selectedPack.size }, (_, i) => {
      // Pick a default color cycle
      const colorIndex = i % COLORS.length;
      return {
        id: i + 1,
        color: COLORS[colorIndex],
        size: globalSize,
      };
    });
    setShirts(updatedShirts);
    setMainImage(updatedShirts[0]?.color.image || COLORS[0].image);
  }, [selectedPack.size, globalSize]);

  // Update specific shirt color
  const updateShirtColor = (shirtId: number, color: ColorOption) => {
    setShirts((prev) =>
      prev.map((s) => (s.id === shirtId ? { ...s, color } : s))
    );
    setMainImage(color.image);
  };

  // Update specific shirt size
  const updateShirtSize = (shirtId: number, size: string) => {
    setShirts((prev) =>
      prev.map((s) => (s.id === shirtId ? { ...s, size } : s))
    );
  };

  // Build WhatsApp Order Link
  const handleWhatsAppOrder = () => {
    const shirtDetails = shirts
      .map((s) => `• Shirt ${s.id}: ${s.color.name} (Size: ${s.size})`)
      .join("\n");
    const message = `Hi Teetales.pk!\nI want to order a ${selectedPack.label}.\n\nDetails:\n${shirtDetails}\n\nTotal Price: Rs. ${selectedPack.price.toLocaleString()}.00\nPlease confirm my order.`;
    const whatsappUrl = `https://wa.me/923431659033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="bg-bg-main min-h-screen pt-20">
      {/* Top Banner */}
      <div className="bg-brand-accent text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase text-center py-2 px-4 w-full">
        🎉 Build your Custom Pack & Save up to Rs. 4,890 - Free Shipping included
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-55 mb-8">
          Home &gt; Shop &gt; <span className="text-brand-primary">Plain T-Shirt - 170 GSM Combed Cotton</span>
        </div>

        {/* E-Commerce Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Image Showcase */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 md:sticky md:top-24">
            {/* Gallery Thumbnails */}
            <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {COLORS.slice(0, 5).map((color, i) => (
                <button
                  key={color.value}
                  onClick={() => setMainImage(color.image)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 border bg-white flex-shrink-0 transition-all ${
                    mainImage === color.image ? "border-brand-primary border-2 scale-105" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={color.image}
                    alt={color.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback image source if local fails
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200`;
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Main Preview Image */}
            <div className="flex-1 order-1 md:order-2 bg-white border border-gray-100 aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
              <img
                src={mainImage}
                alt="Selected Color Preview"
                className="w-full h-full object-cover transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800`;
                }}
              />
            </div>
          </div>

          {/* RIGHT: Selection Controls */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-brand-primary mb-2">
                Plain T-Shirt - 170 GSM Combed Cotton
              </h1>
              
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-brand-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-primary/60 uppercase tracking-widest">
                  4.8 · 248 Reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-black text-brand-primary">
                  Rs. {selectedPack.price.toLocaleString()}.00
                </span>
                {selectedPack.size > 1 && (
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-3 py-1 rounded-full">
                    Just Rs. {Math.round(selectedPack.price / selectedPack.size)} a shirt
                  </span>
                )}
              </div>

              {/* Urgency Badge */}
              <div className="bg-red-50 text-red-600 border border-red-100 text-xs font-bold px-4 py-3 rounded-lg flex items-center gap-2 animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Hurry! Only 13 left in stock. Order now before it's gone!
              </div>
            </div>

            <hr className="border-brand-primary/10" />

            {/* 1. Choose Pack Size */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
                  1. Select Pack Size
                </h3>
                {selectedPack.save !== "0" && (
                  <span className="text-[10px] text-green-600 font-extrabold uppercase tracking-widest">
                    You Save {selectedPack.save}
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {PACK_OPTIONS.map((option) => (
                  <button
                    key={option.size}
                    onClick={() => setSelectedPack(option)}
                    className={`flex items-center justify-between p-4 border rounded-xl text-left transition-all ${
                      selectedPack.size === option.size
                        ? "border-brand-primary bg-white ring-2 ring-brand-primary/5 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedPack.size === option.size ? "border-brand-primary bg-brand-primary" : "border-gray-300"
                      }`}>
                        {selectedPack.size === option.size && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <span className="font-extrabold text-xs uppercase tracking-wider block text-brand-primary">
                          {option.label}
                        </span>
                        {option.badge && (
                          <span className="text-[8px] bg-brand-primary text-white font-black px-2 py-0.5 rounded tracking-widest mt-1 inline-block">
                            {option.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-xs block text-brand-primary">
                        Rs. {option.price.toLocaleString()}
                      </span>
                      {option.size > 1 && (
                        <span className="text-[9px] text-brand-accent font-bold uppercase tracking-wider">
                          Rs. {Math.round(option.price / option.size)}/shirt
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Choose General Size */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
                  2. Choose General Size
                </h3>
                <a href="#size-guide" className="text-[10px] text-brand-accent font-extrabold uppercase tracking-widest underline">
                  Size Guide
                </a>
              </div>
              <div className="flex gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setGlobalSize(size)}
                    className={`flex-1 py-3 border text-xs font-black uppercase tracking-widest transition-all ${
                      globalSize === size
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-gray-200 hover:border-gray-400 bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Build Your Pack Colors */}
            <div className="space-y-5 bg-bg-alt/30 p-5 rounded-2xl border border-brand-primary/5">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
                3. Customize Your {selectedPack.size} Shirts
              </h3>
              
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {shirts.map((shirt) => (
                  <div key={shirt.id} className="bg-white p-4 border border-brand-primary/5 rounded-xl shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-12 bg-gray-50 border border-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img src={shirt.color.image} alt={shirt.color.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <span className="font-extrabold text-[11px] uppercase tracking-widest text-brand-primary block">
                            Shirt {shirt.id}
                          </span>
                          <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider">
                            Color: {shirt.color.name}
                          </span>
                        </div>
                      </div>
                      {/* Individual Size Override */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-50">Size:</span>
                        <select
                          value={shirt.size}
                          onChange={(e) => updateShirtSize(shirt.id, e.target.value)}
                          className="bg-bg-main border border-gray-200 text-xs font-bold uppercase rounded px-2 py-1 focus:outline-none focus:border-brand-primary"
                        >
                          {SIZES.map((sz) => (
                            <option key={sz} value={sz}>{sz}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Color Swatch Selector for this shirt */}
                    <div className="flex flex-wrap gap-2 pt-1 border-t border-gray-100">
                      {COLORS.map((col) => (
                        <button
                          key={col.value}
                          onClick={() => updateShirtColor(shirt.id, col)}
                          className={`w-7 h-7 rounded-full border transition-all p-0.5 ${
                            shirt.color.value === col.value ? "border-brand-primary scale-110 ring-2 ring-brand-primary/10" : "border-transparent"
                          }`}
                          title={col.name}
                        >
                          <div className="w-full h-full rounded-full border border-gray-200" style={{ backgroundColor: col.hex }} />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total & Action Buttons */}
            <div className="pt-4 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase font-extrabold tracking-widest opacity-60">Total Selection</span>
                <span className="font-black text-xl text-brand-primary">
                  Rs. {selectedPack.price.toLocaleString()}.00
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-white border border-brand-primary text-brand-primary font-bold text-xs uppercase tracking-widest hover:bg-brand-primary/5 transition-all flex items-center justify-center gap-2 rounded-xl"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {addedToCart ? "Added!" : "Add Pack to Cart"}
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 py-4 bg-brand-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 rounded-xl"
                >
                  <MessageCircle className="w-4 h-4 text-brand-accent fill-brand-accent" />
                  Order on WhatsApp
                </button>
              </div>

              <p className="text-[10px] text-center text-brand-primary/50 font-bold uppercase tracking-widest">
                📦 Free delivery & Easy 7-day returns/exchanges
              </p>
            </div>

          </div>
        </div>

        {/* Badges Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-t border-b border-brand-primary/10 mt-20">
          {[
            { icon: Shield, title: "Premium Fabric", desc: "100% Combed Cotton" },
            { icon: Truck, title: "Free Shipping", desc: "For packs & above Rs. 4,000" },
            { icon: RotateCcw, title: "Easy Returns", desc: "7-Day No-Hassle Policy" },
            { icon: Check, title: "Trustability", desc: "10,000+ Satisfied Customers" },
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-bg-alt flex items-center justify-center rounded-full text-brand-accent">
                <badge.icon className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-brand-primary">{badge.title}</h4>
              <p className="text-[11px] text-brand-primary/60 font-semibold uppercase tracking-wider">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* COMPARISON: Teetales.pk vs The Rest */}
        <section className="py-20 border-b border-brand-primary/10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-brand-primary mb-2">
              Teetales.pk vs. The Rest
            </h2>
            <p className="text-xs uppercase font-extrabold tracking-widest text-brand-accent">See why we stand out</p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden border border-brand-primary/10 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-alt border-b border-brand-primary/10 text-xs font-black uppercase tracking-widest">
                  <th className="p-4 sm:p-5">Features</th>
                  <th className="p-4 sm:p-5 text-brand-accent">Teetales.pk</th>
                  <th className="p-4 sm:p-5 opacity-60">Other Brands</th>
                </tr>
              </thead>
              <tbody className="text-xs font-bold uppercase tracking-wider divide-y divide-gray-100">
                {[
                  { feature: "Fabric Quality", us: "100% Combed Cotton (170 GSM)", them: "Polyester-cotton blends" },
                  { feature: "Color Options", us: "10+ Solid Colours", them: "3-4 standard colors" },
                  { feature: "Stitching", us: "Reinforced 11-12 SPI", them: "Standard single stitch" },
                  { feature: "Return Policy", us: "7-Day Free Exchange/Return", them: "No returns, exchanges only" },
                  { feature: "Sizing", us: "Custom Sized for Pakistan", them: "Unreliable global conversions" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-extrabold text-brand-primary">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-brand-accent font-black flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> {row.us}
                    </td>
                    <td className="p-4 sm:p-5 text-brand-primary/50">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ACCORDION INFO TABS */}
        <section id="size-guide" className="py-20 border-b border-brand-primary/10">
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                id: "details",
                title: "Product Specifications & Fabric Info",
                content: (
                  <div className="space-y-4 text-xs leading-relaxed text-brand-primary/80">
                    <p className="font-extrabold text-brand-primary text-sm">Unisex Regular Fit T-Shirt – 170 GSM Lightweight 100% Combed Cotton Tee</p>
                    <p>Designed for everyday comfort and versatility, this premium unisex regular fit t-shirt is crafted from 100% combed cotton and finished in a lightweight 170 GSM fabric. Soft, breathable and comfortable, it is ideal for daily wear throughout the year.</p>
                    <p>Classic regular fit with a structured shoulder line and clean, timeless silhouette. Sized specifically for Pakistani body profiles.</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>100% Combed Cotton</li>
                      <li>Lightweight 170 GSM Fabric</li>
                      <li>High stitch density (11-12 SPI)</li>
                      <li>Professional garment finishing</li>
                    </ul>
                  </div>
                ),
              },
              {
                id: "size",
                title: "Size Guide Chart",
                content: (
                  <div className="space-y-4">
                    <p className="text-xs text-brand-primary/70">Please check this size chart carefully before selecting your size.</p>
                    <table className="w-full border-collapse border border-gray-200 text-xs text-center font-bold uppercase tracking-wider">
                      <thead>
                        <tr className="bg-bg-alt text-brand-primary font-black">
                          <th className="border border-gray-200 p-2.5">Size</th>
                          <th className="border border-gray-200 p-2.5">Chest (Inches)</th>
                          <th className="border border-gray-200 p-2.5">Length (Inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { sz: "S", chest: "38", len: "26.5" },
                          { sz: "M", chest: "40", len: "27.5" },
                          { sz: "L", chest: "42", len: "28.5" },
                          { sz: "XL", chest: "44", len: "29.5" },
                          { sz: "XXL", chest: "46", len: "30.5" },
                        ].map((row) => (
                          <tr key={row.sz} className="hover:bg-gray-50">
                            <td className="border border-gray-200 p-2.5 font-black">{row.sz}</td>
                            <td className="border border-gray-200 p-2.5 text-brand-primary/70">{row.chest}</td>
                            <td className="border border-gray-200 p-2.5 text-brand-primary/70">{row.len}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ),
              },
              {
                id: "delivery",
                title: "Delivery & Cod Details",
                content: (
                  <div className="text-xs text-brand-primary/80 space-y-2">
                    <p>📦 Delivery time is 2-4 working days across Pakistan.</p>
                    <p>💵 Cash on Delivery (COD) is fully available for all pack purchases.</p>
                    <p>🚚 Free shipping applies automatically to all Pack purchases!</p>
                  </div>
                ),
              },
            ].map((tab) => (
              <div key={tab.id} className="border border-brand-primary/10 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                  className="w-full p-5 flex items-center justify-between text-left font-black text-xs uppercase tracking-widest text-brand-primary hover:bg-gray-50 transition-colors"
                >
                  {tab.title}
                  {activeTab === tab.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {activeTab === tab.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-5 border-t border-gray-100 bg-white">
                        {tab.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Grid Section */}
        <section className="py-20 text-center">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-brand-primary mb-2">
              Worn on Karachi & Lahore Streets
            </h2>
            <p className="text-xs uppercase font-extrabold tracking-widest text-brand-accent">Tag us on Instagram @Teetales.pk</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="aspect-square bg-gray-100 overflow-hidden rounded-xl group relative border border-brand-primary/5">
                <img
                  src={`/teetales-${num}.png`}
                  alt={`Street Style Model ${num}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=300`;
                  }}
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
