
import React from 'react';
import { Play } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold">Location</h2>
          <h3 className="text-4xl font-serif text-pleo-text">Find Us On The Map</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 h-[500px]">
          {/* Map Placeholder */}
          <div className="rounded-[2rem] overflow-hidden bg-pleo-grey border border-pleo-blue/20 relative">
            <div className="absolute inset-0 flex items-center justify-center flex-col space-y-4">
              <div className="w-12 h-12 bg-pleo-blue rounded-full animate-bounce" />
              <p className="text-pleo-text/40 font-medium">Interactive Map View</p>
            </div>
            {/* Real Map would go here */}
            <div className="w-full h-full bg-[#E5E7EB] opacity-50 grayscale" />
          </div>

          {/* Video Placeholder */}
          <div className="rounded-[2rem] overflow-hidden bg-pleo-text border border-pleo-blue/20 relative group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/drone/800/600" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
              alt="Aerial View"
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col space-y-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center group-hover:bg-pleo-blue group-hover:scale-110 transition-all duration-300">
                <Play className="fill-white text-white ml-1" size={32} />
              </div>
              <p className="text-white font-medium uppercase tracking-widest text-sm">Experience The View</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
