import React, { useEffect, useRef } from 'react';

export const About: React.FC = () => {
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
      className="py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative scroll-reveal opacity-0 -translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img
              src="/trust_shadow.png"
              alt="Shadow Infratech Trust"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pleo-blue/20 rounded-[3rem] -z-10 animate-pulse" />
        </div>

        {/* Content Section */}
        <div className="space-y-8 scroll-reveal opacity-0 translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.4em] text-pleo-blue-dark font-bold">
              ABOUT US
            </h2>

            {/* 🔥 Scroll + Hover Zoom Heading */}
            <h3
              className="
                text-4xl md:text-6xl font-serif text-pleo-text leading-tight
                scroll-reveal
                opacity-0 scale-90
                transition-transform transition-opacity duration-700
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                will-change-transform
                [&.is-visible]:opacity-100
                [&.is-visible]:scale-100
                hover:scale-105
              "
            >
              Why Shadow Infratech?
            </h3>
          </div>

          <p className="text-xl text-pleo-text/90 leading-relaxed font-light border-l-2 border-pleo-blue pl-6 py-2 italic">
            Experience real estate like never before with Shadow Infratech Pvt Ltd.
            Our commitment to innovation sets us apart as we incorporate cutting-edge
            technologies and modern design concepts into every project.
          </p>

          <p className="text-lg text-pleo-text/90 leading-relaxed font-light">
            Whether you’re buying or investing, we ensure your property journey is
            marked by sophistication and contemporary style. Discover how we can
            redefine your real estate experience today!
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center text-pleo-text font-bold uppercase tracking-widest hover:text-pleo-blue-dark transition-all duration-300"
            >
              <span className="border-b-2 border-pleo-blue pb-1">
                Discover Our Vision
              </span>
              <span className="ml-4 transform group-hover:translate-x-2 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
