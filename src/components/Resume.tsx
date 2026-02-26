import React from "react";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import ExperienceCard from "./common/ExperienceCard";
import EducationCard from "./common/EducationCard";

const Resume: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-br from-background-dark-primary via-background-dark-secondary to-background-dark-secondary text-white py-20 px-6 sm:px-12 md:px-20 transition-colors duration-300"
      id="resume"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-14 text-primary-400 text-center tracking-tight">
        Short Resume
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <h3 className="text-3xl font-semibold text-primary-300 mb-8 border-b border-primary-700 pb-2">
            Experience
          </h3>
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-8">
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-semibold text-primary-300 mb-8 border-b border-primary-700 pb-2">
            Education
          </h3>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-8">
              <EducationCard education={edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
