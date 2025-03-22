import { Compass } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-paper">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[rgb(var(--burgundy))] flex items-center justify-center text-[rgb(var(--gold-light))] border-4 border-[rgb(var(--gold))]/40 animate-spin">
            <Compass className="w-10 h-10" />
          </div>
        </div>
        
        <h2 className="font-title text-3xl mb-2 gold-embossed">Charting Your Course</h2>
        <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg">
          Preparing your journey, please wait...
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[rgb(var(--burgundy))]/10 backdrop-blur-sm animate-pulse"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[rgb(var(--burgundy))]/10 backdrop-blur-sm animate-pulse"></div>
    </div>
  )
} 