"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // slightly slower for better feel
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhatIDoSection() {
  const images = [
    "/photos/img4.jpeg",
    "/photos/img5.jpeg",
    "/photos/img6.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-12">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.span
            className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-gray-800 rounded-full"
            variants={fadeUp}
          >
            What I Do
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            variants={fadeUp}
          >
            Fusing Design with Functionality
            <br className="hidden md:inline" /> to Deliver Seamless Web
            Experiences
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
            variants={fadeUp}
          >
            I'm not just a developer—I’m a creative problem solver and
            collaborative partner. Together, we build user-centric solutions
            that are not only beautiful but impactful.
          </motion.p>

          <motion.ul
            className="space-y-4 text-sm sm:text-base md:text-lg font-medium"
            variants={containerVariants}
          >
            {[
              "Web Development Excellence",
              "Web & Mobile App Design",
              "UI/UX Strategy & Design",
              "Digital Marketing Solutions",
              "SEO Optimization",
              "Creative Content Creation",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                variants={fadeUp}
              >
                <span className="text-green-400 font-bold mr-3">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-300">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Image Carousel */}
        <motion.div className="w-full lg:w-1/2 relative" variants={fadeUp}>
          <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full relative">
            <Image
              src={images[currentIndex]}
              alt="What I Do Image"
              fill
              className="object-cover transition-all duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg bg-opacity-90">
              Visual Craft in Motion
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
