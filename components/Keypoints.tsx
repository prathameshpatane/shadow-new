import React, { useEffect, useRef } from "react";
import { Shield, Users, Award, Eye, Zap, CheckCircle } from "lucide-react";

/* =========================
   WHY POINTS DATA
========================= */
const whyPoints = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "9+ years of experience in real estate industry",
    desc: "A decade of building trust and excellence in the Pune landscape.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer-Centric Approach",
    desc: "We prioritize your vision, ensuring a personalized journey for every client.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Commitment to Quality",
    desc: "Premium developments with meticulous attention to infrastructure and detail.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Integrity",
    desc: "We operate with honesty and fairness in all our dealings.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Market Expertise",
    desc: "Expert advice backed by deep real estate knowledge.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Innovation",
    desc: "Embracing modern technologies to stay ahead.",
  },
];

/* =========================
   KEYPOINTS COMPONENT
========================= */
export const Keypoints: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const boxes = gridRef.current?.querySelectorAll(".keypoint-box");
    boxes?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-shadow"
      className="relative px-6 py-24 min-h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/prop.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <style>{`
          .keypoint-box {
            transform: translateY(40px) scale(0.96);
            transition: transform 0.7s ease, box-shadow 0.4s ease;
          }
          .keypoint-box.animate-in {
            transform: translateY(0) scale(1);
          }
          @keyframes hoverBounce {
            0% { transform: translateY(0) scale(1); }
            30% { transform: translateY(-10px) scale(1.02); }
            60% { transform: translateY(4px) scale(0.99); }
            100% { transform: translateY(0) scale(1); }
          }
          .keypoint-box:hover { animation: hoverBounce 0.6s ease; }
          @keyframes zoomPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .zoom-pulse { animation: zoomPulse 3s ease-in-out infinite; }

          /* IMAGE FLOAT ANIMATION */
          @keyframes move-left-right {
            0% { transform: translateX(-40px); }
            50% { transform: translateX(40px); }
            100% { transform: translateX(-40px); }
          }

          .animate-left-right {
            animation: move-left-right 3s ease-in-out infinite;
          }
        `}</style>

        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-white font-bold">
            The Distinction
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white zoom-pulse">
            Our Core Qualities
          </h3>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPoints.map((point, i) => (
            <div
              key={i}
              className="keypoint-box group p-12 rounded-[3rem] bg-teal-100/90 backdrop-blur-md border-2 border-pleo-blue shadow-sm hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-20 h-20 bg-pleo-blue-light rounded-3xl flex items-center justify-center mb-8 text-pleo-blue-dark group-hover:bg-pleo-blue transition-all duration-500">
                {point.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-pleo-text">{point.title}</h4>
              <p className="text-pleo-text text-lg leading-relaxed">{point.desc}</p>
              <div className="mt-8 h-1 w-0 bg-pleo-blue group-hover:w-16 transition-all duration-700 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="h-32 w-full" />
    </section>
  );
};

/* =========================
   STATISTICS COMPONENT
========================= */
export const Statistics: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row mt-8 md:mt-0">
      {/* IMAGE */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen overflow-hidden pb-16 md:pb-16">
        <img
          src="/lando.jpeg"
          alt="Land Development"
          className="w-full h-full object-cover
          animate-left-right
          transition-transform duration-1000 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-1/2 flex items-center px-8 md:px-20 py-16 md:py-0 bg-white">
        <div className="space-y-6 max-w-xl">
          <h2 className="text-sm uppercase tracking-[0.4em] text-pleo-blue-dark font-bold">
            Our Impact
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-pleo-text">
            Building Landmarks That Endure
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Every development we create is guided by long-term vision, sustainable
            planning, and a commitment to quality.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            We don’t just develop land — we shape environments that foster growth,
            security, and generational prosperity.
          </p>
        </div>
      </div>
    </section>
  );
};
