import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden">
      {/* ================= KEY LOCATIONS ================= */}
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Heading */}
        <div className="relative text-center space-y-4">
          <span
            className="absolute inset-0 flex items-center justify-center
            text-[12rem] md:text-[18rem]
            font-serif font-bold
            text-pleo-blue
            opacity-90
            select-none pointer-events-none
            -z-10"
          >
            24
          </span>

          <h3 className="text-4xl md:text-5xl font-serif text-pleo-text">
            Giving Land a Future.
          </h3>
        </div>

        {/* ================= IMAGE LEFT + TEXT RIGHT ================= */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 animate-left-right">
            <img
              src="/ghar.jpeg"
              alt="Crafting the Future"
              className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover
              transition-transform duration-1000 hover:scale-105"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
            <h4 className="text-3xl md:text-4xl font-serif text-pleo-text">
              Crafting the world’s finest developments
            </h4>

            <p className="text-lg leading-relaxed text-gray-600 max-w-md md:max-w-lg mx-auto md:mx-0">
              Where every plot is thoughtfully designed with purpose, enduring
              value, and a long-term vision that serves generations to come.
            </p>
          </div>
        </div>

        {/* ================= IMAGE RIGHT + TEXT LEFT ================= */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="flex-1 animate-right-left">
            <img
              src="/bg1.jpeg"
              alt="Building Communities"
              className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover
              transition-transform duration-1000 hover:scale-105"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
            <h4 className="text-3xl md:text-4xl font-serif text-pleo-text">
              Building Communities That Last
            </h4>

            <p className="text-lg leading-relaxed text-gray-600 max-w-md md:max-w-lg mx-auto md:mx-0">
              We create spaces where people connect, investments grow, and
              communities flourish over time.
            </p>
          </div>
        </div>
      </div>

      {/* ================= NEWS SECTION ================= */}
      <div className="mt-36 py-24 relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        >
          <source src="/green.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60 z-10" />

        <div className="max-w-7xl mx-auto text-center space-y-14 relative z-20 px-4">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-white font-bold animate-slide-text">
              News
            </h2>

            <h3 className="text-4xl md:text-5xl font-serif text-white animate-slide-text animation-delay-200">
              Our Headlines
            </h3>
          </div>

          {/* ================= AUDIO + IMAGES ================= */}
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-[3rem] p-12 bg-white/95 backdrop-blur-xl
              shadow-2xl animate-slide-up animation-delay-400 space-y-10"
            >
              {/* AUDIO AT TOP */}
              <div className="space-y-6 text-left">
                <h4 className="text-3xl md:text-4xl font-serif text-red-800">
                  Listen to Our News
                </h4>

                <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
                  Discover how our journey evolved from local beginnings to a
                  global presence rooted in trust and excellence.
                </p>

                <audio controls className="w-full rounded-xl shadow-lg">
                  <source src="/audio.mp3" type="audio/mpeg" />
                </audio>
              </div>

              {/* ONE IMAGE LEFT + ONE IMAGE RIGHT */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img
                    src="/amar.jpg"
                    alt="News Left"
                    className="w-full h-[380px] md:h-[420px] object-cover
                    hover:scale-105 transition-transform duration-1000"
                  />
                </div>

                <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img
                    src="/news.jpeg"
                    alt="News Right"
                    className="w-full h-[380px] md:h-[420px] object-cover
                    hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes slide-text {
          0%,
          100% {
            transform: translateX(-20px);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes move-left-right {
          0% {
            transform: translateX(-40px);
          }
          50% {
            transform: translateX(40px);
          }
          100% {
            transform: translateX(-40px);
          }
        }

        @keyframes move-right-left {
          0% {
            transform: translateX(40px);
          }
          50% {
            transform: translateX(-40px);
          }
          100% {
            transform: translateX(40px);
          }
        }

        .animate-slide-text {
          animation: slide-text 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-left-right {
          animation: move-left-right 3s ease-in-out infinite;
        }

        .animate-right-left {
          animation: move-right-left 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};
