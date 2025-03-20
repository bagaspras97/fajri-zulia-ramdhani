import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

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
