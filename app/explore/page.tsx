'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, ArrowRight, Globe } from 'lucide-react'
import DestinationCard from '@/components/ui/DestinationCard'

// Mock destinations data
const destinations = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    image: '/images/paper-texture.png',
    description: 'The City of Light captivates with its iconic Eiffel Tower, world-class museums, and charming café culture. Stroll along the Seine, explore historic neighborhoods, and indulge in exquisite cuisine.',
    popularFor: ['Architecture', 'Museums', 'Cuisine', 'Romance'],
    topJourneys: 15
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    image: '/images/paper-texture.png',
    description: 'Ancient temples, stunning gardens, and traditional tea houses create a magical atmosphere in Japan\'s cultural heart. Experience centuries of tradition amidst serene natural beauty.',
    popularFor: ['Temples', 'Gardens', 'Traditional Culture', 'Cuisine'],
    topJourneys: 12
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    image: '/images/paper-texture.png',
    description: 'Gaudí\'s fantastical architecture, vibrant street life, and Mediterranean beaches make this Catalan capital a feast for the senses. Experience tapas, art, and stunning coastal views.',
    popularFor: ['Architecture', 'Beaches', 'Cuisine', 'Nightlife'],
    topJourneys: 9
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    image: '/images/paper-texture.png',
    description: 'Lose yourself in the maze-like medina, vibrant souks, and ornate palaces. This ancient imperial city blends Arabic, Berber, and French influences into a unique cultural tapestry.',
    popularFor: ['Markets', 'History', 'Architecture', 'Cuisine'],
    topJourneys: 7
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    image: '/images/paper-texture.png',
    description: 'Dramatic volcanic landscapes, whitewashed buildings with blue domes, and spectacular sunsets over the Aegean Sea make this Greek island an unforgettable destination.',
    popularFor: ['Sunsets', 'Views', 'Architecture', 'Beaches'],
    topJourneys: 11
  },
  {
    id: 'new-york',
    name: 'New York City',
    country: 'United States',
    image: '/images/paper-texture.png',
    description: 'The ultimate metropolis offers iconic skyscrapers, diverse neighborhoods, world-class museums, and a thriving arts scene. Experience the energy of the city that never sleeps.',
    popularFor: ['Museums', 'Architecture', 'Shopping', 'Theater'],
    topJourneys: 14
  }
]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter destinations based on search query
  const filteredDestinations = destinations.filter(destination => 
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.country.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Explore Destinations</h1>
        <p className="text-ink/70 max-w-2xl mx-auto mb-8">
          Discover beautiful locations around the world and get inspiration for your next adventure
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 bg-paper border border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink/50 w-5 h-5" />
        </div>
      </div>
      
      {/* Featured Destination */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <Globe className="w-5 h-5 text-sepia mr-2" />
          <h2 className="font-display text-2xl">Featured Destination</h2>
        </div>
        
        <div className="bg-cream rounded-lg overflow-hidden border border-ink/10 shadow-vintage">
          <div className="h-72 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/paper-texture.png)' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-display text-3xl md:text-4xl text-paper mb-2">Venice, Italy</h3>
              <p className="text-paper/90 max-w-xl mb-4">
                A floating city of canals, bridges, and historic architecture. Experience the magic of gondola rides, stunning Byzantine art, and charming piazzas.
              </p>
              <Link href="/explore/venice" className="vintage-button py-2 px-4">
                Explore Venice
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popular Destinations Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl mb-6">Popular Destinations</h2>
        
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <Link
                href={`/explore/${destination.id}`}
                key={destination.id}
                className="bg-cream rounded-lg overflow-hidden border border-ink/10 shadow-vintage hover:shadow-vintage-hover transition-shadow duration-300"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-1">{destination.name}</h3>
                  <div className="flex items-center text-ink/70 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{destination.country}</span>
                  </div>
                  <p className="text-sm mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {destination.popularFor.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-paper rounded-full border border-ink/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-ink/60">
                    {destination.topJourneys} traveler {destination.topJourneys === 1 ? 'story' : 'stories'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-cream rounded-lg border border-ink/10">
            <p className="text-ink/70">No destinations found matching your search.</p>
          </div>
        )}
      </div>
      
      {/* Featured Journeys (Blog Style) */}
      <div className="mb-12">
        <h2 className="font-display text-2xl mb-6">Featured Travel Stories</h2>
        
        <div className="space-y-8">
          {/* Blog style entry 1 */}
          <article className="bg-cream rounded-lg border border-ink/10 shadow-vintage overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/paper-texture.png)' }}></div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-display text-2xl mb-2">A Week in the French Riviera</h3>
                <div className="flex items-center text-ink/70 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Nice, Cannes, Monaco</span>
                </div>
                <p className="mb-4">
                  Azure waters, glamorous beaches, and charming coastal towns await along the Mediterranean coast. Experience the perfect blend of relaxation and sophistication that has attracted artists and celebrities for generations.
                </p>
                <p className="text-sm text-ink/60 mb-4">By Emily Laurent | June 15, 2023</p>
                <Link href="/trips/french-riviera" className="text-sepia hover:underline inline-flex items-center">
                  Read this journey 
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </article>
          
          {/* Blog style entry 2 */}
          <article className="bg-cream rounded-lg border border-ink/10 shadow-vintage overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/paper-texture.png)' }}></div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-display text-2xl mb-2">Walking the Ancient Streets of Rome</h3>
                <div className="flex items-center text-ink/70 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Rome, Italy</span>
                </div>
                <p className="mb-4">
                  From the imposing Colosseum to the majestic Vatican City, every step in Rome reveals another layer of history. Discover hidden piazzas, throw coins in the Trevi Fountain, and indulge in authentic pasta and gelato as you explore the Eternal City.
                </p>
                <p className="text-sm text-ink/60 mb-4">By Marco Romano | May 28, 2023</p>
                <Link href="/trips/rome-walking" className="text-sepia hover:underline inline-flex items-center">
                  Read this journey 
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
} 