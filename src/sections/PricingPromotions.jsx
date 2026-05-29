import React from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { motion } from 'framer-motion'
import { Check, Truck } from 'lucide-react'

export function PricingPromotions({ onSelectPackage, isExpired }) {
  const packages = [
    {
      id: "buy1",
      title: "ซื้อ 1 ขวด (ชุดทดลอง)",
      price: "฿490",
      originalPrice: "฿690",
      image: "/package_one.png",
      features: ["ใช้งานได้ 1 เดือน", "ดูแลผิวหนังและกลิ่นตัวครบในขวดเดียว", "จัดส่งฟรีทั่วประเทศ"],
      recommended: false
    },
    {
      id: "buy2",
      title: "ซื้อ 2 ขวด (ชุดสุดคุ้ม)",
      price: "฿890",
      originalPrice: "฿1,380",
      image: "/package_two.png",
      features: ["ใช้งานได้ 2 เดือน", "ดูแลต่อเนื่องอย่างเห็นผล", "ประหยัดกว่า 35%", "จัดส่งฟรีทั่วประเทศ"],
      recommended: false
    },
    {
      id: "buy3get1",
      title: "ซื้อ 3 แถม 1 (เซตสุดคุ้มสูงสุด)",
      price: "฿1,390",
      originalPrice: "฿2,760",
      image: "/package_four.png",
      features: ["ได้รับทั้งหมด 4 ขวด (เฉลี่ยขวดละ 347.-)", "ประหยัดสูงสุดกว่า 50%", "เหมาะสำหรับบ้านที่เลี้ยงหลายตัว/ดูแลยาวๆ", "จัดส่งฟรีทั่วประเทศ"],
      recommended: true
    }
  ]

  return (
    <section className="py-24 bg-light relative" id="pricing">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">เลือกโปรโมชั่นที่เหมาะกับคุณ</h2>
          <div className="flex items-center justify-center space-x-2 text-green-600 font-medium">
            <Truck size={20} />
            <span>จัดส่งฟรีทุกรายการสั่งซื้อทั่วประเทศ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`h-full flex flex-col relative overflow-hidden ${pkg.recommended && !isExpired ? 'border-2 border-navy shadow-xl' : 'mt-4 md:mt-6'}`}>
                {pkg.recommended && !isExpired && (
                  <div className="absolute top-0 left-0 right-0 bg-navy text-white text-center py-2 text-sm font-bold tracking-wide uppercase z-10">
                    Best Value - ขายดีที่สุด
                  </div>
                )}
                
                {/* Product package image */}
                <div className={`relative aspect-[4/3] bg-slate-50/50 flex items-center justify-center p-6 border-b border-gray-100 ${pkg.recommended && !isExpired ? 'pt-12' : ''}`}>
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="h-full object-contain max-h-[140px] drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-navy mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-4xl font-extrabold text-navy">
                      {isExpired ? pkg.originalPrice : pkg.price}
                    </span>
                    {!isExpired && (
                      <span className="text-gray-400 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-charcoal">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <Button 
                    className="w-full" 
                    variant={pkg.recommended && !isExpired ? "primary" : "outline"}
                    size="lg"
                    onClick={() => onSelectPackage?.(pkg.id)}
                  >
                    {isExpired ? "สั่งซื้อราคาปกติ" : "สั่งซื้อแพ็กเกจนี้"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
