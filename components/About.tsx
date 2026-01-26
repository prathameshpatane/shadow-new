import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* ================= KEY LOCATIONS ================= */}
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading with 24 */}
        <div className="relative text-center space-y-4">
          <span
            className="absolute inset-0 flex items-center justify-center
              text-[34rem] md:text-[18rem]
              font-serif font-bold
              text-pleo-blue
              opacity-90
              select-none pointer-events-none
              -z-10"
          >
            24
          </span>

          <h2 className="text-sm uppercase tracking-[0.4em] text-pleo-blue-dark font-bold">
            Our Key Locations
          </h2>

          <h3 className="text-4xl md:text-5xl font-serif text-pleo-text">
            Presence Across India
          </h3>
        </div>

        {/* Scrolling Cities */}
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-6 animate-infinite-scroll">
            {[
              { name: 'Hadapsar', image: '/hadap.jpg' },
              { name: 'Lohegaon', image: '/loh.jpg' },
              { name: 'Wagholi', image: '/wagh.jpg' },
              { name: 'Rajgad', image: '/raj.jpg' },
              { name: 'Moshi', image: '/mos.jpg' },
              { name: 'Kharadi Annexe', image: '/kharadi.png' },
              { name: 'Hadapsar', image: '/hadap.jpg' },
              { name: 'Lohegaon', image: '/loh.jpg' },
              { name: 'Wagholi', image: '/wagh.jpg' },
              { name: 'Rajgad', image: '/raj.jpg' },
              { name: 'Moshi', image: '/mos.jpg' },
              { name: 'Kharadi Annexe', image: '/kharadi.png' },
            ].map((city, index) => (
              <div
                key={index}
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

      {/* ================= GLOBAL PRESENCE ================= */}
      <div className="mt-32 py-16 relative overflow-hidden">
        {/* Video Background replaces bg-gray-200 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          playbackRate={2}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        >
          <source src="/green.mp4" type="video/mp4" />
          
        </video>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50 z-10" />
        
        <div className="max-w-7xl mx-auto text-center space-y-10 relative z-20">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-white font-bold animate-slide-text drop-shadow-lg">
              Global Reach
            </h2>

            <h3 className="text-4xl md:text-5xl font-serif text-white animate-slide-text animation-delay-200 drop-shadow-2xl">
              Our Global Presence
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl animate-slide-up animation-delay-400 hover:shadow-3xl hover:border-4 hover:border-pleo-blue transition-all duration-500 bg-white/95 backdrop-blur-xl">
              <img
                src="/glo.jpg "
                alt="Global Presence Map"
                className="w-full h-auto hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes slide-text {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 8s linear infinite;
        }

        .animate-slide-text {
          animation: slide-text 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
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
