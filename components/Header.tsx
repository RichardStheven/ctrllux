'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % googleColors.length);
    }, 800);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 w-full h-[60px] z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="flex justify-between items-center h-full px-6 relative z-10">
          {/* LOGO */}
          <Link href="/" className="relative w-[150px] h-[100px] block">
  <Image
    src="/logo.svg"
    alt="Ctrl+Lux"
    fill
    className="object-contain cursor-pointer"
  />
</Link>

          {/* BOTÃO HAMBURGUER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-50 flex flex-col justify-center items-end space-y-[5px]"
          >
            <span
              className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* MENU ANIMADO HORIZONTAL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
          key="menuHorizontal"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          exit={{ width: 0 }}
          transition={{ type: 'tween', duration: 0.4 }}
          className="fixed top-0 left-0 h-[60px] bg-black z-[99] flex items-center justify-between px-6 overflow-hidden"
        >
          {/* BOTÃO DE FECHAR À ESQUERDA */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl font-light hover:opacity-80 transition"
          >
            ×
          </button>
        
          {/* LINKS COM FUNDO COLORIDO À DIREITA */}
          <div
            className="h-full px-10 flex items-center gap-8 transition-all duration-500"
            style={{ backgroundColor: googleColors[colorIndex] }}
          >
            <Link
              href="/performance"
              onClick={() => setMenuOpen(false)}
              className="text-black text-sm font-medium hover:underline"
            >
              Performance
            </Link>
            <Link
              href="/desenvolvimento"
              onClick={() => setMenuOpen(false)}
              className="text-black text-sm font-medium hover:underline"
            >
              Desenvolvimento
            </Link>
            <Link
              href="/branding"
              onClick={() => setMenuOpen(false)}
              className="text-black text-sm font-medium hover:underline"
            >
              Branding
            </Link>
          </div>
        </motion.div>
        
        )}
      </AnimatePresence>
    </>
  );
}
