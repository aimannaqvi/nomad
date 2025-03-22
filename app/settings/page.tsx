'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, User, Mail, Globe, Bell, Shield, Download, Trash2, 
  Eye, EyeOff, Sun, Moon, Palette, LogOut
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'account' | 'appearance' | 'notifications' | 'privacy' | 'data'>('account')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-paper py-12">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-8">
          <Link 
            href="/profile" 
            className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">Back to Profile</span>
          </Link>
          
          <h1 className="font-title text-4xl md:text-5xl mt-4 text-[rgb(var(--burgundy))] gold-embossed">Settings</h1>
          <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg mt-2">
            Customize your travel journal experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="vintage-paper p-6">
              <nav className="space-y-1">
                <button 
                  onClick={() => setActiveTab('account')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                    activeTab === 'account' 
                      ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))]' 
                      : 'text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))]/10'
                  } transition-colors font-display`}
                >
                  <User className="w-5 h-5 mr-3" />
                  Account
                </button>
                
                <button 
                  onClick={() => setActiveTab('appearance')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                    activeTab === 'appearance' 
                      ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))]' 
                      : 'text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))]/10'
                  } transition-colors font-display`}
                >
                  <Palette className="w-5 h-5 mr-3" />
                  Appearance
                </button>
                
                <button 
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                    activeTab === 'notifications' 
                      ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))]' 
                      : 'text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))]/10'
                  } transition-colors font-display`}
                >
                  <Bell className="w-5 h-5 mr-3" />
                  Notifications
                </button>
                
                <button 
                  onClick={() => setActiveTab('privacy')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                    activeTab === 'privacy' 
                      ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))]' 
                      : 'text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))]/10'
                  } transition-colors font-display`}
                >
                  <Shield className="w-5 h-5 mr-3" />
                  Privacy
                </button>
                
                <button 
                  onClick={() => setActiveTab('data')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                    activeTab === 'data' 
                      ? 'bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))]' 
                      : 'text-[rgb(var(--burgundy))] hover:bg-[rgb(var(--burgundy))]/10'
                  } transition-colors font-display`}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Data & Export
                </button>
              </nav>
              
              <div className="mt-8 pt-6 border-t border-[rgb(var(--gold))]/30">
                <button className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors w-full text-left px-4 py-3 rounded-md flex items-center">
                  <LogOut className="w-5 h-5 mr-3" />
                  <span className="font-display">Sign Out</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="md:col-span-3">
            <div className="vintage-paper p-6">
              {/* Account Settings */}
              {activeTab === 'account' && (
                <div>
                  <h2 className="font-title text-3xl text-[rgb(var(--burgundy))] mb-6">Account Settings</h2>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Profile Information</h3>
                    
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <div className="relative w-24 h-24">
                          <div className="photo-frame p-2 rounded-full overflow-hidden border-4 border-[rgb(var(--gold))]/40 bg-cream shadow-lg">
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <Image
                                src="/images/avatar-placeholder.jpg"
                                alt="Profile"
                                width={96}
                                height={96}
                                className="antique-filter"
                              />
                            </div>
                          </div>
                          <button className="absolute bottom-1 right-1 bg-[rgb(var(--burgundy))] text-[rgb(var(--gold-light))] p-2 rounded-full border-2 border-[rgb(var(--gold))]/40 shadow-md">
                            <User className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <button className="vintage-button text-sm px-4 py-2">
                          Change Profile Picture
                        </button>
                        <p className="text-sm text-[rgb(var(--burgundy-dark))] mt-2 font-hand">
                          Recommended: Square image, at least 400x400 pixels
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="vintage-label" htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          defaultValue="Emily Parker"
                          className="input-vintage w-full py-3 px-4"
                        />
                      </div>
                      
                      <div>
                        <label className="vintage-label" htmlFor="username">Username</label>
                        <input
                          id="username"
                          type="text"
                          defaultValue="emilytravels"
                          className="input-vintage w-full py-3 px-4"
                        />
                      </div>
                      
                      <div>
                        <label className="vintage-label" htmlFor="bio">Bio</label>
                        <textarea
                          id="bio"
                          rows={4}
                          defaultValue="Travel enthusiast, photographer, and writer. Always seeking the road less traveled and capturing memories along the way."
                          className="input-vintage w-full py-3 px-4 resize-none"
                        />
                      </div>
                      
                      <div>
                        <label className="vintage-label" htmlFor="location">Location</label>
                        <input
                          id="location"
                          type="text"
                          defaultValue="San Francisco, CA"
                          className="input-vintage w-full py-3 px-4"
                        />
                      </div>
                      
                      <div>
                        <label className="vintage-label" htmlFor="website">Website</label>
                        <input
                          id="website"
                          type="url"
                          defaultValue="https://www.emilyparker.com"
                          className="input-vintage w-full py-3 px-4"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="vintage-divider"></div>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Account Information</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="vintage-label" htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          defaultValue="emily.parker@example.com"
                          className="input-vintage w-full py-3 px-4"
                        />
                      </div>
                      
                      <div>
                        <label className="vintage-label" htmlFor="password">Current Password</label>
                        <div className="relative">
                          <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            defaultValue="currentpassword"
                            className="input-vintage w-full py-3 px-4 pr-12"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-4 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5 text-[rgb(var(--burgundy))]/50" />
                            ) : (
                              <Eye className="w-5 h-5 text-[rgb(var(--burgundy))]/50" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <button className="vintage-button px-6 py-2">
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="vintage-button px-6 py-3">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Appearance Settings */}
              {activeTab === 'appearance' && (
                <div>
                  <h2 className="font-title text-3xl text-[rgb(var(--burgundy))] mb-6">Appearance Settings</h2>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Theme</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border-2 border-[rgb(var(--burgundy))] p-4 rounded-lg text-center cursor-pointer bg-paper">
                        <Sun className="w-8 h-8 mx-auto mb-2 text-[rgb(var(--burgundy))]" />
                        <div className="font-display text-[rgb(var(--burgundy))]">Light</div>
                      </div>
                      
                      <div className="border-2 border-[rgb(var(--gold))] p-4 rounded-lg text-center cursor-pointer bg-[rgb(var(--burgundy))]">
                        <Moon className="w-8 h-8 mx-auto mb-2 text-[rgb(var(--gold-light))]" />
                        <div className="font-display text-[rgb(var(--gold-light))]">Dark</div>
                      </div>
                      
                      <div className="border-2 border-[rgb(var(--burgundy))]/50 p-4 rounded-lg text-center cursor-pointer bg-paper">
                        <div className="flex justify-center">
                          <Sun className="w-8 h-8 text-[rgb(var(--burgundy))]" />
                          <Moon className="w-8 h-8 text-[rgb(var(--burgundy))]" />
                        </div>
                        <div className="font-display text-[rgb(var(--burgundy))]">System</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Paper Texture</h3>
                    
                    <div>
                      <label className="flex items-center space-x-3 mb-3 cursor-pointer">
                        <input type="radio" name="paper-texture" defaultChecked className="form-radio text-[rgb(var(--burgundy))]" />
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Vintage (Default)</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 mb-3 cursor-pointer">
                        <input type="radio" name="paper-texture" className="form-radio text-[rgb(var(--burgundy))]" />
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Clean</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 mb-3 cursor-pointer">
                        <input type="radio" name="paper-texture" className="form-radio text-[rgb(var(--burgundy))]" />
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Parchment</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" name="paper-texture" className="form-radio text-[rgb(var(--burgundy))]" />
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">None</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Animations</h3>
                    
                    <div>
                      <label className="flex items-center space-x-3 mb-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Enable animations</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Reduce motion (for accessibility)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="vintage-button px-6 py-3">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="font-title text-3xl text-[rgb(var(--burgundy))] mb-6">Notification Settings</h2>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Email Notifications</h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">New comments on your journeys</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Journey likes</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">New followers</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Travel tips for your planned destinations</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Newsletter and updates</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Push Notifications</h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Enable push notifications</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Trip reminders</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Messages</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="vintage-button px-6 py-3">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Privacy Settings */}
              {activeTab === 'privacy' && (
                <div>
                  <h2 className="font-title text-3xl text-[rgb(var(--burgundy))] mb-6">Privacy Settings</h2>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Profile Privacy</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="vintage-label" htmlFor="profile-visibility">Profile Visibility</label>
                        <select id="profile-visibility" className="input-vintage w-full py-3 px-4">
                          <option value="public">Public - Anyone can view your profile</option>
                          <option value="followers">Followers Only - Only your followers can view your profile</option>
                          <option value="private">Private - Only you can view your profile</option>
                        </select>
                      </div>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Show my location data on public journeys</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Allow others to tag me in photos</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Journey Privacy</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="vintage-label" htmlFor="default-journey-visibility">Default Journey Visibility</label>
                        <select id="default-journey-visibility" className="input-vintage w-full py-3 px-4">
                          <option value="public">Public - Anyone can view your journeys</option>
                          <option value="followers">Followers Only - Only your followers can view your journeys</option>
                          <option value="private">Private - Only you can view your journeys</option>
                        </select>
                      </div>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Allow comments on my public journeys</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Data Usage</h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Allow anonymous usage data collection to improve the service</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                      
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="font-hand text-[rgb(var(--burgundy-dark))]">Show personalized recommendations based on my activities</span>
                        <input type="checkbox" defaultChecked className="form-checkbox text-[rgb(var(--burgundy))]" />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="vintage-button px-6 py-3">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Data & Export Settings */}
              {activeTab === 'data' && (
                <div>
                  <h2 className="font-title text-3xl text-[rgb(var(--burgundy))] mb-6">Data & Export</h2>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Export Your Data</h3>
                    
                    <p className="text-[rgb(var(--burgundy-dark))] font-hand mb-4">
                      You can download a copy of all the data you've created on Nomad, including your journeys, photos, and comments.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="vintage-paper p-4 rounded-lg">
                        <h4 className="font-display text-[rgb(var(--burgundy))] mb-2">Full Account Data</h4>
                        <p className="text-sm text-[rgb(var(--burgundy-dark))] font-hand mb-3">
                          All your account data, including journeys, photos, comments, and profile information.
                        </p>
                        <button className="vintage-button text-sm px-4 py-2 flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Request Export (.zip)
                        </button>
                      </div>
                      
                      <div className="vintage-paper p-4 rounded-lg">
                        <h4 className="font-display text-[rgb(var(--burgundy))] mb-2">Journeys Only</h4>
                        <p className="text-sm text-[rgb(var(--burgundy-dark))] font-hand mb-3">
                          Export just your journeys and associated content.
                        </p>
                        <button className="vintage-button text-sm px-4 py-2 flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download Journeys (.json)
                        </button>
                      </div>
                      
                      <div className="vintage-paper p-4 rounded-lg">
                        <h4 className="font-display text-[rgb(var(--burgundy))] mb-2">Photos Only</h4>
                        <p className="text-sm text-[rgb(var(--burgundy-dark))] font-hand mb-3">
                          Download all photos you've uploaded to your account.
                        </p>
                        <button className="vintage-button text-sm px-4 py-2 flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download Photos (.zip)
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="vintage-divider"></div>
                  
                  <div className="mb-8">
                    <h3 className="font-display text-xl text-[rgb(var(--burgundy))] mb-4">Account Actions</h3>
                    
                    <div className="vintage-paper p-6 border-2 border-[rgb(var(--burgundy))]/20 bg-[rgb(var(--burgundy))]/5">
                      <h4 className="font-display text-[rgb(var(--burgundy))] mb-2">Delete Account</h4>
                      <p className="text-[rgb(var(--burgundy-dark))] font-hand mb-4">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                      <button className="flex items-center text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors border-b border-[rgb(var(--burgundy))]/30 hover:border-[rgb(var(--burgundy))]">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Request Account Deletion
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 