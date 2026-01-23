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
    <section id="founders" className="py-24 bg-pleo-grey/100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-pleo-blue-dark font-bold">
            Partners
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-pleo-text">
            Our Trusted Partners
          </h3>
          <div className="h-1 w-24 bg-pleo-blue rounded-full mt-4" />
        </div>
      </div>

      {/* Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 w-max px-10 animate-horizontal-scroll">
          {loopImages.map((img, idx) => (
            <div
              key={idx}
              className={`
                w-48 h-48 md:w-56 md:h-56
                rounded-full overflow-hidden
                shadow-2xl bg-white
                animate-bounce-strong
                transition-transform duration-500
                ${idx % 5 === 0 ? 'translate-y-12' : ''}
                ${idx % 5 === 1 ? 'translate-y-6' : ''}
                ${idx % 5 === 2 ? '-translate-y-4' : ''}
                ${idx % 5 === 3 ? '-translate-y-10' : ''}
                ${idx % 5 === 4 ? 'translate-y-4' : ''}
              `}
              style={{
                animationDelay: `${idx * 0.25}s`,
              }}
            >
              <img
                src={img}
                alt="Partner"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          /* VERY FAST horizontal scroll */
          @keyframes horizontal-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-horizontal-scroll {
            animation: horizontal-scroll 8s linear infinite;
          }

          /* STRONG bounce back */
          @keyframes bounce-strong {
            0%   { transform: translateY(0); }
            25%  { transform: translateY(-30px); }
            50%  { transform: translateY(0); }
            75%  { transform: translateY(20px); }
            100% { transform: translateY(0); }
          }

          .animate-bounce-strong {
            animation: bounce-strong 1.6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};
