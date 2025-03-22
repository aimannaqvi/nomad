'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, Twitter, Github, Compass, MapPin, Book, Info } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] border-t-2 border-[rgb(var(--gold))]/30 py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-2 gold-border"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl mb-4 gold-embossed">Nomad</h3>
            <p className="text-[rgb(var(--gold-light))]/80 mb-4 font-hand">
              Document your adventures with a touch of vintage flair.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@nomadjournal.com" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4 flex items-center">
              <Compass className="w-4 h-4 mr-2 text-[rgb(var(--gold))]" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2 ml-6 border-l border-[rgb(var(--gold))]/30 pl-4">
              <li>
                <Link href="/explore" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/explore/featured" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Featured Journeys
                </Link>
              </li>
              <li>
                <Link href="/explore/popular" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Popular Routes
                </Link>
              </li>
              <li>
                <Link href="/explore/map" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Interactive Map
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4 flex items-center">
              <Book className="w-4 h-4 mr-2 text-[rgb(var(--gold))]" />
              <span>Resources</span>
            </h4>
            <ul className="space-y-2 ml-6 border-l border-[rgb(var(--gold))]/30 pl-4">
              <li>
                <Link href="/help" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Travel Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4 flex items-center">
              <Info className="w-4 h-4 mr-2 text-[rgb(var(--gold))]" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2 ml-6 border-l border-[rgb(var(--gold))]/30 pl-4">
              <li>
                <Link href="/about" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[rgb(var(--gold-light))]/70 hover:text-[rgb(var(--gold))] transition-colors font-hand">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[rgb(var(--gold))]/30 text-center text-[rgb(var(--gold-light))]/60 text-sm font-hand">
          <p>© {currentYear} Nomad. All rights reserved.</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-5 left-5 opacity-20">
        <MapPin className="w-8 h-8" />
      </div>
      <div className="absolute bottom-5 right-5 opacity-20">
        <Compass className="w-8 h-8" />
      </div>
    </footer>
  );
} 