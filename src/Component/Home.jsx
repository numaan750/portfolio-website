"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ['React', 'Next.js','Tailwind', 'Node.js', 'Express.js', 'MongoDB'];

  const codeSnippets = [
    { code: "const dev = 'Numaan';", color: "from-pink-500 to-rose-500" },
    { code: "function create() {}", color: "from-purple-500 to-indigo-500" },
    { code: "npm run build", color: "from-cyan-500 to-blue-500" },
    { code: "<Component />", color: "from-teal-500 to-green-500" },
  ];

  return (
    <main className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Numaan Ali
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-2xl text-gray-300"
              >
                <span className="text-purple-400 font-semibold">Full-Stack Developer</span> crafting digital experiences
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              I design and build modern, user-focused web interfaces. My passion
              lies in crafting digital experiences that are visually stunning
              and intuitive to use.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm hover:border-purple-400/50 transition-all cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Work Together
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              {['Github', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-purple-400/50 hover:bg-white/10 transition-all"
                >
                  <span className="text-sm font-medium">{social[0]}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Code Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 flex justify-center items-center relative min-h-[500px]"
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Central Glowing Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 60px rgba(168, 85, 247, 0.4)",
                    "0 0 100px rgba(6, 182, 212, 0.6)",
                    "0 0 60px rgba(168, 85, 247, 0.4)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-40 h-40 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-xl"
              />

              {/* Floating Code Snippets */}
              {codeSnippets.map((snippet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [
                      Math.cos((index * Math.PI) / 2) * 200,
                      Math.cos((index * Math.PI) / 2 + 0.5) * 220,
                      Math.cos((index * Math.PI) / 2) * 200,
                    ],
                    y: [
                      Math.sin((index * Math.PI) / 2) * 200,
                      Math.sin((index * Math.PI) / 2 + 0.5) * 220,
                      Math.sin((index * Math.PI) / 2) * 200,
                    ],
                  }}
                  transition={{
                    opacity: { delay: 0.6 + index * 0.2 },
                    scale: { delay: 0.6 + index * 0.2 },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`absolute bg-gradient-to-br ${snippet.color} p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-2xl cursor-pointer`}
                >
                  <code className="text-white text-sm font-mono whitespace-nowrap">
                    {snippet.code}
                  </code>
                </motion.div>
              ))}

              {/* Orbiting Circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`circle-${i}`}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute"
                  style={{
                    width: `${150 + i * 80}px`,
                    height: `${150 + i * 80}px`,
                  }}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${
                      i === 0 ? "from-pink-500 to-rose-500" :
                      i === 1 ? "from-purple-500 to-indigo-500" :
                      "from-cyan-500 to-blue-500"
                    } shadow-lg`}
                  />
                </motion.div>
              ))}

              {/* Tech Stack Icons */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <span className="text-3xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <span className="text-3xl">🎨</span>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-1/4 -right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <span className="text-3xl">💡</span>
              </motion.div>

              {/* Geometric Shapes */}
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-400/30 rounded-lg"
              />

              <motion.div
                animate={{
                  rotate: [360, 180, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-0 right-0 w-20 h-20 border-4 border-cyan-400/30"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default InteractiveHero;