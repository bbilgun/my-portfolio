// components/ThemeToggle.jsx
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" z-50 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-md shadow-md transition-all"
    >
      {theme === "light" ? "Dark" : "light"}
    </button>
  );
};

export default ThemeToggle;
