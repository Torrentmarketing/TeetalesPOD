import { ShoppingBag, Menu, User, Search, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-bg-dark text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase text-center py-2 sm:py-2.5 px-4 w-full">
        FREE Delivery on Every Order - 7-Day Return & Exchange Policy - COD
        Available
      </div>
      <header className="sticky top-0 z-50 w-full bg-bg-main border-b border-brand-primary/5 transition-colors">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden flex-1">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -ml-2 text-brand-primary"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo (Left on Desktop, Center on Mobile) */}
          <div className="flex items-center justify-center lg:justify-start lg:w-48">
            <a
              href="/"
              className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tighter text-brand-primary flex items-center relative"
            >
              <span className="relative z-10 flex items-center">
                Tee<span className="opacity-0 w-2"></span>Tales
                <span className="absolute left-1/2 -ml-[0.6rem] top-1/2 -translate-y-1/2 text-5xl font-serif font-medium opacity-10 -z-10 tracking-normal">
                  TT
                </span>
              </span>
            </a>
          </div>

          {/* Navigation (Center) */}
          <div className="flex-1 lg:flex lg:items-center lg:justify-center hidden">
            <nav className="flex gap-8 text-xs font-bold tracking-widest uppercase text-brand-primary">
              <a href="#" className="hover:opacity-60 transition-opacity">
                Home
              </a>
              <a href="#about" className="hover:opacity-60 transition-opacity">
                About
              </a>
              <a href="https://wa.me/923431659033?text=Hi,%20I'd%20like%20to%20know%20more%20about%20the%20TeeTales%20referral%20program!" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                Referal
              </a>
              <a href="/sizeguide.jpg" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                Size Guide
              </a>
              <a href="#packs" className="hover:opacity-60 transition-opacity">
                Packs
              </a>
              <a href="/New folder/library" className="hover:opacity-60 transition-opacity">
                T Shirts
              </a>
            </nav>
          </div>

          {/* Icons (Right) */}
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4 lg:w-48">
            <button className="hidden sm:block p-2 text-brand-primary hover:opacity-60 transition-opacity">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden sm:block p-2 text-brand-primary hover:opacity-60 transition-opacity">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 text-brand-primary hover:opacity-60 transition-opacity">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[9px] font-bold text-white">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-bg-main pb-12 shadow-xl border-r border-brand-primary/10">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="relative -m-2 inline-flex items-center justify-center p-2 text-brand-primary opacity-60 hover:opacity-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="space-y-6 px-4 py-6 text-xs uppercase font-bold tracking-widest text-brand-primary">
                <div className="flow-root">
                  <a href="#" onClick={() => setIsMenuOpen(false)} className="-m-2 block p-2 hover:opacity-60">
                    Home
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#about" onClick={() => setIsMenuOpen(false)} className="-m-2 block p-2 hover:opacity-60">
                    About
                  </a>
                </div>
                <div className="flow-root">
                  <a href="https://wa.me/923431659033?text=Hi,%20I'd%20like%20to%20know%20more%20about%20the%20TeeTales%20referral%20program!" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="-m-2 block p-2 hover:opacity-60">
                    Referal
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/sizeguide.jpg" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="-m-2 block p-2 hover:opacity-60">
                    Size Guide
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#packs" onClick={() => setIsMenuOpen(false)} className="-m-2 block p-2 hover:opacity-60">
                    Packs
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/New folder/library" onClick={() => setIsMenuOpen(false)} className="-m-2 block p-2 hover:opacity-60">
                    T Shirts
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
