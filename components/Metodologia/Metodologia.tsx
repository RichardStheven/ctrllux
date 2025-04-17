'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Exposição da marca',
    description: 'Aumentamos sua presença em plataformas estratégicas, gerando visibilidade qualificada todos os dias.',
  },
  {
    number: '02',
    title: 'Credibilidade e autoridade',
    description: 'Criamos ativos digitais que posicionam sua empresa como referência no segmento.',
  },
  {
    number: '03',
    title: 'Geração de leads',
    description: 'Captação estratégica com base em intenção de busca e perfil comportamental.',
  },
  {
    number: '04',
    title: 'Oferta e venda',
    description: 'Potencializamos sua solução com copy, layout e usabilidade focados em conversão.',
  },
  {
    number: '05',
    title: 'Organização e qualificação',
    description: 'Estruturamos fluxos para qualificar os leads e escalar o processo comercial.',
  },
  {
    number: '06',
    title: 'Fidelização e mensuração',
    description: 'Acompanhamos dados em tempo real, otimizando estratégias com base em performance.',
  },
]

export default function Metodologia() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-6 md:px-16 text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Metodologia que transforma presença digital em resultados reais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-sm bg-black text-white w-8 h-8 flex items-center justify-center rounded-full mb-4 font-bold mx-auto">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-900 transition-all">
            Ver marcas que já aplicaram nossa metodologia
          </button>
        </div>
      </div>
    </section>
  )
}
