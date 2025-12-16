"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "8240", label: "Hours of Works" },
  { number: "315", label: "Projects Done" },
  { number: "250", label: "Satisfied Customers" },
  { number: "32", label: "Awards Winning" },
];

const testimonials = [
  {
    name: "Emily Rodriguez",
    quote:
      "Working with him was a great experience. He was always responsive, open to feedback, and delivered high-quality work within the deadline.",
  },
  {
    name: "Daniel Müller",
    quote:
      "He exceeded my expectations. The communication was clear, and the final website was visually appealing and functional.",
  },
  {
    name: "Sofia Martins",
    quote:
      "It was a pleasure collaborating on my online store. The whole process was smooth and stress-free.",
  },
  {
    name: "Liam O'Connor",
    quote:
      "He translated our brand into a modern, user-friendly website with real professionalism and passion.",
  },
  {
    name: "Haruto Tanaka",
    quote:
      "Excellent design sense and technical skill. He brought our ideas to life and added great UX improvements.",
  },
];

// Animation Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4"
          >
            Client Feedback
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-white">
            What{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* ===== Stats Section ===== */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                
                <div className="relative">
                  <h3 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {item.number}
                  </h3>
                  <p className="text-gray-300 mt-2 uppercase text-xs sm:text-sm tracking-wide">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ===== Testimonials Section ===== */}
          <motion.div
            className="relative"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

            {/* Main Card */}
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl min-h-[280px]">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="transition-all duration-500 ease-in-out"
              >
                <div className="text-6xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-none">
                  "
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-200 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                  <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {testimonials[currentIndex].name}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110 z-10"
              >
                ‹
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110 z-10"
              >
                ›
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />
      </div>
    </section>
  );
}