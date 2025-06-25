// "use client";

import Socials from "./socials";
import Panel from "./panel";
import PanelMobile from "./panelMobile";
import RangeSlider from "./slider";
import { SliderProvider } from "./context";
import Three from "./three";
import Navbar from "./navbar";

export default function Home() {
  // useScroll();

  return (
    <div className="flex flex-col lg:grid lg:grid-rows-9 gap-4 lg:h-screen">
      <SliderProvider>
        <Navbar />
        <div className="h-[50vh] w-[100vw] lg:h-full lg:row-span-6 lg:grid lg:grid-cols-8 transition-[grid-template-columns] duration-500 relative">
          <Three />
          <div className="hidden lg:block">
            <Panel />
          </div>
        </div>
        <div className="flex flex-col justify-end pb-10 lg:pb-0 h-[40vh] lg:h-auto lg:row-span-2 lg:grid lg:grid-cols-4">
          <div className="flex pl-5 lg:pl-20 lg:col-span-2 justify-between">
            <h1 className="text-7xl xl:text-8xl text-white">Joseph Deng</h1>
          </div>
          <RangeSlider />
          <Socials />
        </div>
        <div className="flex lg:hidden">
          <PanelMobile />
        </div>
      </SliderProvider>
    </div>
  );
}
