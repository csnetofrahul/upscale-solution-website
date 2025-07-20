
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
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

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'ri-settings-3-line',
      title: 'Implementation & Setup',
      description: 'Complete Business Central implementation tailored to your business needs with best practices and industry standards',
      features: ['System Configuration', 'Data Setup', 'User Training', 'Go-Live Support'],
      hasDetailPage: true,
      detailLink: '/implementation'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Custom Module Development',
      description: 'Bespoke extensions and customizations using AL language to extend Business Central functionality',
      features: ['AL Extensions', 'Custom Reports', 'Workflow Automation', 'API Integration'],
      hasDetailPage: true,
      detailLink: '/custom-development'
    },
    {
      icon: 'ri-links-line',
      title: 'Shopify, Power BI & CRM Integrations',
      description: 'Seamless integration with third-party platforms for unified business operations',
      features: ['E-commerce Sync', 'Advanced Analytics', 'CRM Connection', 'Real-time Data Flow'],
      hasDetailPage: true,
      detailLink: '/integrations'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing support to maximize your Business Central investment',
      features: ['User Training', '24/7 Support', 'Documentation', 'Best Practices'],
      hasDetailPage: true,
      detailLink: '/training'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Data Migration & UAT',
      description: 'Secure data migration and thorough user acceptance testing for smooth business continuity',
      features: ['Data Validation', 'Migration Planning', 'Testing Protocols', 'Quality Assurance'],
      hasDetailPage: true,
      detailLink: '/data-migration'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Services
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            End-to-end Business Central solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/80 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-700"></div>

              <div className="relative">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i className={`${service.icon} text-4xl text-cyan-400 group-hover:text-white transition-colors duration-300`}></i>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      <i className="ri-check-line text-cyan-400 mr-3 text-sm"></i>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.hasDetailPage && (
                  <Link href={service.detailLink}>
                    <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-500/50 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                      <span className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <i className="ri-arrow-right-line"></i>
                      </span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
