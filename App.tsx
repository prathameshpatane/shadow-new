
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Keypoints, Statistics } from './components/Keypoints';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { GoogleReviews } from './components/GoogleReviews';
import { Founders } from './components/Founders';
import { Testimonials } from './components/Testimonials';
import { EnquiryForm } from './components/EnquiryForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import {Why} from "./components/Why";
const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <Why />
        <About />
        <Statistics />
        <Keypoints />
        <ProjectsCarousel />
  
        <GoogleReviews />
        <Founders />
        <Testimonials />
        <EnquiryForm />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
