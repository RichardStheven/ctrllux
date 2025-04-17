import Image from "next/image";

export default function Servicos() {
  return (
    <section className="w-full bg-white py-20 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-start relative">
        {/* TEXTO LATERAL ESQUERDO */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-gray-800 leading-snug">
            Quer saber de que formas podemos te fazer alcançar o próximo nível?
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Todos os <strong>serviços de marketing digital</strong> que oferecemos são alinhados com nossas raízes. Aplicamos estratégias de performance, design e gestão de marca com foco em resultados reais.
          </p>
        </div>

        {/* GRADE DE SERVIÇOS */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5 -mt-16 md:-mt-5">
          {/* PERFORMANCE */}
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/performance.png"
                alt="Performance"
                width={50}
                height={50}
              />
            </div>
            <h4 className="font-semibold text-gray-800">Performance</h4>
            <p className="text-sm text-gray-600 mt-2 mb-4">
              Gere leads e vendas com ferramentas de busca e redes sociais bem segmentadas.
            </p>
            <ul className="text-sm text-green-700 font-medium space-y-1">
              <li>Inbound Marketing</li>
              <li>Google Ads</li>
              <li>SEO</li>
              <li>Marketing de Conteúdo</li>
              <li>Redes Sociais</li>
            </ul>
          </div>

          {/* DESENVOLVIMENTO */}
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/dev.png"
                alt="Desenvolvimento"
                width={50}
                height={50}
              />
            </div>
            <h4 className="font-semibold text-gray-800">Desenvolvimento</h4>
            <p className="text-sm text-gray-600 mt-2 mb-4">
              Sites, landing pages e lojas que performam bem tecnicamente e vendem.
            </p>
            <ul className="text-sm text-green-700 font-medium space-y-1">
              <li>Sites e Lojas</li>
              <li>Landing Pages</li>
              <li>WhatsApp Marketing</li>
              <li>Email Marketing</li>
              <li>Hospedagem e domínio</li>
            </ul>
          </div>

          {/* BRANDING */}
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/branding.png"
                alt="Branding"
                width={50}
                height={50}
              />
            </div>
            <h4 className="font-semibold text-gray-800">Branding</h4>
            <p className="text-sm text-gray-600 mt-2 mb-4">
              Identidade que marca, emociona e gera valor no digital e no impresso.
            </p>
            <ul className="text-sm text-green-700 font-medium space-y-1">
              <li>Criação de Marca</li>
              <li>Material Promocional</li>
              <li>Layouts Personalizados</li>
              <li>E-book / Apresentação</li>
              <li>Papelaria Corporativa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
