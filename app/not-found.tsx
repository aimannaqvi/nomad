import Link from 'next/link'
import { Compass, ArrowLeft, Home } from 'lucide-react'
import GoBackButton from '@/components/ui/GoBackButton'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-paper">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
      
      <div className="vintage-paper max-w-lg w-full p-8 relative z-10 transform hover:rotate-0 rotate-[0.5deg] transition-transform duration-300">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-[rgb(var(--burgundy))] flex items-center justify-center text-[rgb(var(--gold-light))] border-4 border-[rgb(var(--gold))]/40">
              <Compass className="w-12 h-12" />
            </div>
          </div>
          
          <h1 className="font-title text-6xl mb-2 gold-embossed">404</h1>
          <div className="w-24 h-1 bg-[rgb(var(--gold))] mx-auto mb-4"></div>
          <h2 className="font-display text-2xl text-[rgb(var(--burgundy))] mb-4">
            Off The Beaten Path
          </h2>
          <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg mb-8">
            It seems you've wandered into uncharted territory. The journey you're looking for cannot be found.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="vintage-button flex items-center justify-center">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
            <GoBackButton />
          </div>
        </div>
        
        <div className="torn-paper-top bg-[rgb(var(--burgundy))]/5 p-6 text-center">
          <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-3">Need a New Destination?</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/trips" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
              My Journeys
            </Link>
            <Link href="/explore" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
              Explore Destinations
            </Link>
            <Link href="/trips/new" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
              Start New Journey
            </Link>
            <Link href="/feed" className="vintage-tag hover:bg-[rgb(var(--burgundy))]/20 transition-colors">
              Traveler's Feed
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 