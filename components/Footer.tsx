
import React from 'react';
import { Facebook, Youtube, Instagram, MapPin, Phone, Globe, Home, Users, Briefcase, Camera, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pleo-text text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="text-3xl font-serif font-bold tracking-widest text-white">SHADOW INFRATECH</div>
            <p className="text-white/70 max-w-sm leading-relaxed font-light text-lg">
              NA plots in Pune – ideal for residential and investment purposes. Discover well-developed plots with great amenities in prime locations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="group p-3 bg-white/10 rounded-full hover:bg-pleo-blue transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="group p-3 bg-white/10 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="group p-3 bg-white/10 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-pleo-blue flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Us
            </h5>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-pleo-blue flex-shrink-0" />
                <p>Office No. 101, First Floor, Near Shriram Manas, Opposite to ICICI Bank, Madhav Nagar, Dhanori, Pune, Maharashtra – 411015</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pleo-blue" />
                <p>+91-9370158119</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-pleo-blue" />
                <p>shadowinfratech.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-pleo-blue">Quick Links</h5>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-200"><Home className="w-3 h-3" />Home</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-200"><Users className="w-3 h-3" />About Us</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-200"><Briefcase className="w-3 h-3" />Projects</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-200"><Briefcase className="w-3 h-3" />Careers</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-200"><Camera className="w-3 h-3" />Our Gallery</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-200"><Mail className="w-3 h-3" />Contact Us</a></li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
              <h6 className="text-sm font-bold uppercase tracking-widest text-pleo-blue mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Opening Hours
              </h6>
              <div className="text-white/60 text-sm space-y-1">
                <p className="font-medium">Thursday - Tuesday</p>
                <p className="text-pleo-blue">9.30AM - 6.30PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/80 uppercase tracking-[0.2em]">
          <div>© 2024 SHADOW INFRATECH PVT LTD. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
