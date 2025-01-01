import React from 'react'
import Navbar from '../pages/layout/navbar'
import HeroSection from '../pages/HeroSection'
import AboutUs from '../pages/AboutUs'
import GoodDesigner from '../pages/GoodDesigner'

export default function SPA() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <GoodDesigner />
    </>
  )
}
