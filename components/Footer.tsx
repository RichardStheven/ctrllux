'use client';

import {
  BadgeCheck,
  ShieldCheck,
  Globe,
  Code2,
  Star,
  Zap,
  Brain,
} from 'lucide-react';

export default function Footer() {
  const certificados = [
    { icon: <BadgeCheck className="w-6 h-6" />, label: 'Google Partner' },
    { icon: <ShieldCheck className="w-6 h-6" />, label: 'ISO 9001' },
    { icon: <Globe className="w-6 h-6" />, label: 'W3C Certified' },
    { icon: <Code2 className="w-6 h-6" />, label: 'HTML5 Rockstar' },
    { icon: <Star className="w-6 h-6" />, label: 'Pixel Perfect Award' },
    { icon: <Zap className="w-6 h-6" />, label: 'AWS Expert' },
    { icon: <Brain className="w-6 h-6" />, label: 'JavaScript Illuminati' },
  ];

  return (
    <footer className="w-full bg-black text-white py-20 px-6 flex flex-col items-center">
      <p className="mb-8 text-sm uppercase tracking-widest opacity-50">certificados ctrl+lux</p>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-6xl text-sm text-center">
  {certificados.map((item, index) => (
    <div key={index} className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity min-w-[80px]">
      {item.icon}
      <span className="text-xs">{item.label}</span>
    </div>
  ))}
</div>

      <p className="mt-12 text-xs opacity-30">© 2025 Ctrl+Lux.art – Todos direitos reservados.</p>
    </footer>
  );
}
