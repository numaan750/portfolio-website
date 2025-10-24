"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Projects list — yahan sirf link, title aur description do
const projects = [
  {
    title: "The 7 Webapplication",
    link: "https://7-app.vercel.app/",
    description:
      "A full-stack web application built using Next.js, Node.js, Express.js, and MongoDB. The 7 WebApplication offers seamless performance, secure data handling, and an optimized user experience with modern design and responsive features.",
  },
  {
    title: "7 webapplication Admin Dashboard",
    link: "https://seven-website-admin.vercel.app/login",
    description:
      "An advanced admin dashboard for managing the 7 WebApplication, built with Next.js, Node.js, Express.js, and MongoDB. It provides secure authentication, data analytics, and full CRUD functionality for efficient backend control.",
  },
  {
    title: "Trust Property Website",
    link: "https://trust-property.vercel.app/",
    description:
      "A modern real estate website built with Next.js and Tailwind CSS, featuring a fully responsive design, smooth animations, and a clean user interface for an engaging property browsing experience.",
  },
  {
    title: "sAp webapplication",
    link: "https://s-ap-app.vercel.app/",
    description:
      "A full-stack web application built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. sAp WebApplication delivers dynamic data management, responsive design, and a smooth user experience across all devices.",
  },
  {
    title: "sAp Webapplication Admin Dashboard",
    link: "https://sap-work-admin.vercel.app/login",
    description:
      "An admin dashboard for the sAp WebApplication, built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. It provides secure authentication, efficient data management, and an intuitive interface for complete backend control.",
  },
  {
    title: "Auto Repair Website",
    link: "https://auto-repair-website-beta.vercel.app/ ",
    description:
      "A responsive auto repair service website built with Next.js, Tailwind CSS, and Node.js. It features a modern design, smooth navigation, and fast performance to showcase services and engage customers effectively.",
  },
];

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
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="relative w-full h-56 sm:h-60">
                {/* Image fetched automatically from Microlink */}
                <Image
                  src={`https://api.microlink.io/?url=${encodeURIComponent(
                    project.link
                  )}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.title}
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
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
