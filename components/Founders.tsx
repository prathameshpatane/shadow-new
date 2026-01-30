import React from "react";

const leadershipImages = [
  "/aboutone.png",
  "/abouttwo.png",
  "/aboutthree.png",
  "/fame.jpeg",

];

/* duplicate for seamless loop */
const loopImages = [...leadershipImages, ...leadershipImages];

export const Founders: React.FC = () => {
  return (
    <section
      id="founders"
      className="py-24 overflow-hidden relative min-h-[600px]"
    >
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
            Awards
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white drop-shadow-2xl">
            Our Achievements
          </h3>
          <div className="h-1 w-24 bg-pleo-blue rounded-full mt-4 shadow-md" />
        </div>
      </div>

      {/* Infinite Straight Scroll */}
      <div className="relative w-full overflow-hidden z-20">
        <div className="flex items-center gap-20 w-max px-12 animate-horizontal-scroll">
          {loopImages.map((img, idx) => (
            <div
              key={idx}
              className="
                w-56 h-56
                md:w-64 md:h-64
                rounded-2xl overflow-hidden
                shadow-2xl
                bg-transparent
                transition-transform duration-500 hover:scale-105
                flex items-center justify-center
              "
            >
              <img
                src={img}
                alt="Partner logo"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes horizontal-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-horizontal-scroll {
          animation: horizontal-scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};
