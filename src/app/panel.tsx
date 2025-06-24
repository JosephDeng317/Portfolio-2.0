"use client";

import React from "react";
import { usePanelPosition } from "./hooks/usePanelPosition";
import About from "./card-contents/about";
import Work from "./card-contents/work";
import Projects from "./card-contents/projects";
import Contact from "./card-contents/contact";

export default function Panel() {
  const { progress } = usePanelPosition();

  // Calculate translation based on progress
  const translateX = `calc(100vw + ${-progress * 100}vw)`;

  return (
    <div
      className="absolute inset-0 lg:w-[500vw] h-full"
      style={{
        transform: `translateX(${translateX})`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Background layer with opacity */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-l-lg" />

      <div className="absolute inset-0 w-full h-full rounded-l-lg flex lg:grid lg:grid-cols-5 px-5 gap-5">
        <div className="col-start-1 w-[100vw]">
          <About />
        </div>
        <div className="col-start-2 col-span-2">
          <Work />
        </div>
        <div className="col-start-4">
          <Projects />
        </div>
        <div className="col-start-5">
          <Contact />
        </div>
      </div>
    </div>
  );
}
