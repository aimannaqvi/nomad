'use client';

import React, { useRef, useState, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Compass } from 'lucide-react';

interface Marker {
  id: string;
  longitude: number;
  latitude: number;
  title?: string;
  description?: string;
  color?: string;
}

interface VintageMapProps {
  markers?: Marker[];
  initialView?: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  height?: string;
  width?: string;
  showControls?: boolean;
  interactive?: boolean;
  pathCoordinates?: [number, number][];
  onMarkerClick?: (marker: Marker) => void;
}

export default function VintageMap({
  markers = [],
  initialView = { longitude: 12.3155, latitude: 45.4408, zoom: 3 }, // Default centered on Venice
  height = '400px',
  width = '100%',
  showControls = true,
  interactive = true,
  pathCoordinates,
  onMarkerClick
}: VintageMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapMarkersRef = useRef<Record<string, maplibregl.Marker>>({});

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Don't reinitialize the map if it already exists
    if (map.current) return;
    
    // Create a new map instance
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
        ],
        // Vintage style adjustments
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      },
      center: [initialView.longitude, initialView.latitude],
      zoom: initialView.zoom,
      attributionControl: false,
      interactive: interactive
    });

    // Apply vintage filter
    const mapCanvas = mapContainer.current.querySelector('.maplibregl-canvas');
    if (mapCanvas) {
      (mapCanvas as HTMLElement).style.filter = 'sepia(0.5) brightness(0.95) contrast(0.9)';
    }

    // Add navigation controls if requested
    if (showControls) {
      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
      map.current.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');
    }

    // Mark map as loaded when it's ready
    map.current.on('load', () => {
      setMapLoaded(true);
    });

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [initialView.latitude, initialView.longitude, initialView.zoom, showControls, interactive]);

  // Add markers to map
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Clear existing markers
    Object.values(mapMarkersRef.current).forEach(marker => marker.remove());
    mapMarkersRef.current = {};

    // Add new markers
    markers.forEach(marker => {
      // Create custom HTML element for marker
      const markerEl = document.createElement('div');
      markerEl.className = 'vintage-map-marker';
      markerEl.style.width = '30px';
      markerEl.style.height = '30px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.backgroundColor = marker.color || 'rgb(var(--burgundy))';
      markerEl.style.border = '2px solid rgb(var(--gold))';
      markerEl.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      markerEl.style.cursor = 'pointer';
      markerEl.style.display = 'flex';
      markerEl.style.alignItems = 'center';
      markerEl.style.justifyContent = 'center';
      markerEl.innerHTML = '<div style="width: 6px; height: 6px; background-color: rgb(var(--gold)); border-radius: 50%;"></div>';

      // Add popup if there's a title or description
      let popup;
      if (marker.title || marker.description) {
        const popupContent = document.createElement('div');
        popupContent.className = 'vintage-map-popup';
        popupContent.style.fontFamily = 'var(--font-display), serif';

        let popupHTML = '';
        if (marker.title) {
          popupHTML += `<h3 style="margin: 0 0 5px; font-family: var(--font-display), serif; color: rgb(var(--burgundy));">${marker.title}</h3>`;
        }
        if (marker.description) {
          popupHTML += `<p style="margin: 0; font-family: var(--font-hand), cursive; color: rgb(var(--burgundy-dark));">${marker.description}</p>`;
        }
        popupContent.innerHTML = popupHTML;

        popup = new maplibregl.Popup({ offset: 25, closeButton: false })
          .setDOMContent(popupContent);
      }

      // Create and add the marker
      const mapMarker = new maplibregl.Marker(markerEl)
        .setLngLat([marker.longitude, marker.latitude]);
      
      if (popup) {
        mapMarker.setPopup(popup);
      }

      if (onMarkerClick) {
        markerEl.addEventListener('click', () => {
          onMarkerClick(marker);
        });
      }

      mapMarker.addTo(map.current!);
      mapMarkersRef.current[marker.id] = mapMarker;
    });
  }, [markers, mapLoaded, onMarkerClick]);

  // Add path line if coordinates are provided
  useEffect(() => {
    if (!map.current || !mapLoaded || !pathCoordinates || pathCoordinates.length < 2) return;

    // Check if the source already exists and remove it
    if (map.current.getSource('route')) {
      map.current.removeLayer('route-layer');
      map.current.removeSource('route');
    }

    // Add the path source and layer
    map.current.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: pathCoordinates
        }
      }
    });

    map.current.addLayer({
      id: 'route-layer',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': 'rgb(var(--burgundy))',
        'line-width': 3,
        'line-dasharray': [2, 1]
      }
    });

    // Fit map to show the entire path
    if (pathCoordinates.length > 1) {
      const bounds = pathCoordinates.reduce((bounds, coord) => {
        return bounds.extend(coord as maplibregl.LngLatLike);
      }, new maplibregl.LngLatBounds(
        pathCoordinates[0] as maplibregl.LngLatLike,
        pathCoordinates[0] as maplibregl.LngLatLike
      ));

      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 13
      });
    }
  }, [pathCoordinates, mapLoaded]);

  return (
    <div className="vintage-map-container relative" style={{ height, width }}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg overflow-hidden border-2 border-[rgb(var(--gold))]/30" />
      
      {/* Vintage map frame/border */}
      <div className="absolute inset-0 pointer-events-none border-4 border-[rgb(var(--paper))] rounded-lg"></div>
      <div className="absolute inset-0 pointer-events-none border border-[rgb(var(--burgundy))]/20 rounded-lg"></div>
      
      {/* Loading state */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[rgb(var(--paper))]/70 z-10">
          <div className="flex flex-col items-center">
            <Compass className="w-8 h-8 text-[rgb(var(--burgundy))] animate-spin" />
            <span className="mt-2 font-hand text-[rgb(var(--burgundy))]">Charting the map...</span>
          </div>
        </div>
      )}
      
      {/* Decorative compass rose */}
      {showControls && (
        <div className="absolute bottom-8 left-8 w-16 h-16 pointer-events-none">
          <div className="relative w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(var(--gold))" strokeWidth="1" />
              <path d="M50,10 L50,90" stroke="rgb(var(--burgundy))" strokeWidth="1" />
              <path d="M10,50 L90,50" stroke="rgb(var(--burgundy))" strokeWidth="1" />
              <path d="M24,24 L76,76" stroke="rgb(var(--burgundy))" strokeWidth="1" opacity="0.6" />
              <path d="M24,76 L76,24" stroke="rgb(var(--burgundy))" strokeWidth="1" opacity="0.6" />
              <text x="50" y="20" textAnchor="middle" fill="rgb(var(--burgundy))" style={{ font: '10px var(--font-display, serif)' }}>N</text>
              <text x="50" y="85" textAnchor="middle" fill="rgb(var(--burgundy))" style={{ font: '10px var(--font-display, serif)' }}>S</text>
              <text x="15" y="52" textAnchor="middle" fill="rgb(var(--burgundy))" style={{ font: '10px var(--font-display, serif)' }}>W</text>
              <text x="85" y="52" textAnchor="middle" fill="rgb(var(--burgundy))" style={{ font: '10px var(--font-display, serif)' }}>E</text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
} 