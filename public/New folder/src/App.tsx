import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, WhatsAppButton } from './components/Navigation';
import { Home } from './pages/Home';
import { Customizer } from './pages/Customizer';
import { Library } from './pages/Library';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text selection:bg-accent selection:text-background">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customize" element={<Customizer />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>

        <footer className="py-20 border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Agency</h4>
              <ul className="space-y-4 text-[11px] font-medium uppercase tracking-tighter">
                <li><a href="#" className="hover:text-accent">About Us</a></li>
                <li><a href="#" className="hover:text-accent">History</a></li>
                <li><a href="#" className="hover:text-accent">Contacts</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Buying Guide</h4>
              <ul className="space-y-4 text-[11px] font-medium uppercase tracking-tighter">
                <li><a href="#" className="hover:text-accent">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-accent">Shipping</a></li>
                <li><a href="#" className="hover:text-accent">Payments</a></li>
                <li><a href="#" className="hover:text-accent">Personal Shopper</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Privacy and Use</h4>
              <ul className="space-y-4 text-[11px] font-medium uppercase tracking-tighter">
                <li><a href="#" className="hover:text-accent">Privacy Infos</a></li>
                <li><a href="#" className="hover:text-accent">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Newsletter</h4>
              <p className="text-[11px] text-gray-500">Get 10% off your first order now</p>
              <div className="flex border-b border-black pb-2">
                <input type="email" placeholder="Email" className="bg-transparent text-[11px] outline-none flex-1" />
                <button className="text-[10px] font-bold uppercase tracking-widest">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-serif italic tracking-tighter">TeeTales</span>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              © 2026 TeeTales. P.IVA IT00155000458
            </p>
            <div className="flex space-x-4">
              {/* Payment Icons Placeholder */}
              <div className="w-8 h-5 bg-gray-100 rounded" />
              <div className="w-8 h-5 bg-gray-100 rounded" />
              <div className="w-8 h-5 bg-gray-100 rounded" />
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </div>
    </Router>
  );
}
