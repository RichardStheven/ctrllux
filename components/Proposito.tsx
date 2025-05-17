'use client'

import CodeGhost from '../components/CodeGhost'

export default function Proposito() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 md:px-20 text-black overflow-hidden">
      <CodeGhost />

      {/* Fundo animado sutil */}
      <div className="absolute inset-0 bg-[url('/bg1.png')] bg-contain bg-no-repeat opacity-5 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nosso Propósito</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          A Ctrl+Lux existe porque acredita que <strong>nenhuma empresa pequena merece um site mal feito</strong>.
          Nosso compromisso é com a performance, indexação e conversão. Desenvolvemos sites com estrutura técnica
          pensada para escalar resultados e não apenas agradar visualmente.
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-700">
          Nós entendemos que <em>tecnologia sem objetivo é código morto</em>. Por isso, cada linha que escrevemos é
          pensada para impactar positivamente os seus números, sua reputação e sua autoridade.
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/5511947375915?text=Olá%2C%20gostaria%20de%20um%20diagnóstico%20gratuito%20do%20meu%20site%20com%20a%20Ctrl%2BLux."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded hover:bg-gray-900 transition"
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  )
}
