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
    "React.js & Next.js",
    "MongoDB",
    "Express.js & Node.js",
    "RESTful APIs/Authentication",
    "Tailwind",
    "WordPress",
    "GitHub / Vercel",
    "Figma / canva",
    "SEO Optimization",
  ];

  return (
    <section 
      id="skills" 
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

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4"
            >
              My Skills
            </motion.span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight text-white">
              Crafting Modern{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Combining creativity and technology to deliver interactive,
              responsive, and user-friendly websites that leave a lasting impact.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />
                
                <div className="relative">
                  <p className="text-lg sm:text-xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition">
                    {skill}
                  </p>
                </div>

                {/* Animated Arrow */}
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  className="absolute top-5 sm:top-6 right-5 sm:right-6 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

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
};

export default SkillsSection;