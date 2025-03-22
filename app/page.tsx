import React from 'react';
import Link from 'next/link';
import { MapPin, Book, PlusCircle, Compass, Ship, Plane, Camera, Flag } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Vintage Postcard Look */}
      <section className="bg-cream pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-40"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[rgb(var(--burgundy))]/10 backdrop-blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[rgb(var(--burgundy))]/10 backdrop-blur-sm"></div>
        <div className="absolute top-1/3 right-20 transform rotate-12">
          <Ship className="w-12 h-12 text-[rgb(var(--burgundy))]/40" />
        </div>
        <div className="absolute bottom-1/4 left-20 transform -rotate-12">
          <Plane className="w-12 h-12 text-[rgb(var(--burgundy))]/40" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-7xl mb-4 gold-embossed relative">
              Nomad
              <div className="absolute w-36 h-1 bg-[rgb(var(--gold))] bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-[rgb(var(--burgundy-dark))] max-w-3xl mx-auto mb-12 font-hand">
              Document your adventures with the charm of yesteryear
            </p>
            
            {/* More prominent start journey button with updated styling */}
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-[rgb(var(--burgundy-dark))] blur-sm opacity-40 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200"></div>
              <Link 
                href="/trips/new" 
                className="relative bg-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy-dark))] text-[rgb(var(--gold-light))] font-display text-xl px-10 py-4 rounded shadow-md border-2 border-[rgb(var(--gold))]/40 inline-flex items-center transform transition-transform duration-200 hover:-rotate-1"
              >
                <PlusCircle className="w-6 h-6 mr-3" />
                Start Your Journey
              </Link>
            </div>
          </div>
          
          {/* Feature Cards with Vintage Journal Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="journal-card transform hover:rotate-1 transition-transform duration-300">
              <div className="journal-spine"></div>
              <div className="w-16 h-16 mx-auto rounded-full bg-[rgb(var(--burgundy-light))] flex items-center justify-center mb-6 shadow-md">
                <Book className="w-8 h-8 text-[rgb(var(--gold-light))]" />
              </div>
              <h2 className="font-display text-2xl mb-3 text-center text-[rgb(var(--gold))]">Journal Your Travels</h2>
              <p className="text-[rgb(var(--gold-light))]/90 mb-6 text-center font-hand">
                Keep a beautiful record of your adventures, memories, and experiences.
              </p>
              <div className="text-center">
                <Link href="/trips" className="inline-flex items-center text-[rgb(var(--gold-light))] hover:text-[rgb(var(--gold))] font-display">
                  View Your Journals
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            
            <div className="journal-card transform hover:-rotate-1 transition-transform duration-300">
              <div className="journal-spine"></div>
              <div className="w-16 h-16 mx-auto rounded-full bg-[rgb(var(--burgundy-light))] flex items-center justify-center mb-6 shadow-md">
                <MapPin className="w-8 h-8 text-[rgb(var(--gold-light))]" />
              </div>
              <h2 className="font-display text-2xl mb-3 text-center text-[rgb(var(--gold))]">Track Your Routes</h2>
              <p className="text-[rgb(var(--gold-light))]/90 mb-6 text-center font-hand">
                Map your journey with detailed itineraries and location markers.
              </p>
              <div className="text-center">
                <Link href="/trips" className="inline-flex items-center text-[rgb(var(--gold-light))] hover:text-[rgb(var(--gold))] font-display">
                  See Your Routes
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            
            <div className="journal-card transform hover:rotate-1 transition-transform duration-300">
              <div className="journal-spine"></div>
              <div className="w-16 h-16 mx-auto rounded-full bg-[rgb(var(--burgundy-light))] flex items-center justify-center mb-6 shadow-md">
                <Compass className="w-8 h-8 text-[rgb(var(--gold-light))]" />
              </div>
              <h2 className="font-display text-2xl mb-3 text-center text-[rgb(var(--gold))]">Discover Places</h2>
              <p className="text-[rgb(var(--gold-light))]/90 mb-6 text-center font-hand">
                Find inspiration for your next adventure from popular destinations.
              </p>
              <div className="text-center">
                <Link href="/explore" className="inline-flex items-center text-[rgb(var(--gold-light))] hover:text-[rgb(var(--gold))] font-display">
                  Explore Destinations
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-paper" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}></div>
      </section>
      
      {/* Recent Journeys Section with Vintage Styling */}
      <section className="pt-16 pb-24 bg-paper relative">
        <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10">
          <Camera className="w-10 h-10 text-[rgb(var(--burgundy))]/30 transform rotate-6" />
        </div>
        <div className="absolute bottom-20 left-10">
          <Flag className="w-10 h-10 text-[rgb(var(--burgundy))]/30 transform -rotate-6" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-3 gold-embossed">Featured Journeys</h2>
            <div className="w-24 h-1 bg-[rgb(var(--gold))] mx-auto mb-4"></div>
            <p className="text-[rgb(var(--burgundy-dark))] max-w-2xl mx-auto font-hand text-xl">
              Get inspired by these carefully curated travel journals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="journal-card transform hover:rotate-1 transition-transform duration-300">
              <div className="journal-spine"></div>
              <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/paper-texture.png)' }}>
                <div className="absolute inset-0 bg-[rgb(var(--burgundy-light))]/20"></div>
                <div className="absolute top-4 right-4 transform rotate-12">
                  <div className="postmark px-3 py-1 font-hand">Summer 2023</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2 text-[rgb(var(--gold))]">Journey Through Tuscany</h3>
                <div className="flex items-center text-[rgb(var(--gold-light))]/80 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Italy</span>
                </div>
                <p className="mb-6 border-l-2 border-[rgb(var(--gold))]/50 pl-4 italic text-[rgb(var(--gold-light))]/90">
                  "Rolling hills, medieval towns, and incredible cuisine through the heart of Italy..."
                </p>
                <Link 
                  href="/trips/example-1" 
                  className="text-[rgb(var(--gold-light))] hover:text-[rgb(var(--gold))] font-display inline-flex items-center"
                >
                  Read this journey
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            
            <div className="journal-card transform hover:-rotate-1 transition-transform duration-300">
              <div className="journal-spine"></div>
              <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/paper-texture.png)' }}>
                <div className="absolute inset-0 bg-[rgb(var(--burgundy-light))]/20"></div>
                <div className="absolute top-4 right-4 transform -rotate-6">
                  <div className="postmark px-3 py-1 font-hand">Spring 2023</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2 text-[rgb(var(--gold))]">Moroccan Adventures</h3>
                <div className="flex items-center text-[rgb(var(--gold-light))]/80 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Morocco</span>
                </div>
                <p className="mb-6 border-l-2 border-[rgb(var(--gold))]/50 pl-4 italic text-[rgb(var(--gold-light))]/90">
                  "From the bustling markets of Marrakech to the serene Sahara Desert..."
                </p>
                <Link 
                  href="/trips/example-2" 
                  className="text-[rgb(var(--gold-light))] hover:text-[rgb(var(--gold))] font-display inline-flex items-center"
                >
                  Read this journey
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-block mb-8 transform -rotate-2">
              <div className="text-2xl font-hand text-[rgb(var(--burgundy-dark))]">Ready for your adventure?</div>
            </div>
            
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-[rgb(var(--burgundy-dark))] blur-sm opacity-40 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200"></div>
              <Link 
                href="/trips/new" 
                className="relative bg-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy-dark))] text-[rgb(var(--gold-light))] font-display px-8 py-3 rounded shadow-md border-2 border-[rgb(var(--gold))]/40 inline-flex items-center transform transition-transform duration-200 hover:rotate-1"
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Create Your Own Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple icons for UI
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
} 