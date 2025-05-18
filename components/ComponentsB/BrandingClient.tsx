// app/branding/BrandingClient.tsx
'use client'

import Header from '../../components/Header'
import LinhaRedonda from '../../components/LinhaRedonda'
import CustomCursor from '../../components/CustomCursor/CustomCursor'
import LinhaScrollVertical from '../../components/LinhaScrollVertical'
import Meio from '../../components/Meio'
import ExplosaoFinalASCII from '../../components/ExplosaoFinalASCII'
import HeroB from '../../components/ComponentsB/HeroB'
import ModalB1 from '../../components/ComponentsB/ModalB1'
import ModalB2 from '../../components/ComponentsB/ModalB2'
import ComponenteCesar from '../../components/ComponentsB/ComponenteCesar'
import ModalB3 from '../../components/ComponentsB/ModalB3'
import ModalB4 from '../../components/ComponentsB/ModalB4'
import Footer from '../../components/Footer'

export default function BrandingClient() {
  return (
    <main className="bg-white min-h-screen text-black">
      <Header />
      <LinhaRedonda />
      <HeroB />
      <ModalB1 />
      <ModalB2 />
      <ComponenteCesar />
      <ModalB3 />
      <ModalB4 />
      <LinhaScrollVertical />
      <CustomCursor />
      <Meio />
      <ExplosaoFinalASCII />
      <Footer />
    </main>
  )
}
