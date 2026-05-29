import React from 'react'
import { motion } from 'framer-motion'
import { Flower, Sparkles, Activity, Shield, Droplets, Wind, Heart, Zap, ArrowRight, ArrowDown, Image } from 'lucide-react'

export function ProductIntro() {
  const ingredients = [
    {
      nameTh: "คาโมมาย",
      nameEn: "CHAMOMILLA EXTRACT",
      benefit: "ลดระคายเคืองและคัน",
      desc: "บรรเทาอาการคันและลดการอักเสบของผิวหนัง ปลอบประโลมผิวบอบบางและแพ้ง่ายให้กลับมาแข็งแรง",
      icon: Flower,
      image: "/ing_chamomile.png",
      badgeBg: "bg-amber-50 text-amber-600 border border-amber-100/60",
      iconBg: "text-amber-500",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-300"
    },
    {
      nameTh: "ขมิ้นชัน",
      nameEn: "TURMERIC EXTRACT",
      benefit: "ต้านเชื้อราต้านอนุมูลอิสระ",
      desc: "ลดการอักเสบจากเชื้อรา บรรเทาอาการคันเรื้อรัง และมีฤทธิ์ต้านอนุมูลอิสระเพื่อฟื้นฟูสภาพผิวหนัง",
      icon: Sparkles,
      image: "/ing_turmeric.png",
      badgeBg: "bg-yellow-50 text-yellow-600 border border-yellow-100/60",
      iconBg: "text-yellow-600",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] hover:border-yellow-300"
    },
    {
      nameTh: "บัวบก",
      nameEn: "CENTELLA ASIATICA (ECA233)",
      benefit: "ซ่อมแซมและลดรอยแดง",
      desc: "กระตุ้นการสร้างคอลลาเจนและซ่อมแซมผิว ปลอบประโลม ลดรอยแดงได้อย่างมีประสิทธิภาพ",
      icon: Activity,
      image: "/ing_centella.png",
      badgeBg: "bg-emerald-50 text-emerald-600 border border-emerald-100/60",
      iconBg: "text-emerald-500",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:border-emerald-300"
    },
    {
      nameTh: "มังคุด",
      nameEn: "MANGOSTEEN EXTRACT",
      benefit: "Xanthone สูงลดอักเสบ",
      desc: "ต้านอนุมูลอิสระปริมาณสูง ช่วยลดการอักเสบใต้ชั้นผิวและบำรุงสุขภาพผิวหนังให้แข็งแรง",
      icon: Shield,
      image: "/ing_mangosteen.png",
      badgeBg: "bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100/60",
      iconBg: "text-fuchsia-500",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(217,70,239,0.15)] hover:border-fuchsia-300"
    },
    {
      nameTh: "ที ทรี ออยล์",
      nameEn: "TEA TREE OIL (NANO)",
      benefit: "ฤทธิ์ต้านเชื้อราธรรมชาติ",
      desc: "ฤทธิ์ Antifungal จากธรรมชาติในรูปแบบนาโนอณูเล็ก ช่วยเสริมฤทธิ์ EcoGuard Plus ในสูตรสเปรย์ฆ่าเชื้อรา",
      icon: Droplets,
      image: "/ing_teatree.png",
      badgeBg: "bg-teal-50 text-teal-600 border border-teal-100/60",
      iconBg: "text-teal-500",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] hover:border-teal-300"
    },
    {
      nameTh: "ลาเวนเดอร์",
      nameEn: "LAVENDER OIL",
      benefit: "หอมผ่อนคลายต้านแบคทีเรีย",
      desc: "ให้กลิ่นหอมผ่อนคลายและลดความเครียดสะสมของสัตว์เลี้ยง พร้อมคุณสมบัติต้านแบคทีเรียอ่อนๆ",
      icon: Wind,
      image: "/ing_lavender.png",
      badgeBg: "bg-purple-50 text-purple-600 border border-purple-100/60",
      iconBg: "text-purple-500",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-300"
    },
    {
      nameTh: "คอฟฟี่ เชอร์รี่",
      nameEn: "COFFEE CHERRY EXTRACT",
      benefit: "ต้านอนุมูลอิสระชะลอเสื่อม",
      desc: "สารต้านอนุมูลอิสระสูงสกัดจากผลกาแฟธรรมชาติ ช่วยบำรุงบำบัดผิวหนังและชะลอริ้วรอยความเสื่อมโทรม",
      icon: Heart,
      image: "/ing_coffeecherry.png",
      badgeBg: "bg-red-50 text-red-600 border border-red-100/60",
      iconBg: "text-red-500",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] hover:border-red-300"
    },
    {
      nameTh: "พลูคาว",
      nameEn: "HOUTTUYNIA CORDATA",
      benefit: "ต้านติดเชื้อเร่งฟื้นฟูผิว",
      desc: "ต้านการติดเชื้อแบคทีเรียและไวรัส ลดการอักเสบ และช่วยเร่งการฟื้นฟูบำบัดผิวหนังของสัตว์เลี้ยง",
      icon: Zap,
      image: "/ing_houttuynia.png",
      badgeBg: "bg-sky-50 text-sky-600 border border-sky-100/60",
      iconBg: "text-sky-500",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] hover:border-sky-300"
    }
  ]

  const timelineSteps = [
    {
      timeLabelTh: "เริ่มต้น",
      timeValTh: "วันแรก",
      title: "คันทรมาน กลิ่นสาบแรง",
      statusLabel: "ระยะติดเชื้อและอักเสบ",
      mockImageText: "ภาพผิวอักเสบแดงคัน / ส่งกลิ่นสาบ",
      desc: "สัตว์เลี้ยงคันและเกาตลอดเวลา ผิวแดงถลอก ขนร่วง และมีกลิ่นสาบอับชื้นสะสมตามจุดอับต่างๆ ทรมานและเครียด",
      mechanism: "สารสกัดนาโนซิลเวอร์เข้าฆ่าเชื้อแบคทีเรียและยีสต์ลึกถึงเซลล์ต้นตอที่เป็นสาเหตุของโรคผิวหนังทันที"
    },
    {
      timeLabelTh: "ฟื้นฟู",
      timeValTh: "วันที่ 2-3",
      title: "คันลดลง กลิ่นจางหาย",
      statusLabel: "ระยะปลอบประโลมผิว",
      mockImageText: "ภาพผิวเริ่มแห้ง รอยแดงจางลง",
      desc: "อาการเกาลดลง ผดผื่นแดงและแผลถลอกแห้งตัวลงอย่างเห็นได้ชัด กลิ่นอับหายไป สัตว์เลี้ยงนอนหลับสบายผ่อนคลายขึ้น",
      mechanism: "สารสกัดคาโมมายล์และบัวบกซึมบำบัดลึกเพื่อลดอาการอักเสบระคายเคืองและบวมแดง พร้อมเติมความชุ่มชื้น"
    },
    {
      timeLabelTh: "ซ่อมแซม",
      timeValTh: "วันที่ 5-7",
      title: "ผิวสมาน สะเก็ดหลุดร่วง",
      statusLabel: "ระยะสมานเซลล์ผิว",
      mockImageText: "ภาพสะเก็ดแผลหลุด ผิวเริ่มเรียบเนียน",
      desc: "ผิวหนังที่เคยอักเสบหายสนิท สะเก็ดรังแคหลุดร่วงหมดไป ผิวชุ่มชื้นเรียบเนียนขึ้น เส้นขนเริ่มกลับมาขึ้นใหม่",
      mechanism: "สารต้านอนุมูลอิสระจากมังคุดและคอฟฟี่เชอร์รี่ฟื้นฟูโครงสร้างเซลล์ผิวหนังใหม่ เร่งสมานแผลถลอกจากการเกา"
    },
    {
      timeLabelTh: "ป้องกัน",
      timeValTh: "วันที่ 14+",
      title: "ผิวแข็งแรง ขนใหม่ขึ้นฟู",
      statusLabel: "ระยะต้านโรคผิวหนังถาวร",
      mockImageText: "ภาพผิวสุขภาพดี ขนใหม่หนานุ่มเงางาม",
      desc: "เส้นขนใหม่ขึ้นหนานุ่มเงางาม ผิวหนังสุขภาพดีมีเกราะคุ้มกัน ปราศจากกลิ่นตัว สัตว์เลี้ยงร่าเริงกลับมาคลุกคลีได้มั่นใจ",
      mechanism: "ทีทรีออยล์และพลูคาวธรรมชาติสร้างภูมิต้านทานผิวหนัง ป้องกันการติดเชื้อสะสมและไม่กลับมาเป็นซ้ำ"
    }
  ]

  return (
    <section className="py-20 bg-white" id="product-intro">
      <div className="container mx-auto px-4">
        {/* Empathy Introduction & Timeline */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-red-100/60 animate-pulse">
                🚨 ยุติฝันร้ายของคนรักสัตว์
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight max-w-4xl mx-auto">
                ไม่ต้องทนอายใคร... และไม่ต้องนั่งทนมอง <span className="text-red-500">สัตว์เลี้ยงที่คุณรักทรมาน</span> อีกต่อไป!
              </h2>
              <p className="text-sm md:text-base text-charcoal/90 leading-relaxed font-medium max-w-3xl mx-auto">
                เราเข้าใจดีถึงความอึดอัดใจ... ที่ต้องเห็นเขานอนคันจนแผลเลือดซิบ ขนร่วงเป็นกระจุก และมีกลิ่นสาบสะสมจนคนในบ้านเริ่มเว้นระยะห่าง <br className="hidden md:inline" />
                เปลี่ยนทุกความเครียดและความกังวลใจให้เป็น <span className="text-emerald-600 font-extrabold">ความมั่นใจเต็มร้อย</span> ด้วยโปรแกรมฟื้นฟูบำบัดผิวหนังอย่างเป็นลำดับขั้นตอน 14 วัน เพื่อทวงคืนสุขภาพผิวที่แข็งแรงและกลิ่นหอมสะอาด ให้พวกเขากลับมามีความสุขได้อีกครั้งอย่างยั่งยืน
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-16"
          >
            <img src="/empathy_banner.png" alt="Happy pet and owner" className="w-full h-auto object-cover" />
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="relative mt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {timelineSteps.map((step, idx) => {
                const isLast = idx === timelineSteps.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center relative z-10 flex-1 overflow-hidden"
                    >
                      {/* Mock Image Container (At the very top, flush with borders) */}
                      <div className="w-full aspect-[4/3] overflow-hidden relative text-charcoal/40 bg-slate-50 border-b-2 border-slate-100 flex flex-col items-center justify-center shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100/60" />
                        <Image className="w-8 h-8 text-charcoal/30 mb-2 z-10" />
                        <span className="text-[10px] font-bold text-charcoal/60 uppercase tracking-wider z-10 px-4 text-center">
                          {step.mockImageText}
                        </span>
                      </div>

                      {/* Rounded Rectangle Marker in the center (overlapping the border line) */}
                      <div className="relative bg-navy text-white px-4 py-2 rounded-xl shadow-md border-2 border-white flex flex-col items-center justify-center min-w-[100px] whitespace-nowrap z-20 -mt-5 mb-4 shrink-0">
                        <span className="text-[8px] uppercase leading-none opacity-90 font-semibold tracking-wider">{step.timeLabelTh}</span>
                        <span className="text-xs leading-none mt-1 font-extrabold">{step.timeValTh}</span>
                      </div>

                      {/* Context Content (With padding) */}
                      <div className="p-6 pt-0 flex flex-col items-center flex-1 w-full">
                        {/* Title */}
                        <h3 className="text-base font-extrabold text-navy mb-2 leading-snug">{step.title}</h3>

                        {/* Status Badge */}
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full mb-4 bg-blue-50 text-blue-700 border border-blue-100/60">
                          {step.statusLabel}
                        </span>

                        {/* Description */}
                        <p className="text-xs text-charcoal/90 leading-relaxed font-medium mb-4">
                          {step.desc}
                        </p>

                        {/* Mechanism Box */}
                        <div className="border-t border-dashed border-gray-100 pt-3 mt-auto w-full">
                          <span className="text-[9px] font-bold text-navy/70 block uppercase tracking-wide">
                            กลไกฟื้นฟูผิว
                          </span>
                          <span className="text-[10px] text-charcoal/80 block mt-1 leading-snug">
                            {step.mechanism}
                          </span>
                        </div>
                      </div>

                      {/* Desktop Arrow */}
                      {!isLast && (
                        <div className="hidden md:flex absolute top-1/2 -right-7 -translate-y-1/2 z-30 bg-white border border-gray-100 rounded-full w-8 h-8 items-center justify-center shadow-md">
                          <ArrowRight className="w-4 h-4 text-navy" />
                        </div>
                      )}
                    </motion.div>

                    {/* Mobile Arrow */}
                    {!isLast && (
                      <div className="flex md:hidden justify-center items-center my-1 z-20">
                        <div className="bg-white border border-gray-100 rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                          <ArrowDown className="w-4 h-4 text-navy" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Premium Ingredients Showcase */}
        <div className="border-t border-gray-100 pt-16" id="ingredients">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Selected Active Ingredients
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              คัดสรรคุณค่าจากธรรมชาติ 8 ส่วนผสมหลักเกรดพรีเมียม
            </h3>
            <p className="text-charcoal/80 text-sm md:text-base max-w-xl mx-auto">
              ผสานวิทยาศาสตร์ร่วมกับพลังจากธรรมชาติ เพื่อการปกป้องดูแลอย่างมีประสิทธิภาพสูงสุด ปราศจากสารเคมีอันตราย
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ingredients.map((ing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg ${ing.hoverGlow}`}
              >
                <div>
                  {/* Ingredient Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img 
                      src={ing.image} 
                      alt={ing.nameTh} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    {/* Floating Icon */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/90 shadow-sm">
                      <ing.icon className={`w-5 h-5 ${ing.iconBg}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-navy text-base leading-tight">{ing.nameTh}</h4>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${ing.benefit} ${ing.badgeBg}`}>
                        {ing.benefit}
                      </span>
                    </div>
                    <p className="text-gray-400 text-[10px] font-semibold mb-3 italic">{ing.nameEn}</p>
                    <p className="text-charcoal/80 text-xs leading-relaxed">
                      {ing.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
