import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { TbMenu2 } from "react-icons/tb";

const logo = "/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs", matchPrefix: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const getLinkClass = (isActive, link, extraClasses = "") => {
    const active =
      isActive ||
      (link.matchPrefix && location.pathname.startsWith(link.matchPrefix));
    return `relative pb-1 transition-colors duration-200 
      ${active ? "text-[var(--primary)]" : "text-black"}
      hover:text-[var(--primary)]
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-[2px] after:w-full after:bg-[var(--primary)] 
      after:transition-transform after:duration-300 
      ${active ? "after:scale-x-100" : "after:scale-x-0"}
      hover:after:scale-x-100 after:origin-left ${extraClasses}`;
  };

  return (
    <header
      ref={navRef}
      className="fixed select-none font-[450] new-font top-5 z-50 left-0 right-0 mx-4 lg:mx-5 xl:mx-auto max-w-screen-xl"
    >
      <nav className="glass-medium border-b border-gray-200 p-4 rounded-xl relative z-[70]">
        <div className="container mx-auto flex px-5 justify-between items-center">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex justify-center items-center gap-3 text-gray-900"
          >
            <img
              src={logo}
              alt="logo" 
              className="inline-block select-none h-[30px]"
              draggable="false"
            />
            <div className="text-xl">rana.net.in</div>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) => getLinkClass(isActive, link)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-3xl text-gray-800 p-1 focus:outline-none"
            >
              {isOpen ? <HiX /> : <TbMenu2 />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "400px" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-white/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center z-[55] lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col pt-[60px] justify-center items-center gap-3 text-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    end={link.end}
                    onClick={closeMenu}
                    className={({ isActive }) => {
                      const active =
                        isActive ||
                        (link.matchPrefix &&
                          location.pathname.startsWith(link.matchPrefix));
                      return `text-xl p-1 px-2 transition-colors relative
                        ${active ? "text-[var(--primary)]" : "text-gray-900"}
                        hover:text-[var(--primary)]
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:h-[2px] after:w-full after:bg-[var(--primary)] 
                        after:transition-transform 
                        ${active ? "after:scale-x-100" : "after:scale-x-0"}
                        hover:after:scale-x-100`;
                    }}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;