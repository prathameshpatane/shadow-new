import React from "react";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Centered Heading */}
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl font-serif text-pleo-text font-bold animate-slide-up">
            Testimonials
          </h2>
        </div>

        {/* VIDEOS ONLY */}
        <div className="grid md:grid-cols-3 gap-10 animate-slide-up">

          {["/test2.mp4", "/test1.mp4", "/test3.mp4"].map(
            (video, index) => (
              <div
                key={index}
                className="relative rounded-3xl shadow-lg overflow-hidden"
              >
                <Quote className="absolute -top-6 -right-6 w-14 h-14 text-pleo-blue opacity-20 animate-pulse z-10" />

                {/* Fixed height wrapper */}
                <div className="h-[420px] w-full">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    controls
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )
          )}

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
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

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};
