import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'About', href: '/aboutshadow' },
    { name: 'Projects', href: '/projectsshadow' },
    { name: 'Gallery', href: '/galleryshadow' },
    { name: 'Team', href: '/teamshadow' },
    { name: 'Enquire', href: '/enquireshadow' },
  ];

  const textColorClass = scrolled ? 'text-pleo-text' : 'text-white';

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-white/70 backdrop-blur-lg border-b border-pleo-blue/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[96px] flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 font-serif font-bold uppercase tracking-tight ${textColorClass}`}
        >
          <img
            src="/logo.png"
            alt="Shadow Infratech Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <span className="text-xl md:text-2xl">
            Shadow Infratech Pvt Ltd
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-xs uppercase tracking-widest font-bold transition-opacity hover:opacity-70 ${textColorClass}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg border-b border-pleo-blue/20 flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-pleo-text hover:text-pleo-blue-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
