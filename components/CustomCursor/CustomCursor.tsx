'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'] // azul, vermelho, amarelo, verde

export default function CustomCursor() {
  const [clicked, setClicked] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const click = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 200)
    }

    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 1800)

    document.addEventListener('mousemove', move)
    document.addEventListener('mousedown', click)
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mousedown', click)
      clearInterval(colorInterval)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Só exibe no desktop */}
      <div className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none">
        <motion.div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: colors[colorIndex],
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
            scale: clicked ? 1.8 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        />
      </div>
    </>
  )
}
