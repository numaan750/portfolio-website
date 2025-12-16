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
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4"
          >
            What I Offer
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: false }}
          >
            I create elegant, user-focused, and high-performing websites and apps
            — ensuring your brand stands out beautifully across all devices.
          </motion.p>
        </motion.div>

        {/* ===== Services Grid ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Card 1 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.1)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ Responsive MERN Stack Web Development
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Creating full-stack MERN solutions with sleek, responsive designs
                and smooth functionality on every screen size.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.2)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ Creative UI/UX Interface Design
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Designing user-friendly and engaging mobile app interfaces
                optimized for both iOS and Android platforms.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.3)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ Website Optimization
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Creating user-friendly mobile experiences optimized for iOS and
                Android, guided by modern UI/UX principles.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.4)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ Front-End Development with React & Next.js
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Building high-performance, responsive, and accessible web
                applications using React.js and Next.js.
              </p>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.5)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ SEO Optimization
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Optimizing websites for higher search engine rankings and
                increased organic traffic through proven SEO techniques.
              </p>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.6)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ Digital Marketing
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Planning and executing digital marketing strategies, including
                content creation, branding, and ad campaigns.
              </p>
            </div>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.7)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ Secure API Integration with Next.js
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Building fast, scalable full-stack applications with Next.js, API
                integration, and server-side rendering.
              </p>
            </div>
          </motion.div>

          {/* Card 8 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 shadow-lg text-left"
            variants={cardAnim}
            initial="hidden"
            whileInView={() => cardAnim.show(0.8)}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ✅ GitHub & Vercel Deployment
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Managing version control with GitHub and deploying
                high-performance sites using Vercel's cloud infrastructure.
              </p>
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