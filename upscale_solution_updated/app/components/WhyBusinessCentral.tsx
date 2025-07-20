
'use client';

import { useState, useEffect } from 'react';

export default function WhyBusinessCentral() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('why-business-central');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Finance Automation',
      description: 'Streamline accounting, invoicing, and financial reporting with intelligent automation'
    },
    {
      icon: 'ri-store-line',
      title: 'Inventory Management',
      description: 'Real-time tracking, automated reordering, and intelligent warehouse management'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Sales Alignment',
      description: 'Unified CRM and sales processes for better customer relationships and revenue growth'
    },
    {
      icon: 'ri-briefcase-4-line',
      title: 'Project Costing',
      description: 'Track project profitability with detailed cost analysis and resource allocation',
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Integration',
      description: 'Seamless cloud connectivity with Microsoft 365 and Azure services'
    }
  ];

  return (
    <section id="why-business-central" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Business Central?
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Experience the power of integrated business management with Microsoft's comprehensive ERP solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-3xl text-cyan-400 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
