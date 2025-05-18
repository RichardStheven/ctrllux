// NÃO USAR 'use client' AQUI

import DesenvolvimentoClient from '../../components/ComponentsD/DesenvolvimentoClient'

export const metadata = {
  title: 'Como criar site profissional em Next.js | Ctrl+Lux',
  description:
    'Criamos sites rápidos, bonitos e que posicionam no Google. Performance, SEO técnico e design para quem quer vender de verdade.',
  keywords: [
    'como criar site',
    'como aparecer no Google',
    'SEO técnico',
    'site profissional',
    'Next.js',
    'sites que vendem',
    'Ctrl+Lux',
  ],
  openGraph: {
    title: 'Como criar site profissional em Next.js | Ctrl+Lux',
    description:
      'Desenvolvemos sites com Next.js que posicionam, carregam rápido e geram resultado real. Ctrl+Lux: performance é nosso sobrenome.',
    url: 'https://ctrllux.vercel.app/desenvolvimento',
    siteName: 'Ctrl+Lux',
    images: [
      {
        url: '/og-desenvolvimento.jpg',
        width: 1200,
        height: 630,
        alt: 'Ctrl+Lux - Desenvolvimento Web Profissional',
      },
    ],
    type: 'website',
  },
}

export default function Page() {
  return <DesenvolvimentoClient />
}
