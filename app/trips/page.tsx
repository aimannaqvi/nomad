'use client';

import React from 'react';
import Link from 'next/link';
import { PlusCircle, Clock, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';

// Mock journey data (this would come from a database in a real app)
const mockJourneys = [
  {
    id: 'toulouse-spring-2023',
    title: 'Spring in Toulouse',
    destination: 'Toulouse, France',
    description: 'Exploring the pink city during spring, visiting historic sites and enjoying local cuisine.',
    coverImage: '/images/paper-texture.png',
    startDate: 'Apr 15, 2023',
    endDate: 'Apr 22, 2023',
    days: 7,
    travelers: 2,
    author: {
      name: 'Marie Dubois',
      avatar: '/images/paper-texture.png'
    },
    lastUpdated: '2 days ago'
  },
  {
    id: 'barcelona-summer-2022',
    title: 'Barcelona Summer Escape',
    destination: 'Barcelona, Spain',
    description: 'A week of architecture, beaches, and tapas in the Catalan capital.',
    coverImage: '/images/paper-texture.png',
    startDate: 'July 10, 2022',
    endDate: 'July 18, 2022',
    days: 8,
    travelers: 3,
    author: {
      name: 'Marie Dubois',
      avatar: '/images/paper-texture.png'
    },
    lastUpdated: '6 months ago'
  },
];

export default function TripsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="font-display text-4xl mb-4 md:mb-0">My Journeys</h1>
        <Link 
          href="/trips/new" 
          className="vintage-button py-2 px-4"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Start a New Journey
        </Link>
      </div>
      
      {mockJourneys.length > 0 ? (
        <div className="space-y-6">
          {mockJourneys.map((journey) => (
            <Link 
              href={`/trips/${journey.id}`}
              key={journey.id}
              className="block bg-cream rounded-lg border border-ink/10 shadow-vintage hover:shadow-vintage-hover transition-shadow duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
                <div className="md:col-span-1">
                  <div 
                    className="h-48 md:h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${journey.coverImage})` }}
                  ></div>
                </div>
                <div className="p-6 md:col-span-3 flex flex-col">
                  <div className="flex items-center text-ink/60 text-sm mb-1">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Last updated {journey.lastUpdated}</span>
                  </div>
                  
                  <h2 className="font-display text-2xl mb-1">{journey.title}</h2>
                  
                  <div className="flex items-center text-ink/70 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{journey.destination}</span>
                  </div>
                  
                  <p className="mb-4 text-ink/80">{journey.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <div className="flex items-center text-ink/70 text-sm">
                      <Calendar className="w-4 h-4 mr-1 text-sepia" />
                      <span>{journey.startDate} - {journey.endDate}</span>
                    </div>
                    
                    <div className="flex items-center text-ink/70 text-sm">
                      <Users className="w-4 h-4 mr-1 text-sepia" />
                      <span>{journey.travelers} {journey.travelers === 1 ? 'traveler' : 'travelers'}</span>
                    </div>
                    
                    <div className="ml-auto flex items-center">
                      <span className="text-sepia">Continue reading</span>
                      <ChevronRight className="w-4 h-4 text-sepia" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-cream rounded-lg border border-ink/10 shadow-vintage">
          <h2 className="font-display text-2xl mb-2">Start Your First Journey</h2>
          <p className="text-ink/70 max-w-md mx-auto mb-6">
            Record your travel memories, document your adventures, and share your experiences.
          </p>
          <Link 
            href="/trips/new" 
            className="vintage-button py-2 px-6"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Your First Journey
          </Link>
        </div>
      )}
      
      {/* Featured Journeys Section */}
      <div className="mt-12">
        <h2 className="font-display text-2xl mb-6">Featured Journeys from Travelers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* These are styled in blog format as requested */}
          <article className="bg-cream rounded-lg overflow-hidden border border-ink/10 shadow-vintage">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(/images/paper-texture.png)` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
                <div className="text-paper/90 text-sm">Venice, Italy</div>
                <h3 className="font-display text-xl text-paper">Carnival Magic in Venice</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-ink/70">By Marco Rossi</div>
                <div className="text-xs text-ink/60">February 2023</div>
              </div>
              <p className="text-sm mb-4">
                Experiencing the enchanting atmosphere of Venice Carnival, from elaborate masks to gondola parades.
              </p>
              <Link
                href="/trips/venice-carnival"
                className="text-sepia hover:underline inline-flex items-center text-sm"
              >
                Read this story
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </article>
          
          <article className="bg-cream rounded-lg overflow-hidden border border-ink/10 shadow-vintage">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(/images/paper-texture.png)` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
                <div className="text-paper/90 text-sm">Kyoto, Japan</div>
                <h3 className="font-display text-xl text-paper">Cherry Blossom Season in Kyoto</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-ink/70">By Emma Chen</div>
                <div className="text-xs text-ink/60">April 2023</div>
              </div>
              <p className="text-sm mb-4">
                Wandering through ancient temples adorned with delicate pink cherry blossoms in Japan's cultural heart.
              </p>
              <Link
                href="/trips/kyoto-spring"
                className="text-sepia hover:underline inline-flex items-center text-sm"
              >
                Read this story
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </article>
          
          <article className="bg-cream rounded-lg overflow-hidden border border-ink/10 shadow-vintage">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(/images/paper-texture.png)` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
                <div className="text-paper/90 text-sm">Marrakech, Morocco</div>
                <h3 className="font-display text-xl text-paper">Lost in the Medina</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-ink/70">By James Wilson</div>
                <div className="text-xs text-ink/60">March 2023</div>
              </div>
              <p className="text-sm mb-4">
                Navigating the labyrinthine streets of Marrakech's ancient medina and discovering hidden treasures.
              </p>
              <Link
                href="/trips/marrakech-colors"
                className="text-sepia hover:underline inline-flex items-center text-sm"
              >
                Read this story
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 