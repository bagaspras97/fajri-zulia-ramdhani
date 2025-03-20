import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup mobile menu ketika path berubah
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  // Page navigation links
  const navLinks = [
    { id: 1, name: "Profile", isButton: false, path: "/profile" },
    { id: 2, name: "Portfolio", isButton: false, path: "/portfolio" },
    { id: 3, name: "Gallery", isButton: false, path: "/gallery" },
    { id: 4, name: "Get in Touch", isButton: true, path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-[#B284BE] cursor-pointer"
        >
          FZR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) =>
            link.isButton ? (
              <Link
                to={link.path}
                key={link.id}
                className="px-5 py-2 bg-[#B284BE] rounded-lg text-white font-medium hover:bg-[#9d6bab] transition-all shadow-lg shadow-[#B284BE]/20 cursor-pointer"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                to={link.path}
                key={link.id}
                className={`${
                  currentPath === link.path
                    ? "text-[#B284BE] font-semibold"
                    : "text-gray-700"
                } hover:text-[#B284BE] font-medium transition-colors cursor-pointer`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none relative z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            <svg
              className={`w-6 h-6 transition-opacity duration-300 absolute ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <svg
              className={`w-6 h-6 transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-white px-6 py-4 shadow-lg absolute w-full ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) =>
            link.isButton ? (
              <Link
                to={link.path}
                key={link.id}
                className="px-5 py-2 bg-[#B284BE] rounded-lg text-white font-medium hover:bg-[#9d6bab] transition-all shadow-lg shadow-[#B284BE]/20 inline-block text-center cursor-pointer"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                to={link.path}
                key={link.id}
                className={`${
                  currentPath === link.path
                    ? "text-[#B284BE] font-semibold"
                    : "text-gray-700"
                } hover:text-[#B284BE] font-medium transition-colors py-2 cursor-pointer`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </motion.div>
    </nav>
  );
}
