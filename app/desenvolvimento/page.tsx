'use client'

import Header from '../../components/Header'
import HeroD1 from '../../components/HeroD1'

import LinhaRedonda from '../../components/LinhaRedonda'
import CustomCursor from '../../components/CustomCursor/CustomCursor'
import LinhaScrollVertical from '../../components/LinhaScrollVertical'
import Meio from '../../components/Meio'
import ExplosaoFinalASCII from '../../components/ExplosaoFinalASCII'
import Lanyard from '../../components/ComponentsB/Lanyard';
import Cursor1 from '../../components/Cursor1'






export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">
     
      <Header />
      <LinhaRedonda />
      <HeroD1 />
      <Cursor1 />

      <LinhaScrollVertical />
      <CustomCursor />
      <Meio />

      <ExplosaoFinalASCII />
    </main>
  )
}
