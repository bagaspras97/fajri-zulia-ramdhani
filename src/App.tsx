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
      <div className="w-full py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 opacity-60"
            ></div>
          ))}
        </div>
      </div>
      <PortfolioSection />
      <AwardsGallerySection />
      {/* <Work /> */}
      <QuoteSection />
      <ContactSection />
    </>
  );
}

export default App;
