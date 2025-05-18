'use client';

import FallingText from './FallingText';

export default function ModalD6() {
  return (
    <section className="w-full min-h-[700px] bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 z-[2]">
        Nossas armas digitais:
      </h2>

      <div className="w-full max-w-6xl h-[400px] relative">
        <FallingText
          text={`Next.js React Tailwind CSS GSAP Framer Motion Three.js React Three Fiber Recharts API REST CMS Headless SEO UX/UI Design Deploy Vercel Otimização de Performance SSR SSG Firebase MongoDB TypeScript`}
          highlightWords={[
            'Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Framer Motion',
            'Three.js', 'React Three Fiber', 'Recharts', 'API REST',
            'CMS Headless', 'SEO', 'UX/UI Design', 'Deploy Vercel',
            'Otimização de Performance', 'SSR', 'SSG', 'Firebase', 'MongoDB', 'TypeScript'
          ]}
          trigger="scroll"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.6}
          fontSize="1.8rem"
          mouseConstraintStiffness={0.9}
        />
      </div>

      <p className="text-neutral-400 text-center mt-16 max-w-xl text-lg z-[2]">
        A Ctrl+Lux domina o stack moderno de desenvolvimento com foco em performance, inovação visual e excelência técnica.
      </p>
    </section>
  );
}
