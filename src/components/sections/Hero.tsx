import React, { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import improv from "../../assets/improv.png";

const Hero: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 scale-[1.25] px-6 sm:px-12 md:px-20 lg:px-28 pt-48">
      {/* Left Side */}
      <div
        className={`flex flex-col gap-4 max-w-xl text-left transform transition-all duration-1000  ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-4 max-w-xl text-left items-start">
          <span className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-semibold dark:bg-primary-900 dark:text-primary-200 border border-primary-300 dark:border-primary-700">
            My name is
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-primary-900 dark:text-gray-100">
            {profile.name}
          </h1>
          <h2 className="uppercase text-primary-600 dark:text-primary-400 tracking-wider text-sm font-semibold">
            {profile.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {profile.bio}
          </p>
          <a
            href={profile.boredButtonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-br from-primary-800 to-primary-600 text-white w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full shadow-lg text-xs sm:text-sm font-semibold mt-5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-primary-500/50">
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
        <img
          src={improv}
          alt="Bilguun Avatar"
          className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px] rounded-full border-4 border-primary-800 shadow-lg hover:shadow-primary-500/40 transition duration-500"
        />
      </div>
    </div>
  );
};

export default Hero;
