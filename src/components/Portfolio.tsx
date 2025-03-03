import { useState, useRef } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.png";

interface Book {
  title: string;
  image: string;
  description: string;
  year?: string;
}

export default function PortfolioSection() {
  const books: Book[] = [
    {
      title: "ABCD Perempuan",
      image: book1,
      description:
        "Buku yang menceritakan tentang perjalanan perempuan dalam mengatasi berbagai tantangan kehidupan.",
      year: "2023",
    },
    {
      title: "Resume Perasaan",
      image: book2,
      description:
        "Kumpulan esai reflektif yang mengeksplorasi kompleksitas emosi manusia dalam kehidupan modern.",
      year: "2022",
    },
    {
      title: "Buku 3",
      image: profile,
      description:
        "Analisis mendalam tentang transformasi pendidikan di era digital dan implikasinya bagi generasi masa depan.",
      year: "2021",
    },
    {
      title: "Buku 4",
      image: book1,
      description:
        "Panduan praktis untuk manajemen proyek kreatif dengan pendekatan inovatif.",
      year: "2020",
    },
    {
      title: "Buku 5",
      image: book2,
      description:
        "Koleksi cerita inspiratif dari berbagai tokoh yang telah mengubah dunia melalui ide-ide sederhana.",
      year: "2019",
    },
  ];

  const articles = [
    {
      title: "Transformasi Pendidikan di Era Digital",
      publisher: "EdTech Indonesia",
      year: "2023",
    },
    {
      title: "Menulis Sebagai Terapi: Pendekatan Holistik",
      publisher: "Literasi Journal",
      year: "2022",
    },
    {
      title: "Strategi Efektif Manajemen Proyek Akademis",
      publisher: "Project Management Review",
      year: "2023",
    },
  ];

  const journals = [
    {
      title: "Analisis Kritis Pendidikan Tinggi di Indonesia",
      publisher: "Journal of Education Studies",
      year: "2023",
      impact: "Q2",
    },
    {
      title: "Metodologi Penulisan Kreatif dalam Konteks Akademis",
      publisher: "Journal of Creative Writing",
      year: "2022",
      impact: "Q1",
    },
    {
      title: "Pengembangan Model Pembelajaran Berbasis Proyek",
      publisher: "Educational Innovation Journal",
      year: "2021",
      impact: "Q2",
    },
  ];

  // Carousel logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(
    0,
    books.length - (window.innerWidth >= 768 ? 3 : 1)
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Tabs for articles and journals
  const [activeTab, setActiveTab] = useState("journals");

  // Filter for portfolio items
  const [filter, setFilter] = useState("all");

  return (
    <section
      id="portfolio"
      className="w-full py-16 sm:py-24 px-6 md:px-16 bg-gradient-to-b from-white to-purple-50 text-gray-800 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-br from-[#B284BE] to-[#9A6AAF] rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute left-10 bottom-1/4 w-48 h-48 bg-gradient-to-br from-[#B284BE] to-[#9A6AAF] rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF]">
              Karya & Portofolio
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Koleksi berbagai karya dan pencapaian selama perjalanan profesional
            sebagai penulis, pendidik, dan pengelola proyek.
          </p>
        </motion.div>

        {/* Portfolio Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/70 p-1 rounded-xl shadow-sm">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter("books")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === "books"
                  ? "bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Buku
            </button>
            <button
              onClick={() => setFilter("academic")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === "academic"
                  ? "bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Akademik
            </button>
          </div>
        </div>

        {/* Books Section with Carousel */}
        {(filter === "all" || filter === "books") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold flex items-center text-gray-800">
                <span className="text-[#B284BE] mr-2">📚</span> Buku
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentIndex === 0
                      ? "bg-white/70 text-gray-400 cursor-not-allowed"
                      : "bg-white/70 text-gray-800 hover:bg-[#B284BE] hover:text-white"
                  }`}
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentIndex === maxIndex
                      ? "bg-white/70 text-gray-400 cursor-not-allowed"
                      : "bg-white/70 text-gray-800 hover:bg-[#B284BE] hover:text-white"
                  }`}
                >
                  →
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-out pb-2 md:pb-3"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))
                  }%)`,
                }}
              >
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="group h-full bg-white rounded-xl overflow-hidden shadow-md border border-[#B284BE]/10 transition-all duration-300 hover:shadow-[#B284BE]/20 hover:border-[#B284BE]/30">
                      <div className="h-64 overflow-hidden relative">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-[#B284BE] text-white text-xs px-3 py-1 rounded-full">
                          {book.year}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#B284BE] transition-colors">
                          {book.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {book.description}
                        </p>
                        <button className="mt-6 px-4 py-2 text-sm bg-transparent border border-[#B284BE] text-[#B284BE] rounded-lg hover:bg-[#B284BE] hover:bg-opacity-5 transition-all">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book count indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {books.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index >= currentIndex &&
                    index < currentIndex + (window.innerWidth >= 768 ? 3 : 1)
                      ? "bg-[#B284BE] w-4"
                      : "bg-white"
                  }`}
                  aria-label={`Go to book ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Academic Publications: Journals & Articles */}
        {(filter === "all" || filter === "academic") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold flex items-center mb-6 text-gray-800">
                <span className="text-[#B284BE] mr-2">📄</span> Publikasi
                Akademik
              </h3>

              {/* Tabs */}
              <div className="flex border-b border-[#B284BE]/20 mb-8">
                <button
                  className={`pb-3 px-4 text-lg font-medium relative ${
                    activeTab === "journals"
                      ? "text-[#B284BE]"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("journals")}
                >
                  Jurnal Ilmiah
                  {activeTab === "journals" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B284BE]"
                      initial={false}
                    />
                  )}
                </button>
                <button
                  className={`pb-3 px-4 text-lg font-medium relative ${
                    activeTab === "articles"
                      ? "text-[#B284BE]"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("articles")}
                >
                  Artikel
                  {activeTab === "articles" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B284BE]"
                      initial={false}
                    />
                  )}
                </button>
              </div>

              {/* Journals List */}
              {activeTab === "journals" && (
                <div className="space-y-4">
                  {journals.map((journal, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      className="group bg-white p-6 rounded-xl border border-[#B284BE]/10 hover:border-[#B284BE]/30 transition-all shadow-lg hover:shadow-[#B284BE]/10"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#B284BE] transition-colors mb-2">
                            {journal.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {journal.publisher}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="bg-[#F8F6FF] text-[#B284BE] text-xs px-3 py-1 rounded-full">
                            {journal.impact}
                          </span>
                          <span className="text-gray-600 text-sm">
                            {journal.year}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#B284BE]/10 flex justify-between items-center">
                        <div className="flex space-x-2">
                          <span className="text-xs bg-[#F8F6FF] text-gray-700 px-2 py-1 rounded">
                            Research
                          </span>
                          <span className="text-xs bg-[#F8F6FF] text-gray-700 px-2 py-1 rounded">
                            Education
                          </span>
                        </div>
                        <button className="text-sm text-[#B284BE] hover:text-[#9A6AAF] transition-colors">
                          Lihat Publikasi →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Articles List */}
              {activeTab === "articles" && (
                <div className="space-y-4">
                  {articles.map((article, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      className="group bg-white p-6 rounded-xl border border-[#B284BE]/10 hover:border-[#B284BE]/30 transition-all shadow-lg hover:shadow-[#B284BE]/10"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#B284BE] transition-colors mb-2">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {article.publisher}
                          </p>
                        </div>
                        <span className="text-gray-600 text-sm">
                          {article.year}
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#B284BE]/10 flex justify-end">
                        <button className="text-sm text-[#B284BE] hover:text-[#9A6AAF] transition-colors">
                          Baca Artikel →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
