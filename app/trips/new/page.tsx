'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NewJourneyForm, { JourneyFormData } from '@/components/ui/NewJourneyForm'

export default function NewJourneyPage() {
  const handleFormSubmit = (data: JourneyFormData) => {
    // In a real app, this would send data to an API
    console.log('Submitted journey data:', data)
    
    // Show success message (would redirect in real app)
    alert('Journey created successfully!')
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/trips" className="flex items-center gap-1 text-sm hover:text-sepia mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to My Journeys
      </Link>
      
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl md:text-4xl mb-4">Create a New Journey</h1>
        <p className="text-ink/70 max-w-xl mx-auto">
          Document your travel experiences with our vintage-inspired journal. Start by filling out the details below.
        </p>
      </div>
      
      <NewJourneyForm onSubmit={handleFormSubmit} />
    </div>
  )
} 