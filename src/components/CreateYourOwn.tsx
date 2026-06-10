import { Paintbrush, Upload, Type, Shirt } from "lucide-react";
import { motion } from "motion/react";

export default function CreateYourOwn() {
  return (
    <div
      id="create"
      className="bg-bg-dark text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10"
    >
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-accent opacity-5 mix-blend-screen"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[11px] uppercase font-bold tracking-[0.4em] text-brand-accent mb-4">
              You Are The Creator
            </h2>
            <h3 className="text-4xl font-extrabold leading-[0.9] tracking-tighter text-white sm:text-5xl lg:text-6xl uppercase mb-6">
              Create Your Own Story
            </h3>
            <p className="text-sm opacity-50 leading-relaxed italic max-w-md mb-8">
              Don't just wear our stories—wear your own. Our interactive custom
              design studio lets you design premium customized apparel for
              yourself, your team, or as a perfect personalized gift.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Upload,
                  title: "Upload Artwork",
                  desc: "Photos, logos, or custom graphics",
                },
                {
                  icon: Type,
                  title: "Add Text",
                  desc: "Your favorite quotes, names, or inside jokes",
                },
                {
                  icon: Shirt,
                  title: "Choose Garment",
                  desc: "Oversized, regular fit, or hoodies",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest">
                      {item.title}
                    </h4>
                    <p className="text-sm opacity-50 italic mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent px-10 py-4 text-xs font-extrabold uppercase tracking-widest text-black transition-all hover:bg-white"
            >
              <Paintbrush className="w-4 h-4" />
              Open Design Studio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-bg-card border border-white/5 relative">
              {/* Product Placeholder for Customizer Mockup */}
              <img
                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Custom T-Shirt Design"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Mockup UI Elements */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-black border border-white mt-1 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-white border border-white/20 mt-1 cursor-pointer hover:opacity-80"></div>
                  <div className="w-8 h-8 bg-blue-500 border border-transparent mt-1 cursor-pointer"></div>
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-brand-accent px-3 py-2 border border-brand-accent/20 bg-brand-accent/10">
                  SIZE: L
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-brand-accent text-black text-[10px] font-extrabold uppercase tracking-widest py-3 px-6 shadow-xl">
              No Minimums!
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
