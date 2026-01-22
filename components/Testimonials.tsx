
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Shrikant Awachar",
    location: "Satisfied Client",
    content: "A supportive and polite staff. Very good planning and development. Highly recommended for investment purposes."
  },
  {
    name: "Vivek Goje",
    location: "Satisfied Client",
    content: "Most trusted ethical and customer support company in Pune. Very good experience with Shadow Infratech Pvt Ltd."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold animate-fade-in-up">Voices</h2>
          <h3 className="text-4xl font-serif text-pleo-text animate-slide-text animation-delay-200">Client Testimonials</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="p-12 rounded-3xl bg-pleo-accent border border-pleo-blue/10 relative animate-slide-up hover:scale-105 hover:animate-bounce-up transition-all duration-500 hover:shadow-xl" style={{animationDelay: `${i * 300}ms`}}>
              <Quote className="absolute top-10 right-10 w-12 h-12 text-pleo-blue opacity-30 animate-pulse" />
              <div className="space-y-6">
                <p className="text-xl italic font-serif text-pleo-text/80 leading-relaxed">"{t.content}"</p>
                <div>
                  <h5 className="font-bold text-pleo-text">{t.name}</h5>
                  <p className="text-sm text-pleo-blue-dark uppercase tracking-widest mt-1">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        @keyframes bounce-up {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px) translateX(0px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(25px) translateX(-20px);
          }
          75% {
            opacity: 0.8;
            transform: translateY(10px) translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(0px);
          }
        }
        
        .animate-slide-text {
          animation: slide-text 3s ease-in-out infinite;
        }
        
        .animate-bounce-up {
          animation: bounce-up 0.6s ease-in-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};
