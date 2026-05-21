import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Download, TrendingUp, ShieldCheck, 
  BarChart3, PieChart, Zap, Globe2, Rocket, 
  Leaf, Briefcase 
} from "lucide-react";
import I1 from "./../../assets/Home/I1.png";
import I2 from "./../../assets/Home/I2.jpg";

// Assets
import logo from "./../../assets/PIXLA LOGO.jpg";
import Pitchdesk from "./../../assets/Home/Pitchdesk.pdf";

const heroImg = I1;
const growthImg = I2;

const InvestorPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <motion.img 
              whileHover={{ rotate: 360 }} 
              transition={{ duration: 0.5 }}
              src={logo}
              className="h-10 w-10 object-cover rounded-full"
              alt="Pixla Gold"
            />
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-yellow-400 font-semibold tracking-widest text-lg"
            >
              PIXLA GOLD CORP
            </motion.span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-bold text-[11px] uppercase tracking-widest">
            <button onClick={() => scrollToSection('highlights')} className="hover:text-yellow-400 transition">
              INVESTMENT HIGHLIGHTS
            </button>
            <button onClick={() => scrollToSection('financials')} className="hover:text-yellow-400 transition">
              FINANCIAL HIGHLIGHTS
            </button>
            <button onClick={() => scrollToSection('growth')} className="hover:text-yellow-400 transition">
              GROWTH PLAN
            </button>

            <Link to="/contact" className="group flex items-center gap-2 bg-amber-400 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300">
              APPLY INVESTOR
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <button className="md:hidden text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black border-b border-white/10 px-6 py-6 flex flex-col gap-5"
            >
              <button onClick={() => scrollToSection('highlights')} className="text-left py-2 border-b border-white/5 text-gray-200 text-[11px] font-bold uppercase tracking-widest">
                Investment Highlights
              </button>
              <button onClick={() => scrollToSection('financials')} className="text-left py-2 border-b border-white/5 text-gray-200 text-[11px] font-bold uppercase tracking-widest">
                Financial Highlights
              </button>
              <button onClick={() => scrollToSection('growth')} className="text-left py-2 border-b border-white/5 text-gray-200 text-[11px] font-bold uppercase tracking-widest">
                Growth Plan
              </button>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold text-center mt-2 uppercase text-[11px] tracking-widest">
                Apply Investor →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section (Reduced Padding) --- */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-md font-bold mb-4">INVESTORS</p>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-[1.1]">
            Invest in India's <span className="text-yellow-400">Gold Future</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            Invites investors to explore our growth story, financial performance, and strategic plans. 
            We provide transparent insights and opportunities for collaboration.
          </p>
          
          <motion.a
            href={Pitchdesk}
            download="Pixla_Gold_Pitch_Deck.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-gray-200 transition cursor-pointer"
          >
            <Download size={20} /> Download Pitch Desk
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <img src={heroImg} alt="Pixla corporate team" className="rounded-sm w-full h-[450px] object-cover border border-white/10" />
        </motion.div>
      </section>

      {/* --- Investment Highlights Section (Reduced py-24 to py-16) --- */}
      <section id="highlights" className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.h2 
          initial="hidden" whileInView="visible" variants={fadeInUp}
          className="text-center text-3xl font-bold mb-12 uppercase tracking-widest"
        >
          Investment Highlights
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          <HighlightCard 
            icon={<Briefcase />} 
            title="Market Leadership" 
            desc="Leveraging a unique gold ecosystem connecting exploration, mining, refining, manufacturing, bullion, finance, retail, and ESG initiatives." 
          />
          <HighlightCard 
            icon={<TrendingUp />} 
            title="Sustainable Growth" 
            desc="Combining traditional gold value with modern digital solutions for long-term profitability." 
          />
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 text-gray-400 text-sm leading-relaxed"
          >
            Pixla Gold Corp presents a comprehensive overview for investors, showcasing our position as India’s first social gold network.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="p-8">
            <h3 className="text-yellow-500 font-bold text-2xl italic text-center md:text-left leading-tight">
              “Invest in Gold, Invest in India’s Future.”
            </h3>
          </div>
          <HighlightCard 
            icon={<Zap />} 
            title="Investment Potential" 
            desc="Clear pathways for investors to participate in a rapidly growing gold market." 
          />
          <HighlightCard 
            icon={<ShieldCheck />} 
            title="Strategic Vision" 
            desc="Plans for expansion, product diversification, and franchise growth." 
          />
        </div>
      </section>

      {/* --- Financial Highlights (Reduced py-24 to py-16) --- */}
      <section id="financials" className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12 uppercase tracking-widest">Financial Highlights</h2>
        
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-5 pr-8">
            <p className="text-gray-400 leading-relaxed mb-8">
              Pixla Gold Corp provides key financial metrics to help investors evaluate the company's growth and stability.
            </p>
            <h3 className="text-yellow-500 font-bold text-2xl italic leading-tight">
              "Strong Numbers, Transparent Growth."
            </h3>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <HighlightCard icon={<Rocket />} title="Revenue Growth" desc="Consistent increase in income across bullion and digital gold." />
            <HighlightCard icon={<PieChart />} title="Profitability" desc="Healthy margins from trading and franchise operations." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HighlightCard icon={<Zap />} title="Investment Returns" desc="Attractive opportunities for institutional and retail investors." />
          <HighlightCard icon={<BarChart3 />} title="Operational Efficiency" desc="Optimized supply chain ensures cost effectiveness." />
          <HighlightCard icon={<Globe2 />} title="Financial Transparency" desc="Annual results and performance reports available." />
        </div>
      </section>

      {/* --- Growth Plan Section (Reduced margins and padding) --- */}
      <section id="growth" className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto bg-[#050505] rounded-3xl border border-white/5 my-10">
        <h2 className="text-2xl font-bold mb-12 tracking-widest text-center md:text-left">Growth Plan</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={growthImg} alt="Growth chart" className="rounded-lg w-full h-[350px] object-cover hover:grayscale-0 transition duration-700" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
            <GrowthItem icon={<Rocket className="text-yellow-500" />} title="Strategic Partnerships" desc="Collaborate with banks and fintechs." />
            <GrowthItem icon={<Leaf className="text-green-500" />} title="Sustainability & ESG" desc="Tree plantation and rural upliftment." />
            <GrowthItem icon={<TrendingUp className="text-blue-500" />} title="Market Penetration" desc="Expand B2B and institutional services." />
            <GrowthItem icon={<Zap className="text-yellow-400" />} title="New Product Launches" desc="Innovative gold products." />
            <GrowthItem icon={<BarChart3 className="text-purple-500" />} title="Digital Gold & Tech" desc="Seamless platforms for tracking gold." />
            <GrowthItem icon={<Globe2 className="text-red-500" />} title="Franchise Expansion" desc="Expand across states and pincodes." />
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/contact" className="bg-yellow-500 text-black px-12 py-2 rounded-full font-bold flex items-center gap-3 hover:bg-yellow-400 transition">
            Apply Investors <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const HighlightCard = ({ icon, title, desc, span = "" }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: "rgba(250, 204, 21, 0.5)" }}
    className={`border border-white/20 p-8 rounded-sm bg-black/50 ${span}`}
  >
    <div className="text-yellow-500 mb-6">{icon}</div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const GrowthItem = ({ icon, title, desc }) => (
  <div>
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h4 className="font-bold text-lg">{title}</h4>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default InvestorPage;