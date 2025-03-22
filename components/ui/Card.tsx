import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'vintage';
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padded = true,
  shadow = 'vintage',
  bordered = true,
}) => {
  // Determine padding class
  const paddingClass = padded ? 'p-4' : '';
  
  // Determine shadow class
  const shadowClass = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    vintage: 'shadow-vintage hover:shadow-vintage-hover transition-all',
  }[shadow];
  
  // Determine border class
  const borderClass = bordered ? 'border border-ink/10' : '';
  
  return (
    <div className={`bg-cream rounded-lg overflow-hidden ${paddingClass} ${shadowClass} ${borderClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-4 border-b border-ink/10', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('font-display text-xl', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-4 border-t border-ink/10', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardStamp({
  text,
  color = 'red',
  rotation = '-12deg',
  className,
  ...props
}: {
  text: string
  color?: 'red' | 'blue' | 'green' | 'sepia'
  rotation?: string
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const colorClasses = {
    red: 'bg-red-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    sepia: 'bg-sepia',
  }
  
  return (
    <div
      className={cn(
        `${colorClasses[color]} text-paper rounded-full px-4 py-1 inline-block uppercase text-xs font-bold tracking-wider transform`,
        className
      )}
      style={{ transform: `rotate(${rotation})` }}
      {...props}
    >
      {text}
    </div>
  )
}
