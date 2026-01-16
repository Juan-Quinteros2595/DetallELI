"use client"

export default function Section5Nosotros() {
  return (
    <section className="relative h-screen snap-start overflow-hidden">

      {/* VIDEO DE FONDO */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/Grupo4/Test.mp4" type="video/mp4" />
        </video>

        {/* Overlay para disimular */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-8 py-8 h-full flex flex-col items-center justify-center">
        <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4">

          {/* Top 2 images side by side */}
          <div className="flex justify-center items-center gap-4 flex-shrink-0">
            <div className="animate-on-scroll anim-type-4 w-36 h-48 p-1 flex items-center justify-center bg-transparent shadow-md">
              <img src="/Grupo4/FrierenMatch1.jpg" alt="Us" className="max-w-full max-h-full object-cover" />
            </div>
            <div className="animate-on-scroll anim-type-4 delay-1 w-36 h-48 p-1 flex items-center bg-transparent shadow-md">
              <img src="/Grupo4/FrierenMatch2.jpg" alt="Us" className="max-w-full max-h-full object-cover" />
            </div>
          </div>

          <h2 className="animate-on-scroll anim-type-4 delay-2 text-center text-5xl md:text-6xl text-gray-dark font-cursive flex-shrink-0">
            Nosotros
          </h2>

          {/* 6 images in horizontal layout */}
          <div className="flex gap-3 w-full flex-1 min-h-0 max-h-48">
            {[
              "Frieren1.jpg",
              "Frieren2.jpg",
              "Frieren3.jpg",
              "Frieren4.jpg",
              "Frieren5.jpg",
              "Frieren6.jpg",
            ].map((img, i) => (
              <div
                key={img}
                className={`animate-on-scroll anim-type-4 delay-${i + 3} flex-1 flex items-center justify-center bg-white`}
              >
                <img
                  src={`/Grupo4/${img}`}
                  alt="Memory"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
