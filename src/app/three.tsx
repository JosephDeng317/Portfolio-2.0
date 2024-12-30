"use client";

import { useSlider } from "./context";

export default function Three() {
  const { inputValue } = useSlider();
  return (
    <div className={`relative col-span-2 w-100`}>
      <div
        className={`absolute w-full h-full overflow-visible transition-all duration-200 bg-white -right-1/2 ${
          inputValue === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        3D Model
      </div>
    </div>
  );
}
