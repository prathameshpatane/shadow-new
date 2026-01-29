
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { Why } from "./components/Why";
import { Gallery } from './components/Gallery';
import  AboutShadow from './pages/AboutShadow';
import GalleryShadow from './pages/GalleryShadow';
// Home Page
const HomePage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
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

// About Shadow Page
const AboutShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
    
      
    </main>
    <Footer />
  </div>
);

// Projects Shadow Page
const ProjectsShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
      <ProjectsCarousel />
      <Keypoints />
      <GoogleReviews />
      <EnquiryForm />
    </main>
    <Footer />
  </div>
);

// Gallery Shadow Page
const GalleryShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
      
      <EnquiryForm/>
      <LocationSection/>
  
    </main>
    <Footer />
  </div>
);

// Contact Shadow Page
const ContactShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
      <EnquiryForm />
      <LocationSection />
    </main>
    <Footer />
  </div>
);

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage scrolled={scrolled} />} />
      <Route path="/aboutshadow" element={<AboutShadowPage scrolled={scrolled} />} />
      <Route path="/projectsshadow" element={<ProjectsShadowPage scrolled={scrolled} />} />
      <Route path="/galleryshadow" element={<GalleryShadowPage scrolled={scrolled} />} />
      <Route path="/contactshadow" element={<ContactShadowPage scrolled={scrolled} />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>

      <AppContent />
    </Router>
  );
};

export default App;
