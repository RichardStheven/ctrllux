'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[60px] z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="flex justify-between items-center h-full px-6">
        {/* LOGO */}
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/logo.svg"
            alt="Ctrl+Lux"
            fill
            className="object-contain"
          />
        </div>

        {/* MENU HAMBURGUER */}
        <button className="flex flex-col justify-center items-end space-y-1 group">
          <span className="w-6 h-[2px] bg-black block" />
          <span className="w-4 h-[2px] bg-black block" />
          <span className="w-5 h-[2px] bg-black block" />
        </button>
      </div>
    </header>
  );
}
