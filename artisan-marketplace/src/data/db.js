// src/data/db.js

export const categories = [
  {
    id: 'pottery',
    name: 'Pottery',
    description: 'Clay creations, shaped by hand and fired with passion.',
    image: '/assets/pottery.jpg', // We will place images in public/assets/
    items: [
      { id: 'pots', name: 'Pots' },
      { id: 'decoration', name: 'Decoration Items' },
      { id: 'kitchen-utensils', name: 'Kitchen Utensils' },
      { id: 'toys', name: 'Toys' },
    ],
  },
  {
    id: 'fishing',
    name: 'Fishing',
    description: 'Essential gear, handcrafted for the dedicated angler.',
    image: '/assets/fishing.jpg',
    items: [
      { id: 'fishnets', name: 'Fishnets' },
      { id: 'boats', name: 'Boats' },
      { id: 'equipment', name: 'Fishing Equipment' },
    ],
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    description: 'Weaving culture and tradition into everyday art.',
    image: '/assets/handicrafts.jpg',
    items: [
      { id: 'wooden-toys', name: 'Wooden Toys' },
      { id: 'saris', name: 'Saris' },
      { id: 'slippers', name: 'Slippers' },
    ],
  },
];

export const artisans = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    origin: 'Jaipur, Rajasthan',
    bio: 'A third-generation potter keeping ancient traditions alive.',
    // This shows what items this artisan makes
    crafts: [
      { itemId: 'pots', estimatedPrice: '₹800 - ₹2500' },
      { itemId: 'decoration', estimatedPrice: '₹1200 - ₹5000' },
    ],
  },
  {
    id: 2,
    name: 'Sita Devi',
    origin: 'Madurai, Tamil Nadu',
    bio: 'Weaving stories into silk sarees for over 20 years.',
    crafts: [{ itemId: 'saris', estimatedPrice: '₹4000 - ₹15000' }],
  },
  {
    id: 3,
    name: 'Joseph D\'souza',
    origin: 'Goa',
    bio: 'Building and mending nets with techniques passed down from my father.',
    crafts: [{ itemId: 'fishnets', estimatedPrice: '₹1500 - ₹6000' }],
    },
    {
        id: 4,
        name: 'Lakshmi Narayan',
        origin: 'Kanchipuram, Tamil Nadu',
        bio: 'Creating vibrant silk sarees with intricate designs.',
        crafts: [{ itemId: 'saris', estimatedPrice: '₹5000 - ₹20000' }],
        
  }
];