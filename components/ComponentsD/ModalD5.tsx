'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import ScrollFloat from '../../components/ComponentsD/Flot';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const taxas = [
  { nome: 'Mercado Livre', taxa: 17, cor: '#FFCE00' },
  { nome: 'Shopee', taxa: 20, cor: '#FF5722' },
  { nome: 'Amazon', taxa: 19, cor: '#3C3C3C' },
  { nome: 'Seu Site', taxa: 2, cor: '#34A853' },
];

export default function ModalD5() {
  const cardsRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current || !chartRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      chartRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section className="w-full py-28 bg-black text-white flex flex-col items-center px-6">
      <ScrollFloat containerClassName="text-center mb-8" textClassName="text-white text-3xl sm:text-4xl font-semibold">
        Você sem sócios indesejados.
      </ScrollFloat>

      <p className="text-lg text-center max-w-2xl opacity-80 mb-12">
        Cada venda que você faz em marketplaces como Mercado Livre, Shopee ou Amazon perde um bom pedaço para comissões e taxas. Com seu próprio site, esse valor continua com você — além de fortalecer sua marca.
      </p>

      {/* Cards de Taxas */}
      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 w-full max-w-5xl">
        {taxas.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center shadow-md border border-neutral-800"
          >
            <span className="text-xl font-bold text-white mb-2">{item.nome}</span>
            <span className="text-3xl font-extrabold" style={{ color: item.cor }}>
              {item.taxa}%
            </span>
            <span className="text-sm text-neutral-400 mt-2 text-center">
              {item.nome === 'Seu Site'
                ? 'Taxa apenas do gateway de pagamento.'
                : 'Comissão sobre cada venda realizada.'}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Gráfico de Pizza */}
      <div ref={chartRef} className="w-full max-w-xl h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={taxas} dataKey="taxa" nameKey="nome" outerRadius={100}>
              {taxas.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.cor} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: '#111', border: 'none', color: '#fff' }}
              formatter={(value) => `${value}% de comissão`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Frase final */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-12 text-lg text-neutral-300 max-w-2xl"
      >
        Investir no seu próprio site é como contratar alguém que trabalha para você — e não contra você.
      </motion.p>
    </section>
  );
}
