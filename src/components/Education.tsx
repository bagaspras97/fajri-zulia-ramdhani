import { motion } from "framer-motion";
import { useState } from "react";

export default function EducationSection() {
  const [activeEdu, setActiveEdu] = useState(0);

  const educations = [
    {
      degree: "Doctor of Philosophy",
      major: "Humanities and Communications Arts",
      institution: "Western Sydney University (WSU)",
      period: "2025 - Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      courses: [
        "Digital Media Analysis",
        "Advanced Content Strategy",
        "Communication Research Methods",
      ],
    },
    {
      degree: "Master of Religion",
      major: "Islamic Studies",
      institution: "Sunan Ampel State Islamic University (UIN) Surabaya",
      period: "2018 - 2020",
      description:
        "Youth Studies (concentration) - Awardee of Master Scholarship from the Indonesian Ministry of Youth and Sports – GPA 3.88 of 4.00",
      courses: [
        "Creative Narrative",
        "Professional Writing",
        "Literary Analysis",
      ],
    },
    {
      degree: "Bachelor of Law",
      major: "Islamic Astronomy",
      institution: "Walisongo State Islamic University (UIN) Semarang",
      period: "2014 - 2017",
      description:
        "Islamic Astronomy – Awardee of Program Beasiswa Santri Berprestasi (Outstanding Students Scholarship) from the Indonesian Ministry of Religious Affairs – GPA 3.89 of 4.00",
      courses: ["Project Planning", "Risk Management", "Team Leadership"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="education"
      className="w-full py-20 bg-gradient-to-b from-purple-50 to-white font-inter"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">
              Educational Journey
            </h2>
            <div className="flex justify-center items-center mt-4 mb-6">
              <div className="w-12 h-0.5 bg-[#B284BE]"></div>
              <div className="w-3 h-3 rounded-full bg-[#B284BE] mx-2"></div>
              <div className="w-12 h-0.5 bg-[#B284BE]"></div>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Formal education and continuous learning experiences that have
              shaped my expertise in communication, writing, and project
              management.
            </p>
          </motion.div>
        </div>

        {/* Education tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs navigation */}
          <motion.div
            className="lg:w-1/3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="sticky top-24 bg-white rounded-xl shadow-lg overflow-hidden">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  onClick={() => setActiveEdu(index)}
                  className={`cursor-pointer p-6 border-l-4 transition-all ${
                    activeEdu === index
                      ? "border-l-[#B284BE] bg-purple-50"
                      : "border-l-transparent hover:bg-purple-50/30"
                  }`}
                >
                  <h3 className="font-medium text-lg text-gray-800 font-poppins">
                    {edu.degree}
                  </h3>
                  <p className="text-[#B284BE] font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tab content */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#edd8f3] to-[#d9bfe2] rounded-bl-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#edd8f3] to-[#d9bfe2] rounded-tr-full opacity-10"></div>

              <div className="relative z-10">
                <motion.div
                  key={activeEdu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#B284BE]/20 flex items-center justify-center text-[#B284BE] mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14v7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 font-poppins">
                        {educations[activeEdu].degree}
                      </h3>
                      <p className="text-[#B284BE] font-medium">
                        {educations[activeEdu].major}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 text-[#B284BE] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {educations[activeEdu].institution}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-[#B284BE] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {educations[activeEdu].period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8">
                    {educations[activeEdu].description}
                  </p>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 font-poppins">
                      Key Courses & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {educations[activeEdu].courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-purple-50 text-[#B284BE] rounded-lg text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
