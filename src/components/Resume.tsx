import React from "react";

const Resume: React.FC = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "EverestSolution",
      duration: "2024 – Present",
      description: "Building modern apps and UI components using React.",
    },
    {
      role: "Development Team Member, Vice President",
      company: "Sys&CoTech Club",
      duration: "2022 – Present",
      description:
        "Develops club application, websites using modern technologies.",
    },
    {
      role: "Loan Manager",
      company: "Sono Leasing App",
      duration: "2022 – 2023",
      description:
        "Contacts with users manages extension and payment of the loan",
    },
  ];

  const education = [
    {
      school: "Mongolian University of Science and Technology",
      degree: "Computer Science",
      duration: "2019 – Present (Junior)",
    },
    {
      school: "EUTS High-School",
      degree: "High School Diploma",
      duration: "2010 – 2022",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-black via-[#0a0a0a] to-[#1c1c1c] text-white py-20 px-6 sm:px-12 md:px-20 "
      id="resume"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-14 text-purple-400 text-center tracking-tight">
        Resume
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">
            Experience
          </h3>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="mb-8 p-5 rounded-xl border border-[#2a2a2a] hover:border-purple-600 bg-[#121212] shadow-md hover:shadow-purple-800/30 transition duration-300"
            >
              <h4 className="text-2xl font-bold text-purple-200">{exp.role}</h4>
              <p className="text-sm text-purple-500 mt-1 mb-2">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">
            Education
          </h3>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="mb-8 p-5 rounded-xl border border-[#2a2a2a] hover:border-purple-600 bg-[#121212] shadow-md hover:shadow-purple-800/30 transition duration-300"
            >
              <h4 className="text-2xl font-bold text-purple-200">
                {edu.school}
              </h4>
              <p className="text-sm text-purple-500 mt-1 mb-2">{edu.degree}</p>
              <p className="text-gray-300 text-sm">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
