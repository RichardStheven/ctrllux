'use client'

import Header from '../../components/Header'
import HeroD1 from '../../components/HeroD1'
import LinhaRedonda from '../../components/LinhaRedonda'
import CustomCursor from '../../components/CustomCursor/CustomCursor'
import LinhaScrollVertical from '../../components/LinhaScrollVertical'
import Meio from '../../components/Meio'
import ExplosaoFinalASCII from '../../components/ExplosaoFinalASCII'
import Lanyard from '../../components/ComponentsB/Lanyard'
import Cursor1 from '../../components/Cursor1'
import ModalD1 from '../../components/ComponentsD/ModalD1'
import ModalD2 from '../../components/ComponentsD/ModalD2'
import ModalD3 from '../../components/ComponentsD/ModalD3'
import ModalD4 from '../../components/ComponentsD/ModalD4'
import ModalD5 from '../../components/ComponentsD/ModalD5'
import ModalD6 from '../../components/ComponentsD/ModalD6'
import ModalD7 from '../../components/ComponentsD/ModalD7'
import Footer from '../../components/Footer'

export default function DesenvolvimentoClient() {
  return (
    <main className="bg-white min-h-screen text-black">
      <Header />
      <LinhaRedonda />
      <HeroD1 />
      <Cursor1 />
      <ModalD1 />
      <ModalD2 />
      <ModalD3 />
      <ModalD4 />
      <ModalD5 />
      <ModalD6 />
      <ModalD7 />
      <LinhaScrollVertical />
      <CustomCursor />
      <Meio />

      <ExplosaoFinalASCII />
      <Footer />
    </main>
  )
}
