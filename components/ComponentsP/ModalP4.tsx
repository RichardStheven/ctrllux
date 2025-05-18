'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function ModalP4() {
  const ref = useRef(null)
  const [start, setStart] = useState(false)
  const controls = useAnimation()

  const data = [
    { dia: '1', a: 100, b: 150, c: 200, d: 170 },
    { dia: '2', a: 300, b: 280, c: 320, d: 300 },
    { dia: '3', a: 500, b: 480, c: 520, d: 490 },
    { dia: '4', a: 800, b: 760, c: 900, d: 840 },
    { dia: '5', a: 1100, b: 950, c: 1300, d: 1200 },
  ]

  useEffect(() => {
    const q = gsap.utils.selector(ref)
    gsap.fromTo(
      q('.grafico'),
      { opacity: 0 },
      {
        opacity: 0.1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          onEnter: () => setStart(true),
        },
      }
    )
  }, [])

  const AnimatedNumber = ({ value, suffix = '', prefix = '', color }: any) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
      if (!start) return
      let startVal = 0
      const duration = 1000
      const stepTime = 30
      const totalSteps = duration / stepTime
      const increment = value / totalSteps

      const counter = setInterval(() => {
        startVal += increment
        if (startVal >= value) {
          startVal = value
          clearInterval(counter)
        }
        setDisplayValue(Math.round(startVal))
      }, stepTime)

      return () => clearInterval(counter)
    }, [start, value])

    return (
      <span className={`${color} text-3xl font-semibold`}>
        {prefix}{displayValue}{suffix}
      </span>
    )
  }

  return (
    <section ref={ref} className="relative w-full py-32 overflow-hidden bg-white text-black">
      <div className="grafico absolute inset-0 z-0 opacity-10 pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="dia" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Line type="monotone" dataKey="a" stroke="#4285F4" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="b" stroke="#EA4335" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="c" stroke="#FBBC05" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="d" stroke="#34A853" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Resultados com <span className="text-blue-600">Google Ads</span>
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-neutral-700">
          Uma conta bem estruturada entrega resultado real. Confira como campanhas inteligentes crescem com o tempo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl text-lg">
          <p><AnimatedNumber value={65} suffix="%" color="text-green-600" /><br />das pessoas prontas para comprar clicam nos anúncios.</p>
          <p><AnimatedNumber value={3.5} prefix="" suffix="bi" color="text-blue-600" /><br />de buscas por dia no Google.</p>
          <p><AnimatedNumber value={800} suffix="%" color="text-red-600" /><br />é o ROI médio das campanhas bem feitas.</p>
          <p><AnimatedNumber value={80} suffix="%" color="text-yellow-500" /><br />das compras começam no Google.</p>
        </div>

        <Link
          href="https://wa.me/5511947375915"
          target="_blank"
          className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Falar sobre Google Ads no WhatsApp
        </Link>
      </div>
    </section>
  )
}
