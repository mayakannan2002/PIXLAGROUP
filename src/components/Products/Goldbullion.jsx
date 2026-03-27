import React from "react";
import { motion } from "framer-motion";
import { Medal, BarChart3, Truck, Eye, Quote } from "lucide-react";
import bullionImg from "./../../assets/Home/gold-bullion-stack.jpg";

const GoldBullion = () => {
  return (
    <section id="bullion" className="bg-gray-50 text-gray-900 py-20 px-6 md:px-12  overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="order-2 lg:order-1 relative"
        >
          <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full"></div>
          <img 
            src={bullionImg} 
            alt="Bullion Stack" 
            className="relative z-10 w-full rounded-2xl shadow-xl border border-white"
          />
        </motion.div>

        {/* Right Column: Text */}
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight text-black">Gold Bullion Trading</h3>
          <p className="text-yellow-600 font-bold text-lg mb-8 uppercase tracking-widest">
            Secure, Transparent, and Profitable
          </p>
          
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 mb-16">
            {[
              { icon: <Medal />, title: "High-Purity Bullion", desc: "Verified and assayed gold bars." },
              { icon: <BarChart3 />, title: "Trading & Investment", desc: "Seamless large-scale distribution." },
              { icon: <Truck />, title: "Secure Logistics", desc: "Safe handling and delivery of bullion." },
              { icon: <Eye />, title: "Market Transparency", desc: "Real-time pricing and processes." }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h4 className="font-bold text-lg mb-2 text-black">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative pl-8 border-l-4 border-yellow-500 py-2 bg-white shadow-sm rounded-r-xl pr-6">
            <Quote className="text-yellow-500/5 absolute -left-2 -top-4" size={50} fill="currentColor" />
            <p className="text-xl md:text-2xl font-bold italic leading-snug text-gray-800">
              “Reliable Bullion, Trusted <br /> Transactions.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldBullion;