import Journey, { User } from '../models/Journey';

// Mock Users
export const users: User[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    username: '@alexmorgan',
    avatar: null,
  },
  {
    id: '2',
    name: 'Sophie Laurent',
    username: '@sophielaurent',
    avatar: null,
  },
  {
    id: '3',
    name: 'Marco Bianchi',
    username: '@marcobianchi',
    avatar: null,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    username: '@emmawilson',
    avatar: null,
  },
  {
    id: '5',
    name: 'Lena Schmidt',
    username: '@lenaschmidt',
    avatar: null,
  },
];

// Mock Journeys
export const journeys: Journey[] = [
  {
    id: '1',
    title: 'Summer in Barcelona',
    destination: 'Barcelona, Spain',
    description: 'Exploring the architectural wonders and beaches of Barcelona over a week in June. This trip included visits to Sagrada Familia, Park Güell, and Gothic Quarter, as well as plenty of time to enjoy the Mediterranean beaches and local cuisine.',
    coverImage: '/images/barcelona-placeholder.jpg',
    startDate: 'June 15, 2023',
    endDate: 'June 22, 2023',
    days: 7,
    travelers: 2,
    author: users[0],
    isPublished: true,
    isPrivate: false,
    stats: {
      likes: 48,
      comments: 12,
      views: 156
    },
    locations: [
      'Sagrada Familia',
      'Park Güell',
      'Gothic Quarter',
      'La Barceloneta Beach',
      'La Boqueria Market',
      'Casa Batlló'
    ],
    days_detail: [
      {
        day: 1,
        date: 'June 15, 2023',
        title: 'Arrival and First Impressions',
        description: 'Arrived in Barcelona and settled into our accommodation. Explored the neighborhood and had dinner at a local tapas restaurant.',
        activities: [
          { type: 'note', content: 'Flight arrived at 2pm at Barcelona El Prat Airport' },
          { type: 'activity', content: 'Check-in at Boutique Hotel in Eixample district' },
          { type: 'meal', content: 'Dinner at La Tapería - tried traditional Spanish tapas' },
          { type: 'activity', content: 'Evening stroll down Las Ramblas' }
        ],
        accommodation: 'Boutique Hotel Barcelona, Eixample District',
        photos: [
          { url: '/images/barcelona-day1-1.jpg', caption: 'View from hotel room' },
          { url: '/images/barcelona-day1-2.jpg', caption: 'First tapas experience' }
        ]
      },
      {
        day: 2,
        date: 'June 16, 2023',
        title: 'Gaudí Day',
        description: 'Dedicated the day to exploring Antoni Gaudí\'s architectural masterpieces, starting with the Sagrada Familia and then Park Güell.',
        activities: [
          { type: 'activity', content: 'Morning visit to Sagrada Familia (9am-12pm)' },
          { type: 'meal', content: 'Lunch at Café near Park Güell' },
          { type: 'activity', content: 'Afternoon at Park Güell (2pm-5pm)' },
          { type: 'note', content: 'The view from Park Güell over Barcelona was breathtaking' },
          { type: 'meal', content: 'Dinner at El Nacional food hall' }
        ],
        accommodation: 'Boutique Hotel Barcelona, Eixample District',
        photos: [
          { url: '/images/barcelona-day2-1.jpg', caption: 'Inside Sagrada Familia' },
          { url: '/images/barcelona-day2-2.jpg', caption: 'Park Güell mosaics' },
          { url: '/images/barcelona-day2-3.jpg', caption: 'Barcelona skyline from Park Güell' }
        ]
      },
      {
        day: 3,
        date: 'June 17, 2023',
        title: 'Gothic Quarter & Beach Day',
        description: 'Explored the historic Gothic Quarter in the morning, then spent the afternoon relaxing at La Barceloneta Beach.',
        activities: [
          { type: 'activity', content: 'Morning walking tour of Gothic Quarter (10am-12pm)' },
          { type: 'note', content: 'Barcelona Cathedral was impressive with its Gothic architecture' },
          { type: 'meal', content: 'Lunch at Plaza Real' },
          { type: 'activity', content: 'Afternoon at La Barceloneta Beach' },
          { type: 'meal', content: 'Seafood dinner at beachfront restaurant' }
        ],
        accommodation: 'Boutique Hotel Barcelona, Eixample District',
        photos: [
          { url: '/images/barcelona-day3-1.jpg', caption: 'Gothic Quarter streets' },
          { url: '/images/barcelona-day3-2.jpg', caption: 'La Barceloneta Beach' }
        ]
      }
    ],
    createdAt: '2023-06-25T10:30:00Z',
    updatedAt: '2023-06-30T15:45:00Z'
  },
  {
    id: '2',
    title: 'Toulouse City Break',
    destination: 'Toulouse, France',
    description: 'A weekend getaway to the pink city of France. Explored the historic center, visited museums, and enjoyed the local cuisine.',
    coverImage: '/images/toulouse-placeholder.jpg',
    startDate: 'April 5, 2023',
    endDate: 'April 8, 2023',
    days: 3,
    travelers: 1,
    author: users[0],
    isPublished: true,
    isPrivate: false,
    stats: {
      likes: 36,
      comments: 8,
      views: 102
    },
    locations: [
      'Capitole de Toulouse',
      'Basilica of Saint-Sernin',
      'Musée des Augustins',
      'Japanese Garden',
      'Victor Hugo Market'
    ],
    days_detail: [
      {
        day: 1,
        date: 'April 5, 2023',
        title: 'Arrival in the Pink City',
        description: 'Arrived in Toulouse and explored the city center, visiting the Capitole and walking along the Garonne River.',
        activities: [
          { type: 'note', content: 'Train arrived at 11am at Toulouse-Matabiau' },
          { type: 'activity', content: 'Check-in at hotel near Capitole' },
          { type: 'meal', content: 'Lunch at a café in Place du Capitole' },
          { type: 'activity', content: 'Afternoon visit to Capitole de Toulouse' },
          { type: 'activity', content: 'Evening walk along Garonne River' },
          { type: 'meal', content: 'Dinner with cassoulet, a local specialty' }
        ],
        accommodation: 'Hôtel Albert Premier, City Center',
        photos: [
          { url: '/images/toulouse-day1-1.jpg', caption: 'Place du Capitole' },
          { url: '/images/toulouse-day1-2.jpg', caption: 'Sunset over Garonne River' }
        ]
      },
      {
        day: 2,
        date: 'April 6, 2023',
        title: 'Museums and Gardens',
        description: 'Visited the Musée des Augustins and spent time in the Japanese Garden.',
        activities: [
          { type: 'meal', content: 'Breakfast at a local bakery' },
          { type: 'activity', content: 'Morning visit to Musée des Augustins' },
          { type: 'meal', content: 'Lunch near the museum' },
          { type: 'activity', content: 'Afternoon at the Japanese Garden' },
          { type: 'activity', content: 'Shopping in city center' },
          { type: 'meal', content: 'Dinner at a bistro in Saint-Cyprien district' }
        ],
        accommodation: 'Hôtel Albert Premier, City Center',
        photos: [
          { url: '/images/toulouse-day2-1.jpg', caption: 'Sculptures at Musée des Augustins' },
          { url: '/images/toulouse-day2-2.jpg', caption: 'Japanese Garden' }
        ]
      },
      {
        day: 3,
        date: 'April 7, 2023',
        title: 'Markets and Basilica',
        description: 'Explored the Victor Hugo Market and visited the Basilica of Saint-Sernin.',
        activities: [
          { type: 'meal', content: 'Breakfast at hotel' },
          { type: 'activity', content: 'Morning visit to Victor Hugo Market' },
          { type: 'meal', content: 'Lunch with fresh produce from the market' },
          { type: 'activity', content: 'Afternoon visit to Basilica of Saint-Sernin' },
          { type: 'note', content: 'The Basilica is the largest Romanesque church in Europe' },
          { type: 'meal', content: 'Farewell dinner with local wine and cheese' }
        ],
        accommodation: 'Hôtel Albert Premier, City Center',
        photos: [
          { url: '/images/toulouse-day3-1.jpg', caption: 'Fresh produce at Victor Hugo Market' },
          { url: '/images/toulouse-day3-2.jpg', caption: 'Basilica of Saint-Sernin interior' }
        ]
      }
    ],
    createdAt: '2023-04-10T09:20:00Z',
    updatedAt: '2023-04-15T14:30:00Z'
  },
  {
    id: '3',
    title: 'Nice and French Riviera',
    destination: 'Nice, France',
    description: 'Exploring the stunning coastline and vibrant culture of Nice and the surrounding French Riviera.',
    coverImage: '/images/nice-placeholder.jpg',
    startDate: 'August 10, 2023',
    endDate: 'August 15, 2023',
    days: 5,
    travelers: 2,
    author: users[0],
    isPublished: true,
    isPrivate: false,
    stats: {
      likes: 72,
      comments: 19,
      views: 243
    },
    locations: [
      'Promenade des Anglais',
      'Old Town (Vieux Nice)',
      'Castle Hill',
      'Monaco',
      'Èze Village',
      'Antibes'
    ],
    days_detail: [
      {
        day: 1,
        date: 'August 10, 2023',
        title: 'Arrival in Nice',
        description: 'Arrived in Nice and spent the day exploring the famous Promenade des Anglais and getting our bearings in the city.',
        activities: [
          { type: 'note', content: 'Flight arrived at 10am at Nice Côte d\'Azur Airport' },
          { type: 'activity', content: 'Check-in at seafront hotel' },
          { type: 'meal', content: 'Lunch at a café on Promenade des Anglais' },
          { type: 'activity', content: 'Afternoon walk along the promenade' },
          { type: 'activity', content: 'Swim at the beach' },
          { type: 'meal', content: 'Dinner in a seafood restaurant near the port' }
        ],
        accommodation: 'Hôtel La Pérouse, Nice',
        photos: [
          { url: '/images/nice-day1-1.jpg', caption: 'View of the Mediterranean from hotel room' },
          { url: '/images/nice-day1-2.jpg', caption: 'Promenade des Anglais' }
        ]
      },
      {
        day: 2,
        date: 'August 11, 2023',
        title: 'Old Town & Castle Hill',
        description: 'Explored the charming narrow streets of Old Town (Vieux Nice) and climbed Castle Hill for panoramic views.',
        activities: [
          { type: 'meal', content: 'Breakfast at hotel terrace' },
          { type: 'activity', content: 'Morning exploring Old Town markets and shops' },
          { type: 'meal', content: 'Lunch at a traditional restaurant in Old Town' },
          { type: 'activity', content: 'Afternoon hike up Castle Hill' },
          { type: 'note', content: 'The views from Castle Hill were absolutely breathtaking' },
          { type: 'meal', content: 'Dinner with typical Niçoise cuisine' }
        ],
        accommodation: 'Hôtel La Pérouse, Nice',
        photos: [
          { url: '/images/nice-day2-1.jpg', caption: 'Colorful buildings in Old Town' },
          { url: '/images/nice-day2-2.jpg', caption: 'Panoramic view from Castle Hill' }
        ]
      },
      {
        day: 3,
        date: 'August 12, 2023',
        title: 'Day Trip to Monaco',
        description: 'Took a day trip to Monaco to see the famous casino, palace, and luxurious marina.',
        activities: [
          { type: 'activity', content: 'Morning bus to Monaco' },
          { type: 'activity', content: 'Visit to Monte Carlo Casino' },
          { type: 'meal', content: 'Lunch near the marina' },
          { type: 'activity', content: 'Afternoon tour of Prince\'s Palace' },
          { type: 'activity', content: 'Stroll around the Formula 1 circuit' },
          { type: 'meal', content: 'Dinner back in Nice' }
        ],
        accommodation: 'Hôtel La Pérouse, Nice',
        photos: [
          { url: '/images/nice-day3-1.jpg', caption: 'Monte Carlo Casino' },
          { url: '/images/nice-day3-2.jpg', caption: 'Luxury yachts in Monaco harbor' }
        ]
      },
      {
        day: 4,
        date: 'August 13, 2023',
        title: 'Medieval Èze Village',
        description: 'Visited the picturesque medieval village of Èze perched on a cliff with stunning sea views.',
        activities: [
          { type: 'activity', content: 'Morning bus to Èze Village' },
          { type: 'activity', content: 'Exploring the medieval streets and artisan shops' },
          { type: 'meal', content: 'Lunch with a view at Château Eza' },
          { type: 'activity', content: 'Visit to the Exotic Garden' },
          { type: 'note', content: 'The village feels like stepping back in time' },
          { type: 'meal', content: 'Dinner back in Nice' }
        ],
        accommodation: 'Hôtel La Pérouse, Nice',
        photos: [
          { url: '/images/nice-day4-1.jpg', caption: 'Stone streets of Èze Village' },
          { url: '/images/nice-day4-2.jpg', caption: 'Mediterranean view from Èze' }
        ]
      },
      {
        day: 5,
        date: 'August 14, 2023',
        title: 'Antibes & Final Day',
        description: 'Explored the coastal town of Antibes, visiting the Picasso Museum and enjoying our last day on the French Riviera.',
        activities: [
          { type: 'activity', content: 'Morning train to Antibes' },
          { type: 'activity', content: 'Visit to Picasso Museum' },
          { type: 'meal', content: 'Lunch in Antibes old town' },
          { type: 'activity', content: 'Afternoon on Antibes beaches' },
          { type: 'activity', content: 'Walk along the ramparts' },
          { type: 'meal', content: 'Farewell dinner in Nice' }
        ],
        accommodation: 'Hôtel La Pérouse, Nice',
        photos: [
          { url: '/images/nice-day5-1.jpg', caption: 'Picasso Museum in Antibes' },
          { url: '/images/nice-day5-2.jpg', caption: 'Sunset on our last evening' }
        ]
      }
    ],
    createdAt: '2023-08-20T11:15:00Z',
    updatedAt: '2023-08-25T16:20:00Z'
  },
  {
    id: '4',
    title: 'Roman Holiday',
    destination: 'Rome, Italy',
    description: 'Exploring the ancient ruins and enjoying the delicious cuisine of the eternal city.',
    coverImage: '/images/rome-placeholder.jpg',
    startDate: 'May 5, 2023',
    endDate: 'May 10, 2023',
    days: 5,
    travelers: 2,
    author: users[1],
    isPublished: true,
    isPrivate: false,
    stats: {
      likes: 124,
      comments: 32,
      views: 310
    },
    locations: [
      'Colosseum',
      'Roman Forum',
      'Vatican City',
      'Trevi Fountain',
      'Pantheon',
      'Spanish Steps'
    ],
    days_detail: [
      {
        day: 1,
        date: 'May 5, 2023',
        title: 'Arrival in Rome',
        description: 'Arrived in Rome and settled into our accommodation near the historic center.',
        activities: [
          { type: 'note', content: 'Flight arrived at Rome Fiumicino at 9am' },
          { type: 'activity', content: 'Check-in at hotel near Piazza Navona' },
          { type: 'meal', content: 'First authentic Italian pasta for lunch' },
          { type: 'activity', content: 'Evening walk to Trevi Fountain' }
        ],
        accommodation: 'Hotel Navona, Rome',
        photos: [
          { url: '/images/rome-day1-1.jpg', caption: 'First glimpse of Rome' },
          { url: '/images/rome-day1-2.jpg', caption: 'Trevi Fountain at dusk' }
        ]
      }
    ],
    createdAt: '2023-05-15T10:00:00Z',
    updatedAt: '2023-05-20T14:30:00Z'
  },
  {
    id: '5',
    title: 'Amsterdam Canals',
    destination: 'Amsterdam, Netherlands',
    description: 'Cycling along the picturesque canals and exploring the vibrant culture of Amsterdam.',
    coverImage: '/images/amsterdam-placeholder.jpg',
    startDate: 'April 3, 2023',
    endDate: 'April 7, 2023',
    days: 4,
    travelers: 1,
    author: users[2],
    isPublished: true,
    isPrivate: false,
    stats: {
      likes: 98,
      comments: 19,
      views: 245
    },
    locations: [
      'Rijksmuseum',
      'Anne Frank House',
      'Van Gogh Museum',
      'Vondelpark',
      'Canal Ring',
      'Dam Square'
    ],
    days_detail: [
      {
        day: 1,
        date: 'April 3, 2023',
        title: 'Arrival in Amsterdam',
        description: 'Arrived in Amsterdam and started exploring the famous canal district.',
        activities: [
          { type: 'note', content: 'Train arrived at Amsterdam Centraal at 11am' },
          { type: 'activity', content: 'Check-in at canal-side hotel' },
          { type: 'meal', content: 'Lunch at a café overlooking the canals' },
          { type: 'activity', content: 'Afternoon canal boat tour' }
        ],
        accommodation: 'Canal House Hotel, Amsterdam',
        photos: [
          { url: '/images/amsterdam-day1-1.jpg', caption: 'View from hotel window' },
          { url: '/images/amsterdam-day1-2.jpg', caption: 'First canal boat tour' }
        ]
      }
    ],
    createdAt: '2023-04-10T12:30:00Z',
    updatedAt: '2023-04-15T16:45:00Z'
  }
];

// Helper Functions
export function getJourneyById(id: string): Journey | undefined {
  return journeys.find(journey => journey.id === id);
}

export function getUserJourneys(userId: string): Journey[] {
  return journeys.filter(journey => journey.author.id === userId);
}

export function getPublishedJourneys(): Journey[] {
  return journeys.filter(journey => journey.isPublished && !journey.isPrivate);
} 