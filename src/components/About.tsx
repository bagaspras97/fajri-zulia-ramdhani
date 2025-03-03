// AboutSection.jsx (Redesigned with improved mobile padding)
import profile from "../assets/cantik.jpeg";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white text-gray-800"
    >
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
              About Me
            </span>
            {/* <div className="h-1 w-24 bg-gradient-to-r from-[#B284BE] to-[#9A6AAF] rounded-full mx-auto mt-3"></div> */}
          </h2>
        </motion.div>

        {/* Container for main content */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          {/* Left side - Photo and quote */}
          <motion.div
            className="lg:w-2/5 w-full px-2 sm:px-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative element - hidden on small screens */}
              <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 border-t-4 border-l-4 border-[#B284BE] opacity-70 hidden sm:block"></div>

              <div className="relative z-10 bg-gradient-to-br from-[#F9F7FB] to-[#F4F0F8] p-4 sm:p-6 rounded-3xl shadow-xl">
                <img
                  src={profile}
                  alt="about me"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />

                {/* Quote section */}
                <div className="mt-6 sm:mt-8 p-3 sm:p-5 bg-white rounded-xl border border-[#B284BE]/20 shadow-md">
                  <div className="text-[#B284BE] text-3xl sm:text-4xl font-serif">
                    "
                  </div>
                  <p className="text-gray-700 italic mb-2 text-sm sm:text-base">
                    Dedicated to advancing Islamic studies through research,
                    education, and community engagement.
                  </p>
                  <div className="text-[#B284BE] text-3xl sm:text-4xl font-serif text-right">
                    „
                  </div>
                </div>
              </div>

              {/* Decorative element - hidden on small screens */}
              <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 border-b-4 border-r-4 border-[#B284BE] opacity-70 hidden sm:block"></div>
            </div>

            {/* Stats in horizontal layout */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-8 sm:mt-10">
              <div className="text-center">
                <div className="text-[#B284BE] font-bold text-xl sm:text-2xl">
                  5+
                </div>
                <div className="text-gray-600 text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-[#B284BE] font-bold text-xl sm:text-2xl">
                  10+
                </div>
                <div className="text-gray-600 text-xs">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-[#B284BE] font-bold text-xl sm:text-2xl">
                  3+
                </div>
                <div className="text-gray-600 text-xs">Books</div>
              </div>
              <div className="text-center">
                <div className="text-[#B284BE] font-bold text-xl sm:text-2xl">
                  4+
                </div>
                <div className="text-gray-600 text-xs">Scholarships</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - About content with timeline style */}
          <motion.div
            className="lg:w-3/5 w-full px-2 sm:px-4 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
              A dedicated <span className="text-[#B284BE]">Lecturer</span>,{" "}
              <span className="text-[#9A6AAF]">Researcher</span>, and{" "}
              <span className="text-[#8D5CA0]">Academic Leader</span>
            </h3>

            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-[#F9F7FB] to-[#F4F0F8] p-4 sm:p-6 rounded-2xl">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                I am a dedicated lecturer at Sekolah Tinggi Agama Islam (STAI)
                Denpasar Bali with expertise in Islamic Studies and a focus on
                youth studies. With advanced degrees in Islamic Astronomy and
                Islamic Studies from leading Indonesian universities, I have
                demonstrated academic excellence, earning multiple scholarships
                and maintaining high GPAs.
              </p>
            </div>

            {/* Timeline style for roles */}
            <div className="space-y-4 sm:space-y-6 relative">
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B284BE] to-[#9A6AAF]/30"></div>

              <div className="relative pl-12 sm:pl-14">
                <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4F0F8] border-2 border-[#B284BE] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B284BE] text-sm sm:text-base">
                    ✍️
                  </span>
                </div>
                <div className="bg-white p-3 sm:p-5 rounded-xl shadow-sm border border-[#B284BE]/10">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    Author & Researcher
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    I have authored books and academic publications exploring
                    Islamic practices, interfaith relations, and social
                    inclusion in Bali.
                  </p>
                </div>
              </div>

              <div className="relative pl-12 sm:pl-14">
                <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4F0F8] border-2 border-[#B284BE] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B284BE] text-sm sm:text-base">
                    🎓
                  </span>
                </div>
                <div className="bg-white p-3 sm:p-5 rounded-xl shadow-sm border border-[#B284BE]/10">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    Lecturer & Educator
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    As a lecturer at STAI Denpasar Bali, I specialize in Islamic
                    Studies with an innovative teaching approach that motivates
                    students to develop their potential.
                  </p>
                </div>
              </div>

              <div className="relative pl-12 sm:pl-14">
                <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4F0F8] border-2 border-[#B284BE] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B284BE] text-sm sm:text-base">
                    📊
                  </span>
                </div>
                <div className="bg-white p-3 sm:p-5 rounded-xl shadow-sm border border-[#B284BE]/10">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    Vice Director of Postgraduate Program
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    I serve as Vice Director of the Postgraduate Program at STAI
                    Denpasar Bali, managing academic activities and driving
                    quality assurance initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="mt-6 sm:mt-10">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                Expertise & Focus Areas
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F4F0F8] rounded-full text-xs sm:text-sm text-gray-700 border border-[#B284BE]/20 shadow-sm hover:shadow-md transition-shadow">
                  Islamic Studies
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F4F0F8] rounded-full text-xs sm:text-sm text-gray-700 border border-[#B284BE]/20 shadow-sm hover:shadow-md transition-shadow">
                  Youth Studies
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F4F0F8] rounded-full text-xs sm:text-sm text-gray-700 border border-[#B284BE]/20 shadow-sm hover:shadow-md transition-shadow">
                  Research
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F4F0F8] rounded-full text-xs sm:text-sm text-gray-700 border border-[#B284BE]/20 shadow-sm hover:shadow-md transition-shadow">
                  Academic Leadership
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F4F0F8] rounded-full text-xs sm:text-sm text-gray-700 border border-[#B284BE]/20 shadow-sm hover:shadow-md transition-shadow">
                  Community Development
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
