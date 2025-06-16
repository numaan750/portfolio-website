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
      className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gray-900"
    >
      <div className="Mycontainer max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <span className="text-sm uppercase tracking-wider text-teal-400 font-semibold">
            Contact Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 leading-tight text-white">
            Let’s make something great together.
          </h2>
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-white space-y-8"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              📧 Email Me
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              alinumaan35@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              📞 Call Me
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">+92 3365370090</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              📍 Address
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Public Health Society, Near Shershah Link Road, Lahore, Pakistan
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="pt-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              🔗 Connect with Me
            </h3>
            <div className="flex flex-wrap gap-5 text-2xl text-gray-400">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
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
