"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Projects list
const projects = [
  {
    title: "The Burgers Hub",
    link: "https://burger-site-ten.vercel.app/",
    description:
      "A full-stack web application built using Next.js, Node.js The Burger Hub offers seamless performance, secure data handling, and an optimized user experience with modern design and responsive features.",
  },
  {
    title: "Trust Property Website",
    link: "https://trust-property.vercel.app/",
    description:
      "A modern real estate website built with Next.js and Tailwind CSS, featuring a fully responsive design, smooth animations, and a clean user interface for an engaging property browsing experience.",
  },
  {
    title: "The 7 App",
    link: "https://7-app.vercel.app/",
    description:
      "An advanced admin dashboard for managing the 7 WebApplication, built with Next.js, Node.js, Express.js, and MongoDB. It provides secure authentication, data analytics, and full CRUD functionality for efficient backend control.",
  },
  {
    title: "sAp WebApplication",
    link: "https://s-ap-app.vercel.app/",
    description:
      "A full-stack web application built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. sAp WebApplication delivers dynamic data management, responsive design, and a smooth user experience across all devices.",
  },
  {
    title: "Velora Shop",
    link: "https://v-shop-flax.vercel.app/",
    description:
      "Velora Shop Website – A modern and responsive e-commerce website for Velora Shop, built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. It provides a smooth shopping experience, easy product browsing, secure checkout, and a user-friendly interface. Customers can effortlessly explore products, place orders, and track their purchases, all through a fast and intuitive platform.",
  },
  {
    title: "Ananda Wedding Website ",
    link: "https://ananda-beryl.vercel.app/",
    description:
      "Ananda Wedding Website – A responsive and elegant wedding website built with Next.js and Tailwind CSS. It features a modern, visually appealing design, smooth navigation, and fast performance, allowing couples to beautifully showcase their wedding details, share stories, display galleries, and engage guests effortlessly.",
  },
  {
    title: "Velora Shop Admin Dashboard",
    link: "https://vshop-admin-eta.vercel.app/login",
    description:
      "Velora Shop Admin Dashboard – A powerful admin panel for Velora Shop, built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. It offers secure authentication, efficient product and order management, and an intuitive interface for full control over the shop’s backend operations. Manage products, track orders, handle users, and analyze sales effortlessly—all in one place.",
  },
  {
    title: "7 Web Admin Dashboard",
    link: "https://seven-website-admin.vercel.app/login",
    description:
      "A dynamic business website with a powerful admin panel, built using Next.js, Tailwind CSS, and MongoDB. It offers easy content management, SEO optimization, and a responsive design to showcase services, products, and company information effectively. The admin panel enables full control over content, updates, and site management, making it simple to run and scale your business online.",
  },
  {
    title: "Sap Work Admin Dashboard",
    link: "https://sap-work-admin.vercel.app/login",
    description:
      "A dynamic admin panel built with Next.js, Tailwind CSS, and MongoDB. It provides secure authentication, efficient content and user management, and a responsive interface to control all aspects of the sAp Word platform. Features include dashboard analytics, content updates, and SEO management, giving admins full control to manage the platform effectively.",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={fadeUp}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4"
          >
            My Work
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of projects that highlight my skills in web development,
            UI/UX design, and full-stack integration.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />

              <div className="relative">
                <div className="relative w-full h-56 sm:h-60 overflow-hidden">
                  {/* Image fetched automatically from Microlink */}
                  <img
                    src={`https://api.microlink.io/?url=${encodeURIComponent(
                      project.link
                    )}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-sm sm:text-base bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-full font-semibold text-white shadow-lg">
                      View Project →
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Animated Corner Arrow */}
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  className="absolute top-4 right-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity text-2xl"
                >
                  ↗
                </motion.div>
              </div>
            </motion.a>
          ))}
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
