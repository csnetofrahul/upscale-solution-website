'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DataMigrationPage() {
  const [activeMigration, setActiveMigration] = useState(0);
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

    const section = document.getElementById('migration-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const migrationTypes = [
    {
      title: 'Financial Data Migration',
      icon: 'ri-line-chart-line',
      description: 'Complete financial history and accounting data transfer',
      complexity: 'High',
      features: [
        'Chart of accounts mapping',
        'Historical transaction data',
        'Customer and vendor balances',
        'Fixed asset information',
        'Bank account reconciliations'
      ],
      benefits: [
        'Seamless financial continuity',
        'Accurate historical reporting',
        'Preserved audit trails',
        'Compliance maintenance'
      ],
      duration: '2-4 weeks'
    },
    {
      title: 'Inventory & Item Data',
      icon: 'ri-archive-line',
      description: 'Product catalog and inventory information migration',
      complexity: 'Medium',
      features: [
        'Item master data',
        'Inventory quantities and locations',
        'Pricing and cost information',
        'Bill of materials (BOM)',
        'Vendor and purchase history'
      ],
      benefits: [
        'Accurate stock levels',
        'Preserved pricing history',
        'Maintained supplier relationships',
        'Seamless operations continuity'
      ],
      duration: '1-2 weeks'
    },
    {
      title: 'Customer & Sales Data',
      icon: 'ri-user-star-line',
      description: 'Customer relationships and sales history migration',
      complexity: 'Medium',
      features: [
        'Customer master records',
        'Sales order history',
        'Contact information',
        'Credit limits and terms',
        'Sales analytics data'
      ],
      benefits: [
        'Preserved customer relationships',
        'Historical sales insights',
        'Maintained credit policies',
        'Continuous customer service'
      ],
      duration: '1-2 weeks'
    },
    {
      title: 'Operational Data',
      icon: 'ri-settings-3-line',
      description: 'Business processes and operational configuration',
      complexity: 'Low',
      features: [
        'User accounts and permissions',
        'Workflow configurations',
        'Custom fields and settings',
        'Report layouts',
        'System preferences'
      ],
      benefits: [
        'Preserved business processes',
        'Maintained user productivity',
        'Consistent system behavior',
        'Reduced training requirements'
      ],
      duration: '1 week'
    }
  ];

  const migrationProcess = [
    {
      phase: 'Data Assessment',
      description: 'Comprehensive analysis of existing data structure and quality',
      duration: '1 week',
      activities: [
        'Data inventory and mapping',
        'Quality assessment',
        'Dependencies identification',
        'Risk analysis'
      ]
    },
    {
      phase: 'Migration Planning',
      description: 'Detailed migration strategy and timeline development',
      duration: '1 week',
      activities: [
        'Migration sequence planning',
        'Resource allocation',
        'Timeline development',
        'Rollback procedures'
      ]
    },
    {
      phase: 'Data Preparation',
      description: 'Data cleansing and transformation for migration',
      duration: '1-2 weeks',
      activities: [
        'Data cleansing and validation',
        'Format transformation',
        'Error correction',
        'Test data preparation'
      ]
    },
    {
      phase: 'Testing & Validation',
      description: 'Comprehensive testing of migrated data accuracy',
      duration: '1-2 weeks',
      activities: [
        'Test migration execution',
        'Data integrity verification',
        'Performance testing',
        'UAT coordination'
      ]
    },
    {
      phase: 'Production Migration',
      description: 'Final data migration to production environment',
      duration: '1 week',
      activities: [
        'Production migration',
        'Real-time validation',
        'Go-live support',
        'Post-migration monitoring'
      ]
    }
  ];

  const testingApproach = [
    {
      title: 'Automated Testing',
      icon: 'ri-robot-line',
      description: 'Automated scripts for data validation and integrity checks',
      features: [
        'Data completeness verification',
        'Format validation',
        'Business rule compliance',
        'Performance benchmarking'
      ]
    },
    {
      title: 'User Acceptance Testing',
      icon: 'ri-user-settings-line',
      description: 'End-user validation of migrated data and functionality',
      features: [
        'Business process validation',
        'User workflow testing',
        'Data accuracy confirmation',
        'Performance acceptance'
      ]
    },
    {
      title: 'Parallel Testing',
      icon: 'ri-shuffle-line',
      description: 'Side-by-side comparison of old and new systems',
      features: [
        'Comparative analysis',
        'Business continuity testing',
        'Performance comparison',
        'Risk mitigation'
      ]
    },
    {
      title: 'Rollback Testing',
      icon: 'ri-arrow-go-back-line',
      description: 'Emergency rollback procedures and contingency planning',
      features: [
        'Rollback procedure validation',
        'Data recovery testing',
        'Contingency planning',
        'Risk management'
      ]
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'High':
        return 'text-red-400';
      case 'Medium':
        return 'text-yellow-400';
      case 'Low':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="migration-hero" className="pt-24 pb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20data%20migration%20team%20working%20on%20Business%20Central%20database%20transfer%2C%20modern%20IT%20environment%20with%20servers%20and%20multiple%20monitors%20showing%20data%20flow%2C%20secure%20data%20center%20with%20teal%20and%20indigo%20lighting%2C%20technical%20migration%20process%20visualization&width=1920&height=1080&seq=migration-hero-001&orientation=landscape"
            alt="Data Migration Background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
              <i className="ri-database-2-line mr-2"></i>
              Data Migration & UAT
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Secure Data
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                Migration
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive data migration services with thorough testing to ensure seamless business continuity
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
                Migration
                <span className="block text-teal-400">Excellence</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Our data migration services ensure your business-critical information is transferred securely and accurately to Business Central. We handle everything from financial records to customer data with meticulous attention to detail.
                </p>
                <p className="text-lg leading-relaxed">
                  With our comprehensive User Acceptance Testing (UAT) approach, we validate every aspect of your migrated data to ensure complete accuracy and business continuity from day one.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-400">Data Accuracy</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">Zero</div>
                    <div className="text-sm text-gray-400">Data Loss</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Data%20migration%20specialists%20analyzing%20database%20schemas%20and%20mapping%20tables%2C%20modern%20data%20center%20environment%20with%20servers%20and%20analytics%20screens%2C%20secure%20data%20transfer%20visualization%2C%20professional%20IT%20workspace%20with%20teal%20and%20indigo%20lighting&width=800&height=600&seq=migration-overview-001&orientation=landscape"
                alt="Migration Overview"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Types */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Migration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                Types
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized migration services for different types of business data
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {migrationTypes.map((migration, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeMigration === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveMigration(index)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeMigration === index 
                    ? 'bg-gradient-to-br from-teal-500/20 to-indigo-500/20 border-teal-500/50 shadow-xl shadow-teal-500/20' 
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50'
                }`}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 ${
                    activeMigration === index 
                      ? 'bg-gradient-to-r from-teal-500/30 to-indigo-500/30' 
                      : 'bg-gray-700/50'
                  }`}>
                    <i className={`${migration.icon} text-2xl ${
                      activeMigration === index ? 'text-teal-400' : 'text-gray-400'
                    }`}></i>
                  </div>
                  <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                    activeMigration === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {migration.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${getComplexityColor(migration.complexity)}`}>
                      {migration.complexity}
                    </span>
                    <span className={`text-sm transition-colors duration-300 ${
                      activeMigration === index ? 'text-teal-400' : 'text-gray-500'
                    }`}>
                      {migration.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Migration Details */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-xl mr-4">
                    <i className={`${migrationTypes[activeMigration].icon} text-3xl text-teal-400`}></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {migrationTypes[activeMigration].title}
                    </h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className={`text-sm ${getComplexityColor(migrationTypes[activeMigration].complexity)}`}>
                        Complexity: {migrationTypes[activeMigration].complexity}
                      </span>
                      <span className="text-teal-400 text-sm">
                        Duration: {migrationTypes[activeMigration].duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-8">
                  {migrationTypes[activeMigration].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Migration Scope</h4>
                  <ul className="space-y-3">
                    {migrationTypes[activeMigration].features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className="ri-check-line text-teal-400 mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    {migrationTypes[activeMigration].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className="ri-star-line text-indigo-400 mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={`https://readdy.ai/api/search-image?query=Professional%20team%20managing%20$%7BmigrationTypes%5BactiveMigration%5D.title.toLowerCase%28%29%7D%20process%2C%20modern%20data%20center%20with%20servers%20and%20monitoring%20screens%2C%20secure%20database%20migration%20workflow%2C%20technical%20specialists%20working%20with%20teal%20and%20indigo%20lighting&width=600&height=500&seq=migration-${activeMigration + 1}&orientation=landscape`}
                  alt={migrationTypes[activeMigration].title}
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Migration
              <span className="block text-teal-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured 5-phase approach ensures secure and accurate data migration
            </p>
          </div>

          <div className="space-y-8">
            {migrationProcess.map((phase, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-xl mr-4">
                        <span className="text-xl font-bold text-teal-400">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                        <p className="text-teal-400 text-sm">Duration: {phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-gray-300">
                          <i className="ri-check-line text-teal-400 mr-3 text-sm"></i>
                          <span className="text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-full mx-auto">
                      <i className="ri-database-2-line text-3xl text-teal-400"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAT Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              User Acceptance
              <span className="block text-indigo-400">Testing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive testing approach to ensure data integrity and system reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingApproach.map((test, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${test.icon} text-4xl text-teal-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{test.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{test.description}</p>
                <ul className="space-y-2">
                  {test.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center justify-center">
                      <i className="ri-check-line text-teal-400 mr-2 text-xs"></i>
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
            Ready to Migrate
            <span className="block text-teal-400">Your Data?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your data migration requirements and ensure a seamless transition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-database-2-line text-xl"></i>
                  Plan Migration
                </span>
              </button>
            </Link>
            <Link href="/">
              <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-teal-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
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