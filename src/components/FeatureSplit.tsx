import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import skullTshirt from "../assets/images/skull_tshirt_1781067742086.png";

export default function FeatureSplit() {
  return (
    <>
      <section className="bg-[#EAE6DB] border-b border-brand-primary/10 flex flex-col md:flex-row">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] bg-brand-primary">
          <img
            src={skullTshirt}
            alt="Close up of fabric texture"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-bg-alt">
          <div className="max-w-md w-full">
            <h3 className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-brand-accent mb-6">
              The Fabric
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-brand-primary mb-6">
              Thick where it counts.
            </h2>
            <p className="text-brand-primary/70 leading-relaxed font-medium text-base sm:text-lg mb-10">
              170 GSM combed cotton — heavier than a bazaar tee, soft on the
              skin, holds its shape wash after wash. We tell you the exact
              weight, because quality should be a fact, not a claim.
            </p>
            <a
              href="#fabric"
              className="inline-flex items-center justify-center gap-2 border border-brand-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary transition-all hover:bg-brand-primary/5"
            >
              Feel the difference <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3ED] border-b border-brand-primary/10 flex flex-col md:flex-row">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-bg-main order-2 md:order-1">
          <div className="max-w-md w-full">
            <h3 className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-brand-accent mb-6">
              The Fit
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-brand-primary mb-6">
              Cut for how you're actually built.
            </h2>
            <p className="text-brand-primary/70 leading-relaxed font-medium text-base sm:text-lg mb-10">
              Sized for Pakistani frames — not a Western chart converted to
              rupees. Clean lines, easy drape, true to size.
            </p>
            <a
              href="/sizeguide.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary transition-all hover:bg-brand-primary/5"
            >
              See the size guide <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] bg-brand-primary order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Man wearing a well-fitted t-shirt"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}
