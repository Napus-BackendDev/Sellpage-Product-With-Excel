import React, { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'


export function CheckoutForm({ selectedPackage, setSelectedPackage, isExpired }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Calculate prices dynamically based on selected package and expiration state
  const getProductPrice = () => {
    switch (selectedPackage) {
      case 'buy1':
        return isExpired ? 690 : 490
      case 'buy2':
        return isExpired ? 1380 : 890
      case 'buy3get1':
      default:
        return isExpired ? 2760 : 1390
    }
  }

  const productPrice = getProductPrice()
  const shippingFee = 0
  const insuranceFee = 39
  const totalPrice = productPrice + insuranceFee

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Form Data
    const formData = new FormData(e.target)
    const rawData = Object.fromEntries(formData.entries())

    // Map to Google Apps Script expected fields
    let packageLabel = ""
    switch (rawData.package) {
      case 'buy1':
        packageLabel = `ซื้อ 1 ขวด`
        break
      case 'buy2':
        packageLabel = `ซื้อ 2 ขวด`
        break
      case 'buy3get1':
      default:
        packageLabel = `ซื้อ 3 แถม 1`
        break
    }

    const data = {
      fullName: rawData.name,
      phone: `'${rawData.phone}`, // ใส่ ' ข้างหน้าเพื่อให้ Google Sheets มองเป็นข้อความ (ไม่ตัดเลข 0 ทิ้ง)
      address: `${rawData.address} แขวง/ตำบล ${rawData.subdistrict}`,
      province: rawData.province,
      postalCode: rawData.zipcode,
      package: packageLabel,
      totalPrice: `${totalPrice.toLocaleString()} บาท`,
      paymentMethod: "COD",
    }

    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          // ใช้ text/plain เพื่อหลีกเลี่ยง CORS preflight request (OPTIONS) 
          // ซึ่ง Google Apps Script ไม่รองรับกับ application/json
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data)
      })
      
      setIsSuccess(true)
      
      // Dispatch custom event to show user purchase toast gimmick on the left
      window.dispatchEvent(new CustomEvent('user-purchase', {
        detail: {
          name: rawData.name || '',
          province: rawData.province || '',
          packageId: selectedPackage
        }
      }))
      
      e.target.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("เกิดข้อผิดพลาดในการสั่งซื้อ กรุณาลองใหม่อีกครั้ง")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white" id="checkout">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">ยืนยันการสั่งซื้อ</h2>
            <p className="text-charcoal">บริการเก็บเงินปลายทาง (COD) - ชำระเงินเมื่อได้รับสินค้า</p>
          </div>

          <Card className="shadow-lg border-t-4 border-t-navy">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">ชื่อ-นามสกุล <span className="text-red-500">*</span></label>
                    <input required name="name" type="text" className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all" placeholder="กรอกชื่อ-นามสกุล" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                    <input required name="phone" type="tel" className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all" placeholder="08X-XXX-XXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">ที่อยู่จัดส่ง (บ้านเลขที่, ซอย, ถนน) <span className="text-red-500">*</span></label>
                  <textarea required name="address" rows="3" className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none" placeholder="กรอกที่อยู่จัดส่งให้ครบถ้วน" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">แขวง/ตำบล <span className="text-red-500">*</span></label>
                    <input required name="subdistrict" type="text" className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">จังหวัด <span className="text-red-500">*</span></label>
                    <input required name="province" type="text" className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">รหัสไปรษณีย์ <span className="text-red-500">*</span></label>
                    <input required name="zipcode" type="text" className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">เลือกแพ็กเกจ <span className="text-red-500">*</span></label>
                  <select 
                    name="package" 
                    required 
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage?.(e.target.value)}
                    className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all bg-white"
                  >
                    <option value="buy3get1">
                      {isExpired ? "ซื้อ 3 แถม 1 (ราคาปกติ 2,760 บาท)" : "ซื้อ 3 แถม 1 (1,390 บาท) - แนะนำและคุ้มที่สุด"}
                    </option>
                    <option value="buy2">
                      {isExpired ? "ซื้อ 2 ขวด (ราคาปกติ 1,380 บาท)" : "ซื้อ 2 ขวด (890 บาท) - ชุดสุดคุ้ม"}
                    </option>
                    <option value="buy1">
                      {isExpired ? "ซื้อ 1 ขวด (ราคาปกติ 690 บาท)" : "ซื้อ 1 ขวด (490 บาท) - ชุดทดลอง"}
                    </option>
                  </select>
                </div>

                {/* Pricing Summary Breakdown */}
                <div className="bg-slate-50 p-5 rounded-xl border border-gray-200/60 space-y-3 text-sm">
                  <div className="flex justify-between items-center text-charcoal">
                    <span>ราคาสินค้า:</span>
                    <span className="font-semibold text-navy">฿{productPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal">
                    <span>ค่าจัดส่ง:</span>
                    <span className="text-green-600 font-bold">ฟรี (Free)</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal">
                    <span>ค่าประกันสินค้าเสียหาย:</span>
                    <span className="font-semibold text-navy">฿{insuranceFee}</span>
                  </div>
                  <div className="border-t border-gray-200/80 pt-3 flex justify-between items-center text-navy font-bold text-base">
                    <span>ราคาสุทธิที่ต้องชำระ (ราคาทั้งหมด):</span>
                    <span className="text-xl text-blue-600 font-extrabold">฿{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
                
                <input type="hidden" name="payment_method" value="COD" />
                <input type="hidden" name="product_price" value={productPrice} />
                <input type="hidden" name="shipping_fee" value="Free" />
                <input type="hidden" name="insurance_fee" value={insuranceFee} />
                <input type="hidden" name="total_price" value={totalPrice} />

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full bg-navy hover:bg-navy/90 text-white text-lg font-bold shadow-xl shadow-navy/20" disabled={isSubmitting}>
                    {isSubmitting ? "กำลังดำเนินการ..." : "ยืนยันการสั่งซื้อ (เก็บเงินปลายทาง)"}
                  </Button>
                </div>
              </form>
            </Card>
        </div>
      </div>
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccess(false)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative border border-gray-100 z-10 overflow-hidden animate-in fade-in zoom-in duration-300"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 to-green-500" />
              
              {/* Success Check Circle */}
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-emerald-100">
                <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-2xl font-extrabold text-navy mb-3">สั่งซื้อสำเร็จ!</h3>
              <p className="text-charcoal mb-8 text-base md:text-lg leading-relaxed font-medium">
                คำสั่งซื้อได้ทำการบันทึกเรียบร้อย<br />
                รอทางเจ้าหน้าที่ ติดต่อกลับนะครับ
              </p>

              <Button 
                onClick={() => setIsSuccess(false)} 
                className="w-full bg-navy hover:bg-navy/90 text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-navy/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                ตกลง
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
