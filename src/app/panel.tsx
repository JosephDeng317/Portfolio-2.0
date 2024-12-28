"use client";

import React from "react";
import { useSlider } from "./context";

export default function Panel() {
  const { inputValue } = useSlider();
  return (
    <div
      className={`w-100 h-100 opacity-30 bg-black rounded-l-lg transition-all duration-300 ${
        inputValue === 1 ? "col-span-4" : "col-span-6"
      }`}
    >
      <div className="text-white">Hello {inputValue}</div>
    </div>
  );
}
