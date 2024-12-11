import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Testimonials from './Testimonals'
import Contact from './Contact'
import Team from './Team'
import About from './About'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Team/>
    </div>
  )
}

export default Home
