import React, { useEffect, useRef } from 'react';
import { Globe, Instagram, FileType, Palette } from 'lucide-react';
export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const services = [{
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies to ensure performance, security, and scalability.',
    icon: <Globe className="h-10 w-10 text-primary" />
  }, {
    title: 'Social Media Management',
    description: 'Strategic social media campaigns that engage your audience, build community, and drive meaningful interactions with your brand.',
    icon: <Instagram className="h-10 w-10 text-primary" />
  }, {
    title: 'Content Creation',
    description: 'Compelling, SEO-optimized content that tells your brand story and connects with your target audience across all platforms.',
    icon: <FileType className="h-10 w-10 text-primary" />
  }, {
    title: 'Branding',
    description: 'Comprehensive branding solutions including logo design, brand identity, and brand strategy to establish a strong market presence.',
    icon: <Palette className="h-10 w-10 text-primary" />
  }];
  return <section id="services" className="py-20 bg-white dark:bg-gray-900 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary dark:text-white">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-16">
            We offer comprehensive digital solutions to help your business
            thrive in today's competitive landscape.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="mb-4 p-3 bg-white dark:bg-gray-900 rounded-full inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>)}
          </div>
          <div className="mt-16 text-center">
            <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-block">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>;
};