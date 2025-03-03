import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import the Navbar component

export default function HeroSection() {
  const professions = [
    "Writer",
    "Lecturer",
    "Content Writer",
    "Project Manager",
  ];
  const [currentProfession, setCurrentProfession] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Add the Navbar component here */}
      <Navbar />

      <section className="relative w-full min-h-screen bg-gradient-to-br from-white to-[#f9f5fb] overflow-hidden pt-24 font-inter">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#edd8f3] to-[#d9bfe2] rounded-bl-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#edd8f3] to-[#d9bfe2] rounded-tr-full opacity-40"></div>
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 py-16">
          {/* Content */}
          <motion.div
            className="md:w-1/2 md:pr-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight font-poppins">
              Fajri Zulia Ramdhani
            </h1>
            <div className="h-12 mb-6">
              <motion.div
                className="flex items-center"
                key={currentProfession}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-0.5 bg-[#B284BE] mr-3"></div>
                <p className="text-xl font-medium text-[#B284BE] font-poppins">
                  {professions[currentProfession]}
                </p>
              </motion.div>
            </div>
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Turning complex ideas into clear, compelling narratives through
              writing, teaching, and project leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-poppins">
              <a
                href="#about"
                className="px-8 py-3 border border-[#B284BE] text-[#B284BE] rounded-lg font-medium hover:bg-[#f9f5fb] transition-all flex items-center justify-center"
              >
                <span>Portfolio</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#caa9d8] to-[#B284BE] blur-md opacity-20"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#caa9d8] to-[#B284BE] opacity-30"></div>
              <img
                src={profile}
                alt="Fajri Zulia Ramdhani"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-[#B284BE] text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Social links */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#B284BE] hover:bg-[#f9f5fb] transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#B284BE] hover:bg-[#f9f5fb] transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#B284BE] hover:bg-[#f9f5fb] transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}