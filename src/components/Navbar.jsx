import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./../assets/PIXLA LOGO.jpg";

const menuItems = [
  { title: "About Us", path: "/about" },
  { title: "Divisions", path: "/divisions" },
  { title: "Products", path: "/product" },
  { title: "Franchise", path: "/franchise" },
  { title: "Investors", path: "/investor" },
  { title: "ESG", path: "/esg" },
  { title: "CAREERS", id: "careers" },
  { title: "MEDIA & NEWS", id: "news" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  // ✅ PREVENT BACKGROUND SCROLL
  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobile]);

  const scrollToSection = (id) => {
    setMobile(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 text-white font-sans">
      <div className="max-w-[1400px] px-6 md:px-12 py-4 mx-auto flex items-center justify-between">

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
          {menuItems.map((menu, index) =>
            menu.id ? (
              <button
                key={index}
                onClick={() => scrollToSection(menu.id)}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {menu.title}
              </button>
            ) : (
              <Link
                key={index}
                to={menu.path}
                className={`relative transition-colors hover:text-yellow-400 ${
                  location.pathname === menu.path
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                {menu.title}

                {location.pathname === menu.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[1px] bg-yellow-400"
                  />
                )}
              </Link>
            )
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* DESKTOP BUTTON */}
          <Link to="/contact" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black text-[11px] font-bold rounded-full px-6 py-2 uppercase tracking-widest hover:bg-black hover:text-white border border-yellow-400 transition-all duration-300"
            >
              Let's Talk →
            </motion.button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden text-yellow-500 relative z-[110]"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  mobile ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  mobile ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  mobile ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black border-t border-white/5 lg:hidden z-[90] overflow-y-auto"
          >
            <div className="flex flex-col p-10 gap-8 items-start pb-20 min-h-full">

              {menuItems.map((menu, index) =>
                menu.id ? (
                  <button
                    key={index}
                    onClick={() => scrollToSection(menu.id)}
                    className="text-gray-200 font-bold text-[11px] uppercase tracking-widest text-left hover:text-yellow-400 w-full"
                  >
                    {menu.title}
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={menu.path}
                    onClick={() => setMobile(false)}
                    className={`font-bold text-[11px] uppercase tracking-widest w-full ${
                      location.pathname === menu.path
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }`}
                  >
                    {menu.title}
                  </Link>
                )
              )}

              {/* CONTACT BUTTON */}
              <Link
                to="/contact"
                onClick={() => setMobile(false)}
                className="w-full bg-yellow-400 text-black py-4 rounded-full font-bold uppercase text-[11px] tracking-widest text-center mt-4 active:scale-95 transition-all"
              >
                Let's Talk →
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}