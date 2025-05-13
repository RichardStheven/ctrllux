'use client'

import Image from 'next/image'

export default function DepoimentoInternacional() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto do depoimento */}
        <div className="space-y-6">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">
            📍 Fort Lauderdale, FL – USA — Jackson Consulting
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            O marketing só deu certo quando virou código.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Trabalhamos com agências de marketing por quase 6 anos. Todas focavam em postagens bonitas e promessas vazias. Depois de tanto tempo usando plataformas como Wix e WordPress, achávamos que o problema era nosso produto.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Foi só com a Ctrl+Lux que entendemos o que faltava: <span className="italic">engenharia digital</span>. Eles reescreveram nosso site do zero, nos colocaram no mapa do Google em menos de 2 meses e transformaram o que era um site em uma máquina de conversão real.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hoje, mais de 40% dos nossos novos contratos vêm direto de buscas orgânicas. Nunca mais voltamos a usar construtores.
          </p>
          <div className="font-semibold text-gray-900 mt-4">
            — Carol Jackson, CEO da Jackson Consulting
          </div>
          <div className="text-green-600 font-medium mt-2">
            Agora o marketing da nossa empresa tem base técnica. E resultado.
          </div>
        </div>

        {/* Imagem da CEO */}
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/carol.png"
            alt="Carol Jackson - CEO"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute top-4 left-4 bg-black text-white text-xs uppercase px-3 py-1 rounded">
            Depoimento Real
          </div>
        </div>
      </div>
    </section>
  )
}
