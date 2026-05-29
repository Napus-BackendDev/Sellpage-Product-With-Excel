import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

export function FloatingNotification({ isExpired }) {
  const [notifications, setNotifications] = useState([])

  const mockNames = [
    "คุณกิตติศักดิ์ รุ่งเรือง",
    "คุณเกรียงไกร ชัยชนะ",
    "คุณโกศล สุวรรณรัตน์",
    "คุณขจรเกียรติ สารบรรณ",
    "คุณคณิน จิตต์มั่นคง",
    "คุณคำรณ บุญประสิทธิ์",
    "คุณจงรักษ์ เลิศวิจิตร",
    "คุณจักรกฤษณ์ พงษ์ศิริ",
    "คุณจิรวัฒน์ อัครเดชเดชา",
    "คุณชลทิศ จารุพงศ์",
    "คุณชยานันต์ ทิพย์มณี",
    "คุณชัชวาลย์ รัตนไพศาล",
    "คุณชัยรัตน์ เรืองวรารักษ์",
    "คุณชินกร สิทธิมงคล",
    "คุณโชติวัฒน์ ปัญญาเลิศ",
    "คุณฐิติพงศ์ เจริญพานิช",
    "คุณณพเดช อนันตศิลป์",
    "คุณณัฐพงษ์ เกียรติทวี",
    "คุณณัฐวัฒน์ ปรีชาศิลป์",
    "คุณเดชา พัฒนากุล",
    "คุณทรงพล สินพิพัฒน์",
    "คุณทวีศักดิ์ ชลประเสริฐ",
    "คุณธนกร เลิศอนันต์",
    "คุณธนเดช มงคลเจริญ",
    "คุณธนา เจริญลาภ",
    "คุณธวัชชัย รัตนศักดิ์",
    "คุณธีรวัฒน์ เกียรติเจริญ",
    "คุณนครินทร์ วงศ์สุวรรณ",
    "คุณนราธิป อัครวิจิตร",
    "คุณnรินทร์ รัศมีโรจน์",
    "คุณนวพล เลิศรัตนชัย",
    "คุณนิรันดร์ พงษ์สถิตย์",
    "คุณบรรเจิด ศรีแสงทอง",
    "คุณปฏิวัติ ตั้งมั่นคง",
    "คุณปฐมพงษ์ วิศรุตศิลป์",
    "คุณปองพล จิตอาสา",
    "คุณประภัสสร เกียรติธำรง",
    "คุณปราโมทย์ วัฒนพงษ์",
    "คุณปิยพงษ์ เลิศอนันต์",
    "คุณพงศธร สินประเสริฐ",
    "คุณพชร เกียรติคุณ",
    "คุณพลพล เจริญสุข",
    "คุณพีรพล เลิศสิริอนันต์",
    "คุณภัทรพล เจริญกุล",
    "คุณภาณุวัฒน์ กลิ่นประทุม",
    "คุณภูมินทร์ วัฒนศิลป์",
    "คุณมนัส สุขวัฒนา",
    "คุณเมธัส สุวรรณรัตน์",
    "คุณรณชัย ใจแข็ง",
    "คุณกานดา แก้วมณี",
    "คุณกัญญาภัทร อุดมทรัพย์",
    "คุณเกศรา รัตนโกสินทร์",
    "คุณขนิษฐา วราพงษ์",
    "คุณจารุวรรณ เลิศวดี",
    "คุณจิดาภา อรุณโรจน์",
    "คุณจิราภรณ์ วงศ์ศิริ",
    "คุณชนิกานต์ วัฒนพานิช",
    "คุณชลดา อรุณรัตน์",
    "คุณชัญญานุช ประเสริฐกุล",
    "คุณฐิตาภา พงษ์ศิริกุล",
    "คุณณดา เจริญเกียรติ",
    "คุณณิชชา เกียรติทวีชัย",
    "คุณณัฐริดา วัฒนกุล",
    "คุณธัญญารัตน์ อุดมทรัพย์",
    "คุณนพมาศ สิทธิโชค",
    "คุณนลินี เลิศพาณิชย์",
    "คุณนัชชา เจริญสุข",
    "คุณเบญจวรรณ สุวรรณรัตน์",
    "คุณปณิดา เลิศอนันต์",
    "คุณปวีณา เกียรติเจริญ",
    "คุณพรรณราย วรารักษ์",
    "คุณพรประภา รัตนศิลป์",
    "คุณพลอยชมพู พงษ์ศิริ",
    "คุณพิชชา เลิศรัตนชัย",
    "คุณเพ็ญศรี เจริญลาภ",
    "คุณแพรวพรรณ เจริญลาภ",
    "คุณภัทราภรณ์ รัศมีโรจน์",
    "คุณมณีรัตน์ วรวัฒน์",
    "คุณเมทินี ศรีแสงทอง",
    "คุณเยาวลักษณ์ อนันตศิลป์",
    "คุณรพีพรรณ วรรณรักษ์",
    "คุณรัชนี เจริญลาภ",
    "คุณวรรณิศา รัตนศิลป์",
    "คุณวราภรณ์ วงศ์สุวรรณ",
    "คุณวิไลวรรณ เจริญลาภ",
    "คุณศิริลักษณ์ เลิศรัตนชัย",
    "คุณสโรชา สินพิพัฒน์",
    "คุณสุจิตรา เจริญเกียรติ",
    "คุณสุทัตตา ปรีชาศิลป์",
    "คุณสุพรรณิกา รุ่งอรุณ",
    "คุณอัญชลี รัตนศักดิ์",
    "คุณอลิสา เกียรติเจริญ",
    "คุณอังคณา วงศ์สุวรรณ",
    "คุณอรทัย อนันตศิลป์",
    "คุณอัจฉราภรณ์ ประเสริฐกุล",
    "คุณอุมาพร อุดมทรัพย์",
    "คุณเอมิกา เกียรติทวีชัย",
    "คุณอารดา รัตนศักดิ์",
    "คุณศิรินทรา เลิศวิจิตร",
    "คุณพรทิพย์ เจริญพานิช"
  ]
  const mockProvinces = ["กรุงเทพมหานคร", "เชียงใหม่", "ชลบุรี", "ภูเก็ต", "ขอนแก่น"]

  // TIME_UNIT controls the delay speed:
  // - Use 1000 for SECONDS (Recommended for testing so you can see them stack)
  // - Use 60000 for MINUTES (As requested for production: 10 to 30 minutes)
  const TIME_UNIT = 1000 

  useEffect(() => {
    let isMounted = true

    // Show first notification after 4 seconds
    const firstTimeout = setTimeout(() => {
      if (isMounted) addRandomNotification()
    }, 4000)

    let nextTimeoutId

    const scheduleNext = () => {
      // Random delay between 1 to 4 units (seconds or minutes)
      const randomDelay = (Math.random() * 3 + 1) * TIME_UNIT
      
      nextTimeoutId = setTimeout(() => {
        if (isMounted) {
          addRandomNotification()
          scheduleNext()
        }
      }, randomDelay)
    }

    // Start scheduling loop
    scheduleNext()

    const handleUserPurchase = (e) => {
      if (!isMounted) return
      const { name, province, packageId } = e.detail
      
      const pkgTextMap = {
        buy3get1: "เซตสุดคุ้ม ซื้อ 3 แถม 1",
        buy2: "ชุดสุดคุ้ม ซื้อ 2 ขวด",
        buy1: "ชุดทดลอง ซื้อ 1 ขวด"
      }
      
      const packageText = pkgTextMap[packageId] || "สั่งซื้อผลิตภัณฑ์ดูแลผิวหนังสัตว์เลี้ยง"
      
      let formattedName = name.trim()
      if (formattedName && !formattedName.startsWith("คุณ")) {
        formattedName = `คุณ${formattedName}`
      } else if (!formattedName) {
        formattedName = "ลูกค้าผู้มีอุปการคุณ"
      }

      const id = Math.random().toString(36).substring(2, 9)
      const newNotif = {
        id,
        name: formattedName,
        location: province || "ประเทศไทย",
        packageText: packageText,
        time: "เมื่อสักครู่นี้",
        isUser: true
      }
      
      setNotifications((prev) => {
        const next = [...prev, newNotif]
        if (next.length > 2) {
          next.shift()
        }
        return next
      })

      // Remove after 8 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      }, 8000)
    }

    window.addEventListener('user-purchase', handleUserPurchase)

    return () => {
      isMounted = false
      clearTimeout(firstTimeout)
      clearTimeout(nextTimeoutId)
      window.removeEventListener('user-purchase', handleUserPurchase)
    }
  }, [])

  const mockPackages = [
    { id: 'buy3get1', text: "เซตสุดคุ้ม ซื้อ 3 แถม 1" },
    { id: 'buy2', text: "ชุดสุดคุ้ม ซื้อ 2 ขวด" },
    { id: 'buy1', text: "ชุดทดลอง ซื้อ 1 ขวด" }
  ]

  const addRandomNotification = () => {
    const randomName = mockNames[Math.floor(Math.random() * mockNames.length)]
    const randomProv = mockProvinces[Math.floor(Math.random() * mockProvinces.length)]
    const randomPkg = mockPackages[Math.floor(Math.random() * mockPackages.length)]
    const id = Math.random().toString(36).substring(2, 9)

    const newNotif = {
      id,
      name: randomName,
      location: randomProv,
      packageText: randomPkg.text,
      time: "เมื่อสักครู่นี้"
    }

    setNotifications((prev) => {
      const next = [...prev, newNotif]
      if (next.length > 2) {
        next.shift() // จำกัดไม่ให้ข้อความแสดงเกิน 2 ตัว
      }
      return next
    })

    // Dispatch custom event for stats synchronization
    window.dispatchEvent(new CustomEvent('live-purchase', { 
      detail: { packageId: randomPkg.id } 
    }))

    // Remove this notification after 8 seconds (gives time for stacking)
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 8000)
  }

  return (
    <div className={`fixed ${!isExpired ? 'bottom-28 md:bottom-24' : 'bottom-6'} right-6 z-50 flex flex-col-reverse gap-3 max-w-sm pointer-events-none transition-all duration-300`}>
      <AnimatePresence>
        {notifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.9 }}
            layout // Smoothly slide items up when a new one is added at the bottom
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              layout: { duration: 0.4 } 
            }}
            className={`pointer-events-auto shadow-xl rounded-xl p-4 flex items-center space-x-4 border bg-white/95 backdrop-blur-sm shadow-2xl transition-all duration-300 ${
              notif.isUser 
                ? 'border-emerald-500 bg-gradient-to-r from-emerald-50/95 to-white/95 ring-2 ring-emerald-500/20' 
                : 'border-gray-100'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md ${
              notif.isUser ? 'bg-emerald-500 animate-bounce' : 'bg-navy'
            }`}>
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy flex items-center flex-wrap gap-x-2">
                <span>{notif.name}</span>
                <span className="font-normal text-charcoal">ได้สั่งซื้อ</span>
                {notif.isUser && (
                  <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide animate-pulse">
                    ออเดอร์ของคุณ
                  </span>
                )}
              </p>
              <p className="text-xs text-charcoal">{notif.packageText}</p>
              <p className="text-xs text-gray-400 mt-1">{notif.location} • {notif.time}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
