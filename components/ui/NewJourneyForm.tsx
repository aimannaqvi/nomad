'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Users, Image, Send, Globe, Plane, Stamp } from 'lucide-react';

export interface JourneyFormData {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  travelers: number;
  coverImage?: File | null;
}

interface NewJourneyFormProps {
  onSubmit: (data: JourneyFormData) => void;
}

export default function NewJourneyForm({ onSubmit }: NewJourneyFormProps) {
  const [formData, setFormData] = useState<JourneyFormData>({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
    travelers: 1,
    coverImage: null
  });
  
  const [formStage, setFormStage] = useState<'details' | 'preview'>('details');
  const [isRotated, setIsRotated] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        coverImage: e.target.files![0]
      }));
    }
  };
  
  const handlePreview = () => {
    setIsRotated(true);
    setTimeout(() => {
      setFormStage('preview');
      setIsRotated(false);
    }, 300);
  };
  
  const handleBack = () => {
    setIsRotated(true);
    setTimeout(() => {
      setFormStage('details');
      setIsRotated(false);
    }, 300);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <div 
      className={`transition-transform duration-300 transform ${isRotated ? 'rotate-y-90' : ''}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {formStage === 'details' ? (
        <form onSubmit={handlePreview} className="vintage-paper">
          <div className="absolute top-4 right-4 transform rotate-12">
            <div className="stamp px-4 py-1">New Journey</div>
          </div>
          
          <h2 className="font-display text-2xl mb-8 text-center text-sepia-dark relative">
            <span className="relative inline-block">
              Plan Your Adventure
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-sepia-light"></div>
            </span>
          </h2>
          
          <div className="mb-8">
            <label htmlFor="title" className="vintage-label flex items-center">
              <Plane className="w-4 h-4 mr-2 text-sepia" />
              Journey Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Summer in Toulouse"
              className="w-full p-3 bg-paper border-2 border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia font-hand text-lg"
              required
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="destination" className="vintage-label flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-sepia" />
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Toulouse, France"
              className="w-full p-3 bg-paper border-2 border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia font-hand text-lg"
              required
            />
          </div>
          
          <div className="vintage-divider" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="startDate" className="vintage-label flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-sepia" />
                Departure Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-3 bg-paper border-2 border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia"
                required
              />
            </div>
            
            <div>
              <label htmlFor="endDate" className="vintage-label flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-sepia" />
                Return Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-3 bg-paper border-2 border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia"
                required
              />
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="description" className="vintage-label flex items-center">
              <Globe className="w-4 h-4 mr-2 text-sepia" />
              Journey Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Share what your journey is about..."
              rows={4}
              className="w-full p-3 bg-paper border-2 border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia font-hand text-lg"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="travelers" className="vintage-label flex items-center">
                <Users className="w-4 h-4 mr-2 text-sepia" />
                Number of Travelers
              </label>
              <select
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="w-full p-3 bg-paper border-2 border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'traveler' : 'travelers'}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="coverImage" className="vintage-label flex items-center">
                <Image className="w-4 h-4 mr-2 text-sepia" />
                Cover Image
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                onChange={handleImageChange}
                accept="image/*"
                className="w-full p-3 bg-paper border-2 border-ink/10 rounded-md focus:outline-none focus:ring-1 focus:ring-sepia file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0 file:text-sm file:font-medium
                file:bg-sepia file:text-paper
                hover:file:bg-sepia-dark"
              />
            </div>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              className="vintage-button py-3 px-8 text-lg"
            >
              <Stamp className="w-5 h-5 mr-2" />
              Preview Journey
            </button>
          </div>
        </form>
      ) : (
        <div className="vintage-paper">
          <div className="absolute top-4 right-4 transform -rotate-6">
            <div className="stamp px-4 py-1">Preview</div>
          </div>
          
          <h2 className="font-display text-2xl mb-2 text-center text-sepia-dark">{formData.title || "Your Journey"}</h2>
          <p className="text-center mb-8 font-hand text-lg text-ink/70">{formData.destination || "Destination"}</p>
          
          <div className="mb-6 flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="font-hand text-sm text-ink/60">Departure</div>
              <div className="font-medium">{formatDate(formData.startDate) || "Not set"}</div>
            </div>
            
            <div className="text-ink/30">→</div>
            
            <div className="text-center">
              <div className="font-hand text-sm text-ink/60">Return</div>
              <div className="font-medium">{formatDate(formData.endDate) || "Not set"}</div>
            </div>
          </div>
          
          <div className="vintage-divider" />
          
          <div className="mb-8 bg-paper/50 p-6 rounded-md border-2 border-ink/5 relative">
            <div className="absolute -top-3 left-4 bg-cream px-2 text-sm font-hand text-ink/60">
              Journey Description
            </div>
            <p className="font-hand text-lg italic">
              {formData.description || "No description provided."}
            </p>
          </div>
          
          <div className="mb-8 flex items-center justify-center space-x-2">
            <Users className="w-4 h-4 text-sepia" />
            <span>{formData.travelers} {formData.travelers === 1 ? 'traveler' : 'travelers'}</span>
          </div>
          
          <div className="flex justify-between">
            <button 
              type="button" 
              onClick={handleBack}
              className="vintage-button bg-paper text-ink border-ink/20 hover:bg-cream py-2 px-4"
            >
              Back to Edit
            </button>
            
            <button 
              type="button" 
              onClick={handleSubmit}
              className="vintage-button py-2 px-6"
            >
              <Send className="w-4 h-4 mr-2" />
              Create Journey
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 