import React from "react";
import { motion } from "framer-motion";
import { Leaf, Scale, Sprout, Infinity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sustainability = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cards = [
    {
      icon: <Leaf className="text-yellow-500" size={24} />,
      title: "Eco-Friendly Operations",
      desc: "Environmentally responsible mining, refining, and manufacturing processes."
    },
    {
      icon: <Scale className="text-yellow-500" size={24} />,
      title: "Ethical Sourcing",
      desc: "Ensuring gold is sourced responsibly, adhering to global standards."
    },
    {
      icon: <Sprout className="text-yellow-500" size={24} />,
      title: "Community & Environmental Impact",
      desc: "Supporting tree plantations, rural upliftment, and financial inclusion programs."
    },
    {
      icon: <Infinity className="text-yellow-500" size={24} />,
      title: "Long-Term Commitment",
      desc: "Building a sustainable gold ecosystem that balances profitability with responsibility."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12  text-center">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Header --- */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Sustainability</h2>
          <p className="text-yellow-500 font-bold text-lg mb-8 uppercase tracking-widest">
            Responsible Gold for a Better Future
          </p>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Pixla Gold Corp is committed to sustainable practices across the entire gold ecosystem, 
            from mining and refining to manufacturing, retail, and ESG initiatives. We aim to minimize 
            environmental impact, promote ethical sourcing, and create long-term value.
          </p>
        </motion.div>

        {/* --- Cards Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white text-gray-900 p-8 rounded-l text-left flex flex-col items-start transition-all shadow-xl"
            >
              <div className="bg-black p-3 rounded-lg mb-6">
                {card.icon}
              </div>
              <h4 className="font-extrabold text-xl mb-3 leading-tight">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Quote & Actions --- */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
        >
          <h3 className="text-yellow-500 font-bold text-xl md:text-2xl italic mb-12">
            “Sustainable Gold, Sustainable Future.”
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#learn">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 transition-all">
              Learn More <ArrowRight size={18} />
            </button></a>
            <Link to="/contact">
            <button className="border border-white/20 hover:border-white text-white px-8 py-3 rounded-md font-bold transition-all">
              Join Our Mission
            </button></Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Sustainability;