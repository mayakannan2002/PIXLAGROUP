import React from "react";
import { motion } from "framer-motion";
import { 
  Sprout, Users, MapPin, Globe, 
  GraduationCap, Stethoscope, Briefcase, 
  ArrowRight, Quote 
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

  return (
    <div className="font-sans">
      
      {/* --- SECTION 1: TREE PLANTATION (WHITE THEME) --- */}
      <section className="bg-white text-gray-900 py-20 px-6 md:px-12  border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-green-500/5 blur-[100px] rounded-full"></div>
            <img 
              src={treeImg} 
              alt="Hands holding a sapling" 
              className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-extrabold mb-4 text-black">Tree Plantation</motion.h2>
            <motion.p variants={fadeInUp} className="text-yellow-600 font-bold text-lg mb-8 uppercase tracking-widest">
              Planting Trees, Growing a Greener Future
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-10">
              Pixla Gold Foundation integrates environmental responsibility into the gold ecosystem. 
              For every gram of gold purchased, trees are planted to combat climate change, 
              restore forests, and promote sustainability across India.
            </motion.p>

            <div className="space-y-6 mb-12">
              {[
                { icon: <Sprout />, title: "Sustainable Impact", desc: "Contributing to carbon offset and biodiversity restoration." },
                { icon: <Users />, title: "Community Engagement", desc: "Involving local communities in tree plantation drives." },
                { icon: <MapPin />, title: "Traceable Contributions", desc: "Every purchase is linked to a real-world environmental initiative." },
                { icon: <Globe />, title: "Long-Term Vision", desc: "Building a greener and healthier planet for future generations." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start group">
                  <div className="text-yellow-600 mt-1">{React.cloneElement(item.icon, { size: 20 })}</div>
                  <div>
                    <h4 className="font-bold text-black group-hover:text-yellow-600 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="relative pl-6 border-l-4 border-yellow-500 mb-10">
              <p className="text-xl font-bold italic text-gray-800">“Every Gram of Gold Plants a Tree.”</p>
            </motion.div>

            <div className="flex gap-4">
              <Link to="/contact">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 transition-all">
                Join Our Plantation Drive <ArrowRight size={18} />
              </button></Link>
              <a href="#learn"><button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-md font-bold">Learn More</button></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: RURAL UPLIFTMENT (BLACK THEME) --- */}
      <section className="bg-black text-white py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content (Alternating side) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Rural Upliftment</motion.h2>
            <motion.p variants={fadeInUp} className="text-yellow-500 font-bold text-lg mb-8 uppercase tracking-widest">
              Empowering Rural Communities for Sustainable Growth
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-10">
              Pixla Gold Foundation is committed to enhancing the quality of life in rural India. 
              Through targeted programs, we provide education, healthcare, livelihood opportunities, 
              and skill development.
            </motion.p>

            <div className="space-y-8 mb-12">
              {[
                { icon: <GraduationCap />, title: "Education & Skill Development", desc: "Training programs and educational support to empower youth and women." },
                { icon: <Stethoscope />, title: "Healthcare Initiatives", desc: "Access to essential medical services and awareness programs." },
                { icon: <Briefcase />, title: "Livelihood Opportunities", desc: "Promoting entrepreneurship and income-generating projects in rural areas." },
                { icon: <Users />, title: "Community Empowerment", desc: "Encouraging local participation and decision-making for long-term impact." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-5 items-start group">
                  <div className="text-yellow-500 mt-1 bg-white/5 p-2 rounded-lg group-hover:bg-yellow-500/10 transition-colors">
                    {React.cloneElement(item.icon, { size: 22 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-yellow-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="relative pl-6 border-l-4 border-yellow-500 mb-10">
              <p className="text-xl font-bold italic tracking-wide">“Empowering Lives, Enabling Growth.”</p>
            </motion.div>

            <div className="flex gap-4">
              <Link to="/">
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-bold flex items-center gap-2 transition-all">
                Support Rural Initiatives <ArrowRight size={18} />
              </button></Link>
              <a href="#learn"><button className="border border-white/20 hover:border-white text-white px-8 py-3 rounded-md font-bold">Learn More</button></a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full animate-pulse"></div>
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