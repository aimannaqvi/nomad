'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Compass, Map } from 'lucide-react'

interface HeaderProps {
  currentUser?: {
    name: string;
    imageUrl?: string;
  } | null;
}

export default function Header({ currentUser }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="p-4 md:p-6 flex justify-between items-center border-b border-[rgb(var(--gold))]/30 bg-paper/95 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="w-10 h-10 flex items-center justify-center bg-[rgb(var(--burgundy))] rounded-full border-2 border-[rgb(var(--gold))]/40 shadow-md">
              <span className="text-[rgb(var(--gold-light))] font-display font-bold">N</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-title gold-embossed tracking-wide">Nomad</h1>
        </Link>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden relative z-10" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-0.5 bg-[rgb(var(--burgundy))] mb-1.5 transition-all" 
          style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : '' }}></div>
        <div className="w-6 h-0.5 bg-[rgb(var(--burgundy))] mb-1.5 transition-all"
          style={{ opacity: menuOpen ? 0 : 1 }}></div>
        <div className="w-6 h-0.5 bg-[rgb(var(--burgundy))] transition-all"
          style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : '' }}></div>
      </button>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link href="/trips" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center">
          <span className="border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">My Journeys</span>
        </Link>
        <Link href="/explore" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center">
          <Compass className="w-4 h-4 mr-1" />
          <span className="border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">Explore</span>
        </Link>
        <Link href="/map" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center">
          <Map className="w-4 h-4 mr-1" />
          <span className="border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">Map</span>
        </Link>
        <Link href="/feed" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center">
          <span className="border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">Feed</span>
        </Link>
        
        {currentUser ? (
          <div className="flex items-center gap-2">
            <span className="font-hand text-[rgb(var(--burgundy))]">{currentUser.name}</span>
            {currentUser.imageUrl ? (
              <Image 
                src={currentUser.imageUrl} 
                alt={currentUser.name} 
                width={40} 
                height={40} 
                className="rounded-full border-2 border-[rgb(var(--gold))]/30"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[rgb(var(--burgundy))] flex items-center justify-center text-[rgb(var(--gold-light))] font-display border-2 border-[rgb(var(--gold))]/40">
                {currentUser.name.charAt(0)}
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/login" className="vintage-button text-sm">
            Login / Register
          </Link>
        )}
      </nav>
      
      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute top-0 right-0 h-screen w-64 bg-paper shadow-lg p-6 pt-20 z-0 border-l border-[rgb(var(--gold))]/30 md:hidden">
          <nav className="flex flex-col gap-6">
            <Link 
              href="/trips" 
              className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <span className="border-b border-[rgb(var(--gold))]/30">My Journeys</span>
            </Link>
            <Link 
              href="/explore" 
              className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <Compass className="w-4 h-4 mr-1" />
              <span className="border-b border-[rgb(var(--gold))]/30">Explore</span>
            </Link>
            <Link 
              href="/map" 
              className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <Map className="w-4 h-4 mr-1" />
              <span className="border-b border-[rgb(var(--gold))]/30">Map</span>
            </Link>
            <Link 
              href="/feed" 
              className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors font-display flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <span className="border-b border-[rgb(var(--gold))]/30">Feed</span>
            </Link>
            
            {currentUser ? (
              <div className="flex items-center gap-2 mt-4">
                <span className="font-hand text-[rgb(var(--burgundy))]">{currentUser.name}</span>
                {currentUser.imageUrl ? (
                  <Image 
                    src={currentUser.imageUrl} 
                    alt={currentUser.name} 
                    width={40} 
                    height={40} 
                    className="rounded-full border-2 border-[rgb(var(--gold))]/30"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--burgundy))] flex items-center justify-center text-[rgb(var(--gold-light))] font-display border-2 border-[rgb(var(--gold))]/40">
                    {currentUser.name.charAt(0)}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/auth/login" 
                className="vintage-button text-sm mt-4 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login / Register
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
} 