"use client";

import { motion } from "framer-motion";

export default function ResumeSection() {
  const experience = [
    {
      year: "2021–2022",
      title: "SEO",
      company: "DevsRank",
      desc: "Performed keyword research, optimized pages, and improved web traffic/rankings for clients at DevsRank.",
    },
    {
      year: "2022–Now",
      title: "UI / UX Designer",
      company: "Freelancing",
      desc: "Designing user-friendly websites and mobile apps with wireframes, prototypes, and responsive UI systems.",
    },
    {
      year: "2023–Now",
      title: "React.js Developer",
      company: "Freelancer",
      desc: "Developing modern, scalable React applications with clean code and reusable component structures.",
    },
  ];

  const education = [
    {
      year: "2006–2018",
      title: "Matriculation",
      institute: "Sarabia Serajia Higher Secondary School",
      desc: "Completed Matriculation in Science stream with strong fundamentals in mathematics and computers.",
    },
    {
      year: "2018–2021",
      title: "Intermediate",
      institute: "Government Technical College",
      desc: "Earned a 3-year Diploma in Electrical Engineering with practical lab work and industrial training.",
    },
    {
      year: "2021–2025",
      title: "Bachelors",
      institute: "Lahore Leads University",
      desc: "Recently completed BSCS, focused on full-stack web development, databases, and software architecture.",
    },
  ];

  // Animation variants
  const fadeInCenter = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="Mycontainer px-4 sm:px-6 lg:px-8">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-16 text-center"
          variants={fadeInCenter}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          My Resume
        </motion.h2>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Experience */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-8 border-b-2 border-teal-500 pb-2">
              My Experiences
            </h3>
            <div className="space-y-12 relative border-l-2 border-teal-500 pl-6">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute -left-6 top-1 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{item.year}</p>
                  <h4 className="font-bold text-lg sm:text-xl">{item.title}</h4>
                  <p className="text-teal-400 text-sm">{item.company}</p>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-8 border-b-2 border-teal-500 pb-2">
              My Education
            </h3>
            <div className="space-y-12 relative border-l-2 border-teal-500 pl-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute -left-6 top-1 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{item.year}</p>
                  <h4 className="font-bold text-lg sm:text-xl">{item.title}</h4>
                  <p className="text-teal-400 text-sm">{item.institute}</p>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
