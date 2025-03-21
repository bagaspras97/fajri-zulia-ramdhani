import { useState } from "react";
import { motion } from "framer-motion";
import { books } from "../data/books";
import { journals } from "../data/journals";
import { articles } from "../data/articles";
import BookCarousel from "./BookCarousel";

export default function PortfolioSection() {
  // State for carousel

  // Tabs and filter states
  const [activeTab, setActiveTab] = useState("journals");

  // Update maxIndex when display count changes
  // useEffect(() => {
  //   setMaxIndex(Math.max(0, books.length - displayCount));
  // }, [displayCount, books.length]);

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
        <BookCarousel books={books} />

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
