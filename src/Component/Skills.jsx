"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
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
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <motion.div
        className="Mycontainer text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          variants={fadeUp}
        >
          Skills
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Combining design and development expertise to turn ideas into
          functional, user-friendly websites.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition duration-300 p-5 rounded-lg shadow-lg"
              variants={fadeUp}
            >
              <p className="text-lg sm:text-xl font-medium text-gray-200">
                {skill}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
