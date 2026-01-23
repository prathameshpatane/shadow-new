import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover animate-zoom-bg"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="space-y-6">

          <span
            className="inline-block text-sm uppercase tracking-[0.5em] text-pleo-blue mb-4 font-bold animate-fade-in-down opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            BUILDING
          </span>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-8xl lg:text-9xl text-white leading-tight font-bold animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <span className="font-[cursive] font-normal">
              Shadow Infratech
            </span>
            <br />
            <span className="text-pleo-blue font-serif">Pvt Ltd</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-2xl font-[cursive] text-white/80 tracking-wide animate-fade-in opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Key of your dream homes
          </p>

          <div
            className="h-0.5 w-0 bg-pleo-blue mx-auto shadow-lg animate-[grow_1s_ease-out_forwards]"
            style={{ animationDelay: '1s' }}
          />

          <style>{`
            @keyframes grow {
              from { width: 0; }
              to { width: 120px; }
            }
          `}</style>

          <p
            className="text-lg md:text-2xl lg:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            Premium NA Plots | Residential & Agricultural Plots
          </p>

          <div
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            <a
              href="#projects"
              className="group relative px-12 py-5 bg-white text-pleo-text rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 shadow-2xl hover:scale-105 min-w-[240px]"
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-pleo-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </a>

            <a
              href="#contact"
              className="group px-12 py-5 border-2 border-white/50 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-pleo-text transition-all duration-300 shadow-2xl min-w-[240px]"
            >
              Book A Visit
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-10 left-10 w-[1px] h-32 bg-gradient-to-b from-white/60 to-transparent animate-fade-in" style={{ animationDelay: '2s' }} />
      <div className="absolute top-10 left-10 h-[1px] w-32 bg-gradient-to-r from-white/60 to-transparent animate-fade-in" style={{ animationDelay: '2.1s' }} />
      <div className="absolute bottom-10 right-10 w-[1px] h-32 bg-gradient-to-t from-white/60 to-transparent animate-fade-in" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-10 right-10 h-[1px] w-32 bg-gradient-to-l from-white/60 to-transparent animate-fade-in" style={{ animationDelay: '2.3s' }} />

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70 animate-float">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold">
          Scroll
        </span>
      </div>
    </section>
  );
};
