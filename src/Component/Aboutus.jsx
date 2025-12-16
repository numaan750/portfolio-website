"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { label: "Projects Completed", value: "50+", icon: "🚀" },
    { label: "Happy Clients", value: "30+", icon: "😊" },
    { label: "Years Experience", value: "3+", icon: "⭐" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
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
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4"
          >
            About Me
          </motion.span>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Full-Stack{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MERN Developer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Turning Ideas into Interactive Web Apps
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

            {/* Main Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              {/* Profile Section */}
              <div className="relative mb-8">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.5)",
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/10"
                >
                  {/* Replace /about-img.jpeg with your actual image path */}
                  <img
                    src="/about-img.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                {/* Status Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-0 right-1/4 flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 px-4 py-2 rounded-full"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-white text-sm font-medium">
                    Available Remotely
                  </span>
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredStat(index)}
                    onHoverEnd={() => setHoveredStat(null)}
                    className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center cursor-pointer transition-all"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Content Cards */}
            {[
              {
                text: "With a deep-rooted passion for design and technology, I specialize in building responsive and scalable web applications using the MERN stack, delivering seamless performance and engaging user experiences.",
              },
              {
                text: "From planning to deployment, I bring a detail-driven approach to full-stack MERN development, ensuring each project blends modern design with robust functionality and seamless user experience.",
              },
              {
                text: "I stay continuously updated with evolving web technologies, ensuring every MERN application I build is fast, scalable, and future-ready.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl" />

                <div className="relative">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>

                {/* Animated Arrow */}
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  className="absolute top-6 right-6 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  →
                </motion.div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all"
              >
                <span>Let's Build Something Amazing</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
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
};

export default AboutSection;