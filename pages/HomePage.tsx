import React from 'react';
import { useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Find Your Dream Home With Us</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">Discover a place you'll love to live. We offer the best properties at the best prices.</p>
                <Button onClick={() => navigate('/properties')}>View Properties</Button>
            </div>
        </div>
    );
};

const FeaturedProperties = () => {
  const featured = properties.slice(0, 3);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-extrabold text-center text-secondary mb-4">Featured Properties</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Explore our handpicked selection of premier properties, available exclusively for you.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, index) => 
            <AnimatedSection key={property.id} delay={index * 150}>
              <PropertyCard property={property} />
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const features = [
    { title: "Trusted Agents", description: "Our team of experienced and licensed agents is dedicated to your success.", icon: "🤝" },
    { title: "Easy Process", description: "We streamline the buying and selling process to make it as smooth as possible.", icon: "✅" },
    { title: "Best Prices", description: "We leverage market data to ensure you get the best value for your investment.", icon: "💲" },
  ];

  const handleCardClick = () => {
    navigate('/about');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-extrabold text-center text-secondary mb-4">Why Choose Skyline Realty?</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">We provide a complete service for the sale, purchase or rental of real estate.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 150} className="h-full">
              <div 
                className="bg-gray-50 p-8 h-full rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer flex flex-col"
                onClick={handleCardClick}
                onKeyPress={(e) => e.key === 'Enter' && handleCardClick()}
                tabIndex={0}
                role="link"
                aria-label={`Learn more about ${feature.title}`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaBanner = () => {
    return (
        <section className="bg-primary">
            <AnimatedSection>
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      <span className="block">Ready to find your new home?</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-orange-100">Let's get started on your real estate journey together. Our experts are here to help.</p>
                  <div className="mt-8 flex justify-center">
                      <div className="inline-flex rounded-md shadow">
                           <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-orange-50">
                              Get in touch today
                          </a>
                      </div>
                  </div>
              </div>
            </AnimatedSection>
        </section>
    );
};


const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <CtaBanner />
    </div>
  );
};

export default HomePage;