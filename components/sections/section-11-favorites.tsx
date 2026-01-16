"use client"

export default function Section11Favorites() {
  return (
    <section className="h-screen snap-start relative overflow-hidden flex items-center justify-center bg-black">
      {/* Background grid of 8 images - use object-contain */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
        <div className="animate-on-scroll anim-type-5 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo1.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
        <div className="animate-on-scroll anim-type-5 delay-1 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo2.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
        <div className="animate-on-scroll anim-type-5 delay-2 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo3.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
        <div className="animate-on-scroll anim-type-5 delay-3 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo4.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
        <div className="animate-on-scroll anim-type-5 delay-4 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo5.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
        <div className="animate-on-scroll anim-type-5 delay-5 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo6.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
        <div className="animate-on-scroll anim-type-5 delay-6 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo7.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
        <div className="animate-on-scroll anim-type-5 delay-7 flex items-center justify-center">
          <img
            src="/Grupo9/Caballo8.jpg"
            alt="Favorite"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 text-center px-8">
        <p className="animate-on-scroll anim-type-5 delay-4 text-3xl md:text-5xl text-white font-sans font-light leading-relaxed max-w-3xl">
          Estos son tus favoritos, ¿verdad?
        </p>
        <span className="animate-on-scroll anim-type-5 delay-6 block text-4xl md:text-5xl text-white/80 mt-8">
          &#9829;
        </span>
      </div>
    </section>
  )
}
