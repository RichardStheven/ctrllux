'use client';

export default function BgM() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden isolate">
      {/* Fundo com imagem e blend elegante */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: 'url("/bgm.png")',
        }}
      />

      {/* Degradê de transição circular com sombra suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      {/* Fade suave superior */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/90 to-transparent z-20" />

      {/* Conteúdo */}
      <div className="relative z-30 h-full flex flex-col justify-center items-end px-6 md:px-24 text-white text-right">
        <blockquote className="max-w-md text-lg md:text-2xl font-medium leading-snug">
          “Em alguns anos vão existir dois tipos de empresas: as que fazem negócios pela internet e as que estão fora dos negócios.”
        </blockquote>
        <p className="mt-4 text-sm md:text-base opacity-80">Bill Gates – Fundador da Microsoft</p>

        <a
          href="https://wa.me/5511947375915"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition"
        >
          Quero solicitar uma consultoria gratuita!
        </a>
      </div>
    </section>
  );
}
