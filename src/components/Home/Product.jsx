import React from "react";
import { motion } from "framer-motion";
import { 
  Coins, 
  BarChart3, 
  Gem, 
  PiggyBank, 
  Landmark, 
  CircleDollarSign, 
  Store 
} from "lucide-react";

const services = [
  { icon: <Coins size={32} />, title: "Digital Gold", desc: "Buy, sell, lease & track gold effortlessly through our secure digital platforms." },
  { icon: <BarChart3 size={32} />, title: "Gold Bullion Trading", desc: "Secure, transparent, and profitable bullion trading for investors." },
  { icon: <Gem size={32} />, title: "Gold Jewellery", desc: "Premium hallmarked gold jewellery combining traditional and contemporary designs." },
  { icon: <PiggyBank size={32} />, title: "Gold Loans", desc: "Quick, transparent, and secure gold-backed loans under the Pawn Broker Act." },
  { icon: <Landmark size={32} />, title: "Metal Loans", desc: "Collateral-based financing using gold for business growth and investment." },
  { icon: <CircleDollarSign size={32} />, title: "Old Gold Buying", desc: "Verified valuation with real-time market pricing and secure transactions." },
  { icon: <Store size={32} />, title: "Franchise Programs", desc: "Pincode-wise, state-wide, and jewellery franchise opportunities across India." },
];

const scrollItems = [...services, ...services];

const GoldServices = () => {
  return (
    /* 1. Added relative and overflow-hidden to the main section */
    <section className="bg-[#2A1405] relative overflow-hidden">
      
      {/* 2. Container constrained to 1400px and centered */}
      <div className="max-w-[1400px] mx-auto py-20 px-6 md:px-12 relative">
        
        {/* Header Section */}
        <div className="text-center mb-12 relative z-10">
          <p className="text-yellow-400 tracking-[0.3em] uppercase mb-2 text-sm">
            Products & Services
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Gold Solution For <span className="text-yellow-500">Everyone</span>
          </h2>
        </div>

        {/* Scroll Container - scoped within the 1400px width */}
        <div className="relative flex overflow-hidden group z-10">
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#2A1405] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#2A1405] to-transparent z-20 pointer-events-none"></div>

          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            /* Fixed pause: uses a CSS-based approach or Framer control */
            whileHover={{ scale: 1 }} 
          >
            {scrollItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center transition-all hover:border-yellow-500/50 hover:bg-black/60"
              >
                <div className="flex justify-center mb-6 text-yellow-500">
                  <div className="p-3 bg-yellow-500/10 rounded-xl">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Blocks - Kept inside the 1400px container or outside? 
            Currently inside so they follow the center alignment */}
        <div className="absolute bottom-10 left-0 w-12 h-12 bg-yellow-600 rounded-lg opacity-10 -rotate-12"></div>
        <div className="absolute top-1/3 right-0 w-16 h-16 bg-yellow-500 rounded-lg opacity-10 rotate-12"></div>
      </div>
    </section>
  );
};

export default GoldServices;