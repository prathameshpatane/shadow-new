import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* LEFT SIDE – VIDEO */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/shadowvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* RIGHT SIDE – IMAGE */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-10">
        <img
          src="/hero1.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-6xl mx-auto space-y-6">

          <span
            className="inline-block text-sm uppercase tracking-[0.5em] text-black font-bold font-dark animate-fade-in-down opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            BUILDING
          </span>

          <h1
            className="text-5xl md:text-8xl lg:text-9xl text-blue-800 leading-tight font-bold animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <span className="text-slate-800 font-serif">
              Shadow Infratech
            </span>
            <br />
            <span className="text-slate-800 font-serif">Pvt Ltd</span>
          </h1>

          <p
            className="text-lg md:text-2xl font-[cursive] text-black/80 tracking-wide animate-fade-in opacity-0"
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
            className="text-lg md:text-2xl lg:text-3xl font-bold text-black/90 max-w-4xl mx-auto leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            Premium NA Plots | Residential & Agricultural Plots
          </p>

          {/* BUTTONS */}
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

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70 animate-float z-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-black font-bold">
          Scroll
        </span>
      </div>
    </section>
  );
};
