'use client';

import ScrollFloat from './Flot';

export default function ModalD3() {
  return (
    <section className="w-full px-4 py-20 bg-black text-white flex flex-col items-center">
      <ScrollFloat containerClassName="text-center mb-12">
        Vantagens de criar um site em Next.js com a Ctrl+Lux
      </ScrollFloat>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl text-left">
        <div>
          <h3 className="font-semibold mb-2 text-lg">Eficiência e foco em resultados!</h3>
          <p className="text-sm opacity-80 mb-4">
            Esse é o nosso pensamento ao desenvolver um novo site com tecnologia Next.js, buscando performance, escalabilidade e SEO desde o código.
          </p>
          <p className="text-sm opacity-80">
            A Ctrl+Lux entende que cada projeto tem suas metas e desafios. Por isso, entregamos um produto robusto, pensado para gerar autoridade e agilidade, com total controle sobre integrações, conteúdo e experiência.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✔</span> Performance acima da média
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✔</span> Estrutura 100% escalável
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✔</span> Otimização SEO desde a raiz
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✔</span> Código leve, sem plugins
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✔</span> Maior controle sobre a jornada
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✔</span> Site pronto para integrações complexas
          </li>
        </ul>
      </div>

      <a
        href="https://wa.me/5511947375915"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-block px-6 py-3 text-sm font-semibold bg-green-500 hover:bg-green-400 text-black rounded-full transition"
      >
        Quero saber mais sobre o desenvolvimento com Next.js
      </a>
    </section>
  );
}
