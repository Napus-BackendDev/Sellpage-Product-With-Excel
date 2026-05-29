import React from 'react'
import { CheckCircle, ShieldCheck, Microscope } from 'lucide-react'

export function CertificateLoop() {
  const certificates = [
    { icon: ShieldCheck, text: "FDA Certified (ความปลอดภัยระดับสากล)" },
    { icon: Microscope, text: "Kasetsart University Tested" },
    { icon: CheckCircle, text: "99.9% Anti-Bacterial" },
  ]

  // Duplicate for seamless loop
  const loopItems = [...certificates, ...certificates, ...certificates]

  return (
    <div className="bg-navy py-6 overflow-hidden flex whitespace-nowrap relative border-y-4 border-white/10">
      <div className="animate-marquee flex items-center space-x-12">
        {loopItems.map((cert, index) => (
          <div key={index} className="flex items-center space-x-3 text-white">
            <cert.icon className="w-6 h-6 text-blue-300" />
            <span className="text-base md:text-lg font-medium">{cert.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
