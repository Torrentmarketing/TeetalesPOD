import { motion } from "motion/react";
import packOf5Tshirts from "../assets/images/pack_of_5_tshirts_1781068125568.png";

const packs = [
  {
    id: 1,
    name: "Pack of 7 Plain T Shirts",
    perShirt: "Rs.686 a shirt",
    price: "Rs.4,799.00",
    oldPrice: "Rs.8,043",
    badge: "WARDROBE PACK",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Pack of 10 Plain T Shirts",
    perShirt: "Rs.660 a shirt",
    price: "Rs.6,599.00",
    oldPrice: "Rs.11,490",
    badge: "FAMILY PACK",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Pack of 3 Plain T Shirts",
    perShirt: "Rs.766 a shirt",
    price: "Rs.2,299.00",
    oldPrice: "Rs.3,447",
    badge: "STARTER",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <div
      id="packs"
      className="bg-bg-alt py-24 sm:py-32 border-b border-brand-primary/10"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-4">
            The Packs
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-brand-primary mb-2">
            The more you grab, the less each shirt costs.
          </p>
        </div>

        {/* Large Featured Pack */}
        <div className="bg-bg-card rounded-2xl overflow-hidden shadow-sm border border-brand-primary/5 flex flex-col md:flex-row mb-8 w-full group cursor-pointer hover:shadow-md transition-shadow">
          <div className="w-full md:w-3/5 lg:w-2/3 h-[300px] sm:h-[400px] md:h-[500px]">
            <img
              src={packOf5Tshirts}
              alt="Pack of 5 Plain T Shirts"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/3 p-8 sm:p-12 flex flex-col justify-center relative">
            <div className="absolute top-8 left-8 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
              ★ BEST SELLER - 1 IN 2 BUYERS
            </div>
            <h3 className="text-3xl font-black tracking-tighter text-brand-primary mt-8 mb-2">
              Pack of 5 Plain T Shirts
            </h3>
            <p className="text-xs text-brand-accent font-bold mb-4">
              Just Rs.710 a shirt
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm text-brand-primary/50 line-through">
                Rs.5,745
              </span>
              <span className="text-xl font-bold text-brand-primary">
                Rs.3,549.00
              </span>
            </div>
            <button className="bg-brand-primary text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full w-full hover:bg-brand-primary/80 transition-colors">
              Build your Pack of 5 &rarr;
            </button>
          </div>
        </div>

        {/* Smaller Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className="bg-bg-card rounded-2xl overflow-hidden shadow-sm border border-brand-primary/5 group cursor-pointer hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white border border-brand-primary/10 text-brand-primary text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-sm">
                  {pack.badge}
                </div>
                <img
                  src={pack.image}
                  alt={pack.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-black tracking-tighter text-brand-primary mb-1">
                  {pack.name}
                </h3>
                <p className="text-brand-accent text-xs font-bold mb-4">
                  {pack.perShirt}
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-lg font-bold text-brand-primary">
                    {pack.price}
                  </span>
                  <span className="text-xs text-brand-primary/50 line-through">
                    {pack.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
