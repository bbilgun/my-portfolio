import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black px-6 sm:px-12 shadow-sm dark:shadow-md transition-colors duration-300 border-b border-primary-100 dark:border-primary-900">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-5 gap-4 md:gap-0">
        {/* Logo or Title */}
        <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-300 text-center md:text-left">
          Welcome
        </div>

        {/* Nav Items */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 text-center">
          <a
            href="mailto:bilguunsys@gmail.com"
            className="text-lg text-primary-600 dark:text-primary-300 font-semibold hover:text-primary-700 dark:hover:text-primary-200 transition-colors"
          >
            Bilguunsys@gmail.com
          </a>
          <a
            href="#intro"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
          >
            Intro
          </a>
          <a
            href="#projects"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
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
