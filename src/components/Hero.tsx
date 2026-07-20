import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero_teetales_1781068324924.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-brand-primary/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Man printing t-shirts"
          className="w-full h-full object-cover object-center lg:object-[center_right_10%] xl:object-[center_right_20%]"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/80 to-transparent md:w-2/3"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-brand-accent mb-6"
        >
          <span>PREMIUM BASICS · MADE FOR PAKISTAN</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter text-brand-primary max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Wear less. Look <br /> TeeTales.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-base sm:text-lg text-brand-primary/80 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          170 GSM combed cotton, cut for Pakistani builds. Buy in packs — the
          more you grab, the less each shirt costs.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/build-pack"
            className="group flex items-center justify-center gap-2 bg-brand-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-primary/80 w-full sm:w-auto text-center"
          >
            Shop the Pack of 5
          </Link>
          <Link
            to="/build-pack"
            className="group flex items-center justify-center gap-2 border border-brand-primary bg-transparent px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary transition-all hover:bg-brand-primary/5 w-full sm:w-auto text-center"
          >
            All Packs{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
