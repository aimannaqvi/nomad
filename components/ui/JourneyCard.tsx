'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarRange, MapPin, User, Share2, Clock } from 'lucide-react';

interface Journey {
  id: string;
  title: string;
  destination: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  days: number;
  travelers: number;
  description?: string;
  author?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

interface JourneyCardProps {
  journey: Journey;
  compact?: boolean;
}

export default function JourneyCard({ journey, compact = false }: JourneyCardProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="bg-cream rounded-lg overflow-hidden border border-ink/10 shadow-vintage h-full flex flex-col">
      {/* Card Image */}
      <div 
        className={`relative bg-cover bg-center ${compact ? 'h-40' : 'h-56'}`}
        style={{ backgroundImage: `url(${journey.coverImage || '/images/paper-texture.png'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="font-display text-xl md:text-2xl text-paper mb-1">{journey.title}</h3>
          <div className="flex items-center text-paper/80">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{journey.destination}</span>
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-3 text-sm text-ink/70 mb-3">
          <div className="flex items-center">
            <CalendarRange className="w-4 h-4 mr-1" />
            <span>{formatDate(journey.startDate)}</span>
            {journey.endDate && journey.endDate !== journey.startDate && (
              <span> - {formatDate(journey.endDate)}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{journey.days} {journey.days === 1 ? 'day' : 'days'}</span>
          </div>
          
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{journey.travelers} {journey.travelers === 1 ? 'traveler' : 'travelers'}</span>
          </div>
        </div>
        
        {!compact && journey.description && (
          <p className="text-sm mb-4 flex-1">{journey.description}</p>
        )}
        
        {/* Card Footer */}
        <div className="flex justify-between items-center mt-auto">
          {journey.author && (
            <div className="text-sm">
              <span className="text-ink/60">by </span>
              <Link href={`/profile/${journey.author.id}`} className="hover:text-sepia">
                {journey.author.name}
              </Link>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <button 
              className="p-1.5 text-ink/60 hover:text-sepia rounded-full transition-colors"
              aria-label="Share journey"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <Link 
              href={`/trips/${journey.id}`}
              className="vintage-button py-1 px-3 text-sm"
            >
              View Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
