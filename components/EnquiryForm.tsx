
import React from 'react';

export const EnquiryForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-pleo-blue/10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 bg-pleo-blue flex flex-col justify-center space-y-8">
            <h3 className="text-4xl md:text-5xl font-serif text-pleo-text leading-tight">
              Start Your Journey <br /> With Us.
            </h3>
            <p className="text-pleo-text/70 text-lg leading-relaxed font-light">
              Book a private viewing or enquire about our upcoming plots. Our team is ready to assist you in finding your dream estate.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-pleo-text">
                <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">📍</div>
                <span>Office No. 101, First Floor, Near Shriram Manas, Opposite to ICICI Bank, Madhav Nagar, Dhanori, Pune, Maharashtra – 411015</span>
              </div>
              <div className="flex items-center gap-4 text-pleo-text">
                <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">📞</div>
                <span>+91-9370158119</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/40">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-pleo-grey border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/40">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-pleo-grey border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/40">Interested Project</label>
                <select className="w-full bg-pleo-grey border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all appearance-none">
                  <option>The Azure Retreat</option>
                  <option>Mist Valley Villas</option>
                  <option>Skyline Heights</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/40">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-pleo-grey border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>
              <button className="w-full py-5 bg-pleo-text text-white rounded-xl font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-black/10">
                Book The Plot
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
