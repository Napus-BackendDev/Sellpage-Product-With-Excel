import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const faqs = [
    {
      q: "สินค้าปลอดภัยจริงหรือไม่?",
      a: "มั่นใจได้ 100% ผลิตภัณฑ์ของเราผ่านการรับรองจาก FDA (อย.) และผ่านการทดสอบประสิทธิภาพความปลอดภัยโดยมหาวิทยาลัยเกษตรศาสตร์ ไม่มีสารเคมีอันตรายตกค้าง"
    },
    {
      q: "ใช้ได้กับสัตว์เลี้ยงทุกสายพันธุ์หรือไม่?",
      a: "พัฒนามาเพื่อสัตว์เลี้ยงทุกขนาดและทุกสายพันธุ์ ด้วยสูตรอ่อนโยนพิเศษ สกัดจากธรรมชาติ แม้แต่สัตว์เลี้ยงที่มีผิวแพ้ง่ายก็สามารถใช้ได้อย่างปลอดภัย"
    },
    {
      q: "ต้องใช้นานแค่ไหนถึงจะเห็นผล?",
      a: "กลิ่นตัวจะลดลงอย่างเห็นได้ชัดภายใน 24-48 ชั่วโมงแรกที่ใช้ และอาการคัน ผดผื่นรอยแดงจะเริ่มดีขึ้นอย่างมีนัยสำคัญภายใน 3-5 วัน แนะนำให้ใช้ต่อเนื่องเพื่อผลลัพธ์ที่ดีที่สุด"
    },
    {
      q: "แตกต่างจากผลิตภัณฑ์ทั่วไปอย่างไร?",
      a: "ผลิตภัณฑ์ทั่วไปมักใช้น้ำหอมเพื่อ 'กลบกลิ่น' ชั่วคราว แต่ผลิตภัณฑ์ของเราทำงานโดยการกำจัดเชื้อแบคทีเรียและยีสต์ 99.9% ซึ่งเป็น 'ต้นเหตุที่แท้จริง' ของปัญหากลิ่นและอาการคัน"
    }
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 bg-light" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">คำถามที่พบบ่อย (FAQ)</h2>
          <p className="text-charcoal text-lg">ข้อสงสัยยอดฮิตจากลูกค้าของเรา</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-navy text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-navy transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-charcoal border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
