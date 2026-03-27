import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBuilding,
  FaBalanceScale,
  FaRocket,
  FaShieldAlt,
  FaCoins,
  FaFileAlt,
} from "react-icons/fa";

// ✅ Import your PDF file
import Pitchdesk from "./../../assets/Home/Pitchdesk.pdf";

// TOP CARDS DATA
const topCards = [
  {
    icon: <FaChartLine />,
    title: "Multi-Vertical",
    subtitle: "Revenue Growth",
    desc: "Consistent increase across bullion, digital gold, jewellery, and financial services.",
  },
  {
    icon: <FaBuilding />,
    title: "8 Divisions",
    subtitle: "Group Structure",
    desc: "Integrated subsidiaries spanning the complete gold value chain.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Healthy Margins",
    subtitle: "Profitability",
    desc: "Strong margins from trading, franchise operations, and gold-backed products.",
  },
  {
    icon: <FaRocket />,
    title: "Strategic",
    subtitle: "SME IPO Plan",
    desc: "Pathway to public listing with transparent governance.",
  },
];

// BOTTOM CARDS DATA
const bottomCards = [
  {
    icon: <FaShieldAlt />,
    title: "Transparent Governance",
    desc: "Board-driven strategy with clear reporting and accountability.",
  },
  {
    icon: <FaCoins />,
    title: "Multiple Income Streams",
    desc: "Multiple income streams reduce risk and maximize growth potential.",
  },
  {
    icon: <FaFileAlt />,
    title: "Structured Investment",
    desc: "Structured investment instruments with defined returns.",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function InvestorsSection() {
  
  // Handlers for interaction
  const handleEnquiry = () => {
    window.location.href = "mailto:investors@yourcompany.com?subject=Investor Enquiry";
  };

  return (
    <section className="bg-[#2A1405] text-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* HEADING SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 tracking-[4px] text-xs font-bold mb-4">
            INVESTORS
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Invest in India’s <span className="text-yellow-400">Gold Future</span>
          </h2>

          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Discover the opportunity in India’s first social gold ecosystem. 
            Join us as we redefine the value of gold through technology and transparency.
          </p>
        </motion.div>

        {/* TOP GRID: 4-Column stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topCards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -8 }}
              className="border border-gray-700 bg-black/40 backdrop-blur-sm p-8 text-center group relative overflow-hidden rounded-sm"
            >
              <div className="text-yellow-400 text-3xl mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="font-bold text-yellow-400 text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-300 mb-4 font-medium">
                {item.subtitle}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/5 to-transparent transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION: Focused features and Actions */}
        <div className="bg-black border border-gray-700 p-10 rounded-sm shadow-2xl">
          
          {/* Bottom Grid: 3-Column features */}
          <div className="grid md:grid-cols-3 gap-10 border-b border-gray-800 pb-10">
            {bottomCards.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center px-4"
              >
                <div className="text-yellow-500 text-2xl mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h4 className="font-bold text-white mb-3 text-lg">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
            
            {/* DOWNLOAD BUTTON */}
            <a 
              href={Pitchdesk} 
              download="Company_Pitch_Deck.pdf"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 25px rgba(234,179,8,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-yellow-400 text-black px-10 py-3 rounded-md font-bold text-sm tracking-wide uppercase transition-all"
              >
                Download Pitch Deck
              </motion.button>
            </a>

            {/* ENQUIRY BUTTON */}
            <a href="#contact" className="inline-block">
            <motion.button
              onClick={handleEnquiry}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gray-200 text-black px-10 py-3 rounded-md font-bold text-sm tracking-wide uppercase transition-all"
            >
              Investor Enquiry
            </motion.button></a>

          </div>
        </div>
      </div>
    </section>
  );
}