import React from "react";

export const Why: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full pt-12 pb-0 px-6 overflow-hidden"
    >
      <div className="text-center max-w-5xl mx-auto">

        {/* STATS – SAME LINE */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <span className="text-2xl md:text-4xl font-extrabold text-blue drop-shadow-[2px_2px_0_rgba(255,193,7,1)]">
            2.6K+ Happy Customers
          </span>

          <span className="hidden md:block w-[2px] h-8 bg-yellow-400" />

          <span className="text-2xl md:text-4xl font-extrabold text-blue drop-shadow-[2px_2px_0_rgba(255,193,7,1)]">
            11 Lakh+ SQ. Ft. Land Sold
          </span>
        </div>
        <br /><br/>
        {/* MAIN LINE – ANIMATED */}
        <h2 className="animate-drift text-3xl md:text-5xl lg:text-8xl font-serif font-bold text-yellow-400 tracking-wide leading-tight m-0  drop-shadow-[2px_0_0_#000]
    drop-shadow-[-2px_0_0_#000]
    drop-shadow-[0_2px_0_#000]
    drop-shadow-[0_-2px_0_#000] whitespace-nowrap">
          Land Replace Tomorrow
        </h2>

        {/* ANIMATION */}
        <style>{`
          @keyframes drift {
            0% {
              transform: translateX(-30px);
            }
            50% {
              transform: translateX(30px);
            }
            100% {
              transform: translateX(-30px);
            }
          }

          .animate-drift {
            animation: drift 3s ease-in-out infinite;
          }
        `}</style>

      </div>
    </section>
  );
};
