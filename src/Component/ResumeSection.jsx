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
    <section id="resume" className="bg-gray-950 text-white py-20 sm:py-24 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-20">
      <div className="Mycontainer ">
        {/* ✅ Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInCenter}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <p className="text-sm sm:text-base font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            Resume
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-white">
            My Experience & Education
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4">
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
            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 border-b-2 border-indigo-500 inline-block pb-2">
              Experience
            </h3>

            <div className="relative border-l-2 border-indigo-500 pl-6 space-y-12">
              {/* Item 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">
                  01
                </div>
                <p className="text-sm text-gray-400 mb-1">2021–2022</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white">SEO</h4>
                <p className="text-indigo-400 text-sm font-medium mb-2">DevsRank</p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Performed keyword research, optimized web pages, and increased
                  website traffic and rankings for multiple clients.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">
                  02
                </div>
                <p className="text-sm text-gray-400 mb-1">2022–Now</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white">UI / UX Designer</h4>
                <p className="text-indigo-400 text-sm font-medium mb-2">Freelancing</p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Designing user-friendly websites and mobile apps with intuitive
                  wireframes, prototypes, and responsive UI systems.
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">
                  03
                </div>
                <p className="text-sm text-gray-400 mb-1">2023–Now</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white">React.js Developer</h4>
                <p className="text-indigo-400 text-sm font-medium mb-2">Freelancer</p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Developing scalable, high-performance React applications with
                  reusable components and modern UI best practices.
                </p>
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
            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 border-b-2 border-indigo-500 inline-block pb-2">
              Education
            </h3>

            <div className="relative border-l-2 border-indigo-500 pl-6 space-y-12">
              {/* Item 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">
                  01
                </div>
                <p className="text-sm text-gray-400 mb-1">2006–2018</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Matriculation</h4>
                <p className="text-indigo-400 text-sm font-medium mb-2">
                  Sarabia Serajia Higher Secondary School
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Completed Matriculation in Science stream with strong fundamentals
                  in mathematics and computers.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">
                  02
                </div>
                <p className="text-sm text-gray-400 mb-1">2018–2021</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Intermediate</h4>
                <p className="text-indigo-400 text-sm font-medium mb-2">
                  Government Technical College
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Earned a 3-year Diploma in Electrical Engineering with practical lab
                  work and industrial training.
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[1.7rem] top-1 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">
                  03
                </div>
                <p className="text-sm text-gray-400 mb-1">2021–2025</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Bachelors</h4>
                <p className="text-indigo-400 text-sm font-medium mb-2">
                  Lahore Leads University
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Completed BSCS focused on full-stack web development, databases, and
                  software architecture.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
