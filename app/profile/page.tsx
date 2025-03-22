'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Globe, Calendar, Users, Book, Camera, Edit, ChevronRight, Mail, Phone, Share2 } from 'lucide-react'

export default function ProfilePage() {
  // Mock user data
  const [user] = useState({
    name: 'Emily Parker',
    avatar: '/images/avatar-placeholder.jpg',
    coverPhoto: '/images/paper-texture.png',
    location: 'San Francisco, CA',
    bio: 'Travel enthusiast, photographer, and writer. Always seeking the road less traveled and capturing memories along the way.',
    memberSince: 'January 2022',
    email: 'emily.parker@example.com',
    phone: '+1 (555) 123-4567',
    website: 'www.emilyparker.com',
    social: {
      instagram: '@emilytravels',
      twitter: '@emily_p_travels'
    }
  })

  // Mock stats
  const stats = [
    { label: 'Journeys', value: 12, icon: <Book className="w-5 h-5" /> },
    { label: 'Countries', value: 18, icon: <Globe className="w-5 h-5" /> },
    { label: 'Photos', value: 347, icon: <Camera className="w-5 h-5" /> },
    { label: 'Companions', value: 5, icon: <Users className="w-5 h-5" /> }
  ]

  // Mock badges
  const badges = [
    { name: 'Globetrotter', description: 'Visited 10+ countries', icon: '🌎' },
    { name: 'Photographer', description: 'Shared 100+ photos', icon: '📸' },
    { name: 'Historian', description: 'Documented 10+ journeys', icon: '📜' },
    { name: 'Pioneer', description: 'Early adopter', icon: '🏆' }
  ]

  // Mock recent journeys
  const recentJourneys = [
    {
      id: 'journey-1',
      title: 'Italian Summer',
      date: 'June 2023',
      destination: 'Rome, Florence, Venice',
      coverImage: '/images/paper-texture.png'
    },
    {
      id: 'journey-2',
      title: 'Island Getaway',
      date: 'March 2023',
      destination: 'Bali, Indonesia',
      coverImage: '/images/paper-texture.png'
    },
    {
      id: 'journey-3',
      title: 'City of Lights',
      date: 'December 2022',
      destination: 'Paris, France',
      coverImage: '/images/paper-texture.png'
    }
  ]

  return (
    <div className="min-h-screen bg-paper">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
      
      {/* Cover Photo */}
      <div className="relative h-64 w-full bg-[rgb(var(--burgundy))]" style={{ backgroundImage: 'url(/images/paper-texture.png)', backgroundBlendMode: 'multiply' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-title text-5xl gold-embossed">Traveler Profile</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Profile Card */}
        <div className="vintage-paper shadow-lg rounded-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Avatar and Quick Stats */}
            <div className="md:w-1/3 text-center mb-6 md:mb-0">
              <div className="relative mx-auto w-40 h-40 mb-4">
                <div className="photo-frame p-2 rounded-full overflow-hidden border-4 border-[rgb(var(--gold))]/40 bg-cream shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={160}
                      height={160}
                      className="antique-filter"
                    />
                  </div>
                </div>
                <button className="absolute bottom-1 right-1 bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] p-2 rounded-full border-2 border-[rgb(var(--gold))]/40 shadow-md">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              
              <h2 className="font-title text-3xl text-[rgb(var(--burgundy))] mb-2">{user.name}</h2>
              <div className="flex items-center justify-center text-[rgb(var(--burgundy-dark))] font-hand mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{user.location}</span>
              </div>
              
              <div className="flex justify-center space-x-3 mb-6">
                <button className="vintage-button text-sm px-3 py-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit Profile
                </button>
                <button className="vintage-button text-sm px-3 py-1">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[rgb(var(--burgundy))]/5 rounded-lg p-3 border border-[rgb(var(--burgundy))]/10">
                    <div className="flex justify-center text-[rgb(var(--burgundy))] mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-hand text-[rgb(var(--burgundy))]">{stat.value}</div>
                    <div className="text-sm text-[rgb(var(--burgundy-dark))]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bio and Details */}
            <div className="md:w-2/3 md:pl-8 md:border-l md:border-[rgb(var(--gold))]/30">
              <div className="mb-6">
                <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-3">About</h3>
                <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg leading-relaxed mb-4">
                  {user.bio}
                </p>
                <div className="text-sm text-[rgb(var(--burgundy-dark))] font-hand">
                  Member since {user.memberSince}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-3">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[rgb(var(--burgundy-dark))] font-hand">
                      <Mail className="w-4 h-4 mr-2 text-[rgb(var(--burgundy))]" />
                      <span>{user.email}</span>
                    </li>
                    <li className="flex items-center text-[rgb(var(--burgundy-dark))] font-hand">
                      <Phone className="w-4 h-4 mr-2 text-[rgb(var(--burgundy))]" />
                      <span>{user.phone}</span>
                    </li>
                    <li className="flex items-center text-[rgb(var(--burgundy-dark))] font-hand">
                      <Globe className="w-4 h-4 mr-2 text-[rgb(var(--burgundy))]" />
                      <span>{user.website}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-3">Social</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[rgb(var(--burgundy-dark))] font-hand">
                      <span className="w-4 h-4 mr-2 text-[rgb(var(--burgundy))]">📸</span>
                      <span>Instagram: {user.social.instagram}</span>
                    </li>
                    <li className="flex items-center text-[rgb(var(--burgundy-dark))] font-hand">
                      <span className="w-4 h-4 mr-2 text-[rgb(var(--burgundy))]">🐦</span>
                      <span>Twitter: {user.social.twitter}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-3">Travel Badges</h3>
                <div className="flex flex-wrap gap-3">
                  {badges.map((badge, index) => (
                    <div key={index} className="bg-[rgb(var(--burgundy))]/5 rounded-lg p-3 border border-[rgb(var(--burgundy))]/10 flex items-center">
                      <div className="text-2xl mr-2">{badge.icon}</div>
                      <div>
                        <div className="font-hand text-[rgb(var(--burgundy))]">{badge.name}</div>
                        <div className="text-xs text-[rgb(var(--burgundy-dark))]">{badge.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Journeys */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-title text-3xl text-[rgb(var(--burgundy))]">Recent Journeys</h2>
            <Link 
              href="/trips" 
              className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]"
            >
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJourneys.map(journey => (
              <Link href={`/trips/${journey.id}`} key={journey.id} className="block group">
                <div className="journal-card transform group-hover:rotate-1 transition-transform duration-300">
                  <div className="journal-spine"></div>
                  <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: `url(${journey.coverImage})` }}>
                    <div className="absolute inset-0 bg-[rgb(var(--burgundy-light))]/20"></div>
                    <div className="absolute top-3 right-3 transform rotate-6">
                      <div className="postmark px-3 py-1 font-hand">{journey.date}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl mb-1 text-[rgb(var(--gold))]">{journey.title}</h3>
                    <div className="flex items-center text-[rgb(var(--gold-light))]/80 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-hand">{journey.destination}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Travel Stats Visualization Placeholder */}
        <div className="vintage-paper rounded-lg p-6 mb-12">
          <h2 className="font-title text-3xl text-[rgb(var(--burgundy))] mb-6">Travel Statistics</h2>
          <div className="h-64 bg-[rgb(var(--burgundy))]/5 rounded-lg border border-[rgb(var(--burgundy))]/10 flex items-center justify-center">
            <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg">
              Visualized travel statistics coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 