
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#why-upscale' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-blue-400/20 shadow-2xl shadow-blue-500/10' 
        : 'bg-[#0d0d0d]/80 backdrop-blur-sm'
    }`}>
      <nav className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 whitespace-nowrap cursor-pointer"
                style={{fontFamily: 'Montserrat, sans-serif'}}
              >
                {item.name}
                {/* Neon underline effect */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full shadow-lg shadow-blue-400/50"></span>
                {/* Glow effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-violet-400/0 to-cyan-400/0 group-hover:from-blue-400/5 group-hover:via-violet-400/5 group-hover:to-cyan-400/5 rounded-lg transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="relative px-6 py-3 bg-transparent border-2 border-blue-400/60 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 hover:border-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer group overflow-hidden"
              style={{fontFamily: 'Exo, Montserrat, sans-serif'}}>
              <span className="relative z-10 flex items-center gap-2">
                <i className="ri-phone-line"></i>
                Free Consultation
              </span>
              {/* Pulse animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-violet-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              {/* Neon glow */}
              <div className="absolute inset-0 border border-blue-400/0 group-hover:border-blue-400/30 rounded-lg transition-all duration-300 shadow-lg group-hover:shadow-blue-400/25"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 rounded-lg transition-colors duration-300 cursor-pointer border border-transparent hover:border-blue-400/30"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2 bg-[#111111]/95 backdrop-blur-xl rounded-lg mt-2 border border-blue-400/20 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-400/10 cursor-pointer relative group"
                style={{fontFamily: 'Montserrat, sans-serif'}}
              >
                {item.name}
                <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-1 transition-all duration-300 rounded-full transform -translate-y-1/2"></span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700/50">
              <button className="w-full px-4 py-3 bg-transparent border-2 border-blue-400/60 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 hover:border-blue-400 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                style={{fontFamily: 'Exo, Montserrat, sans-serif'}}>
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-phone-line"></i>
                  Free Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
