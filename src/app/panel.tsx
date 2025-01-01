"use client";

import React from "react";
import { useSlider } from "./context";
import About from "./card-contents/about";
import Work from "./card-contents/work";
import Projects from "./card-contents/projects";
import Contact from "./card-contents/contact";

export default function Panel() {
  const { inputValue } = useSlider();

  const renderContent = () => {
    switch (inputValue) {
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

  return (
    <div
      className={`w-100 h-full col-span-6 relative ${
        inputValue === 1 ? "col-start-3" : "col-start-3"
      }`}
    >
      <div
        className={`absolute bg-black w-full h-full opacity-30 rounded-l-lg transition-all duration-300 ${
          inputValue === 1 ? "left-1/3 ml-10" : "left-0"
        }`}
      >
        <div className="text-white">{renderContent()}</div>
      </div>
    </div>
  );
}
