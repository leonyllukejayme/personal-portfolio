import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Hero_about from '../components/Hero_about'
import Footer from '../components/Footer'
import Projects from './Projects'
import Projects_sect from '../components/Projects_sect'

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Hero_about />
      <Projects_sect />
      <Footer />
    </>
  )
}

export default Home
