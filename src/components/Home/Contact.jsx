import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useRef, useState } from "react";

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
  const formRef = useRef();

  // ✅ POPUP STATE
  const [showPopup, setShowPopup] = useState(false);

  // 🔥 FORM SUBMIT (NO EMAILJS)
  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 simulate sending
    setTimeout(() => {
      setShowPopup(true); // popup show
      formRef.current.reset(); // clear form
    }, 500);
  };

  return (
    <section className="bg-[#1a1a1a] mt-5 text-white py-20 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* HEADING */}
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
            Connect With <span className="text-yellow-400">Pixla Gold</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-10"
          >
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

          {/* RIGHT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="md:col-span-2 bg-black rounded-xl p-8 border border-gray-800"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <input name="from_name" required placeholder="Full Name"
                className="w-full p-3 bg-transparent border border-gray-700 rounded-md" />

              <div className="grid md:grid-cols-2 gap-6">
                <input name="from_email" required placeholder="Email"
                  className="w-full p-3 bg-transparent border border-gray-700 rounded-md" />

                <input name="phone" required placeholder="Phone"
                  className="w-full p-3 bg-transparent border border-gray-700 rounded-md" />
              </div>

              <select name="enquiry" required
                className="w-full p-3 bg-transparent border border-gray-700 rounded-md">
                <option value="">Select Enquiry</option>
                <option>General</option>
                <option>Franchise</option>
                <option>Investment</option>
              </select>

              <textarea name="message" rows="4" required placeholder="Message"
                className="w-full p-3 bg-transparent border border-gray-700 rounded-md" />

              <button className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold">
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* 🔥 CENTER POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white text-black p-8 rounded-xl text-center w-[90%] max-w-md">

            <h2 className="text-xl font-semibold mb-4">
              ✅ Message Sent!
            </h2>

            <p className="text-gray-600 mb-6">
              Thanks for contacting us. Our team will reach you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-yellow-400 px-6 py-2 rounded-md font-semibold"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}