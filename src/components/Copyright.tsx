import { motion } from "framer-motion";
import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.jpeg";
import book5 from "../assets/book5.jpeg";


export default function CopyrightGallerySection() {
    // Sample images - replace with your actual images
    const images = [
      { id: 1, src: book1, title: "Lecture Hall", author: "Ahmad Sulhan", year: "2023" },
      { id: 2, src: book2, title: "Research Publication", author: "Dewi Sartika", year: "2024" },
      { id: 3, src: book3, title: "Campus Building", author: "Putu Wijaya", year: "2022" },
      { id: 4, src: book4, title: "Student Activities", author: "Nur Fadillah", year: "2023" },
      { id: 5, src: book5, title: "Library Collection", author: "Hasan Basri", year: "2024" },
    //   { id: 6, src: "/path/to/image6.jpg", title: "Academic Conference", author: "Ayu Lestari", year: "2022" },
    ];
  
    return (
      <section id="copyright" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-white to-[#F9F7FB] text-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF]">
                Image Gallery & Copyright
              </span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A collection of images used throughout the website with proper attribution to respect intellectual property rights.
            </p>
          </motion.div>
  
          {/* Gallery grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-md h-64 sm:h-72"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-semibold text-lg sm:text-xl mb-1">{image.title}</h4>
                    <div className="flex items-center text-white/80 text-xs sm:text-sm space-x-2">
                      <span>© {image.year}</span>
                      <span>•</span>
                      <span>{image.author}</span>
                    </div>
                    
                    {/* License button */}
                    <button className="mt-3 px-3 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-xs transition-colors duration-200">
                      View License
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Copyright information */}
          <motion.div
            className="mt-16 rounded-3xl bg-white shadow-lg border border-[#B284BE]/20 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Copyright Policy</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4F0F8] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#B284BE]">©</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Ownership Rights</h4>
                    <p className="text-gray-600 text-sm">
                      All images displayed on this website are either owned by us or used with explicit permission from the copyright holder.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4F0F8] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#B284BE]">🔗</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Attribution</h4>
                    <p className="text-gray-600 text-sm">
                      Each image is properly attributed to its creator. Please respect their work by maintaining attributions if sharing is permitted.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4F0F8] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#B284BE]">🔒</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Usage Restrictions</h4>
                    <p className="text-gray-600 text-sm">
                      Unauthorized use, reproduction, or distribution of these images is strictly prohibited without prior written consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-6 sm:px-8 py-4 sm:py-5 bg-[#F4F0F8] border-t border-[#B284BE]/20">
              <p className="text-center text-gray-600 text-sm">
                For permission requests or copyright inquiries, please contact us at 
                <a href="mailto:copyright@example.com" className="text-[#9A6AAF] hover:underline ml-1">copyright@example.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }