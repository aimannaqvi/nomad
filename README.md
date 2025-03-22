# Nomad

A nostalgic travel journal application with a vintage aesthetic for documenting your journeys, planning itineraries, and creating beautiful travel memories.

![Nomad](https://placeholder-for-app-screenshot.com)

## Features

- **Beautiful Vintage Journal**: Experience the charm of old-world travel journals with a modern interface
- **Day-by-Day Planning**: Create detailed itineraries for each day of your trip
- **Social Sharing**: Share your completed journeys with friends and the community
- **Photo Galleries**: Upload and showcase your travel photographs
- **Collaborative Trips**: Invite friends to join and contribute to your journeys
- **Draft & Publish**: Save work-in-progress journeys or publish completed ones
- **Interactive Social Feed**: Engage with other travelers' adventures with likes and comments
- **Responsive**: Works on desktop, tablet, and mobile devices

## Initial Destinations

The app includes special features for three initial destinations:
- **Toulouse**: Explore the pink city's charming streets and vibrant culture
- **Nice**: Experience azure waters, colorful markets, and coastal delights
- **Barcelona**: Discover Gaudí's masterpieces, tapas tours, and Mediterranean magic

## Tech Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Maps**: MapLibre GL (open-source maps, no API key required)
- **Real-time Updates**: Socket.io
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- MongoDB connection (local or Atlas)
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nomad.git
cd nomad
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Image Upload
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
nomad/
├── app/                   # Next.js app router
├── components/            # React components
│   ├── ui/                # Basic UI components
│   ├── map/               # Map-related components
│   ├── journal/           # Journal-related components
│   ├── social/            # Social feed components
│   └── ...
├── lib/                   # Utility functions and libraries
├── models/                # Database models
├── public/                # Static assets
│   └── images/            # Image assets
├── styles/                # Global styles
└── types/                 # TypeScript types
```

## User Flow

1. **Create a New Journey**: Users start by entering their destination details
2. **Plan Itinerary**: For each day, users add activities, meals, accommodations
3. **Add Friends**: Invite friends to collaborate on the journey planning
4. **Add Photos**: Upload images for each day or activity
5. **Save or Publish**: Save as draft to continue later or publish to share
6. **Social Interaction**: View, like, and comment on others' published journeys

## Development Workflow

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git commit -m "Add your feature"
```

3. Push to the branch:
```bash
git push origin feature/your-feature-name
```

4. Create a pull request to the main branch.

## Deployment

The application is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Add the environment variables to your Vercel project.
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Font families: Playfair Display, Lora, and Caveat
- Map styling by MapLibre
- Icons from various open-source libraries 