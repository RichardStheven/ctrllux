'use client'

import { CheckCircle, PenTool, Palette, MessageSquareQuote } from 'lucide-react'

export default function BrandingServicos() {
  return (
    <section className="w-full px-6 md:px-20 py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          O que está incluso no Branding da Ctrl+Lux?
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Cada projeto é único. Mas essas são as entregas essenciais para estruturar uma marca com posicionamento forte e presença real.
        </p>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Item 1 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-green-600 font-mono text-sm mb-2"># Etapa 1</div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <PenTool size={20} /> Criação de Marca do Zero
            </h3>
            <p className="text-gray-700 mt-2">
              Naming, conceito, propósito e personalidade. Tudo o que uma marca precisa para nascer forte.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-green-600 font-mono text-sm mb-2"># Etapa 2</div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Palette size={20} /> Identidade Visual
            </h3>
            <p className="text-gray-700 mt-2">
              Definição de paleta, tipografia, símbolos, logotipo e aplicações práticas (social, site, impresso).
            </p>
          </div>

          {/* Item 3 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-green-600 font-mono text-sm mb-2"># Etapa 3</div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MessageSquareQuote size={20} /> Voz e Comunicação
            </h3>
            <p className="text-gray-700 mt-2">
              Definimos o tom da sua marca. Sério? Irônico? Técnico? A forma como você se expressa também comunica.
            </p>
          </div>

          {/* Item 4 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-green-600 font-mono text-sm mb-2"># Etapa 4</div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <CheckCircle size={20} /> Ativação da Presença Digital
            </h3>
            <p className="text-gray-700 mt-2">
              Aplicamos a marca nos seus canais: Instagram, site, WhatsApp, LinkedIn ou onde for estratégico.
            </p>
          </div>

          {/* Item 5 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-green-600 font-mono text-sm mb-2"># Etapa 5</div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              💡 Ideias e Diferenciação
            </h3>
            <p className="text-gray-700 mt-2">
              Criamos propostas criativas para sua marca se destacar — slogans, campanhas, ou um simples toque genial.
            </p>
          </div>

          {/* Card de fechamento */}
          <div className="border bg-green-600 text-white rounded-xl p-6 shadow-md">
            <div className="font-mono text-sm mb-2 text-white/80"># Solução Completa</div>
            <h3 className="text-2xl font-semibold mb-2">Projeto de Branding</h3>
            <p>
              Quer criar ou transformar sua marca com consistência, personalidade e presença?  
              Fale com a Ctrl+Lux e comece agora.
            </p>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-10">
          <a
            href="https://wa.me/5511947375915?text=Quero%20começar%20um%20projeto%20de%20branding%20com%20a%20Ctrl%2BLux"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded hover:bg-green-700 transition"
          >
            Quero um projeto de branding
          </a>
        </div>
      </div>
    </section>
  )
}
