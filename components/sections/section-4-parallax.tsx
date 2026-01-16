"use client"

export default function Section4Parallax() {
  return (
    <section className="h-screen snap-start relative overflow-hidden">
      <div className="animate-on-scroll anim-type-3-bg absolute inset-0 flex items-center justify-center">
        <img src="/Grupo3/Jujutsu22.jpg" alt="Background" className="max-w-full max-h-full object-contain" />
        <div className="absolute inset-0 bg-gray-green/50" />
      </div>

      <div className="relative z-10 h-full px-8 py-8 flex items-center justify-center">
        <div className="max-w-6xl w-full h-full flex flex-col gap-3 justify-center">
          {/* Row 1 - 2 wide images */}
          <div className="flex gap-3 flex-1 min-h-0">
            <div className="animate-on-scroll anim-type-3-fg delay-1 flex-1 flex items-center justify-center bg-white/10">
              <img src="/Grupo3/Jujutsu1.jpg" alt="Memory" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-2 flex-1 flex items-center justify-center bg-white/10">
              <img src="/Grupo3/Jujutsu2.jpg" alt="Memory" className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          {/* Row 2 - 3 square images */}
          <div className="flex gap-3 flex-1 min-h-0">
            <div className="animate-on-scroll anim-type-3-fg delay-3 flex-1 flex items-center justify-center bg-white/10">
              <img src="/Grupo3/Jujutsu3.jpg" alt="Memory" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-4 flex-1 flex items-center justify-center bg-white/10">
              <img src="/Grupo3/Gojo.jpg" alt="Memory" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-5 flex-1 flex items-center justify-center bg-white/10">
              <img src="/Grupo3/Jujutsu5.jpg" alt="Memory" className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          {/* Row 3 - 2 images */}
          <div className="flex gap-3 flex-1 min-h-0">
            <div className="animate-on-scroll anim-type-3-fg delay-6 flex-1 flex items-center justify-center bg-white/10">
              <img src="/Grupo3/Jujutsu4.jpg" alt="Memory" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="animate-on-scroll anim-type-3-fg delay-7 flex-1 flex items-center justify-center bg-white/10">
              <img src="/Grupo3/Jujutsu7.jpg" alt="Memory" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
