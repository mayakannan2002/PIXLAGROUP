import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wallet, TrendingUp, UserRound, ShieldCheck, ArrowRight, Quote } from "lucide-react";

// Asset Path
import inclusionImg from "./../../assets/Home/financial-inclusion.jpg";

const FinancialInclusion = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const features = [
    {
      icon: <Wallet className="text-yellow-600" size={20} />,
      title: "Accessible Gold Financing",
      desc: "Loans and digital gold services tailored for individuals and small businesses."
    },
    {
      icon: <TrendingUp className="text-yellow-600" size={20} />,
      title: "Empowering Communities",
      desc: "Enabling financial literacy and awareness for better money management."
    },
    {
      icon: <UserRound className="text-yellow-600" size={20} />,
      title: "Support for Women",
      desc: "Focused programs to uplift groups through gold-backed financial solutions."
    },
    {
      icon: <ShieldCheck className="text-yellow-600" size={20} />,
      title: "Transparent & Secure",
      desc: "Safe, reliable, and regulated financial services for all participants."
    }
  ];

  return (
    <section id="financial-inclusion" className="bg-white text-gray-900 py-12 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          
          {/* --- Column 1: Image (Appears second on mobile for better flow) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 md:-inset-10 bg-yellow-500/5 blur-[60px] md:blur-[100px] rounded-full"></div>
            
            <img 
              src={inclusionImg} 
              alt="Financial inclusion" 
              className="relative z-10 w-full rounded-2xl shadow-xl border border-gray-100 object-cover aspect-square sm:aspect-[4/3] lg:aspect-auto"
            />
            
            {/* Decorative element for Desktop */}
            <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 rounded-2xl -z-0"></div>
          </motion.div>

          {/* --- Column 2: Content --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-black">
              Financial Inclusion
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-yellow-600 font-bold text-sm md:text-base lg:text-lg mb-6 md:mb-8 uppercase tracking-[0.2em]">
              Gold-Backed Access for All
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              Pixla Gold Foundation empowers underserved communities. Our initiatives enable individuals 
              to leverage gold for loans and investments, fostering true financial independence.
            </motion.p>

            {/* Feature List - Grid on tablet, single col on mobile */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8 mb-12">
              {features.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="flex gap-4 md:gap-5 items-start group"
                >
                  <div className="shrink-0 mt-1 bg-yellow-50 p-2.5 rounded-lg group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1 text-black">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Block */}
            <motion.div 
              variants={fadeInUp}
              className="relative pl-6 md:pl-8 border-l-4 border-yellow-500 mb-10"
            >
              <Quote className="text-yellow-500/10 absolute -left-2 -top-4" size={40} fill="currentColor" />
              <p className="text-lg md:text-2xl font-bold italic text-gray-800 leading-snug">
                “Empowering Lives Through Access to Gold.”
              </p>
            </motion.div>

            {/* Buttons - Stack on mobile, row on desktop */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/" className="w-full sm:w-auto">
                <button className="w-full bg-yellow-600 hover:bg-black text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
                  Get Started <ArrowRight size={18} />
                </button>
              </Link>
              <a href="#learn" className="w-full sm:w-auto">
                <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-md font-bold transition-all text-center">
                  Learn More
                </button>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinancialInclusion;