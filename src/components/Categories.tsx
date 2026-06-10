import { motion } from "motion/react";

const values = [
  {
    title: "170 GSM cotton",
    description:
      "Heavier than a bazaar tee, soft on the skin, holds its shape wash after wash. We tell you the exact weight, stated — not a vague claim.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pakistani fit",
    description:
      "Cut for local frames, not a Western chart converted to rupees. Clean lines, easy drape, true to size.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Built to last",
    description:
      "Reinforced collar, clean stitching, colour that survives the wash. Buy once, reach for it daily.",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function Categories() {
  return (
    <div className="bg-bg-alt py-24 sm:py-32 border-b border-brand-primary/10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-4">
            Why TeeTales
          </h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-brand-primary mb-2">
            Done right, not loud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mb-6 bg-brand-primary border border-brand-primary/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-black text-brand-primary mb-3 tracking-tighter">
                {item.title}
              </h3>
              <p className="text-sm text-brand-primary/70 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
