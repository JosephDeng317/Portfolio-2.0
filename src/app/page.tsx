import Socials from "./socials";
import Panel from "./panel";

export default function Home() {
  return (
    <div className="grid grid-rows-9 gap-4 h-screen">
      <div className="row-span-1 grid grid-cols-5">
        <div className="p-5">
          <h1 className="text-5xl tight-spacing">JD</h1>
        </div>
        <div className="flex pl-20 pt-8 gap-10 text-4xl text-white">
          <h1 className="navbar-button transition-all duration-300">about</h1>
          <h1 className="navbar-button transition-all duration-300">work</h1>
          <h1 className="navbar-button transition-all duration-300">
            projects
          </h1>
          <h1 className="navbar-button transition-all duration-300">contact</h1>
        </div>
      </div>
      <div className="row-span-6">
        <Panel />
      </div>
      <div className="row-span-2 grid grid-cols-4">
        <div className="pl-20 col-span-2">
          <h1 className="text-8xl text-white">Joseph Deng</h1>
        </div>
        <div className="flex justify-end pt-2">
          <div>
            <label
              htmlFor="default-range"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              id="default-range"
              type="range"
              value="0"
              className="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            ></input>
          </div>
        </div>

        <Socials />
      </div>
    </div>
  );
}
