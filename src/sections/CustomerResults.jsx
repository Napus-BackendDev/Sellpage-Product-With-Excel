import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Ban, Droplets, Sparkles, Heart, PawPrint, Award, Image } from 'lucide-react'

export function CustomerResults() {
  const reviewImageSrc = "" // ใส่ที่อยู่รูปภาพขนาดใหญ่ตรงนี้ เช่น "/customer_thankyou_banner.png"

  const specs = [
    {
      title: "100% Organic Extracts",
      desc: "สารสกัดจากธรรมชาตินานาชนิด ปลอดภัยต่อรากขนและเซลล์ผิว",
      icon: Leaf
    },
    {
      title: "Veterinary Approved",
      desc: "สูตรที่สัตวแพทย์แนะนำ ปลอดภัยแม้สัตว์เลี้ยงเลียผิวหนัง",
      icon: ShieldCheck
    },
    {
      title: "Paraben & Sulfate Free",
      desc: "ปราศจากสารกันเสียและสารเคมีชำระล้างที่เป็นอันตราย",
      icon: Ban
    },
    {
      title: "pH Balanced (6.5 - 7.5)",
      desc: "ค่ากรดด่างที่สมดุลกับธรรมชาติผิวหนังของสุนัขและแมว",
      icon: Droplets
    },
    {
      title: "Alcohol & Silicone Free",
      desc: "ไม่ก่อให้เกิดผิวแห้งตึง ไม่ระคายเคืองหรืออุดตันรูขุมขน",
      icon: Sparkles
    },
    {
      title: "Hypoallergenic Formula",
      desc: "สูตรผ่านการวิจัยโอกาสเกิดการแพ้ต่ำ อ่อนโยนพิเศษต่อผิวแพ้ง่าย",
      icon: Heart
    },
    {
      title: "Cruelty Free Quality",
      desc: "ไม่มีส่วนผสมและกระบวนการทดลองที่เป็นอันตรายต่อสัตว์",
      icon: PawPrint
    },
    {
      title: "GMP Certified Standards",
      desc: "ผลิตภายใต้กระบวนการมาตรฐานโรงงานสากลเพื่อความปลอดภัยสูงสุด",
      icon: Award
    }
  ]

  return (
    <section className="py-24 bg-white" id="results">
      <div className="container mx-auto px-4">
        {/* Before & After Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">ขอบคุณ ลูกค้าทุกคนและ สัตว์เลี้ยงทุกตัวที่ไว้วางใจ</h2>
          <p className="text-charcoal text-lg max-w-xl mx-auto">ภาพความประทับใจจากเจ้าของสัตว์เลี้ยงที่ไว้วางใจเลือกใช้ผลิตภัณฑ์ดูแลผิวของเรา</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {reviewImageSrc ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white"
            >
              <img 
                src={reviewImageSrc} 
                alt="ขอบคุณลูกค้าทุกคนและสัตว์เลี้ยงทุกตัวที่ไว้วางใจ" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-[16/9] bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-charcoal/40 p-8 select-none shadow-inner"
            >
              <Image className="w-16 h-16 text-charcoal/30 mb-4 animate-pulse" />
              <h3 className="text-lg font-bold text-charcoal/70 mb-2 text-center">
                พื้นที่สำหรับใส่รูปภาพรีวิวขนาดใหญ่ (1 รูปเต็มเซกชัน)
              </h3>
              <p className="text-xs text-charcoal/40 text-center max-w-md leading-relaxed">
                เหมาะสำหรับใส่รูปภาพรวมรีวิวจากลูกค้า, ภาพความประทับใจ หรือป้ายแบนเนอร์ขอบคุณที่มีความกว้างเต็มเซกชัน (ขนาดแนะนำ: 1920x1080 หรือสัดส่วน 16:9)
              </p>
            </motion.div>
          )}
        </div>

        {/* Product Specifications & Safety Criteria */}
        <div className="mt-24 border-t border-gray-100 pt-20">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Product Specifications & Safety
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              เกณฑ์มาตรฐานความปลอดภัยสูงสุด
            </h3>
            <p className="text-charcoal text-sm md:text-base max-w-xl mx-auto">
              ใส่ใจทุกขั้นตอนเพื่อผิวหนังและสุขภาพของสัตว์เลี้ยงที่คุณรัก ผ่านเกณฑ์รับรองมาตรฐานระดับสากล
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-light/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 border border-gray-100">
                  <spec.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-navy text-sm md:text-base mb-1.5">{spec.title}</h4>
                <p className="text-charcoal/80 text-[11px] md:text-xs leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
