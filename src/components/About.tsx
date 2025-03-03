// AboutSection.jsx
import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B284BE] to-[#9A6AAF]">Tentang Saya</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left side - Photo with blob background */}
          <motion.div 
            className="md:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#B284BE] to-[#9A6AAF] rounded-3xl blur-xl opacity-20 transform rotate-6"></div>
            <div className="bg-gradient-to-br from-[#F9F7FB] to-[#F4F0F8] p-6 rounded-3xl shadow-xl">
              <img
                src={profile}
                alt="tentang saya"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#B284BE]/20">
                  <h3 className="text-[#B284BE] text-xl font-bold mb-1">10+</h3>
                  <p className="text-gray-600 text-sm">Tahun Pengalaman</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#B284BE]/20">
                  <h3 className="text-[#B284BE] text-xl font-bold mb-1">20+</h3>
                  <p className="text-gray-600 text-sm">Publikasi Ilmiah</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#B284BE]/20">
                  <h3 className="text-[#B284BE] text-xl font-bold mb-1">50+</h3>
                  <p className="text-gray-600 text-sm">Project Selesai</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#B284BE]/20">
                  <h3 className="text-[#B284BE] text-xl font-bold mb-1">5+</h3>
                  <p className="text-gray-600 text-sm">Penghargaan</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - About content */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Seorang <span className="text-[#B284BE]">Educator</span>, <span className="text-[#9A6AAF]">Writer</span>, dan <span className="text-[#8D5CA0]">Project Manager</span> yang berdedikasi
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Saya adalah seorang profesional yang menggabungkan keahlian dalam dunia akademik, literasi, dan manajemen. 
              Dengan pengalaman lebih dari satu dekade, saya memiliki passion dalam menciptakan karya-karya yang mampu 
              menginspirasi dan memberikan dampak positif bagi masyarakat.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F4F0F8] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B284BE]">✍️</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Writer & Content Creator</h4>
                  <p className="text-gray-600">Penulis artikel ilmiah, buku, dan konten kreatif dengan fokus pada pendidikan dan pengembangan diri.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F4F0F8] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B284BE]">🎓</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Educator & Lecturer</h4>
                  <p className="text-gray-600">Dosen dengan pendekatan pengajaran yang inovatif dan memotivasi mahasiswa untuk mengembangkan potensi mereka.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F4F0F8] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B284BE]">📊</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Project Manager</h4>
                  <p className="text-gray-600">Mengelola berbagai proyek dengan pendekatan strategis dan berorientasi pada hasil yang optimal.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#F4F0F8] rounded-full text-sm text-gray-700 border border-[#B284BE]/20">Pendidikan</span>
              <span className="px-4 py-2 bg-[#F4F0F8] rounded-full text-sm text-gray-700 border border-[#B284BE]/20">Literasi</span>
              <span className="px-4 py-2 bg-[#F4F0F8] rounded-full text-sm text-gray-700 border border-[#B284BE]/20">Riset</span>
              <span className="px-4 py-2 bg-[#F4F0F8] rounded-full text-sm text-gray-700 border border-[#B284BE]/20">Manajemen</span>
              <span className="px-4 py-2 bg-[#F4F0F8] rounded-full text-sm text-gray-700 border border-[#B284BE]/20">Public Speaking</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}