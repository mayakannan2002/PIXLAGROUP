import { motion } from "framer-motion";
import logo from "./../assets/Home/Footer Logo.png";
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent blur-3xl"></div>

      {/* MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-[1400px] mx-auto px-6 py-20 md:px-12 relative z-10"
      >

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 items-start">

          {/* LEFT: Branding */}
          <motion.div variants={fadeUp}>
            <img src={logo} className="h-10 mb-6" alt="Pixla Logo" />

            <h2 className="text-2xl font-semibold mb-4 leading-snug">
              Powering India's{" "}
              <span className="text-yellow-400">Gold Economy</span>
            </h2>

            <p className="text-gray-400 text-sm max-w-xs">
              Pixla Gold Corporation is building India's first fully integrated gold ecosystem, combining tradition with digital innovation.
            </p>
          </motion.div>

          {/* MIDDLE: Social & Community */}
          <motion.div variants={fadeUp} className="flex flex-col items-start md:items-center">
            <p className="text-gray-400 mb-6 uppercase tracking-[0.2em] text-xs font-bold">Connect With Us</p>
            <div className="flex gap-4 mb-6">
              {[
                { Icon: FaLinkedin, link: "https://www.linkedin.com/company/pixla-gold-corporation/posts/?feedView=all" },
                { Icon: FaInstagram, link: "https://www.instagram.com/pixla_official/" },
                // { Icon: FaFacebookF, link: "#" },
                // { Icon: FaTwitter, link: "#" },
                { Icon: FaYoutube, link: "https://www.youtube.com/@PixlaGroupOfficial" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer bg-white/5"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-xs tracking-widest uppercase">Join Our Community</p>
          </motion.div>

          {/* RIGHT: Contact & CTA */}
          <motion.div variants={fadeUp} className="md:text-right flex flex-col md:items-end">
             <a href="/contact" className="inline-block" >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-6 py-1 font-semibold rounded-md hover:bg-yellow-300 transition mb-6 w-fit"
            >
              LET'S TALK
            </motion.button>
             </a>

            <div className="text-gray-400 text-sm leading-relaxed">
              <p className="hover:text-yellow-400 transition cursor-pointer">pixlagoldcorp@gmail.com</p>
              <p className="text-lg font-semibold text-white mt-1">+91 87785 84566</p>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <motion.div
          variants={fadeUp}
          className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs"
        >
          <p>
            © 2026 Pixla Gold Corporation Pvt Ltd. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <p className="hover:text-yellow-400 cursor-pointer transition">Terms & Conditions</p>
            <p className="hover:text-yellow-400 cursor-pointer transition">Privacy Policy</p>
          </div>
        </motion.div>

      </motion.div>

      {/* BACKGROUND WATERMARK TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center pb-10"
      >
        <h1 className="text-[32px] sm:text-[45px] md:text-[70px] lg:text-[90px] font-bold text-center tracking-wider pointer-events-none select-none">
          <span className="text-yellow-400">PIXLA</span>{" "}
          <span className="text-white">GOLD CORP</span>
        </h1>
      </motion.div>
    </footer>
  );
}