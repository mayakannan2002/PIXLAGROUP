import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

// 🔥 Animation
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1a1a1a] mt-5 text-white py-20">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* 🔥 HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <p className="text-yellow-400 text-md tracking-[4px] mb-4">
            CONTACT US
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold">
            Connect With{" "}
            <span className="text-yellow-400">Pixla Gold</span>
          </h2>
        </motion.div>

        {/* 🔥 CONTENT */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-10"
          >

            {/* OFFICE DETAILS */}
            <div>
              <h3 className="font-semibold mb-6">Office Details</h3>

              <div className="space-y-4 text-gray-300 text-sm">

                <div className="flex items-center gap-3">
                  <FiMapPin className="text-yellow-400" />
                  Pixla Gold Corporation Pvt Ltd, India
                </div>

                <div className="flex items-center gap-3">
                  <FiPhone className="text-yellow-400" />
                  Contact Our Team
                </div>

                <div className="flex items-center gap-3">
                  <FiMail className="text-yellow-400" />
                  info.pixlagold.com
                </div>

              </div>
            </div>

            {/* OFFICE HOURS */}
            <div>
              <h3 className="font-semibold mb-6">Office Hours</h3>

              <div className="space-y-3 text-gray-300 text-sm">

                <div className="flex items-center gap-3">
                  <FiClock className="text-yellow-400" />
                  Monday - Friday: 9:00 AM - 6:00 PM
                </div>

                <div className="flex items-center gap-3">
                  <FiClock className="text-yellow-400" />
                  Saturday: 10:00 AM - 2:00 PM
                </div>

                <div className="flex items-center gap-3">
                  <FiClock className="text-yellow-400" />
                  Sunday: Closed
                </div>

              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="md:col-span-2 bg-black rounded-xl p-8 border border-gray-800"
          >

            <form className="space-y-6">

              {/* FULL NAME */}
              <div>
                <label className="text-sm text-gray-400">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-400">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">
                    Phone *
                  </label>
                  <input
                    type="text"
                    placeholder="+91 00000 00000"
                    className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400"
                  />
                </div>

              </div>

              {/* ENQUIRY */}
              <div>
                <label className="text-sm text-gray-400">
                  Enquiry Type *
                </label>
                <select className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400">
                  <option>Select Your Enquiry Type</option>
                  <option>General</option>
                  <option>Franchise</option>
                  <option>Investment</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-400">
                  Message *
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell Us About Your Enquiry..."
                  className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 20px rgba(234,179,8,0.6)",
                }}
                className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold mt-4"
              >
                Submit Enquiry
              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}