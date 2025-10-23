"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 sm:py-24">
      <div className="Mycontainer">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-12 px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-indigo-400 uppercase bg-gray-800 rounded-full">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of projects that highlight my skills in web development,
            UI/UX design, and full-stack integration.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {/* Project 1 */}
          <motion.a
            href="https://trust-property.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full h-56 sm:h-60">
              <Image
                src="/images/trust-property.jpg"
                alt="Trust Property Website"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-sm sm:text-base bg-indigo-600 px-4 py-2 rounded-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Trust Property Website
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                A responsive real estate site built with Next.js & Tailwind CSS for seamless user experience.
              </p>
            </div>
          </motion.a>

          {/* Project 2 */}
          <motion.a
            href="https://your-ecommerce-site.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full h-56 sm:h-60">
              <Image
                src="/images/ecommerce-app.jpg"
                alt="E-Commerce App"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-sm sm:text-base bg-indigo-600 px-4 py-2 rounded-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                E-Commerce App
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                A full-stack shopping app with cart, checkout, and admin dashboard built using MERN stack.
              </p>
            </div>
          </motion.a>

          {/* Project 3 */}
          <motion.a
            href="https://your-landing-page.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full h-56 sm:h-60">
              <Image
                src="/images/landing-page.jpg"
                alt="Landing Page Design"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-sm sm:text-base bg-indigo-600 px-4 py-2 rounded-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Landing Page Design
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                A sleek, conversion-focused landing page with smooth animations and a responsive layout.
              </p>
            </div>
          </motion.a>

          {/* Project 4 */}
          <motion.a
            href="https://your-portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full h-56 sm:h-60">
              <Image
                src="/images/portfolio.jpg"
                alt="Portfolio Website"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-sm sm:text-base bg-indigo-600 px-4 py-2 rounded-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Portfolio Website
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                A personal portfolio built with Next.js and Framer Motion to showcase creativity and projects.
              </p>
            </div>
          </motion.a>

          {/* Project 5 */}
          <motion.a
            href="https://your-task-app.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full h-56 sm:h-60">
              <Image
                src="/images/task-manager.jpg"
                alt="Task Manager App"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-sm sm:text-base bg-indigo-600 px-4 py-2 rounded-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Task Manager App
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                A minimal productivity tool to manage daily tasks and deadlines efficiently.
              </p>
            </div>
          </motion.a>

          {/* Project 6 */}
          <motion.a
            href="https://your-dashboard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full h-56 sm:h-60">
              <Image
                src="/images/dashboard.jpg"
                alt="Social Media Dashboard"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-sm sm:text-base bg-indigo-600 px-4 py-2 rounded-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Social Media Dashboard
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                An analytics dashboard to monitor insights from multiple social media platforms.
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
