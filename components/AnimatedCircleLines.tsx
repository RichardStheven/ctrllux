'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']

export default function AnimatedCircleLines() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(5)
  const [color, setColor] = useState(colors[0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const updateRandomPosition = () => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      })
      setColor(colors[Math.floor(Math.random() * colors.length)])
      setOpacity(1)

      timeout = setTimeout(() => {
        setOpacity(0)
        setTimeout(updateRandomPosition, 2000)
      }, 3000)
    }

    updateRandomPosition()

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + Math.random() * 50 - 25)
      mouseY.set(e.clientY + Math.random() * 50 - 25)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: smoothX,
        y: smoothY,
        opacity: opacity,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      <motion.path
        d="M0,100 C50,0 150,200 200,100"
        stroke={color}
        strokeWidth="2"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="200"
        cy="100"
        r="4"
        fill={color}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.svg>
  )
}
