"use client";

import { useSlider } from "./context";

export default function Three() {
  const { inputValue } = useSlider();
  return (
    <div
      className={`transition-all duration-300 ${
        inputValue === 1 ? "col-span-4" : "col-span-2"
      }`}
    >
      3D Model
    </div>
  );
}
