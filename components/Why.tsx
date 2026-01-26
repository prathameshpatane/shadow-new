import React, { useEffect, useRef } from "react";

export const Why: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-screen h-screen overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative scroll-reveal opacity-0 -translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
          <img
            src="/shadownew.jpeg"
            alt="Why Shadow Infratech"
            className="absolute inset-0 w-full h-full object-cover object-center block"
          />
        </div>

        {/* ================= RIGHT VIDEO ================= */}
        <div className="relative scroll-reveal opacity-0 translate-x-12 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-right block"
          >
            <source src="/new.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
};
