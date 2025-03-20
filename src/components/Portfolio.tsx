import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { books } from "../data/books";
import { journals } from "../data/journals";
import { articles } from "../data/articles";

export default function PortfolioSection() {
  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  const [maxIndex, setMaxIndex] = useState(0);
  const carouselRef = useRef(null);

  // Tabs and filter states
  const [activeTab, setActiveTab] = useState("journals");

  // Handle responsive display
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setDisplayCount(3);
      } else if (width >= 768) {
        setDisplayCount(2);
      } else {
        setDisplayCount(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update maxIndex when display count changes
  useEffect(() => {
    setMaxIndex(Math.max(0, books.length - displayCount));
  }, [displayCount, books.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="portfolio"
      className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#f9f5fc] to-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF]">
              Portfolio & Works
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] mx-auto rounded-full mb-4"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of scientific works, books, and academic publications
            that I have produced throughout my professional journey.
          </p>
        </motion.div>

        {/* Books Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#B284BE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Buku
            </h3>
            <div className="flex space-x-3">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  currentIndex === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-[#B284BE] border border-[#B284BE] hover:bg-[#B284BE] hover:text-white shadow-md"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  currentIndex === maxIndex
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-[#B284BE] border border-[#B284BE] hover:bg-[#B284BE] hover:text-white shadow-md"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Books Carousel */}
          <div className="relative overflow-hidden pb-8">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / displayCount)
                }%)`,
              }}
            >
              {books.map((book, index) => (
                <div
                  key={index}
                  className={`px-4 flex-shrink-0 ${
                    displayCount === 3
                      ? "w-1/3"
                      : displayCount === 2
                      ? "w-1/2"
                      : "w-full"
                  }`}
                >
                  <div className="group h-full bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:border-[#B284BE]/30 hover:shadow-xl hover:shadow-[#B284BE]/10 hover:-translate-y-2">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* <div className="absolute bottom-4 left-4 right-4">
                          <button className="w-full text-sm text-white bg-[#B284BE] px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-[#9A6AAF]">
                            Lihat Detail
                          </button>
                        </div> */}
                      </div>
                      <div className="absolute top-4 right-4 bg-[#B284BE] text-white text-xs px-3 py-1 rounded-full shadow-md">
                        {book.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                        {book.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {book.description}
                      </p>
                      <div className="flex justify-end">
                        <button className="inline-flex items-center px-4 py-2 text-sm text-[#B284BE] border border-[#B284BE] rounded-lg hover:bg-[#B284BE] hover:text-white transition-colors shadow-sm">
                          Lihat Detail
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-6 bg-gradient-to-r from-[#B284BE] to-[#9A6AAF]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Academic Publications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-[#B284BE]/5 border border-gray-100"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold flex items-center mb-8 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#B284BE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Publikasi Akademik
            </h3>

            {/* Publication Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex -mb-px">
                <button
                  className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === "journals"
                      ? "border-[#B284BE] text-[#B284BE]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("journals")}
                >
                  Artikel Jurnal
                </button>
                <button
                  className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === "articles"
                      ? "border-[#B284BE] text-[#B284BE]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("articles")}
                >
                  Kumpulan Tulisan
                </button>
              </div>
            </div>

            {/* Journals List */}
            {activeTab === "journals" && (
              <div className="space-y-6">
                {journals.map((journal, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={index}
                    className="bg-gradient-to-r from-white to-[#f9f5fc] rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all p-6 hover:translate-x-1"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          {journal.title}
                        </h4>
                        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-2">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1 text-[#B284BE]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                            {journal.publisher}
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1 text-[#B284BE]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {journal.year}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={journal.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all shadow-md"
                        >
                          Lihat Detail
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-[#f9f5fc] text-[#9A6AAF] px-3 py-1 rounded-full border border-[#B284BE]/20">
                          Research
                        </span>
                        <span className="text-xs bg-[#f9f5fc] text-[#9A6AAF] px-3 py-1 rounded-full border border-[#B284BE]/20">
                          Education
                        </span>
                        <span className="text-xs bg-[#f9f5fc] text-[#9A6AAF] px-3 py-1 rounded-full border border-[#B284BE]/20">
                          Social Sciences
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Articles List */}
            {activeTab === "articles" && (
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={index}
                    className="bg-gradient-to-br from-white to-[#f9f5fc]/50 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all p-6 hover:-translate-y-1"
                  >
                    <div className="border-l-4 border-gradient-to-b from-[#B284BE] to-[#9A6AAF] pl-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-[#B284BE]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          {article.publisher}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-[#B284BE]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {article.year}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <a
                        href={article.link}
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 text-sm text-[#B284BE] border border-[#B284BE] rounded-lg hover:bg-[#B284BE] hover:text-white transition-colors shadow-sm"
                      >
                        Baca Artikel
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
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
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 pt-16 border-t border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-white to-[#f9f5fc] rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] mb-2">
                {books.length}
              </div>
              <div className="text-gray-600">Published Books</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white to-[#f9f5fc] rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] mb-2">
                {journals.length}
              </div>
              <div className="text-gray-600">Journal Articles</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white to-[#f9f5fc] rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] mb-2">
                {articles.length}
              </div>
              <div className="text-gray-600">Writings</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white to-[#f9f5fc] rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] mb-2">
                5
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
