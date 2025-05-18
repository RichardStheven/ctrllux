'use client';

import { useEffect, useState } from 'react';
import CircularGallery from './CircularGallery';

export default function ModalD7() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Garante que só renderiza no cliente
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full py-32 bg-black text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Projetos que saem da curva
      </h2>

      <p className="text-lg text-center max-w-xl text-neutral-400 mb-12">
        De hamburguerias a clínicas premium — criamos experiências digitais que representam de verdade o seu negócio.
      </p>

      <div style={{ height: '600px', position: 'relative', width: '100%' }}>
        <CircularGallery
          items={[
            { image: '/mc1.png', text: 'Hamburgueria' },
            { image: '/mc2.png', text: 'Joalheria' },
            { image: '/mc3.png', text: 'Engenharia' },
            { image: '/mc4.png', text: 'Coach' },
          ]}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
        />
      </div>
    </section>
  );
}
