import React from "react";
import { motion } from "framer-motion";
import { 
  Search, Pickaxe, Factory, Settings, 
  Coins, Landmark, Store, LineChart 
} from "lucide-react";

const EcoSystemSection = () => {
  const steps = [
    { icon: <Search size={20} />, label: "EXPLORATION" },
    { icon: <Pickaxe size={20} />, label: "MINING" },
    { icon: <Factory size={20} />, label: "REFINING" },
    { icon: <Settings size={20} />, label: "MANUFACTURE" },
    { icon: <Shield size={20} />, label: "MAINTANANCE" }, // Correction: MAINTENANCE
    { icon: <Landmark size={20} />, label: "FINANCING" },
    { icon: <Store size={20} />, label: "RETAILING" },
    { icon: <LineChart size={20} />, label: "TRADING" },
  ];

  const gridItems = [
    { id: "01", title: "Exploration", desc: "Satellite-enabled exploration to identify and evaluate gold resources." },
    { id: "02", title: "Mining", desc: "Responsible and sustainable extraction of raw gold." },
    { id: "03", title: "Refining", desc: "Advanced processes to produce high-purity gold bars and bullion." },
    { id: "04", title: "Manufacturing", desc: "Creating premium jewellery and B2B gold products." },
    { id: "05", title: "Bullion", desc: "Trading and distributing gold for investors and institutions." },
    { id: "06", title: "Finance", desc: "Gold-backed loans and metal financing under the Pawn Broker Act." },
    { id: "07", title: "Retail", desc: "Accessible platforms for customers through stores, apps, and franchises." },
    { id: "08", title: "ESG Initiatives", desc: "Sustainability, tree plantation, rural upliftment, and financial inclusion." },
  ];

  const stats = [
    { val: "8", label: "Core Divisions" },
    { val: "100%", label: "Vertically Integrated" },
    { val: "99.99%", label: "Gold Purity" },
    { val: "360°", label: "Value Chain Coverage" },
  ];

  return (
    <section  id="eco" className="border border-white/10 bg-[#1D1D1D] text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-bold tracking-[0.3em] text-md uppercase mb-4">Gold Eco-System</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            From Discovery to <span className="text-yellow-400">Impact</span> – A <br /> Complete Gold Journey
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            A complete, integrated gold journey connecting every stage of the value chain — from earth to economy.
          </p>
        </div>

        {/* 1. Horizontal Icon Flow */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-20">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-3">
                <div className="text-yellow-500">{step.icon}</div>
                <span className="text-[10px] font-bold tracking-widest text-gray-400">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="text-yellow-500/30 text-xl font-light hidden md:block">▶</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 2. Numbered Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {gridItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#000000] border border-white/5 p-8 flex gap-6 items-start hover:border-yellow-500/30 transition-all group"
            >
              <span className="text-4xl font-bold text-yellow-500 opacity-80 group-hover:opacity-100">{item.id}</span>
              <div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Bottom Stat Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-black border border-white/10 p-10 text-center rounded-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">{stat.val}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Simple Shield Icon for the maintenance step
const Shield = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default EcoSystemSection;