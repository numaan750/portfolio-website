"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import mainimg from "@/assets/mainimg.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <main
      id="home"
      className="relative w-full flex items-center overflow-hidden"
    >
      {/* ✅ Background Image */}
      <Image
        src="/hero-img-overlay.png"
        alt="mainimg"
        fill
        priority
        className="object-top object-cover"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 opacity-70 z-0"></div>

      {/* ✅ Main Content */}
      <div className="Mycontainer relative z-10 py-20 md:py-32">
        <motion.div
          className="w-full flex flex-col md:flex-row items-center justify-between gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={containerVariants}
        >
          {/* ✅ Left Section */}
          <motion.div
            className="w-full md:w-1/2 text-white text-left space-y-6"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 
                         text-sm sm:text-base md:text-lg px-4 py-1 rounded-full shadow-lg"
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
              lies in crafting digital experiences that are visually stunning
              and intuitive to use.
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

          {/* ✅ Right Section — with Image and glow */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center"
            variants={itemVariants}
          >
            {/* Glowing background circle */}
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-teal-500/30 blur-3xl rounded-full"></div>

            {/* Floating image */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: -20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut",
              }}
              className="relative z-10 flex justify-center items-center"
            >
              <div className="bg-transparent shadow-2xl rounded-full p-6 w-[400px] h-[400px] flex justify-center items-center overflow-hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src="/hero-img.jpeg"
                  alt="Numaan Ali"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default HeroSection;
