import React from "react";
import CanvasCursor from "./layout/CanvasCursor";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import SocialLinks from "./common/SocialLinks";

const PortfolioMain = () => {

  return (
    <section id="intro">
      {/* Navbar */}
      <div className="px-12">
        <Navbar />
      </div>
      <div className="App relative min-h-screen transition-opacity duration-1000 ease-in px-6 sm:px-40 md:px-60 pt-20 bg-gradient-to-br from-background-light-primary via-blue-50 to-purple-50 dark:from-background-dark-primary dark:via-background-dark-secondary dark:to-background-dark-tertiary text-gray-900 dark:text-gray-200">
        <section id="intro">
          <div id="canvas-wrapper" className="relative z-0">
            <CanvasCursor />
          </div>
        </section>
        <Hero />
        <SocialLinks />
        {/* Diagonal Line */}
        <div className="hidden md:block absolute top-0 right-[50%] h-full w-[1px] bg-gradient-to-b from-primary-500/50 via-transparent to-transparent transform rotate-[20deg] origin-top opacity-60 pointer-events-none blur-[1px]" />
      </div>
    </section>
  );
};

export default PortfolioMain;
