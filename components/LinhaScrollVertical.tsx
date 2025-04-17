'use client'

import { useEffect, useRef } from 'react'

export default function LinhaScrollVertical() {
  const lineRef = useRef<HTMLDivElement>(null)
  const ballRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const updateScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      const heightVH = scrollPercent * 100

      if (lineRef.current) {
        lineRef.current.style.height = `${heightVH}vh`
      }

      if (ballRef.current) {
        ballRef.current.style.top = `calc(${heightVH}vh - 6px)`
      }

      animationFrameId = requestAnimationFrame(updateScroll)
    }

    animationFrameId = requestAnimationFrame(updateScroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="fixed right-4 top-0 h-full w-4 z-50 pointer-events-none">
      {/* Linha suave */}
      <div
        ref={lineRef}
        className="absolute right-1 w-[3px] bg-blue-500 transition-[height] duration-200 ease-out"
      />

      {/* Bolinha na ponta */}
      <div
        ref={ballRef}
        className="absolute right-0 w-3 h-3 bg-blue-500 rounded-full transition-[top] duration-200 ease-out"
      />
    </div>
  )
}
