"use client";

import React from "react";
import { useSlider } from "./context";
import { usePanelPosition } from "./hooks/usePanelPosition";
import About from "./card-contents/about";
import Work from "./card-contents/work";
import Projects from "./card-contents/projects";
import Contact from "./card-contents/contact";

export default function PanelMobile() {
  return (
    <div className="h-full">
      {/* Background layer with opacity */}
      <div className="bg-black opacity-30 rounded-l-lg" />

      <div className="w-full h-full rounded-l-lg flex px-5 gap-5">
        <div className="">
          <About />
        </div>
        <div className="">
          <Work />
        </div>
        <div className="">
          <Projects />
        </div>
        <div className="">
          <Contact />
        </div>
      </div>
    </div>
  );
}
