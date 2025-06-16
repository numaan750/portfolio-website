"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <main
      id="home"
      className=" relative w-full min-h-screen bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/public/assets/background1.avif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 pb-12 flex flex-col md:flex-row items-center justify-between gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div
          className="w-full md:w-1/2 text-white text-left space-y-6"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-sm px-4 py-1 rounded-full shadow-lg"
            variants={itemVariants}
          >
            Developer
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            variants={itemVariants}
          >
            Hi, I’m <span className="text-teal-400">Numaan Ali</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            I design and build modern, user-focused web interfaces. My passion
            lies in crafting digital experiences that are visually stunning and
            intuitive to use.
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block mt-4 px-6 sm:px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            variants={itemVariants}
          >
            Let’s Do It
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-1/2 text-white text-left md:text-right space-y-2"
          variants={itemVariants}
        >
          <motion.p
            className="font-semibold text-base sm:text-lg"
            variants={itemVariants}
          >
            Let’s Work Together
          </motion.p>
          <motion.p
            className="text-gray-300 text-sm sm:text-base"
            variants={itemVariants}
          >
            I am available at
          </motion.p>
          <motion.p
            className="text-blue-400 text-sm sm:text-base"
            variants={itemVariants}
          >
            alinumaan35@gmail.com
          </motion.p>
          <motion.p
            className="text-blue-400 text-sm sm:text-base"
            variants={itemVariants}
          >
            +92 3365370090
          </motion.p>

          <motion.div
            className="flex md:justify-end space-x-4 mt-4 text-lg"
            variants={itemVariants}
          >
            <a href="#" className="hover:text-teal-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <FaLinkedinIn />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default HeroSection;
