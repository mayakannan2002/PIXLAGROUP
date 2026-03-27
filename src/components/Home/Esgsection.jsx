import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const ESGSection = () => {
  const cards = [
    {
      title: "Free Plantation",
      desc: "For every gram of gold purchased, trees are planted to combat climate change and promote environmental sustainability.",
      quote: '"Every Gram of Gold Plants a Tree"',
    },
    {
      title: "Rural Upliftment",
      desc: "Rural Upliftment Education, healthcare, livelihood opportunities, and skill development to enhance quality of life in rural India.",
      quote: '"Empowering Lives, Enabling Growth"',
    },
    {
      title: "Financial Inclusion",
      desc: "Providing access to gold-backed financial products and services for underserved communities.",
      quote: '"Empowering Lives Through Access to Gold"',
    },
    {
      title: "Sustainability",
      desc: "Eco-friendly operations, ethical sourcing, and community programs balancing profitability with responsibility.",
      quote: '"Sustainable Gold, Sustainable Future"',
    },
  ];

  const bottomIcons = [
    { icon: <Leaf size={24} />, title: "Ethical Sourcing", sub: "Responsibly Source gold" },
    { icon: <Heart size={24} />, title: "Eco-Friendly Practices", sub: "Environmentally conscious Operations" },
    { icon: <Shield size={24} />, title: "Long Term Commitment", sub: "Balanced Profit and Planet" },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-20 md:px-12 px-6 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1400px] mx-auto text-center"
      >
        
        {/* Header Animation */}
        <motion.div variants={itemVariants}>
          <p className="text-yellow-500 tracking-[0.4em] uppercase text-[12px] font-bold mb-6">
            ESG & Foundation
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Creating Wealth That <span className="text-yellow-500">Makes a Difference</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed">
            Through Pixla Gold Foundation, we link wealth creation with positive environmental and social outcomes across India.
          </p>
        </motion.div>

        {/* 4-Column Grid with Staggered Entry */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-10 mb-24"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="text-left group cursor-default"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} custom={i} variants={starVariants}>
                    <Star size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 md:h-24">
                {card.desc}
              </p>
              <div className="w-12 h-[1px] bg-yellow-600 mb-4 transition-all duration-500 group-hover:w-full"></div>
              <p className="text-yellow-500 font-semibold text-sm italic">
                {card.quote}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Responsible Gold Divider Animation */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative flex items-center justify-center mb-24"
        >
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          <span className="relative bg-[#0A0A0A] px-8 text-sm tracking-[0.2em] uppercase font-medium text-gray-300">
            Responsible Gold, Better future
          </span>
        </motion.div>

        {/* Circular Icons Section with Scale Animation */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-12 mb-20"
        >
          {bottomIcons.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500 mb-6 bg-yellow-500/5 shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-colors hover:bg-yellow-500 hover:text-black"
              >
                {item.icon}
              </motion.div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons with Hover Pop */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
        >
          <Link to="/esg">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-10 py-3 rounded-md font-bold hover:bg-yellow-400 transition flex items-center gap-2"
          >
            Learn More <span className="text-lg">→</span>
          </motion.button></Link>
           <a href="#contact" className="inline-block">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-600 px-10 py-3 rounded-md font-bold transition"
          >
            Join Our Mission
          </motion.button>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ESGSection;