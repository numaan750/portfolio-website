"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Services",
  "Contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="Mycontainer py-4 flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WebCrafted
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          {menuItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-blue-400 hover:text-white transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isClient && isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-black/70 backdrop-blur-sm"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center px-6 py-5">
              <h1 className="text-xl font-bold text-white">WebCrafted</h1>
              <button onClick={toggleMenu} className="text-white text-2xl p-2">
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center space-y-6 text-xl">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleNavClick}
                  className="text-blue-400 hover:text-white transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
