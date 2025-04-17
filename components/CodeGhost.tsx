'use client'

import { useEffect, useRef, useState } from 'react'

const fakeCodeLines = [
  '<html>',
  '  <head>',
  '    <title>Ctrl+Lux</title>',
  '  </head>',
  '  <body>',
  '    <h1>A gente fala a mesma língua que o Google</h1>',
  '    <h2>Performance. Indexação. Conversão.</h2>',
  '    <p>ctrl.lux;</p>',
  '  </body>',
  '</html>',
]

export default function CodeGhost() {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'up' | 'down'>('down')
  const prevY = useRef(0)

  const typingSpeed = 150

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const newDirection = currentY > prevY.current ? 'down' : 'up'
      setDirection(newDirection)
      prevY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 'down' && index < fakeCodeLines.length) {
        setVisibleLines((prev) => [...prev, fakeCodeLines[index]])
        setIndex((prev) => prev + 1)
      }

      if (direction === 'up' && index > 0) {
        setVisibleLines((prev) => prev.slice(0, -1))
        setIndex((prev) => prev - 1)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [direction, index])

  return (
    <div className="absolute inset-0 px-10 py-20 text-base lg:text-lg font-mono text-black/20 whitespace-pre-wrap leading-relaxed z-0 w-full h-full pointer-events-none">
      {visibleLines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  )
}
