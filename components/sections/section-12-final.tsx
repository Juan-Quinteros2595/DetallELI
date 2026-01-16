"use client"

export default function Section12Final() {
  return (
    <section className="h-screen snap-start bg-white px-8 py-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-4xl w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="max-w-3xl mx-auto text-center flex-shrink-0">
          <p className="animate-on-scroll anim-type-1 text-base md:text-lg text-gray-dark font-serif leading-relaxed">
            Cuando pienso en los caballos o en la hípica te imagino de esta forma, sonriendo con tu caballo, siendo
            feliz y sobre todo cumpliendo tus logros. Para mí ya sos una jinete increíble, ya cumpliste todo esto, solo
            te falta que lo vivamos y festejemos juntos
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 flex-1 min-h-0 w-full max-h-72">
          <div className="animate-on-scroll anim-type-1 delay-2 bg-white p-3 pb-12 shadow-xl border border-neutral-200 -rotate-3 hover:rotate-0 transition-transform duration-300">
            <img
              src="/Grupo9/Eli1.jpg"
              alt="Horse riding"
              className="w-55 h-55 object-cover border border-neutral-300"
            />
          </div>

          <div className="animate-on-scroll anim-type-1 delay-3 bg-white p-3 pb-3 shadow-xl border border-neutral-200 rotate-2 hover:rotate-0 transition-transform duration-300">
            <img
              src="/Grupo9/Eli2.jpg"
              alt="With horse"
              className="w-55 h-55 object-cover border border-dashed border-3"
            />
          </div>

          <div className="animate-on-scroll anim-type-1 delay-4 bg-white p-3 pb-12 shadow-xl border border-neutral-200 -rotate-4 hover:rotate-0 transition-transform duration-300">
            <img
              src="/Grupo9/Eli3.jpg"
              alt="Achievement"
              className="w-55 h-55 object-cover border border-neutral-300"
            />
          </div>
        </div>

        <div className="animate-on-scroll anim-type-1 delay-6 text-center flex-shrink-0">
          <span className="text-4xl text-gray-slate">&#9829;</span>
        </div>
      </div>
    </section>
  )
}
