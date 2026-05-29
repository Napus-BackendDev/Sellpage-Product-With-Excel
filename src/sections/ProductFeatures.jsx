import React from 'react'
import { motion } from 'framer-motion'
import { Check, Heart, Zap, Stethoscope } from 'lucide-react'

export function ProductFeatures() {
  const features = [
    {
      title: "Safe for All Breeds",
      desc: "ปลอดภัยสำหรับสัตว์เลี้ยงทุกสายพันธุ์และทุกขนาด",
      icon: Heart
    },
    {
      title: "Fast-Acting",
      desc: "เห็นผลรวดเร็วและปกป้องอย่างต่อเนื่องยาวนาน",
      icon: Zap
    },
    {
      title: "Natural Care",
      desc: "สูตรอ่อนโยน สกัดจากธรรมชาติ ไม่ระคายเคืองผิว",
      icon: Check
    },
    {
      title: "Pro Grade",
      desc: "คุณภาพระดับพรีเมียมที่คลินิกสัตว์แพทย์แนะนำ",
      icon: Stethoscope
    }
  ]

  return (
    <section className="py-24 bg-navy text-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">จุดเด่นของผลิตภัณฑ์</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">ครบทุกการดูแลที่สัตว์เลี้ยงของคุณต้องการ ในขวดเดียว</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/10"
            >
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-blue-100/90 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
