import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Eye, Share2, Cookie, ExternalLink, RefreshCw, Mail } from "lucide-react";
import Navbar from "./../../components/Navbar"

const PrivacyPolicy = () => {
  const sections = [
    { id: "collect", title: "1. Information We Collect", icon: <Database size={20} /> },
    { id: "use", title: "2. How We Use Information", icon: <Eye size={20} /> },
    { id: "protection", title: "3. Data Protection", icon: <ShieldCheck size={20} /> },
    { id: "sharing", title: "4. Data Sharing", icon: <Share2 size={20} /> },
    { id: "cookies", title: "5. Cookies", icon: <Cookie size={20} /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
        <Navbar/>
      {/* --- Hero Header --- */}
      <section className="pt-32 pb-12 px-6 md:px-12 border-b border-white/10 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-yellow-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4"
          >
            User Privacy
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Privacy <span className="text-yellow-400">Policy</span>
          </motion.h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl">
            Pixla Group — Operated by Tripalive.Me Technology Pvt Ltd. 
            Your privacy is our priority. Learn how we handle your data.
          </p>
        </div>
      </section>

      {/* --- Main Content Layout --- */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
          
          {/* Quick Nav (Sticky on Desktop) */}
          <aside className="hidden lg:block sticky top-32 h-fit space-y-4">
            <h4 className="text-yellow-500 font-bold text-[11px] uppercase tracking-widest mb-6">Policy Sections</h4>
            {sections.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm py-2 border-b border-white/5"
              >
                {item.icon} {item.title}
              </a>
            ))}
          </aside>

          {/* Policy Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-12 md:space-y-16"
          >
            
            {/* 1. Information Collection */}
            <motion.div id="collect" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">01</span> Information We Collect
              </h3>
              <ul className="space-y-4 text-gray-400 text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="text-yellow-500">•</span>
                  <span><strong className="text-white">Personal details:</strong> Name, email address, and contact number provided via forms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">•</span>
                  <span><strong className="text-white">Technical info:</strong> IP address, browser type, and device details for analytics.</span>
                </li>
              </ul>
            </motion.div>

            {/* 2. Usage */}
            <motion.div id="use" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">02</span> How We Use Information
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4">
                Your data helps us respond to inquiries, improve website performance, and (with your consent) send updates regarding our gold ecosystem.
              </p>
            </motion.div>

            {/* 3. Protection */}
            <motion.div id="protection" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">03</span> Data Protection
              </h3>
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  We implement SSL encryption and secure servers to protect your personal data from unauthorized access or disclosure.
                </p>
              </div>
            </motion.div>

            {/* 4. Sharing */}
            <motion.div id="sharing" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">04</span> Data Sharing
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                We <strong className="text-white underline decoration-yellow-500">do not sell or trade</strong> your information. Data is only shared with trusted partners assisting in our services or when required by Indian Law.
              </p>
            </motion.div>

            {/* 5. Cookies */}
            <motion.div id="cookies" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">05</span> Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                We use cookies to analyze site performance and personalize content. You can manage or disable these via your browser settings.
              </p>
            </motion.div>

            {/* 6, 7, 8 Footer Legal */}
            <motion.div variants={fadeInUp} className="pt-12 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h5 className="text-white font-bold mb-3 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <ExternalLink size={14} className="text-yellow-500"/> External Links
                  </h5>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We are not responsible for the privacy practices of third-party websites linked on our platform.
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-3 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <RefreshCw size={14} className="text-yellow-500"/> Policy Updates
                  </h5>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    This policy may be updated periodically. Changes will be effective immediately upon posting.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="mt-12 p-8 bg-yellow-500 rounded-2xl text-black flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-black uppercase italic">Questions?</h4>
                  <p className="font-medium opacity-80">Reach out to our privacy compliance team.</p>
                </div>
                <a href="mailto:info@pixlagroup.com" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                  <Mail size={18} /> info@pixlagroup.com
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* --- Footer Bar --- */}
      <footer className="py-12 bg-zinc-950 text-center border-t border-white/5">
        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.2em]">
          Copyright © 2026 Pixla Group. All Rights Reserved.
        </p>
        <p className="text-gray-600 text-[10px] mt-2">
          Operated by Tripalive.Me Technology Pvt Ltd, Bangalore, India.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;