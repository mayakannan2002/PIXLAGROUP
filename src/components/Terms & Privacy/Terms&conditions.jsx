import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Scale, FileText, Globe, Copyright } from "lucide-react";
import Navbar from "./../../components/Navbar"

const TermsAndConditions = () => {
  const sections = [
    { id: "ownership", title: "1. Ownership", icon: <Copyright size={20} /> },
    { id: "use", title: "2. Use of Website", icon: <Globe size={20} /> },
    { id: "accuracy", title: "3. Information Accuracy", icon: <FileText size={20} /> },
    { id: "property", title: "4. Intellectual Property", icon: <ShieldAlert size={20} /> },
    { id: "liability", title: "6. Limitation of Liability", icon: <Scale size={20} /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
        <Navbar/>
      {/* --- Hero Header --- */}
      <section className="pt-32 pb-12 px-6 md:px-12 border-b border-white/10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-yellow-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4"
          >
            Legal Information
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Terms & <span className="text-yellow-400">Conditions</span>
          </motion.h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl">
            Pixla Group — Operated by Tripalive.Me Technology Pvt Ltd. 
            Please read these terms carefully before using our platform.
          </p>
        </div>
      </section>

      {/* --- Main Content Layout --- */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
          
          {/* Quick Nav (Hidden on Mobile) */}
          <aside className="hidden lg:block sticky top-32 h-fit space-y-4">
            <h4 className="text-yellow-500 font-bold text-[11px] uppercase tracking-widest mb-6">Quick Navigation</h4>
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

          {/* Legal Text Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-12 md:space-y-16"
          >
            
            {/* 1. Ownership */}
            <motion.div id="ownership" variants={fadeInUp} className="group">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">01</span> Ownership
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                This website, including all text, graphics, images, and other materials, is owned and operated by 
                <span className="text-white font-semibold"> Tripalive.Me Technology Pvt Ltd</span>. All rights are reserved.
              </p>
            </motion.div>

            {/* 2. Use of Website */}
            <motion.div id="use" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">02</span> Use of Website
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                By accessing or using this site, you agree to use it only for lawful purposes. You may not copy, modify, distribute, or reproduce any part of this website without prior written permission from Pixla Group or Tripalive.Me Technology Pvt Ltd.
              </p>
            </motion.div>

            {/* 3. Information Accuracy */}
            <motion.div id="accuracy" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">03</span> Information Accuracy
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                While we strive to ensure that the information provided is accurate and up to date, Pixla Group makes no warranties or representations regarding its completeness, accuracy, or reliability. Use of any information from this site is at your own risk.
              </p>
            </motion.div>

            {/* 4. Intellectual Property */}
            <motion.div id="property" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">04</span> Intellectual Property
              </h3>
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  All trademarks, logos, and content displayed on this site are the property of Tripalive.Me Technology Pvt Ltd and its group entities. Any unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.
                </p>
              </div>
            </motion.div>

            {/* 5. Third-Party Links */}
            <motion.div id="links" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">05</span> Third-Party Links
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                This website may contain links to external third-party websites. Pixla Group does not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party websites.
              </p>
            </motion.div>

            {/* 6. Limitation of Liability */}
            <motion.div id="liability" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <span className="text-white/20 text-4xl font-black">06</span> Limitation of Liability
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Pixla Group will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, or use of, this website. This includes errors, interruptions, data loss, or unauthorized access.
              </p>
            </motion.div>

            {/* 7 & 8 Bottom Footer Legal */}
            <motion.div variants={fadeInUp} className="pt-12 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-8 text-xs md:text-sm text-gray-500">
                <div>
                  <h5 className="text-white font-bold mb-2 uppercase tracking-widest">Modification of Terms</h5>
                  <p>Pixla Group reserves the right to update these terms at any time. Continued use of the site constitutes acceptance.</p>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-2 uppercase tracking-widest">Governing Law</h5>
                  <p>Governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* --- Simple Footer --- */}
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

export default TermsAndConditions;