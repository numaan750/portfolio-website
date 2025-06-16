"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "✅ Responsive Web Design",
    desc: "Creating clean, responsive web designs that look great and function flawlessly on all screen sizes.",
  },
  {
    title: "✅ Mobile App Design",
    desc: "Designing user-friendly and engaging mobile app interfaces optimized for both iOS and Android platforms.",
  },
  {
    title: "✅ Website Optimization",
    desc: "Improving performance, speed, SEO, and overall user experience for better conversions.",
  },
  {
    title: "✅ Front-End Website Development",
    desc: "Developing high-performance, responsive, and accessible websites using HTML, CSS, JavaScript, and React.js.",
  },
  {
    title: "✅ SEO (Search Engine Optimization)",
    desc: "Optimizing websites for higher search engine rankings and increased organic traffic through SEO practices.",
  },
  {
    title: "✅ Digital Marketing",
    desc: "Planning and executing digital marketing strategies, including content creation and ad campaigns.",
  },
  {
    title: "✅ Next.js Development",
    desc: "Building fast, SEO-optimized, and scalable full-stack apps using Next.js framework and dynamic routing.",
  },
  {
    title: "✅ GitHub & Version Control",
    desc: "Using Git & GitHub for collaboration, version tracking, and CI/CD workflows in professional development.",
  },
  {
    title: "✅ Vercel Deployment",
    desc: "Deploying and managing high-performance sites on Vercel with serverless functions and edge delivery.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="Mycontainer px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          My Services
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false }}
        >
          I provide creative and user-focused design and development services
          that ensure both usability and performance.
        </motion.p>

        {/* Animated Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-700 text-left"
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
