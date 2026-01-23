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
      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <div className="relative scroll-reveal opacity-0 -translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img
              src="/why.jpeg"
              alt="Why Shadow Infratech"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 animate-float-gentle"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pleo-blue/20 rounded-[3rem] -z-10 animate-pulse" />
        </div>

        {/* Content Section */}
        <div className="relative space-y-8 scroll-reveal opacity-0 translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">

          <div className="space-y-4 relative z-10">
            <h2 className="text-sm uppercase tracking-[0.4em] text-pleo-blue-dark font-bold">
              ABOUT US
            </h2>

            <h3 className="text-4xl md:text-6xl font-serif text-pleo-text leading-tight scroll-reveal scale-90 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] [&.is-visible]:scale-100 hover:scale-105">
              Why Shadow Infratech?
            </h3>
          </div>

          <p className="relative z-10 text-xl text-pleo-text/90 leading-relaxed font-light border-l-2 border-pleo-blue pl-6 py-2 italic">
            Experience real estate like never before with Shadow Infratech Pvt Ltd.
            Our commitment to innovation sets us apart as we incorporate cutting-edge
            technologies and modern design concepts into every project.
          </p>

          <p className="relative z-10 text-lg text-pleo-text/90 leading-relaxed font-light">
            Whether you’re buying or investing, we ensure your property journey is
            marked by sophistication and contemporary style.
          </p>

          <div className="pt-4 relative z-10">
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

      {/* CITY LOCATIONS */}
      <div className="max-w-7xl mx-auto mt-24 space-y-12">

        {/* HEADINGS WITH 24 */}
        <div className="relative text-center space-y-4">

          {/* Background 24 */}
          <span className="absolute inset-0 flex items-center justify-center
            text-[10rem] md:text-[14rem]
            font-serif font-bold
            text-pleo-blue
            opacity-21
            select-none pointer-events-none
            -z-10">
            24
          </span>

          <h2 className="text-sm uppercase tracking-[0.4em] text-pleo-blue-dark font-bold relative z-10">
            Our Key Locations
          </h2>

          <h3 className="text-4xl md:text-5xl font-serif text-pleo-text relative z-10">
            Presence Across India
          </h3>
        </div>

        {/* SCROLLING CITIES */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-infinite-scroll gap-6">
            {[
              { name: 'Hadapsar', image: '/hadapsar.png' },
              { name: 'Lohegaon', image: '/lohegoan.png' },
              { name: 'Wagholi', image: '/wagholi.png' },
              { name: 'Rajgad', image: '/rajgad.png' },
              { name: 'Moshi', image: '/moshi.png' },
              { name: 'Kharadi Annexe', image: '/kharadi.png' },
              { name: 'Hadapsar', image: '/hadapsar.png' },
              { name: 'Lohegaon', image: '/lohegoan.png' },
              { name: 'Wagholi', image: '/wagholi.png' },
              { name: 'Rajgad', image: '/rajgad.png' },
              { name: 'Moshi', image: '/moshi.png' },
              { name: 'Kharadi Annexe', image: '/kharadi.png' },
            ].map((city, index) => (
              <div
                key={`${city.name}-${index}`}
                className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <h4 className="text-white font-bold text-lg w-full p-4 text-center">
                    {city.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL PRESENCE */}
      <div className="max-w-7xl mx-auto mt-24 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold animate-slide-text">
            Global Reach
          </h2>
          <h3 className="text-4xl font-serif text-pleo-text animate-slide-text animation-delay-200">
            Our Global Presence
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl animate-slide-up animation-delay-400 hover:shadow-3xl hover:border-4 hover:border-pleo-blue transition-all duration-500">
            <img
              src="/map.png"
              alt="Location Map"
              className="w-full h-auto hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes slide-text {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .animate-slide-text {
          animation: slide-text 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 8s linear infinite;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};
