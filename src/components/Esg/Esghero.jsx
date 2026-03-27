import React from "react";
import { motion } from "framer-motion";
import { Heart, TreePine, Banknote, Users, ArrowRight, Quote, } from "lucide-react";
import { Link } from 'react-router-dom';

// Replace with your actual image assets
import foundationImg from "./../../assets/Home/foundation-community.jpg";

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
      title: "Tree Plantation & Sustainability",
      desc: "For every gram of gold purchased, trees are planted to combat climate change and promote a greener future."
    },
    {
      icon: <Banknote className="text-yellow-600" size={24} />,
      title: "Financial Inclusion",
      desc: "Providing access to gold-backed financial products and services for underserved communities."
    },
    {
      icon: <Users className="text-yellow-600" size={24} />,
      title: "Community Empowerment",
      desc: "Encouraging entrepreneurship, skills development, and local economic growth."
    }
  ];

  return (
    <div className="font-sans">
      {/* --- SECTION 1: DARK HERO HEADER --- */}
      <section className="bg-black text-white pt-32 pb-20 px-6 text-center border-b border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">ESG & Foundation</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-8">
            Creating wealth That Makes a Difference
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Pixla Gold Corporation is committed to Environmental, Social, and Governance (ESG) 
            initiatives, ensuring that our gold ecosystem benefits communities, the environment, 
            and society at large. Through the Pixla Gold Foundation, we drive sustainable growth 
            while empowering people and protecting the planet.
          </p>
          
          <h3 className="text-yellow-400 font-bold text-lg mb-10">
            “Sustainable Gold, <span className="text-white">Sustainable Future.”</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#learn">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-md font-bold flex items-center gap-2 transition-all">
              Learn More <ArrowRight size={18} />
            </button></a>
            
            <Link to="/contact">
  <button className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-md font-bold transition-all active:scale-95">
    Join Our Mission
  </button>
</Link>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: WHITE FOUNDATION CONTENT --- */}
      <section id="learn" className="bg-white text-gray-900 py-20 px-6 md:px-12 ">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-black">Pixla Gold Foundation</h2>
            <p className="text-yellow-600 font-bold text-lg mb-8 uppercase tracking-widest">
              Empowering Communities, Enriching Lives
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              The Pixla Gold Foundation is the social responsibility arm of Pixla Gold Corporation, 
              committed to creating positive social and environmental impact across India. 
              By leveraging the gold ecosystem, the foundation drives initiatives that uplift 
              communities, promote sustainability, and enable financial inclusion.
            </p>

            {/* Feature List */}
            <div className="space-y-8 mb-16">
              {features.map((item, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="mt-1 bg-yellow-50 p-3 rounded-xl group-hover:bg-yellow-100 transition-colors">
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
            <div className="relative pl-8 border-l-4 border-yellow-500 py-2">
              <Quote className="text-yellow-500/10 absolute -left-2 -top-4" size={50} fill="currentColor" />
              <p className="text-2xl font-bold italic text-gray-800 leading-tight">
                “Gold That Creates Value, Impact, and Opportunity.”
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#learn">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </button></a>
              <Link to="/contact">
              <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-md font-bold">
                Join Our Cause
              </button></Link>
            </div>
          </motion.div>

          {/* Right Column: Foundation Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Background decorative blob */}
            <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full"></div>
            <img 
              src={foundationImg} 
              alt="Pixla Gold Foundation Community" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-gray-100 object-cover aspect-[4/3]"
            />
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ESGFoundation;