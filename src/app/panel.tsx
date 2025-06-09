"use client";

import React from "react";
import { useSlider } from "./context";
import { usePanelPosition } from "./hooks/usePanelPosition";
import About from "./card-contents/about";
import Work from "./card-contents/work";
import Projects from "./card-contents/projects";
import Contact from "./card-contents/contact";

export default function Panel() {
  const { currentSection, progress } = usePanelPosition();

  const renderContent = () => {
    switch (currentSection) {
      case 2:
        return <About />;
      case 3:
        return <Work />;
      case 4:
        return <Projects />;
      case 5:
        return <Contact />;
      default:
        return <div className="text-white">Scroll to Proceed</div>;
    }
  };

  // Calculate translation based on progress
  const translateX = `calc(50vw + ${-(progress) * 50}vw)`;

  return (
    <div
      className="absolute inset-0 w-[200vw] h-full"
      style={{
        transform: `translateX(${translateX})`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* Background layer with opacity */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-l-lg" />

      <div className="absolute inset-0 w-full h-fullrounded-l-lg grid grid-cols-4 px-5 gap-5">
        <div className="col-start-1">
          <About />
        </div>
        <div className="col-start-2">
          <Work />
        </div>
        <div className="col-start-3">
          <Projects />
        </div>
        <div className="col-start-4">
          <Contact />
        </div>  
      </div>
    </div>
  );
}