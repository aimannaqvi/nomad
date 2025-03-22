'use client'

import React, { useState } from 'react'
import { CalendarIcon, MapPin, Users, CalendarRange } from 'lucide-react'
import Button from '../ui/Button'

interface NewJourneyFormProps {
  onSubmit: (data: JourneyFormData) => void;
  isLoading?: boolean;
}

export interface JourneyFormData {
  title: string;
  destination: string;
  description: string;
  startDate: string;
  endDate: string;
  travelers: number;
  isPrivate: boolean;
}

const NewJourneyForm: React.FC<NewJourneyFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<JourneyFormData>({
    title: '',
    destination: '',
    description: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    isPrivate: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (name === 'travelers') {
      setFormData({
        ...formData,
        [name]: parseInt(value) || 1,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-cream rounded-lg border border-ink/10 p-6 shadow-vintage">
      <h2 className="text-2xl font-display mb-6 text-center">Create New Journey</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Journey Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="My Summer Adventure"
            className="w-full px-3 py-2 bg-paper border border-ink/20 rounded focus:outline-none focus:ring-2 focus:ring-sepia"
          />
        </div>
        
        <div>
          <label htmlFor="destination" className="block text-sm font-medium mb-1">
            <MapPin className="w-4 h-4 inline mr-1" />
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            placeholder="Paris, France"
            className="w-full px-3 py-2 bg-paper border border-ink/20 rounded focus:outline-none focus:ring-2 focus:ring-sepia"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            placeholder="Write a brief description of your journey..."
            className="w-full px-3 py-2 bg-paper border border-ink/20 rounded focus:outline-none focus:ring-2 focus:ring-sepia"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium mb-1">
              <CalendarIcon className="w-4 h-4 inline mr-1" />
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-paper border border-ink/20 rounded focus:outline-none focus:ring-2 focus:ring-sepia"
            />
          </div>
          
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium mb-1">
              <CalendarRange className="w-4 h-4 inline mr-1" />
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-paper border border-ink/20 rounded focus:outline-none focus:ring-2 focus:ring-sepia"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="travelers" className="block text-sm font-medium mb-1">
            <Users className="w-4 h-4 inline mr-1" />
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            min="1"
            max="20"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-paper border border-ink/20 rounded focus:outline-none focus:ring-2 focus:ring-sepia"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPrivate"
            name="isPrivate"
            checked={formData.isPrivate}
            onChange={handleChange}
            className="h-4 w-4 border-ink/20 rounded text-sepia focus:ring-sepia"
          />
          <label htmlFor="isPrivate" className="ml-2 block text-sm">
            Keep this journey private
          </label>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          fullWidth
        >
          Create Journey
        </Button>
      </div>
    </form>
  );
};

export default NewJourneyForm 