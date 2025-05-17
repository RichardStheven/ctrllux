'use client'

import Header from '../../components/Header'
import LinhaRedonda from '../../components/LinhaRedonda'
import CustomCursor from '../../components/CustomCursor/CustomCursor'
import LinhaScrollVertical from '../../components/LinhaScrollVertical'
import Meio from '../../components/Meio'
import ExplosaoFinal from '../../components/ExplosaoFinalASCII'
import ExplosaoFinalASCII from '../../components/ExplosaoFinalASCII'
import HeroB from '../../components/ComponentsB/HeroB';
import ModalB1 from '../../components/ComponentsB/ModalB1';
import ModalB2 from '../../components/ComponentsB/ModalB2';
import ComponenteCesar from '../../components/ComponentsB/ComponenteCesar';
import ModalB3 from '../../components/ComponentsB/ModalB3';
import ModalB4 from '../../components/ComponentsB/ModalB4';
import Lanyard from '../../components/ComponentsB/Lanyard';






export default function Home() {
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
      <Lanyard/>


      <LinhaScrollVertical />
      <CustomCursor />
      <Meio />

      <ExplosaoFinalASCII />
    </main>
  )
}
