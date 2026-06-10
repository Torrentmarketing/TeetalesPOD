import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoBar from "./components/InfoBar";
import FeatureSplit from "./components/FeatureSplit";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerStories from "./components/CustomerStories";
import Ticker from "./components/Ticker";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main text-brand-primary selection:bg-brand-accent selection:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <FeatureSplit />
        <FeaturedProducts />
        <Categories />
        <WhyChooseUs />
        <CustomerStories />
        <Ticker />
      </main>
      <Footer />
    </div>
  );
}
