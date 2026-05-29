import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Truck } from 'lucide-react'

export function CustomerService() {
  const guarantees = [
    {
      title: "60-Day Guarantee",
      desc: "รับประกันความพึงพอใจ คืนเงิน 100% ภายใน 60 วัน หากใช้แล้วไม่เห็นผล",
      icon: ShieldCheck
    },
    {
      title: "24/7 Support",
      desc: "บริการให้คำปรึกษาดูแลลูกค้าตลอด 24 ชั่วโมง โดยผู้เชี่ยวชาญ",
      icon: Clock
    },
    {
      title: "Free Shipping",
      desc: "จัดส่งฟรีทั่วประเทศ ไม่มีขั้นต่ำ รวดเร็วทันใจ",
      icon: Truck
    }
  ]

  return (
    <section className="py-16 bg-navy text-white border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-blue-100/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
