"use client"

export default function Section10Neutral() {
  return (
    <section className="h-screen snap-start bg-gray-light px-8 py-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full h-full flex flex-col gap-3 justify-center">
        {/* Row 1 - 4 portraits */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="animate-on-scroll anim-type-1 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Gatito1.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-1 delay-1 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Gatito2.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-1 delay-2 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Gatito3.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-1 delay-3 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Gatito4.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Row 2 - 4 squares */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="animate-on-scroll anim-type-1 delay-4 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Siesta1.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-1 delay-5 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Siesta2.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-1 delay-6 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Siesta3.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="animate-on-scroll anim-type-1 delay-7 flex-1 flex items-center justify-center p-1 bg-transparent">
            <img
              src="/Grupo8/Siesta4.jpg"
              alt="Memory"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
