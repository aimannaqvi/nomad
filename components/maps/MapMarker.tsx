'use client';

import React from 'react';
import { Pin, Flag, Camera, Anchor, Coffee, Home, Bed, Map } from 'lucide-react';

export type MarkerType = 'location' | 'destination' | 'photo' | 'hotel' | 'restaurant' | 'activity' | 'home' | 'custom';

interface MapMarkerProps {
  type?: MarkerType;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  pulsing?: boolean;
  selected?: boolean;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

export default function MapMarker({
  type = 'location',
  color,
  size = 'md',
  onClick,
  pulsing = false,
  selected = false,
  className = '',
  label,
  icon
}: MapMarkerProps) {
  // Determine marker color based on type or custom color
  const getMarkerColor = () => {
    if (color) return color;
    
    switch (type) {
      case 'destination':
        return 'rgb(var(--burgundy))';
      case 'photo':
        return 'rgb(var(--sepia-dark))';
      case 'hotel':
        return 'rgb(var(--blue))';
      case 'restaurant':
        return 'rgb(var(--gold))';
      case 'activity':
        return 'rgb(var(--green))';
      case 'home':
        return 'rgb(var(--burgundy-dark))';
      default:
        return 'rgb(var(--ink))';
    }
  };

  // Determine marker icon based on type
  const getMarkerIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'destination':
        return <Flag className="h-full w-full p-1.5" />;
      case 'photo':
        return <Camera className="h-full w-full p-1.5" />;
      case 'hotel':
        return <Bed className="h-full w-full p-1.5" />;
      case 'restaurant':
        return <Coffee className="h-full w-full p-1.5" />;
      case 'activity':
        return <Anchor className="h-full w-full p-1.5" />;
      case 'home':
        return <Home className="h-full w-full p-1.5" />;
      default:
        return <Pin className="h-full w-full p-1.5" />;
    }
  };

  // Determine size classes
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className="flex flex-col items-center">
      {/* Marker */}
      <div
        className={`
          relative rounded-full flex items-center justify-center
          border-2 border-paper cursor-pointer shadow-md
          ${sizeClasses[size]} 
          ${selected ? 'ring-2 ring-offset-2 ring-gold' : ''}
          ${pulsing ? 'animate-pulse' : ''}
          ${className}
        `}
        style={{ backgroundColor: getMarkerColor() }}
        onClick={onClick}
      >
        {/* Inner content/icon */}
        <div className="text-paper">
          {getMarkerIcon()}
        </div>
        
        {/* Pulse animation for selected or pulsing markers */}
        {(selected || pulsing) && (
          <div className="absolute -inset-1 rounded-full border border-current animate-ping opacity-50" 
            style={{ borderColor: getMarkerColor() }}
          />
        )}
      </div>
      
      {/* Optional label */}
      {label && (
        <div className="mt-1 px-2 py-0.5 bg-paper/80 backdrop-blur-sm text-xs font-hand rounded-full shadow-sm border border-ink/10 whitespace-nowrap">
          {label}
        </div>
      )}
    </div>
  );
} 