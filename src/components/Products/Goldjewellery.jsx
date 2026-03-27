import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Store, PenTool, Quote } from "lucide-react";

// Asset Path - Replace with your jewellery image
import jewelleryImg from "./../../assets/Home/gold-jewellery-collection.jpg";

const GoldJewellery = () => {
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
      icon: <Sparkles className="text-yellow-500" size={22} />,
      title: "Premium Designs",
      desc: "Contemporary and classic jewellery for every taste."
    },
    {
      icon: <CheckCircle2 className="text-yellow-500" size={22} />,
      title: "Assured Purity",
      desc: "Hallmarked and quality-checked gold products."
    },
    {
      icon: <Store className="text-yellow-500" size={22} />,
      title: "B2B & Retail Supply",
      desc: "Serving stores, franchises, and individual customers."
    },
    {
      icon: <PenTool className="text-yellow-500" size={22} />,
      title: "Custom Creations",
      desc: "Personalized jewellery designs to meet unique requirements."
    }
  ];

  return (
    <section id="jewellery" className="bg-black text-white py-20 px-6 md:px-12  overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
              Gold Jewellery
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-yellow-500 font-bold text-lg mb-8 uppercase tracking-widest">
              Premium Gold Jewellery for Every Occasion
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
              Pixla Gold Manufacturing and Network deliver high-quality, exquisite gold jewellery 
              to retail customers, franchisees, and B2B clients. Combining traditional craftsmanship 
              with modern designs, we ensure elegance, purity, and trust in every piece.
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
                “Elegance, Purity, and Trust in Every Piece of Gold.”
              </p>
            </motion.div>
          </motion.div>

          {/* --- Right Column: Image --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            {/* Ambient Gold Glow behind image */}
            <div className="absolute -inset-10 bg-yellow-500/5 blur-[120px] rounded-full"></div>
            
            <img 
              src={jewelleryImg} 
              alt="Luxury Gold Jewellery Collection" 
              className="relative z-10 w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02] brightness-90 hover:brightness-100"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GoldJewellery;