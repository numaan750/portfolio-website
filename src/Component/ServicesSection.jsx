"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const cardAnim = {
    hidden: { opacity: 0, y: 50 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
  };

  return (
    <section id="services" className="py-20 bg-gray-950 text-white">
      <div className="Mycontainer  text-center">
        {/* ===== Heading ===== */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="text-gray-400 text-base sm:text-lg md:text-xl mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false }}
        >
          I create elegant, user-focused, and high-performing websites and apps —
          ensuring your brand stands out beautifully across all devices.
        </motion.p>

        {/* ===== Services Grid (Manual Cards) ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Card 1 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.1)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ Responsive Web Design
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Creating clean, responsive web designs that look great and function
              flawlessly on all screen sizes.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.2)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ Mobile App Design
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Designing user-friendly and engaging mobile app interfaces optimized
              for both iOS and Android platforms.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.3)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ Website Optimization
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Improving performance, speed, SEO, and overall user experience for
              better conversions.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.4)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ Front-End Development
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Building high-performance, responsive, and accessible websites using
              HTML, CSS, JavaScript, and React.js.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.5)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ SEO Optimization
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Optimizing websites for higher search engine rankings and increased
              organic traffic through proven SEO techniques.
            </p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.6)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ Digital Marketing
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Planning and executing digital marketing strategies, including content
              creation, branding, and ad campaigns.
            </p>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.7)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ Next.js Development
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Building fast, SEO-optimized, and scalable full-stack apps using
              Next.js and server-side rendering.
            </p>
          </motion.div>

          {/* Card 8 */}
          <motion.div
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.8)}
            viewport={{ once: false }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-400">
              ✅ GitHub & Vercel Deployment
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Managing version control with GitHub and deploying high-performance
              sites using Vercel’s cloud infrastructure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
