import React from "react";

interface LoaderProps {
  fadeOut: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-9999 flex justify-center items-center flex-col transition-opacity duration-800 ease-out ${
        fadeOut ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <h1 className="mb-12 font-semibold text-4xl text-purple-400 text-center">
        Loading Portfolio
      </h1>
      <div className="flex justify-center items-center gap-5 w-full">
        <div className="w-10 h-10 bg-purple-600 rounded-full animate-loader-dot" style={{ animationDelay: "-0.25s" }}></div>
        <div className="w-10 h-10 bg-purple-700 rounded-full animate-loader-dot" style={{ animationDelay: "-0.5s" }}></div>
        <div className="w-10 h-10 bg-purple-800 rounded-full animate-loader-dot" style={{ animationDelay: "-0.75s" }}></div>
        <div className="w-10 h-10 bg-purple-900 rounded-full animate-loader-dot" style={{ animationDelay: "-1s" }}></div>
      </div>
    </div>
  );
};

export default Loader;
