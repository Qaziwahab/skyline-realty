import { Property, TeamMember } from '../types';

export const properties: Property[] = [
  { id: 1, title: "Modern Apartment in NYC", price: "$500,000", address: "123 Main St, New York", image: "https://picsum.photos/seed/p1/600/400", latitude: 40.7580, longitude: -73.9855 },
  { id: 2, title: "Luxury Condo Downtown", price: "$850,000", address: "456 Market Ave, New York", image: "https://picsum.photos/seed/p2/600/400", latitude: 40.7075, longitude: -74.0113 },
  { id: 3, title: "Cozy Family Home", price: "$420,000", address: "789 Pine Rd, Brooklyn", image: "https://picsum.photos/seed/p3/600/400", latitude: 40.6712, longitude: -73.9804 },
  { id: 4, title: "Skyview Penthouse", price: "$1,200,000", address: "222 Skyline Blvd, Queens", image: "https://picsum.photos/seed/p4/600/400", latitude: 40.7447, longitude: -73.9485 },
  { id: 5, title: "Beachside Villa", price: "$960,000", address: "555 Ocean Dr, Long Island", image: "https://picsum.photos/seed/p5/600/400", latitude: 40.8834, longitude: -72.3843 },
  { id: 6, title: "Elegant Loft", price: "$680,000", address: "333 Hudson St, Manhattan", image: "https://picsum.photos/seed/p6/600/400", latitude: 40.7262, longitude: -74.0076 },
  { id: 7, title: "Charming Brownstone", price: "$1,100,000", address: "101 Park Slope, Brooklyn", image: "https://picsum.photos/seed/p7/600/400", latitude: 40.6782, longitude: -73.9814 },
  { id: 8, title: "SoHo Art Gallery Loft", price: "$1,500,000", address: "77 Wooster St, SoHo", image: "https://picsum.photos/seed/p8/600/400", latitude: 40.7243, longitude: -74.0010 },
];

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Jessica Miller", role: "Lead Agent", image: "https://picsum.photos/seed/t1/400/400" },
  { id: 2, name: "David Chen", role: "Senior Broker", image: "https://picsum.photos/seed/t2/400/400" },
  { id: 3, name: "Sarah Jenkins", role: "Marketing Director", image: "https://picsum.photos/seed/t3/400/400" },
];