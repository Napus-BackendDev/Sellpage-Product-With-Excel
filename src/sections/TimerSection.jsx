import React from 'react'

export function TimerSection({ timeLeft, isExpired }) {
  const formatTime = (timeInMs) => {
    const totalSeconds = Math.floor(timeInMs / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    const centiseconds = Math.floor((timeInMs % 1000) / 10)

    return {
      hours: hours.toString().padStart(2, '0'),
      mins: mins.toString().padStart(2, '0'),
      secs: secs.toString().padStart(2, '0'),
      ms: centiseconds.toString().padStart(2, '0')
    }
  }

  return (
    <section className="py-16 bg-navy relative overflow-hidden border-y border-white/10" id="urgency-timer">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {timeLeft > 0 ? (
          <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-amber-400 font-extrabold tracking-widest uppercase text-xs md:text-sm bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                ⚡ ด่วนที่สุด! สิทธิ์ส่วนลดโปรโมชั่นพิเศษมีเวลาจำกัด
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                ช้อปเลยก่อนสิทธิ์ลดราคา 50% จะหมดอายุ
              </h2>
              <p className="text-blue-100/70 text-sm md:text-base max-w-xl mx-auto">
                เมื่อเวลานับถอยหลังนี้สิ้นสุดลง ระบบจะทำการปรับราคาทั้งหมดกลับเป็นราคาปกติทันที
              </p>
            </div>

            {/* Glowing Clock Segment Container */}
            <div className="flex items-center justify-center space-x-2 md:space-x-4 font-mono text-white select-none">
              <div className="flex flex-col items-center">
                <span className="bg-white text-navy font-black px-4 py-3.5 md:px-6 md:py-5 rounded-2xl shadow-lg text-center text-4xl md:text-6xl lg:text-7xl min-w-[4rem] md:min-w-[6rem] lg:min-w-[7.5rem] transition-all">
                  {formatTime(timeLeft).hours}
                </span>
                <span className="text-[11px] md:text-xs text-blue-200/60 font-bold uppercase mt-3 tracking-wider">ชั่วโมง</span>
              </div>
              <span className="text-blue-400/80 font-extrabold text-3xl md:text-5xl lg:text-6xl animate-pulse pb-7">:</span>
              
              <div className="flex flex-col items-center">
                <span className="bg-white text-navy font-black px-4 py-3.5 md:px-6 md:py-5 rounded-2xl shadow-lg text-center text-4xl md:text-6xl lg:text-7xl min-w-[4rem] md:min-w-[6rem] lg:min-w-[7.5rem] transition-all">
                  {formatTime(timeLeft).mins}
                </span>
                <span className="text-[11px] md:text-xs text-blue-200/60 font-bold uppercase mt-3 tracking-wider">นาที</span>
              </div>
              <span className="text-blue-400/80 font-extrabold text-3xl md:text-5xl lg:text-6xl animate-pulse pb-7">:</span>
              
              <div className="flex flex-col items-center">
                <span className="bg-white text-navy font-black px-4 py-3.5 md:px-6 md:py-5 rounded-2xl shadow-lg text-center text-4xl md:text-6xl lg:text-7xl min-w-[4rem] md:min-w-[6rem] lg:min-w-[7.5rem] transition-all">
                  {formatTime(timeLeft).secs}
                </span>
                <span className="text-[11px] md:text-xs text-blue-200/60 font-bold uppercase mt-3 tracking-wider">วินาที</span>
              </div>
              <span className="text-blue-400/80 font-extrabold text-3xl md:text-5xl lg:text-6xl animate-pulse pb-7">:</span>
              
              <div className="flex flex-col items-center">
                <span className="bg-gradient-to-b from-amber-400 to-orange-500 text-white font-black px-4 py-3.5 md:px-6 md:py-5 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.4)] text-center text-4xl md:text-6xl lg:text-7xl min-w-[4rem] md:min-w-[6rem] lg:min-w-[7.5rem] animate-pulse">
                  {formatTime(timeLeft).ms}
                </span>
                <span className="text-[11px] md:text-xs text-amber-400 font-bold uppercase mt-3 tracking-wider animate-pulse">เสี้ยววินาที</span>
              </div>
            </div>

            {/* Wide Depleting Progress Bar */}
            <div className="w-full max-w-2xl space-y-3">
              <div className="w-full h-4 bg-blue-950/80 rounded-full overflow-hidden p-0.5 border border-white/5 shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                  style={{ width: `${Math.max(0, Math.min(100, (timeLeft / 900000) * 100))}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] md:text-xs font-bold text-blue-200/60 px-1 tracking-wider uppercase">
                <span>เหลือเวลาน้อยลงทุกที</span>
                <span className="text-amber-400">ลดราคาพิเศษถึง 50%</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 inline-flex items-center space-x-4 text-slate-300 font-bold shadow-inner justify-center">
            <span className="text-4xl animate-bounce">⏰</span>
            <span className="text-lg md:text-2xl text-white">หมดเวลาโปรโมชั่นพิเศษ ระบบปรับราคากลับเป็นราคาปกติแล้ว</span>
          </div>
        )}
      </div>
    </section>
  )
}
