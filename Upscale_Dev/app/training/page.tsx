'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TrainingPage() {
  const [activeProgram, setActiveProgram] = useState(0);
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

    const section = document.getElementById('training-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const trainingPrograms = [
    {
      title: 'End-User Training',
      icon: 'ri-user-line',
      duration: '1-2 weeks',
      description: 'Comprehensive training for daily Business Central users',
      features: [
        'Navigation and interface overview',
        'Daily operations and workflows',
        'Data entry and management',
        'Basic reporting and inquiries',
        'Role-specific functionality'
      ],
      benefits: [
        'Faster user adoption',
        'Reduced support requests',
        'Improved data accuracy',
        'Enhanced productivity'
      ],
      audience: 'Sales, Finance, Operations Teams',
      format: 'Interactive workshops and hands-on sessions'
    },
    {
      title: 'Administrator Training',
      icon: 'ri-settings-4-line',
      duration: '2-3 weeks',
      description: 'Advanced system administration and configuration',
      features: [
        'System setup and configuration',
        'User management and permissions',
        'Workflow configuration',
        'Report customization',
        'System maintenance'
      ],
      benefits: [
        'Self-sufficient system management',
        'Reduced dependency on consultants',
        'Improved system performance',
        'Enhanced security'
      ],
      audience: 'IT Administrators, System Managers',
      format: 'Technical workshops and lab exercises'
    },
    {
      title: 'Developer Training',
      icon: 'ri-code-s-slash-line',
      duration: '3-4 weeks',
      description: 'AL language and Business Central extension development',
      features: [
        'AL language fundamentals',
        'Extension development',
        'API integration',
        'Custom object creation',
        'Deployment and testing'
      ],
      benefits: [
        'In-house development capability',
        'Faster customization delivery',
        'Reduced development costs',
        'Better system understanding'
      ],
      audience: 'Developers, Technical Consultants',
      format: 'Code labs and project-based learning'
    },
    {
      title: 'Executive Training',
      icon: 'ri-presentation-line',
      duration: '1 week',
      description: 'Strategic insights and business intelligence for leadership',
      features: [
        'Business intelligence overview',
        'KPI dashboard navigation',
        'Strategic reporting',
        'ROI analysis',
        'Change management'
      ],
      benefits: [
        'Data-driven decision making',
        'Strategic system utilization',
        'Improved business insights',
        'Enhanced ROI'
      ],
      audience: 'C-Level, Department Heads',
      format: 'Executive briefings and strategic sessions'
    }
  ];

  const supportServices = [
    {
      title: '24/7 Help Desk',
      icon: 'ri-customer-service-2-line',
      description: 'Round-the-clock support for urgent issues',
      features: [
        'Multi-channel support (phone, email, chat)',
        'Priority ticket system',
        'Remote assistance',
        'Escalation procedures'
      ]
    },
    {
      title: 'Knowledge Base',
      icon: 'ri-book-open-line',
      description: 'Comprehensive documentation and self-help resources',
      features: [
        'Step-by-step guides',
        'Video tutorials',
        'FAQ database',
        'Best practices library'
      ]
    },
    {
      title: 'Regular Health Checks',
      icon: 'ri-pulse-line',
      description: 'Proactive system monitoring and optimization',
      features: [
        'Performance monitoring',
        'Security assessments',
        'Optimization recommendations',
        'Preventive maintenance'
      ]
    },
    {
      title: 'Continuous Learning',
      icon: 'ri-graduation-cap-line',
      description: 'Ongoing education and skill development',
      features: [
        'Monthly webinars',
        'Feature update training',
        'Certification programs',
        'User group meetings'
      ]
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="training-hero" className="pt-24 pb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20business%20training%20session%20with%20instructor%20teaching%20Business%20Central%20software%20to%20diverse%20group%20of%20professionals%2C%20modern%20training%20room%20with%20large%20screens%2C%20collaborative%20learning%20environment%2C%20clean%20educational%20setting%20with%20orange%20and%20blue%20lighting&width=1920&height=1080&seq=training-hero-001&orientation=landscape"
            alt="Training Background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <i className="ri-graduation-cap-line mr-2"></i>
              Training & Support
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Expert
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Training
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive training programs and ongoing support to maximize your Business Central investment
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
                Empowering Your
                <span className="block text-orange-400">Team</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Our comprehensive training programs are designed to ensure your team gets the most out of Business Central. From end-users to administrators and developers, we provide role-specific training that builds confidence and competence.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond initial training, our ongoing support services ensure you have the help you need when you need it. With 24/7 support, comprehensive documentation, and continuous learning opportunities, we're your long-term partner in success.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-orange-400 mb-2">1000+</div>
                    <div className="text-sm text-gray-400">Users Trained</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
                    <div className="text-sm text-gray-400">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Business%20Central%20training%20instructor%20conducting%20hands-on%20workshop%20with%20professionals%20around%20computer%20workstations%2C%20modern%20training%20facility%20with%20multiple%20monitors%2C%20collaborative%20learning%20environment%2C%20warm%20orange%20and%20blue%20lighting%2C%20professional%20educational%20setting&width=800&height=600&seq=training-overview-001&orientation=landscape"
                alt="Training Overview"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Training
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored training programs for every role and skill level
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeProgram === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveProgram(index)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeProgram === index 
                    ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/50 shadow-xl shadow-orange-500/20' 
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50'
                }`}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 ${
                    activeProgram === index 
                      ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30' 
                      : 'bg-gray-700/50'
                  }`}>
                    <i className={`${program.icon} text-2xl ${
                      activeProgram === index ? 'text-orange-400' : 'text-gray-400'
                    }`}></i>
                  </div>
                  <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                    activeProgram === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {program.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    activeProgram === index ? 'text-orange-400' : 'text-gray-500'
                  }`}>
                    {program.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Program Details */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl mr-4">
                    <i className={`${trainingPrograms[activeProgram].icon} text-3xl text-orange-400`}></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {trainingPrograms[activeProgram].title}
                    </h3>
                    <p className="text-orange-400 mt-2">
                      Duration: {trainingPrograms[activeProgram].duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-6">
                  {trainingPrograms[activeProgram].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Target Audience</h4>
                    <p className="text-gray-300">{trainingPrograms[activeProgram].audience}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Format</h4>
                    <p className="text-gray-300">{trainingPrograms[activeProgram].format}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Training Topics</h4>
                  <ul className="space-y-3">
                    {trainingPrograms[activeProgram].features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className="ri-check-line text-orange-400 mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                  <ul className="space-y-3">
                    {trainingPrograms[activeProgram].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className="ri-star-line text-red-400 mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={`https://readdy.ai/api/search-image?query=Professional%20$%7BtrainingPrograms%5BactiveProgram%5D.title.toLowerCase%28%29%7D%20session%20for%20Business%20Central%2C%20modern%20training%20room%20with%20instructor%20and%20participants%2C%20hands-on%20learning%20environment%2C%20collaborative%20workspace%20with%20orange%20and%20red%20accent%20lighting&width=600&height=500&seq=program-${activeProgram + 1}&orientation=landscape`}
                  alt={trainingPrograms[activeProgram].title}
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ongoing
              <span className="block text-orange-400">Support</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive support services to ensure your continued success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-4xl text-orange-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center justify-center">
                      <i className="ri-check-line text-orange-400 mr-2 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Empower
            <span className="block text-orange-400">Your Team?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your training needs and create a customized learning program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-graduation-cap-line text-xl"></i>
                  Start Training
                </span>
              </button>
            </Link>
            <Link href="/">
              <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-orange-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
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