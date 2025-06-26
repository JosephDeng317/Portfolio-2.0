import React from "react";

export default function Work() {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Metrized Inc.",
      period: "Jan 2025 - Sep 2025",
      points: 
      [
        "Utilized a cutting edge Image to 3D AI to generate high fidelity models of furniture, helping clients save up to $5000 per unit of shipping and scanning costs.",
        "Boosted YOLO object detection speed by 200% by conducting thorough benchmarks and implementing TensorRT.",
        "Spearheaded the transformation of a full-stack web app into a distributable desktop app with Electron, rewrote and packaged python backend to use dynamic ports, and bootstrapped large modules to optimize app size",
        "Designed, implemented, and deployed a product landing page from scratch using Docker containers to ensure migratability, and Cloudflare tunnels to link a local port to a live domain"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "CSToolkit Inc.",
      period: "May 2024 - Jun 2024",
      points: 
      [
        "Executed dynamic API calls to Contentful using Flask to add pagination, tagging, and a search function to the company’s production blog page.",
        "Engaged in a multi-stage build and review process with a professional UX designer, and reskinned the website to use a responsive, mobile-first layout to improve user experience on small screen sizes"
      ]
    },
    {
      title: "Web Developer",
      company: "UBC BIOMOD",
      period: "Oct 2024 - Present",
      points: 
      [
        "Worked in a team of four to ship a responsive, competition-ready website in less than 3 weeks using Astro.js",
        "Finalized the production site by reviewing several pull requests , resolving code conflicts, and fixing critical bugs",
        "Constructed an eye-catching home page featuring a controllable 3D model of the team’s microbiology project using Three.js, Tailwind, and React"
      ]
    },
  ];

  return (
    <div className="text-gray-100 opacity-100 mt-5 mx-5 w-full pr-10">
      <h1 className='text-6xl mb-5 w-full'>my experiences...</h1>
      <div className='flex flex-col lg:grid lg:grid-cols-3 gap-6 w-full montserrat'>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className='bg-black/30 p-6 rounded-lg backdrop-blur-sm 
                     border border-gray-500/20 hover:border-gray-400/30 
                     transition-all duration-300 hover:scale-[1.02]'
          >
            <h2 className='text-xl font-semibold'>{exp.title} @ {exp.company}</h2>
            <p className='text-md text-gray-400 mb-2'>{exp.period}</p>
            <ul>
              {exp.points.map(point => (
                <li key={point} className='text-gray-300 text-base leading-relaxed'>
                  <span className="text-white text-lg">• </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
