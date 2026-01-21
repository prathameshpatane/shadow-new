
import React, { useEffect, useRef } from 'react';

const founders = [
  {
    name: "Amar Tarange",
    role: "CEO & Founder",
    description: "Mr. Amar Tarange is a visionary leader, who is spearheading our journey, brings a visionary perspective and entrepreneurial spirit to drive innovation and growth.",
    image: "/Amar_tarange.png" 
  },
  {
    name: "Sagar Tarange",
    role: "Managing Director",
    description: "Mr. Sagar is a Operational Maestro, ensures seamless operations, translating strategies into action and fostering an environment of efficiency and excellence.",
    image: "/sagar_tarange.png"
  }
];

export const Founders: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const items = containerRef.current?.querySelectorAll('.founder-card');
    items?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="founders" className="py-24 bg-pleo-grey/50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-pleo-blue-dark font-bold animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Leadership</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-pleo-text animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>The Visionaries</h3>
          <div className="h-1 w-24 bg-pleo-blue rounded-full mt-4" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {founders.map((founder, i) => (
            <div 
              key={i} 
              className={`founder-card group bg-white rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 opacity-0 translate-y-20`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <style>{`
                .founder-card.is-visible { opacity: 1; transform: translateY(0); }
              `}</style>
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 aspect-[4/5] lg:aspect-auto overflow-hidden relative">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                  />
                </div>
                <div className="lg:w-3/5 p-10 lg:p-14 flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-3xl lg:text-4xl font-serif text-pleo-text group-hover:text-pleo-blue-dark transition-colors duration-500">
                      {founder.name}
                    </h4>
                    <p className="text-pleo-blue-dark text-xs uppercase tracking-[0.3em] font-bold">
                      {founder.role}
                    </p>
                  </div>
                  
                  <div className="h-0.5 w-12 bg-pleo-blue group-hover:w-full transition-all duration-1000 ease-in-out" />
                  
                  <p className="text-pleo-text/70 font-dark leading-relaxed italic text-lg">
                    "{founder.description}"
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <div className="w-8 h-px bg-pleo-text/20" />
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-pleo-text/40">
                      Shadow Infratech
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
