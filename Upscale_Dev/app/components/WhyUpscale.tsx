
'use client';

import { useState, useEffect } from 'react';

export default function WhyUpscale() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    rating: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounterAnimation();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('why-upscale');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const startCounterAnimation = () => {
    const targets = { experience: 5, projects: 50, clients: 100, rating: 100 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        rating: Math.floor(targets.rating * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const stats = [
    {
      icon: 'ri-calendar-line',
      number: counters.experience,
      suffix: '+',
      label: 'Years Experience',
      description: 'Deep expertise in Business Central solutions'
    },
    {
      icon: 'ri-folder-line',
      number: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful implementations across industries'
    },
    {
      icon: 'ri-global-line',
      number: counters.clients,
      suffix: '+',
      label: 'Global Clients',
      description: 'Trusted by businesses worldwide'
    },
    {
      icon: 'ri-star-fill',
      number: counters.rating,
      suffix: '%',
      label: '5-Star Ratings',
      description: 'Exceptional client satisfaction record'
    }
  ];

  return (
    <section id="why-upscale" className="py-24 relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(120,119,198,0.1),_transparent_50%)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(59,130,246,0.1),_transparent_50%)] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Upscale Solution?
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Your trusted partner for Business Central excellence with proven results and unmatched expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center transform transition-all duration-1000 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer">
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i className={`${stat.icon} text-4xl text-cyan-400 group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  
                  <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 font-mono">
                    {stat.number}{stat.suffix}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional content */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-gray-800/20 to-gray-900/20 border border-gray-700/30">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have revolutionized their operations with our Business Central expertise. From implementation to ongoing support, we're your dedicated partner for success.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap cursor-pointer">
              <span className="flex items-center justify-center gap-2">
                <i className="ri-rocket-line text-xl"></i>
                Start Your Journey Today
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
