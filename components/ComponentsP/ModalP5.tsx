'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'framer-motion'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function ModalP5() {
  const ref = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(ref)

    gsap.fromTo(
      q('.seo-texto'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section ref={ref} className="relative w-full py-32 px-6 md:px-20 bg-white text-black overflow-hidden">
      {/* Fundo com visual técnico sutil */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(#4285F4_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        <h2 className="seo-texto text-3xl md:text-5xl font-bold">
          SEO além das palavras: <span className="text-green-600">engenharia de presença</span>
        </h2>
        <p className="seo-texto text-lg md:text-xl text-neutral-700">
          Não adianta ser bom se o Google não te encontra. A Ctrl+Lux vai além do conteúdo: cuidamos da arquitetura do seu site, rastreabilidade, performance e autoridade de domínio.
        </p>

        <div className="seo-texto grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-base md:text-lg">
          <div className="space-y-3">
            <p>✅ Otimização de estrutura e heading tags</p>
            <p>✅ Schema Markup e dados estruturados</p>
            <p>✅ Monitoramento via Google Search Console</p>
            <p>✅ Estratégias reais de ranqueamento orgânico</p>
          </div>

          <div className="space-y-3">
            <p>✅ Velocidade, código limpo e mobile first</p>
            <p>✅ Diagnóstico de indexação e sitemap</p>
            <p>✅ SEO técnico com base em engenharia front-end</p>
            <p>✅ Auditoria contínua e relatórios inteligentes</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="https://wa.me/5511947375915"
            target="_blank"
            className="inline-block mt-10 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Quero aparecer no Google
          </Link>
        </motion.div>
      </div>
    </section>
  )
}