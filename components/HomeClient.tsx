// app/HomeClient.tsx
'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Servicos from '../components/Servicos'
import LinhaRedonda from '../components/LinhaRedonda'
import CustomCursor from '../components/CustomCursor/CustomCursor'
import Metodologia from '../components/Metodologia/Metodologia'
import DepoimentoInternacional from '../components/DepoimentoInternacional'
import Proposito from '../components/Proposito'
import LinhaScrollVertical from '../components/LinhaScrollVertical'
import Meio from '../components/Meio'
import Skills from '../components/Skills'
import ExplosaoFinalASCII from '../components/ExplosaoFinalASCII'

export default function HomeClient() {
  return (
    <main className="bg-white min-h-screen text-black">
      <Header />
      <Hero />
      <LinhaRedonda />
      <Servicos />
      <LinhaScrollVertical />
      <Metodologia />
      <CustomCursor />
      <DepoimentoInternacional />
      <Proposito />
      <Meio />
      <Skills />
      <ExplosaoFinalASCII />
    </main>
  )
}
