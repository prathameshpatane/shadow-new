import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '/aboutshadow' },
    { name: 'Projects', href: '/projectsshadow' },
    { name: 'Gallery', href: '/galleryshadow' },
    { name: 'Team', href: '/teamshadow' },
     { name: 'Contact', href: '/contactshadow' },
  ];

  const textColorClass = scrolled ? 'text-pleo-text' : 'text-white';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-lg border-b border-pleo-blue/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[96px] flex justify-between items-center">
        
        {/* Logo + Brand */}
        <Link
          to="/"
          className={`flex items-center gap-2 font-serif font-bold tracking-tight uppercase ${textColorClass}`}
        >
          <img
            src="/logo.png"
            alt="Shadow Infratech Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <span className="text-xl md:text-2xl">
            Shadow  Infratech  Pvt  Ltd
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:opacity-70 ${textColorClass}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-pleo-blue/20 flex flex-col items-center py-8 space-y-6 animate-fade-in">
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
