import React from 'react';
import { motion } from 'framer-motion';
import T1 from "./../../assets/Home/T1.jpg";
import T2 from "./../../assets/Home/T2.jpg";

const AboutSection1 = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stats = [
    { val: "500k+", label: "Downloads" },
    { val: "Pre Revenue", label: "Annual Revenue" },
    { val: "100+", label: "Jewellery Partners" },
    { val: "200+", label: "Pincode wise franchise" },
     { val: "2", label: "State Franchises" },
    { val: "6Cr", label: "Total Funding Raised" },
   
    { val: "60Cr", label: "Current Valuvation" },
  ];

  return (
    <section id="about" className="pt-24 pb-24 px-6 md:px-12 bg-[#0A0500] text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- TITLE SECTION (Tightened Margin) --- */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Building India's Gold <span className="text-yellow-500">Standard</span>
          </h2>
        </motion.div>

        {/* --- DESCRIPTION GRID (Reduced Gaps) --- */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 border-b border-white/5 pb-16">
           <div className="md:col-span-2">
              <p className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[12px]">About Us</p>
           </div>
           <div className="md:col-span-5 text-gray-400 text-sm leading-relaxed pr-4">
              <p className="mb-4">
                We transform gold from a traditional commodity into a modern, transparent, and inclusive financial asset. Pixla Gold Corp creates a trusted platform for gold access with confidence.
              </p>
              <p>
                We are committed to sustainability and rural empowerment. Through Pixla Gold Foundation, we link wealth creation with social responsibility.
              </p>
           </div>
           <div className="md:col-span-5 text-gray-400 text-sm leading-relaxed">
              <p>
                Our group operates across the complete gold value chain — from discovery to delivering bullion and gold-backed products. This vertical integration enables quality control and price transparency.
              </p>
           </div>
        </div>

        {/* --- STATS AND IMAGES (Balanced Height) --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: 2-Column Stats Grid (To prevent vertical empty space) */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-black/50 border border-white/5 p-8 rounded-sm text-center hover:border-yellow-500/30 transition-all ${i === 6 ? 'col-span-2' : ''}`}
              >
                <div className="text-3xl font-bold text-yellow-500 mb-1">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Tighter Overlapping Images */}
          <div className="relative flex justify-center items-center h-[450px]">
            {/* Back Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute top-0 right-4 w-[280px] z-10"
            >
               <div className="relative group">
                <div className="absolute -inset-1 bg-white/10 blur-xl opacity-40"></div>
                <img src={T1} className="relative rounded-sm brightness-75 border border-white/10 aspect-[3/4] object-cover" alt="Office" />
               </div>
            </motion.div>
            
            {/* Front Image (Smaller & Overlapping) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-4 w-[240px] z-20"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-white/10 blur-xl opacity-40"></div>
                <img src={T2} className="relative rounded-sm border-[8px] border-[#0A0500] aspect-[3/4] object-cover shadow-2xl" alt="Trophy" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection1;