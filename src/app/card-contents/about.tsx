import React from "react";
import Image from "next/image"

export default function About() {
  return (
    <div className="text-gray-200 opacity-100 mt-5 mx-5">
      <h1 className='text-6xl'>hello...</h1>
      <div className="flex flex-col lg:flex-row">
        <div className='mt-5 mb-5 lg:w-1/2 pr-10'>
          <p className='opacity-90 text-lg antic'>
            Nice to meet you! I&apos;m Joseph, a passionate fullstack developer with more than 6 years 
            of programming experience. I began my journey learning the fundementals of Python and Java in my 
            spare time, and have since branched out into the world of Web Development and Machine Learning. In my most recent internship,
            I worked at Metrized Inc., a fast paced ML startup based in Vancouver.
            Currently, I am pursuing a Bachelor&apos;s degree in Computer Science and Physics at the University Of British Columbia, 
            where I am in my third year. When I&apos;m not coding, you may find me making music, bouldering, running, skiing, or immersing myself in the beautiful nature surrounding Vancouver!
          </p>
        </div>
        <div className="mt-5 flex flex-col md:flex-row gap-5 lg:w-1/2">
          <div className="flex gap-5">
            <div className="h-full">
              <Image
                src="/matcha.JPG"
                alt="performative man"
                width={150}
                height={0}
                className="object-contain h-auto rounded-lg transition-all duration-300 navbar-button hover:scale-[1.02]"
              />
            </div>
            <div className="h-full">
              <Image
                src="/ski.jpg"
                alt="skiing"
                width={168}
                height={0}
                className="object-contain h-auto rounded-lg transition-all duration-300 navbar-button hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="h-full">
            <Image
              src="/mountains.JPG"
              alt="mountains"
              width={400}
              height={0}
              className="object-contain h-auto rounded-lg transition-all duration-300 navbar-button hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
