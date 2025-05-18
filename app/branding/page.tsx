// app/branding/page.tsx

import BrandingClient from '../../components/ComponentsB/BrandingClient'

export const metadata = {
  title: 'Branding digital com impacto visual e alma criativa | Ctrl+Lux',
  description:
    'Criamos marcas que se destacam: identidade visual, conceito e presença digital com estética sofisticada. Branding com propósito e performance.',
  keywords: [
    'branding digital',
    'identidade visual',
    'criação de marca',
    'posicionamento de marca',
    'branding para site',
    'Ctrl+Lux',
  ],
  openGraph: {
    title: 'Branding digital com impacto visual e alma criativa | Ctrl+Lux',
    description:
      'Marcas com propósito e performance. Design estratégico e comunicação que conecta. Ctrl+Lux: branding que transforma.',
    url: 'https://ctrllux.vercel.app/branding',
    siteName: 'Ctrl+Lux',
    images: [
      {
        url: '/og-branding.jpg',
        width: 1200,
        height: 630,
        alt: 'Ctrl+Lux - Branding Digital',
      },
    ],
    type: 'website',
  },
}

export default function Page() {
  return <BrandingClient />
}
