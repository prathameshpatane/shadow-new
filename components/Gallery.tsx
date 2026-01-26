import React from "react";

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title + Subtitle (UNCHANGED) */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold">
            Walkthrough
          </h2>
          <h3 className="text-4xl font-serif text-pleo-text">
            A Glimpse Into Our Estates
          </h3>
        </div>

        {/* Video Box (NO black border) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden">

            <video
              src="/bg.mp4"   // replace with your video path
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="
                w-full
                h-[420px]
                md:h-[500px]
                object-cover
              "
            />

            {/* Very soft overlay (optional) */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          </div>
        </div>

      </div>
    </section>
  );
};
