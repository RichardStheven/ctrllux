'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LinhaRedonda() {
  const linhaRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      linhaRef.current,
      { width: 0 },
      {
        width: '100%',
        duration: 3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: linhaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div className="flex items-center w-full">
      {/* Bolinha fixa */}
      <div className="w-3 h-3 bg-red-600 rounded-full shrink-0" />
      {/* Linha animada */}
      <div
        ref={linhaRef}
        className="h-[2px] bg-red-600 ml-2"
        style={{ width: 0 }}
      />
    </div>
  )
}
