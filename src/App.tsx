import { useState, useEffect } from "react";
import AboutSection from "./components/About";
import AwardsGallerySection from "./components/AwardsGallery";
import ContactSection from "./components/Contact";
import CopyrightSection from "./components/Copyright";
import EducationSection from "./components/Education";
import HeroSection from "./components/Hero";
import PortfolioSection from "./components/Portfolio";
import QuoteSection from "./components/Quote";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [activePage, setActivePage] = useState(1);

  // Handle page navigation
  const navigateToPage = (pageNumber: number) => {
    setActivePage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update navbar to add page navigation
  useEffect(() => {
    // This effect is for any initialization needed when switching pages
  }, [activePage]);

  return (
    <>
      <Navbar activePage={activePage} onNavigate={navigateToPage} />

      <Outlet />
      
      {/* {activePage === 1 && (
        // Page 1
        <div id="page-1">
          <HeroSection />
        </div>
      )}

      {activePage === 2 && (
        // Page 2
        <div id="page-2">
          <AboutSection />
          <EducationSection />
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
        </div>
      )}

      {activePage === 3 && (
        // Page 3
        <div id="page-3">
          <PortfolioSection />
          <AwardsGallerySection />
          <QuoteSection />
          <ContactSection />
          <CopyrightSection />
        </div>
      )} */}
    </>
  );
}

export default App;