import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-[#f9f5fc] px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md sm:max-w-lg text-center px-4"
      >
        <div className="relative mb-6 sm:mb-8">
          <svg
            viewBox="0 0 200 100"
            className="w-full h-auto max-w-[280px] sm:max-w-full mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-7xl sm:text-8xl font-bold"
              fill="url(#gradient)"
              stroke="#B284BE"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            >
              404
            </text>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B284BE" />
                <stop offset="100%" stopColor="#9A6AAF" />
              </linearGradient>
            </defs>
          </svg>
          
          <motion.div 
            className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 hidden sm:block"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              y: [0, -5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[60px] sm:h-[60px]">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="url(#star-gradient)" stroke="#B284BE" strokeWidth="0.5" />
              <defs>
                <linearGradient id="star-gradient" x1="2" y1="2" x2="22" y2="21.02" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B284BE" />
                  <stop offset="1" stopColor="#9A6AAF" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <Link 
            to="/" 
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] text-white text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto inline-block"
          >
            Kembali ke Beranda
          </Link>
        </div>
        
        <div className="mt-12 sm:mt-16 border-t border-gray-200 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Nama Website. Semua hak dilindungi.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
