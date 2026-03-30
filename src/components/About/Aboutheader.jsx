import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Assets
import logo from "./../../assets/PIXLA LOGO.jpg";

const AboutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    // 1. Close the menu first
    setIsOpen(false);
    
    // 2. Small timeout ensures the menu begins closing before scroll starts
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
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-md border-b border-white/10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 py-4 md:px-12 flex justify-between items-center">
        
        {/* Logo Section */}
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
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div  className="hidden lg:flex items-center gap-8 font-bold text-[11px] uppercase tracking-widest">
            <button onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition cursor-pointer">ABOUT US</button>
            <button onClick={() => scrollToSection('whypixla')} className="hover:text-yellow-400 transition cursor-pointer">WHY PIXLA</button>
            <button onClick={() => scrollToSection('founder')} className="hover:text-yellow-400 transition cursor-pointer">FOUNDER & CEO</button>
            <button onClick={() => scrollToSection('leadership')} className="hover:text-yellow-400 transition cursor-pointer">LEADERSHIP</button>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
           <Link to="/contact">
  <Link to="/contact" className="group flex items-center gap-2 bg-amber-400 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300">
  LET'S TALK 
  <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
</Link>
</Link>
          </motion.div>
        </div>

        {/* Mobile Toggle - Z-INDEX IS KEY HERE */}
        <button className="lg:hidden text-yellow-500 relative z-[110]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-[73px] lg:hidden bg-black border-b border-white/10 z-[100] h-screen"
    >
      {/* Changed items-center to items-start and added padding-left */}
      <div className="px-10 py-12 flex flex-col gap-8 items-start">
        
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-gray-200 font-bold text-[11px] uppercase tracking-widest hover:text-yellow-400 text-left transition-colors"
        >
          ABOUT US
        </button>

        <button 
          onClick={() => scrollToSection('whypixla')} 
          className="text-gray-200 font-bold text-[11px] uppercase tracking-widest hover:text-yellow-400 text-left transition-colors"
        >
          WHY PIXLA
        </button>

        <button 
          onClick={() => scrollToSection('founder')} 
          className="text-gray-200 font-bold text-[11px] uppercase tracking-widest hover:text-yellow-400 text-left transition-colors"
        >
          FOUNDER & CEO
        </button>

        <button 
          onClick={() => scrollToSection('leadership')} 
          className="text-gray-200 font-bold text-[11px] uppercase tracking-widest hover:text-yellow-400 text-left transition-colors"
        >
          LEADERSHIP
        </button>

        {/* Action Button - Kept full width or large for mobile tap targets */}
        <Link 
          to="/contact" 
          onClick={() => setIsOpen(false)}
          className="w-full bg-yellow-500 text-black py-4 rounded-full font-bold text-[11px] uppercase tracking-widest text-center hover:bg-yellow-400 transition-all active:scale-95 mt-4"
        >
          LET'S TALK →
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default AboutHeader;