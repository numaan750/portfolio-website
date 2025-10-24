"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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
    <section id="about" className="relative bg-gray-900 py-20 sm:py-24">
      {/* ✅ Container */}
      <div className="Mycontainer">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          {/* ✅ Header */}
          <motion.div className="text-left" variants={fadeLeft}>
            <p className="text-xs sm:text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
              About Me
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight text-white">
              Passionate Front-End Developer
              <br className="hidden md:inline" />
              Crafting Meaningful Web Experiences
            </h2>
          </motion.div>

          {/* ✅ Content Row */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* ✅ Left: Image */}
            <motion.div className="w-full lg:w-1/3" variants={fadeLeft}>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/about-img.jpeg"
                  alt="Profile"
                  fill
                  priority
                  className="object-cover object-top"
                />
                {/* ✅ Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 bg-opacity-90 text-white text-[10px] sm:text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-md">
                  Available Remotely
                </div>
              </div>
            </motion.div>

            {/* ✅ Right: Text Content */}
            <motion.div
              className="w-full lg:w-2/3 space-y-5 sm:space-y-6 text-left lg:self-center"
              variants={fadeRight}
            >
              <p className="text-gray-300 text-sm sm:text-base md:text-2xl leading-relaxed">
                With a deep-rooted passion for design and technology, I
                specialize in creating responsive, visually compelling
                interfaces that not only engage users but also deliver seamless
                functionality.
              </p>

              <p className="text-gray-300 text-sm sm:text-base md:text-2xl leading-relaxed">
                From wireframes to deployment, I bring a detail-driven approach
                to front-end development, ensuring every project reflects both
                modern aesthetics and optimal user experience.
              </p>

              <p className="text-gray-300 text-sm sm:text-base md:text-2xl leading-relaxed">
                I stay continuously updated with evolving trends and
                technologies, ensuring each website I build is fast, scalable,
                and future-ready.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
