import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Harvest Hills",
    category: " ",
    image: "/harv.jpg",
  },
  {
    id: 2,
    title: "VSG Suraksha Enclave",
    category: "",
    image: "/vsg.jpg",
  },
];

// clone first slide
const slides = [...projects, projects[0]];

export const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // snap back without animation
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // same as transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const next = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 2 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold">
              Portfolio
            </h2>
            <h3 className="text-4xl font-serif text-pleo-text">
              Featured Ongoing Projects
            </h3>
          </div>

          {/* Controls */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="p-4 border border-pleo-text/10 rounded-full hover:bg-pleo-blue transition-colors duration-300"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-4 border border-pleo-text/10 rounded-full hover:bg-pleo-blue transition-colors duration-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative aspect-[16/10] max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-black">
          <div
            className={`flex h-full ${
              isTransitioning
                ? "transition-transform duration-1000 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((project, idx) => (
              <div key={idx} className="min-w-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-20">
                  <span className="text-pleo-blue font-bold text-sm uppercase tracking-[0.3em] mb-4">
                    {project.category}
                  </span>
                  <h4 className="text-3xl md:text-6xl font-serif text-white mb-4">
                    {project.title}
                  </h4>
                  <div className="h-1 w-24 bg-pleo-blue rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentIndex % projects.length
                  ? "w-16 bg-pleo-blue-dark"
                  : "w-6 bg-pleo-text/10"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
