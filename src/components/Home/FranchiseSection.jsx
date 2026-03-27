import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

// LEFT SIDE DATA
const leftData = [
  {
    title: "Pincode Franchise",
    desc: "Local-level franchise covering a specific pincode area with digital gold and retail services.",
  },
  {
    title: "State Franchise",
    desc: "State-wide operations managing multiple Pincode franchises with expanded capabilities.",
  },
  {
    title: "Jewellery Franchise",
    desc: "Retail jewellery franchise with manufacturing support and brand backing.",
  },
];

// RIGHT SIDE DATA WITH ICONS
const rightData = [
  {
    icon: <FaAward />,
    title: "Brand Advantage",
    desc: "Leverage the credibility and trust of India’s first social gold network.",
  },
  {
    icon: <FaUsers />,
    title: "Comprehensive Support",
    desc: "Training, marketing, operations, and technology assistance.",
  },
  {
    icon: <FaChartLine />,
    title: "Multiple Revenue Streams",
    desc: "Earn from digital gold, bullion trading, jewellery, and financial services.",
  },
  {
    icon: <FaGlobe />,
    title: "Nationwide Network",
    desc: "Be part of a growing social gold network across India.",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Growth",
    desc: "Scale locally with Pincode franchises or statewide as a State Franchise.",
  },
];

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FranchiseSection() {
  return (
    <section  className="bg-black text-white py-20">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
          <p className="text-yellow-400 tracking-[4px] text-md mb-6">
            FRANCHISE
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Join India’s{" "}
            <span className="text-yellow-400">Gold Revolution</span>
          </h2>

          <p className="text-gray-400 text-sm mb-10 max-w-md">
            Pixla Gold offers nationwide franchise opportunities to expand its gold ecosystem.
          </p>

          {/* LEFT CARDS */}
          <div className="space-y-4">
            {leftData.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="border border-gray-700 p-5 flex items-start gap-4 group cursor-pointer"
              >
                <ArrowRight className="text-yellow-400 mt-1 group-hover:translate-x-1 transition" />

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>

          <h3 className="text-lg font-semibold mb-6">
            Franchise Benefits
          </h3>

          {/* BENEFITS */}
          <div className="space-y-4">
            {rightData.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="border border-gray-700 p-5 flex items-start gap-4 group relative overflow-hidden"
              >
                {/* ICON */}
                <div className="text-yellow-400 text-xl mt-1 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          
          <a href="#contact" className="inline-block">
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(234,179,8,0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold"
      >
        Apply For Franchise
      </motion.button>
    </a>

        </motion.div>

      </div>
    </section>
  );
}