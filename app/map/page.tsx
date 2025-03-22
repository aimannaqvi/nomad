'use client';

import { useState, useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, Users, ChevronRight } from 'lucide-react';

// Mock journey data (this would come from a database in a real app)
const mockJourneys = [
  {
    id: 'toulouse-spring-2023',
    title: 'Spring in Toulouse',
    country: 'France',
    destination: 'Toulouse, France',
    description: 'Exploring the pink city during spring, visiting historic sites and enjoying local cuisine.',
    coverImage: '/images/paper-texture.png',
    startDate: 'Apr 15, 2023',
    endDate: 'Apr 22, 2023',
    days: 7,
    travelers: 2,
    coordinates: [1.4442, 43.6047] // Toulouse coordinates
  },
  {
    id: 'barcelona-summer-2022',
    title: 'Barcelona Summer Escape',
    country: 'Spain',
    destination: 'Barcelona, Spain',
    description: 'A week of architecture, beaches, and tapas in the Catalan capital.',
    coverImage: '/images/paper-texture.png',
    startDate: 'July 10, 2022',
    endDate: 'July 18, 2022',
    days: 8,
    travelers: 3,
    coordinates: [2.1734, 41.3851] // Barcelona coordinates
  },
  {
    id: 'venice-fall-2023',
    title: 'Autumn in Venice',
    country: 'Italy',
    destination: 'Venice, Italy',
    description: 'Exploring the floating city during the less crowded fall season.',
    coverImage: '/images/paper-texture.png',
    startDate: 'Oct 5, 2023',
    endDate: 'Oct 12, 2023',
    days: 7,
    travelers: 2,
    coordinates: [12.3155, 45.4408] // Venice coordinates
  },
  {
    id: 'kyoto-spring-2023',
    title: 'Cherry Blossoms in Kyoto',
    country: 'Japan',
    destination: 'Kyoto, Japan',
    description: 'Experiencing the magical cherry blossom season in ancient temples.',
    coverImage: '/images/paper-texture.png',
    startDate: 'Mar 25, 2023',
    endDate: 'Apr 5, 2023',
    days: 11,
    travelers: 2,
    coordinates: [135.7681, 35.0116] // Kyoto coordinates
  }
];

// Get unique countries from journeys
const getUniqueCountries = () => {
  const countries = new Set();
  mockJourneys.forEach(journey => {
    countries.add(journey.country);
  });
  return Array.from(countries) as string[];
};

// Group journeys by country
const getJourneysByCountry = () => {
  const journeysByCountry: Record<string, typeof mockJourneys> = {};
  mockJourneys.forEach(journey => {
    if (!journeysByCountry[journey.country]) {
      journeysByCountry[journey.country] = [];
    }
    journeysByCountry[journey.country].push(journey);
  });
  return journeysByCountry;
};

