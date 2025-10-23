"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SkillsSection = () => {
  const skills = [
    "HTML / CSS / JavaScript",
    "React.js / Bootstrap",
    "Tailwind CSS / WordPress",
    "Figma / SEO",
    "Git / GitHub / Vercel",
    "Next.js / Responsive Design",
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-20 sm:py-24">
      {/* ✅ Mycontainer for consistent alignment */}
      <div className="Mycontainer">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center space-y-8"
        >
          {/* ✅ Heading */}
          <motion.div variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-indigo-400 uppercase bg-gray-800 rounded-full mb-4">
              My Skills
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight">
              Crafting Modern Web Experiences
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Combining creativity and technology to deliver interactive,
              responsive, and user-friendly websites that leave a lasting impact.
            </p>
          </motion.div>

          {/* ✅ Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-gray-800 hover:bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-300 p-5 sm:p-6 rounded-xl shadow-lg hover:scale-105"
              >
                <p className="text-lg sm:text-xl font-medium text-gray-200 hover:text-white transition">
                  {skill}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
