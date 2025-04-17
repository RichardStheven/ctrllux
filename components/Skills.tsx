'use client'

import { useEffect, useState } from 'react'

const skills = [
  'SEO', 'HTML', 'Performance', 'DevOps', 'Branding', 'Identidade Visual',
  'Funnel', 'UI/UX', 'Arte Moderna', 'Web 3', 'CMS', 'Copywriting',
  'Motion Design', 'Paid Traffic', 'eCommerce', 'Pixel Perfeito',
  'Responsividade', 'A/B Testing', 'IA generativa', 'Gatilhos mentais',
  'Framer Motion', 'Tailwind', 'Next.js', 'Cultura pop', 'Café & CSS'
]

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSkills(prev => {
        const next = [...prev]
        const random = skills[Math.floor(Math.random() * skills.length)]
        if (!next.includes(random)) next.push(random)
        if (next.length > 20) next.shift()
        return [...next]
      })
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-black text-white py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Um arsenal de habilidades digitais afiadas no limite entre arte e performance..
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Somos desenvolvedores, artistas, marketeiros, designers e até mágicos quando precisa.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm md:text-base text-black font-semibold">
          {visibleSkills.map((skill, i) => (
            <div
              key={i}
              className="bg-white px-4 py-2 rounded-full animate-pulse text-center shadow hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