export default function WorldMapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [journeysByCountry, setJourneysByCountry] = useState<Record<string, typeof mockJourneys>>({});
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return;

    // Get journeys by country
    const journeysByCountry = getJourneysByCountry();
    setJourneysByCountry(journeysByCountry);

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: [
              'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
              'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
              'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: [0, 20], // Centered on the world
      zoom: 1.5,
      attributionControl: false,
    });

    // Apply vintage filter
    const mapCanvas = mapContainer.current.querySelector('.maplibregl-canvas');
    if (mapCanvas) {
      (mapCanvas as HTMLElement).style.filter = 'sepia(0.7) brightness(0.9) contrast(1.1)';
    }

    map.current.on('load', () => {
      setMapLoaded(true);

      // Add navigation controls
      map.current?.addControl(new maplibregl.NavigationControl(), 'top-right');
      
      // Add scale control
      map.current?.addControl(new maplibregl.ScaleControl({
        maxWidth: 100,
        unit: 'metric'
      }), 'bottom-left');

      // Add attribution control
      map.current?.addControl(new maplibregl.AttributionControl({
        compact: true
      }), 'bottom-right');
      
      // Add markers for each journey
      mockJourneys.forEach(journey => {
        const el = document.createElement('div');
        el.className = 'map-marker';
        el.style.width = '18px';
        el.style.height = '18px';
        el.style.borderRadius = '50%';
        el.style.backgroundColor = 'rgb(var(--burgundy))';
        el.style.border = '2px solid rgb(var(--gold))';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';
        el.style.transition = 'all 0.3s ease';
        
        // Set data attribute for identification
        el.setAttribute('data-journey-id', journey.id);
        
        // Add a popup
        const popup = new maplibregl.Popup({ offset: 25, closeButton: false })
          .setHTML(`
            <div style="font-family: var(--font-playfair); padding: 5px; min-width: 120px;">
              <div style="font-weight: bold; color: rgb(var(--burgundy));">${journey.destination}</div>
              <div style="font-size: 0.8rem; font-family: var(--font-caveat); color: rgb(var(--burgundy-dark));">${journey.title}</div>
              <div style="font-size: 0.7rem; margin-top: 4px;">Click to view journey</div>
            </div>
          `);
        
        const marker = new maplibregl.Marker(el)
          .setLngLat(journey.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
          
        // Add click handler to marker
        el.addEventListener('click', () => {
          // Reset all markers to default style
          document.querySelectorAll('.map-marker').forEach((markerEl) => {
            (markerEl as HTMLElement).style.backgroundColor = 'rgb(var(--burgundy))';
            (markerEl as HTMLElement).style.border = '2px solid rgb(var(--gold))';
            (markerEl as HTMLElement).style.width = '18px';
            (markerEl as HTMLElement).style.height = '18px';
          });
          
          // Highlight selected marker
          el.style.backgroundColor = '#2d8a56'; // Green color
          el.style.border = '2px solid #fff';
          el.style.width = '22px';
          el.style.height = '22px';
          
          setSelectedMarker(journey.id);
          setSelectedCountry(journey.country);
        });
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Update marker styles when country selection changes
  useEffect(() => {
    if (!selectedCountry || !mapLoaded) return;
    
    document.querySelectorAll('.map-marker').forEach((el) => {
      const journeyId = el.getAttribute('data-journey-id');
      const journey = mockJourneys.find(j => j.id === journeyId);
      
      if (!journey) return;
      
      if (journey.country === selectedCountry) {
        // Highlight markers in selected country
        if (selectedMarker !== journey.id) {
          (el as HTMLElement).style.backgroundColor = 'rgba(45, 138, 86, 0.7)'; // Green with transparency
        }
      } else {
        // Reset markers in other countries
        (el as HTMLElement).style.backgroundColor = 'rgb(var(--burgundy))';
        (el as HTMLElement).style.border = '2px solid rgb(var(--gold))';
        (el as HTMLElement).style.width = '18px';
        (el as HTMLElement).style.height = '18px';
      }
    });
  }, [selectedCountry, selectedMarker, mapLoaded]);

  return (
    <main className="min-h-screen bg-paper py-6">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-6">
          <h1 className="font-title text-4xl text-center mb-3 text-[rgb(var(--burgundy))]">
            Your Travel Map
          </h1>
          <p className="text-center font-hand text-lg text-[rgb(var(--burgundy-dark))] max-w-3xl mx-auto">
            Explore all your personal journeys around the world. Click on a country or marker to see your adventures.
          </p>
        </header>

        {/* Map Container - Full width */}
        <div className="vintage-paper p-3 mb-6">
          <div ref={mapContainer} className="w-full h-[65vh] relative rounded-lg overflow-hidden border-2 border-[rgb(var(--gold))]/30">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[rgb(var(--paper))]/70 z-10">
                <div className="text-[rgb(var(--burgundy))] font-title text-xl">Loading map...</div>
              </div>
            )}
            
            {/* Map Decorations */}
            <div className="absolute bottom-10 left-10 w-24 h-24 pointer-events-none z-10 opacity-80">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgb(var(--gold))" strokeWidth="1" />
                <path d="M50,5 L50,95" stroke="rgb(var(--burgundy))" strokeWidth="1" />
                <path d="M5,50 L95,50" stroke="rgb(var(--burgundy))" strokeWidth="1" />
                <path d="M20,20 L80,80" stroke="rgb(var(--burgundy))" strokeWidth="1" opacity="0.6" />
                <path d="M20,80 L80,20" stroke="rgb(var(--burgundy))" strokeWidth="1" opacity="0.6" />
                <text x="50" y="15" textAnchor="middle" fill="rgb(var(--burgundy))" className="font-title" style={{ fontSize: '8px' }}>N</text>
                <text x="50" y="90" textAnchor="middle" fill="rgb(var(--burgundy))" className="font-title" style={{ fontSize: '8px' }}>S</text>
                <text x="10" y="52" textAnchor="middle" fill="rgb(var(--burgundy))" className="font-title" style={{ fontSize: '8px' }}>W</text>
                <text x="90" y="52" textAnchor="middle" fill="rgb(var(--burgundy))" className="font-title" style={{ fontSize: '8px' }}>E</text>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Filters and Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Country Filters - Left side */}
          <div className="md:col-span-1 vintage-paper p-4">
            <h2 className="font-title text-xl text-[rgb(var(--burgundy))] mb-3">
              Countries Visited
            </h2>
            <div className="flex flex-col gap-2">
              {getUniqueCountries().map(country => (
                <button
                  key={country}
                  className={`text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCountry === country 
                      ? 'bg-[#2d8a56] text-white font-medium' 
                      : 'hover:bg-[rgb(var(--burgundy))]/10'
                  }`}
                  onClick={() => setSelectedCountry(country)}
                >
                  {country}
                </button>
              ))}
              {selectedCountry && (
                <button
                  className="mt-2 text-center px-3 py-2 rounded-md border border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/10 transition-colors"
                  onClick={() => {
                    setSelectedCountry(null);
                    setSelectedMarker(null);
                    
                    // Reset all markers
                    document.querySelectorAll('.map-marker').forEach((markerEl) => {
                      (markerEl as HTMLElement).style.backgroundColor = 'rgb(var(--burgundy))';
                      (markerEl as HTMLElement).style.border = '2px solid rgb(var(--gold))';
                      (markerEl as HTMLElement).style.width = '18px';
                      (markerEl as HTMLElement).style.height = '18px';
                    });
                  }}
                >
                  Show All Countries
                </button>
              )}
            </div>
          </div>
          
          {/* Journey Details - Right side */}
          <div className="md:col-span-3 vintage-paper p-4">
            <h2 className="font-title text-2xl text-[rgb(var(--burgundy))] mb-4">
              {selectedCountry 
                ? `Your Journeys in ${selectedCountry}` 
                : 'Your Travel History'}
            </h2>
            
            {selectedCountry ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {journeysByCountry[selectedCountry]?.map(journey => (
                  <Link
                    key={journey.id}
                    href={`/trips/${journey.id}`}
                    className={`block p-4 border rounded-lg transition-colors ${
                      selectedMarker === journey.id
                        ? 'border-[#2d8a56] bg-[#2d8a56]/10'
                        : 'border-[rgb(var(--burgundy))]/20 hover:border-[rgb(var(--burgundy))]/40'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="w-16 h-16 flex-shrink-0 bg-[rgb(var(--paper))] border border-[rgb(var(--gold))]/30 rounded overflow-hidden relative mr-3">
                        <Image
                          src={journey.coverImage}
                          alt={journey.title}
                          fill
                          className="object-cover antique-filter"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className={`font-display ${selectedMarker === journey.id ? 'text-[#2d8a56]' : 'text-[rgb(var(--burgundy))]'}`}>
                          {journey.title}
                        </h3>
                        <div className="flex items-center text-[rgb(var(--burgundy-dark))] text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="font-hand">{journey.destination}</span>
                        </div>
                        <div className="flex items-center mt-1 text-[rgb(var(--burgundy-dark))] text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span className="font-hand">{journey.startDate}</span>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${selectedMarker === journey.id ? 'text-[#2d8a56]' : 'text-[rgb(var(--burgundy))]'}`} />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-hand text-[rgb(var(--burgundy-dark))]">
                  You've visited <span className="font-display text-[rgb(var(--burgundy))]">{getUniqueCountries().length} countries</span> across your personal journeys.
                </p>
                <div className="mt-2">
                  <h3 className="font-display text-lg text-[rgb(var(--burgundy))]">Your Recent Journeys</h3>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockJourneys.map(journey => (
                      <Link
                        key={journey.id}
                        href={`/trips/${journey.id}`}
                        className="flex items-center p-3 border border-[rgb(var(--burgundy))]/10 hover:bg-[rgb(var(--burgundy))]/5 transition-colors rounded-lg"
                      >
                        <div className="w-10 h-10 flex-shrink-0 bg-[rgb(var(--paper))] border border-[rgb(var(--gold))]/30 rounded-full overflow-hidden relative mr-3">
                          <Image
                            src={journey.coverImage}
                            alt={journey.title}
                            fill
                            className="object-cover antique-filter"
                          />
                        </div>
                        <div>
                          <div className="font-display text-[rgb(var(--burgundy))]">{journey.title}</div>
                          <div className="text-xs text-[rgb(var(--burgundy-dark))]">{journey.destination}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[rgb(var(--burgundy))] ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link 
                    href="/trips/new" 
                    className="vintage-button py-2 px-4 inline-block"
                  >
                    Plan Your Next Journey
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 