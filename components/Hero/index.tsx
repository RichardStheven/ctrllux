'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white text-black">
      {/* FUNDO COM FOTO */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/bg1.png"
          alt="Equipe trabalhando feliz"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/50" />

        {/* FRASE CENTRAL */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold max-w-xl leading-snug">
            A gente faz o Google se apaixonar pela tua existência.
          </h1>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition-all">
            Quero aparecer no Google
          </button>
        </div>
      </div>

      {/* BLOCO INFORMATIVO */}
      <div className="relative z-10 px-4">
        <div className="bg-white shadow-lg rounded-xl px-6 md:px-10 py-10 max-w-3xl mx-auto mt-[-100px] md:mt-[-140px] 
          md:absolute md:right-20 md:top-[60%] md:translate-y-[-50%]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Uma escolha técnica
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>Ctrl+Lux</strong> é uma agência nativamente digital com foco absoluto em performance técnica, usabilidade e indexação. Desenvolvemos projetos otimizados para os mecanismos de busca com estruturação semântica, SEO técnico, análise de comportamento do usuário, integração com o ecossistema Google (Search Console, Tag Manager, Ads, Merchant Center) e design de interfaces voltadas à conversão.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Nosso diferencial é a <em>elegância funcional</em>: entregamos sistemas visualmente refinados, estrategicamente pensados e impecavelmente codificados. Se você busca autoridade digital com consistência — e sem firula —, a Ctrl+Lux é a sua escolha técnica.
          </p>
        </div>
      </div>
    </section>
  );
}
