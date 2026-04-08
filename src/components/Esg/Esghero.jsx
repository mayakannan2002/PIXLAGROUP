import React from "react";
import { motion } from "framer-motion";
import { Heart, TreePine, Banknote, Users, ArrowRight, Quote } from "lucide-react";
import { Link } from 'react-router-dom';

// Replace with your actual image assets
import foundationImg from "./../../assets/Home/foundation-community.png";

const ESGFoundation = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Heart className="text-yellow-600" size={24} />,
      title: "Social Upliftment",
      desc: "Programs to support education, healthcare, and livelihoods in rural and urban communities."
    },
    {
      icon: <TreePine className="text-yellow-600" size={24} />,
      title: "Tree Plantation",
      desc: "For every gram of gold purchased, trees are planted to combat climate change."
    },
    {
      icon: <Banknote className="text-yellow-600" size={24} />,
      title: "Financial Inclusion",
      desc: "Access to gold-backed financial products for underserved communities."
    },
    {
      icon: <Users className="text-yellow-600" size={24} />,
      title: "Community Empowerment",
      desc: "Encouraging entrepreneurship, skills development, and local growth."
    }
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* --- SECTION 1: DARK HERO HEADER --- */}
      <section className="bg-black text-white pt-24 pb-12 md:pt-32 md:pb-20 px-6 text-center border-b border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight text-yellow-400">ESG & Foundation</h1>
          <h2 className="text-lg md:text-2xl text-gray-300 font-medium mb-6 md:mb-8">
            Creating Wealth That Makes a Difference
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Pixla Gold Corporation is committed to ESG initiatives, ensuring our ecosystem benefits communities, the environment, and society. Through the Pixla Gold Foundation, we drive sustainable growth while protecting the planet.
          </p>
          
          <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-10 tracking-widest uppercase">
            “Sustainable Gold, <span className="text-white">Sustainable Future.”</span>
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#learn" className="w-full sm:w-auto">
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3.5 rounded-md font-bold flex items-center justify-center gap-2 transition-all">
                Learn More <ArrowRight size={18} />
              </button>
            </a>
            
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full border border-white/30 hover:border-white text-white px-8 py-3.5 rounded-md font-bold transition-all active:scale-95">
                Join Our Mission
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: WHITE FOUNDATION CONTENT --- */}
      <section id="learn" className="bg-white text-gray-900 py-12 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-black">Pixla Gold Foundation</h2>
            <p className="text-yellow-600 font-bold text-sm md:text-lg mb-6 md:mb-8 uppercase tracking-widest">
              Empowering Communities, Enriching Lives
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              The Pixla Gold Foundation leverages our gold ecosystem to drive initiatives that uplift communities, promote sustainability, and enable financial inclusion across India.
            </p>

            {/* Feature List - 2 cols on tablet, 1 on mobile/desktop */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 mb-12">
              {features.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-yellow-50 p-3 rounded-xl group-hover:bg-yellow-100 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-black">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accent Quote Block */}
            <div className="relative pl-6 md:pl-8 border-l-4 border-yellow-500 py-2 mb-10 md:mb-12">
              <Quote className="text-yellow-500/10 absolute -left-2 -top-4" size={50} fill="currentColor" />
              <p className="text-xl md:text-2xl font-bold italic text-gray-800 leading-tight">
                “Gold That Creates Value, Impact, and Opportunity.”
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-yellow-600 hover:bg-black text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all">
                  Join Our Cause <ArrowRight size={18} />
                </button>
              </Link>
              <a href="#learn" className="w-full sm:w-auto">
                <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 px-10 py-4 rounded-md font-bold text-center">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Foundation Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 md:-inset-10 bg-yellow-500/5 blur-[60px] md:blur-[100px] rounded-full"></div>
            <img 
              src={foundationImg} 
              alt="Community" 
              className="relative z-10 w-full rounded-2xl shadow-xl border border-gray-100 object-cover aspect-square md:aspect-[4/3] lg:aspect-auto"
            />
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ESGFoundation;