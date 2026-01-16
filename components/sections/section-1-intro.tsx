"use client"

export default function Section1Intro() {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-[200px] text-gray-slate">♥</div>
        <div className="absolute bottom-20 right-20 text-[150px] text-gray-slate">♥</div>
      </div>

      <div className="text-center z-10 px-8">
        <h1 className="animate-on-scroll anim-type-1 font-sans text-6xl md:text-8xl font-light tracking-tight text-gray-dark mb-6">
          Para Eli <span className="text-gray-slate">&#9829;</span>
        </h1>

        <p className="animate-on-scroll anim-type-1 delay-3 font-serif text-lg md:text-xl text-gray-slate max-w-xl mx-auto leading-relaxed">
          Quería hacer este detalle, estas son todas las cosas que me recuerdan a vos
        </p>
      </div>

      <div className="absolute bottom-12 animate-on-scroll anim-type-1 delay-5">
        <div className="flex flex-col items-center text-gray-slate/60">
          <span className="text-xs uppercase tracking-widest mb-3 font-sans">Scroll</span>
          <div className="w-px h-12 bg-gray-slate/30" />
        </div>
      </div>
    </section>
  )
}
