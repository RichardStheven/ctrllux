'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue, animate } from 'framer-motion';

const dados = [
  { valor: 64, texto: 'das pessoas confiam mais em marcas com valores que se identificam' },
  { valor: 23, texto: 'aumentam sua percepção na lucratividade de marcas consistentes' },
  { valor: 91, texto: 'dos consumidores preferem comprar de uma marca que soa autêntica' },
  { valor: 48, texto: 'dos clientes levam em conta o design antes de uma compra' },
];

function ContadorAnimado({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(motionVal, value, {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(latest)}%`;
          }
        },
      });
    }
  }, [inView]);

  return <span ref={ref} className="text-4xl md:text-5xl font-bold" />;
}

export default function ModalB2() {
  return (
    <section className="bg-neutral-50 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-light mb-10">
          Vantagens reais de investir em branding técnico
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {dados.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all text-left"
            >
              <ContadorAnimado value={item.valor} />
              <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{item.texto}</p>
            </motion.div>
          ))}
        </div>

        <a
          href="https://wa.me/5511947375915"
          target="_blank"
          className="inline-block border border-black text-black px-6 py-3 rounded text-sm hover:bg-black hover:text-white transition"
        >
          Quero criar o meu projeto de Branding
        </a>
      </div>
    </section>
  );
}
