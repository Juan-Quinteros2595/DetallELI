"use client"

export default function Section9GrayBrown() {
  return (
    <section className="h-screen snap-start bg-gray-brown px-8 py-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full h-full flex flex-col gap-3 justify-center">
        {/* Row 1 - wide + 2 squares */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="animate-on-scroll anim-type-2 flex-[2] flex items-center justify-center bg-white/20">
            <img
              src="/Grupo7/Monter2.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-1 flex-1 flex items-center justify-center bg-white/20">
            <img
              src="/Grupo7/Monter3.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-2 flex-1 flex items-center justify-center bg-white/20">
            <img
              src="/Grupo7/Monter4.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Row 2 - 4 portraits */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="animate-on-scroll anim-type-2 delay-3 flex-1 flex items-center justify-center bg-white/20">
            <img
              src="/Grupo7/Chocolate1.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-4 flex-1 flex items-center justify-center bg-white/20">
            <img
              src="/Grupo7/Chocolate2.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-5 flex-1 flex items-center justify-center bg-white/20">
            <img
              src="/Grupo7/Chocolate3.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-2 delay-6 flex-1 flex items-center justify-center bg-white/20">
            <img
              src="/Grupo7/Monter1.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Row 3 - panoramic */}
        <div className="animate-on-scroll anim-type-2 delay-7 flex-1 min-h-0 flex items-center justify-center">
          <img
            src="/Grupo7/Pummel1.jpg"
            alt="Memory"
            className="w-2xl max-h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
