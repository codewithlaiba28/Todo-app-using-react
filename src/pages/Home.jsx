import React from 'react'
import Hero from '../components/Hero'
import About1 from '../components/About1'
import Features from '../components/Features/Features'
import GetInTouch from '../components/Contact/GetInTouch'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero tittle="Manage Your Tasks" subtittle="Like a Pro" text="A simple, fast, and beautiful todo manager built with modern technology to help you stay organized and productive." />
      <About1 />
      <Features />
      <GetInTouch />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home