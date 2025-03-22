'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    if (!formData.email || !formData.password) {
      setError('Email and password are required')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // This is where we would normally call an API to authenticate the user
      // For this prototype, we'll just simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login
      if (formData.email === 'demo@example.com' && formData.password === 'password') {
        // Redirect to trips page on successful login
        window.location.href = '/trips'
      } else {
        setError('Invalid email or password. Try demo@example.com / password')
      }
    } catch (err) {
      setError('Login failed. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-paper">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply"></div>
      
      <div className="vintage-paper max-w-md w-full p-8 relative z-10 transform hover:rotate-0 rotate-[0.5deg] transition-transform duration-300">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] transition-colors inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">Back home</span>
          </Link>
          
          <div className="postmark px-3 py-1 font-hand transform rotate-3">Welcome back</div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="font-title text-4xl mb-2 gold-embossed">Sign In</h1>
          <div className="w-24 h-1 bg-[rgb(var(--gold))] mx-auto mb-4"></div>
          <p className="text-[rgb(var(--burgundy-dark))] font-hand text-lg">
            Continue your journey where you left off
          </p>
        </div>
        
        {error && (
          <div className="bg-[rgb(var(--burgundy))]/10 border border-[rgb(var(--burgundy))]/30 text-[rgb(var(--burgundy))] px-4 py-3 rounded mb-6 text-sm font-hand">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="flex justify-between items-center">
              <label className="vintage-label" htmlFor="password">Password</label>
              <Link href="/auth/forgot-password" className="text-sm text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">
                Forgot Password?
              </Link>
            </div>
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
                placeholder="Enter your password"
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
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-[rgb(var(--burgundy))]/30 text-[rgb(var(--burgundy))] focus:ring-[rgb(var(--burgundy))]"
              />
              <span className="ml-2 text-sm text-[rgb(var(--burgundy-dark))] font-hand">Remember me for 30 days</span>
            </label>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="vintage-button w-full justify-center py-3"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-[rgb(var(--burgundy-dark))] font-hand">
            {"Don't have an account yet? "}
            <Link href="/auth/signup" className="text-[rgb(var(--burgundy))] hover:text-[rgb(var(--burgundy-light))] border-b border-[rgb(var(--gold))]/30 hover:border-[rgb(var(--gold))]">
              Sign up here
            </Link>
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-[rgb(var(--gold))]/20">
          <p className="text-center text-sm text-[rgb(var(--burgundy-dark))] font-hand mb-4">Demo credentials</p>
          <div className="bg-[rgb(var(--burgundy))]/5 rounded p-3 text-sm font-hand">
            <p><strong>Email:</strong> demo@example.com</p>
            <p><strong>Password:</strong> password</p>
          </div>
        </div>
      </div>
    </div>
  )
} 