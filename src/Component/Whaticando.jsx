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
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Manual images
  const img1 = "/web-design-img.jpg";
  const img2 = "/ui-ux-design-img.jpg";
  const img3 = "/web-development-img.jpg";

  // ✅ Auto Image Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="whatido" className="bg-gray-950 text-white py-20 sm:py-24">
      <div className="Mycontainer">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-16 lg:gap-24"
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

            {/* ✅ Updated: Two-column layout for list */}
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 sm:gap-y-4 text-sm sm:text-base md:text-lg font-medium"
              variants={containerVariants}
            >
              <motion.li className="flex items-start" variants={fadeUp}>
                <span className="text-green-400 font-bold mr-3 text-xs sm:text-sm md:text-base">
                  01
                </span>
                <span className="text-gray-300">Web Development Excellence</span>
              </motion.li>
              <motion.li className="flex items-start" variants={fadeUp}>
                <span className="text-green-400 font-bold mr-3 text-xs sm:text-sm md:text-base">
                  02
                </span>
                <span className="text-gray-300">Web & Mobile App Design</span>
              </motion.li>
              <motion.li className="flex items-start" variants={fadeUp}>
                <span className="text-green-400 font-bold mr-3 text-xs sm:text-sm md:text-base">
                  03
                </span>
                <span className="text-gray-300">UI/UX Strategy & Design</span>
              </motion.li>
              <motion.li className="flex items-start" variants={fadeUp}>
                <span className="text-green-400 font-bold mr-3 text-xs sm:text-sm md:text-base">
                  04
                </span>
                <span className="text-gray-300">
                  Digital Marketing Solutions
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={fadeUp}>
                <span className="text-green-400 font-bold mr-3 text-xs sm:text-sm md:text-base">
                  05
                </span>
                <span className="text-gray-300">SEO Optimization</span>
              </motion.li>
              <motion.li className="flex items-start" variants={fadeUp}>
                <span className="text-green-400 font-bold mr-3 text-xs sm:text-sm md:text-base">
                  06
                </span>
                <span className="text-gray-300">Creative Content Creation</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* ✅ Right: Image Section — moved slightly down */}
          <motion.div
            className="w-full lg:w-1/2 relative lg:mt-10"
            variants={fadeUp}
          >
            <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] xl:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              
              {/* ✅ Image 1 */}
              {currentIndex === 0 && (
                <Image
                  src={img1}
                  alt="Web Design"
                  fill
                  priority
                  className="object-cover transition-all duration-700 ease-in-out"
                />
              )}

              {/* ✅ Image 2 */}
              {currentIndex === 1 && (
                <Image
                  src={img2}
                  alt="UI UX Design"
                  fill
                  priority
                  className="object-cover transition-all duration-700 ease-in-out"
                />
              )}

              {/* ✅ Image 3 */}
              {currentIndex === 2 && (
                <Image
                  src={img3}
                  alt="Creative Development"
                  fill
                  priority
                  className="object-cover transition-all duration-700 ease-in-out"
                />
              )}

              {/* ✅ Overlay Tag */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-indigo-600 bg-opacity-90 text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg shadow-md">
                Visual Craft in Motion
              </div>

              {/* ✅ Carousel Dots */}
              <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                  onClick={() => setCurrentIndex(0)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === 0
                      ? "bg-indigo-500 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                ></button>
                <button
                  onClick={() => setCurrentIndex(1)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === 1
                      ? "bg-indigo-500 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                ></button>
                <button
                  onClick={() => setCurrentIndex(2)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === 2
                      ? "bg-indigo-500 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                ></button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
