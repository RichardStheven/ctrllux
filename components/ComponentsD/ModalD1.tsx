'use client';

import PixelCard from './Card';

export default function ModalD1() {
  return (
    <section className="w-full py-20 bg-black text-white flex flex-col items-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Um site bem desenvolvido é capaz de resolver desafios profundos da sua empresa:
      </h2>

      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <PixelCard variant="blue">
          <div className="text-center px-6">
            <h3 className="font-semibold text-lg mb-2"># Desafio 1</h3>
            <p className="font-bold mb-1">Baixo desempenho e lentidão</p>
            <p className="text-sm opacity-80">
              Sites lentos afetam sua reputação, afastam visitantes e despencam no ranking de busca. Performance é essencial.
            </p>
          </div>
        </PixelCard>

        <PixelCard variant="yellow">
          <div className="text-center px-6">
            <h3 className="font-semibold text-lg mb-2"># Desafio 2</h3>
            <p className="font-bold mb-1">Visual genérico e pouco profissional</p>
            <p className="text-sm opacity-80">
              Templates prontos não refletem sua marca. Um design sem propósito não comunica valor, nem confiança.
            </p>
          </div>
        </PixelCard>

        <PixelCard variant="pink">
          <div className="text-center px-6">
            <h3 className="font-semibold text-lg mb-2"># Desafio 3</h3>
            <p className="font-bold mb-1">Dificuldade em escalar e evoluir</p>
            <p className="text-sm opacity-80">
              Manter o site atualizado, integrar sistemas ou crescer junto com o negócio vira um problema — não uma solução.
            </p>
          </div>
        </PixelCard>

        <PixelCard variant="yellow">
          <div className="text-center px-6">
            <h3 className="font-semibold text-lg mb-2"># Desafio 4</h3>
            <p className="font-bold mb-1">Baixa autonomia</p>
            <p className="text-sm opacity-80">
              Sua equipe depende de terceiros para cada ajuste? Sites mal planejados prendem sua operação ao retrabalho.
            </p>
          </div>
        </PixelCard>

        <PixelCard variant="pink">
          <div className="text-center px-6">
            <h3 className="font-semibold text-lg mb-2"># Desafio 5</h3>
            <p className="font-bold mb-1">Desalinhamento com objetivos de negócio</p>
            <p className="text-sm opacity-80">
              Um site deve gerar resultado. Quando ele não conversa com suas metas de marketing ou vendas, ele vira custo — não investimento.
            </p>
          </div>
        </PixelCard>

        <PixelCard variant="default" className="w-full max-w-full">
          <div className="text-center px-6">
            <h3 className="text-green-400 font-semibold text-lg mb-2">🌟 A solução</h3>
            <p className="font-bold text-xl mb-1">Modernize sua presença digital com quem entende do assunto</p>
            <p className="text-sm opacity-80 mb-4">
              Atuamos com Next.js e outras tecnologias modernas para criar soluções sob medida — com performance, inteligência e liberdade para crescer. Seu site, finalmente, no controle da sua empresa.
            </p>
            <a
              href="https://wa.me/5511947375915"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors"
            >
              Falar com um especialista
            </a>
          </div>
        </PixelCard>
      </div>
    </section>
  );
}
