"use client";

import { motion } from "framer-motion";

export default function ResumeSection() {
  // ✅ Animations
  const fadeInCenter = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="resume" className="relative py-20 sm:py-24 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
        {/* ✅ Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInCenter}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4"
          >
            Resume
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-white">
            My Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4">
            A journey through my professional experiences and academic background,
            reflecting growth, creativity, and technical excellence.
          </p>
        </motion.div>

        {/* ✅ Two Columns: Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 xl:gap-32">

          {/* ===== Experience Section ===== */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block border-b-2 border-purple-500 pb-2">
              Experience
            </h3>

            <div className="relative border-l-2 border-gradient-to-b from-purple-500 to-cyan-500 pl-6 space-y-12">
              {/* Item 1 */}
              <div className="group relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                  01
                </div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                  
                  <div className="relative">
                    <p className="text-sm text-purple-300 mb-1 font-medium">08–2025</p>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">MERN Stack Developer</h4>
                    <p className="text-cyan-400 text-sm font-medium mb-2">DevsRank</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Performed full-stack development using the MERN stack, optimized web applications for performance and SEO, and contributed to increasing client website traffic and search rankings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                  02
                </div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                  
                  <div className="relative">
                    <p className="text-sm text-purple-300 mb-1 font-medium">2021–Now</p>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">SEO</h4>
                    <p className="text-cyan-400 text-sm font-medium mb-2">Freelancing</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Designed and optimized user-friendly websites with responsive UI and SEO-focused architecture to improve visibility and user engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                  03
                </div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                  
                  <div className="relative">
                    <p className="text-sm text-purple-300 mb-1 font-medium">2023–Now</p>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">React.js & Next.js Developer</h4>
                    <p className="text-cyan-400 text-sm font-medium mb-2">Freelancer</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Developing scalable, high-performance React & Next applications with
                      reusable components and modern UI best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== Education Section ===== */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block border-b-2 border-purple-500 pb-2">
              Education
            </h3>

            <div className="relative border-l-2 border-gradient-to-b from-purple-500 to-cyan-500 pl-6 space-y-12">
              {/* Item 1 */}
              <div className="group relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                  01
                </div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                  
                  <div className="relative">
                    <p className="text-sm text-purple-300 mb-1 font-medium">2006–2018</p>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">Matriculation</h4>
                    <p className="text-cyan-400 text-sm font-medium mb-2">
                      Sarabia Serajia Higher Secondary School
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Completed Matriculation in Science stream with strong fundamentals
                      in mathematics and computers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                  02
                </div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                  
                  <div className="relative">
                    <p className="text-sm text-purple-300 mb-1 font-medium">2018–2021</p>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">Intermediate</h4>
                    <p className="text-cyan-400 text-sm font-medium mb-2">
                      Government Technical College
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Earned a 3-year Diploma in Electrical Engineering with practical lab
                      work and industrial training.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                  03
                </div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                  
                  <div className="relative">
                    <p className="text-sm text-purple-300 mb-1 font-medium">2021–2025</p>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">Bachelors</h4>
                    <p className="text-cyan-400 text-sm font-medium mb-2">
                      Lahore Leads University
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Completed BSCS focused on full-stack web development, databases, and
                      software architecture.
                    </p>
                  </div>
                </div>
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