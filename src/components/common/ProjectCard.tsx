import React from "react";
import { Project } from "../../types/project";
import Card from "./Card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card href={project.link}>
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary-300 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400 mt-auto">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-primary-700 bg-opacity-20 border border-primary-700 rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
