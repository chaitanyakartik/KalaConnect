// src/data/db.js
export const categories = [
  {
    id: 'pottery',
    name: 'Pottery',
    description: 'Clay creations, shaped by hand and fired with passion.',
    image: '/images/Pottery Img.jpeg', // We will place images in public/assets/
    items: [
      { id: 'pots', name: 'Pots', image: '/images/Pottery/pots.jpg' },
      { id: 'decoration', name: 'Decoration Items', image: '/images/Pottery/decoration.jpg' },
      { id: 'kitchen-utensils', name: 'Kitchen Utensils', image: '/images/Pottery/utensils.jpg' },
      { id: 'toys', name: 'Toys', image: '/images/Pottery/toys.jpg' },
    ],
  },
  {
    id: 'fishing',
    name: 'Fishing',
    description: 'Essential gear, handcrafted for the dedicated angler.',
    image: '/images/Fishing Img.jpeg', // We will place images in public/assets/
    items: [
      { id: 'fishnets', name: 'Fishnets', image: '/images/Fishing/fishnets.jpg' },
      { id: 'boats', name: 'Boats', image: '/images/Fishing/boats.jpg' },
      { id: 'equipment', name: 'Fishing Equipment', image: '/images/Fishing/equipment.jpg' },
    ],
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    description: 'Weaving culture and tradition into everyday art.',
    image: '/images/Crafts Img.jpeg', // We will place images in public/assets/
    items: [
      { id: 'wooden-toys', name: 'Wooden Toys', image: '/images/Handicrafts/wooden-toys.jpg' },
      { id: 'saris', name: 'Saris', image: '/images/Handicrafts/saris.jpg' },
      { id: 'slippers', name: 'Slippers', image: '/images/Handicrafts/slippers.jpg'},
    ],
    },
    {
      id: 'textiles',
      name: 'Textiles',
      description: 'Vibrant fabrics and intricate designs from skilled weavers.',
      image: '/images/Textiles Img.jpg', // We will place images in public/assets/
      items: [
        { id: 'fabrics', name: 'Fabrics', image: '/images/Textiles/fabrics.jpg' },
        { id: 'saris', name: 'Saris', image: '/images/Textiles/saris.jpg' },
        { id: 'scarves', name: 'Scarves', image: '/images/Textiles/scarves.jpg' },
        { id: 'home-decor', name: 'Home Decor', image: '/images/Textiles/home-decor.jpg' },
      ],
  }
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
        
  },
  {// adding more artisans for pottery stuff
    id: 5,
    name: 'Anil Mehta',
    origin: 'Kutch, Gujarat',
    bio: 'Specializes in traditional Kutch pottery with modern twists.',
    crafts: [
      { itemId: 'pots', estimatedPrice: '₹1000 - ₹3000' },
      { itemId: 'kitchen-utensils', estimatedPrice: '₹800 - ₹2000' },
    ],
  },
  {
    id: 6,
    name: 'Radha Iyer',
    origin: 'Chennai, Tamil Nadu',
    bio: 'Expert in making decorative ceramic items and vases.',
    crafts: [{ itemId: 'decoration', estimatedPrice: '₹1500 - ₹4000' }],
    }
];