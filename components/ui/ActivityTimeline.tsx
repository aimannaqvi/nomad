'use client';

import React from 'react';
import { MapPin, Coffee, Bed, Clock } from 'lucide-react';

interface Activity {
  id: string;
  type: 'visit' | 'meal' | 'accommodation' | 'transport' | 'other';
  time: string;
  title: string;
  description?: string;
  location?: string;
  image?: string;
}

interface ActivityTimelineProps {
  activities: Activity[];
  date: string;
}

export default function ActivityTimeline({ activities, date }: ActivityTimelineProps) {
  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'visit':
        return <MapPin className="w-4 h-4" />;
      case 'meal':
        return <Coffee className="w-4 h-4" />;
      case 'accommodation':
        return <Bed className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };
  
  const getTypeColor = (type: Activity['type']) => {
    switch (type) {
      case 'visit':
        return 'bg-blue-100 text-blue-800';
      case 'meal':
        return 'bg-amber-100 text-amber-800';
      case 'accommodation':
        return 'bg-green-100 text-green-800';
      case 'transport':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <div className="relative pb-10">
      {/* Date display */}
      <div className="mb-4">
        <span className="font-display text-lg">{formatDate(date)}</span>
      </div>
      
      {/* Timeline line */}
      {activities.length > 0 && (
        <div className="absolute left-[18px] top-12 bottom-0 w-0.5 bg-ink/10"></div>
      )}
      
      {/* Activities */}
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative flex">
            {/* Timeline dot */}
            <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${getTypeColor(activity.type)}`}>
              {getIcon(activity.type)}
            </div>
            
            {/* Activity content */}
            <div className="ml-4 flex-1">
              <div className="bg-cream p-4 rounded-lg shadow-vintage border border-ink/10">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-lg">{activity.title}</h3>
                  <span className="text-sm text-ink/70">{activity.time}</span>
                </div>
                
                {activity.location && (
                  <div className="flex items-center text-sm text-ink/70 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{activity.location}</span>
                  </div>
                )}
                
                {activity.description && (
                  <p className="text-sm">{activity.description}</p>
                )}
                
                {activity.image && (
                  <div className="mt-3">
                    <div 
                      className="w-full h-40 bg-cover bg-center rounded-lg overflow-hidden border border-ink/10"
                      style={{ backgroundImage: `url(${activity.image})` }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
