import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Caveat, Alex_Brush } from 'next/font/google'
// Import header
import Header from '@/components/ui/Header'

// Font configuration with proper weights and subsets
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-alex-brush',
  weight: '400',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Vintage Travel Journal',
  description: 'Document your adventures with a touch of vintage flair',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${alexBrush.variable} ${caveat.variable}`}>
      <body className="bg-[rgb(var(--background-rgb))] text-ink min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
} 