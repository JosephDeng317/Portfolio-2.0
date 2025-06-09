import React from "react";

export default function Work() {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Metrized Inc.",
      period: "Jan 2025 - Sep 2025",
      description: "Led the development of internal tools using React and TypeScript, improving team productivity by 40%. Collaborated with cross-functional teams to implement cloud-based solutions and optimize AWS service integration."
    },
    {
      title: "Full Stack Developer",
      company: "CSToolkit Inc.",
      period: "May 2024 - Jun 2024",
      description: "Developed and maintained data visualization tools for quantum physics research. Built responsive web applications using Next.js and D3.js, enabling researchers to analyze complex datasets efficiently."
    },
    {
      title: "Web Developer",
      company: "UBC BIOMOD",
      period: "Oct 2024 - Present",
      description: "Created intuitive user interfaces for blockchain applications using React and Web3.js. Implemented wallet integration and smart contract interactions, enhancing user engagement with decentralized applications."
    },
  ];

  return (
    <div className="text-gray-100 opacity-100 mt-10 mx-5">
      <h1 className='text-7xl mb-10'>my experiences...</h1>
      <div className='grid grid-cols-3 gap-6'>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className='bg-black/30 p-6 rounded-lg backdrop-blur-sm 
                     border border-gray-500/20 hover:border-gray-400/30 
                     transition-all duration-300 hover:scale-[1.02]'
          >
            <h2 className='text-2xl font-semibold mb-1'>{exp.title}</h2>
            <h3 className='text-xl text-gray-300 mb-2'>{exp.company}</h3>
            <p className='text-md text-gray-400 mb-4 antic'>{exp.period}</p>
            <p className='text-gray-300 text-base leading-relaxed antic'>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
