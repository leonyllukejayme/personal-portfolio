import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Hero_about from '../components/Hero_about'
import Footer from '../components/Footer'
import Projects_sect from '../components/Projects_sect'
import Contact_sect from '../components/Contact_sect'

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Hero_about />
      <Projects_sect />
      <Contact_sect />
      <Footer />
    </>
  )
}

export default Home
