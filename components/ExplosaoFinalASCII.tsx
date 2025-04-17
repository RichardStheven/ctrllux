'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const asciiArt = `⠀⠀⠀⠀
░█████╗░████████╗██████╗░██╗░░░░░██╗░░░░░██╗░░░██╗██╗░░██╗░░░░██╗██╗░░
██╔══██╗╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░██║░░░██║╚██╗██╔╝░░░██╔╝╚██╗░
██║░░╚═╝░░░██║░░░██████╔╝██║░░░░░██║░░░░░██║░░░██║░╚███╔╝░░░██╔╝░░╚██╗
██║░░██╗░░░██║░░░██╔══██╗██║░░░░░██║░░░░░██║░░░██║░██╔██╗░░██╔╝░░░██╔╝
╚█████╔╝░░░██║░░░██║░░██║███████╗███████╗╚██████╔╝██╔╝╚██╗██╔╝░░░██╔╝░
░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝░╚═════╝░╚═╝░░╚═╝╚═╝░░░░╚═╝░░`
  .split('\n')

const nomesAlternativos = [
  'C⃨T⃨R⃨L⃨L⃨U⃨X⃨/⃨>⃨',
  'C̷T̷R̷L̷L̷U̷X̷/̷>̷',
  '🇨​​​​​🇹​​​​​🇷​​​​​🇱​​​​​🇱​​​​​🇺​​​​​🇽​​​​​/>',
  'ⒸⓉⓇⓁⓁⓊⓍ/>',
  '</XՈ⅂⅂ꓤꓕϽ',
]

const whatsappURL = 'https://wa.me/5511999999999' // seu número real aqui

export default function ExplosaoFinal() {
  const [explode, setExplode] = useState(false)
  const [activeName, setActiveName] = useState(0)

  useEffect(() => {
    if (!explode) {
      const interval = setInterval(() => {
        setActiveName((prev) => (prev + 1) % nomesAlternativos.length)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [explode])

  const handleClick = () => {
    setExplode(true)
    setTimeout(() => {
      window.location.href = whatsappURL
    }, 1600)
  }

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Frase central */}
      {!explode && (
        <motion.p
          className="text-center text-lg md:text-xl px-4 max-w-2xl mb-4 font-light text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nossa stack é avançada, mas nossa missão é simples: colocar autônomos e pequenos negócios no topo do Google sem complicação.
        </motion.p>
      )}

      {/* Nome alternativo piscando */}
      {!explode && (
        <motion.div
          className="text-2xl md:text-3xl font-mono text-white/60 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={activeName}
        >
          {nomesAlternativos[activeName]}
        </motion.div>
      )}

      {/* ASCII animado */}
      <div className="relative w-full flex flex-col items-center font-mono text-xs md:text-base whitespace-pre leading-tight z-0">
        <AnimatePresence>
          {!explode &&
            asciiArt.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: (Math.random() - 0.5) * 1000,
                  x: (Math.random() - 0.5) * 1000,
                  rotate: Math.random() * 720,
                }}
                transition={{ duration: 0.6 }}
              >
                {line}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Botão de explosão */}
      {!explode && (
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 z-10 text-red-500 border border-red-500 px-6 py-3 rounded-md font-mono hover:bg-red-600 hover:text-white transition-all"
        >
          PERIGO: NÃO CLIQUE
        </motion.button>
      )}
    </section>
  )
}
