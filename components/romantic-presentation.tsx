"use client"

import { useEffect, useRef, useState } from "react"
import Section1Intro from "./sections/section-1-intro"
import Section2Gallery from "./sections/section-2-gallery"
import Section3Parallax from "./sections/section-3-parallax"
import Section4Parallax from "./sections/section-4-parallax"
import Section5Nosotros from "./sections/section-5-nosotros"
import Section6Layered from "./sections/section-6-layered"
import Section7Gallery from "./sections/section-7-gallery"
import Section8Editorial from "./sections/section-8-spotify"
import Section9GrayBrown from "./sections/section-9-chocolate"
import Section10Neutral from "./sections/section-10-pastel"
import Section11Favorites from "./sections/section-11-favorites"
import Section12Final from "./sections/section-12-final"

export default function RomanticPresentation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isMobile])

  if (isMobile) {
    return (
      <div className="h-screen w-screen fixed inset-0 bg-neutral-100 flex items-center justify-center overflow-hidden">
        <p className="text-center text-neutral-600 font-serif text-lg px-8 leading-relaxed">
          Por favor miralo desde la PC, es una experiencia más linda.
        </p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Section1Intro />
      <Section2Gallery />
      <Section3Parallax />
      <Section4Parallax />
      <Section5Nosotros />
      <Section6Layered />
      <Section7Gallery />
      <Section8Editorial />
      <Section9GrayBrown />
      <Section10Neutral />
      <Section11Favorites />
      <Section12Final />
    </div>
  )
}
