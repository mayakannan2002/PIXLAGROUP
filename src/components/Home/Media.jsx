import { motion } from "framer-motion";

// 🔥 Images
import G1 from "./../../assets/Home/G1.jpg";
import G2 from "./../../assets/Home/G2.jpg";
import G3 from "./../../assets/Home/G3.jpg";
import G4 from "./../../assets/Home/G4.jpg";
import G5 from "./../../assets/Home/G5.jpg";
import G6 from "./../../assets/Home/G6.jpg";
import G7 from "./../../assets/Home/G7.jpg";
import G8 from "./../../assets/Home/G8.jpg";
import G9 from "./../../assets/Home/G9.jpg";
import G10 from "./../../assets/Home/G10.jpg";

// 🔥 Animations (same as your previous sections)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 🔥 News
const news = [
  { img: G4, title: "New Gold Project Announcement", date: "Jan 2026" },
  { img: G5, title: "Future Of Digital Gold Investment", date: "Feb 2026" },
  { img: G6, title: "Community Development Initiative", date: "Mar 2026" },
];

// 🔥 Gallery (ONLY 4)
const gallery = [G7, G8, G9, G10];

export default function MediaNewsSection() {
  return (
    <section id="news" className="bg-black text-white py-20 overflow-hidden">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-[1400px] mx-auto px-6 md:px-12"
      >

        {/* 🔥 HEADING */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-yellow-400 text-md tracking-[4px] mb-4">
            MEDIA & NEWS
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            Experience The World Of{" "}
            <span className="text-yellow-400">Gold With Pixla</span>
          </h2>
        </motion.div>

        {/* 🔥 TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-4 mb-20">

          {/* LEFT */}
          <div className="grid grid-rows-2 gap-4 h-[320px]">

            {/* PRESS */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 border border-gray-700 h-full items-stretch"
            >
              <div className="p-4 flex flex-col justify-center">
                <h3 className="font-semibold mb-2">Press Release</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Official announcements and corporate updates
                </p>
                <button className="bg-yellow-400 text-black px-3 py-1 text-xs rounded w-fit">
                  Read Press Release
                </button>
              </div>

              <div className="w-full h-full overflow-hidden group">
                <img
                  src={G1}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* BLOG */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 border border-gray-700 h-full items-stretch"
            >
              <div className="w-full h-full overflow-hidden group">
                <img
                  src={G2}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 flex flex-col justify-center">
                <h3 className="font-semibold mb-2">Blogs</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Explore expert articles and updates
                </p>
                <button className="bg-yellow-400 text-black px-3 py-1 text-xs rounded w-fit">
                  Read Blog
                </button>
              </div>
            </motion.div>

          </div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 border border-gray-700 h-[320px]"
          >
            {/* TEXT */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="font-semibold mb-2">Events</h3>
              <p className="text-gray-400 text-sm mb-4">
                Stay informed about conferences, seminars and initiatives.
              </p>
              <button className="bg-yellow-400 text-black px-4 py-2 text-sm rounded w-fit">
                View Events
              </button>
            </div>

            {/* IMAGE */}
            <div className="w-full h-full overflow-hidden group">
              <img
                src={G3}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

        </div>

        {/* 🔥 LATEST NEWS */}
        <motion.div variants={fadeUp} className="text-center mb-12">

          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-20 h-[2px] bg-yellow-400"></div>
            <p className="tracking-[4px] text-sm">LATEST NEWS</p>
            <div className="w-20 h-[2px] bg-yellow-400"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {news.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="border border-gray-700 bg-black/40 p-3 group"
              >
                <div className="h-32 overflow-hidden mb-3">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <h4 className="text-sm font-semibold mb-1">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-xs mb-2">
                  {item.date}
                </p>

                <button className="text-yellow-400 text-xs">
                  Explore More →
                </button>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* 🔥 GALLERY */}
        <motion.div variants={fadeUp} className="text-center">

          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-20 h-[2px] bg-yellow-400"></div>
            <p className="tracking-[4px] text-sm">MEDIA GALLERY</p>
            <div className="w-20 h-[2px] bg-yellow-400"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

            {gallery.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="h-40 overflow-hidden group"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}

          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(234,179,8,0.6)",
            }}
            className="bg-yellow-400 text-black px-6 py-2 rounded-md text-sm"
          >
            View Gallery
          </motion.button>

        </motion.div>

      </motion.div>
    </section>
  );
}