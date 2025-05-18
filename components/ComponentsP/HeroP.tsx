'use client';

import RotatingText from './RotatingText';

export default function HeroP() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32">
      <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6 leading-tight flex flex-wrap justify-center gap-3">
        A gente faz o Google

        <RotatingText
          texts={[
            'se apaixonar',
            'te indexar',
            'te rankear',
            'te colocar no topo',
          ]}
          mainClassName="px-3 bg-white text-black overflow-hidden py-1 rounded-md"
          staggerFrom="last"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        .
      </h1>

      <p className="text-lg sm:text-xl text-center max-w-3xl text-neutral-300">
        Campanhas inteligentes, SEO técnico, conteúdo estratégico e otimização afiada. 
        Nós não seguimos o algoritmo — a gente ensina ele a dançar contigo.
      </p>
    </section>
  );
}
