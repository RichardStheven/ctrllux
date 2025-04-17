
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const asciiChars = ['/', '<', '>', 'c', 't', 'r', 'l', 'u', 'x']
const whatsappURL = 'https://wa.me/5511999999999' // troque pelo seu número real

export default function ExplosaoFinal() {
  const [explode, setExplode] = useState(false)

  const handleClick = () => {
    setExplode(true)
    setTimeout(() => {
      window.location.href = whatsappURL
    }, 1400)
  }

  return (
    <section className="relative bg-black text-white h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {!explode &&
            asciiChars.map((char, i) => (
              <motion.span
                key={char + i}
                className="absolute text-4xl md:text-6xl font-mono text-white pointer-events-none"
                initial={{
                  x: Math.random() * window.innerWidth - window.innerWidth / 2,
                  y: Math.random() * window.innerHeight - window.innerHeight / 2,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  rotate: Math.random() * 20 - 10,
                  transition: { duration: 1.2, ease: 'easeOut' },
                }}
              >
                {char}
              </motion.span>
            ))}

          {explode &&
            asciiChars.map((char, i) => (
              <motion.span
                key={'boom' + char + i}
                className="absolute text-4xl md:text-6xl font-mono text-white pointer-events-none"
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 2000,
                  y: (Math.random() - 0.5) * 2000,
                  rotate: Math.random() * 360,
                  opacity: 0,
                  transition: { duration: 1.2, ease: 'easeInOut' },
                }}
              >
                {char}
              </motion.span>
            ))}
        </AnimatePresence>
      </div>

      {!explode && (
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 z-10 text-red-500 border border-red-500 px-6 py-3 rounded-md font-mono hover:bg-red-600 hover:text-white transition-all"
        >
          PERIGO: NÃO CLIQUE
        </motion.button>
      )}
    </section>
  )
}
