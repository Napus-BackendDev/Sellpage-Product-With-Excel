import React from 'react'
import { cn } from '../../lib/utils'

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    primary: "bg-navy text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-navy hover:bg-gray-100",
    outline: "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
  }
  
  const sizes = {
    default: "h-12 px-8 py-2 text-base",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-10 text-lg font-bold",
    icon: "h-10 w-10",
  }

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"
