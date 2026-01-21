
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
          <h2 className="text-sm uppercase tracking-widest text-pleo-blue-dark font-bold">Voices</h2>
          <h3 className="text-4xl font-serif text-pleo-text">Client Testimonials</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="p-12 rounded-3xl bg-pleo-accent border border-pleo-blue/10 relative">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-pleo-blue opacity-30" />
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
    </section>
  );
};
