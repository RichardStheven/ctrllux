// Linha com efeito elástico real ao estilo Chiara Luzzana
'use client'

import { useEffect, useRef } from 'react'

interface LinhaCordaProps {
  cor?: string
  largura?: number
  altura?: number
}

export default function LinhaCorda({ cor = '#000', largura = 2, altura = 800 }: LinhaCordaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const points = useRef<number[]>([])
  const velocities = useRef<number[]>([])
  const totalPoints = 70
  const damping = 0.15
  const stiffness = 0.08
  const influenceRadius = 120
  const spacing = altura / (totalPoints - 1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = largura
    canvas.height = altura

    points.current = new Array(totalPoints).fill(0)
    velocities.current = new Array(totalPoints).fill(0)

    let mouseY = -999
    let mouseX = -999

    const update = () => {
      ctx.clearRect(0, 0, largura, altura)
      ctx.beginPath()
      ctx.moveTo(largura / 2 + points.current[0], 0)

      for (let i = 0; i < totalPoints; i++) {
        const force = -stiffness * points.current[i]
        velocities.current[i] += force
        velocities.current[i] *= (1 - damping)
        points.current[i] += velocities.current[i]

        const y = i * spacing
        const distance = Math.abs(y - mouseY)

        if (distance < influenceRadius) {
          const strength = (1 - distance / influenceRadius) * 35
          const direction = mouseX > window.innerWidth / 2 ? 1 : -1
          points.current[i] += strength * direction
        }

        ctx.lineTo(largura / 2 + points.current[i], y)
      }

      ctx.strokeStyle = cor
      ctx.lineWidth = largura
      ctx.stroke()

      requestAnimationFrame(update)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseY = e.clientY - rect.top
      mouseX = e.clientX - rect.left
    }

    window.addEventListener('mousemove', handleMouseMove)
    update()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [altura, largura, cor])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${largura}px`,
        height: `${altura}px`,
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  )
}