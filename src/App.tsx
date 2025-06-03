import HeroSection from "./templates/hero-section";
import BannerWhyChooseUs from "./templates/banner-why-choose-us";
import WhyChooseUsSection from "./templates/why-choose-us-section";
import TopDestinationSection from "./templates/top-destination-section";
import SpecialPackageSection from "./templates/special-package-section";
import Footer from "./templates/footer";

export default function App() {

  return (
    <div className="mt-3 md:mt-5">
      <HeroSection />
      <BannerWhyChooseUs />
      <WhyChooseUsSection />
      <TopDestinationSection />
      <SpecialPackageSection />
      <Footer />
    </div>
  )
}
