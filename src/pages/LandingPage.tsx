import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import FeatureSplit from "../components/FeatureSplit";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerStories from "../components/CustomerStories";
import Ticker from "../components/Ticker";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <InfoBar />
      <FeatureSplit />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
      <CustomerStories />
      <Ticker />
    </>
  );
}
