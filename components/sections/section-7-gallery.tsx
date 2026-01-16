"use client"

export default function Section7Gallery() {
  const bottomImages = [
    "/Grupo5/One_Piece1.jpg",
    "/Grupo5/One_Piece4.jpg",
    "/Grupo5/CartelOne_Piece.png",
    "/Grupo5/One_Piece6.jpg",
  ]

  const rotations = ["rotate-[-2deg]", "rotate-[1.5deg]", "rotate-[-1deg]", "rotate-[2deg]"]

  return (
    <section className="h-screen snap-start relative overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Grupo5/FondoPrueba.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gray-light/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full px-8 py-8 flex items-center justify-center">
        <div className="max-w-5xl w-full h-full flex flex-col gap-4 justify-center">
          
          {/* Row 1 - 2 tall images */}
          <div className="flex justify-center gap-6 flex-1 min-h-0">
            <div className="animate-on-scroll anim-type-2 flex-1 max-w-56 p-1 flex items-center justify-center bg-transparent shadow-md rotate-[-1.5deg]">
              <img
                src="/Grupo5/One_PieceM1.jpg"
                alt="Match 1"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="animate-on-scroll anim-type-2 delay-1 flex-1 max-w-56 p-1 flex items-center justify-center bg-transparent shadow-md rotate-[1.5deg]">
              <img
                src="/Grupo5/One_PieceM2.jpg"
                alt="Match 2"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Row 2 - 4 square images */}
          <div className="flex gap-4 flex-1 min-h-0">
            {bottomImages.map((src, index) => (
              <div
                key={src}
                className={`animate-on-scroll anim-type-2 delay-${index + 2}
                  flex-1 flex items-center justify-center p-3 bg-transparent shadow-md
                  ${rotations[index]}`}
              >
                <img
                  src={src}
                  alt={`Memory ${index + 1}`}
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
