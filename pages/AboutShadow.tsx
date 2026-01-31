import React from "react";
import { motion } from "framer-motion";

/* ================= INFINITE IMAGE MOTION ================= */
const infiniteMove = (direction: "left" | "right") => ({
  animate: {
    x: direction === "left" ? [-40, 40] : [40, -40],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear",
  },
});

const AboutShadow: React.FC = () => {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-neutral-50 to-white">

      {/* ================= ABOUT HERO ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-110 saturate-110"
          style={{ backgroundImage: "url('/abt.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/15 to-black/0" />
      </section>

      {/* ================= HERO INTRO ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

          {/* IMAGE 1 – LEFT ↔ RIGHT */}
          <motion.div {...infiniteMove("left")} className="overflow-hidden">
            <img
              src="/abt2.jpg"
              alt="About Shadow Infratech"
              className="w-full h-[520px] object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-extrabold text-amber-800">
              About Shadow Infratech
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              We specialize in structured NA plot development with a strong
              commitment to transparency and long-term value.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Backed by 9+ years of expertise, we build future-ready communities
              rooted in trust and sustainability.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <div className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-36">

          {/* ================= MISSION & VISION ================= */}
          <section className="space-y-36">

            {/* ===== MISSION ===== */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">

              {/* IMAGE 2 – RIGHT ↔ LEFT */}
              <motion.div
                {...infiniteMove("right")}
                className="rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="/abt3.jpg"
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
                <h2 className="text-5xl font-extrabold text-amber-800">
                  Our Mission
                </h2>

                <ul className="space-y-6 text-xl text-gray-700 leading-relaxed list-disc list-inside">
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
                <h2 className="text-5xl font-extrabold text-amber-800">
                  Our Vision
                </h2>

                <ul className="space-y-6 text-xl text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Become a benchmark brand in NA plot development.</li>
                  <li>Lead the industry with ethical and innovation-driven growth.</li>
                  <li>Create future-ready, well-planned communities.</li>
                </ul>
              </motion.div>

              {/* IMAGE 3 – LEFT ↔ RIGHT */}
              <motion.div
                {...infiniteMove("left")}
                className="rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2"
              >
                <img
                  src="/abt4.jpg"
                  alt="Our Vision"
                  className="w-full h-[640px] object-cover"
                />
              </motion.div>

            </div>
          </section>

          {/* ================= OUR JOURNEY ================= */}
          <section className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-amber-800"
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

            {/* ===== JOURNEY CARDS ===== */}
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  year: "2014",
                  text: "Laying the foundation with deep market knowledge, ethical practices, and customer trust.",
                },
                {
                  year: "2019",
                  text: "Official establishment of Shadow Infratech Pvt. Ltd. with a vision for structured NA development.",
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
                  <h3 className="text-3xl font-extrabold text-amber-800 mb-3">
                    {item.year}
                  </h3>
                  <p className="text-lg text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default AboutShadow;
