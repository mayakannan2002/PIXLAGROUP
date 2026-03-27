import React from "react";
import { motion } from "framer-motion";

// Asset - Replace with your local path
import goldBarsHero from "./../../assets/Home/gold_bars_hero.jpg"; 

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-[80vh] flex items-center px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h1 className="text-2xl md:text-4xl py-10 font-bold leading-[1.1] tracking-tight mb-8">
            From Discovery to <br />
            <span className="text-white">Impact </span>
            <span className="text-yellow-400">—A Complete </span><br />
            <span className="text-yellow-400">Gold Journey.</span>
          </h1>

          <p className="text-gray-400 text-md md:text-lg max-w-lg leading-relaxed mb-12">
            Pixla Gold Corporation has built a complete, integrated gold 
            ecosystem, connecting every stage of the gold value chain to 
            deliver quality, trust, and value to customers, businesses, and investors.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
             <a href="#division" className="inline-block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-6 py-3.5 rounded-md font-bold text-sm tracking-wide hover:bg-yellow-300 transition-colors"
            >
              Explore Divisions
            </motion.button></a>

            {/* Secondary Button */}
            
             <a href="#eco" className="inline-block"> 
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-6 py-3.5 rounded-md font-bold text-sm tracking-wide transition-colors"
            >
              View Ecosystem
            </motion.button></a>
          </div>
        </motion.div>

        {/* Right Image with Glow Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Subtle background glow to match the image atmosphere */}
          <div className="absolute -inset-10 bg-yellow-500/10 blur-[100px] rounded-full"></div>
          
          <img 
            src={goldBarsHero} 
            alt="Stacked Gold Bullion Bars" 
            className="relative z-10 w-full rounded-lg border border-white/10 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;