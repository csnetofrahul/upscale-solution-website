
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Video background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Power Up Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                Business
              </span>
              <span className="block text-3xl lg:text-4xl text-gray-300">
                with Dynamics 365 Business Central
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Streamlined. Intelligent. Scalable. Transform your business operations with our expert Business Central solutions tailored for your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-calendar-line text-xl"></i>
                  Book Free Consultation
                </span>
              </button>
              
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-service-line text-xl"></i>
                  Explore Services
                </span>
              </button>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20business%20dashboard%20with%20glowing%20neon%20elements%2C%20holographic%20data%20visualization%2C%20futuristic%20interface%20design%20with%20charts%20and%20graphs%2C%20dark%20theme%20with%20cyan%20and%20purple%20lighting%20effects%2C%20professional%20technology%20background%2C%20high-tech%20atmosphere%2C%20clean%20and%20minimalist%20design&width=600&height=400&seq=hero-dashboard&orientation=landscape"
                alt="Business Central Dashboard"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-80 object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
