import React from 'react';

export const EnquiryForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Image from public folder - replaces bg-indigo-400 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/prop.jpg')"
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 bg-pleo-blue/90 backdrop-blur-md flex flex-col justify-center space-y-8">
            <h3 className="text-4xl md:text-5xl font-serif text-pleo-text leading-tight drop-shadow-md">
              Start Your Journey <br /> With Us.
            </h3>
            <p className="text-pleo-text/90 text-lg leading-relaxed font-light drop-shadow-sm">
              Book a private viewing or enquire about our upcoming plots. Our team is ready to assist you in finding your dream estate.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-pleo-text drop-shadow-sm">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">📍</div>
                <span>Office No. 101, First Floor, Near Shriram Manas, Opposite to ICICI Bank, Madhav Nagar, Dhanori, Pune, Maharashtra – 411015</span>
              </div>
              <div className="flex items-center gap-4 text-pleo-text drop-shadow-sm">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">📞</div>
                <span>+91-9370158119</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/70 drop-shadow-sm">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/80 backdrop-blur-sm border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all shadow-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/70 drop-shadow-sm">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/80 backdrop-blur-sm border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all shadow-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/70 drop-shadow-sm">Interested Project</label>
                <select className="w-full bg-white/80 backdrop-blur-sm border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all appearance-none shadow-lg">
                  <option>The Azure Retreat</option>
                  <option>Mist Valley Villas</option>
                  <option>Skyline Heights</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-pleo-text/70 drop-shadow-sm">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/80 backdrop-blur-sm border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-pleo-blue transition-all shadow-lg"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>
              <button className="w-full py-5 bg-pleo-text text-white rounded-xl font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-black/20 hover:shadow-2xl">
                Book The Plot
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
