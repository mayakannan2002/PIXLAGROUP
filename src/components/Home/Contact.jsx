import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import emailjs from "@emailjs/browser";
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

  // 🔥 POPUP STATE (UPDATED)
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    subMessage: "",
    success: true,
  });

  // 🔥 SEND EMAIL FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1z7c4l",   // your service ID
        "template_x24hxvq",  // your template ID
        formRef.current,
        "Nd39EiR0JFpU46o8O"  // your public key
      )
      .then(
        () => {
          setPopup({
            show: true,
            message: "Message Sent Successfully!",
            subMessage: "Our team will contact you within 24 hours.",
            success: true,
          });
          formRef.current.reset();
        },
        () => {
          setPopup({
            show: true,
            message: "Failed to send!",
            subMessage: "Please try again later or contact support.",
            success: false,
          });
        }
      );
  };

  return (
    <section id="contact" className="bg-[#1a1a1a] mt-5 text-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <p className="text-yellow-400 tracking-[4px] mb-4">
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
                  info@pixlagold.com
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
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <div>
                <label className="text-sm text-gray-400">Full Name *</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter Your Full Name"
                  className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded-md focus:border-yellow-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Email"
                  className="p-3 bg-transparent border border-gray-700 rounded-md focus:border-yellow-400"
                />

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone"
                  className="p-3 bg-transparent border border-gray-700 rounded-md focus:border-yellow-400"
                />
              </div>

              {/* 🔥 FIXED SELECT */}
              <div>
                <label className="text-sm text-gray-400">Enquiry Type *</label>
                <select
                  name="enquiry"
                  required
                  className="w-full mt-2 p-3 bg-black text-white border border-gray-700 rounded-md focus:border-yellow-400"
                >
                  <option value="">Select Your Enquiry Type</option>
                  <option value="General">General</option>
                  <option value="Franchise">Franchise</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400">Message *</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Tell Us About Your Enquiry..."
                  className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded-md focus:border-yellow-400"
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(234,179,8,0.6)",
                }}
                className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold"
              >
                Submit Enquiry
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>

      {/* 🔥 CENTER POPUP */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white text-black p-6 rounded-lg text-center w-[320px]">

            <h3 className="text-lg font-semibold mb-2">
              {popup.success ? "Success 🎉" : "Error ❌"}
            </h3>

            <p className="font-medium">{popup.message}</p>

            {/* 🔥 EXTRA MESSAGE */}
            <p className="text-sm text-gray-600 mt-2">
              {popup.subMessage}
            </p>

            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="bg-yellow-400 px-4 py-2 rounded-md font-semibold mt-4"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </section>
  );
}