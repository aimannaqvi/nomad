'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'

export default function GoBackButton() {
  return (
    <button 
      onClick={() => window.history.back()} 
      className="vintage-button flex items-center justify-center"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Go Back
    </button>
  )
} 