// components/ComponentsP/ModalP3.tsx
'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

export default function ModalP3() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };

    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="w-full py-24 bg-white text-black flex flex-col items-center px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-8"
      >
        Domine o jogo com o <span className="text-blue-600">Google Ads</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-center max-w-2xl text-neutral-700 mb-12"
      >
        Nada de campanhas genéricas. Aqui a gente cria, otimiza e escala campanhas com estratégia.
        A Ctrl+Lux conhece as entranhas do Google — e usa isso a favor do seu resultado.
      </motion.p>

      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="relative rounded-xl shadow-xl p-8 w-full max-w-3xl overflow-hidden"
        style={{
          background: 'radial-gradient(circle at var(--x) var(--y), #00f2ff, #00dc82)',
          transition: 'background 0.2s ease'
        }}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white text-lg z-10 relative">
          <li>Campanhas inteligentes e mensuráveis</li>
          <li>Configuração de conversão e tagueamento</li>
          <li>Integração com Google Merchant e Analytics</li>
          <li>Segmentação cirúrgica: quem procura, acha</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-12"
      >
        <Link
          href="https://wa.me/5511947375915"
          target="_blank"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        >
          <FaGoogle className="text-white text-xl" /> Falar sobre Google Ads
        </Link>
      </motion.div>
    </section>
  );
}