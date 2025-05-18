'use client';

import { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import ScrollFloat from '../../components/ComponentsD/Flot';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    categoria: 'Empresas com site',
    visibilidade: 85,
    cor: '#34A853',
  },
  {
    categoria: 'Empresas sem site',
    visibilidade: 20,
    cor: '#EA4335',
  },
];

export default function ModalD4() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    gsap.fromTo(
      chartRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="w-full py-24 bg-black text-white flex flex-col items-center px-6">
      <ScrollFloat containerClassName="text-center" textClassName="text-white">
        Dados que falam por si:
      </ScrollFloat>

      <p className="text-lg text-center max-w-2xl opacity-80 mb-12">
        Empresas que possuem site institucional têm até 4 vezes mais chances de serem encontradas, lembradas e consideradas confiáveis. Já as que não possuem, tendem a perder relevância, oportunidades e vendas.
      </p>

      <div ref={chartRef} className="w-full max-w-4xl h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 50, bottom: 10 }}>
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis type="category" dataKey="categoria" tick={{ fill: 'white', fontSize: 14 }} />
            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ background: '#111', border: 'none', color: '#fff' }} />
            <Bar dataKey="visibilidade" barSize={40} radius={[0, 10, 10, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.cor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
