import AboutSection from "./components/About";
import AwardsGallerySection from "./components/AwardsGallery";
import ContactSection from "./components/Contact";
import HeroSection from "./components/Hero";
import PortfolioSection from "./components/Portfolio";
import QuoteSection from "./components/Quote";
// import Work from "./components/Work";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AwardsGallerySection />
      <PortfolioSection />
      {/* <Work /> */}
      <QuoteSection />
      <ContactSection />
    </>
  );
}

export default App;
