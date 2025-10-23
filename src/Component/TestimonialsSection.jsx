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
    name: "Liam O’Connor",
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
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-10">
      <div className="Mycontainer grid md:grid-cols-2 gap-16 items-center">
        {/* ===== Stats Section ===== */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 gap-8 text-center md:text-left"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {stats.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-teal-400">
                {item.number}
              </h3>
              <p className="text-gray-400 mt-2 uppercase text-xs sm:text-sm tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ===== Testimonials Section (Fully Transparent) ===== */}
        <motion.div
          className="relative text-left sm:text-lg leading-relaxed"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="transition-all duration-500 ease-in-out min-h-[220px] px-2 sm:px-4">
            <div className="text-5xl text-teal-400 mb-4 leading-none">“</div>
            <p className="text-base sm:text-lg font-medium text-gray-200">
              {testimonials[currentIndex].quote}
            </p>
            <p className="mt-6 text-sm text-gray-400 border-l-2 border-teal-500 pl-4">
              {testimonials[currentIndex].name}
            </p>
          </div>

          {/* ===== Transparent Navigation Arrows ===== */}
          <button
            onClick={prevTestimonial}
            className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-4xl opacity-80 hover:opacity-100 transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-4xl opacity-80 hover:opacity-100 transition"
          >
            &#10095;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
