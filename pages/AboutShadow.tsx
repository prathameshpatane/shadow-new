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
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AboutShadow: React.FC = () => {
  return (
    <main className="pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto space-y-32">

        {/* ================= ABOUT US (HERO BACKGROUND) ================= */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden rounded-[2.5rem] shadow-2xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about-hero.jpg')" }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />

          {/* Animated Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-6 max-w-4xl"
          >
            <motion.h1
              variants={word}
              className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-rose-400 bg-clip-text text-transparent"
            >
              About Us
            </motion.h1>

            <motion.p
              variants={word}
              className="text-lg md:text-xl leading-relaxed text-gray-200"
            >
              <span className="text-white font-medium">Shadow Infratech Pvt. Ltd.</span> is a pioneering force in the real estate industry, dedicated to turning dreams into reality. With a strong focus on <span className="text-yellow-300 font-semibold">NA plots</span>, we redefine property ownership through innovation, transparency, and excellence.
            </motion.p>

            <motion.div
              variants={word}
              className="mt-10 mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400"
            />
          </motion.div>
        </section>

        {/* ================= OUR JOURNEY ================= */}
        <section className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold"
          >
            Our Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 leading-relaxed"
          >
            Established on November 7, 2019, with roots dating back to 2014, Shadow Infratech brings over <span className="font-semibold text-neutral-900">9 years</span> of experience in NA plots and structured land development.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-2">2014</h3>
              <p className="text-gray-600">Foundation years spent mastering real estate fundamentals.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-2">2019</h3>
              <p className="text-gray-600">Shadow Infratech Pvt Ltd officially established.</p>
            </motion.div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Our Mission</h2>
            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>Transparent and customer-first real estate solutions.</li>
              <li>Innovation-led NA plot development.</li>
              <li>Long-term trust and community impact.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Our Vision</h2>
            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>Benchmark name in NA plot development.</li>
              <li>Ethical, innovation-driven growth.</li>
              <li>Future-ready community building.</li>
            </ul>
          </motion.div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold"
          >
            Our Achievements
          </motion.h2>

          {/* ================= AWARDS DESCRIPTION ================= */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 leading-relaxed"
          >
            At <span className="font-semibold">Shadow Infratech Pvt Ltd</span>, our commitment to excellence in real estate development is consistently reflected through the prestigious accolades we’ve earned. Under the visionary leadership of <span className="font-semibold">Mr. Amar Tarange</span>, we have carved a niche in the industry, particularly in <span className="text-yellow-500 font-semibold">NA plots development</span>.<br /><br />
            These awards are a testament to Mr. Tarange’s dedication to setting new benchmarks in real estate. With an unwavering focus on customer satisfaction, quality, and transparency, we continue to strive for excellence, shaping the future of NA plots development and real estate.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {['/aboutone.png', '/abouttwo.png', '/aboutthree.png'].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition"
              >
                <img src={img} alt="Achievement" className="w-full h-56 object-cover" />
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default AboutShadow;
