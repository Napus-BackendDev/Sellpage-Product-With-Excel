import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { Timer } from 'lucide-react'

export function StickyTimerBar({ timeLeft, isExpired }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled down past 300px and timer is not expired
      if (window.scrollY > 300 && !isExpired) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on mount to handle initial load/refresh position
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isExpired])

  const formatTime = (timeInMs) => {
    const totalSeconds = Math.floor(timeInMs / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    const centiseconds = Math.floor((timeInMs % 1000) / 10)

    return {
      hours: hours.toString().padStart(2, '0'),
      mins: mins.toString().padStart(2, '0'),
      secs: secs.toString().padStart(2, '0'),
      ms: centiseconds.toString().padStart(2, '0')
    }
  }

  const handleScrollToCheckout = () => {
    const checkoutEl = document.querySelector('#checkout')
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const time = formatTime(timeLeft)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 border-t border-white/10 text-white backdrop-blur-md py-4 px-6 shadow-[0_-8px_30px_rgba(10,37,64,0.3)]"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left/Middle Content: Urgency Text and Clock */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <span className="text-blue-200/90 font-bold flex items-center gap-1.5 uppercase text-xs md:text-sm tracking-wider">
                <Timer size={18} className="text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                ด่วน! ลดราคาสูงสุด 50% ก่อนหมดเวลาใน:
              </span>
              
              <div className="flex items-center space-x-1.5 font-mono text-xl md:text-2xl font-bold bg-blue-950/80 px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
                <span className="text-white">{time.hours}</span>
                <span className="text-blue-400/60 animate-pulse">:</span>
                <span className="text-white">{time.mins}</span>
                <span className="text-blue-400/60 animate-pulse">:</span>
                <span className="text-white">{time.secs}</span>
                <span className="text-blue-400/60 animate-pulse">:</span>
                <span className="text-amber-400 font-extrabold">{time.ms}</span>
              </div>
            </div>

            {/* Right Content: Buy Now Button */}
            <div className="w-full md:w-auto">
              <Button
                onClick={handleScrollToCheckout}
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-extrabold px-8 py-3 text-sm md:text-base rounded-full shadow-[0_4px_15px_rgba(37,99,235,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                รับโปรโมชั่นนี้ทันที
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
