
'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import WhyBusinessCentral from './components/WhyBusinessCentral';
import Services from './components/Services';
import WhyUpscale from './components/WhyUpscale';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <WhyBusinessCentral />
      <Services />
      <WhyUpscale />
      <Testimonials />
      <CaseStudies />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
