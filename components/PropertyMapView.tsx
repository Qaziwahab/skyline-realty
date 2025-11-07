import React, { useState } from 'react';
import { Property } from '../types';
import { useNavigate } from 'react-router-dom';

// A compact card for the map pop-up, inlined for simplicity
const MapPropertyCard: React.FC<{ property: Property, onClose: () => void }> = ({ property, onClose }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden w-64 absolute z-20 transform -translate-x-1/2 -translate-y-full -top-3 left-1/2">
            <button onClick={onClose} className="absolute top-1 right-1 bg-white rounded-full p-1 text-gray-500 hover:text-gray-800 z-30" aria-label="Close property details">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img className="w-full h-32 object-cover" src={property.image} alt={property.title} />
            <div className="p-3">
                <h3 className="text-sm font-bold text-secondary truncate">{property.title}</h3>
                <p className="text-lg font-extrabold text-primary">{property.price}</p>
                <button onClick={() => navigate(`/properties/${property.id}`)} className="text-sm text-primary font-semibold hover:underline mt-1 w-full text-left">View Details &rarr;</button>
            </div>
        </div>
    );
};


const PropertyMapView: React.FC<{ properties: Property[] }> = ({ properties }) => {
    const [activeProperty, setActiveProperty] = useState<Property | null>(null);

    // Bounding box for NYC area for our map simulation
    const bounds = {
        minLat: 40.6, maxLat: 40.9,
        minLng: -74.1, maxLng: -73.7,
    };

    const hamptonsProperty = properties.find(p => p.id === 5);

    const getPosition = (lat: number, lng: number) => {
        // Handle the outlier property in Long Island
        if (hamptonsProperty && lat === hamptonsProperty.latitude && lng === hamptonsProperty.longitude) {
            return { top: '15%', left: '95%' };
        }
        
        const top = 100 - ((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 100;
        const left = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
        return { top: `${top}%`, left: `${left}%` };
    };

    return (
        <div className="relative w-full h-[70vh] bg-gray-200 rounded-lg shadow-inner overflow-hidden border-4 border-white">
            {/* A pseudo map background - purely decorative */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://www.mapbox.com/help/img/getting-started/map-view.png')"}}></div>
            <div className="absolute inset-0 bg-gray-100 mix-blend-multiply"></div>
            
            {properties.map(property => {
                const { top, left } = getPosition(property.latitude, property.longitude);
                return (
                    <div 
                        key={property.id} 
                        className="absolute z-10"
                        style={{ top, left }}
                    >
                        <button 
                            onClick={() => setActiveProperty(property)}
                            className="transform -translate-x-1/2 -translate-y-1/2"
                            aria-label={`Show details for ${property.title}`}
                        >
                            <div className={`w-8 h-8 rounded-full bg-primary border-2 border-white shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-125 ${activeProperty?.id === property.id ? 'scale-125 ring-4 ring-orange-300' : ''}`}>
                                <span className="text-white font-bold text-xs">$</span>
                            </div>
                        </button>
                        {activeProperty?.id === property.id && (
                            <MapPropertyCard property={activeProperty} onClose={() => setActiveProperty(null)} />
                        )}
                    </div>
                );
            })}
             {hamptonsProperty && (
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg text-xs text-gray-700 shadow-md">
                   <p className="font-bold">Note:</p>
                   <p>Beachside Villa is located further east in Long Island.</p>
                </div>
            )}
        </div>
    );
};

export default PropertyMapView;
