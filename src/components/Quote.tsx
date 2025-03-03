import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function QuoteSection() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(quoteRef, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const quote = "Turning complex ideas into clear, compelling narratives that inspire and educate.";
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (quoteRef.current) {
        const rect = quoteRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  useEffect(() => {
    x.set(mousePosition.x * 0.01);
    y.set(mousePosition.y * 0.01);
  }, [mousePosition, x, y]);
  
  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);
  
  return (
    <section 
      ref={quoteRef} 
      className="w-full py-24 px-6 md:px-16 relative overflow-hidden bg-gradient-to-b from-white to-purple-50"
    >
      {/* Dynamic background elements that react to mouse */}
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#B284BE]/10 to-[#D4BFE0]/10 rounded-full blur-3xl -z-10"
        style={{ 
          x: useTransform(x, [-50, 50], [-15, 15]),
          y: useTransform(y, [-50, 50], [-15, 15])
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tr from-[#B284BE]/10 to-[#D4BFE0]/10 rounded-full blur-3xl -z-10"
        style={{ 
          x: useTransform(x, [-50, 50], [15, -15]),
          y: useTransform(y, [-50, 50], [15, -15])
        }}
      ></motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 md:p-16 border border-purple-100"
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: "preserve-3d"
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="relative mb-10 w-20 h-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.3
              }}
              style={{ 
                x: useTransform(x, [-50, 50], [-5, 5]),
                y: useTransform(y, [-50, 50], [-5, 5]),
                z: 20
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#B284BE] to-[#D4BFE0] rounded-full opacity-30 blur-md"></div>
              <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#B284BE" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
            </motion.div>
            
            <motion.blockquote 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ 
                z: 10, 
                transformStyle: "preserve-3d" 
              }}
            >
              <motion.div
                style={{ 
                  x: useTransform(x, [-50, 50], [-2, 2]),
                  y: useTransform(y, [-50, 50], [-2, 2]),
                  z: 10 
                }}
              >
                "{quote}"
              </motion.div>
            </motion.blockquote>
            
            <motion.div 
              className="h-0.5 w-32 bg-gradient-to-r from-[#B284BE] to-[#D4BFE0] mx-auto mb-6"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 120, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ 
                x: useTransform(x, [-50, 50], [-4, 4]),
                y: useTransform(y, [-50, 50], [-4, 4]),
                z: 15
              }}
            />
            
            <motion.p
              className="text-lg md:text-xl font-medium text-[#B284BE]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ 
                x: useTransform(x, [-50, 50], [-3, 3]),
                y: useTransform(y, [-50, 50], [-3, 3]),
                z: 5
              }}
            >
              - Fajri Zulia Ramdhani
            </motion.p>
            
            {/* Floating decorative elements with parallax effect */}
            <motion.div 
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#B284BE]/20 to-[#D4BFE0]/20 rounded-lg -z-1"
              style={{ 
                x: useTransform(x, [-50, 50], [-10, 10]),
                y: useTransform(y, [-50, 50], [-10, 10]),
                rotate: useTransform(x, [-50, 50], [-15, 15])
              }}
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-tr from-[#B284BE]/20 to-[#D4BFE0]/20 rounded-lg -z-1"
              style={{ 
                x: useTransform(x, [-50, 50], [10, -10]),
                y: useTransform(y, [-50, 50], [10, -10]),
                rotate: useTransform(y, [-50, 50], [-15, 15])
              }}
            />
            
            {/* Interactive sparkles that follow cursor */}
            <motion.div
              className="absolute h-4 w-4 rounded-full bg-purple-200 opacity-60 blur-sm"
              style={{ 
                x: useTransform(x, [-50, 50], [100, 150]),
                y: useTransform(y, [-50, 50], [50, 100]),
              }}
            />
            <motion.div
              className="absolute h-3 w-3 rounded-full bg-purple-300 opacity-50 blur-sm"
              style={{ 
                x: useTransform(x, [-50, 50], [-80, -120]),
                y: useTransform(y, [-50, 50], [-40, -80]),
              }}
            />
            <motion.div
              className="absolute h-2 w-2 rounded-full bg-purple-400 opacity-40 blur-sm"
              style={{ 
                x: useTransform(x, [-50, 50], [70, 30]),
                y: useTransform(y, [-50, 50], [-90, -60]),
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Additional parallax particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-200 opacity-40"
            // style={{
            //   left: `${15 + i * 15}%`,
            //   top: `${20 + i * 10}%`,
            //   x: useTransform(x, [-50, 50], [-10 - i * 5, 10 + i * 5]),
            //   y: useTransform(y, [-50, 50], [-10 - i * 3, 10 + i * 3]),
            // }}
          />
        ))}
      </div>
      
      {/* Hover instruction hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-60"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Move your cursor to interact with the quote
      </motion.div>
    </section>
  );
}