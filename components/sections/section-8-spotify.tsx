"use client"

export default function Section8Editorial() {
  const images = [
    "/Grupo5/Japon1.jpg",
    "/Grupo5/Page2-2.jpg",
    "/Grupo5/Japon2.jpg",
    "/Grupo5/Page2-1.jpg",
    "/Grupo5/Japon3.jpg",
    "/Grupo5/Page2-3.jpg",
    "/Grupo5/Japon4.jpg",
  ]

  return (
    <section className="h-screen snap-start relative overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/Grupo5/Fondo1.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-slate/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full px-10 flex items-center justify-center">
        <div
          className="
            grid grid-cols-7 gap-8 border-1 border-grey-light
            max-w-7xl w-full
            items-center
          "
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`
                animate-on-scroll anim-type-3-fg delay-${i + 1}
                aspect-[7/17]
                flex items-center justify-center
              `}
            >
              <img
                src={src}
                alt={`Editorial ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
