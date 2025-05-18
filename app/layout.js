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
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
