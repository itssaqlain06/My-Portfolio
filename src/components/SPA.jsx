import React from 'react'
import Navbar from '../pages/layout/navbar'
import HeroSection from '../pages/HeroSection'
import AboutUs from '../pages/AboutUs'
import GoodDesigner from '../pages/GoodDesigner'
import LatestProjects from '../pages/LatestProjects'
import Footer from '../pages/Footer'
import NewsLetter from '../pages/NewsLetter'

export default function SPA() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <GoodDesigner />
      <LatestProjects />
      <NewsLetter />
      <Footer />
    </>
  )
}
