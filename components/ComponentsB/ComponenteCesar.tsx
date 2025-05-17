'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ExperienciaImersiva() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -75, // 3 telas cheias
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div
        ref={trackRef}
        className="flex w-[300vw] h-screen"
      >
        {/* BLOCO 1 */}
        <div className="w-screen h-full flex items-center justify-center px-16 relative">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6">
              Projetos que inspiram
            </h2>
            <p className="text-lg md:text-xl text-neutral-300">
              Cada criação carrega uma assinatura única. Um traço, uma ideia, um ruído que ecoa. <br />
              É mais do que design — é identidade pulsando através da tela.
            </p>
          </div>
        </div>

        {/* BLOCO 2 */}
        <div className="w-screen h-full flex items-center justify-center px-16 relative">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-light leading-snug mb-6">
              Branding com propósito
            </h2>
            <p className="text-base md:text-lg text-neutral-400">
              Acreditamos em marcas com alma. Aquilo que se comunica mesmo em silêncio. Que se impõe com leveza, e permanece.
            </p>
          </div>
        </div>

        {/* BLOCO 3 */}
        <div className="w-screen h-full flex items-center justify-center px-16 relative">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-light leading-snug mb-6">
              Experiências que conectam
            </h2>
            <p className="text-base md:text-lg text-neutral-400">
              Aqui, estética e função dançam juntas. Cada rolagem é convite, cada detalhe é presença. Design é sentimento.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}