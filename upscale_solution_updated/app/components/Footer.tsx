
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Implementation & Setup',
    'Custom Development',
    'Integrations',
    'Training & Support',
    'Data Migration'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#why' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-fill', href: 'http://linkedin.com/company/upscale%E3%85%85solution', name: 'LinkedIn' },
    { icon: 'ri-twitter-x-fill', href: '#', name: 'Twitter' },
    { icon: 'ri-facebook-fill', href: '#', name: 'Facebook' },
    { icon: 'ri-youtube-fill', href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      {/* Neon frame effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4 font-pacifico">
                Upscale Solution
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Your trusted partner for Microsoft Dynamics 365 Business Central excellence. We transform businesses through intelligent ERP solutions, custom development, and seamless integrations.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                  <i className="ri-mail-line text-cyan-400"></i>
                </div>
                <span>rahul@upscalesolution.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                  <i className="ri-phone-line text-cyan-400"></i>
                </div>
                <span>+91 9717415206</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                  <i className="ri-map-pin-line text-cyan-400"></i>
                </div>
                <span>Homes 121, Sector 121 Noida Uttar Pradesh 201307</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Upscale Solution. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 text-gray-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  title={social.name}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Microsoft Partnership Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-full">
            <i className="ri-microsoft-line text-2xl text-blue-400"></i>
            <span className="text-gray-300 text-sm font-semibold">Microsoft Certified Partner</span>
          </div>
        </div>
      </div>

      {/* Animated glow effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"></div>
    </footer>
  );
}
