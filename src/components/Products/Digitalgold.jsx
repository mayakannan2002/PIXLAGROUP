import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Smartphone, Quote } from "lucide-react";

// Asset Path
import digitalGoldImg from "./../../assets/Home/digital-gold-mockup.jpg";

const ProductsServices = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const features = [
    {
      icon: <ShieldCheck className="text-yellow-500" size={24} />,
      title: "Secure & Transparent",
      desc: "Real-time pricing and verified gold storage."
    },
    {
      icon: <RefreshCw className="text-yellow-500" size={24} />,
      title: "Flexible Transactions",
      desc: "Buy, sell, or lease small or large quantities digitally."
    },
    {
      icon: <Smartphone className="text-yellow-500" size={24} />,
      title: "Track & Manage",
      desc: "Monitor your gold portfolio easily through apps and online platforms."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Section Header Animation --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 mt-5 tracking-tight uppercase">
            Products & <span className="text-yellow-500">Services</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Pixla Gold Corporation offers a complete suite of gold products and services, 
            combining traditional value with modern innovation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Features with Staggered Slide */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-4">
              Digital Gold
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-yellow-500 font-bold text-lg mb-8 tracking-wide">
              Buy, Sell, Lease & Track Gold Effortlessly
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
              Pixla Gold offers secure, transparent, and convenient digital gold solutions. 
              Customers can buy, sell, lease, and monitor their gold holdings anytime, 
              anywhere using our advanced platforms.
            </motion.p>

            {/* Feature List Items Sliding in one by one */}
            <div className="space-y-8 mb-16">
              {features.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 items-start transition-colors group"
                >
                  <div className="mt-1 bg-yellow-500/10 p-2 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Block with "Draw-in" Animation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative pl-8 border-l-4 border-yellow-500 py-2"
            >
              <Quote className="text-yellow-500/20 absolute -left-3 -top-6" size={50} fill="currentColor" />
              <p className="text-xl md:text-2xl font-bold italic leading-snug tracking-wide">
                “Gold in Your Hands, Anytime, <br /> Anywhere.”
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Phone Mockup with Floating Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            {/* Soft Glow behind phone */}
            <div className="absolute -inset-10 bg-yellow-500/10 blur-[120px] rounded-full animate-pulse"></div>
            
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={digitalGoldImg} 
              alt="Digital Gold Portfolio" 
              className="relative z-10 w-full rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-yellow-500/10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductsServices;