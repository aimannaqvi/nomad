import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names and merges tailwind classes efficiently
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date in a vintage style (e.g., "14th of June, 1923")
 */
export function formatVintageDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  
  // Get day with suffix (1st, 2nd, 3rd, etc.)
  const day = d.getDate()
  const suffix = getDaySuffix(day)
  
  // Get month name
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const month = monthNames[d.getMonth()]
  
  // Get year
  const year = d.getFullYear()
  
  // Return formatted date
  return `${day}${suffix} of ${month}, ${year}`
}

/**
 * Get the suffix for a day (1st, 2nd, 3rd, etc.)
 */
export function getDaySuffix(day: number): string {
  if (day > 3 && day < 21) return 'th'
  switch (day % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

/**
 * Calculate the duration of a journey in days
 */
export function calculateJourneyDuration(startDate: Date | string, endDate: Date | string): number {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  
  // Calculate difference in milliseconds
  const diff = end.getTime() - start.getTime()
  
  // Convert to days and round up
  return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1 // +1 to include the start day
}

/**
 * Format a date range in a vintage style (e.g., "14th of June - 28th of June, 1923")
 */
export function formatVintageDateRange(startDate: Date | string, endDate: Date | string): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  
  // Get day with suffix for both dates
  const startDay = start.getDate()
  const startSuffix = getDaySuffix(startDay)
  const endDay = end.getDate()
  const endSuffix = getDaySuffix(endDay)
  
  // Get month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const startMonth = monthNames[start.getMonth()]
  const endMonth = monthNames[end.getMonth()]
  
  // Get years
  const startYear = start.getFullYear()
  const endYear = end.getFullYear()
  
  // Format based on whether months/years are the same
  if (startYear === endYear) {
    if (startMonth === endMonth) {
      return `${startDay}${startSuffix} - ${endDay}${endSuffix} of ${startMonth}, ${startYear}`
    } else {
      return `${startDay}${startSuffix} of ${startMonth} - ${endDay}${endSuffix} of ${endMonth}, ${startYear}`
    }
  } else {
    return `${startDay}${startSuffix} of ${startMonth}, ${startYear} - ${endDay}${endSuffix} of ${endMonth}, ${endYear}`
  }
}

/**
 * Create a random ID for database entities
 */
export function generateId(prefix: string = ''): string {
  return `${prefix}${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Format a currency amount in a localized way
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  })
  
  return formatter.format(amount)
}

/**
 * Calculate the total distance of a journey based on coordinates
 * Returns distance in kilometers
 */
export function calculateTotalDistance(coordinates: Array<[number, number]>): number {
  if (coordinates.length < 2) return 0
  
  let totalDistance = 0
  
  for (let i = 1; i < coordinates.length; i++) {
    totalDistance += calculateDistance(
      coordinates[i-1][0], coordinates[i-1][1],
      coordinates[i][0], coordinates[i][1]
    )
  }
  
  return Math.round(totalDistance)
}

/**
 * Calculate the distance between two coordinates using the Haversine formula
 * Returns distance in kilometers
 */
function calculateDistance(
  lat1: number, lon1: number, 
  lat2: number, lon2: number
): number {
  const R = 6371 // Earth's radius in km
  
  const dLat = degToRad(lat2 - lat1)
  const dLon = degToRad(lon2 - lon1)
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const distance = R * c
  
  return distance
}

/**
 * Convert degrees to radians
 */
function degToRad(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Format a large number with commas (e.g., 1,234,567)
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * Format a date in a vintage style (e.g., "15 June 1955")
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date)
  
  // Format options for vintage style date
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  
  return d.toLocaleDateString('en-US', options)
}

/**
 * Formats a date range (e.g., "15-20 June 1955" or "June 15 - July 10, 1955")
 */
export function formatDateRange(startDate: Date | string, endDate: Date | string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  const sameYear = start.getFullYear() === end.getFullYear()
  const sameMonth = start.getMonth() === end.getMonth()
  
  if (sameYear && sameMonth) {
    // Format as "15-20 June 1955"
    return `${start.getDate()}-${end.getDate()} ${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getFullYear()}`
  } else if (sameYear) {
    // Format as "June 15 - July 10, 1955"
    return `${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getDate()} - ${end.toLocaleDateString('en-US', { month: 'long' })} ${end.getDate()}, ${start.getFullYear()}`
  } else {
    // Format as "June 15, 1955 - July 10, 1956"
    return `${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getDate()}, ${start.getFullYear()} - ${end.toLocaleDateString('en-US', { month: 'long' })} ${end.getDate()}, ${end.getFullYear()}`
  }
}

/**
 * Truncate text with ellipsis after a certain number of words
 */
export function truncateWords(text: string, wordCount: number): string {
  const words = text.split(' ')
  if (words.length <= wordCount) return text
  
  return words.slice(0, wordCount).join(' ') + '...'
}

/**
 * Get initials from a name (e.g., "John Doe" -> "JD")
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

/**
 * Generate a random ID (useful for temporary IDs before server-side generation)
 */
export function generateTempId(): string {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Calculate the duration in days between two dates
 */
export function getDurationDays(startDate: Date | string, endDate: Date | string): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // Include both start and end days
}

/**
 * Check if a date is today
 */
export function isToday(date: Date | string): boolean {
  const d = new Date(date)
  const today = new Date()
  
  return d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
}

/**
 * Format time in 12-hour format (e.g., "2:30 PM")
 */
export function formatTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}

/**
 * Create an array of dates between start and end (inclusive)
 */
export function getDatesBetween(startDate: Date | string, endDate: Date | string): Date[] {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const dates: Date[] = []
  
  // Reset time for accurate day comparison
  start.setHours(0, 0, 0, 0)
  end.setHours(0, 0, 0, 0)
  
  let current = new Date(start)
  
  while (current <= end) {
    dates.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }
  
  return dates
} 