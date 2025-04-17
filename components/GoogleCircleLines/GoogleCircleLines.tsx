'use client';

export default function GoogleCircleLines() {
  return (
    <div className="relative w-[120px] h-[120px] animate-spin">
      {/* Círculo base (só guia, opcional) */}
      <div className="absolute inset-0 rounded-full border border-gray-200/40" />

      {/* Azul - topo */}
      <div className="absolute top-0 left-1/2 w-[2px] h-[50%] bg-blue-500 origin-bottom transform -translate-x-1/2">
        <div className="w-3 h-3 bg-blue-500 rounded-full absolute -top-[6px] left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Vermelho - direita */}
      <div className="absolute top-1/2 right-0 h-[2px] w-[50%] bg-red-500 origin-left transform -translate-y-1/2">
        <div className="w-3 h-3 bg-red-500 rounded-full absolute -right-[6px] top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Amarelo - fundo */}
      <div className="absolute bottom-0 left-1/2 w-[2px] h-[50%] bg-yellow-400 origin-top transform -translate-x-1/2">
        <div className="w-3 h-3 bg-yellow-400 rounded-full absolute -bottom-[6px] left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Verde - esquerda */}
      <div className="absolute top-1/2 left-0 h-[2px] w-[50%] bg-green-500 origin-right transform -translate-y-1/2">
        <div className="w-3 h-3 bg-green-500 rounded-full absolute -left-[6px] top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  );
}
