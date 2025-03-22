'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Heart, MessageCircle, Share2, Bookmark, Filter, Search, Globe, ArrowUp } from 'lucide-react'

export default function FeedPage() {
  const [filter, setFilter] = useState('trending')
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // Mock feed posts data
  const feedPosts = [
    {
      id: 'post-1',
      user: {
        id: 'user-1',
        name: 'Emily Parker',
        avatar: '/images/avatar-placeholder.jpg',
      },
      title: 'Sunrise at the Amalfi Coast',
      content: 'Waking up at 5am was worth it to capture this magical moment. The colors of the sky reflected on the Mediterranean Sea created a painting-like scene I\'ll never forget.',
      location: 'Positano, Italy',
      images: ['/images/paper-texture.png'],
      date: '2 days ago',
      likes: 278,
      comments: 42,
      saved: false
    },
    {
      id: 'post-2',
      user: {
        id: 'user-2',
        name: 'James Wilson',
        avatar: '/images/avatar-placeholder.jpg',
      },
      title: 'Hidden Temple in Kyoto',
      content: 'Found this serene spot away from the crowds. The ancient trees, moss-covered stones, and gentle sound of flowing water created an atmosphere of timeless tranquility.',
      location: 'Kyoto, Japan',
      images: ['/images/paper-texture.png'],
      date: '1 week ago',
      likes: 341,
      comments: 57,
      saved: true
    },
    {
      id: 'post-3',
      user: {
        id: 'user-3',
        name: 'Sofia Rodriguez',
        avatar: '/images/avatar-placeholder.jpg',
      },
      title: 'Desert Nights Under the Stars',
      content: 'Camping in the Sahara was an otherworldly experience. The vastness of the desert under the starry night sky makes you feel both insignificant and connected to everything at once.',
      location: 'Merzouga, Morocco',
      images: ['/images/paper-texture.png'],
      date: '3 days ago',
      likes: 195,
      comments: 31,
      saved: false
    },
    {
      id: 'post-4',
      user: {
        id: 'user-4',
        name: 'Michael Chang',
        avatar: '/images/avatar-placeholder.jpg',
      },
      title: 'Street Food Adventure in Bangkok',
      content: 'My taste buds went on a wild journey through the night markets of Bangkok. From spicy som tam to sweet mango sticky rice, every bite was an explosion of flavor.',
      location: 'Bangkok, Thailand',
      images: ['/images/paper-texture.png'],
      date: '5 days ago',
      likes: 218,
      comments: 39,
      saved: false
    }
  ]
  
  // Handle scroll - show scroll to top button when scrolled down
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-paper relative">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] p-3 rounded-full shadow-lg border-2 border-[rgb(var(--gold))]/40 z-20 hover:bg-[rgb(var(--burgundy-dark))] transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-title text-4xl md:text-5xl text-[rgb(var(--burgundy))] gold-embossed mb-2">Traveler's Feed</h1>
            <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg">
              Discover stories and experiences from fellow travelers around the world
            </p>
          </div>
          
          <div className="flex gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-[rgb(var(--burgundy))]/50" />
              </div>
              <input
                type="text"
                placeholder="Search stories..."
                className="input-vintage pl-10 pr-4 py-2 rounded-full w-full md:w-64"
              />
            </div>
            
            <button className="vintage-button px-3 py-2 flex items-center text-sm">
              <Filter className="w-4 h-4 mr-1" />
              Filters
            </button>
          </div>
        </div>
        
        {/* Feed filters */}
        <div className="flex overflow-x-auto pb-2 mb-6 gap-2 scrollbar-hide">
          <button 
            onClick={() => setFilter('trending')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'trending' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Trending
          </button>
          <button 
            onClick={() => setFilter('latest')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'latest' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Latest
          </button>
          <button 
            onClick={() => setFilter('following')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'following' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Following
          </button>
          <button 
            onClick={() => setFilter('europe')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'europe' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Europe
          </button>
          <button 
            onClick={() => setFilter('asia')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'asia' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Asia
          </button>
          <button 
            onClick={() => setFilter('africa')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'africa' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Africa
          </button>
          <button 
            onClick={() => setFilter('americas')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'americas' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Americas
          </button>
          <button 
            onClick={() => setFilter('oceania')}
            className={`px-4 py-2 rounded-full border ${
              filter === 'oceania' 
                ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-[rgb(var(--gold))]/40' 
                : 'bg-paper text-[rgb(var(--burgundy))] border-[rgb(var(--burgundy))]/20 hover:bg-[rgb(var(--burgundy))]/5'
            } transition-colors font-hand whitespace-nowrap`}
          >
            Oceania
          </button>
        </div>
        
        {/* Feed content - main column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {feedPosts.map(post => (
              <div key={post.id} className="vintage-paper shadow-lg rounded-lg overflow-hidden transform hover:rotate-0 rotate-[-0.3deg] transition-transform duration-300">
                {/* Post header */}
                <div className="p-4 border-b border-[rgb(var(--gold))]/20">
                  <div className="flex items-center">
                    <Link href={`/profile/${post.user.id}`} className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[rgb(var(--gold))]/40 mr-3">
                        <Image
                          src={post.user.avatar}
                          alt={post.user.name}
                          width={40}
                          height={40}
                          className="antique-filter"
                        />
                      </div>
                      <div>
                        <div className="font-display text-[rgb(var(--burgundy))]">{post.user.name}</div>
                        <div className="flex items-center text-xs text-[rgb(var(--burgundy-dark))]">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{post.location}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Link>
                    
                    <div className="ml-auto">
                      <button className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <h2 className="font-title text-2xl text-[rgb(var(--burgundy))] mt-3">{post.title}</h2>
                </div>
                
                {/* Post images */}
                <div className="relative h-80 bg-[rgb(var(--burgundy))]/5">
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover antique-filter mix-blend-multiply"
                  />
                </div>
                
                {/* Post content */}
                <div className="p-6">
                  <p className="font-hand text-lg text-[rgb(var(--burgundy-dark))] mb-6 leading-relaxed">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[rgb(var(--gold))]/20">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors">
                        <Heart className={`w-5 h-5 mr-1 ${post.likes > 200 ? 'fill-[rgb(var(--burgundy))]' : ''}`} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors">
                        <MessageCircle className="w-5 h-5 mr-1" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <button className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors">
                      <Bookmark className={`w-5 h-5 ${post.saved ? 'fill-[rgb(var(--burgundy))]' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sidebar content */}
          <div className="space-y-8">
            {/* Trending destinations */}
            <div className="vintage-paper shadow-lg rounded-lg p-6">
              <h3 className="font-title text-2xl text-[rgb(var(--burgundy))] mb-4">Trending Destinations</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/explore/portugal" className="flex items-center group">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-[rgb(var(--gold))]/40">
                      <div className="w-full h-full bg-[rgb(var(--burgundy))]/10 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-[rgb(var(--burgundy))]" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[rgb(var(--burgundy))] group-hover:text-[rgb(var(--burgundy-light))] transition-colors">Portugal</div>
                      <div className="text-xs text-[rgb(var(--burgundy-dark))]">347 recent journeys</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/japan" className="flex items-center group">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-[rgb(var(--gold))]/40">
                      <div className="w-full h-full bg-[rgb(var(--burgundy))]/10 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-[rgb(var(--burgundy))]" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[rgb(var(--burgundy))] group-hover:text-[rgb(var(--burgundy-light))] transition-colors">Japan</div>
                      <div className="text-xs text-[rgb(var(--burgundy-dark))]">285 recent journeys</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/morocco" className="flex items-center group">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-[rgb(var(--gold))]/40">
                      <div className="w-full h-full bg-[rgb(var(--burgundy))]/10 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-[rgb(var(--burgundy))]" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[rgb(var(--burgundy))] group-hover:text-[rgb(var(--burgundy-light))] transition-colors">Morocco</div>
                      <div className="text-xs text-[rgb(var(--burgundy-dark))]">212 recent journeys</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/croatia" className="flex items-center group">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-[rgb(var(--gold))]/40">
                      <div className="w-full h-full bg-[rgb(var(--burgundy))]/10 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-[rgb(var(--burgundy))]" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[rgb(var(--burgundy))] group-hover:text-[rgb(var(--burgundy-light))] transition-colors">Croatia</div>
                      <div className="text-xs text-[rgb(var(--burgundy-dark))]">196 recent journeys</div>
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Link 
                  href="/explore" 
                  className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))] font-display text-sm"
                >
                  View all destinations
                </Link>
              </div>
            </div>
            
            {/* Suggested travelers */}
            <div className="vintage-paper shadow-lg rounded-lg p-6">
              <h3 className="font-title text-2xl text-[rgb(var(--burgundy))] mb-4">Travelers to Follow</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center justify-between">
                    <Link href="/profile/alex-chen" className="flex items-center group">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-[rgb(var(--gold))]/40">
                        <Image
                          src="/images/avatar-placeholder.jpg"
                          alt="Alex Chen"
                          width={40}
                          height={40}
                          className="antique-filter"
                        />
                      </div>
                      <div>
                        <div className="font-display text-[rgb(var(--burgundy))] group-hover:text-[rgb(var(--burgundy-light))] transition-colors">Alex Chen</div>
                        <div className="text-xs text-[rgb(var(--burgundy-dark))]">Adventure Photographer</div>
                      </div>
                    </Link>
                    <button className="text-xs px-3 py-1 rounded-full border border-[rgb(var(--burgundy))] text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))] hover:text-[rgb(var(--gold-light))] transition-colors">
                      Follow
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link href="/profile/sarah-miller" className="flex items-center group">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-[rgb(var(--gold))]/40">
                        <Image
                          src="/images/avatar-placeholder.jpg"
                          alt="Sarah Miller"
                          width={40}
                          height={40}
                          className="antique-filter"
                        />
                      </div>
                      <div>
                        <div className="font-display text-[rgb(var(--burgundy))] group-hover:text-[rgb(var(--burgundy-light))] transition-colors">Sarah Miller</div>
                        <div className="text-xs text-[rgb(var(--burgundy-dark))]">Food & Culture Explorer</div>
                      </div>
                    </Link>
                    <button className="text-xs px-3 py-1 rounded-full border border-[rgb(var(--burgundy))] text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))] hover:text-[rgb(var(--gold-light))] transition-colors">
                      Follow
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link href="/profile/david-wang" className="flex items-center group">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-[rgb(var(--gold))]/40">
                        <Image
                          src="/images/avatar-placeholder.jpg"
                          alt="David Wang"
                          width={40}
                          height={40}
                          className="antique-filter"
                        />
                      </div>
                      <div>
                        <div className="font-display text-[rgb(var(--burgundy))] group-hover:text-[rgb(var(--burgundy-light))] transition-colors">David Wang</div>
                        <div className="text-xs text-[rgb(var(--burgundy-dark))]">Backpacker & Writer</div>
                      </div>
                    </Link>
                    <button className="text-xs px-3 py-1 rounded-full border border-[rgb(var(--burgundy))] text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))] hover:text-[rgb(var(--gold-light))] transition-colors">
                      Follow
                    </button>
                  </div>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button className="vintage-button text-sm px-4 py-2 w-full">
                  Discover More Travelers
                </button>
              </div>
            </div>
            
            {/* Tags section */}
            <div className="vintage-paper shadow-lg rounded-lg p-6">
              <h3 className="font-title text-2xl text-[rgb(var(--burgundy))] mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/tag/photography" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #photography
                </Link>
                <Link href="/tag/hiking" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #hiking
                </Link>
                <Link href="/tag/foodie" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #foodie
                </Link>
                <Link href="/tag/backpacking" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #backpacking
                </Link>
                <Link href="/tag/citybreak" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #citybreak
                </Link>
                <Link href="/tag/roadtrip" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #roadtrip
                </Link>
                <Link href="/tag/beach" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #beach
                </Link>
                <Link href="/tag/mountains" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #mountains
                </Link>
                <Link href="/tag/wildlife" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #wildlife
                </Link>
                <Link href="/tag/culture" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
                  #culture
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 