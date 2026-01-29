import React from "react";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  href,
  className = "",
  hoverable = true,
}) => {
  const baseClasses =
    "rounded-xl shadow-md bg-gray-100 dark:bg-[#0f0f0f] p-4 transition-colors duration-300 border border-gray-200 dark:border-[#2a2a2a]";

  const hoverClasses = hoverable
    ? "hover:border-primary-500 dark:hover:border-primary-600 hover:shadow-primary-300/30 dark:hover:shadow-primary-800/30"
    : "";

  const combined = `${baseClasses} ${hoverClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block transition-transform duration-300 transform hover:scale-105 ${
          hoverable ? "" : "no-hover"
        }`}
      >
        <div className={combined}>{children}</div>
      </a>
    );
  }

  return <div className={combined}>{children}</div>;
};

export default Card;
