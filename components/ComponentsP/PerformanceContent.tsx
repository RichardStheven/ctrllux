'use client'

import Header from '../../components/Header'
import CustomCursor from '../../components/CustomCursor/CustomCursor'
import LinhaScrollVertical from '../../components/LinhaScrollVertical'
import Meio from '../../components/Meio'
import ExplosaoFinalASCII from '../../components/ExplosaoFinalASCII'
import HeroP from '../../components/ComponentsP/HeroP'
import ModalP1 from '../../components/ComponentsP/ModalP1'
import ModalP2 from '../../components/ComponentsP/ModalP2'
import ModalP3 from '../../components/ComponentsP/ModalP3'
import ModalP4 from '../../components/ComponentsP/ModalP4'
import ModalP5 from '../../components/ComponentsP/ModalP5'

export default function PerformanceContent() {
  return (
    <main className="bg-white min-h-screen text-black">
      <Header />
      <HeroP />
      <ModalP1 />
      <ModalP2 />
      <ModalP3 />
      <ModalP4 />
      <ModalP5 />
      <LinhaScrollVertical />
      <CustomCursor />
      <Meio />
      <ExplosaoFinalASCII />
    </main>
  )
}
