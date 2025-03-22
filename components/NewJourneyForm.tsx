'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, Trash2, MapPin, CalendarRange, Globe, Camera, FileText, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';
import VintageMap from './maps/VintageMap';

export default function NewJourneyForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    destinations: [{ name: '', country: '', coordinates: { lat: 0, lng: 0 } }],
    coverImage: '',
    isPrivate: false
  });
  
  const [selectedMapLocation, setSelectedMapLocation] = useState<null | { lat: number, lng: number }>(null);
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDestinationChange = (index: number, field: string, value: string) => {
    const newDestinations = [...formData.destinations];
    newDestinations[index] = { ...newDestinations[index], [field]: value };
    setFormData(prev => ({ ...prev, destinations: newDestinations }));
  };

  const handleDestinationCoordinates = (index: number, coordinates: { lat: number, lng: number }) => {
    const newDestinations = [...formData.destinations];
    newDestinations[index] = { ...newDestinations[index], coordinates };
    setFormData(prev => ({ ...prev, destinations: newDestinations }));
    setSelectedMapLocation(null);
  };

  const addDestination = () => {
    setFormData(prev => ({
      ...prev,
      destinations: [...prev.destinations, { name: '', country: '', coordinates: { lat: 0, lng: 0 } }]
    }));
    setActiveDestinationIndex(formData.destinations.length);
  };

  const removeDestination = (index: number) => {
    if (formData.destinations.length <= 1) return;
    
    const newDestinations = formData.destinations.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, destinations: newDestinations }));
    
    if (activeDestinationIndex >= newDestinations.length) {
      setActiveDestinationIndex(newDestinations.length - 1);
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would save this data to the server
    console.log('Form submitted:', formData);
    router.push('/trips');
  };

  const isStepValid = () => {
    switch (step) {
      case 1: // Title & Description
        return formData.title.trim() !== '' && formData.description.trim() !== '';
      case 2: // Dates
        return formData.startDate !== '' && formData.endDate !== '';
      case 3: // Destinations
        return formData.destinations.length > 0 && 
               formData.destinations.every(d => d.name.trim() !== '' && d.country.trim() !== '');
      case 4: // Cover Image
        return true; // Optional
      case 5: // Review
        return true;
      default:
        return false;
    }
  };

  // Function to get marker data for the map
  const getMapMarkers = () => {
    return formData.destinations
      .filter(dest => dest.coordinates.lat !== 0 && dest.coordinates.lng !== 0)
      .map((dest, index) => ({
        id: `dest-${index}`,
        latitude: dest.coordinates.lat,
        longitude: dest.coordinates.lng,
        title: dest.name,
        description: dest.country
      }));
  };

  // Function to get coordinates for the route path
  const getRouteCoordinates = () => {
    return formData.destinations
      .filter(dest => dest.coordinates.lat !== 0 && dest.coordinates.lng !== 0)
      .map(dest => [dest.coordinates.lng, dest.coordinates.lat] as [number, number]);
  };

  // Function to handle map click
  const handleMapClick = (event: { lngLat: { lng: number, lat: number } }) => {
    if (step === 3) {
      const { lng, lat } = event.lngLat;
      setSelectedMapLocation({ lat, lng });
      
      // Update the active destination with these coordinates
      handleDestinationCoordinates(activeDestinationIndex, { lat, lng });
    }
  };

  // Render form steps
  return (
    <div className="vintage-paper p-6 max-w-4xl mx-auto">
      <h2 className="font-title text-3xl text-center mb-8 text-[rgb(var(--burgundy))]">
        Create New Journey
      </h2>
      
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[rgb(var(--burgundy))]/20 -translate-y-1/2"></div>
        {['Details', 'Dates', 'Destinations', 'Cover', 'Review'].map((label, index) => (
          <div 
            key={index} 
            className={`relative z-10 flex flex-col items-center cursor-pointer`}
            onClick={() => setStep(index + 1)}
          >
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                ${step === index + 1 
                  ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))]' 
                  : step > index + 1 
                    ? 'bg-[rgb(var(--burgundy))]/80 text-[rgb(var(--gold-light))]' 
                    : 'bg-[rgb(var(--burgundy))]/20 text-[rgb(var(--burgundy))]'
                }
              `}
            >
              {index + 1}
            </div>
            <span 
              className={`text-xs font-display 
                ${step === index + 1 
                  ? 'text-[rgb(var(--burgundy))]' 
                  : 'text-[rgb(var(--burgundy))]/60'
                }
              `}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Details */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="font-title text-2xl text-[rgb(var(--burgundy))]">Journey Details</h3>
            
            <div>
              <label htmlFor="title" className="block font-display text-[rgb(var(--burgundy))] mb-2">
                Journey Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="My Venetian Adventure"
                className="vintage-input w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block font-display text-[rgb(var(--burgundy))] mb-2">
                Journey Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="A brief description of your journey..."
                className="vintage-input w-full h-32"
                required
              />
            </div>

            <div>
              <label className="flex items-center font-display text-[rgb(var(--burgundy))]">
                <input
                  type="checkbox"
                  name="isPrivate"
                  checked={formData.isPrivate}
                  onChange={(e) => setFormData(prev => ({ ...prev, isPrivate: e.target.checked }))}
                  className="mr-2"
                />
                Make this journey private
              </label>
              <p className="text-sm text-[rgb(var(--burgundy-dark))] mt-1 font-hand">
                Private journeys are only visible to you
              </p>
            </div>
          </div>
        )}
        
        {/* Step 2: Dates */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="font-title text-2xl text-[rgb(var(--burgundy))]">Journey Dates</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="startDate" className="block font-display text-[rgb(var(--burgundy))] mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="vintage-input w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="endDate" className="block font-display text-[rgb(var(--burgundy))] mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="vintage-input w-full"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center text-[rgb(var(--burgundy-dark))] font-hand">
              <CalendarRange className="w-5 h-5 mr-2" />
              {formData.startDate && formData.endDate ? (
                <span>
                  Your journey will last approximately{' '}
                  {Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24))} days
                </span>
              ) : (
                <span>Select your journey dates</span>
              )}
            </div>
          </div>
        )}
        
        {/* Step 3: Destinations */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="font-title text-2xl text-[rgb(var(--burgundy))]">Journey Destinations</h3>
            
            {/* Map for selecting destinations */}
            <div className="mb-6">
              <label className="block font-display text-[rgb(var(--burgundy))] mb-2">
                Select Destinations on Map
              </label>
              <div className="vintage-paper-inner p-2">
                <VintageMap
                  height="400px"
                  initialView={{
                    longitude: 12.3155, // Venice as default
                    latitude: 45.4408,
                    zoom: 3
                  }}
                  markers={getMapMarkers()}
                  pathCoordinates={getRouteCoordinates()}
                  showControls={true}
                />
              </div>
              <p className="text-sm text-[rgb(var(--burgundy-dark))] mt-2 font-hand">
                Click on the map to set the location for the currently selected destination
              </p>
            </div>
            
            {/* Destinations List */}
            <div className="mb-4">
              <label className="block font-display text-[rgb(var(--burgundy))] mb-2">
                Your Destinations
              </label>
              
              <div className="space-y-4">
                {formData.destinations.map((destination, index) => (
                  <div 
                    key={index} 
                    className={`p-4 border rounded-md ${
                      activeDestinationIndex === index 
                        ? 'border-[rgb(var(--burgundy))] bg-[rgb(var(--burgundy))]/5' 
                        : 'border-[rgb(var(--burgundy))]/20'
                    }`}
                    onClick={() => setActiveDestinationIndex(index)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-display text-[rgb(var(--burgundy))]">
                        Destination {index + 1}
                      </h4>
                      <button 
                        type="button" 
                        onClick={() => removeDestination(index)}
                        className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-dark))] transition-colors"
                        disabled={formData.destinations.length <= 1}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={`destination-name-${index}`} className="block text-sm font-display text-[rgb(var(--burgundy))] mb-1">
                          Location Name
                        </label>
                        <input
                          type="text"
                          id={`destination-name-${index}`}
                          value={destination.name}
                          onChange={(e) => handleDestinationChange(index, 'name', e.target.value)}
                          placeholder="E.g., Venice"
                          className="vintage-input w-full"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor={`destination-country-${index}`} className="block text-sm font-display text-[rgb(var(--burgundy))] mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          id={`destination-country-${index}`}
                          value={destination.country}
                          onChange={(e) => handleDestinationChange(index, 'country', e.target.value)}
                          placeholder="E.g., Italy"
                          className="vintage-input w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-2">
                      <MapPin className="w-4 h-4 text-[rgb(var(--burgundy))] mr-1" />
                      <span className="text-xs font-hand text-[rgb(var(--burgundy-dark))]">
                        {destination.coordinates.lat !== 0 
                          ? `Coordinates: ${destination.coordinates.lat.toFixed(4)}, ${destination.coordinates.lng.toFixed(4)}` 
                          : 'No coordinates selected'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                type="button" 
                onClick={addDestination}
                className="vintage-button-small mt-4 flex items-center"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Another Destination
              </button>
            </div>
          </div>
        )}
        
        {/* Step 4: Cover Image */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="font-title text-2xl text-[rgb(var(--burgundy))]">Cover Image</h3>
            
            <div>
              <label htmlFor="coverImage" className="block font-display text-[rgb(var(--burgundy))] mb-2">
                Cover Image URL
              </label>
              <input
                type="text"
                id="coverImage"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleInputChange}
                placeholder="https://example.com/your-image.jpg"
                className="vintage-input w-full"
              />
              <p className="text-sm text-[rgb(var(--burgundy-dark))] mt-1 font-hand">
                Optional: Add a URL for your journey cover image
              </p>
            </div>
            
            <div className="mt-4 p-4 border border-dashed border-[rgb(var(--burgundy))]/30 rounded-md flex flex-col items-center justify-center">
              <Camera className="w-8 h-8 text-[rgb(var(--burgundy))]/50 mb-2" />
              <p className="text-center font-hand text-[rgb(var(--burgundy-dark))]">
                Upload feature coming soon!<br />
                For now, you can use an image URL
              </p>
            </div>
          </div>
        )}
        
        {/* Step 5: Review */}
        {step === 5 && (
          <div className="space-y-6">
            <h3 className="font-title text-2xl text-[rgb(var(--burgundy))]">Review Your Journey</h3>
            
            <div className="vintage-paper-inner p-6">
              <h4 className="font-title text-xl text-[rgb(var(--burgundy))] mb-4">{formData.title}</h4>
              
              <div className="space-y-4">
                <div>
                  <span className="font-display text-sm text-[rgb(var(--burgundy))]">Description:</span>
                  <p className="font-hand text-[rgb(var(--burgundy-dark))]">{formData.description}</p>
                </div>
                
                <div className="flex items-center">
                  <CalendarRange className="w-5 h-5 text-[rgb(var(--burgundy))] mr-2" />
                  <span className="font-hand text-[rgb(var(--burgundy-dark))]">
                    {new Date(formData.startDate).toLocaleDateString()} - {new Date(formData.endDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div>
                  <span className="font-display text-sm text-[rgb(var(--burgundy))]">Destinations:</span>
                  <ul className="list-disc list-inside font-hand text-[rgb(var(--burgundy-dark))]">
                    {formData.destinations.map((dest, index) => (
                      <li key={index}>
                        {dest.name}, {dest.country}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {formData.isPrivate && (
                  <div className="flex items-center">
                    <span className="text-sm text-[rgb(var(--burgundy-dark))] italic font-hand">
                      This journey is private
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="vintage-button-small flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
          ) : (
            <div></div>
          )}
          
          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="vintage-button flex items-center"
              disabled={!isStepValid()}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              className="vintage-button flex items-center"
            >
              Create Journey
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 