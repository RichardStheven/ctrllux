import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ctrl+Lux – Sites, Branding e Performance Digital",
  description: "Agência digital que une design, tecnologia e resultado.",
  icons: {
    icon: "/favicon.ico", // Caminho para seu novo ícone
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Schema.org para exibir o logo na busca do Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ctrl+Lux",
              "url": "https://www.ctrllux.art",
              "logo": "https://www.ctrllux.art/logo.png",
              "sameAs": [
                "https://www.instagram.com/seuperfil",
                "https://www.linkedin.com/company/seuperfil"
              ],
            }),
          }}
        />
        {/* Open Graph para imagem de link e social */}
        <meta property="og:image" content="https://www.ctrllux.art/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
