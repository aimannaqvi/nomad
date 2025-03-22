'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description?: string;
  popularFor?: string[];
  topJourneys?: number;
}

interface DestinationCardProps {
  destination: Destination;
  compact?: boolean;
}

export default function DestinationCard({ destination, compact = false }: DestinationCardProps) {
  return (
    <div className="bg-cream rounded-lg overflow-hidden border border-ink/10 shadow-vintage h-full flex flex-col">
      {/* Card Image */}
      <div 
        className={`relative bg-cover bg-center ${compact ? 'h-40' : 'h-56'}`}
        style={{ backgroundImage: `url(${destination.image || '/images/paper-texture.png'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="font-display text-xl md:text-2xl text-paper mb-1">{destination.name}</h3>
          <div className="flex items-center text-paper/80">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{destination.country}</span>
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col">
        {!compact && destination.description && (
          <p className="text-sm mb-4">{destination.description}</p>
        )}
        
        {!compact && destination.popularFor && destination.popularFor.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Popular For:</h4>
            <div className="flex flex-wrap gap-2">
              {destination.popularFor.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-paper rounded-full border border-ink/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Card Footer */}
        <div className="mt-auto">
          {destination.topJourneys && !compact && (
            <p className="text-sm text-ink/70 mb-3">
              {destination.topJourneys} {destination.topJourneys === 1 ? 'journey' : 'journeys'} to explore
            </p>
          )}
          
          <Link 
            href={`/explore/${destination.id}`}
            className="vintage-button py-1.5 px-3 text-sm w-full justify-center"
          >
            Explore {destination.name}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
