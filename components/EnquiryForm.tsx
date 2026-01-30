import React from "react";

export const EnquiryForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT IMAGE */}
            <div className="relative h-[400px] md:h-[500px] lg:h-full">
              <img
                src="/plot.jpeg"
                alt="Land Plot"
                className="w-full h-full object-cover"
              />

              {/* subtle overlay for luxury feel */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-10 md:p-14 lg:p-20 flex flex-col justify-center space-y-6">
              <span className="text-sm tracking-widest uppercase text-emerald-600 font-semibold">
                Smart Investment
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Why Buying a Land Plot Is a Powerful Decision
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Investing in land plots offers long-term security, high
                appreciation potential, and complete ownership freedom.
                Unlike constructed properties, land is a limited asset —
                its value grows steadily with development and demand.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you plan to build your dream home or secure a
                future-ready investment, land plots provide flexibility,
                lower maintenance costs, and excellent resale value over
                time.
              </p>

              {/* OPTIONAL CTA / NOTE */}
              <div className="pt-4">
                <p className="text-gray-900 font-semibold">
                  ✔ Clear titles &nbsp;&nbsp; ✔ High growth locations
                  &nbsp;&nbsp; ✔ Peace of mind
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
