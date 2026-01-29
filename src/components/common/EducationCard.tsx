import React from "react";
import { Education } from "../../types/education";
import Card from "./Card";

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <Card href={education.link}>
      <h4 className="text-2xl font-bold text-primary-800 dark:text-primary-200">
        {education.school}
      </h4>
      <p className="text-sm text-primary-600 dark:text-primary-500 mt-1 mb-2">
        {education.degree}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        {education.duration}
      </p>
    </Card>
  );
};

export default EducationCard;
