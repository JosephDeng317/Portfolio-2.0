"use client";

import React from "react";
import { useSlider } from "./context";

export default function Panel() {
  const { inputValue } = useSlider();
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
        <div className="text-white">Hello {inputValue}</div>
      </div>
    </div>
  );
}
