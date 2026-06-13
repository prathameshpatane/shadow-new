import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import AboutShadow from './pages/AboutShadow';
import GalleryShadow from './pages/GalleryShadow';
import { TeamShadow } from './pages/TeamShadow';
import ProjectShadow from './pages/ProjectShadow';
import ScrollToTop from './components/ScrollToTop';
import EnquireShadow from './pages/EnquireShadow';


// Home Page — scroll-triggered enquiry modal
const HomePage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const hasShown = useRef(false); // ensures modal only auto-opens once per visit

  useEffect(() => {
    const target = document.getElementById('why-shadow');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShown.current) {
          hasShown.current = true;
          setShowEnquiry(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
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
      </main>
      <Footer />

      {/* Enquiry modal — triggered on scroll to core-qualities section */}
      {showEnquiry && <EnquireShadow onClose={() => setShowEnquiry(false)} />}
    </div>
  );
};

// About Shadow Page
const AboutShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
      <AboutShadow />
    </main>
    <Footer />
  </div>
);

// Projects Shadow Page
const ProjectsShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
      <ProjectShadow />
    </main>
    <Footer />
  </div>
);

// Gallery Shadow Page
const GalleryShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
      <GalleryShadow />
      <LocationSection />
    </main>
    <Footer />
  </div>
);

// Team Shadow Page
const TeamShadowPage: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className="min-h-screen font-sans selection:bg-pleo-blue selection:text-white">
    <Navbar scrolled={scrolled} />
    <main className="pt-24">
      <TeamShadow />
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
      <Route path="/teamshadow" element={<TeamShadowPage scrolled={scrolled} />} />
      {/* /enquireshadow no longer a standalone page — redirect to home */}
      <Route path="/enquireshadow" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;