import { motion } from "framer-motion";
import { useState } from "react";

export default function WorkExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const experiences = [
    {
      title: "Lecturer",
      company: "Sekolah Tinggi Agama Islam Denpasar Bali",
      period: "2020-Present",
      responsibilities: [
        "Lecture several subjects of studies: Development of Islamic Civilization in History and Balinese Culture, Ulum Al-Qur'an, Fiqh Ibadah and Muamalah.",
        "Moderate engaging classroom discussions to lead the students into deeper explorations of topic raised during lectures and in the textbooks.",
        "Design and developed course materials from learning objectives and selected ideal textbooks.",
        "Contribute to the department's success by recommending successful strategies to meet academic and student needs."
      ]
    },
    {
      title: "Inclusive Village Assistant",
      company: "The Ministry of Village, Development of Disadvantaged Regions And Transmigration of Indonesia",
      period: "2023-2024",
      responsibilities: [
        "Assist of villages in Gianyar, Bali in problems mapped, planned, and implemented of inclusive society in villages.",
        "Design learning groups for people with disability, women, disadvataged people, and children who excludes from participating of village development."
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            WORKING EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional journey and contributions in education and community development
            <span className="block mt-2 text-sm text-purple-600 italic">Click on each position to see more details</span>
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-purple-200 transform md:translate-x-[-0.5px] hidden md:block"></div>

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <motion.div
                className="flex flex-col md:flex-row items-start relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline marker */}
                <div className="hidden md:flex absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-6">
                  <div className="w-6 h-6 rounded-full border-4 border-purple-600 bg-white shadow-md z-10"></div>
                </div>

                {/* Date - Left side on desktop */}
                <div className="md:w-1/2 md:pr-10 mb-4 md:mb-0 hidden md:block md:text-right">
                  {index % 2 === 0 && (
                    <div className="bg-white shadow-md rounded-lg p-4 inline-block">
                      <span className="font-semibold text-purple-700">{experience.period}</span>
                    </div>
                  )}
                </div>

                {/* Content - Right side on desktop for odd, left for even */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right order-first'}`}>
                  {/* Mobile date display */}
                  <div className="md:hidden mb-2 bg-white shadow-sm rounded px-3 py-1 inline-block">
                    <span className="font-semibold text-purple-700">{experience.period}</span>
                  </div>
                  
                  {/* Job Card */}
                  <div 
                    className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600 hover:shadow-xl transition-all duration-300 cursor-pointer ${expandedIndex === index ? 'ring-2 ring-purple-400' : ''}`}
                    onClick={() => toggleExpanded(index)}
                  >
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                      {experience.title}
                      <motion.span 
                        className="ml-2 text-purple-600"
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {expandedIndex === index ? '▲' : '▼'}
                      </motion.span>
                    </h3>
                    <p className="text-purple-600 font-medium mb-3">{experience.company}</p>
                    
                    {/* Responsibilities (shown/hidden based on state) */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedIndex === index ? 'auto' : 0,
                        opacity: expandedIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 text-gray-700 mt-4">
                        {experience.responsibilities.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * idx, duration: 0.3 }}
                          >
                            <span className="text-purple-600 mr-2 mt-1.5 text-lg">•</span>
                            <span className="flex-1">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Date - Right side on desktop */}
                <div className="md:w-1/2 md:pl-10 hidden md:block">
                  {index % 2 === 1 && (
                    <div className="bg-white shadow-md rounded-lg p-4 inline-block">
                      <span className="font-semibold text-purple-700">{experience.period}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}