import React, { useEffect, useRef } from 'react';

export const Why: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.scroll-reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
      >
        <source src="/earth.mp4" type="video/mp4" />
      </video>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 z-0" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="scroll-reveal opacity-0 -translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="/why.jpeg"
              alt="Why Shadow Infratech"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 animate-float-gentle"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-8 scroll-reveal opacity-0 translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
          
          <h2 className="text-3xl uppercase tracking-[0.4em] text-white font-bold">
            ABOUT US
          </h2>

          <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Why Shadow Infratech?
          </h3>

          <p className="text-3xl text-white leading-relaxed font-bold border-l-2 border-pleo-blue pl-6 italic">
            Experience real estate like never before with Shadow Infratech Pvt Ltd.
            Our commitment to innovation blends modern design with cutting-edge
            technology.
          </p>

          <p className="text-lg text-white leading-relaxed font-medium">
            Whether you’re buying or investing, we deliver clarity, sophistication,
            and long-term value.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center text-white font-bold uppercase tracking-widest hover:text-pleo-blue transition"
          >
            <span className="border-b-2 border-pleo-blue pb-1">
              Discover Our Vision
            </span>
            <span className="ml-4 transition-transform hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
