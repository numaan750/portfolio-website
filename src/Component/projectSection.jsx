"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Trust Property Website",
    description:
      "A fully responsive trust property website built using Next.js and styled with Tailwind CSS, ensuring fast performance, clean design, and seamless user experience across all devices.",
    Image: "/images/project1.jpg",
    link: "https://trust-property.vercel.app/",
  },
  {
    title: "E-commerce App",
    description:
      "A full-stack shopping app with cart, checkout, and admin features built using MERN stack.",
    image: "/images/project2.jpg",
    link: "https://your-ecommerce-site.com",
  },
  {
    title: "Landing Page Design",
    description:
      "A modern landing page design with UI/UX focused layout, animations and responsiveness.",
    image: "/images/project3.jpg",
    link: "https://your-landing-page.com",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with rich text editor, tags, and social sharing.",
    image: "/images/project4.jpg",
    link: "https://your-blog-platform.com",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app with task tracking, deadlines, and reminders.",
    image: "/images/project5.jpg",
    link: "https://your-task-app.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Dashboard showing analytics and statistics for multiple social media accounts.",
    image: "/images/project6.jpg",
    link: "https://your-dashboard.com",
  },
  {
    title: "Fitness Tracker App",
    description: "An app to track workouts, nutrition, and progress over time.",
    image: "/images/project7.jpg",
    link: "https://your-fitness-app.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="Mycontainer">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 px-4 sm:px-6 lg:px-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Here are a few projects I've worked on with full visuals and
            external links:
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="relative w-full h-48 sm:h-52 md:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base flex-1">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
