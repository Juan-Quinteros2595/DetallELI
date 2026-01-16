"use client"

export default function Section2Gallery() {
  return (
    <section className="h-screen snap-start overflow-hidden px-8 py-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full h-full flex flex-col justify-center gap-3">
        {/* Top row - 3 images */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="animate-on-scroll anim-type-2 delay-1 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/duki1.jpg" alt="Duki 1" className="max-w-full max-h-full object-cover" />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-2 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/duki2.jpg" alt="Duki 2" className="max-w-full max-h-full object-cover" />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-3 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/ysy2.jpg" alt="YSY 2" className="max-w-full max-h-full object-cover" />
          </div>
        </div>

        {/* Middle row - 2 larger images */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="animate-on-scroll anim-type-2 delay-4 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/ysy3.jpg" alt="YSY 3" className="max-w-full max-h-full object-cover" />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-5 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/YSYDUKI.jpg" alt="Featured 2" className="max-w-full max-h-full object-cover" />
          </div>
        </div>

        {/* Bottom row - 3 images */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="animate-on-scroll anim-type-2 delay-6 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/YSYDUKI2.jpg" alt="Memory 4" className="max-w-full max-h-full object-cover" />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-7 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/YSYDUKI3.jpg" alt="Memory 5" className="max-w-full max-h-full object-cover" />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-8 flex-1 flex items-center justify-center bg-neutral-50">
            <img src="/grupo1/YSY4.jpg" alt="Memory 6" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
