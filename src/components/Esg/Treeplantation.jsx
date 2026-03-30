import React from "react";
import { motion } from "framer-motion";
import { 
  Sprout, Users, MapPin, Globe, 
  GraduationCap, Stethoscope, Briefcase, 
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Asset Paths
import treeImg from "./../../assets/Home/tree-plantation.jpg";
import ruralImg from "./../../assets/Home/rural-upliftment.jpg";

const ESGSections = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: TREE PLANTATION (WHITE THEME) --- */}
      <section className="bg-white text-gray-900 py-12 md:py-20 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 md:-inset-10 bg-green-500/5 blur-[60px] md:blur-[100px] rounded-full"></div>
            <img 
              src={treeImg} 
              alt="Hands holding a sapling" 
              className="relative z-10 w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
            />
          </motion.div>

          {/* Content Container */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl lg:text-4xl font-extrabold mb-4 text-black">
              Tree Plantation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-yellow-600 font-bold text-sm md:text-base lg:text-lg mb-6 uppercase tracking-[0.2em]">
              Planting Trees, Growing a Greener Future
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Pixla Gold Foundation integrates environmental responsibility into the gold ecosystem. 
              For every gram of gold purchased, trees are planted to combat climate change across India.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10">
              {[
                { icon: <Sprout />, title: "Sustainable Impact", desc: "Contributing to carbon offset and biodiversity." },
                { icon: <Users />, title: "Community Engagement", desc: "Involving local communities in plantation drives." },
                { icon: <MapPin />, title: "Traceable Contributions", desc: "Linked to real-world environmental initiatives." },
                { icon: <Globe />, title: "Long-Term Vision", desc: "Building a healthier planet for future generations." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start group">
                  <div className="text-yellow-600 mt-1 shrink-0">{React.cloneElement(item.icon, { size: 20 })}</div>
                  <div>
                    <h4 className="font-bold text-black group-hover:text-yellow-600 transition-colors text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="relative pl-6 border-l-4 border-yellow-500 mb-10">
              <p className="text-lg md:text-xl font-bold italic text-gray-800">“Every Gram of Gold Plants a Tree.”</p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-yellow-600 hover:bg-black text-white px-6 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
                  Join Our Drive <ArrowRight size={18} />
                </button>
              </Link>
              <a href="#learn" className="w-full sm:w-auto">
                <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-md font-bold text-center">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: RURAL UPLIFTMENT (BLACK THEME) --- */}
      <section className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Content Container (order-1 ensures text is top on mobile) */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="order-1"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Rural Upliftment
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-yellow-500 font-bold text-sm md:text-base lg:text-lg mb-6 uppercase tracking-[0.2em]">
              Empowering Rural India
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              Pixla Gold Foundation is committed to enhancing the quality of life in rural areas 
              through education, healthcare, and livelihood opportunities.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 mb-10">
              {[
                { icon: <GraduationCap />, title: "Education & Skills", desc: "Training programs to empower youth and women." },
                { icon: <Stethoscope />, title: "Healthcare Access", desc: "Access to essential medical services." },
                { icon: <Briefcase />, title: "Livelihood Support", desc: "Promoting entrepreneurship in rural areas." },
                { icon: <Users />, title: "Empowerment", desc: "Encouraging local participation for long-term impact." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start group">
                  <div className="text-yellow-500 mt-1 bg-white/5 p-2.5 rounded-lg group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
                    {React.cloneElement(item.icon, { size: 22 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg group-hover:text-yellow-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="relative pl-6 border-l-4 border-yellow-500 mb-10">
              <p className="text-lg md:text-xl font-bold italic">“Empowering Lives, Enabling Growth.”</p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
              <Link to="/" className="w-full sm:w-auto">
                <button className="w-full bg-white hover:bg-yellow-500 text-black px-6 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all">
                  Support Initiatives <ArrowRight size={18} />
                </button>
              </Link>
              <a href="#learn" className="w-full sm:w-auto">
                <button className="w-full border border-white/20 hover:border-white text-white px-8 py-4 rounded-md font-bold text-center">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>

          {/* Image Container (order-2 ensures image is bottom on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2"
          >
            <div className="absolute -inset-4 md:-inset-10 bg-yellow-500/5 blur-[60px] md:blur-[100px] rounded-full"></div>
            <img 
              src={ruralImg} 
              alt="Rural community development" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/5 object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ESGSections;