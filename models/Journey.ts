export type Activity = {
  type: 'activity' | 'meal' | 'note';
  content: string;
  time?: string;
}

export type Photo = {
  url: string;
  caption?: string;
  location?: string;
  timestamp?: string;
}

export type JourneyDay = {
  day: number;
  date: string;
  title: string;
  description?: string;
  activities: Activity[];
  accommodation?: string;
  photos: Photo[];
}

export type User = {
  id: string;
  name: string;
  username: string;
  email?: string;
  avatar?: string | null;
}

export type Comment = {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

export default interface Journey {
  id: string;
  title: string;
  destination: string;
  description: string;
  coverImage?: string;
  startDate: string; 
  endDate: string;
  days: number;
  travelers: number;
  author: User;
  isPublished: boolean;
  isPrivate: boolean;
  stats: {
    likes: number;
    comments: number;
    views: number;
  };
  locations: string[];
  days_detail: JourneyDay[];
  comments?: Comment[];
  createdAt: string;
  updatedAt: string;
} 