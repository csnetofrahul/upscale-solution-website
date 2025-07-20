
'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CFO, TechFlow Industries',
      company: 'Manufacturing Company',
      quote: 'Upscale Solution transformed our financial processes completely. The Business Central implementation was seamless, and their support team is exceptional. We saw 40% improvement in reporting efficiency within the first month.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20with%20confident%20smile%2C%20corporate%20headshot%2C%20modern%20office%20background%2C%20business%20attire%2C%20friendly%20and%20approachable%20expression%2C%20high-quality%20portrait%20photography%2C%20clean%20minimal%20style&width=80&height=80&seq=testimonial-1&orientation=squarish'
    },
    {
      name: 'Michael Chen',
      position: 'Operations Director, Global Retail Solutions',
      company: 'Retail Chain',
      quote: 'The integration with our Shopify stores was flawless. Real-time inventory sync has revolutionized our operations. Upscale Solution delivered beyond our expectations with their technical expertise and project management.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20in%20suit%2C%20confident%20executive%20portrait%2C%20modern%20corporate%20environment%2C%20business%20professional%20headshot%2C%20warm%20smile%2C%20leadership%20appearance%2C%20high-quality%20photography&width=80&height=80&seq=testimonial-2&orientation=squarish'
    },
    {
      name: 'Emily Rodriguez',
      position: 'IT Manager, Precision Manufacturing',
      company: 'Industrial Equipment',
      quote: 'Their custom AL extensions perfectly matched our unique workflow requirements. The training sessions were comprehensive, and the documentation was excellent. Our team was productive from day one after go-live.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20woman%20tech%20manager%2C%20business%20portrait%2C%20modern%20office%20setting%2C%20professional%20attire%2C%20confident%20expression%2C%20technology%20background%2C%20clean%20corporate%20photography%20style&width=80&height=80&seq=testimonial-3&orientation=squarish'
    },
    {
      name: 'David Thompson',
      position: 'CEO, Innovation Labs',
      company: 'Technology Startup',
      quote: 'From data migration to Power BI integration, everything was handled with precision. The project finished on time and under budget. Upscale Solution is now our go-to partner for all Business Central needs.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20CEO%20portrait%2C%20business%20executive%20headshot%2C%20modern%20office%20background%2C%20suit%20and%20tie%2C%20confident%20leadership%20appearance%2C%20corporate%20photography%2C%20clean%20professional%20style&width=80&height=80&seq=testimonial-4&orientation=squarish'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Client
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Testimonials
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            See what our clients say about their Business Central transformation journey with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Neon frame */}
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50">
            <div className="bg-gray-900 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                {/* Quote icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-8 mx-auto">
                  <i className="ri-double-quotes-l text-3xl text-cyan-400"></i>
                </div>

                {/* Testimonial content */}
                <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <blockquote className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>

                  {/* Rating stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-2xl text-yellow-400 mx-1"></i>
                    ))}
                  </div>

                  {/* Client info */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50 object-top"
                    />
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-cyan-400 font-semibold">
                        {testimonials[currentSlide].position}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentSlide].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-800/80 hover:bg-cyan-500/80 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-800/80 hover:bg-cyan-500/80 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
