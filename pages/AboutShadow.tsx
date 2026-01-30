import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const word = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AboutShadow: React.FC = () => {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-neutral-50 to-white">

      {/* ================= ABOUT HERO (FULL WIDTH – BRIGHT) ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Image (Brightened) */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-110 saturate-110"
          style={{ backgroundImage: "url('/harvest_1.png')" }}
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/20 to-black/5" />

        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl"
          >
            <motion.h1
              variants={word}
              className="text-6xl md:text-7xl font-serif font-extrabold mb-8 bg-gradient-to-r from-yellow-300 via-orange-400 to-rose-400 bg-clip-text text-transparent"
            >
              About Us
            </motion.h1>

            <motion.p
              variants={word}
              className="text-xl md:text-2xl leading-relaxed text-gray-100"
            >
              <span className="text-white font-semibold">
                Shadow Infratech Pvt. Ltd.
              </span>{" "}
              is a pioneering force in real estate, transforming land into
              thriving communities through transparency, innovation, and
              excellence in{" "}
              <span className="text-yellow-300 font-semibold">
                NA plot development
              </span>
              .
            </motion.p>

            <motion.div
              variants={word}
              className="mt-12 mx-auto h-1.5 w-40 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <div className="pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-36">

          {/* ================= OUR JOURNEY ================= */}
          <section className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold"
            >
              Our Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed max-w-4xl"
            >
              Established on November 7, 2019, with strong roots since 2014,
              Shadow Infratech brings over{" "}
              <span className="font-semibold text-neutral-900">
                9+ years of excellence
              </span>{" "}
              in structured land and NA plot development.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  year: "2014",
                  text: "Laying the foundation with deep market knowledge and trust.",
                },
                {
                  year: "2019",
                  text: "Official establishment of Shadow Infratech Pvt. Ltd.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition"
                >
                  <h3 className="text-3xl font-extrabold text-orange-500 mb-3">
                    {item.year}
                  </h3>
                  <p className="text-lg text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ================= MISSION & VISION ================= */}
          <section className="space-y-36">

            {/* ===== MISSION ===== */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="/mission.png"
                  alt="Our Mission"
                  className="w-full h-[640px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Our Mission
                </h2>

                <ul className="space-y-6 text-2xl text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Deliver transparent and customer-first real estate solutions.</li>
                  <li>Innovate continuously in NA plot and land development.</li>
                  <li>Build long-lasting trust and sustainable communities.</li>
                </ul>
              </motion.div>
            </div>

            {/* ===== VISION ===== */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8 order-2 lg:order-1"
              >
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Our Vision
                </h2>

                <ul className="space-y-6 text-2xl text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Become a benchmark brand in NA plot development.</li>
                  <li>Lead the industry with ethical and innovation-driven growth.</li>
                  <li>Create future-ready, well-planned communities.</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2"
              >
                <img
                  src="/vision.png"
                  alt="Our Vision"
                  className="w-full h-[640px] object-cover"
                />
              </motion.div>
            </div>

          </section>

          {/* ================= ACHIEVEMENTS ================= */}
          <section className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold"
            >
              Our Achievements
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl"
            >
              Under the visionary leadership of{" "}
              <span className="font-semibold">Mr. Amar Tarange</span>, Shadow
              Infratech continues to set new benchmarks in excellence,
              transparency, and innovation in{" "}
              <span className="text-yellow-500 font-semibold">
                NA plot development
              </span>
              .
            </motion.p>

            <div className="grid md:grid-cols-3 gap-10">
              {["/aboutone.png", "/abouttwo.png", "/aboutthree.png"].map(
                (img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.04] transition"
                  >
                    <img
                      src={img}
                      alt="Achievement"
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                )
              )}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default AboutShadow;
