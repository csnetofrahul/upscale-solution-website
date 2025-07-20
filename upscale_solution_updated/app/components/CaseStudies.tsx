
'use client';

import { useState, useEffect } from 'react';

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('case-studies');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%2C%20clean%20minimal%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20business%20logo%2C%20tech%20startup%20identity%2C%20simple%20geometric%20design&width=120&height=60&seq=logo-1&orientation=landscape',
      company: 'TechFlow Industries',
      industry: 'Manufacturing',
      challenge: 'Manual inventory tracking and disconnected financial systems',
      solution: 'Complete Business Central implementation with custom inventory modules',
      results: [
        '60% reduction in inventory errors',
        '40% faster financial reporting',
        '25% improvement in order fulfillment',
        'Real-time visibility across operations'
      ],
      timeline: '3 months',
      investment: '$45K'
    },
    {
      logo: 'https://readdy.ai/api/search-image?query=Retail%20company%20logo%20design%2C%20modern%20commercial%20branding%2C%20green%20and%20orange%20color%20palette%2C%20professional%20retail%20business%20logo%2C%20clean%20corporate%20identity%2C%20shopping%20and%20commerce%20theme&width=120&height=60&seq=logo-2&orientation=landscape',
      company: 'Global Retail Solutions',
      industry: 'E-commerce',
      challenge: 'Multiple Shopify stores with no centralized management',
      solution: 'Business Central with Shopify integration and Power BI analytics',
      results: [
        'Unified inventory across 5 stores',
        '80% reduction in stock-outs',
        'Automated order processing',
        'Real-time sales analytics'
      ],
      timeline: '4 months',
      investment: '$62K'
    },
    {
      logo: 'https://readdy.ai/api/search-image?query=Industrial%20manufacturing%20company%20logo%2C%20heavy%20machinery%20branding%2C%20steel%20gray%20and%20red%20colors%2C%20industrial%20corporate%20identity%2C%20engineering%20and%20precision%20theme%2C%20professional%20business%20logo&width=120&height=60&seq=logo-3&orientation=landscape',
      company: 'Precision Manufacturing',
      industry: 'Industrial Equipment',
      challenge: 'Complex project costing and resource allocation',
      solution: 'Custom AL extensions for project management and cost tracking',
      results: [
        '50% improvement in project profitability',
        'Accurate resource allocation',
        'Automated cost tracking',
        'Enhanced project visibility'
      ],
      timeline: '5 months',
      investment: '$78K'
    },
    {
      logo: 'https://readdy.ai/api/search-image?query=Technology%20innovation%20lab%20logo%20design%2C%20futuristic%20tech%20branding%2C%20purple%20and%20cyan%20gradient%20colors%2C%20startup%20laboratory%20identity%2C%20innovation%20and%20research%20theme%2C%20modern%20corporate%20logo&width=120&height=60&seq=logo-4&orientation=landscape',
      company: 'Innovation Labs',
      industry: 'Technology',
      challenge: 'Rapid scaling with legacy systems',
      solution: 'Cloud-first Business Central with Azure integration',
      results: [
        'Seamless scaling to 3x revenue',
        '90% reduction in manual processes',
        'Integrated Microsoft 365 workflow',
        'Advanced automation capabilities'
      ],
      timeline: '2 months',
      investment: '$38K'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-cyan-900/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Success Stories &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Case Studies
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Real-world Business Central implementations delivering measurable results across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative h-96 transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className="relative w-full h-full preserve-3d transition-transform duration-700 cursor-pointer"
                   style={{ transformStyle: 'preserve-3d', transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/80 border border-gray-700/50 p-8 flex flex-col items-center justify-center text-center"
                     style={{ backfaceVisibility: 'hidden' }}>
                  <img
                    src={study.logo}
                    alt={`${study.company} logo`}
                    className="w-32 h-16 object-contain mb-6 opacity-90 object-top"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.industry}</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-information-line text-xl animate-pulse"></i>
                    <p className="text-xs mt-1">Hover for details</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/50 p-6 overflow-y-auto"
                     style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="h-full flex flex-col">
                    <h4 className="text-lg font-bold text-white mb-3">Results Achieved</h4>
                    
                    <ul className="space-y-2 mb-4 flex-grow">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-200">
                          <i className="ri-check-line text-cyan-400 mr-2 mt-0.5 text-xs"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-gray-700 pt-4 mt-auto">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-cyan-400 font-semibold">{study.timeline}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Investment:</span>
                        <span className="text-purple-400 font-semibold">{study.investment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap cursor-pointer">
            <span className="flex items-center justify-center gap-2">
              <i className="ri-folder-open-line text-xl"></i>
              View More Case Studies
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
