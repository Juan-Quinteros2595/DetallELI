"use client"

export default function Section6Layered() {
  return (
    <section className="h-screen snap-start relative bg-black overflow-hidden">
      
      {/* BACKGROUND IMAGES (corners) */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Grupo6/Bad_Bunny1.jpg"
          className="absolute top-0 left-0 w-1/2 h-1/2 object-cover opacity-40"
        />
        <img
          src="/Grupo6/Bad_Bunny2.jpg"
          className="absolute top-0 right-0 w-1/2 h-1/2 object-cover opacity-40"
        />
        <img
          src="/Grupo6/Bad_Bunny3.jpg"
          className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover opacity-40"
        />
        <img
          src="/Grupo6/Bad_Bunny4.jpg"
          className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover opacity-40"
        />
      </div>
      {/* FOREGROUND IMAGES */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[70%]">
          
          <img
            src="/Grupo6/badbunny.jpg"
            className="animate-on-scroll anim-type-5 absolute top-[-50] left-32 w-72 rotate-[-6deg]"
          />

          <img
            src="/Grupo6/Bad_Bunny10.jpg"
            className="animate-on-scroll anim-type-5 delay-1 absolute top-0 right-24 w-72 rotate-[6deg]"
          />

          <img
            src="/Grupo6/Bad_Bunny7.jpg"
            className="animate-on-scroll anim-type-5 delay-2 absolute bottom-0 left-5 w-72 rotate-[7deg]"
          />

          <img
            src="/Grupo6/Bad_Bunny8.jpg"
            className="animate-on-scroll anim-type-5 delay-3 absolute bottom-0 right-30 w-72 rotate-[-4deg]"
          />
        </div>
      </div>
    </section>
  )
}
