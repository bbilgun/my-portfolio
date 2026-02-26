import React from "react";
import { socialLinks } from "../../data/socialLinks";

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto flex md:flex-col gap-6 text-xl text-gray-400 z-50">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={link.icon}
            alt={link.label}
            className="w-6 h-6 sm:w-7 sm:h-7"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
