import { motion } from "framer-motion";
import heroBg from "./../../assets/Home/Herobg1.png";
import { Link } from 'react-router-dom';

// 🔥 Variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] mt-5 flex items-center justify-center text-center text-white overflow-hidden bg-[#422E0F] px-4 sm:px-6 md:px-10">

      {/* 🔥 Background (responsive fix) */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center md:bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent"></div>

      {/* 🔥 Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl w-full"
      >

        {/* Top Text */}
        <motion.p
          variants={fadeUp}
          className="text-yellow-400 tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm mb-4 sm:mb-6"
        >
          INDIA'S FIRST FULLY INTEGRATED GOLD ECOSYSTEM
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-bold leading-tight text-3xl sm:text-3xl md:text-5xl lg:text-4xl"
        >
          <span className="text-yellow-400 relative inline-block">
            PIXLA GOLD

            {/* Shine */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 animate-[shine_2s_linear_infinite]"></span>
          </span>

          <br />

          <span>CORP</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto leading-relaxed"
        >
          Wealth, Trust, and Impact — From exploration and mining to refining,
          manufacturing, bullion trading, finance, and retail.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-10"
        >
          {/* Button 1 */}
         <Link to="/product" className="w-full sm:w-auto">
        <motion.button
          whileHover={{
            scale: 1.08,
            y: -3,
            boxShadow: "0px 0px 25px rgba(234, 179, 8, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold transition-colors hover:bg-yellow-300"
        >
          Discover Our Ecosystem
        </motion.button>
      </Link>

          {/* Button 2 */}
          <Link to="/investor" className="w-full sm:w-auto">
          <motion.button
            whileHover={{
              scale: 1.08,
              y: -3,
              boxShadow: "0px 0px 20px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
           className="w-full sm:w-auto bg-white text-black px-6 py-2 rounded-md font-semibold transition-colors hover:bg-yellow-300"
          >
            Investor Relations
          </motion.button></Link>

        </motion.div>
        

      </motion.div>
      
      {/* 🔥 Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 text-yellow-400 text-xs sm:text-sm"
      >
        ↓ Scroll
      </motion.div>

      {/* Shine Keyframe */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  );
}