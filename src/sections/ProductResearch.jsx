import React from 'react'
import { Card } from '../components/ui/Card'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Sparkles, Heart } from 'lucide-react'

export function ProductResearch() {
  const researchData = [
    {
      value: "99.9%",
      title: "ยับยั้งเชื้อแบคทีเรียและยีสต์",
      desc: "กำจัดเชื้อก่อโรคผิวหนังที่เป็นต้นเหตุของกลิ่นตัวและอาการคันได้อย่างสมบูรณ์แบบ",
      footer: "ผ่านการทดสอบประสิทธิภาพจากห้องปฏิบัติการมาตรฐานสากล",
      badge: "Lab Certified",
      image: "/res_bacteria.png",
      icon: ShieldCheck,
      iconBg: "text-blue-500",
      badgeBg: "bg-blue-50 text-blue-600 border border-blue-100",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-blue-300"
    },
    {
      value: "24-48 ชม.",
      title: "กลิ่นตัวลดลงอย่างเห็นได้ชัด",
      desc: "สลายโมเลกุลกลิ่นอับสะสมและระงับกลิ่นเหม็น ยืนยันผลลัพธ์จากเจ้าของสัตว์เลี้ยงกว่า 95%",
      footer: "ภาพสภาพผิวหนังอักเสบสะสมแบคทีเรียก่อนเริ่มการบำบัดกลิ่น",
      badge: "Clinical Test",
      image: "/before_pet_skin.png",
      icon: Clock,
      iconBg: "text-amber-500",
      badgeBg: "bg-amber-50 text-amber-600 border border-amber-100",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-300"
    },
    {
      value: "3-5 วัน",
      title: "ผดผื่นแดงและอาการคันหายไป",
      desc: "ฟื้นบำรุงเซลล์ผิวหนังชั้นนอกที่อักเสบ ปลอบประโลมผิวแห้งกร้าน และลดสะเก็ดแผลแห้งจากการเกา",
      footer: "ภาพผลลัพธ์ผิวหนังแข็งแรงสุขภาพดีและเส้นขนขึ้นใหม่สมบูรณ์",
      badge: "Skin Restored",
      image: "/after_pet_skin.png",
      icon: Sparkles,
      iconBg: "text-emerald-500",
      badgeBg: "bg-emerald-50 text-emerald-600 border border-emerald-100",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:border-emerald-300"
    },
    {
      value: "100%",
      title: "ปลอดภัย เลียได้ ไร้สารสเตียรอยด์",
      desc: "สูตรออร์แกนิกอ่อนโยนพิเศษ ปราศจากสารสเตียรอยด์ แอลกอฮอล์ และพาราเบน เลียได้ปลอดภัยไม่ระคายเคือง",
      footer: "ผ่านการทดสอบโดยสัตวแพทย์ว่าไม่ก่อให้เกิดการระคายเคืองต่อผิวหนังบอบบาง",
      badge: "Safety Certified",
      image: "/pet_product_hero.png",
      icon: Heart,
      iconBg: "text-rose-500",
      badgeBg: "bg-rose-50 text-rose-600 border border-rose-100",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.15)] hover:border-rose-300"
    }
  ]

  return (
    <section className="py-20 bg-light" id="research">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Clinical Lab Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">ผลลัพธ์ที่พิสูจน์แล้วทางการแพทย์</h2>
          <p className="text-charcoal text-lg max-w-xl mx-auto">สถิติจากผลการทดสอบประสิทธิภาพการรักษาปัญหาผิวหนังและกลิ่นตัวของสัตว์เลี้ยง</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {researchData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg ${data.hoverGlow}`}>
                <div>
                  {/* Photo Header */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img 
                      src={data.image} 
                      alt={data.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    {/* Floating Icon */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/90 shadow-sm">
                      <data.icon className={`w-5 h-5 ${data.iconBg}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-3xl font-extrabold text-navy leading-none">{data.value}</span>
                      <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full ${data.badgeBg}`}>
                        {data.badge}
                      </span>
                    </div>
                    <h4 className="font-bold text-navy text-base mb-2 leading-tight">{data.title}</h4>
                    <p className="text-charcoal/80 text-xs leading-relaxed">
                      {data.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-3 border-t border-gray-50">
                  <p className="text-gray-400 text-[10px] leading-normal italic">
                    * {data.footer}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
