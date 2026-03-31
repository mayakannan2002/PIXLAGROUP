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

// 🔥 Animations
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// 🔥 News Data with Updated Links
const news = [
  { 
    img: G4, 
    title: "How Pixalive, India's own social media app, came into play", 
    date: "Jan 2026",
    link: "https://www.thehindu.com/sci-tech/technology/how-pixalive-indias-own-social-media-app-came-into-play/article25888719.ece"
  },
  { 
    img: G5, 
    title: "Tripalive.me Technology Launches Pixalive", 
    date: "Feb 2026",
    link: "https://www.prnewswire.com/in/news-releases/tripaliveme-technology-launches-pixalive---the-social-media-app-700113481.html"
  },
  { 
    img: G6, 
    title: "Pixalive: India’s Homegrown Application", 
    date: "Mar 2026",
    link: "https://www.businessworld.in/article/pixalive-india%E2%80%99s-homegrown-application-308008"
  },
];

const gallery = [G7, G8, G9, G10];

export default function MediaNewsSection() {
  return (
    <section id="news" className="bg-black text-white py-20 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto px-6 md:px-12"
      >
        {/* HEADING */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-yellow-400 text-md tracking-[4px] mb-4">MEDIA & NEWS</p>
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            Experience The World Of <span className="text-yellow-400">Gold With Pixla</span>
          </h2>
        </motion.div>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          <div className="grid grid-rows-2 gap-4 h-[320px]">
            {/* PRESS */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 border border-gray-700 h-full items-stretch">
              <div className="p-4 flex flex-col justify-center">
                <h3 className="font-semibold mb-2 text-sm">Press Release</h3>
                <p className="text-gray-400 text-xs mb-4">Official announcements and corporate updates</p>
              
                <a 
                  href="https://www.youtube.com/watch?v=RuypjhNQ0MI" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-3 py-1 text-[10px] uppercase tracking-widest rounded w-fit font-bold hover:bg-yellow-300 transition-colors"
                >
                  Read Press Release
                </a>
              </div>
              <div className="w-full h-full overflow-hidden group">
                <img src={G1} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Press" />
              </div>
            </motion.div>

            {/* BLOG */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 border border-gray-700 h-full items-stretch">
              <div className="w-full h-full overflow-hidden group">
                <img src={G2} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Blog" />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <h3 className="font-semibold mb-2 text-sm">Blogs</h3>
                <p className="text-gray-400 text-xs mb-4">Explore expert articles, insights, and updates from the world of gold and finance.</p>
              
                <a 
                  href="https://www.youtube.com/watch?v=38tCJexsrX0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-3 py-1 text-[10px] uppercase tracking-widest rounded w-fit font-bold hover:bg-yellow-300 transition-colors"
                >
                  Read Blog
                </a>
              </div>
            </motion.div>
          </div>

          {/* EVENTS */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 border border-gray-700 h-[320px]">
            <div className="p-6 flex flex-col justify-center">
              <h3 className="font-semibold mb-2 text-sm">Events</h3>
              <p className="text-gray-400 text-xs mb-4">Stay informed about our upcoming conferences, seminars, and community initiatives.</p>
              <a 
                href="https://www.youtube.com/watch?v=475dsu6ZfGo" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-4 py-2 text-[10px] uppercase tracking-widest rounded w-fit font-bold hover:bg-yellow-300 transition-colors"
              >
                View Events
              </a>
            </div>
            <div className="w-full h-full overflow-hidden group">
              <img src={G3} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Events" />
            </div>
          </motion.div>
        </div>

        {/* LATEST NEWS */}
        <motion.div variants={fadeUp} className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-20 h-[2px] bg-yellow-400"></div>
            <p className="tracking-[4px] text-sm font-bold">LATEST NEWS</p>
            <div className="w-20 h-[2px] bg-yellow-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="border border-gray-700 bg-black/40 p-3 group text-left">
                <div className="h-32 overflow-hidden mb-3">
                  <img src={item.img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt={item.title} />
                </div>
                <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-400 text-[10px] mb-2">{item.date}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-400 text-[11px] font-bold uppercase tracking-widest hover:underline"
                >
                  Explore More →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GALLERY */}
        <motion.div variants={fadeUp} className="text-center">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-20 h-[2px] bg-yellow-400"></div>
            <p className="tracking-[4px] text-sm font-bold">MEDIA GALLERY</p>
            <div className="w-20 h-[2px] bg-yellow-400"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {gallery.map((img, i) => (
              <motion.div key={i} variants={fadeUp} className="h-40 overflow-hidden group">
                <img src={img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt={`Gallery ${i}`} />
              </motion.div>
            ))}
          </div>
          <a 
            href="https://www.chennaionline.com/news/chennai-news/first-ever-indian-made-social-media-application-pixalive-announces-actress-pranitha-subhash-as-brand-ambassador/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg"
          >
            View Gallery
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}