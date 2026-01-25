import React from 'react';

export const EnquiryForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/prop.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-[3rem] shadow-2xl overflow-hidden">

          {/* FULL VIDEO */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
            <video
              className="w-full h-full object-cover"
              src="/form.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Optional overlay for luxury look */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
