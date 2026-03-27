import React from "react";
import { motion } from "framer-motion";
import { Coins, Calendar, Zap, Building, Quote } from "lucide-react";

// Asset Path - Replace with your metal loans growth chart image
import metalLoansImg from "./../../assets/Home/metal-loans-chart.jpg";

const MetalLoans = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const features = [
    {
      icon: <Coins className="text-yellow-500" size={22} />,
      title: "Collateral-Based Financing",
      desc: "Loans secured against gold or other precious metals."
    },
    {
      icon: <Calendar className="text-yellow-500" size={22} />,
      title: "Flexible Terms",
      desc: "Short-term and customized financial solutions."
    },
    {
      icon: <Zap className="text-yellow-500" size={22} />,
      title: "Quick & Transparent",
      desc: "Easy approval process with clear terms and valuations."
    },
    {
      icon: <Building className="text-yellow-500" size={22} />,
      title: "Business & Individual Access",
      desc: "Supporting enterprises, franchises, and retail customers."
    }
  ];

  return (
    <section id="metal-loans" className="bg-black text-white py-20 px-6 md:px-12 overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* --- Left Column: Text Content --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
            Metal Loans
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-yellow-500 font-bold text-lg mb-8 uppercase tracking-widest">
            Leverage Gold to Unlock Financial Opportunities
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
            Pixla Gold Finance provides metal-backed loans, allowing businesses and individuals to access quick, 
            secure financing using gold as collateral. This innovative solution supports trade, 
            investment, and growth within the gold ecosystem.
          </motion.p>

          {/* Feature List */}
          <div className="space-y-8 mb-16">
            {features.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex gap-5 items-start group cursor-default"
              >
                <div className="mt-1 bg-white/5 p-2 rounded-lg group-hover:bg-yellow-500/10 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors">
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
            className="relative pl-8 border-l-4 border-yellow-500 py-3 bg-white/[0.02] rounded-r-xl pr-6"
          >
            <Quote className="text-yellow-500/10 absolute -left-2 -top-4" size={50} fill="currentColor" />
            <p className="text-xl md:text-2xl font-bold italic leading-snug">
              “Empowering Growth, One Gold Loan at a Time.”
            </p>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Image Animation --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Ambient Glow behind image */}
          <div className="absolute -inset-10 bg-yellow-500/10 blur-[120px] rounded-full animate-pulse"></div>
          
          <img 
            src={metalLoansImg} 
            alt="Metal Loans Growth Chart" 
            className="relative z-10 w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default MetalLoans;