import { Banknote, Truck, RotateCcw, Clock } from "lucide-react";

export default function InfoBar() {
  return (
    <div className="bg-bg-dark text-white py-4 border-b border-brand-primary/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center justify-items-center">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Banknote className="w-5 h-5 opacity-80" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Cash on Delivery
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Truck className="w-5 h-5 opacity-80" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Free delivery
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <RotateCcw className="w-5 h-5 opacity-80" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              7-day returns
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Clock className="w-5 h-5 opacity-80" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              2-6 day delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
