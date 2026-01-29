import React from "react";

const LoadingScreen = ({ fadeOut }: { fadeOut: boolean }) => {
  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`flex justify-center items-center gap-4 transition-all duration-1000 ${
          fadeOut ? "scale-50 opacity-0" : ""
        }`}
      >
        <span className="text-purple-800 text-2xl font-semibold">LOADING</span>
        <span className="w-2.5 h-2.5 bg-purple-700 rounded-full animate-move"></span>
        <span className="w-2.5 h-2.5 bg-purple-700 rounded-full animate-move" style={{ animationDelay: "0.2s" }}></span>
        <span className="w-2.5 h-2.5 bg-purple-700 rounded-full animate-move" style={{ animationDelay: "0.4s" }}></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
