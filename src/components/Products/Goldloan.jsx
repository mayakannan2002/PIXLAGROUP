import React from "react";
import { motion } from "framer-motion";
import { Lock, Search, Sliders, Users, Quote } from "lucide-react";

// Asset Path - Replace with your gold loans / office image
import goldLoansImg from "./../../assets/Home/gold-loans-office.jpg";

const GoldLoans = () => {
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
      icon: <Lock className="text-yellow-600" size={22} />,
      title: "Secure Lending",
      desc: "Loans issued against verified gold with full compliance."
    },
    {
      icon: <Search className="text-yellow-600" size={22} />,
      title: "Transparent Process",
      desc: "Clear terms, real-time valuation, and easy approval."
    },
    {
      icon: <Sliders className="text-yellow-600" size={22} />,
      title: "Flexible Solutions",
      desc: "Short-term and customized financing options for every need."
    },
    {
      icon: <Users className="text-yellow-600" size={22} />,
      title: "Inclusive Access",
      desc: "Empowering individuals and businesses across India."
    }
  ];

  return (
    <section id="gold-loans" className="bg-white text-gray-900 py-20 px-6 md:px-12  overflow-hidden border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* --- Left Column: Image --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Subtle warm glow behind the image for depth */}
            <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full"></div>
            
            <img 
              src={goldLoansImg} 
              alt="Professional Gold Loan Office" 
              className="relative z-10 w-full rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>

          {/* --- Right Column: Text Content --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight text-black">
              Gold Loans
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-yellow-600 font-bold text-lg mb-8 uppercase tracking-widest">
              Quick, Transparent, and Secure Gold Financing
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
              Pixla Gold Finance provides gold-backed loans under the Pawn Broker Act, 
              offering individuals, businesses, and franchise partners fast and reliable 
              access to funds against their gold assets.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-8 mb-16">
              {features.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="flex gap-5 items-start group cursor-default"
                >
                  <div className="mt-1 bg-yellow-50 p-3 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
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
              className="relative pl-8 border-l-4 border-yellow-500 py-4 bg-yellow-50/30 rounded-r-2xl pr-8"
            >
              <Quote className="text-yellow-500/10 absolute -left-2 -top-4" size={50} fill="currentColor" />
              <p className="text-xl md:text-2xl font-bold italic leading-snug text-gray-800">
                “Unlock the Value of Your Gold, <br className="hidden md:block" /> Securely and Transparently.”
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GoldLoans;