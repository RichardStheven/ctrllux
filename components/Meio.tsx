'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

const logos = [
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
]

export default function CarrosselImersivo() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])
  const smoothX = useSpring(translateX, {
    damping: 25,
    stiffness: 100,
  })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-28 bg-gradient-to-br from-[#e8f5e9] to-white"
    >
      {/* Texto de destaque */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Uma agência técnica que já <br />
          otimizou a presença digital de +400 clientes.
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mt-6">
          A Ctrl+Lux atua há mais de uma década desenvolvendo soluções digitais
          personalizadas, com foco em performance real, SEO técnico e
          interfaces sob medida.
        </p>
        <button className="mt-8 bg-[#34A853] text-white px-6 py-3 rounded-md hover:bg-[#2e9347] transition-all">
          Peça um Diagnóstico
        </button>
      </div>

      {/* Carrossel hipnótico (desktop) */}
      <div className="hidden md:block w-full overflow-hidden">
        <motion.div
          style={{ x: smoothX }}
          className="flex gap-20 pl-[100vw] pr-[100vw]"
        >
          {logos.concat(logos).map((logo, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-3xl p-7 min-w-[220px] h-[140px] flex items-center justify-center grayscale hover:grayscale-0 hover:scale-105 transition-all"
              whileHover={{ rotate: [0, 2, -2, 0], transition: { duration: 0.6 } }}
            >
              <Image
                src={logo}
                alt={`Cliente ${index}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Carrossel scrollable (mobile) */}
      <div className="md:hidden flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory pb-6 scrollbar-none">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-[160px] h-[120px] bg-white shadow rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Linha verde de apoio */}
      <div className="absolute left-0 bottom-10 w-full h-[2px] bg-[#34A853]/60 pointer-events-none z-0" />
    </section>
  )
}
