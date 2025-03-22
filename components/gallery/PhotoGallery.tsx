'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Download, Info } from 'lucide-react'
import { Photo } from '@/models/Journey'
import Card from '@/components/ui/Card'

interface PhotoGalleryProps {
  photos: Photo[]
  title?: string
}

export default function PhotoGallery({ photos, title }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [showInfo, setShowInfo] = useState(false)

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo)
    setShowInfo(false)
  }

  const handleClose = () => {
    setSelectedPhoto(null)
  }

  const handleNext = () => {
    if (!selectedPhoto) return
    const currentIndex = photos.findIndex(photo => photo.url === selectedPhoto.url)
    const nextIndex = (currentIndex + 1) % photos.length
    setSelectedPhoto(photos[nextIndex])
    setShowInfo(false)
  }

  const handlePrev = () => {
    if (!selectedPhoto) return
    const currentIndex = photos.findIndex(photo => photo.url === selectedPhoto.url)
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length
    setSelectedPhoto(photos[prevIndex])
    setShowInfo(false)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div className="space-y-4">
      {title && <h2 className="font-display text-2xl mb-4">{title}</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="cursor-pointer transform transition-transform hover:scale-[1.02] hover:-rotate-1 duration-300"
            onClick={() => handlePhotoClick(photo)}
          >
            <Card className="p-2 bg-paper">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={photo.url}
                  alt={photo.caption || `Photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              {photo.caption && (
                <div className="mt-2 text-sm font-hand text-center px-1 truncate">
                  {photo.caption}
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
      
      {/* Modal for selected photo */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-full">
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button 
                onClick={toggleInfo}
                className="p-2 bg-paper rounded-full opacity-70 hover:opacity-100 transition-opacity"
              >
                <Info size={20} />
              </button>
              <button 
                onClick={handleClose}
                className="p-2 bg-paper rounded-full opacity-70 hover:opacity-100 transition-opacity"
              >
                <X size={20} />
              </button>
            </div>
            
            <Card className="overflow-hidden bg-paper">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption || 'Selected photo'}
                  fill
                  sizes="(max-width: 1200px) 100vw, 75vw"
                  className="object-contain"
                />
                
                {showInfo && selectedPhoto.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-paper/90 p-3">
                    <p className="font-hand text-lg mb-1">{selectedPhoto.caption}</p>
                    {selectedPhoto.location && (
                      <p className="text-sm text-ink/70">📍 {selectedPhoto.location}</p>
                    )}
                    {selectedPhoto.timestamp && (
                      <p className="text-sm text-ink/70">📅 {selectedPhoto.timestamp}</p>
                    )}
                  </div>
                )}
              </div>
            </Card>
            
            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-paper rounded-full opacity-70 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-paper rounded-full opacity-70 hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
      
      {/* Empty state */}
      {photos.length === 0 && (
        <div className="text-center py-8 border border-dashed border-ink/20 rounded-md">
          <p className="text-ink/60">No photos yet</p>
        </div>
      )}
    </div>
  )
} 