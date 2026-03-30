import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Award, Headset, TrendingUp, Globe, BarChart, Menu, X } from "lucide-react";
import hero from "./../../assets/Home/franchisehero.png";
import logo from "./../../assets/PIXLA LOGO.jpg";
import BenefitsImg from "./../../assets/Home/Benefits.png"; // Renamed to avoid conflict with variable

const FranchisePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100); 
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const opportunities = [
    {
      title: "Pincode Franchise",
      desc: "Local-level exclusive operating in specific pincode area with digital gold and retail services.",
      features: ["Become the official provider in your area", "Training, marketing & setup assistance", "Earn on gold, jewelry & loans", "Be part of India's gold ecosystem"],
      tagline: "Empower Gold locally. Connect with India Nationally."
    },
    {
      title: "State Franchise",
      desc: "State-wide operations managing multiple Pincode franchises with expanded capabilities.",
      features: ["Expand across key locations", "Training and referral opportunities", "Free from gold & financial services", "Build with a trusted state network"],
      tagline: "Be a Part of India's Complete Gold Ecosystem."
    },
    {
      title: "Jewellery Franchise",
      desc: "Retail-level store franchise with manufacturing support and brand backing.",
      features: ["Manage operations in your niche", "Training, marketing & setup assistance", "Pre-born gold & financial services", "Grow within a national ecosystem"],
      tagline: "Lead Gold Innovation, Nationwide."
    }
  ];

  const benefits = [
    { icon: <Award className="text-yellow-500" />, title: "Brand Advantage", desc: "Leverage the credibility and trust of India's first social gold network." },
    { icon: <Headset className="text-yellow-500" />, title: "Comprehensive Support", desc: "Training, marketing, operations, and technology assistance." },
    { icon: <TrendingUp className="text-yellow-500" />, title: "Multiple Revenue Streams", desc: "Earn from digital gold, bullion trading, jewellery, and financial services." },
    { icon: <Globe className="text-yellow-500" />, title: "Nationwide Network", desc: "Be part of a growing social gold network across India." },
    { icon: <BarChart className="text-yellow-500" />, title: "Business Growth", desc: "Scale locally with Pincode franchises or statewide as a State Franchise." },
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 md:px-12 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3">
            <motion.img 
              whileHover={{ rotate: 360 }} 
              transition={{ duration: 0.5 }}
              src={logo} className="h-10 w-10 object-cover rounded-full" alt="Pixla Gold" 
            />
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-yellow-400 font-semibold tracking-widest text-lg"
            >
              PIXLA GOLD CORP
            </motion.span>
          </Link>

          <div  className="hidden lg:flex items-center gap-8 font-bold text-[11px] uppercase tracking-widest">
            <button onClick={() => scrollToSection('opportunities')} className="hover:text-yellow-400 transition">FRANCHISE OPPURTINITIES</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-yellow-400 transition">BENEFITS OF FRANCHISE</button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
               <Link to="/contact" className="group flex items-center gap-2 bg-amber-400 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300">
               APPLY FOR FRANCHISE
               <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
             </Link>
             </Link>
            </motion.div>
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
      <button 
        onClick={() => scrollToSection('opportunities')} 
        className="text-left py-2 border-b border-white/5 text-gray-200 font-bold text-[11px] uppercase tracking-widest"
      >
        FRANCHISE OPPORTUNITIES
      </button>
      
      <button 
        onClick={() => scrollToSection('benefits')} 
        className="text-left py-2 border-b border-white/5 text-gray-200 font-bold text-[11px] uppercase tracking-widest"
      >
        BENEFITS OF FRANCHISE
      </button>

      <Link 
        to="/contact" 
        onClick={() => setIsOpen(false)} 
        className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold text-center mt-2 uppercase text-[11px] tracking-widest"
      >
        APPLY FRANCHISE →
      </Link>
    </motion.div>
  )}
</AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <header className="pt-40 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-yellow-500 tracking-widest uppercase text-md mb-4 font-semibold">Franchise</motion.p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Join India's <span className="text-yellow-500">Gold Revolution</span>
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
            Pixla Gold offers nationwide franchise opportunities to expand its gold ecosystem. Entrepreneurs, businesses, and retailers can partner with Pixla to deliver gold products, digital gold services, and financial solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src={hero}
            alt="Interior showroom" 
            className="rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(250,204,21,0.15)]"
          />
        </motion.div>
      </header>

      {/* --- Opportunities Section --- */}
      <section id="opportunities" className="bg-[#E5E7EB] text-black py-20 md:px-12 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} className="uppercase text-md tracking-widest mb-2 font-bold text-yellow-600">Franchise Opportunities</motion.p>
          <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">Choose Your Path to Success</motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {opportunities.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -12, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)" }}
                className="bg-black text-white p-10 rounded-2xl text-left flex flex-col h-full shadow-xl border border-white/5"
              >
                <h3 className="text-2xl font-bold mb-4 border-b border-yellow-500/30 pb-4 text-yellow-500">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">{item.desc}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {item.features.map((feat, i) => (
                    <motion.li key={i} className="flex gap-3 items-start text-sm">
                      <CheckCircle2 size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-gray-200">{feat}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div 
                  whileHover={{ backgroundColor: "rgba(234, 179, 8, 0.1)" }}
                  className="border border-yellow-500/50 p-4 rounded-xl bg-yellow-500/5"
                >
                  <p className="text-yellow-500 text-xs italic font-medium">{item.tagline}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Benefits Section --- */}
      <section id="benefits" className="py-20 md:px-12 px-6 max-w-[1400px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center md:text-left underline decoration-yellow-500 underline-offset-8"
        >
          Franchise Benefits
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="flex gap-6 items-start border-b border-white/5 pb-8 group"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-4 bg-white/5 rounded-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300"
                >
                  {benefit.icon}
                </motion.div>
                <div>
                  <h4 className="font-bold text-xl mb-2 group-hover:text-yellow-400 transition-colors">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex flex-col items-center">
            <motion.img 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src={BenefitsImg}
              className="rounded-3xl mb-10 shadow-2xl border border-white/10"
            />
            <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#facc15" }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-12 py-4 rounded-full font-bold uppercase tracking-tighter shadow-[0_10px_20px_rgba(234,179,8,0.2)]"
            >
              Apply For Franchise
            </motion.button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;   