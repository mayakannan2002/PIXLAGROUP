import React from "react";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, Banknote, Smile, Quote } from "lucide-react";
import oldGoldImg from "./../../assets/Home/old-gold-buying.jpg";

const OldGoldBuying = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between text elements
      }
    }
  };

  const features = [
    { icon: <Scale />, title: "Verified Valuation", desc: "Accurate gold weighing and market pricing." },
    { icon: <ShieldCheck />, title: "Secure Transactions", desc: "Safe and reliable exchange process." },
    { icon: <Banknote />, title: "Quick & Transparent", desc: "Fast payments with full clarity." },
    { icon: <Smile />, title: "Customer Convenience", desc: "Accessible through stores and apps." }
  ];

  return (
    <section id="old-gold" className="bg-gray-50 text-gray-900 py-24 px-6 md:px-12 overflow-hidden border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column: Image Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }} 
          className="order-2 lg:order-1 relative"
        >
          <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full"></div>
          <img 
            src={oldGoldImg} 
            alt="Expert Gold Appraisal" 
            className="relative z-10 w-full rounded-2xl shadow-2xl border border-white transition-transform duration-500 hover:scale-[1.01]" 
          />
        </motion.div>

        {/* Right Column: Text Animations */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="order-1 lg:order-2"
        >
          {/* Heading */}
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-black">
            Old Gold Buying
          </motion.h3>
          
          {/* Sub-heading */}
          <motion.p variants={fadeInUp} className="text-yellow-600 font-bold text-lg mb-8 uppercase tracking-[0.2em]">
            Secure, Transparent, and Fair Gold Exchange
          </motion.p>
          
          {/* Main Paragraph */}
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-12">
            Pixla Gold Network offers trusted services for buying old gold from individuals, 
            businesses, and franchise partners. Our processes are safe, transparent, 
            and provide fair value for every transaction.
          </motion.p>

          {/* Grid of Features - Staggered */}
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-y-10 gap-x-8 mb-16">
            {features.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="group">
                <div className="text-yellow-600 mb-3 group-hover:scale-110 group-hover:text-yellow-500 transition-all duration-300">
                  {React.cloneElement(item.icon, { size: 26 })}
                </div>
                <h4 className="font-bold text-lg mb-1 text-black group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote Block with specialized animation */}
          <motion.div 
            variants={fadeInUp}
            className="relative pl-8 border-l-4 border-yellow-500 py-5 bg-white shadow-sm rounded-r-2xl pr-8"
          >
            <Quote className="text-yellow-500/10 absolute -left-2 -top-4" size={50} fill="currentColor" />
            <p className="text-xl md:text-2xl font-bold italic text-gray-800 tracking-tight leading-snug">
              “Turning Your Old Gold into Instant Value, Safely and Fairly.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OldGoldBuying;