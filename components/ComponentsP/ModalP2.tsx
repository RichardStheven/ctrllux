'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ModalP2() {
  const beneficios = [
    'Estratégia focada na obtenção de bons resultados',
    'Copy que converte feita por profissionais especialistas',
    'Acompanhamento constante das métricas',
    'Integração com estratégia de SEO',
    'Parceiro RD Station – Resultados Digitais',
    'Criação da persona do cliente',
    'Desenvolvimento do mapa de jornada de compra',
    'Foco em geração de Leads e Vendas',
  ];

  return (
    <section className="w-full py-32 bg-white text-neutral-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-green-700">
          Benefícios de uma boa estratégia de Inbound Marketing
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          <Stat numero="80%" texto="de redução no custo de aquisição de clientes" />
          <Stat numero="13x" texto="mais visitas no site e leads qualificados" />
          <Stat numero="200%" texto="mais lucrativo do que cold calls e networking" />
          <Stat numero="5x" texto="mais oportunidades de fechar novos negócios" />
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Como funciona a nossa estratégia de Inbound Marketing
          </h3>
          <p className="text-base text-neutral-700">
            Já pensou como seria incrível <strong>não precisar ir atrás de clientes</strong> e, ao invés disso, eles procurarem a sua empresa no momento em que <strong>necessitarem comprar</strong>?
          </p>
          <p className="mt-4 text-base text-neutral-700">
            A Ctrl+Lux cria jornadas de compra inteligentes, atraindo o público certo com SEO, campanhas e conteúdo. Nossa estratégia é validada por resultados e pensada para transformar estratégia em vendas.
          </p>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-700">
          Principais benefícios do Inbound
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
          {beneficios.map((beneficio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 bg-neutral-100 rounded-xl p-4"
            >
              <Check className="text-green-600 mt-1" />
              <span>{beneficio}</span>
            </motion.div>
          ))}
        </div>

        <a
          href="https://wa.me/5511947375915"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition-all"
        >
          Quero aplicar Inbound Marketing na minha empresa
        </a>
      </div>
    </section>
  );
}

function Stat({ numero, texto }: { numero: string; texto: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold text-green-600">{numero}</div>
      <p className="text-sm sm:text-base text-neutral-700 mt-2 max-w-[12rem] mx-auto">
        {texto}
      </p>
    </motion.div>
  );
}