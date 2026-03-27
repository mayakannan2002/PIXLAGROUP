import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/PIXLA LOGO.jpg";

const menuItems = [
  { title: "About Us", path: "/about" },
  { title: "Divisions", path: "/divisions" },
  { title: "Products", path: "/product" },
  { title: "Franchise", path: "/franchise" },
  { title: "Investors", path: "/investor" },
  { title: "Esg", path: "/esg" },
  { title: "CAREERS", id: "careers" }, // Changed to id
  { title: "MEDIA & NEWS", id: "news" },       // Changed to id
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  // 🔥 Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobile(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-[-1px] left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800 text-white font-sans">
      <div className="max-w-[1400px] px-6 md:px-12 py-5 mx-auto flex items-center justify-between">
        
        {/* LOGO */}
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

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-[11px] uppercase tracking-widest">
          {menuItems.map((menu, index) => (
            menu.id ? (
              // Scroll Link
              <button
                key={index}
                onClick={() => scrollToSection(menu.id)}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                {menu.title}
              </button>
            ) : (
              // Route Link
              <Link
                key={index}
                to={menu.path}
                className={`relative transition-colors duration-300 hover:text-yellow-400 ${
                  location.pathname === menu.path ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                {menu.title}
                {location.pathname === menu.path && (
                  <motion.span 
                    layoutId="underline" 
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400" 
                  />
                )}
              </Link>
            )
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          <motion.button
            onClick={() => scrollToSection("contact")} // Scrolled to Contact
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-yellow-400 text-black text-[12px] font-bold rounded-md px-6 py-2 uppercase tracking-widest hover:bg-yellow-300 transition shadow-[0_0_15px_rgba(250,204,21,0.2)]"
          >
            Let's Talk
          </motion.button>

          {/* MOBILE TOGGLE */}
          <div onClick={() => setMobile(!mobile)} className="lg:hidden cursor-pointer">
             {/* ... burger icon code ... */}
             <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all ${mobile ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all ${mobile ? "opacity-0" : ""}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all ${mobile ? "-rotate-45 -translate-y-2" : ""}`}></span>
             </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
     {/* MOBILE MENU */}
<AnimatePresence>
  {mobile && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-[70px] left-0 w-full bg-black border-t border-gray-800 z-40 lg:hidden shadow-2xl"
    >
      <div className="flex flex-col p-8 gap-6 text-center bg-[#0a0a0a]">
        {menuItems.map((menu, index) => (
          menu.id ? (
            <button
              key={index}
              onClick={() => {
                scrollToSection(menu.id);
                setMobile(false);
              }}
              className="text-gray-300 hover:text-yellow-400 font-bold text-sm uppercase tracking-widest"
            >
              {menu.title}
            </button>
          ) : (
            <Link
              key={index}
              to={menu.path}
              onClick={() => setMobile(false)}
              className="text-gray-300 hover:text-yellow-400 font-bold text-sm uppercase tracking-widest"
            >
              {menu.title}
            </Link>
          )
        ))}
        
        {/* Mobile Let's Talk Button */}
        <button 
          onClick={() => {
            scrollToSection("contact");
            setMobile(false);
          }}
          className="bg-yellow-400 text-black py-4 rounded-md font-bold uppercase text-sm tracking-widest mt-4 shadow-lg active:scale-95 transition-transform"
        >
          Let's Talk
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}