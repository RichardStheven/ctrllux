import HomeClient from '../components/HomeClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ctrllux.vercel.app'),
  title: 'Ctrl+Lux – Sites, Branding e Performance Digital',
  description:
    'Criamos sites impactantes, com performance absurda e posicionamento no Google. Desenvolvimento com Next.js, identidade visual e estratégias de marketing que funcionam.',
  keywords: [
    'como criar site',
    'aparecer no Google',
    'criar site profissional',
    'branding digital',
    'desenvolvimento web Next.js',
    'Ctrl+Lux',
    'melhor agência digital',
    'performance no Google',
  ],
  openGraph: {
    title: 'Ctrl+Lux – Sites, Branding e Performance Digital',
    description:
      'Sites lindos, rápidos e que vendem. Branding com propósito. Performance com resultado. Ctrl+Lux é a fusão entre design e tecnologia.',
    url: 'https://ctrllux.vercel.app',
    siteName: 'Ctrl+Lux',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Ctrl+Lux - Agência Digital',
      },
    ],
    type: 'website',
  },
}

export default function Page() {
  return <HomeClient />
}
