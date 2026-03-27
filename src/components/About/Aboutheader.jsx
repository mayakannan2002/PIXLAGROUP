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
          <div className="flex items-center gap-8 text-[14px] font-bold uppercase text-gray-300">
            <button onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition cursor-pointer">About Us</button>
            <button onClick={() => scrollToSection('whypixla')} className="hover:text-yellow-400 transition cursor-pointer">Why Pixla</button>
            <button onClick={() => scrollToSection('founder')} className="hover:text-yellow-400 transition cursor-pointer">Founder & CEO</button>
            <button onClick={() => scrollToSection('leadership')} className="hover:text-yellow-400 transition cursor-pointer">Leadership</button>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
           <Link to="/contact">
  <button className="bg-yellow-400 text-black px-5 py-1 rounded-md font-bold tracking-widest hover:bg-yellow-400 transition-colors active:scale-95">
    LET'S TALK
  </button>
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
            <div className="px-8 py-12 flex flex-col gap-10 text-center text-[16px] font-bold uppercase tracking-[0.1em] text-gray-300">
              <button onClick={() => scrollToSection('about')} className="hover:text-yellow-400 active:text-yellow-500">About Us</button>
              <button onClick={() => scrollToSection('whypixla')} className="hover:text-yellow-400 active:text-yellow-500">Why Pixla</button>
              <button onClick={() => scrollToSection('founder')} className="hover:text-yellow-400 active:text-yellow-500">Founder & CEO</button>
              <button onClick={() => scrollToSection('leadership')} className="hover:text-yellow-400 active:text-yellow-500">Leadership</button>
              <Link to="/contact">
  <button className="bg-yellow-500 text-black px-6 py-4 rounded-md font-black tracking-widest hover:bg-yellow-400 transition-colors active:scale-95">
    LETS TALK
  </button>
</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AboutHeader;