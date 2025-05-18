import React from "react";

const Resume: React.FC = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "EverestSolution",
      duration: "2024 – Present",
      description: "Building modern apps and UI components using React.",
      link: "https://everest.mn", // example link
    },
    {
      role: "Development Team Member, Vice President",
      company: "Sys&CoTech Club",
      duration: "2022 – Present",
      description:
        "Develops club application, websites using modern technologies.",
      link: "https://syscotech.mn", // example link
    },
    {
      role: "Loan Manager",
      company: "Sono Leasing App",
      duration: "2022 – 2023",
      description:
        "Contacts with users, manages extension and payment of the loan",
      link: "https://sono.mn", // example link
    },
  ];

  const education = [
    {
      school: "Mongolian University of Science and Technology",
      degree: "Computer Science",
      duration: "2019 – Present (Junior)",
      link: "https://www.must.edu.mn",
    },
    {
      school: "EUTS High-School",
      degree: "High School Diploma",
      duration: "2010 – 2022",
      link: "https://euts.edu.mn",
    },
  ];

  return (
    <section
      className="bg-white dark:bg-gradient-to-br dark:from-black dark:via-[#0a0a0a] dark:to-[#1c1c1c] text-gray-900 dark:text-white py-20 px-6 sm:px-12 md:px-20 transition-colors duration-300"
      id="resume"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-14 text-purple-600 dark:text-purple-400 text-center tracking-tight">
        Resume
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-700 dark:text-purple-300 mb-8 border-b border-purple-400 dark:border-purple-700 pb-2">
            Experience
          </h3>
          {experiences.map((exp, idx) => (
            <a
              key={idx}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-8 p-5 rounded-xl border border-gray-200 dark:border-[#2a2a2a] hover:border-purple-500 dark:hover:border-purple-600 bg-gray-100 dark:bg-[#121212] shadow-md hover:shadow-purple-300/30 dark:hover:shadow-purple-800/30 transition duration-300"
            >
              <h4 className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                {exp.role}
              </h4>
              <p className="text-sm text-purple-600 dark:text-purple-500 mt-1 mb-2">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </a>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-700 dark:text-purple-300 mb-8 border-b border-purple-400 dark:border-purple-700 pb-2">
            Education
          </h3>
          {education.map((edu, idx) => (
            <a
              key={idx}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-8 p-5 rounded-xl border border-gray-200 dark:border-[#2a2a2a] hover:border-purple-500 dark:hover:border-purple-600 bg-gray-100 dark:bg-[#121212] shadow-md hover:shadow-purple-300/30 dark:hover:shadow-purple-800/30 transition duration-300"
            >
              <h4 className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                {edu.school}
              </h4>
              <p className="text-sm text-purple-600 dark:text-purple-500 mt-1 mb-2">
                {edu.degree}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {edu.duration}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
