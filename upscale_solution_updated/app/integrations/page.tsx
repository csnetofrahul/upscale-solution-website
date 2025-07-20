'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function IntegrationsPage() {
  const [activeIntegration, setActiveIntegration] = useState(0);
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

    const section = document.getElementById('integrations-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const integrations = [
    {
      title: 'Shopify Integration',
      icon: 'ri-shopping-bag-3-line',
      description: 'Seamless e-commerce synchronization with real-time inventory management',
      features: [
        'Real-time inventory synchronization',
        'Automatic order processing',
        'Customer data integration',
        'Product catalog management',
        'Multi-store support'
      ],
      benefits: [
        'Reduced manual data entry',
        'Accurate inventory tracking',
        'Faster order fulfillment',
        'Unified customer experience'
      ],
      color: 'green'
    },
    {
      title: 'Power BI Integration',
      icon: 'ri-bar-chart-box-line',
      description: 'Advanced business intelligence with interactive dashboards and reports',
      features: [
        'Real-time data visualization',
        'Interactive dashboards',
        'Advanced analytics and KPIs',
        'Custom report creation',
        'Mobile-responsive design'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time business insights',
        'Improved performance monitoring',
        'Executive-level reporting'
      ],
      color: 'yellow'
    },
    {
      title: 'CRM Integration',
      icon: 'ri-customer-service-2-line',
      description: 'Unified customer relationship management across all touchpoints',
      features: [
        'Customer data synchronization',
        'Lead and opportunity tracking',
        'Sales pipeline management',
        'Contact history integration',
        'Marketing automation'
      ],
      benefits: [
        'Improved customer relationships',
        'Enhanced sales processes',
        'Better lead conversion',
        'Unified customer view'
      ],
      color: 'blue'
    },
    {
      title: 'Custom API Integration',
      icon: 'ri-links-line',
      description: 'Connect with any third-party system through custom API development',
      features: [
        'REST and SOAP API connections',
        'Real-time data synchronization',
        'Custom middleware development',
        'Error handling and logging',
        'Security and authentication'
      ],
      benefits: [
        'Seamless system connectivity',
        'Automated data flow',
        'Reduced integration complexity',
        'Scalable architecture'
      ],
      color: 'purple'
    }
  ];

  const integrationProcess = [
    {
      phase: 'Assessment & Planning',
      description: 'Evaluate existing systems and plan integration architecture',
      duration: '1-2 weeks',
      icon: 'ri-search-line'
    },
    {
      phase: 'API Development',
      description: 'Build secure connections and data mapping protocols',
      duration: '2-4 weeks',
      icon: 'ri-code-line'
    },
    {
      phase: 'Testing & Validation',
      description: 'Comprehensive testing of data flow and system performance',
      duration: '1-2 weeks',
      icon: 'ri-test-tube-line'
    },
    {
      phase: 'Go-Live & Monitoring',
      description: 'Production deployment with continuous monitoring',
      duration: '1 week',
      icon: 'ri-eye-line'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        bg: 'from-green-500/20 to-emerald-500/20',
        border: 'border-green-500/50',
        text: 'text-green-400',
        shadow: 'shadow-green-500/20'
      },
      yellow: {
        bg: 'from-yellow-500/20 to-orange-500/20',
        border: 'border-yellow-500/50',
        text: 'text-yellow-400',
        shadow: 'shadow-yellow-500/20'
      },
      blue: {
        bg: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        shadow: 'shadow-blue-500/20'
      },
      purple: {
        bg: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/50',
        text: 'text-purple-400',
        shadow: 'shadow-purple-500/20'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="integrations-hero" className="pt-24 pb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20business%20integration%20hub%20with%20connected%20systems%2C%20API%20connections%20visualization%2C%20multiple%20screens%20showing%20Shopify%2C%20Power%20BI%2C%20and%20CRM%20integrations%2C%20network%20diagram%20with%20data%20flow%2C%20professional%20tech%20environment%20with%20blue%20and%20green%20lighting&width=1920&height=1080&seq=integrations-hero-001&orientation=landscape"
            alt="Integrations Background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <i className="ri-links-line mr-2"></i>
              System Integrations
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Seamless
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Integrations
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Connect Business Central with Shopify, Power BI, CRM systems, and more for unified business operations
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
                Integration
                <span className="block text-blue-400">Expertise</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Our integration solutions create a unified business ecosystem where all your systems work together seamlessly. We specialize in connecting Business Central with popular platforms like Shopify, Power BI, and various CRM systems.
                </p>
                <p className="text-lg leading-relaxed">
                  With real-time data synchronization and automated workflows, you'll eliminate manual data entry, reduce errors, and gain comprehensive visibility across your entire business operation.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
                    <div className="text-sm text-gray-400">Integrations Built</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime Achieved</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Integration%20dashboard%20showing%20connected%20business%20systems%2C%20API%20connections%20between%20Business%20Central%2C%20Shopify%2C%20Power%20BI%20and%20CRM%2C%20modern%20interface%20with%20data%20flow%20visualization%2C%20clean%20professional%20design%20with%20blue%20and%20green%20accents&width=800&height=600&seq=integrations-overview-001&orientation=landscape"
                alt="Integrations Overview"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Integration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive integration solutions for popular business platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeIntegration === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveIntegration(index)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeIntegration === index 
                    ? `bg-gradient-to-br ${getColorClasses(integration.color).bg} ${getColorClasses(integration.color).border} shadow-xl ${getColorClasses(integration.color).shadow}` 
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50'
                }`}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 ${
                    activeIntegration === index 
                      ? `bg-gradient-to-r ${getColorClasses(integration.color).bg}` 
                      : 'bg-gray-700/50'
                  }`}>
                    <i className={`${integration.icon} text-2xl ${
                      activeIntegration === index ? getColorClasses(integration.color).text : 'text-gray-400'
                    }`}></i>
                  </div>
                  <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                    activeIntegration === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {integration.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    activeIntegration === index ? getColorClasses(integration.color).text : 'text-gray-500'
                  }`}>
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Integration Details */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${getColorClasses(integrations[activeIntegration].color).bg} rounded-xl mr-4`}>
                    <i className={`${integrations[activeIntegration].icon} text-3xl ${getColorClasses(integrations[activeIntegration].color).text}`}></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {integrations[activeIntegration].title}
                    </h3>
                    <p className={`${getColorClasses(integrations[activeIntegration].color).text} mt-2`}>
                      {integrations[activeIntegration].description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {integrations[activeIntegration].features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className={`ri-check-line ${getColorClasses(integrations[activeIntegration].color).text} mr-3 text-lg mt-0.5 flex-shrink-0`}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                  <ul className="space-y-3">
                    {integrations[activeIntegration].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className={`ri-star-line ${getColorClasses(integrations[activeIntegration].color).text} mr-3 text-lg mt-0.5 flex-shrink-0`}></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={`https://readdy.ai/api/search-image?query=Professional%20team%20working%20on%20$%7Bintegrations%5BactiveIntegration%5D.title.toLowerCase%28%29%7D%20with%20Business%20Central%2C%20modern%20office%20with%20multiple%20monitors%20showing%20integration%20dashboards%2C%20clean%20workspace%20with%20$%7Bintegrations%5BactiveIntegration%5D.color%7D%20accent%20lighting%2C%20collaborative%20development%20environment&width=600&height=500&seq=integration-${activeIntegration + 1}&orientation=landscape`}
                  alt={integrations[activeIntegration].title}
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Integration
              <span className="block text-blue-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures secure, reliable, and scalable integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationProcess.map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-blue-500/30">
                    <i className={`${phase.icon} text-2xl text-blue-400`}></i>
                  </div>
                  {index < integrationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.phase}</h3>
                <p className="text-gray-300 mb-3">{phase.description}</p>
                <div className="text-sm text-blue-400 font-semibold">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Connect
            <span className="block text-blue-400">Your Systems?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your integration needs and create a unified business ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-links-line text-xl"></i>
                  Start Integration
                </span>
              </button>
            </Link>
            <Link href="/">
              <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
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