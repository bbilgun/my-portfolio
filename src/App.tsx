import React, { useState, useEffect } from "react";
import PortfolioMain from "./components/PortfolioMain";
import InvolvedProjects from "./components/InvolvedProjects";
import Resume from "./components/Resume";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500); // trigger fade-out
    const finalTimer = setTimeout(() => setLoading(false), 3500); // hide loader

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      {!loading && (
        <div className="main-content fade-in">
          <PortfolioMain />

          <InvolvedProjects />
          <Resume />
        </div>
      )}
    </>
  );
}

export default App;
