
import React from 'react';

const galleryImages = [
  { url: "/gulnew.jpg", title: "Gulmohar Villas", size: "col-span-2" },
  { url: "/citrine_city.png", title: "Citrine City", size: "col-span-1" },
  { url: "/sol.jpg", title: "Solvista", size: "col-span-1" },
  { url: "/surnew.jpg", title: "Suraksha Enclave", size: "col-span-2" },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold">Gallery</h2>
          <h3 className="text-4xl font-serif text-pleo-text">A Glimpse Into Our Estates</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-[2rem] shadow-lg ${image.size}`}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs uppercase tracking-widest font-bold mb-1">Project</p>
                <h4 className="text-xl font-serif">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
