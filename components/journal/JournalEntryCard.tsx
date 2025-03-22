'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { JournalEntry } from '@/types'
import { formatDate } from '@/lib/utils'

interface JournalEntryCardProps {
  entry: JournalEntry;
  className?: string;
}

export default function JournalEntryCard({ entry, className = '' }: JournalEntryCardProps) {
  const [expanded, setExpanded] = useState(false)
  
  // Calculate preview text - first 120 characters
  const previewText = entry.content.length > 120 
    ? `${entry.content.substring(0, 120)}...` 
    : entry.content
  
  // Get first image if there are any
  const firstImage = entry.imageUrls && entry.imageUrls.length > 0 
    ? entry.imageUrls[0] 
    : null
  
  // Format the date in a vintage style
  const formattedDate = formatDate(entry.date)
  
  return (
    <div 
      className={`vintage-card group relative overflow-hidden transition-all duration-300 
      ${expanded ? 'h-auto' : 'h-auto md:h-64'} ${className}`}
    >
      {/* Date stamp */}
      <div className="absolute top-3 right-3 z-10">
        <div className="postmark text-xs">
          {formattedDate}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Image section (if there's an image) */}
        {firstImage && (
          <div className="md:w-1/3 h-40 md:h-full relative overflow-hidden photo-frame shrink-0">
            <Image 
              src={firstImage}
              alt={entry.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Location tag if available */}
            {entry.locationName && (
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-paper/90 text-ink text-xs font-hand border border-ink/10 rounded">
                {entry.locationName}
              </div>
            )}
          </div>
        )}
        
        {/* Content section */}
        <div className={`flex-1 flex flex-col p-4 ${firstImage ? 'md:p-5' : 'p-5'}`}>
          <div className="mb-2 flex justify-between items-start">
            <h3 className="text-xl font-display">{entry.title}</h3>
          </div>
          
          {/* Weather and mood tags if available */}
          {(entry.weather || entry.mood) && (
            <div className="flex gap-2 mb-3">
              {entry.weather && (
                <span className="inline-block px-2 py-0.5 bg-sepia/20 text-ink/80 text-xs rounded border border-ink/10">
                  {entry.weather}
                </span>
              )}
              {entry.mood && (
                <span className="inline-block px-2 py-0.5 bg-sepia/20 text-ink/80 text-xs rounded border border-ink/10">
                  Mood: {entry.mood}
                </span>
              )}
            </div>
          )}
          
          {/* Entry content preview */}
          <div className="mb-4 text-sm flex-grow overflow-hidden">
            <p className={expanded ? '' : 'line-clamp-3'}>
              {expanded ? entry.content : previewText}
            </p>
          </div>
          
          {/* Footer with expand/collapse and view buttons */}
          <div className="flex justify-between items-center mt-auto">
            <button 
              className="text-xs underline decoration-dotted hover:text-ink/70 transition-colors"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
            
            <Link 
              href={`/journal/${entry.id}`} 
              className="text-sm vintage-button py-1 px-3"
            >
              View Entry
            </Link>
          </div>
        </div>
      </div>
      
      {/* Tags if available */}
      {entry.tags && entry.tags.length > 0 && (
        <div className="pt-2 pb-1 px-4 border-t border-ink/10 flex flex-wrap gap-1">
          {entry.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-0.5 bg-paper border border-ink/20 rounded-full text-ink/70"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
} 