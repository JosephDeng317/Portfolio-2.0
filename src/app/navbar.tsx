"use client";

import { useSlider } from "./context";
import { useState } from "react";

export default function Navbar() {
  const { setInputValue } = useSlider();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-gray/60 backdrop-blur-sm lg:bg-transparent h-[10vh] grid grid-cols-8 lg:row-span-1 lg:h-auto z-30">
      <div className="p-3 pl-5 lg:p-5 col-span-2">
        <button className="" onClick={() => setInputValue(0.5)}>
          <h1 className="text-5xl tight-spacing navbar-button transition-all duration-300 z-40">JD</h1>
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
      <div className="relative lg:hidden col-span-6 flex items-center justify-end pr-6 z-40">
        <button
          className="flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setOpen((prev: boolean) => !prev)}
          aria-label="Open menu"
        >
          <span className={`block w-8 h-1 bg-gray-300 rounded-md mb-1 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-8 h-1 bg-gray-300 rounded-md mb-1 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-8 h-1 bg-gray-300 rounded-md transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Dropdown menu */}
        {open && (
          <div className="absolute top-full right-6 bg-black bg-opacity-80 rounded-lg shadow-lg flex flex-col z-50 min-w-[140px]">
            <a
              href="#about"
              className="px-6 py-3 text-white navbar-button transition"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#work"
              className="px-6 py-3 text-white navbar-button transition"
              onClick={() => setOpen(false)}
            >
              Work
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-white navbar-button transition"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-white navbar-button transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
