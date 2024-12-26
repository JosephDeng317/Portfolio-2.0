import Image from "next/image";

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
      <div className="row-span-6"></div>
      <div className="row-span-2">
        <div className="pl-20">
          <h1 className="text-8xl text-white">Joseph Deng</h1>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
