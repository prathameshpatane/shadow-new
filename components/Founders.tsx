import React from 'react';

const leadershipImages = [
  '/partone.jpg',
  '/parttwo.jpg',
  '/partthree.jpg',
  '/partfour.jpg',
];

/* duplicate for seamless loop */
const loopImages = [...leadershipImages, ...leadershipImages];

export const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-24 overflow-hidden relative min-h-[600px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/build.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <h2 className="text-2xl uppercase tracking-[0.4em] text-blue-300 font-bold drop-shadow-lg">
            Partners
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white drop-shadow-2xl">
            Our Trusted Partners
          </h3>
          <div className="h-1 w-24 bg-pleo-blue rounded-full mt-4 shadow-md" />
        </div>
      </div>

      {/* Infinite Straight Scroll */}
      <div className="relative w-full overflow-hidden z-20">
        <div className="flex items-center gap-16 w-max px-10 animate-horizontal-scroll">
          {loopImages.map((img, idx) => (
            <div
              key={idx}
              className="
                w-48 h-48 md:w-56 md:h-56
                rounded-full overflow-hidden
                shadow-2xl bg-white/95 backdrop-blur-md ring-4 ring-white/50
                transition-transform duration-500 hover:scale-105
              "
            >
              <img
                src={img}
                alt="Partner"
                className="w-full h-full object-cover transition duration-700 brightness-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes horizontal-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-horizontal-scroll {
          animation: horizontal-scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};
