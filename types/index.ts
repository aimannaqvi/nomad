// User profile types
export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
  createdAt: Date;
}

// Trip types
export interface Trip {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  coverImageUrl?: string;
  userId: string;
  collaboratorIds?: string[];
  destinations: Destination[];
  createdAt: Date;
  updatedAt: Date;
}

// Destination types
export interface Destination {
  id: string;
  name: string;
  description?: string;
  latitude: number;
  longitude: number;
  tripId: string;
  arrivalDate?: Date;
  departureDate?: Date;
  order: number;
}

// Journal entry types
export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  tripId: string;
  userId: string;
  locationName?: string;
  latitude?: number;
  longitude?: number;
  date: Date;
  weather?: string;
  mood?: string;
  tags?: string[];
  imageUrls?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Photo types
export interface Photo {
  id: string;
  url: string;
  thumbnailUrl: string;
  caption?: string;
  tripId: string;
  userId: string;
  journalEntryId?: string;
  locationName?: string;
  latitude?: number;
  longitude?: number;
  takenAt?: Date;
  width: number;
  height: number;
  tags?: string[];
  createdAt: Date;
}

// Itinerary types
export interface ItineraryDay {
  date: Date;
  tripId: string;
  notes?: string;
  items: ItineraryItem[];
}

export interface ItineraryItem {
  id: string;
  title: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  tripId: string;
  locationName?: string;
  latitude?: number;
  longitude?: number;
  category?: 'transport' | 'accommodation' | 'activity' | 'food' | 'other';
  completed: boolean;
  order: number;
}

// Authentication types
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
} 