import React from 'react';
import { motion } from 'framer-motion';
import Rajsekar from "./../../assets/Home/Rajsekar.png";

const LeadershipSection = () => {
  const team = [
    { role: "Chief Operating Officer", desc: "Overseeing operations, supply chain, and franchise expansion.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
    { role: "Chief Financial Officer", desc: "Overseeing operations, supply chain, and franchise expansion.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
    { role: "Head of Gold Trading Bullion", desc: "Overseeing operations, supply chain, and franchise expansion.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" },
    { role: "Head of Digital Technology Platform", desc: "Overseeing operations, supply chain, and franchise expansion.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" },
    { role: "Head of ESG & Foundation", desc: "Overseeing operations, supply chain, and franchise expansion.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="bg-[#0A0500] text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* --- Founder Section --- */}
      <motion.div 
        id="founder" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-[1400px] mx-auto bg-[#1A0F05] rounded-2xl p-10 md:p-20 mb-32 border border-yellow-900/20"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <p className="text-yellow-500 font-bold mb-4 uppercase tracking-[0.3em] text-md">Founder & CEO</p>
            <h3 className="text-2xl md:text-4xl font-bold mb-8 italic">Rajasekar Sundaresan</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A visionary entrepreneur with deep expertise in technology, finance, and business strategy. He founded Pixla Gold Corporation with the mission of creating India's first fully integrated gold ecosystem.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-yellow-500/50 pl-4">
              "Under his leadership, Pixla has grown into a multi-vertical enterprise spanning exploration, mining, refining, and social impact."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
               {/* Decorative Ring Animation */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-[-10px] rounded-full border border-dashed border-yellow-500/20"
               />
               <img 
                 src={Rajsekar}
                 alt="Rajasekar Sundaresan - Founder & CEO" 
                 className="rounded-full w-full h-full object-cover border-4 border-yellow-500/30 relative z-10 grayscale hover:grayscale-0 transition duration-700"
               />
               <div className="absolute inset-0 rounded-full border-[12px] border-white/5 z-20 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Leadership Grid --- */}
      <div id="leadership" className="max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <p className="text-yellow-500 font-bold mb-4 uppercase tracking-[0.4em] text-md">Leadership Team</p>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">Pixla Gold Corporation is led by a team of experienced professionals with expertise in gold trading, finance, and technology.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-black/40 border border-white/10 p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-300 group cursor-default"
            >
              <h4 className="text-yellow-500 font-bold text-center mb-6 text-sm uppercase tracking-wider h-10 flex items-center justify-center group-hover:text-yellow-400">
                {member.role}
              </h4>
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 brightness-75 group-hover:brightness-100 transition duration-500 ring-1 ring-white/10 group-hover:ring-yellow-500/30">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src={member.img} 
                  alt={member.role} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" 
                />
              </div>
              <p className="text-gray-500 text-xs text-center leading-relaxed italic group-hover:text-gray-400 transition-colors">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;




// import React from 'react';
// import { motion } from 'framer-motion';
// import Rajsekar from "./../../assets/Home/Rajsekar.png";

// const LeadershipSection = () => {
//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   return (
//     <section className="bg-[#0A0500] text-white py-20 px-6 md:px-12 overflow-hidden">
      
//       {/* --- Founder Section --- */}
//       <motion.div 
//         id="founder" 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeInUp}
//         className="max-w-[1400px] mx-auto bg-[#1A0F05] rounded-2xl p-10 md:p-20 mb-20 border border-yellow-900/20"
//       >
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div variants={fadeInUp}>
//             <p className="text-yellow-500 font-bold mb-4 uppercase tracking-[0.3em] text-md">Founder & CEO</p>
//             <h3 className="text-2xl md:text-4xl font-bold mb-8 italic">Rajasekar Sundaresan</h3>
//             <p className="text-gray-400 text-sm leading-relaxed mb-6">
//               A visionary entrepreneur with deep expertise in technology, finance, and business strategy. He founded Pixla Gold Corporation with the mission of creating India's first fully integrated gold ecosystem.
//             </p>
//             <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-yellow-500/50 pl-4">
//               "Under his leadership, Pixla has grown into a multi-vertical enterprise spanning exploration, mining, refining, and social impact."
//             </p>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="flex justify-center"
//           >
//             <div className="relative w-64 h-64 md:w-80 md:h-80 group">
//                {/* Decorative Ring Animation */}
//                <motion.div 
//                  animate={{ rotate: 360 }}
//                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                  className="absolute inset-[-10px] rounded-full border border-dashed border-yellow-500/20"
//                />
//                <img 
//                  src={Rajsekar}
//                  alt="Rajasekar Sundaresan - Founder & CEO" 
//                  className="rounded-full w-full h-full object-cover border-4 border-yellow-500/30 relative z-10 grayscale hover:grayscale-0 transition duration-700"
//                />
//                <div className="absolute inset-0 rounded-full border-[12px] border-white/5 z-20 pointer-events-none"></div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* --- Mission & Vision Column Layout --- */}
//       <div className="max-w-[1400px] mx-auto">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           {/* Mission Column */}
//           <motion.div 
//             variants={fadeInUp} 
//             className="bg-black/40 border-l-4 border-yellow-500 p-10 rounded-r-xl backdrop-blur-sm"
//           >
//             <h4 className="text-yellow-500 font-bold mb-6 uppercase tracking-[0.3em] text-sm">Our Mission</h4>
//             <p className="text-gray-300 text-lg leading-relaxed font-light">
//               To democratize gold ownership by integrating physical assets with cutting-edge digital transparency, making gold a liquid and accessible asset for every Indian household.
//             </p>
//           </motion.div>

//           {/* Vision Column */}
//           <motion.div 
//             variants={fadeInUp} 
//             className="bg-black/40 border-l-4 border-yellow-500 p-10 rounded-r-xl backdrop-blur-sm"
//           >
//             <h4 className="text-yellow-500 font-bold mb-6 uppercase tracking-[0.3em] text-sm">Our Vision</h4>
//             <p className="text-gray-300 text-lg leading-relaxed font-light">
//               To become the global benchmark for gold-backed financial services, driven by ethical sourcing, technological excellence, and sustainable community growth.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Optional Social Impact Footer to match the overall width */}
//         <motion.div 
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mt-12 text-center"
//         >
//           <p className="text-gray-500 text-xs italic tracking-widest uppercase">
//             Driven by Purpose • Pixla Gold Foundation • Empowering Rural India
//           </p>
//         </motion.div>
//       </div>

//     </section>
//   );
// };

// export default LeadershipSection;