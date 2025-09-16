"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/assets/mainimg.png";

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
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ✅ Background Image */}
      <Image
        src={img}
        alt="mainimg"
        fill
        priority
        className="object-cover"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* ✅ Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto 
                   px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 
                   pt-28 sm:pt-32 md:pt-40 lg:pt-44 
                   pb-12 sm:pb-16 md:pb-20 
                   flex flex-col md:flex-row 
                   items-start justify-between gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        variants={containerVariants}
      >
        {/* ✅ Left Side */}
        <motion.div
          className="w-full md:w-1/2 text-white text-left space-y-6"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 
                       text-sm sm:text-base md:text-lg 
                       px-4 py-1 rounded-full shadow-lg"
            variants={itemVariants}
          >
            Developer
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-extrabold leading-snug sm:leading-tight"
            variants={itemVariants}
          >
            Hi, I’m <span className="text-teal-400">Numaan Ali</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 
                       max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            I design and build modern, user-focused web interfaces. My passion
            lies in crafting digital experiences that are visually stunning and
            intuitive to use.
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block mt-4 px-6 sm:px-8 py-3 
                       bg-gradient-to-r from-teal-500 to-cyan-500 
                       text-white font-semibold rounded-full 
                       shadow-md hover:shadow-lg 
                       transform hover:scale-105 transition duration-300 
                       text-sm sm:text-base md:text-lg"
            variants={itemVariants}
          >
            Let’s Do It
          </motion.a>
        </motion.div>

        {/* ✅ Right Side */}
        <motion.div
          className="w-full md:w-1/2 text-white 
                     text-left md:text-right space-y-3"
          variants={itemVariants}
        >
          <motion.p
            className="font-semibold text-base sm:text-lg md:text-xl"
            variants={itemVariants}
          >
            Let’s Work Together
          </motion.p>
          <motion.p
            className="text-gray-300 text-sm sm:text-base md:text-lg"
            variants={itemVariants}
          >
            I am available at
          </motion.p>
          <motion.p
            className="text-blue-400 text-sm sm:text-base md:text-lg"
            variants={itemVariants}
          >
            alinumaan35@gmail.com
          </motion.p>
          <motion.p
            className="text-blue-400 text-sm sm:text-base md:text-lg"
            variants={itemVariants}
          >
            +92 3365370090
          </motion.p>

          <motion.div
            className="flex justify-start md:justify-end 
                       space-x-6 mt-5 
                       text-lg sm:text-xl md:text-2xl"
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
