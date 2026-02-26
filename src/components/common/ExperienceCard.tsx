import React from "react";
import { Experience } from "../../types/experience";
import Card from "./Card";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card hoverable={false}>
      <h4 className="text-2xl font-bold text-primary-200">
        {experience.role}
      </h4>
      <p className="text-sm text-primary-500 mt-1 mb-2">
        {experience.company} • {experience.duration}
      </p>
      <p className="text-gray-300 text-sm leading-relaxed">
        {experience.description}
      </p>
    </Card>
  );
};

export default ExperienceCard;
