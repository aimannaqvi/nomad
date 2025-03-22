import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  label?: string
  error?: string
  fullWidth?: boolean
  variant?: 'default' | 'paper' | 'minimal'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, label, error, fullWidth = false, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-paper border-ink/20 rounded focus:border-sepia focus:ring-1 focus:ring-sepia',
      paper: 'bg-cream border-b border-ink/40 rounded-none focus:border-sepia',
      minimal: 'bg-transparent border-b border-ink/30 rounded-none focus:border-sepia',
    }
    
    const widthClass = fullWidth ? 'w-full' : 'w-auto'
    const errorClass = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
    
    return (
      <div className={`${fullWidth ? 'w-full' : 'w-auto'}`}>
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium mb-1"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          
          <input
            className={cn(
              'px-3 py-2 focus:outline-none transition-colors',
              icon ? 'pl-10' : 'pl-3',
              variantClasses[variant],
              errorClass,
              widthClass,
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        
        {error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

// Also export a Textarea component with similar styling
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  fullWidth?: boolean
  variant?: 'default' | 'paper' | 'minimal'
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, fullWidth = false, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-paper border-ink/20 rounded focus:border-sepia focus:ring-1 focus:ring-sepia',
      paper: 'bg-cream border-b border-ink/40 rounded-none focus:border-sepia',
      minimal: 'bg-transparent border-b border-ink/30 rounded-none focus:border-sepia',
    }
    
    const widthClass = fullWidth ? 'w-full' : 'w-auto'
    const errorClass = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
    
    return (
      <div className={`${fullWidth ? 'w-full' : 'w-auto'}`}>
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium mb-1"
          >
            {label}
          </label>
        )}
        
        <textarea
          className={cn(
            'px-3 py-2 focus:outline-none transition-colors',
            variantClasses[variant],
            errorClass,
            widthClass,
            className
          )}
          ref={ref}
          {...props}
        />
        
        {error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea' 