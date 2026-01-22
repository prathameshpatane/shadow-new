
import React from 'react';
import { Play } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold">Location</h2>
          <h3 className="text-4xl font-serif text-pleo-text animate-slide-text">Find Us On The Map</h3>
        </div>

        <div className="flex justify-center">
          {/* Embedded Google Map */}
          <div className="rounded-[2rem] overflow-hidden bg-pleo-grey border border-pleo-blue/20 w-full max-w-4xl h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483237.9966690133!2d73.23959945625005!3d18.873907630476776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7002731f681%3A0x46f4fea55ee700df!2sShadow%20Infratech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1769064444978!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

<style jsx>{`
  @keyframes slide-text {
    0% {
      transform: translateX(-50px);
    }
    50% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(-50px);
    }
  }
  
  .animate-slide-text {
    animation: slide-text 3s ease-in-out infinite;
  }
`}</style>
