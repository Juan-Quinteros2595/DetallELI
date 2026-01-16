"use client"

export default function Section3Parallax() {
  return (
    <section className="h-screen snap-start relative overflow-hidden bg-black">
      <div className="animate-on-scroll anim-type-3-bg absolute inset-0 flex items-center justify-center">
        <img
          src="/grupo2/phonk2.png"
          alt="Background"
          className="max-w-full max-h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 h-full px-8 py-8 flex items-center justify-center">
        <div className="max-w-6xl w-full h-full flex flex-col gap-3 justify-center">
          {/* Row 1 - 3 portrait images */}
          <div className="flex gap-3 flex-1 min-h-0">
            <div className="animate-on-scroll anim-type-3-fg delay-1 flex-1 flex items-center justify-center">
              <img src="/grupo2/brazo1.jpg" alt="Memory" className="max-w-full max-h-full object-cover" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-2 flex-1 flex items-center justify-center">
              <img src="/grupo2/phonk.png" alt="Memory" className="max-w-full max-h-full object-cover" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-3 flex-1 flex items-center justify-center">
              <img src="/grupo2/brazo2.jpg" alt="Memory" className="max-w-full max-h-full object-cover" />
            </div>
          </div>
          {/* Row 2 - 3 landscape images */}
          <div className="flex gap-3 flex-1 min-h-0">
            <div className="animate-on-scroll anim-type-3-fg delay-4 flex-1 flex items-center justify-center">
              <img src="/grupo2/valo1.jpg" alt="Memory" className="max-w-full max-h-full object-cover" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-5 flex-1 flex items-center justify-center">
              <img src="/grupo2/valo2.jpg" alt="Memory" className="max-w-full max-h-full object-cover" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-6 flex-1 flex items-center justify-center">
              <img src="/grupo2/valo3.jpg" alt="Memory" className="max-w-full max-h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
