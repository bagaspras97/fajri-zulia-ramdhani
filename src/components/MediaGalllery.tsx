import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import desa1 from "../assets/desa1.webp";
import desa2 from "../assets/desa2.webp";
import bannerSantri from "../assets/banner-santri.jpeg";

// Define the types for media items
interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  youtubeId?: string; // Tambahkan properti youtubeId untuk video YouTube
}

const MediaGallerySection: React.FC = () => {
  // Sample media items - replace with your actual content
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "video",
      src: "", // Path ke file lokal
      youtubeId: "elP9MQ0Abdw",
      thumbnail:
        "https://i.ytimg.com/vi/elP9MQ0Abdw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAgCjpErTtJOB90oBQ62_RMvE6-dA",
      title:
        "PEMBACAAN KARYA FINALIS 10 BESAR LOMBA PUISI NASIONAL, TEMA : TANAM",
      description: "",
      category: "Karya",
    },
    {
      id: 2,
      type: "video",
      src: "", // Tidak perlu src untuk video YouTube
      youtubeId: "yxL8uvtV5hk", // ID video YouTube
      thumbnail:
        "https://i.ytimg.com/vi/yxL8uvtV5hk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAETZHvcuHTnhdjYdJdQ53lNdvOAg",
      title: "Bahas Buku ABCD Perempuan di Sufada Radio",
      description: `Kalian yang perempuan tentu sayang dong dengan diri kalian sendiri dan pastinya faham akan bagaimana diri kalian. Buat para lelaki tentunya punya dong perempuan yang kalian sayangi. Misalnya orang tua, saudara, gebetan, temen atau masih sayang sama mantan kamu? ahaha. 
Di episode kali ini Sufada Corner bakal ngebahas tentang Serba-serbi Perempuan. Hmm... ngeri-ngeri sedap yaa...`,
      category: "Seminar",
    },
    {
      id: 3,
      type: "video",
      src: "",
      youtubeId: "ZUEGjPCyb8o", // ID video YouTube
      thumbnail: desa1,
      title:
        "Posyandu Inklusif & Pelatihan Memasak PMT di Desa Suwat, Gianyar.",
      description: "",
      category: "Community Services",
    },
    {
      id: 4,
      type: "video",
      src: "",
      youtubeId: "tUeeT5mE1VY",
      thumbnail:
        "https://i.ytimg.com/vi/tUeeT5mE1VY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCEv8zWVcQfZ1WirVHaItK3ygcfWQ",
      title: "Multitask Di Usia Muda, Kenapa Enggak?? #LTNU Let's Talk NU",
      description: "",
      category: "Seminar",
    },
    {
      id: 5,
      type: "video",
      src: "",
      youtubeId: "O6RbHFopIVQ",
      thumbnail: bannerSantri,
      title: "Santri Punya Usaha - Perempuan Bercerita di Ramadan 2024",
      description: "",
      category: "Seminar",
    },
    {
      id: 6,
      type: "video",
      src: "",
      youtubeId: "dZepAVCtmVE",
      thumbnail: desa2,
      title: "Kegiatan Beauty Class di Desa Kedisan, Kab Gianyar",
      description: "",
      category: "Community Services",
    },
  ];

  // State for filters, selected media, and modal
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>(mediaItems);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  console.log(selectedCategory, "selectedCategory");
  console.log(filteredItems, "filteredItems");

  // Get unique categories for filter
  const categories = [
    "All",
    ...Array.from(new Set(mediaItems.map((item) => item.category))),
  ];

  // Filter items when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(mediaItems);
    } else {
      setFilteredItems(
        mediaItems.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Handle media selection and modal
  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
    // Stop scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Resume scroll when modal is closed
    document.body.style.overflow = "auto";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Filter otomatis saat kategori berubah
  useEffect(() => {
    const newFilteredItems =
      selectedCategory === "All"
        ? mediaItems
        : mediaItems.filter(
            (item) => item.category.trim() === selectedCategory.trim()
          );

    setFilteredItems(newFilteredItems);
  }, [selectedCategory]);

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative mt-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF]">
              Media Gallery
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore a curated collection of photos and videos showcasing
            significant moments in academic research, community engagement, and
            personal achievements.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#B284BE] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-[#B284BE]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              onClick={() => openModal(item)}
            >
              <div className="aspect-[16/9] bg-gray-100">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Video indicator */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#B284BE]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm line-clamp-2">
                  {item.description}
                </p>
                <span className="absolute top-4 right-4 px-2 py-1 bg-[#9A6AAF]/70 text-white text-xs rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-[#B284BE] border border-[#B284BE] rounded-lg font-medium hover:bg-[#B284BE] hover:text-white transition-colors shadow-sm">
            Load More
          </button>
        </div>

        {/* Modal for Media View */}
        <AnimatePresence>
          {isModalOpen && selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-5xl max-h-[90vh] w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#B284BE]/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-[#9A6AAF]"
                  onClick={closeModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Media content */}
                <div className="rounded-xl overflow-hidden bg-black mb-4">
                  {selectedMedia.type === "image" ? (
                    <img
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      className="max-h-[70vh] mx-auto object-contain"
                    />
                  ) : (
                    <iframe
                      ref={videoRef}
                      width="100%"
                      height="500"
                      src={`https://www.youtube.com/embed/${selectedMedia.youtubeId}?autoplay=1`}
                      title={selectedMedia.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="max-h-[70vh] w-full"
                    ></iframe>
                  )}
                </div>

                {/* Media info */}
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {selectedMedia.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-[#9A6AAF]/70 text-white text-sm rounded-full backdrop-blur-sm">
                      {selectedMedia.category}
                    </span>
                    {selectedMedia.type === "image" && (
                      <a
                        href={selectedMedia.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#B284BE] text-white rounded-lg text-sm font-medium hover:bg-[#9A6AAF] transition-colors"
                        download
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
                      </a>
                    )}
                    {selectedMedia.type === "video" && (
                      <a
                        href={`https://www.youtube.com/watch?v=${selectedMedia.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#B284BE] text-white rounded-lg text-sm font-medium hover:bg-[#9A6AAF] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Buka di YouTube
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MediaGallerySection;
