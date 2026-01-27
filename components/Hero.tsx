import React from "react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
