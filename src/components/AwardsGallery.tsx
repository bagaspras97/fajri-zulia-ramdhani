import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import award1 from "../assets/award1.jpeg";
import award2 from "../assets/award2.jpeg";
import award3 from "../assets/award3.jpeg";
import award4 from "../assets/award4.jpeg";
import award5 from "../assets/award5.jpeg";

// Definisikan tipe untuk award image
interface AwardImage {
  id: number;
  src: string;
  title: string;
  year: string;
  description: string;
}

// Design 2: Cinematic Carousel
export default function AwardsGallerySection() {
  // Sample award images - ganti dengan path gambar yang sebenarnya
  const awardImages: AwardImage[] = [
    {
      id: 1,
      src: award1,
      title: "Excellence in Islamic Studies Research",
      year: "2023",
      description:
        "Awarded for outstanding contribution to Islamic Astronomy research",
    },
    {
      id: 2,
      src: award2,
      title: "Best Academic Leadership Award",
      year: "2022",
      description:
        "Recognized for exceptional leadership at STAI Denpasar Bali",
    },
    {
      id: 3,
      src: award3,
      title: "Community Engagement Recognition",
      year: "2021",
      description:
        "For fostering interfaith harmony in Bali's diverse community",
    },
    {
      id: 4,
      src: award4,
      title: "Outstanding Lecturer Award",
      year: "2020",
      description: "Awarded by students for innovative teaching methods",
    },
    {
      id: 5,
      src: award5,
      title: "Research Publication Excellence",
      year: "2019",
      description: "Recognized for high-impact academic publications",
    },
  ];

  // State untuk menyimpan image yang sedang di-highlight
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengatur transisi otomatis setiap 7 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awardImages.length);
    }, 7000); // Transisi setiap 7 detik

    return () => clearInterval(interval);
  }, [awardImages.length]);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#F9F7FB] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF]">
              Recognitions & Awards
            </span>
            <div className="h-1 w-32 bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] rounded-full mx-auto mt-3"></div>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            A collection of memorable moments from award ceremonies recognizing
            contributions to academia, research, and community development.
          </p>
        </motion.div>

        {/* Cinematic Carousel - Smaller height on mobile */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[700px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/20 z-10"></div>

          {/* Image Layer */}
          <div className="relative h-full w-full">
            {awardImages.map((award, index) => (
              <motion.div
                key={award.id}
                className="absolute inset-0 h-full w-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 1.1,
                }}
                transition={{
                  opacity: { duration: 1.5 },
                  scale: { duration: 8 },
                }}
              >
                <img
                  src={award.src}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Content Layer - Simplified for mobile */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-16 sm:pt-32 pb-6 sm:pb-10 px-4 sm:px-6 md:px-10">
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={awardImages[currentIndex].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="text-white"
                >
                  <div className="flex items-center mb-2 sm:mb-4">
                    <span className="px-3 py-1 bg-[#9A6AAF]/70 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mr-3 sm:mr-4">
                      {awardImages[currentIndex].year}
                    </span>
                    <div className="flex space-x-1 sm:space-x-2">
                      {awardImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            currentIndex === idx ? "bg-white" : "bg-white/30"
                          }`}
                          aria-label={`View award ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-3">
                    {awardImages[currentIndex].title}
                  </h3>
                  <p className="text-sm sm:text-lg text-white/90 max-w-3xl line-clamp-2 sm:line-clamp-none">
                    {awardImages[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Award Thumbnails - 5 in a row on all screen sizes */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4">
          {awardImages.map((award, index) => (
            <motion.div
              key={award.id}
              className={`relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer ${
                currentIndex === index
                  ? "ring-2 sm:ring-4 ring-[#B284BE] shadow-md sm:shadow-lg"
                  : "hover:ring-2 hover:ring-[#B284BE]/50"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="aspect-square">
                <img
                  src={award.src}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-1 sm:p-3">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">
                      {award.title}
                    </p>
                    <p className="text-white/80 text-xs hidden sm:block">{award.year}</p>
                    {/* Only show year on mobile */}
                    <p className="text-white/80 text-xs sm:hidden">{award.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 italic text-sm sm:text-base mb-3 sm:mb-4">
            "Every recognition is a reflection of the dedication to advancing
            knowledge and fostering understanding."
          </p>
          <a
            href="#publications"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] text-white text-sm sm:text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            View Publications
          </a>
        </div> */}
      </div>
    </section>
  );
}