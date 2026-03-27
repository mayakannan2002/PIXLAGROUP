import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Assets
import logo from "./../../assets/PIXLA LOGO.jpg";

const DivisionHeader = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-lg border-b border-white/10 font-sans">
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
        {/* Action Button Only */}
     
      </div>
    </nav>
  );
};

export default DivisionHeader;