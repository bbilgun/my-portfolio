import React from "react";
import QuestioningAvatar from "../assets/images/questioningavatar.png";

const projects = [
  {
    title: "MonInvest",
    description:
      "A mobile leasing application built with React Native and Firebase.",
    tech: ["React Native", "Firebase", "Expo"],
    link: "https://example.com/moninvest",
  },
  {
    title: "Mandal Credit",
    description:
      "A mobile leasing application built with React Native and Firebase.",
    tech: ["React", "TailwindCSS", "Node.js"],
    link: "https://example.com/moninvest",
  },
  {
    title: "Nice Leasing",
    description:
      "A mobile leasing application built with React Native and Firebase.",
    tech: ["Vue.js", "Express", "MongoDB"],
    link: "https://example.com/moninvest",
  },
  {
    title: "OneLend",
    description:
      "A mobile leasing application built with React Native and Firebase.",
    tech: ["React", "Firebase", "TailwindCSS"],
    link: "https://example.com/moninvest",
  },
  {
    title: "Sys&Co App",
    description: "Application made for the members of Sys&CoTech club members.",
    tech: ["React", "Canvas", "TailwindCSS"],
    link: "https://example.com/moninvest",
  },
  {
    title: "Sys&Co Hackathon",
    description: "Web that introduces Sys&CoTech's DevHackathon.",
    tech: ["React", "Canvas", "TailwindCSS"],
    link: "https://example.com/moninvest",
  },
  {
    title: "Sys&Co Portal",
    description: "Web that introduces Sys&CoTech' club.",
    tech: ["React", "Canvas", "TailwindCSS"],
    link: "https://example.com/moninvest",
  },
  {
    title: "Coming soon...",
    description: "I'm always looking forward to work on new projects!",
    tech: ["React"],
    link: "https://example.com/moninvest",
  },
];

const InvolvedProjects = () => {
  return (
    <section
      className="bg-white dark:bg-gradient-to-tr dark:from-black dark:via-[#0a0a0a] dark:to-[#0c001b] min-h-screen text-gray-800 dark:text-white pt-24 pb-32 px-6 sm:px-12 md:px-20 transition-colors duration-300"
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-10 text-purple-600 dark:text-purple-400 text-center">
        Involved Projects
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            <div className="w-full h-full flex flex-col justify-between border border-purple-600 dark:border-purple-800 rounded-xl shadow-md bg-gray-100 dark:bg-[#0f0f0f] p-4 hover:shadow-purple-400/30 dark:hover:shadow-purple-800/50 transition-colors duration-300">
              <div>
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-200 dark:bg-purple-700 bg-opacity-20 border border-purple-400 dark:border-purple-700 rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Avatar Card */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex-1 max-w-xs transition-transform duration-300 transform hover:scale-105 border border-purple-600 dark:border-purple-800 rounded-xl shadow-md bg-gray-100 dark:bg-[#0f0f0f] pt-8 hover:shadow-purple-400/30 dark:hover:shadow-purple-800/50">
          <img
            src={QuestioningAvatar}
            alt="Questioning Avatar"
            className="w-52 sm:w-64 md:w-72 lg:w-80 h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default InvolvedProjects;
