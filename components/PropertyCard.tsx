
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Property } from '../types';
import Button from './Button';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/properties/${property.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col cursor-pointer h-full"
      onClick={handleNavigate}
      onKeyPress={(e) => e.key === 'Enter' && handleNavigate()}
      tabIndex={0}
      role="link"
      aria-label={`View details for ${property.title}`}
    >
      <img className="w-full h-56 object-cover" src={property.image} alt={property.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary mb-2">{property.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{property.address}</p>
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-extrabold text-primary">{property.price}</p>
            {/* The button is now purely visual; the parent div handles the click */}
            <Button as="div">Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
