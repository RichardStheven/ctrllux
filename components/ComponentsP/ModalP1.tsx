'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ModalP1() {
  return (
    <section className="w-full py-32 bg-white text-black flex flex-col items-center justify-center px-6">
      {/* Título */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="text-[#34A853]"># Inbound Marketing</span> na veia
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-lg text-center max-w-2xl text-neutral-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Uma estratégia inteligente que atrai, nutre e converte. Nada de leads perdidos, funis quebrados ou ações sem resultado.
      </motion.p>

      {/* Cards de problemas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-20">
        {[
          {
            cor: '#EA4335',
            titulo: 'Geração de leads desqualificados',
            texto: 'O time de vendas vive ocupado com contatos que nunca fecham? Talvez o problema esteja na origem dos seus leads.',
          },
          {
            cor: '#FBBC05',
            titulo: 'Não existe um plano de ação',
            texto: 'Redes sociais aleatórias, e-mail sem estratégia, anúncios que não performam. Falta visão integrada.',
          },
          {
            cor: '#4285F4',
            titulo: 'Atração de clientes errados',
            texto: 'Descontos, negociações difíceis, e falta de percepção de valor. A prospecção está desalinhada com a sua proposta.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl border p-6 shadow-sm"
            style={{ borderColor: item.cor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-2 text-neutral-800">{item.titulo}</h3>
            <p className="text-neutral-600 text-sm">{item.texto}</p>
          </motion.div>
        ))}
      </div>

      {/* Solução */}
      <motion.div
        className="bg-neutral-900 text-white p-8 rounded-2xl text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[#34A853] text-sm font-semibold mb-2 tracking-widest"># SOLUÇÃO</h3>
        <h4 className="text-2xl font-bold mb-3">Inbound bem feito</h4>
        <p className="text-neutral-300 mb-6">
          A Ctrl+Lux domina o jogo do Google e transforma estratégias em resultado. Planejamento, conteúdo, SEO, UX, campanhas e automações que realmente funcionam.
        </p>
        <Link
          href="https://wa.me/5511947375915"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#34A853] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Quero isso na minha empresa
        </Link>
      </motion.div>
    </section>
  )
}
