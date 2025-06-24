"use client";

import React from "react";
import About from "./card-contents/about";
import Work from "./card-contents/work";
import Projects from "./card-contents/projects";
import Contact from "./card-contents/contact";

export default function PanelMobile() {
  return (
    <div className="h-full w-full relative">
      {/* Background layer with opacity */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg m-5" />
      <div className="h-full rounded-l-lg flex flex-col gap-5 relative z-10 m-5">
        <div className="mt-5">
          <About />
        </div>
        <div className="mt-5">
          <Work />
        </div>
        <div className="mt-5">
          <Projects />
        </div>
        <div className="mt-5">
          <Contact />
        </div>
      </div>
    </div>
  );
}
