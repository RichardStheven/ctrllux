import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // IMPORTANTE

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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Ads Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16882542334"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16882542334');
          `}
        </Script>

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
