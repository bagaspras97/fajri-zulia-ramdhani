import React, { useRef, useState, useEffect, TouchEvent } from "react";
import { motion } from "framer-motion";

// Define types for book properties
interface Book {
  title: string;
  description: string;
  image: string;
  year: string | number;
}

// Define props for the component
interface BookCarouselProps {
  books: Book[];
}

const BookCarousel: React.FC<BookCarouselProps> = ({ books }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(3);

  // Calculate the maximum index based on display count
  // Perhitungan maxIndex yang lebih akurat
  const maxIndex: number = Math.max(0, books.length - displayCount);

  // Handle window resize to update display count
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 640) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation functions
  const nextSlide = (): void => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    if (isSwiping && carouselRef.current) {
      setTouchEnd(e.targetTouches[0].clientX);

      // Optional: Add visual feedback during swipe
      const diff: number = touchStart - e.targetTouches[0].clientX;
      const slideWidth: number = carouselRef.current.clientWidth / displayCount;
      const offset: number = Math.min(
        Math.max(-diff, -slideWidth / 2),
        slideWidth / 2
      );

      if (
        (currentIndex === 0 && diff < 0) ||
        (currentIndex === maxIndex && diff > 0)
      ) {
        // Apply resistance at the edges
        carouselRef.current.style.transform = `translateX(calc(-${
          currentIndex * (100 / displayCount)
        }% + ${offset / 3}px))`;
      } else {
        carouselRef.current.style.transform = `translateX(calc(-${
          currentIndex * (100 / displayCount)
        }% + ${offset}px))`;
      }
    }
  };

  const handleTouchEnd = (): void => {
    setIsSwiping(false);

    if (carouselRef.current) {
      // Reset transform to the proper position
      carouselRef.current.style.transition = "transform 500ms ease-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * (100 / displayCount)
      }%)`;

      // Minimum swipe distance required (in pixels)
      const minSwipeDistance: number = 50;

      if (touchStart - touchEnd > minSwipeDistance) {
        // Swiped left -> go next
        nextSlide();
      } else if (touchEnd - touchStart > minSwipeDistance) {
        // Swiped right -> go prev
        prevSlide();
      }

      // Reset values
      setTouchStart(0);
      setTouchEnd(0);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
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
        <div className="flex space-x-3 md:flex">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`flex items-center justify-center  w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors ${
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
            className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors ${
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
            transform: `translateX(-${currentIndex * (100 / displayCount)}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
              <div className="group h-full bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:border-[#B284BE]/30 hover:shadow-xl hover:shadow-[#B284BE]/10 hover:-translate-y-2 flex flex-col">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-[#B284BE] text-white text-xs px-3 py-1 rounded-full shadow-md">
                    {book.year}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                    {book.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {book.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full py-2.5 bg-[#B284BE]/10 text-[#B284BE] rounded-lg font-medium hover:bg-[#B284BE] hover:text-white transition-colors flex items-center justify-center">
                    <span>Lihat Detail</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
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
  );
};

export default BookCarousel;
