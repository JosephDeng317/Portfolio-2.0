import Socials from "./socials";
import Panel from "./panel";
import RangeSlider from "./slider";
import { SliderProvider } from "./context";
import Three from "./three";

export default function Home() {
  return (
    <div className="grid grid-rows-9 gap-4 h-screen">
      <SliderProvider>
        <div className="row-span-1 grid grid-cols-8">
          <div className="p-5 col-span-2">
            <h1 className="text-5xl tight-spacing">JD</h1>
          </div>
          <div className="flex pt-8 gap-10 text-4xl text-white">
            <h1 className="navbar-button transition-all duration-300">about</h1>
            <h1 className="navbar-button transition-all duration-300">work</h1>
            <h1 className="navbar-button transition-all duration-300">
              projects
            </h1>
            <h1 className="navbar-button transition-all duration-300">
              contact
            </h1>
          </div>
        </div>
        <div className="row-span-6 grid grid-cols-8 transition-[grid-template-columns] duration-500">
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
