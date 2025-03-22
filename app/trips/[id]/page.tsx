import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, MapPin, Calendar, Users, Camera, Coffee, Bed, Map, Heart, MessageCircle, Share2, Edit, Plus, CalendarRange, User, ArrowLeft, Compass } from 'lucide-react'
import ActivityTimeline from '@/components/ui/ActivityTimeline'
import VintageMap from '@/components/maps/VintageMap'
import { formatVintageDate, calculateJourneyDuration } from '@/lib/utils'

// Generate static params for known trip IDs at build time
export function generateStaticParams() {
  // In a real app, this would fetch all trip IDs from the database
  // For the demo, we'll return all the sample IDs used in the app
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: 'sample' },
    { id: 'toulouse-spring-2023' },
    { id: 'barcelona-summer-2022' },
    { id: 'venice-fall-2023' },
    { id: 'kyoto-spring-2023' },
    { id: 'example-1' },
    { id: 'venice-carnival' }
  ]
}

// Server Component that renders static journey details
export default function JourneyDetailPage({ params }: { params: { id: string } }) {
  const journeyId = params.id;
  
  // Mock journey data (in a real app, this would be fetched server-side)
  const journey = {
    id: journeyId,
    title: 'Summer in Toulouse',
    destination: 'Toulouse, France',
    description: 'Exploring the pink city\'s charming streets, historic sites, and sampling the local cuisine.',
    coverImage: '/images/paper-texture.png',
    startDate: 'June 15, 2023',
    endDate: 'June 22, 2023',
    days: 7,
    travelers: 2
  };
  
  return (
    <main className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto p-6">
        <Link href="/trips" className="flex items-center gap-1 text-sm hover:text-sepia mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to My Journeys
        </Link>
        
        <div className="bg-cream rounded-lg border border-ink/10 overflow-hidden shadow-vintage mb-8">
          <div 
            className="h-64 bg-cover bg-center relative"
            style={{ backgroundImage: 'url(/images/paper-texture.png)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-3xl md:text-4xl font-display text-paper mb-2">{journey.title}</h1>
              <div className="flex items-center text-paper/80">
                <MapPin className="w-4 h-4 mr-1" />
                {journey.destination}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4 text-sm text-ink/70">
                <div className="flex items-center">
                  <CalendarRange className="w-4 h-4 mr-1" />
                  <span>{journey.startDate} - {journey.endDate}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{journey.travelers} travelers</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="vintage-button py-1">
                  <Heart className="w-4 h-4 mr-1" />
                  Like
                </button>
                <button className="vintage-button py-1">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </button>
              </div>
            </div>
            
            <p className="mb-6">{journey.description}</p>
            
            <div>
              <h2 className="text-2xl font-display mb-4">Static Journey Page for ID: {journeyId}</h2>
              <p>This is a simplified static version for export. For the full interactive page, view in development mode.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 