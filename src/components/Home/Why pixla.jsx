import React from "react";
import { motion } from "framer-motion";
import { GiDiamondHard } from "react-icons/gi";
import { FiShield, FiUsers, FiTarget } from "react-icons/fi";

const data = [
  {
    icon: <GiDiamondHard />,
    title: "End-to-End Ecosystem",
    desc: "From exploration and mining to retail and ESG — we control the entire gold journey.",
  },
  {
    icon: <FiShield />,
    title: "Innovation Meets Tradition",
    desc: "Deep industry expertise with cutting-edge technology and scalable franchise networks.",
  },
  {
    icon: <FiUsers />,
    title: "Inclusive & Accessible",
    desc: "Secure, transparent access to gold including digital gold, bullion, and financial products.",
  },
  {
    icon: <FiTarget />,
    title: "Sustainable & Responsible",
    desc: "Linking wealth creation with environmental and social impact through our Foundation.",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.6, 0.05, 0.01, 0.9] // Custom cubic-bezier for a smooth feel
    },
  },
};

export default function WhyPixla() {
  return (
    <section 
      id="whypixla" 
      className="w-full bg-[#4A2F08] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto text-white py-24 px-6 md:px-12 overflow-hidden">

        {/* --- TITLE ANIMATION --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-yellow-500 font-bold tracking-[0.4em] text-xs uppercase mb-3">
            Core Values
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            WHY <span className="text-yellow-500">PIXLA GOLD ?</span>
          </h2>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="relative group border border-white/10 p-10 text-center bg-black/40 backdrop-blur-sm overflow-hidden cursor-pointer rounded-sm"
            >
              {/* Glow Background Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/5 blur-3xl"></div>

              {/* Shine Sweep Effect */}
              <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out"></div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 border border-transparent group-hover:border-yellow-500/30 transition-all duration-500"></div>

              {/* ICON SECTION */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-yellow-400 text-4xl flex justify-center mb-8 relative z-10"
              >
                {item.icon}
              </motion.div>

              {/* TEXT SECTION */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-yellow-500 w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}