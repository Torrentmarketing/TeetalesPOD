
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, Truck, Palette, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DESIGNS } from '../constants';
import { GradientText } from '../components/ui/gradient-text';
import { FeatureCarousel, type ImageSet } from '../components/ui/animated-feature-carousel';
import { Testimonials } from '../components/ui/testimonials-columns-1';
import GradientMenu from '../components/ui/gradient-menu';
import { ModalPricing } from '../components/ui/modal-pricing';

export const Home = () => {
  const trendingDesigns = DESIGNS.slice(0, 4);

  const carouselImages: ImageSet = {
    alt: "Customization Process",
    step1img1: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    step1img2: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    step2img1: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800",
    step2img2: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    step3img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800",
    step4img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
  };

  return (
    <div className="pt-28 bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Hero"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">
              <GradientText className="bg-transparent">New Collection</GradientText>
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest uppercase mb-8 opacity-80">Spring Summer 2026</p>
          </motion.div>
          <div className="flex gap-4">
            <Link to="/library" className="px-10 py-3 border border-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Men
            </Link>
            <Link to="/library" className="px-10 py-3 border border-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Women
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 text-white text-[11px] uppercase tracking-[0.2em]">
          Discover the new collection: artisanal passion since 1974
        </div>
      </section>

      {/* Fit Guide Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">The TeeTales Fit</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Our <strong>extra slim</strong> fit features a tapered line, a more comfortable chest and a narrow hem. 
              Available in premium combed cotton and heavy-weight fleece for those seeking modern proportions.
            </p>
            <Link to="/customize" className="inline-block px-8 py-3 border border-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
              Discover the Model
            </Link>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-400">Men</p>
              <div className="space-y-8">
                {['Milano', 'New York', 'Torino', 'Chile'].map(fit => (
                  <div key={fit} className="group cursor-pointer">
                    <div className="w-16 h-24 mx-auto mb-2 bg-gray-50 rounded border border-gray-100 group-hover:border-accent transition-colors" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">{fit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-400">Donna</p>
              <div className="space-y-8">
                {['Carrot', 'Easy', 'Chile', 'Malibu'].map(fit => (
                  <div key={fit} className="group cursor-pointer">
                    <div className="w-16 h-24 mx-auto mb-2 bg-gray-50 rounded border border-gray-100 group-hover:border-accent transition-colors" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">{fit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section (Carousel) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Our Process</h2>
            <h3 className="text-3xl font-bold uppercase tracking-tighter">How We Craft Your Tale</h3>
          </div>
          <FeatureCarousel image={carouselImages} />
        </div>
      </section>

      {/* Editorial Shoot */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-12">Editorial Shoot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Torino City', price: '$345.00', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
              { title: 'Livia', price: '$255.00', img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800' },
              { title: 'M74Yacket', price: '$545.00', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800' },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  <div className="hotspot top-1/2 left-1/3" />
                  <div className="hotspot top-1/4 left-2/3" />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest">{item.title}</h3>
                <p className="text-[10px] text-gray-400 mt-1">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-bold uppercase tracking-tighter">Discover the New Collection</h2>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
              <button className="hover:text-accent">Next</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trendingDesigns.map((design) => (
              <Link key={design.id} to={`/customize?design=${design.id}`} className="group">
                <div className="aspect-[3/4] bg-white overflow-hidden mb-4 border border-gray-100 group-hover:border-accent/20 transition-colors">
                  <img src={design.image} alt={design.name} className="w-full h-full object-contain p-12 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest">{design.name}</h3>
                <p className="text-[10px] text-gray-400 mt-1">From $45.00</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Shopper */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover"
              alt="Personal Shopper"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Personal Shopper</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              With our Personal Shopper service, you can discover the collections through a dedicated video call. 
              Receive tailored advice to help you choose the perfect pieces and optimize your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://wa.me/923431659033" 
                className="inline-block px-8 py-3 border border-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center"
              >
                Book on WhatsApp
              </a>
              <ModalPricing />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Menu */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <GradientMenu />
      </div>
    </div>
  );
};
