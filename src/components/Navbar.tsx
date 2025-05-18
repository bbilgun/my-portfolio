import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black px-6 sm:px-12 shadow-md transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-5 gap-4 md:gap-0">
        {/* Logo or Title */}
        <div className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white text-center md:text-left">
          Welcome
        </div>

        {/* Nav Items */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 text-center">
          <a
            href="mailto:bilguunsys@gmail.com"
            className="text-lg text-purple-700 dark:text-purple-300 transition-colors"
          >
            Bilguunsys@gmail.com
          </a>
          <a
            href="#intro"
            className="text-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Intro
          </a>
          <a
            href="#projects"
            className="text-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="text-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
