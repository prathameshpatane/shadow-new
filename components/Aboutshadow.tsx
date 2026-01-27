import React from "react";

const AboutShadow: React.FC = () => {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= ABOUT US ================= */}
        <section className="space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            About Us
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Shadow Infratech Pvt. Ltd. is a pioneering force in the real estate
            industry, dedicated to turning your dreams into reality. With a
            strong focus on NA plots, we are committed to redefining property
            ownership through innovation, transparency, and excellence.
            Moreover, our projects are designed to offer a new standard in land
            development. Explore our NA plots today and experience the future of
            real estate.
          </p>
        </section>

        {/* ================= OUR JOURNEY ================= */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold">Our Journey</h2>

          <p className="text-gray-600 leading-relaxed">
            Established on November 7, 2019, Shadow Infratech Pvt Ltd is more than
            just a real estate company. With roots dating back to 2014, we bring
            9 years of experience to the industry, making us experts in NA plots
            and property development.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We’re committed to delivering affordable and comprehensive solutions
            that help individuals achieve their dream of home ownership. Our
            focus on NA plots, combined with our dedication to innovation,
            transparency, and a customer-first approach, sets us apart in the
            real estate market.
          </p>

          {/* Milestones */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">2014</h3>
              <p className="text-gray-600">
                Our Journey Begins – Delving into the nuances of real estate,
                laying the groundwork for what would later become Shadow
                Infratech.
              </p>
            </div>

            <div className="p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">2019</h3>
              <p className="text-gray-600">
                Shadow Infratech Pvt Ltd – Officially established with a vision
                to revolutionize the industry and provide unparalleled property
                ownership experiences.
              </p>
            </div>
          </div>

          <p className="font-medium text-lg mt-8">
            At Shadow Infratech, we don’t just build properties; we craft dreams.
            Join us on the journey to exceptional property ownership!
          </p>
        </section>

        {/* ================= MISSION ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Our Mission</h2>

          <ul className="space-y-4 text-gray-600 list-disc list-inside">
            <li>
              Empower individuals to achieve their dreams of property ownership
              by providing transparent, affordable, and innovative real estate
              solutions.
            </li>
            <li>
              Strive for excellence in every aspect of our operations, from
              meticulous planning and superior craftsmanship to unparalleled
              customer service.
            </li>
            <li>
              Go beyond constructing structures; build lasting relationships,
              fostering a legacy of trust, satisfaction, and community impact in
              every project.
            </li>
          </ul>
        </section>

        {/* ================= VISION ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Our Vision</h2>

          <ul className="space-y-4 text-gray-600 list-disc list-inside">
            <li>
              To be the premier provider of transformative real estate solutions,
              shaping landscapes and setting industry benchmarks.
            </li>
            <li>
              Envision a future where Shadow Infratech is synonymous with
              innovation, excellence, and unwavering commitment to clients'
              aspirations.
            </li>
            <li>
              Create a positive impact by unlocking dreams, building futures,
              and leaving a lasting mark on the real estate landscape.
            </li>
          </ul>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Our Achievements</h2>

          <p className="text-gray-600 leading-relaxed">
            At Shadow Infratech Pvt Ltd, our commitment to excellence in real
            estate development is consistently reflected through the prestigious
            accolades we’ve earned. Under the visionary leadership of Mr. Amar
            Tarange, we have carved a niche in the industry, particularly in NA
            plots development.
          </p>

          <p className="text-gray-600 leading-relaxed">
            These awards are a testament to Mr. Tarange’s dedication to setting
            new benchmarks in real estate. With an unwavering focus on customer
            satisfaction, quality, and transparency, we continue to strive for
            excellence, shaping the future of NA plots development and real
            estate.
          </p>
        </section>

      </div>
    </main>
  );
};

export default AboutShadow;
