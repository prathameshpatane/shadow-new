import React from 'react';
import { Quote } from 'lucide-react';

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

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* VIDEO */}
          <div
            className="relative animate-slide-up"
            style={{ animationDelay: '0ms' }}
          >
            <Quote className="absolute -top-6 -right-6 w-14 h-14 text-pleo-blue opacity-20 animate-pulse z-10" />

            <video
              className="w-full rounded-3xl shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/greytest.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* IMAGE */}
          <div
            className="relative animate-slide-up space-y-6"
            style={{ animationDelay: '300ms' }}
          >
            <Quote className="absolute -top-6 -right-6 w-14 h-14 text-pleo-blue opacity-20 animate-pulse z-10" />

            <img
              src="/greytest1.jpg"
              alt="Client testimonial"
              className="w-full rounded-3xl shadow-lg"
            />

            <p className="text-xl italic font-serif text-pleo-text leading-relaxed">
              “Most trusted ethical and customer support company in Pune. Very
              good experience with Shadow Infratech Pvt Ltd.”
            </p>
          </div>

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
