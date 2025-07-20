
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ImplementationPage() {
  const [activePhase, setActivePhase] = useState(0);
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

    const section = document.getElementById('implementation-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      title: 'Discovery & Planning',
      duration: '2-3 weeks',
      icon: 'ri-search-line',
      description: 'Comprehensive business analysis and requirement gathering',
      details: [
        'Business process mapping and analysis',
        'Current system assessment and data audit',
        'Stakeholder interviews and requirement documentation',
        'Gap analysis and solution architecture design',
        'Project timeline and resource planning'
      ]
    },
    {
      title: 'System Configuration',
      duration: '3-4 weeks',
      icon: 'ri-settings-3-line',
      description: 'Core Business Central setup tailored to your business',
      details: [
        'Company and user setup configuration',
        'Chart of accounts and financial dimensions',
        'Item master data and inventory setup',
        'Customer and vendor master data',
        'Workflow and approval processes'
      ]
    },
    {
      title: 'Data Migration',
      duration: '2-3 weeks',
      icon: 'ri-database-2-line',
      description: 'Secure transfer of your existing business data',
      details: [
        'Data extraction and cleansing procedures',
        'Migration scripts and validation rules',
        'Test migration and data verification',
        'Final data migration and reconciliation',
        'Historical data preservation'
      ]
    },
    {
      title: 'Testing & Training',
      duration: '2-3 weeks',
      icon: 'ri-user-star-line',
      description: 'Comprehensive testing and user enablement',
      details: [
        'System integration and functionality testing',
        'User acceptance testing coordination',
        'End-user training program delivery',
        'Administrator training and documentation',
        'Performance testing and optimization'
      ]
    },
    {
      title: 'Go-Live & Support',
      duration: '1-2 weeks',
      icon: 'ri-rocket-line',
      description: 'Smooth transition to live operations',
      details: [
        'Production deployment and cutover',
        'Live system monitoring and support',
        'Issue resolution and troubleshooting',
        'Post go-live optimization',
        'Ongoing support and maintenance planning'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Risk Mitigation',
      description: 'Proven methodology reduces implementation risks and ensures project success'
    },
    {
      icon: 'ri-time-line',
      title: 'Faster Time-to-Value',
      description: 'Accelerated deployment gets your team productive quickly'
    },
    {
      icon: 'ri-user-settings-line',
      title: 'Best Practices',
      description: 'Industry-standard configurations optimized for your business'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Dedicated Support',
      description: 'Expert guidance throughout the entire implementation journey'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="implementation-hero" className="pt-24 pb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20enterprise%20software%20implementation%20with%20professional%20consultants%20working%20on%20business%20central%20ERP%20system%20setup%2C%20clean%20office%20environment%20with%20multiple%20monitors%20showing%20configuration%20screens%2C%20team%20collaboration%2C%20minimalist%20blue%20and%20purple%20lighting%2C%20professional%20atmosphere%2C%20high-tech%20workspace&width=1920&height=1080&seq=impl-hero-001&orientation=landscape"
            alt="Implementation Background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <i className="ri-settings-3-line mr-2"></i>
              Implementation & Setup
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Strategic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Implementation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our proven 5-phase implementation methodology, designed to minimize risk and maximize success
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Implementation
                <span className="block text-cyan-400">Approach</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Our implementation methodology is built on years of experience and hundreds of successful Business Central deployments. We follow a structured approach that ensures your system is configured correctly from day one.
                </p>
                <p className="text-lg leading-relaxed">
                  Every implementation is unique, which is why we tailor our approach to your specific business requirements, industry standards, and organizational culture. Our goal is not just to deploy software, but to transform your business operations.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                    <div className="text-sm text-gray-400">Avg. Weeks</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20consulting%20team%20analyzing%20workflow%20diagrams%20and%20process%20maps%20on%20a%20large%20wall%20display%2C%20modern%20office%20setting%20with%20sticky%20notes%20and%20planning%20materials%2C%20collaborative%20workspace%2C%20clean%20minimal%20design%2C%20soft%20blue%20lighting%2C%20business%20strategy%20session&width=800&height=600&seq=impl-overview-001&orientation=landscape"
                alt="Implementation Overview"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Implementation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Phases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured 5-phase approach ensures systematic progress and measurable outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mb-16">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activePhase === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActivePhase(index)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activePhase === index 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/50 shadow-xl shadow-cyan-500/20' 
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50'
                }`}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 ${
                    activePhase === index 
                      ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30' 
                      : 'bg-gray-700/50'
                  }`}>
                    <i className={`${phase.icon} text-2xl ${
                      activePhase === index ? 'text-cyan-400' : 'text-gray-400'
                    }`}></i>
                  </div>
                  <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                    activePhase === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {phase.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    activePhase === index ? 'text-cyan-400' : 'text-gray-500'
                  }`}>
                    {phase.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mr-4">
                    <i className={`${phases[activePhase].icon} text-3xl text-cyan-400`}></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {phases[activePhase].title}
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      Duration: {phases[activePhase].duration}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {phases[activePhase].description}
                </p>
                <ul className="space-y-3">
                  {phases[activePhase].details.map((detail, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <i className="ri-check-line text-cyan-400 mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={`https://readdy.ai/api/search-image?query=Professional%20business%20consultants%20working%20on%20$%7Bphases%5BactivePhase%5D.title.toLowerCase%28%29%7D%20phase%20of%20ERP%20implementation%2C%20modern%20office%20environment%20with%20computers%20and%20planning%20materials%2C%20collaborative%20team%20setting%2C%20clean%20workspace%2C%20blue%20and%20purple%20accent%20lighting&width=600&height=500&seq=phase-${activePhase + 1}&orientation=landscape`}
                  alt={phases[activePhase].title}
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block text-cyan-400">Implementation?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-4xl text-cyan-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="block text-cyan-400">Implementation Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your Business Central implementation requirements and create a customized approach for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-calendar-line text-xl"></i>
                  Schedule Consultation
                </span>
              </button>
            </Link>
            <Link href="/">
              <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-cyan-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-arrow-left-line"></i>
                  Back to Services
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
