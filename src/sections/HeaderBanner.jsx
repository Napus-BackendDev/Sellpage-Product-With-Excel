import React from 'react'
import { Button } from '../components/ui/Button'
import { motion } from 'framer-motion'

export function HeaderBanner() {
  const scrollToCheckout = () => {
    const el = document.querySelector('#checkout')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-12 pb-24 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-blue-100/70 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                ✨ นวัตกรรมดูแลสัตว์เลี้ยงอันดับ 1
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight">
                สัตว์เลี้ยงแสนรัก... <br className="hidden md:inline" />
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">หอมสะอาด ไร้อาการคัน</span> เพื่อความสุขของทุกคน
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-charcoal leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              นวัตกรรมดูแลผิวหนังและกลิ่นตัวที่ผู้เชี่ยวชาญไว้วางใจ แก้ปัญหาที่ต้นเหตุอย่างเห็นผลจริง ปลอดภัยและอ่อนโยนพิเศษ
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="w-full sm:w-auto" onClick={scrollToCheckout}>
                สั่งซื้อโปรโมชั่นสุดคุ้มทันที
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}>
                เรียนรู้เพิ่มเติม
              </Button>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-none aspect-square">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-40 scale-110"></div>
              <img 
                src="/pet_product_hero.png" 
                alt="Premium Pet Care Product" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
