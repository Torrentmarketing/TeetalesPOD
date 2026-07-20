import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PackBuilder from "./pages/PackBuilder";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-main text-brand-primary selection:bg-brand-accent selection:text-white font-sans flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/build-pack" element={<PackBuilder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
