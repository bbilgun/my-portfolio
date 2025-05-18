import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ fadeOut }: { fadeOut: boolean }) => {
  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`wrapper transition-all duration-1000 ${
          fadeOut ? "scale-50 opacity-0" : ""
        }`}
      >
        <span className="text-purple-900 text-2xl font-semibold">LOADING</span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
