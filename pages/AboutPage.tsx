import React from 'react';
import { teamMembers } from '../data/properties';
import { TeamMember } from '../types';
import AnimatedSection from '../components/AnimatedSection';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img className="mx-auto h-48 w-48 rounded-full object-cover shadow-lg" src={member.image} alt={member.name} />
        <h3 className="mt-6 text-xl font-bold text-secondary">{member.name}</h3>
        <p className="text-primary font-semibold">{member.role}</p>
    </div>
);

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-secondary">About Skyline Realty</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier partner in navigating the dynamic world of real estate. We are committed to excellence, integrity, and your satisfaction.
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
                <img src="https://picsum.photos/seed/about/800/600" alt="Office building" className="rounded-lg shadow-2xl"/>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="prose prose-lg text-gray-600">
                  <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
                  <p>
                      Founded in 2005, Skyline Realty began with a simple mission: to revolutionize the real estate experience. We saw a need for a client-centric agency that prioritized transparency, communication, and personalized service over quick commissions.
                  </p>
                  <p>
                      Over the years, we've grown from a small boutique firm into one of the most respected names in the industry, all while holding true to our founding principles. Our success is built on the lasting relationships we forge with our clients, helping them achieve their dreams one property at a time.
                  </p>
                  <p>
                      At Skyline Realty, we don't just sell houses; we build communities and create homes.
                  </p>
              </div>
            </AnimatedSection>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-extrabold text-secondary">Meet Our Expert Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The driving force behind our success is our team of dedicated and passionate professionals.
            </p>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 150}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
