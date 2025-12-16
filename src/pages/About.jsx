import React from 'react'
import Hero from '../components/Hero'
import About1 from '../components/About1'
import About2 from '../components/About2'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div>
      <Hero tittle="About Us" subtittle="Our Mission" text="We are dedicated to providing the best task management experience to help you stay organized and productive." />
      <About1 />
      <About2 />
      <Footer />
    </div>
  )
}

export default About