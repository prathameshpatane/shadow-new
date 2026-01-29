import React from "react";
import { motion } from "framer-motion";

const images: string[] = [
  "/harvest_hills.png",
  "/gulmohar_1.png",
  "/hadapsar.png",
  "/mission.png",
  "/vision.png",
  "/hadap.jpg",
  "/loh.jpg",
  "/sol.jpg",
  "/harvest_1.png",
  "/surnew.jpg",
  "/citrine_city.png",
  "/solvista.png",
  "/imgone.jpg",
  "/imgtwo.jpg",
  "/imgthree.jpg",
  "/kharadi.png",
  "/mos.jpg",
  "/moshi.png",
  "/house.jpg",
  "/gulmohar_vikas.png",
  "/suraksha_enclave.png",
  "/wag.jpg",
  "/wagh.jpg",
  "/waghol.jpeg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const GalleryShadow: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
          Our Property Gallery
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Explore premium real estate spaces crafted for modern living
        </p>
      </div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl shadow-xl bg-white"
          >
            {/* Image */}
            <img
              src={src}
              alt={`Property ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-white text-lg font-semibold">
                Luxury Property
              </h3>
              <p className="text-gray-200 text-sm">
                Prime Location • Modern Design
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GalleryShadow;
