import { motion } from "motion/react";

const colors = [
  { name: "Black", hex: "#000000" },
  { name: "Army Green", hex: "#4b5320" },
  { name: "White", hex: "#ffffff" },
  { name: "Charcoal", hex: "#36454F" },
  { name: "Navy", hex: "#000080" },
  { name: "Hazel Grey", hex: "#8C92AC" },
  { name: "Maroon", hex: "#800000" },
  { name: "Brown", hex: "#964B00" },
  { name: "Royal Blue", hex: "#4169e1" },
  { name: "Pink", hex: "#FFC0CB" },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-bg-main py-24 sm:py-32 border-b border-brand-primary/10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-4">
            10 Colours
          </h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-brand-primary mb-6">
            Pick your palette.
          </p>
          <p className="text-brand-primary/70 leading-relaxed font-medium text-base sm:text-lg">
            Build any pack from these — mix freely.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-brand-primary/5 hover:border-brand-primary/20 cursor-pointer transition-colors"
            >
              <span
                className="w-5 h-5 rounded-full border border-black/10 flex-shrink-0"
                style={{ backgroundColor: color.hex }}
              ></span>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                {color.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
