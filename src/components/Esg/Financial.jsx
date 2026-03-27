import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wallet, TrendingUp, UserRound, ShieldCheck, ArrowRight, Quote,  } from "lucide-react";

// Asset Path - Replace with your uploaded image
import inclusionImg from "./../../assets/Home/financial-inclusion.jpg";

const FinancialInclusion = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const features = [
    {
      icon: <Wallet className="text-yellow-600" size={20} />,
      title: "Accessible Gold Financing",
      desc: "Loans and digital gold services tailored for individuals, small businesses, and entrepreneurs."
    },
    {
      icon: <TrendingUp className="text-yellow-600" size={20} />,
      title: "Empowering Communities",
      desc: "Enabling financial literacy and awareness for better money management."
    },
    {
      icon: <UserRound className="text-yellow-600" size={20} />,
      title: "Support for Women & Entrepreneurs",
      desc: "Focused programs to uplift marginalized groups through gold-backed financial solutions."
    },
    {
      icon: <ShieldCheck className="text-yellow-600" size={20} />,
      title: "Transparent & Secure",
      desc: "Safe, reliable, and regulated financial services for all participants."
    }
  ];

  return (
    <section id="financial-inclusion" className="bg-white text-gray-900 py-20 px-6 md:px-12  overflow-hidden border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* --- Left Column: Image --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Subtle background glow */}
          <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full"></div>
          
          <img 
            src={inclusionImg} 
            alt="Entrepreneur using gold financing services" 
            className="relative z-10 w-full rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 object-cover aspect-[4/3]"
          />
        </motion.div>

        {/* --- Right Column: Content --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight text-black">
            Financial Inclusion
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-yellow-600 font-bold text-lg mb-8 uppercase tracking-widest">
            Bringing Gold-Backed Financial Access to All
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-12">
            Pixla Gold Foundation is committed to empowering underserved communities by providing 
            access to gold-backed financial products and services. Our initiatives enable individuals 
            and businesses to leverage gold for loans, savings, and investments, fostering financial 
            independence and inclusion.
          </motion.p>

          {/* Feature List */}
          <div className="space-y-8 mb-16">
            {features.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="flex gap-5 items-start group"
              >
                <div className="mt-1 bg-yellow-50 p-2.5 rounded-lg group-hover:bg-yellow-100 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-black group-hover:text-yellow-600 transition-colors">
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
            className="relative pl-8 border-l-4 border-yellow-500 mb-12"
          >
            <Quote className="text-yellow-500/10 absolute -left-2 -top-4" size={50} fill="currentColor" />
            <p className="text-xl md:text-2xl font-bold italic text-gray-800 leading-snug">
              “Empowering Lives Through Access to Gold.”
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link to="/">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3.5 rounded-md font-bold flex items-center gap-2 transition-all shadow-lg shadow-yellow-600/20">
              Get Started <ArrowRight size={18} />
            </button></Link>
            <a href="#learn">
            <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-10 py-3.5 rounded-md font-bold transition-all">
              Learn More
            </button></a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinancialInclusion;