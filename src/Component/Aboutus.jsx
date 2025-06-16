"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-12 xl:px-20"
    >
      <motion.div
        className="Mycontainer max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="mb-14 text-left" variants={fadeLeft}>
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Passionate Front-End Developer
            <br className="hidden md:inline" />
            Crafting Meaningful Web Experiences
          </h2>
        </motion.div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Image Section */}
          <motion.div className="w-full lg:w-1/3" variants={fadeLeft}>
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
              <Image
                src="/photos/img4.jpeg"
                alt="Profile Photo"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              <div className="absolute top-4 right-4 bg-indigo-600 bg-opacity-90 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md">
                Available Remotely
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-2/3 space-y-6"
            variants={fadeRight}
          >
            <p className="text-gray-300 text-base sm:text-lg">
              With a deep-rooted passion for design and technology, I specialize
              in creating responsive, visually compelling interfaces that not
              only engage users but also deliver seamless functionality.
            </p>
            <p className="text-gray-300 text-base sm:text-lg">
              From wireframes to deployment, I bring a detail-driven approach to
              front-end development, ensuring every project reflects both modern
              aesthetics and optimal user experience.
            </p>
            <p className="text-gray-300 text-base sm:text-lg">
              I stay continuously updated with evolving trends and technologies,
              ensuring each website I build is fast, scalable, and future-ready.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
