import React, { useEffect, useState } from "react";
import CanvasCursor from "./CanvasCursor";
import avatarDark from "../assets/images/final_avatar.png";
import Navbar from "./Navbar";
import Fb from "../assets/images/fb.svg";
import Insta from "../assets/images/insta.svg";
import Git from "../assets/images/git.svg";
import ThemeToggle from "./ThemeToggle";
import avatarLight from "../assets/images/light-avatar.png";

const PortfolioMain = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="intro">
      {/* Navbar */}
      <div className="px-12">
        <Navbar />
      </div>
      <div
        className={`App relative min-h-screen transition-opacity duration-1000 ease-in px-6 sm:px-40 md:px-60 pt-20 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } bg-gradient-to-br from-[#F9FAFB] via-[#F9FAFB] to-[#F9FAFB] dark:from-black dark:via-[#0a0a0a] dark:to-[#0c001b] text-gray-800 dark:text-gray-200`}
      >
        <section id="intro">
          <div id="canvas-wrapper" className="relative z-0">
            <CanvasCursor />
          </div>
        </section>{" "}
        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 scale-[1.25] px-6 sm:px-12 md:px-20 lg:px-28 pt-48">
          {/* Left Side */}
          <div
            className={`flex flex-col gap-4 max-w-xl text-left transform transition-all duration-1000  ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col gap-4 max-w-xl text-left items-start">
              <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm dark:bg-purple-900 dark:text-white">
                My name is
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black dark:text-gray-300">
                Bilguun A.
              </h1>
              <h2 className="uppercase text-gray-600 dark:text-gray-400 tracking-wider text-sm font-semibold">
                President of Sys&CoTech club
              </h2>

              <p className="text-gray-500 text-sm sm:text-base">
                Junior at MUST majoring in Computer Science. Works at
                EverestSolution as a front-end developer. I have experience
                building front-ends for mobile applications.
              </p>
              <a
                href="https://boredbutton.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* end playlistee oruulsan huudas hiine */}
                <button className="bg-gradient-to-br from-purple-800 to-purple-600 text-white w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full shadow-lg text-xs sm:text-sm font-semibold mt-5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-purple-500/50">
                  Bored?
                </button>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div
            className={`flex justify-center z-20 transform transition-all duration-1000 ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Light Mode Avatar */}
            <img
              src={avatarLight}
              alt="Bilguun Avatar Light"
              className="block dark:hidden w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px] rounded-full border-4 border-purple-800 shadow-lg hover:shadow-purple-500/40 transition duration-500"
            />

            {/* Dark Mode Avatar */}
            <img
              src={avatarDark}
              alt="Bilguun Avatar Dark"
              className="hidden dark:block w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px] rounded-full border-4 border-purple-800 shadow-lg hover:shadow-purple-500/40 transition duration-500"
            />
          </div>
        </div>
        {/* Social Icons */}
        <div className="fixed bottom-4 left-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto flex md:flex-col gap-6 text-xl text-gray-600 z-50">
          <a
            href="https://www.facebook.com/profile.php?id=61551679342680"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={Fb} alt="Facebook" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.instagram.com/bbilgun_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={Insta}
              alt="Instagram"
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </a>
          <a
            href="https://github.com/bbilgun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={Git} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
        {/* Diagonal Line */}
        <div className="hidden md:block absolute top-0 right-[50%] h-full w-[1px] bg-gradient-to-b from-purple-500/50 via-transparent to-transparent transform rotate-[20deg] origin-top opacity-60 pointer-events-none blur-[1px]" />
      </div>{" "}
    </section>
  );
};

export default PortfolioMain;
