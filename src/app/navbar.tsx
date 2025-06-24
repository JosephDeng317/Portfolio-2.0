"use client";

import { useSlider } from "./context";

export default function Navbar() {
  const { inputValue, setInputValue } = useSlider();

  return (
    <div className="h-[10vh] grid grid-cols-8 lg:row-span-1 lg:h-auto">
      <div className="p-5 col-span-2">
        <button className="" onClick={() => setInputValue(0.5)}>
          <h1 className="text-5xl tight-spacing">JD</h1>
        </button>
      </div>
      <div className="hidden lg:flex pt-8 gap-10 text-4xl text-white">
        <button className="" onClick={() => setInputValue(1)}>
          <h1 className="navbar-button transition-all duration-300 pb-5">
            about
          </h1>
        </button>
        <button className="" onClick={() => setInputValue(2)}>
          <h1 className="navbar-button transition-all duration-300 pb-5">
            work
          </h1>
        </button>
        <button className="" onClick={() => setInputValue(4)}>
          <h1 className="navbar-button transition-all duration-300 pb-5">
            projects
          </h1>
        </button>
        <button className="" onClick={() => setInputValue(5)}>
          <h1 className="navbar-button transition-all duration-200 pb-5">
            contact
          </h1>
        </button>
      </div>
    </div>
  );
}
