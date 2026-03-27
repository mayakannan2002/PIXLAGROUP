import { motion } from "framer-motion";
import image from "./../../assets/Home/Carrerbg.jpg"; // ✅ your image

const jobs = [
  {
    title: "UI / UX Designer",
    location: "Krishnagiri",
    type: "Full Time",
  },
  {
    title: "Web Developer",
    location: "Krishnagiri",
    type: "Full Time",
  },
  {
    title: "FrontEnd Developer",
    location: "Krishnagiri",
    type: "Full Time",
  },
];

// 🔥 Animation
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CareersSection() {
  return (
    <section id="careers"
      className="relative text-white min-h-screen flex items-center bg-cover bg-center py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${image})`, // ✅ FIXED
      }}
    >
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 Content Container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full"
      >

        {/* TOP CONTENT */}
        <motion.div variants={fadeUp} className="text-center mb-20">

          <p className="text-yellow-400 tracking-[4px] text-md mb-4">
            Careers
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            <span className="text-yellow-400">
              Build Your Future
            </span>{" "}
            With Pixla Gold
          </h2>

          <p className="text-gray-300 text-sm mt-4 max-w-2xl mx-auto">
            Join innovators shaping the future of technology,
            digital products, and customer experience.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
   <a href="#carrers" className="inline-block">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(234,179,8,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold"
            >
              View Open Positions
            </motion.button></a>
                 <a href="#contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 text-black px-6 py-3 rounded-md font-semibold"
            >
              Life at Pixla
            </motion.button></a>

          </div>
        </motion.div>

        {/* CURRENT OPENINGS */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="w-20 h-[2px] bg-yellow-400"></div>

          <p className="tracking-[4px] text-sm text-gray-300">
            Current Openings
          </p>

          <div className="w-20 h-[2px] bg-yellow-400"></div>
        </motion.div>

        {/* JOB CARDS */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-3 gap-8"
        >
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="border border-yellow-400/40 p-8 bg-black/40 backdrop-blur-md group relative overflow-hidden cursor-pointer"
            >
              {/* 🔥 Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/10 to-transparent"></div>

              {/* CONTENT */}
              <h3 className="text-lg font-semibold mb-4 relative z-10">
                {job.title}
              </h3>

              <p className="text-gray-400 text-sm relative z-10">
                {job.location}
              </p>

              <p className="text-gray-400 text-sm mb-6 relative z-10">
                {job.type}
              </p>

              {/* BUTTON */}
               <a href="#contact" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.08 }}
                className="bg-yellow-400 text-black px-5 py-2 rounded-md text-sm font-semibold relative z-10"
              >
                Apply Now
              </motion.button></a>

            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}