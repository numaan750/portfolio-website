"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="Mycontainer max-w-7xl mx-auto  flex flex-col lg:flex-row justify-between items-start gap-20">
        {/* ===== Left Form Section ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <span className="text-sm uppercase tracking-wider text-teal-400 font-semibold">
            Contact Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-8 leading-tight">
            Let’s make something <span className="text-teal-400">great</span>{" "}
            together.
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-900 text-white border border-gray-700 focus:border-teal-500 p-3 sm:p-4 rounded-lg outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-900 text-white border border-gray-700 focus:border-teal-500 p-3 sm:p-4 rounded-lg outline-none transition"
              />
            </div>

            <input
              type="text"
              placeholder="Your Phone"
              className="w-full bg-gray-900 text-white border border-gray-700 focus:border-teal-500 p-3 sm:p-4 rounded-lg outline-none transition"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full bg-gray-900 text-white border border-gray-700 focus:border-teal-500 p-3 sm:p-4 rounded-lg outline-none transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition shadow-lg hover:shadow-teal-500/25 w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* ===== Right Info Section ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:pl-20 xl:pl-32 mt-10 lg:mt-20 space-y-10 lg:text-left lg:ml-auto"
        >
          {/* ===== Email ===== */}
          <div className="flex justify-start items-center gap-3">
            <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              📧 Email Me:
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              alinumaan35@gmail.com
            </p>
          </div>

          {/* ===== Phone ===== */}
          <div className="flex justify-start items-center gap-3">
            <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              📞 Call Me:
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              +92 336 5370090
            </p>
          </div>

          {/* ===== Address ===== */}
          <div className="flex justify-start items-start gap-3">
            <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 whitespace-nowrap">
              📍 Address:
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-sm leading-relaxed">
              Public Health Society, Near Shershah Link Road, Lahore, Pakistan
            </p>
          </div>

          {/* ===== Social Icons ===== */}
          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              🔗 Connect with Me
            </h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 hover:bg-teal-500 transition text-gray-400 hover:text-white shadow-md"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 hover:bg-teal-500 transition text-gray-400 hover:text-white shadow-md"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 hover:bg-teal-500 transition text-gray-400 hover:text-white shadow-md"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 hover:bg-teal-500 transition text-gray-400 hover:text-white shadow-md"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
