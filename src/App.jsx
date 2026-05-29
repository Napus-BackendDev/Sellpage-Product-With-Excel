import React, { useState, useEffect } from 'react'
import { HeaderBanner } from './sections/HeaderBanner'
import { CertificateLoop } from './sections/CertificateLoop'
import { ProductProblems } from './sections/ProductProblems'
import { ProductIntro } from './sections/ProductIntro'
import { ProductResearch } from './sections/ProductResearch'
import { ProductFeatures } from './sections/ProductFeatures'
import { CustomerTestimonials } from './sections/CustomerTestimonials'
import { CustomerResults } from './sections/CustomerResults'
import { PricingPromotions } from './sections/PricingPromotions'
import { CheckoutForm } from './sections/CheckoutForm'
import { CustomerService } from './sections/CustomerService'
import { FAQ } from './sections/FAQ'
import { FloatingNotification } from './components/FloatingNotification'
import { Navbar } from './components/Navbar'
import { StickyTimerBar } from './components/StickyTimerBar'
import { TimerSection } from './sections/TimerSection'
import { StatsSection } from './sections/StatsSection'

function App() {
  const [selectedPackage, setSelectedPackage] = useState('buy3get1')
  const [timeLeft, setTimeLeft] = useState(900000) // Default 15 minutes in milliseconds

  useEffect(() => {
    // Reset timer to 15 minutes from now on every page load/mount (Option 2)
    const expirationTime = Date.now() + 15 * 60 * 1000 

    let timer

    const calculateTimeLeft = () => {
      const now = Date.now()
      const diff = Math.max(0, expirationTime - now)
      setTimeLeft(diff)
      if (diff === 0 && timer) {
        clearInterval(timer)
      }
    }

    calculateTimeLeft()

    timer = setInterval(() => {
      calculateTimeLeft()
    }, 33) // Update every 33ms (~30fps) for smooth millisecond countdown

    return () => clearInterval(timer)
  }, [])

  const isExpired = timeLeft === 0

  const handleSelectPackage = (pkgId) => {
    setSelectedPackage(pkgId)
    const checkoutEl = document.querySelector('#checkout')
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-light font-sans relative pt-16">
      <Navbar />
      <main className="relative z-10">
        <HeaderBanner />
        <CertificateLoop />
        <ProductProblems />
        <ProductIntro />
        <ProductResearch />
        <ProductFeatures />
        <StatsSection />
        <CustomerTestimonials />
        <CustomerResults />
        <TimerSection timeLeft={timeLeft} isExpired={isExpired} />
        <PricingPromotions onSelectPackage={handleSelectPackage} isExpired={isExpired} />
        <CheckoutForm selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} isExpired={isExpired} />
        <CustomerService />
        <FAQ />
      </main>
      
      <StickyTimerBar timeLeft={timeLeft} isExpired={isExpired} />
      <FloatingNotification isExpired={isExpired} />
      
      <footer className="bg-navy py-6 text-center text-blue-100/60 text-sm border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Premium Pet Care. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
