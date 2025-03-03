import AboutSection from "./components/About";
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
      <PortfolioSection />
      {/* <Work /> */}
      <QuoteSection />
      <ContactSection />
    </>
  );
}

export default App;
