import profile from "../assets/profile1.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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
      <Navbar />

      <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-purple-50 overflow-hidden pt-20 font-jakarta flex flex-col">
        {/* Elegant abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#edd8f3] to-[#d9bfe2] rounded-bl-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#edd8f3] to-[#d9bfe2] rounded-tr-full opacity-30"></div>
        <div className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-tr from-[#edd8f3] to-[#d9bfe2] rounded-full opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-tl from-[#edd8f3] to-[#d9bfe2] rounded-full opacity-20"></div>
        
        <div className="flex-grow flex flex-col items-center justify-center z-10 px-6">
          {/* Profile Image - Now at the top */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-[#caa9d8] to-[#B284BE] blur-lg opacity-20"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#caa9d8] to-[#B284BE] opacity-20"></div>
              <img
                src={profile}
                alt="Fajri Zulia Ramdhani"
                className="relative w-48 h-48 md:w-68 md:h-68 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
              >
                <div className="bg-[#B284BE] text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
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
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Now centered */}
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight font-playfair">
              Fajri Zulia Ramdhani
            </h1>
            <div className="h-12 mb-6 flex justify-center">
              <motion.div
                className="flex items-center"
                key={currentProfession}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-8 h-0.5 bg-[#B284BE] mr-3"></div>
                <p className="text-xl font-medium text-[#B284BE] font-jakarta italic">
                  {professions[currentProfession]}
                </p>
                <div className="w-8 h-0.5 bg-[#B284BE] ml-3"></div>
              </motion.div>
            </div>
            {/* <p className="text-lg text-gray-600 mb-10 mx-auto max-w-lg font-jakarta leading-relaxed">
              Turning complex ideas into clear, compelling narratives through
              writing, teaching, and project leadership.
            </p> */}
          </motion.div>
        </div>
        
        {/* CTA button at bottom center */}
        <motion.div 
          className="flex justify-center mb-28 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            to="/profile"
            className="px-10 py-4 bg-[#B284BE] text-white rounded-full font-medium hover:bg-[#a575b2] transition-all flex items-center justify-center shadow-lg hover:shadow-xl group"
          >
            <span>View My Profile</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
          </Link>
        </motion.div>

        {/* Social links - positioned at the center bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 z-10">
          <motion.a
            href="https://www.tiktok.com/@fajrizuliar"
            target="_blank"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#B284BE] hover:bg-[#f9f5fb] hover:text-[#a575b2] transition-all hover:shadow-lg"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/fajrizuliaramdhani"
            target="_blank"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#B284BE] hover:bg-[#f9f5fb] hover:text-[#a575b2] transition-all hover:shadow-lg"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/fajri-zulia-ramdhani-b89460149"
            target="_blank"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#B284BE] hover:bg-[#f9f5fb] hover:text-[#a575b2] transition-all hover:shadow-lg"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
            </svg>
          </motion.a>
        </div>
      </section>
    </>
  );
}