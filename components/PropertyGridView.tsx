import React, { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';
import AnimatedSection from './AnimatedSection';

const PropertyGridView = () => {
    const [priceRange, setPriceRange] = useState('all');
    const [propertyType, setPropertyType] = useState('all');
  
    return (
      <>
          {/* Filters */}
          <AnimatedSection>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="w-full md:w-1/3">
                <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">Price Range</label>
                <select
                  id="priceRange"
                  name="priceRange"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                >
                  <option value="all">All Prices</option>
                  <option value="under500k">Under $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="over1m">Over $1,000,000</option>
                </select>
              </div>
              <div className="w-full md:w-1/3">
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                >
                  <option value="all">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
            </div>
          </AnimatedSection>
  
          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <AnimatedSection key={property.id} delay={(index % 3) * 150} className="h-full">
                <PropertyCard property={property} />
              </AnimatedSection>
            ))}
          </div>
      </>
    );
}

export default PropertyGridView;
