import React from "react";
import QuestioningAvatar from "../assets/images/questioningavatar.png";
import { projects } from "../data/projects";
import ProjectCard from "./common/ProjectCard";

const InvolvedProjects = () => {
  return (
    <section
      className="bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-tr dark:from-background-dark-primary dark:via-background-dark-secondary dark:to-background-dark-tertiary min-h-screen text-gray-900 dark:text-white pt-24 pb-32 px-6 sm:px-12 md:px-20 transition-colors duration-300"
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-10 text-primary-700 dark:text-primary-400 text-center">
        Involved Projects
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/* Avatar Card */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex-1 max-w-xs transition-transform duration-300 transform hover:scale-105 border border-primary-600 dark:border-primary-800 rounded-xl shadow-md bg-gray-100 dark:bg-[#0f0f0f] pt-8 hover:shadow-primary-400/30 dark:hover:shadow-primary-800/50">
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
