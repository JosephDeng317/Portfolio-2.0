// "use client";

import Socials from "./socials";
import Panel from "./panel";
import RangeSlider from "./slider";
import { SliderProvider } from "./context";
import Three from "./three";
import useScroll from "./hooks/useScroll";
import Navbar from "./navbar";

export default function Home() {
  // useScroll();

  return (
    <div className="grid grid-rows-9 gap-4 h-screen">
      <SliderProvider>
        <Navbar />
        <div className="row-span-6 grid grid-cols-8 transition-[grid-template-columns] duration-500 relative overflow-hidden">
          <Three />
          <Panel />
        </div>
        <div className="row-span-2 grid grid-cols-4">
          <div className="pl-20 col-span-2">
            <h1 className="text-8xl text-white">Joseph Deng</h1>
          </div>
          <RangeSlider />
          <Socials />
        </div>
      </SliderProvider>
    </div>
  );
}
