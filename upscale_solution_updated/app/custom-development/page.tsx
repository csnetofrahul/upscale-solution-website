'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CustomDevelopmentPage() {
  const [activeService, setActiveService] = useState(0);
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

    const section = document.getElementById('custom-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'AL Extensions',
      icon: 'ri-code-s-slash-line',
      description: 'Modern AL language extensions for Business Central',
      features: [
        'Custom business logic implementation',
        'Advanced field validations and calculations',
        'Automated workflow processes',
        'Custom page and report layouts',
        'Integration with external APIs'
      ],
      benefits: [
        'Seamless upgrades with future BC versions',
        'Isolated customizations prevent conflicts',
        'Enhanced performance and reliability',
        'Microsoft-approved development standards'
      ]
    },
    {
      title: 'Custom Reports',
      icon: 'ri-file-chart-line',
      description: 'Tailored reporting solutions for your business needs',
      features: [
        'Executive dashboards and KPI reports',
        'Financial statements and analytics',
        'Operational reports and summaries',
        'Automated report scheduling',
        'Custom data visualizations'
      ],
      benefits: [
        'Real-time business insights',
        'Automated report generation',
        'Customizable layouts and formats',
        'Integration with Power BI'
      ]
    },
    {
      title: 'Workflow Automation',
      icon: 'ri-flow-chart',
      description: 'Streamline business processes with intelligent automation',
      features: [
        'Approval workflow automation',
        'Document routing and processing',
        'Notification and alert systems',
        'Conditional business logic',
        'Integration with Office 365'
      ],
      benefits: [
        'Reduced manual processing time',
        'Improved accuracy and consistency',
        'Better compliance and audit trails',
        'Enhanced user productivity'
      ]
    },
    {
      title: 'API Integration',
      icon: 'ri-plug-line',
      description: 'Connect Business Central with external systems seamlessly',
      features: [
        'REST and OData API development',
        'Third-party system integrations',
        'Real-time data synchronization',
        'Custom web services',
        'Mobile app connectivity'
      ],
      benefits: [
        'Unified business ecosystem',
        'Real-time data flow',
        'Reduced data silos',
        'Enhanced system interoperability'
      ]
    }
  ];

  const developmentProcess = [
    {
      phase: 'Requirements Analysis',
      description: 'Deep dive into your business requirements and technical specifications',
      duration: '1-2 weeks'
    },
    {
      phase: 'Solution Design',
      description: 'Architecture planning and technical design documentation',
      duration: '1 week'
    },
    {
      phase: 'Development & Testing',
      description: 'Code development with continuous testing and quality assurance',
      duration: '2-6 weeks'
    },
    {
      phase: 'Deployment & Training',
      description: 'Production deployment and user training on new features',
      duration: '1 week'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="custom-hero" className="pt-24 pb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20software%20developers%20working%20on%20custom%20business%20applications%2C%20modern%20coding%20environment%20with%20multiple%20screens%20showing%20AL%20code%20and%20Business%20Central%20extensions%2C%20clean%20workspace%20with%20purple%20and%20blue%20lighting%2C%20team%20collaboration%20on%20enterprise%20software%20development&width=1920&height=1080&seq=custom-hero-001&orientation=landscape"
            alt="Custom Development Background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <i className="ri-code-s-slash-line mr-2"></i>
              Custom Module Development
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Tailored
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Extend Business Central with custom modules built specifically for your unique business requirements
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
                Custom Development
                <span className="block text-purple-400">Expertise</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Our development team specializes in creating custom Business Central solutions using modern AL language. We build extensions that seamlessly integrate with your existing system while maintaining upgrade compatibility.
                </p>
                <p className="text-lg leading-relaxed">
                  From simple field additions to complex business logic implementations, we deliver solutions that enhance your Business Central experience without compromising system integrity.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-sm text-gray-400">Custom Extensions</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Upgrade Compatible</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Close-up%20view%20of%20AL%20code%20development%20for%20Business%20Central%20extensions%2C%20modern%20IDE%20interface%20showing%20custom%20module%20programming%2C%20clean%20code%20structure%20with%20syntax%20highlighting%2C%20professional%20development%20environment%2C%20purple%20and%20blue%20theme&width=800&height=600&seq=custom-overview-001&orientation=landscape"
                alt="Custom Development Overview"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive custom development solutions for Business Central
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeService === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 shadow-xl shadow-purple-500/20' 
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50'
                }`}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30' 
                      : 'bg-gray-700/50'
                  }`}>
                    <i className={`${service.icon} text-2xl ${
                      activeService === index ? 'text-purple-400' : 'text-gray-400'
                    }`}></i>
                  </div>
                  <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                    activeService === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    activeService === index ? 'text-purple-400' : 'text-gray-500'
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mr-4">
                    <i className={`${services[activeService].icon} text-3xl text-purple-400`}></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {services[activeService].title}
                    </h3>
                    <p className="text-purple-400 mt-2">
                      {services[activeService].description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className="ri-check-line text-purple-400 mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                  <ul className="space-y-3">
                    {services[activeService].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className="ri-star-line text-pink-400 mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={`https://readdy.ai/api/search-image?query=Professional%20developers%20working%20on%20$%7Bservices%5BactiveService%5D.title.toLowerCase%28%29%7D%20for%20Business%20Central%2C%20modern%20development%20environment%20showing%20code%20and%20testing%2C%20clean%20workspace%20with%20multiple%20monitors%2C%20collaborative%20coding%20session%2C%20purple%20and%20pink%20lighting&width=600&height=500&seq=service-${activeService + 1}&orientation=landscape`}
                  alt={services[activeService].title}
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Development
              <span className="block text-purple-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured approach ensures quality deliverables and seamless integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-purple-500/30">
                    <span className="text-2xl font-bold text-purple-400">{index + 1}</span>
                  </div>
                  {index < developmentProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.phase}</h3>
                <p className="text-gray-300 mb-3">{phase.description}</p>
                <div className="text-sm text-purple-400 font-semibold">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your
            <span className="block text-purple-400">Custom Solution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your custom development requirements and create tailored Business Central extensions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-code-s-slash-line text-xl"></i>
                  Start Your Project
                </span>
              </button>
            </Link>
            <Link href="/">
              <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-purple-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
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