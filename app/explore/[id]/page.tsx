import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, MapPin, Star, Users, Calendar, Globe } from 'lucide-react'

// Generate static params for known destination IDs at build time
export function generateStaticParams() {
  // In a real app, this would fetch all destination IDs from the database
  // For the demo, we'll return a few sample IDs
  return [
    { id: 'venice' },
    { id: 'paris' },
    { id: 'tokyo' },
    { id: 'florence' },
    { id: 'verona' },
    { id: 'milan' }
  ]
}

// Server Component for the destination page
export default function DestinationPage({ params }: { params: { id: string } }) {
  const destinationId = params.id;
  
  // Mock destination data (in a real app, this would be fetched server-side)
  const destination = {
    id: destinationId,
    name: 'Venice',
    country: 'Italy',
    description: 'A city of timeless beauty, where waterways replace streets and history permeates every corner. Venice charms visitors with its unique character, stunning architecture, and rich cultural heritage.',
    coverImage: '/images/paper-texture.png',
    rating: 4.8,
    totalReviews: 468,
    bestMonthsToVisit: ['April', 'May', 'September', 'October'],
    travelersPerMonth: 150000
  };

  return (
    <main className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto p-6">
        <Link href="/explore" className="flex items-center gap-1 text-sm hover:text-sepia mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Explore
        </Link>
        
        <div className="bg-cream rounded-lg border border-ink/10 overflow-hidden shadow-vintage mb-8">
          <div 
            className="h-64 bg-cover bg-center relative"
            style={{ backgroundImage: 'url(/images/paper-texture.png)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-3xl md:text-4xl font-display text-paper mb-2">{destination.name}</h1>
              <div className="flex items-center text-paper/80">
                <Globe className="w-4 h-4 mr-1" />
                {destination.country}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm bg-paper px-3 py-1 rounded shadow-sm">
                <Star className="w-4 h-4 text-amber-500 mr-1" />
                <span>{destination.rating} ({destination.totalReviews} reviews)</span>
              </div>
              <div className="flex items-center text-sm bg-paper px-3 py-1 rounded shadow-sm">
                <Users className="w-4 h-4 mr-1" />
                <span>{(destination.travelersPerMonth / 1000).toFixed(0)}k+ travelers/month</span>
              </div>
              <div className="flex items-center text-sm bg-paper px-3 py-1 rounded shadow-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Best: {destination.bestMonthsToVisit.join(', ')}</span>
              </div>
            </div>
            
            <p className="mb-8">{destination.description}</p>
            
            <div>
              <h2 className="text-2xl font-display mb-4">Static Destination Page for ID: {destinationId}</h2>
              <p>This is a simplified static version for export. For the full interactive page, view in development mode.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 