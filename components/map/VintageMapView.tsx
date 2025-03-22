'use client'

import { useRef, useEffect, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Trip, Destination } from '@/types'

interface VintageMapViewProps {
  trip?: Trip;
  destinations?: Destination[];
  className?: string;
  interactive?: boolean;
  center?: [number, number];
  zoom?: number;
}

export default function VintageMapView({
  trip,
  destinations = [],
  className = '',
  interactive = true,
  center = [2.3522, 48.8566], // Paris (default center)
  zoom = 5
}: VintageMapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const [loaded, setLoaded] = useState(false)

  // Use destinations from trip if provided
  const displayDestinations = trip?.destinations || destinations

  useEffect(() => {
    if (!mapContainer.current || map.current) return
    
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json', // Free MapLibre style
      center,
      zoom,
      interactive,
      attributionControl: false
    })

    map.current.on('load', () => {
      if (!map.current) return
      
      // Add vintage style overlay
      map.current.addLayer({
        id: 'vintage-overlay',
        type: 'raster',
        source: {
          type: 'image',
          url: '/images/paper-texture.svg',
          coordinates: [
            [-180, 90],
            [180, 90],
            [180, -90],
            [-180, -90]
          ]
        },
        paint: {
          'raster-opacity': 0.3,
          'raster-fade-duration': 0
        }
      })
      
      // Apply vintage filter to the map canvas
      const mapCanvas = map.current.getCanvas();
      mapCanvas.style.filter = 'sepia(0.7) brightness(0.9)';
      
      setLoaded(true)
    })

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
        setLoaded(false)
      }
    }
  }, [center, zoom, interactive])

  // Add destination markers and route lines when map is loaded and destinations change
  useEffect(() => {
    if (!loaded || !map.current || !displayDestinations.length) return
    
    // Clear existing markers and route
    const existingMarkers = document.querySelectorAll('.maplibregl-marker')
    existingMarkers.forEach(marker => marker.remove())
    
    if (map.current.getLayer('trip-route')) {
      map.current.removeLayer('trip-route')
    }
    
    if (map.current.getSource('trip-route')) {
      map.current.removeSource('trip-route')
    }
    
    // Add destination markers
    const bounds = new maplibregl.LngLatBounds()
    
    displayDestinations.forEach((destination, index) => {
      const { longitude, latitude, name } = destination
      
      // Create custom marker element with vintage style
      const markerEl = document.createElement('div')
      markerEl.className = 'flex flex-col items-center'
      
      const pin = document.createElement('div')
      pin.className = 'w-6 h-6 rounded-full bg-stampRed border-2 border-paper shadow-md flex items-center justify-center text-paper font-bold'
      pin.textContent = (index + 1).toString()
      
      const label = document.createElement('div')
      label.className = 'mt-1 px-2 py-1 bg-paper border border-ink/20 rounded shadow-sm text-xs font-display whitespace-nowrap'
      label.textContent = name
      
      markerEl.appendChild(pin)
      markerEl.appendChild(label)
      
      // Add marker to map
      new maplibregl.Marker(markerEl)
        .setLngLat([longitude, latitude])
        .addTo(map.current!)
      
      // Extend bounds to include this location
      bounds.extend([longitude, latitude])
    })
    
    // Add route line connecting destinations if there are multiple
    if (displayDestinations.length > 1) {
      const coordinates = displayDestinations
        .sort((a, b) => a.order - b.order)
        .map(d => [d.longitude, d.latitude])
      
      map.current.addSource('trip-route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates
          }
        }
      })
      
      map.current.addLayer({
        id: 'trip-route',
        type: 'line',
        source: 'trip-route',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#A8763E',
          'line-width': 2,
          'line-dasharray': [2, 1]
        }
      })
    }
    
    // Fit bounds with padding
    if (displayDestinations.length > 0) {
      map.current.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        maxZoom: 12
      })
    }
  }, [loaded, displayDestinations])

  return (
    <div 
      className={`relative border-4 border-ink/20 shadow-lg bg-paper overflow-hidden ${className}`}
    >
      {/* Old map border decoration */}
      <div className="absolute inset-0 pointer-events-none border-8 border-paper/60 z-10"></div>
      
      {/* Map container */}
      <div ref={mapContainer} className="h-full w-full" />
      
      {/* Vintage compass rose overlay */}
      <div className="absolute bottom-6 right-6 w-16 h-16 opacity-70 pointer-events-none z-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#362712" strokeWidth="2" />
          <path d="M50 2V98M2 50H98M26 26L74 74M74 26L26 74" stroke="#362712" strokeWidth="1" />
          <path d="M50 15L55 45H45L50 15Z" fill="#A8763E" />
          <text x="50" y="15" textAnchor="middle" fontSize="10" fill="#362712" fontFamily="serif">N</text>
          <text x="85" y="52" textAnchor="middle" fontSize="10" fill="#362712" fontFamily="serif">E</text>
          <text x="50" y="90" textAnchor="middle" fontSize="10" fill="#362712" fontFamily="serif">S</text>
          <text x="15" y="52" textAnchor="middle" fontSize="10" fill="#362712" fontFamily="serif">W</text>
        </svg>
      </div>
      
      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-paper/80">
          <div className="text-ink font-display text-xl">Loading map...</div>
        </div>
      )}
    </div>
  )
} 