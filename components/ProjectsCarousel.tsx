
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Harvest Hills",
    category: "Premium NA Plots",
    image: "/harvest_1.png"
  },
  {
    id: 2,
    title: "Suraksha Enclave",
    category: "Gated Community",
    image: "/suraksha_enclave.png"
  },
  {
    id: 3,
    title: "Gulmohar Villas",
    category: "Investment Lands",
    image: "/gulmohar_1.png"
  }
];

export const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold">Portfolio</h2>
            <h3 className="text-4xl font-serif text-pleo-text">Featured Ongoing Projects</h3>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="p-4 border border-pleo-text/10 rounded-full hover:bg-pleo-blue transition-colors duration-300">
              <ChevronLeft />
            </button>
            <button onClick={next} className="p-4 border border-pleo-text/10 rounded-full hover:bg-pleo-blue transition-colors duration-300">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/10] max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-pleo-grey shadow-2xl">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
              }`}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-20">
                <span className="text-pleo-blue font-bold text-sm uppercase tracking-[0.3em] mb-4">{project.category}</span>
                <h4 className="text-3xl md:text-6xl font-serif text-white mb-4">{project.title}</h4>
                <div className="h-1 w-24 bg-pleo-blue rounded-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {projects.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-16 bg-pleo-blue-dark' : 'w-6 bg-pleo-text/10'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
