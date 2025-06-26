import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Urbanize AI",
      techstack: "AWS Lambda, Bedrock, Expo, React, Python",
      description: "Hackathon project that promotes sustainable urban development by allowing users to easily visualize improvements with AI",
      github: "https://github.com/douglasichen/hackathon",
      demo: "https://www.youtube.com/watch?v=BpVrja2T818&ab_channel=JosephDeng"
    },
    {
      title: "AI Recipe Generator",
      techstack: "Next.js, Node.js, React.js, Three.js, OpenAI API",
      description: "Website that utilizes the OpenAI API to generate recipes based on ingredients found in the fridge entered by the user.",
      github: "https://github.com/JosephDeng317/Recipe-Generator",
      demo: "https://nextjs-recipe-generator-zeta.vercel.app/"
    },
    {
      title: "Musical Ear Trainer",
      techstack: "Java, Swing, JUnit, SQLite",
      description: "Helps users practice their interval identification skills by quizing them on randomly generated MIDI notes.",
      github: "https://github.com/JosephDeng317/Music-Ear-Training-Tool",
    },
    {
      title: "Music Recommender",
      techstack: "Python, Selenium, Tkinter",
      description: "Uses webscraping to recommend albums and singles based on a search for an artist.",
      github: "https://github.com/JosephDeng317/RYM-Webscraper",
      demo: "https://www.youtube.com/watch?v=tXSC130E-aw&ab_channel=JosephDeng"
    }
  ];

  return (
    <div className="text-gray-200 opacity-100 mt-5 mx-5">
      <h1 className='text-6xl mb-5'>my projects...</h1>
      <div className='flex flex-col lg:flex-row gap-6'>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className='flex flex-col bg-black/30 p-6 rounded-lg backdrop-blur-sm 
                     border border-gray-500/20 hover:border-gray-400/30 
                     transition-all duration-300 hover:scale-[1.02] montserrat'
          >
            <h2 className='text-2xl font-semibold mb-1'>{project.title}</h2>
            <p className='text-md text-gray-400 mb-4'>{project.techstack}</p>
            <p className='text-gray-300 text-base leading-relaxed'>{project.description}</p>
            <div className='flex items-end mt-4 gap-4 flex-1'>
              <a 
                className='px-4 py-2 rounded-md bg-gray-800/50 text-gray-300 
                         border border-gray-500/20 hover:border-gray-400/30
                         transition-all duration-300 hover:bg-gray-700/50
                         flex items-center gap-2 text-sm backdrop-blur-sm'
                href={project.github} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Github
              </a>
              {project.demo &&
                <a 
                  className='px-4 py-2 rounded-md bg-gray-800/50 text-gray-300 
                           border border-gray-500/20 hover:border-gray-400/30
                           transition-all duration-300 hover:bg-gray-700/50
                           flex items-center gap-2 text-sm backdrop-blur-sm'
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Demo
                </a>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
