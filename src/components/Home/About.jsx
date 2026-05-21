import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";

// 🔥 Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutHero() {
  return (
    <section className=" bg-[#150900] ">
    <section className="relative max-w-[1400px] mx-auto bg-[#150900] text-white py-20 px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent blur-3xl opacity-30"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-[1400px] px-6 py-4 mx-auto text-center relative z-10"
      >

        {/* SMALL TITLE */}
        <motion.p
          variants={fadeUp}
          className="text-yellow-400 text-md   tracking-[3px] mb-6"
        >
          ABOUT US
        </motion.p>

        {/* HEADING */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl md:text-4xl font-bold leading-tight mb-6"
        >
          Building the Future of{" "}
          <span className="text-yellow-400 relative inline-block">
            India's Gold Economy

            {/* ✨ Shine Effect */}
            <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 animate-[shine_2s_linear_infinite]"></span>
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          className="text-gray-400 max-w-3xl mx-auto text-sm mb-16"
        >
          Pixla Gold Corp Pvt Ltd is building India's first fully
          integrated gold ecosystem — spanning exploration, mining,
          refining, manufacturing, bullion trading, finance, retail,
          and ESG impact.
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 gap-10 mb-12"
        >

          {/* VISION */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
            }}
            className="relative group border border-gray-700 p-8 text-left bg-black/20 backdrop-blur-lg overflow-hidden cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/20 to-transparent blur-xl"></div>

            {/* Shine */}
            <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000"></div>

            <div className="flex items-center gap-3 mb-5 relative z-10">
              <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                <Eye className="text-yellow-400" size={22} />
              </motion.div>
              <h3 className="text-lg font-semibold">Our Vision</h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              To become India's leading integrated gold ecosystem,
              transforming gold into a transparent, accessible,
              and socially responsible asset that drives wealth
              creation and sustainable growth.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              rotateX: -5,
              rotateY: 5,
            }}
            className="relative group border border-gray-700 p-8 text-left bg-black/20 backdrop-blur-lg overflow-hidden cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/20 to-transparent blur-xl"></div>

            {/* Shine */}
            <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000"></div>

            <div className="flex items-center gap-3 mb-5 relative z-10">
              <motion.div whileHover={{ scale: 1.3, rotate: -10 }}>
                <Target className="text-yellow-400" size={22} />
              </motion.div>
              <h3 className="text-lg font-semibold">Our Mission</h3>
            </div>

            <ul className="text-gray-400 text-sm space-y-2 relative z-10">
              <li>• Build a complete gold value chain from exploration to retail</li>
              <li>• Enable secure, technology-driven access to gold</li>
              <li>• Expand nationwide through franchise networks</li>
              <li>• Promote financial inclusion and sustainability</li>
            </ul>
          </motion.div>

        </motion.div>

      </motion.div>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-[1200px] mx-auto px-2 relative z-10"
      >
        <Link
          to="/about"
          className="group text-yellow-400 text-sm flex items-center gap-2"
        >
          <span className="group-hover:tracking-widest transition-all duration-300">
            More About Us
          </span>

          {/* Arrow Animation */}
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-lg"
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* ✨ Custom Shine Animation */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
    </section>
  );
}