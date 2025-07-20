
'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://formsubmit.co/rahul@upscalesolution.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: ''
        });
      } else {
        setSubmitStatus('There was an error sending your message. Please try again or contact us through our contact number (+91 9717415206) directly.');
      }
    } catch (error) {
      setSubmitStatus('There was an error sending your message. Please try again or contact us through our contact number (+91 9717415206) directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ready to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Get Started?
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Schedule your free consultation today and discover how Business Central can transform your business operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Get Your Free Consultation
                </h3>

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-gray-300 text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-sm"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-sm"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-300 text-sm font-semibold mb-2">
                      Service Interest
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-sm appearance-none pr-8 cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="implementation">Implementation & Setup</option>
                        <option value="custom-development">Custom Module Development</option>
                        <option value="integrations">Shopify, Power BI & CRM Integrations</option>
                        <option value="training">Training & Support</option>
                        <option value="migration">Data Migration & UAT</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none text-sm"
                      placeholder="Tell us about your Business Central needs, current challenges, and project goals..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-400 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-send-plane-line"></i>
                        Send Message
                      </span>
                    )}
                  </button>

                  {submitStatus && (
                    <div className={`p-4 rounded-xl text-sm ${submitStatus.includes('error') || submitStatus.includes('There was')
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Ready to transform your business with Business Central? Our experts are here to help you every step of the way.
                </p>
              </div>

              {/* Quick contact options */}
              <div className="grid gap-6">
                <a
                  href="https://wa.me/919717415206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl">
                    <i className="ri-whatsapp-line text-2xl text-green-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-400 text-sm">Quick consultation</p>
                  </div>
                </a>


                <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl">
                    <i className="ri-calendar-line text-2xl text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Schedule Call</h4>
                    <p className="text-gray-400 text-sm">Book a time that works for you</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl">
                    <i className="ri-mail-line text-2xl text-purple-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-400 text-sm">rahul@upscalesolution.com</p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <i className="ri-time-line text-2xl text-cyan-400"></i>
                  <h4 className="text-white font-semibold">Quick Response</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We typically respond within 2-4 hours during business hours. For urgent matters, please call us directly or use WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
