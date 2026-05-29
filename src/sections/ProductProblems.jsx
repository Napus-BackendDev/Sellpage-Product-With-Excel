import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Flame, Frown, AlertTriangle } from 'lucide-react'

export function ProductProblems() {
  const problems = [
    {
      title: "ปัญหาเรื่องกลิ่นตัวสะสม",
      subtitle: "Severe Odor & Bad Smell",
      icon: AlertCircle,
      image: "/prob_smell.png",
      iconBg: "text-red-500",
      badgeBg: "bg-red-50 text-red-600 border border-red-100/60",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] hover:border-red-300",
      bullets: [
        "อาบน้ำเสร็จไม่กี่ชั่วโมง กลิ่นสาบเหม็นอับก็กลับมาเหมือนเดิม",
        "มีกลิ่นอับชื้นสะสมตามซอกนิ้ว ใบหู และบริเวณข้อพับต่างๆ",
        "คนในบ้านหลีกเลี่ยงที่จะกอดหรือเข้าใกล้เพราะกลิ่นตัวรุนแรง"
      ]
    },
    {
      title: "ปัญหาผิวอักเสบคันและผื่นแดง",
      subtitle: "Chronic Itching & Rashes",
      icon: Flame,
      image: "/prob_itch.png",
      iconBg: "text-orange-500",
      badgeBg: "bg-orange-50 text-orange-600 border border-orange-100/60",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-300",
      bullets: [
        "เกาและแทะผิวหนังตัวเองตลอดวันจนผิวแดงถลอกอักเสบ",
        "เกิดผดผื่นคัน เม็ดพุพองสะสมใต้ชั้นขนโดยที่เรามองไม่เห็น",
        "ผิวหนังแห้งลอกเป็นสะเก็ดรังแคสีขาว ปลิวฟุ้งกระจายเต็มบ้าน"
      ]
    },
    {
      title: "ปัญหาขนร่วงและผิวเสื่อมสภาพ",
      subtitle: "Hair Loss & Skin Damage",
      icon: Frown,
      image: "/prob_hairloss.png",
      iconBg: "text-rose-500",
      badgeBg: "bg-rose-50 text-rose-600 border border-rose-100/60",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.15)] hover:border-rose-300",
      bullets: [
        "เส้นขนร่วงแห้งเสียกระด้าง ร่วงเป็นหย่อมๆ ทั่วบ้านจนบางลง",
        "ผิวหนังเริ่มหนาตัวขึ้น แข็งกระด้าง และมีสีคล้ำดำสะสม",
        "สัตว์เลี้ยงเครียด ซึมเศร้า หงุดหงิดง่ายจากอาการคันตลอดเวลา"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-light/35" id="problems">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider border border-red-100">
            <AlertTriangle className="w-3.5 h-3.5" /> Warning Signs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            สัตว์เลี้ยงของคุณกำลังเผชิญปัญหาเหล่านี้อยู่หรือไม่?
          </h2>
          <p className="text-charcoal/80 text-sm md:text-base">
            อย่าปล่อยให้สัญญาณเตือนเล็กๆ กลายเป็นโรคผิวหนังเรื้อรังที่ทรมานสัตว์เลี้ยงและสร้างความกังวลให้ทุกคนในบ้าน
          </p>
        </div>

        {/* Problems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg ${prob.hoverGlow}`}
            >
              <div>
                {/* Photo Header */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src={prob.image} 
                    alt={prob.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {/* Floating Icon */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/90 shadow-sm">
                    <prob.icon className={`w-5 h-5 ${prob.iconBg}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-navy leading-tight">{prob.title}</h3>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${prob.badgeBg}`}>
                      {prob.subtitle}
                    </span>
                  </div>
                  
                  {/* Bullets List */}
                  <ul className="space-y-3 mt-6">
                    {prob.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-charcoal/90 text-xs leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
