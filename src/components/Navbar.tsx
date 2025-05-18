import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black px-6 sm:px-12 shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-5 gap-4 md:gap-0">
        <div className="text-xl md:text-3xl font-bold text-white text-center md:text-left">
          Welcome
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 text-center">
          <a
            href="mailto:bilguunsys@gmail.com"
            className="text-lg text-purple-300"
          >
            Bilguunsys@gmail.com
          </a>
          <a href="#intro" className="text-lg text-gray-400 hover:text-white">
            Intro
          </a>
          <a
            href="#projects"
            className="text-lg text-gray-400 hover:text-white"
          >
            Projects
          </a>
          <a href="#resume" className="text-lg text-gray-400 hover:text-white">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
