'use client';

export default function ObjetivosB() {
  const objetivos = [
    {
      titulo: 'Aumento de Vendas',
      texto:
        'A identificação com a marca é um dos gatilhos que fazem com que as pessoas façam negócios com sua empresa com mais facilidade.',
    },
    {
      titulo: 'Conexão Emocional',
      texto:
        'Quando o cliente se identifica com os valores da marca, o relacionamento se aprofunda e a fidelização vira consequência.',
    },
    {
      titulo: 'Engajamento e Embaixadores',
      texto:
        'Clientes satisfeitos viram defensores da marca. Identidade bem construída é marketing espontâneo.',
    },
    {
      titulo: 'Relevância e Reputação',
      texto:
        'Não há como ser referência sem uma marca forte. Branding sólido gera autoridade no seu mercado.',
    },
    {
      titulo: 'Design e Comunicação',
      texto:
        'O design é a tradução visual da sua proposta. Uma boa identidade facilita a comunicação assertiva.',
    },
    {
      destaque: true,
      titulo: 'Projeto de Branding',
      texto:
        'Viu como uma marca bem posicionada gera valor e vendas? Conte com a Ctrl+Lux para criar esse projeto com você.',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-light">
          Se identifica com algum desses objetivos?
        </h2>
        <p className="mt-4 text-neutral-600 text-base max-w-2xl mx-auto">
          A Ctrl+Lux desenvolve projetos de branding que unem técnica, design e performance.
          Se sua marca quer crescer com consistência, esses são os primeiros passos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {objetivos.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 border shadow-sm text-left transition ${
              item.destaque
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-black hover:shadow-md'
            }`}
          >
            <p className={`text-sm font-mono mb-2 ${item.destaque ? 'text-lime-300' : 'text-green-600'}`}>
              {item.destaque ? '# Solução' : `# Objetivo ${i + 1}`}
            </p>
            <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
            <p className="text-sm leading-relaxed">{item.texto}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://wa.me/5511947375915"
          target="_blank"
          className="inline-block text-green-700 border border-green-700 px-6 py-3 rounded text-sm hover:bg-green-700 hover:text-white transition"
        >
          Quero alcançar esses objetivos criando um projeto de branding!
        </a>
      </div>
    </section>
  );
}
