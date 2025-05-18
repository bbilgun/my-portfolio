import React from "react";
import "./Loader.css";

interface LoaderProps {
  fadeOut: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fadeOut }) => {
  return (
    <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <h1>Loading Portfolio</h1>
      <div className="container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
