import React from 'react'
import { Card } from '../components/ui/Card'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function CustomerTestimonials() {
  const testimonials = [
    {
      name: "คุณศิริลักษณ์ ดำรงค์สกุล (คุณจอย)",
      role: "เจ้าของร้านจำหน่ายอุปกรณ์สัตว์เลี้ยง Pet Kingdom & Spa",
      text: "ที่ร้านเลือกสเปรย์ตัวนี้มาใช้บำรุงและกรูมมิ่งให้ลูกค้าที่เข้ามาอาบน้ำตัดขนค่ะ กลิ่นตัวน้องๆ สะอาดหอมยาวนาน รักษารอยแดงขุยขอบผิวหนังได้ไวมาก ยอดขายหน้าร้านดีมากค่ะ",
      rating: 5,
      avatar: "/avatar_1.png"
    },
    {
      name: "น.สพ. ดร. นฤเบศ ปรีชากุล (หมอนนท์)",
      role: "เจ้าของคลินิกรักษาสัตว์ Happy Paw Clinic",
      text: "ในฐานะสัตวแพทย์ที่ดูแลผิวหนังสัตว์เลี้ยงมานาน ตัวนี้ตอบโจทย์มากครับ อ่อนโยนและช่วยบำรุงลึกถึงรากขน ลดอาการคันผดผื่นได้ดี ปลอดภัยไร้สารเคมีตกค้างแน่นอนครับ",
      rating: 5,
      avatar: "/avatar_2.png"
    },
    {
      name: "คุณนันทิกา รุ่งอรุณ (คุณแอน)",
      role: "เจ้าของธุรกิจบริการ Pet Hotel & Grooming ครบวงจร",
      text: "ที่โรงแรมบริการรับฝากสัตว์เลี้ยงของเรา ลูกค้าค่อนข้างซีเรียสเรื่องกลิ่นตัวสะสมค่ะ ตั้งแต่เลือกใช้สเปรย์แบรนด์นี้มาฉีดบำรุงระหว่างฝากเลี้ยง กลิ่นอับหายเกลี้ยง ขนนุ่มฟูขึ้น ลูกค้าชมทุกคนค่ะ",
      rating: 5,
      avatar: "/avatar_3.png"
    }
  ]

  return (
    <section className="py-20 bg-light" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">เสียงตอบรับจากผู้ใช้จริง</h2>
          <p className="text-charcoal text-lg">ความพึงพอใจของลูกค้าคือเครื่องยืนยันที่ดีที่สุดของเรา</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 border border-gray-100 shadow-sm hover:shadow-md bg-white">
                <div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-charcoal leading-relaxed mb-6 italic">"{review.text}"</p>
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-50">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border border-gray-200" 
                  />
                  <div>
                    <div className="font-bold text-navy text-sm md:text-base leading-tight">
                      {review.name}
                    </div>
                    {review.role && (
                      <div className="text-charcoal/80 text-xs font-semibold mt-0.5 leading-snug">
                        {review.role}
                      </div>
                    )}
                    <div className="flex items-center space-x-1 text-green-600 text-[10px] font-semibold mt-1">
                      <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-bold">✓ ผู้ใช้จริง</span>
                      <span>ยืนยันการสั่งซื้อ</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
