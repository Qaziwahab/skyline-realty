
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Property } from '../types';
import PropertyGridView from '../components/PropertyGridView';
import PropertyMapView from '../components/PropertyMapView';
import { GridIcon, MapIcon } from '../components/IconComponents';

// Detail View Component (rendered when an ID is in the URL)
const PropertyDetailView: React.FC<{ property: Property }> = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-8">
            <button onClick={() => navigate('/properties')} className="text-primary font-semibold hover:underline">&larr; Back to Listings</button>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <img src={property.image.replace('600/400', '800/600')} alt={property.title} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full flex flex-col">
              <h1 className="text-4xl font-extrabold text-secondary mb-2">{property.title}</h1>
              <p className="text-lg text-gray-500 mb-4">{property.address}</p>
              <p className="text-5xl font-extrabold text-primary mb-6">{property.price}</p>
              <div className="prose prose-lg text-gray-600 mb-auto">
                <h3 className="text-xl font-bold text-secondary">Description</h3>
                <p>
                  Discover this exquisite property, perfectly situated in a prime location. This home boasts modern amenities, spacious living areas, and breathtaking views. Ideal for families and professionals alike, it offers a unique blend of comfort and luxury.
                </p>
                <p>
                  The interior features an open-concept layout, hardwood floors, and a gourmet kitchen with state-of-the-art appliances. Large windows flood the space with natural light, creating a warm and inviting atmosphere.
                </p>
              </div>
              <div className="mt-8">
                <Button fullWidth onClick={() => navigate('/contact')}>Inquire About This Property</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};


// Listing View Component (Grid or Map)
const PropertyListingPage = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <AnimatedSection>
              <h1 className="text-5xl font-extrabold text-secondary">Our Properties</h1>
              <p className="mt-4 text-lg text-gray-600">Browse our curated list of available properties.</p>
            </AnimatedSection>
          </div>

          {/* View Toggle */}
          <AnimatedSection>
            <div className="flex justify-center mb-8" role="tablist" aria-label="Property view toggle">
                <div className="inline-flex rounded-full bg-gray-200 p-1">
                    <button
                        onClick={() => setViewMode('grid')}
                        role="tab"
                        aria-selected={viewMode === 'grid'}
                        aria-controls="grid-view"
                        id="grid-tab"
                        className={`px-6 py-2 text-sm font-semibold rounded-full flex items-center gap-2 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-300'}`}
                    >
                        <GridIcon />
                        Grid View
                    </button>
                    <button
                        onClick={() => setViewMode('map')}
                        role="tab"
                        aria-selected={viewMode === 'map'}
                        aria-controls="map-view"
                        id="map-tab"
                        className={`px-6 py-2 text-sm font-semibold rounded-full flex items-center gap-2 transition-colors ${viewMode === 'map' ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-300'}`}
                    >
                       <MapIcon />
                        Map View
                    </button>
                </div>
            </div>
          </AnimatedSection>
  
          {viewMode === 'grid' ? (
              <div id="grid-view" role="tabpanel" aria-labelledby="grid-tab">
                <PropertyGridView />
              </div>
          ) : (
              <div id="map-view" role="tabpanel" aria-labelledby="map-tab">
                <AnimatedSection>
                    <PropertyMapView properties={properties} />
                </AnimatedSection>
              </div>
          )}
        </div>
      </div>
    );
}

// Main Page Component that decides which view to render
const PropertiesPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (id) {
        const property = properties.find(p => p.id === Number(id));

        if (!property) {
            return (
              <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 text-center px-4">
                <h1 className="text-4xl font-bold text-secondary">Property Not Found</h1>
                <p className="mt-4 text-gray-600">We couldn't find the property you're looking for.</p>
                <div className="mt-8">
                    <Button onClick={() => navigate('/properties')}>Back to Properties</Button>
                </div>
              </div>
            );
        }
        return <PropertyDetailView property={property} />;
    }

    return <PropertyListingPage />;
};

export default PropertiesPage;