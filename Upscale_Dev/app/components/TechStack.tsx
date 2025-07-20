
'use client';

import { useState, useEffect } from 'react';

export default function TechStack() {
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

    const section = document.getElementById('tech-stack');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      icon: 'ri-microsoft-line',
      name: 'Business Central',
      description: 'Core ERP platform expertise',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-code-s-slash-line',
      name: 'AL Language',
      description: 'Custom extension development',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-flow-chart',
      name: 'Power Automate',
      description: 'Workflow automation',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-shopping-bag-line',
      name: 'Shopify',
      description: 'E-commerce integration',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: 'ri-cloud-line',
      name: 'Azure',
      description: 'Cloud infrastructure',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: 'ri-database-2-line',
      name: 'SQL Server',
      description: 'Database management',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'ri-bar-chart-line',
      name: 'Power BI',
      description: 'Business intelligence',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our Technology
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Stack
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Cutting-edge tools and platforms powering our Business Central solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative text-center transform transition-all duration-1000 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-700"></div>
                
                <div className="relative">
                  {/* Icon with pulsing glow */}
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${tech.color} rounded-2xl mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <i className={`${tech.icon} text-3xl text-white group-hover:animate-pulse`}></i>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional content */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-gray-800/20 to-gray-900/20 border border-gray-700/30">
            <h3 className="text-3xl font-bold text-white mb-6">
              Always Evolving, Always Innovating
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We stay ahead of the curve with the latest Microsoft technologies and best practices. Our continuous learning approach ensures you get the most advanced and secure Business Central solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                Microsoft Certified
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                Latest Updates
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                Best Practices
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                Security First
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
