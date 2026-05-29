import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Users, Star, Eye } from 'lucide-react'

// Integer Count Up Counter with Scroll Detection & Smooth Increment Transition
function AnimatedCounter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef(null)
  const prevTargetRef = useRef(0)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let startTimestamp = null
    const startValue = prevTargetRef.current
    const valueDifference = target - startValue
    
    // Smooth fast count-up for live ticks (600ms), normal duration for initial load (2000ms)
    const currentDuration = startValue === 0 ? duration : 600

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / currentDuration, 1)
      setCount(Math.floor(progress * valueDifference + startValue))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    
    window.requestAnimationFrame(step)

    // Trigger scale pulse animation on live increments
    if (startValue !== 0 && target !== startValue) {
      setPulse(true)
      const timer = setTimeout(() => setPulse(false), 400)
      prevTargetRef.current = target
      return () => clearTimeout(timer)
    }

    prevTargetRef.current = target
  }, [hasStarted, target, duration])

  return (
    <motion.span 
      ref={elementRef}
      animate={pulse ? { scale: [1, 1.12, 1] } : {}}
      transition={{ duration: 0.3 }}
      className="inline-block"
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  )
}

// Decimal Count Up Counter for Ratings
function AnimatedDecimalCounter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const current = progress * target
      setCount(Number(current.toFixed(1)))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [hasStarted, target, duration])

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  // Setup targets state
  const [bottlesSold, setBottlesSold] = useState(42180) // Starts around 40k
  const [petsHelped, setPetsHelped] = useState(5130)   // Starts around 5k
  const [viewers, setViewers] = useState(342)           // Starts around 342

  // Trigger live updates
  useEffect(() => {
    // 1. Listen to live purchases from notifications
    const handleLivePurchase = (e) => {
      const pkgId = e.detail?.packageId || 'buy3get1'
      let bottlesAdded = 4
      if (pkgId === 'buy1') bottlesAdded = 1
      if (pkgId === 'buy2') bottlesAdded = 2
      
      setBottlesSold(prev => prev + bottlesAdded)
      setPetsHelped(prev => prev + 1)
    }

    window.addEventListener('live-purchase', handleLivePurchase)

    // 2. Simulating viewer fluctuations every 4 seconds
    const viewersInterval = setInterval(() => {
      setViewers(prev => {
        const delta = Math.floor(Math.random() * 7) - 3 // -3 to +3 viewers
        const next = prev + delta
        // Keep viewers count realistically bounded between 310 and 390
        return Math.max(310, Math.min(390, next))
      })
    }, 4000)

    return () => {
      window.removeEventListener('live-purchase', handleLivePurchase)
      clearInterval(viewersInterval)
    }
  }, [])

  const stats = [
    {
      id: "sales",
      title: "ยอดสั่งซื้อสำเร็จแล้ว",
      value: bottlesSold,
      suffix: " ขวด",
      icon: ShoppingBag,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      counterType: "integer"
    },
    {
      id: "pets",
      title: "สัตว์เลี้ยงที่ได้รับการดูแล",
      value: petsHelped,
      suffix: " ตัว",
      icon: Users,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      counterType: "integer"
    },
    {
      id: "rating",
      title: "ความพึงพอใจจากผู้ใช้จริง",
      value: 4.9,
      suffix: " / 5.0 ดาว",
      icon: Star,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      counterType: "decimal"
    },
    {
      id: "active",
      title: "กำลังสนใจชมหน้านี้อยู่ขณะนี้",
      value: viewers,
      suffix: " คน",
      icon: Eye,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      counterType: "integer"
    }
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden" id="stats">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:shadow-md transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>

              {/* Animated Value container (keeps components mounted, transitions numbers smoothly) */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-2">
                {stat.counterType === "decimal" ? (
                  <AnimatedDecimalCounter target={stat.value} suffix={stat.suffix} />
                ) : (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                )}
              </div>

              {/* Stat Title */}
              <p className="text-xs md:text-sm font-semibold text-charcoal/80">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
