"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur background when scrolled
      setIsScrolled(currentScrollY > 20);

      // Hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down → hide navbar
      } else {
        setShowNavbar(true); // scrolling up → show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md bg-black/40 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="Mycontainer py-4 flex justify-between items-center">
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
              className="text-white hover:text-blue-400 transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isClient && isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-black/80 backdrop-blur-md"
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
    </motion.header>
  );
};

export default Navbar;
