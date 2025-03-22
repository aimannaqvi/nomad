'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, User, Lock, Eye, EyeOff } from 'lucide-react'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required')
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // This is where we would normally call an API to register the user
      // For this prototype, we'll just simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Success would redirect to login page
      window.location.href = '/auth/login'
    } catch (err) {
      setError('Failed to register. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-paper">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
      
      <div className="vintage-paper max-w-md w-full p-8 relative z-10 transform hover:rotate-0 rotate-[-0.5deg] transition-transform duration-300">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">Back home</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="font-title text-4xl mb-2 gold-embossed">Begin Your Journey</h1>
          <div className="w-24 h-1 bg-[rgb(var(--gold))] mx-auto mb-4"></div>
          <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg">
            Create your account to start documenting your adventures
          </p>
        </div>
        
        {error && (
          <div className="bg-[rgb(var(--burgundy))]/10 border border-[rgb(var(--burgundy))]/30 text-[rgb(var(--burgundy))] px-4 py-3 rounded mb-6 text-sm font-hand">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="vintage-label" htmlFor="name">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-[rgb(var(--burgundy))]/50" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="input-vintage w-full py-3 pl-10 pr-3"
                placeholder="Enter your name"
              />
            </div>
          </div>
          
          <div>
            <label className="vintage-label" htmlFor="email">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-[rgb(var(--burgundy))]/50" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input-vintage w-full py-3 pl-10 pr-3"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div>
            <label className="vintage-label" htmlFor="password">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-[rgb(var(--burgundy))]/50" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="input-vintage w-full py-3 pl-10 pr-10"
                placeholder="Create a password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
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
          
          <div>
            <label className="vintage-label" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-[rgb(var(--burgundy))]/50" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-vintage w-full py-3 pl-10 pr-3"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="vintage-button w-full justify-center py-3"
            >
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-[rgb(var(--burgundy-dark))] font-hand">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 