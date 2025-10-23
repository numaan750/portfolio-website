"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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
  const images = ["/photos/img4.jpeg", "/photos/img5.jpeg", "/photos/img6.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto Image Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="whatido" className="bg-gray-950 text-white py-20 sm:py-24">
      {/* ✅ Mycontainer */}
      <div className="Mycontainer">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20"
        >
          {/* ✅ Left: Text Section */}
          <motion.div
            className="w-full lg:w-1/2 text-left space-y-6"
            variants={fadeUp}
          >
            <motion.span
              className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-indigo-400 uppercase bg-gray-800 rounded-full"
              variants={fadeUp}
            >
              What I Do
            </motion.span>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight"
              variants={fadeUp}
            >
              Fusing Design with Functionality
              <br className="hidden md:inline" /> to Deliver Seamless Web
              Experiences
            </motion.h2>

            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              variants={fadeUp}
            >
              I'm not just a developer — I’m a creative problem solver and
              collaborative partner. Together, we build user-centric solutions
              that are not only beautiful but impactful.
            </motion.p>

            <motion.ul
              className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg font-medium"
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
                  <span className="text-green-400 font-bold mr-3 text-xs sm:text-sm md:text-base">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ✅ Right: Image Carousel */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            variants={fadeUp}
          >
            <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] xl:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images[currentIndex]}
                alt="What I Do Image"
                fill
                priority
                className="object-cover transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />

              {/* ✅ Overlay Tag */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-indigo-600 bg-opacity-90 text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg shadow-md">
                Visual Craft in Motion
              </div>

              {/* ✅ Carousel Dots */}
              <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-indigo-500 scale-125"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
