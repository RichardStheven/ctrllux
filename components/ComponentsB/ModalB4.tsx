'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import LinhaCorda from '../ComponentsB/LinhaCorda'

const aplicacoes = [
  {
    numero: '1',
    titulo: 'Influencers e criadores',
    descricao: 'Estética e posicionamento para quem é a própria marca. Projetos autorais, artísticos e assessorias.',
    cor: '#4285F4',
  },
  {
    numero: '2',
    titulo: 'Profissionais por conta',
    descricao: 'Identidade e presença digital para autônomos com escritório: advogados, dentistas, contadores etc.',
    cor: '#EA4335',
  },
  {
    numero: '3',
    titulo: 'Projetos B2B',
    descricao: 'Marcas sólidas para empresas que vendem para outras empresas. Autoridade, clareza e estratégia.',
    cor: '#FBBC05',
  },
  {
    numero: '4',
    titulo: 'Projetos B2C',
    descricao: 'Marcas que encantam consumidores. Posicionamento emocional, estilo e conexão com o público final.',
    cor: '#34A853',
  }
]

export default function BrandingAplicacoesScroll() {
  const containerRef = useRef(null)

  return (
    <section
      ref={containerRef}
      className="w-full h-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory whitespace-nowrap bg-neutral-100 relative"
    >
      {aplicacoes.map((item, index) => (
        <div
          key={index}
          className="w-screen h-screen flex flex-col justify-center items-center px-10 relative snap-start whitespace-normal border-black/10"
        >
          {/* Conteúdo */}
          <div className="flex flex-col justify-center items-center text-center z-10">
            <motion.h1
              whileHover={{ y: -30 }}
              className="text-[18rem] leading-none font-serif text-black transition-all"
            >
              {item.numero}
            </motion.h1>
            <h2 className="text-2xl md:text-4xl font-bold mt-4 max-w-md">
              {item.titulo}
            </h2>
            <p className="text-base md:text-lg text-gray-700 mt-4 max-w-md">
              {item.descricao}
            </p>
          </div>

          {/* Linha entre os cards (exceto no último) */}
          {index < aplicacoes.length - 1 && (
            <div
              className="absolute top-0 bottom-0"
              style={{ left: '100%', transform: 'translateX(-1px)' }}
            >
<LinhaCorda cor={item.cor} altura={typeof window !== 'undefined' ? window.innerHeight : 800} largura={2} />
</div>
          )}
        </div>
      ))}
    </section>
  )
}
