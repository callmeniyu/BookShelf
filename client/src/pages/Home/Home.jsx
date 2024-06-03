import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Books from '../../components/Books/Books'

const Home = () => {
  window.scrollTo(0,0)
  return (
    <>
      <Navbar />
      <Hero />
      <Books />
    </>
  )
}

export default Home