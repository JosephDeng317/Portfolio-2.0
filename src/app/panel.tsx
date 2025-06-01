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

  const translateX = `${-(progress - 1) * 20}%`;

  return (
    <div
      className="w-[600vh] h-full col-span-6 col-start-3 relative"
      style={{
        transform: `translateX(${translateX})`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      <div className="absolute bg-black w-full h-full opacity-30 rounded-l-lg">
        <div className="text-white">{renderContent()}</div>
      </div>
    </div>
  );
}
