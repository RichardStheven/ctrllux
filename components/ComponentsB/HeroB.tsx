'use client';

import Link from 'next/link';

export default function HeroB() {
  return (
    <section className="w-full bg-neutral-50 text-black py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* TEXTO */}
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
          Posicione sua marca com
          <span className="font-semibold"> clareza, presença e técnica.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 mt-6 max-w-xl">
          A Ctrl+Lux traduz o que sua marca representa em presença digital real, com foco em percepção de valor e conversão.
        </p>

        <Link
          href="https://wa.me/5511940359451"
          target="_blank"
          className="mt-8 inline-block px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white transition font-mono text-sm"
        >
          Quero conversar
        </Link>
      </div>

      {/* ESPAÇO PARA ILUSTRAÇÃO OU ICONE */}
      <div className="mt-12 md:mt-0 w-full md:w-[100%] h-[450px] bg-white border border-neutral-200 rounded-lg overflow-hidden">
  <img
    src="/mc1.png"
    alt="Exemplo de projeto Ctrl+Lux"
    className="w-full h-full object-cover"
  />
</div>
    </section>
  );
}
