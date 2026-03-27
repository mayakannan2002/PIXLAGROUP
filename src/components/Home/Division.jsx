import React from "react";
import { motion } from "framer-motion";
import {
  GiGoldBar,
  GiFactory,
  GiMining,
} from "react-icons/gi";
import { FaNetworkWired, FaUniversity } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { BsFillBoxFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const divisions = [
  {
    title: "Pixla Gold Network",
    subtitle: "India’s First Social Gold Network",
    desc: "Customer facing platform connecting individuals, businesses, and communities with digital gold, retail stores, and franchise network.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Pixla Gold Bullion",
    subtitle: "Trusted Bullion Trading Platform",
    desc: "Trading, refining, and distribution of high-quality gold bullion with secure storage and logistics.",
    icon: <GiGoldBar />,
  },
  {
    title: "Pixla Gold Finance",
    subtitle: "Gold Ownership & Lending",
    desc: "Secure and regulated financial services offering gold-backed loans and financing solutions under the Pixla Private Bank.",
    icon: <FaUniversity />,
  },
  {
    title: "Pixla Gold Manufacturing",
    subtitle: "Crafting Excellence in Jewellery",
    desc: "High-quality gold jewellery production combining traditional craftsmanship with modern manufacturing.",
    icon: <GiFactory />,
  },
  {
    title: "Pixla Gold Refinery",
    subtitle: "Refining Gold to Perfection",
    desc: "Advanced refining, assaying, and recycling of gold bullion and scrap.",
    icon: <BsFillBoxFill />,
  },
  {
    title: "Pixla Gold Mining",
    subtitle: "Discovering the Future of Gold",
    desc: "Exploration and extraction with sustainable practices and modern mining techniques.",
    icon: <GiMining />,
  },
  {
    title: "Pixla Gold Exploration",
    subtitle: "Mapping Tomorrow’s Gold",
    desc: "Research and discovery using satellite and ground exploration to locate gold reserves.",
    icon: <MdExplore />,
  },
  {
    title: "Pixla Gold Foundation",
    subtitle: "Gold with a Purpose",
    desc: "ESG and social impact initiatives focusing on education, financial inclusion, and sustainability.",
    icon: <RiHandHeartLine />,
  },
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurDivisions() {
  return (
    <section id="division" className="bg-black max-w-[1400px] mx-auto text-white py-20 px-6 md:px-12 overflow-hidden">

      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-yellow-500 tracking-widest text-md mb-3">
          OUR DIVISIONS
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold">
          A Complete <span className="text-yellow-500">Gold Ecosystem</span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm">
          Eight integrated divisions covering every stage of the gold value chain.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-4 sm:grid-cols-2 gap-6"
      >
        {divisions.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="relative group border border-gray-700 p-6 overflow-hidden cursor-pointer"
          >
            {/* 🔥 Glow Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5 blur-xl"></div>

            {/* ✨ Animated Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-yellow-500 transition duration-500"></div>

            {/* 💫 Shine Effect */}
            <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000"></div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.2 }}
              className="text-yellow-500 text-2xl mb-4 relative z-10"
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-sm font-semibold mb-1 relative z-10">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-yellow-500 text-xs mb-3 relative z-10">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-xs leading-relaxed relative z-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Explore */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-right mt-8"
      >
        <Link to="/divisions">
        <button className="text-yellow-500 text-sm hover:underline hover:tracking-widest transition-all duration-300">
          Explore More →
        </button></Link>
      </motion.div>
    </section>
  );
}