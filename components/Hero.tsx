import React from "react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* YOUTUBE BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-[120%] min-h-[120%] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/k_pqrYW10IQ?autoplay=1&mute=1&loop=1&playlist=k_pqrYW10IQ&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="YouTube background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      {/* OPTIONAL DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT (if you add later) */}
      <div className="relative z-10">
        {/* Your hero text / buttons go here */}
      </div>
    </section>
  );
};
