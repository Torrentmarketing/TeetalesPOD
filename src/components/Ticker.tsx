import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

const shoutouts = [
  "HAMZA SHARED A CUSTOM ANNIVERSARY STORY",
  "ALI ACQUIRED 'THE HUSTLE' EDITION",
  "SARA SECURED VOL. 02 OVERSIZED FIT",
  "NEW DROP 'SABR & SHUKR' SELLING FAST",
  "ZAINAB CRAFTED A MOTIVATION SERIES PIECE",
  "USMAN AUTHORED A NEW LEGEND",
  "COMMUNITY OVER 10,000 STORIES STRONG",
];

export default function Ticker() {
  return (
    <div className="w-full overflow-hidden bg-bg-dark border-b border-white/10 py-5 flex items-center relative z-20">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {/* Render multiple sets to ensure it spans the screen and allows smooth continuous looping */}
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center shrink-0">
            {shoutouts.map((text, i) => (
              <div
                key={`${arrayIndex}-${i}`}
                className="flex items-center shrink-0"
              >
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-accent px-8">
                  {text}
                </span>
                <Sparkles className="w-3 h-3 text-brand-accent opacity-40 shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
