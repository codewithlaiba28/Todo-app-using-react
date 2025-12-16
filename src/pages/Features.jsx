import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Features/Features'
import SecondFeatures from '../components/Features/SecondFeatures'
import Footer from '../components/Footer'

const Features = () => {
  return (
    <div>
      <Hero tittle="Features" subtittle="What We Offer" text="Discover the powerful features of our todo manager designed to help you stay organized and productive." />
      <Feature />
      <SecondFeatures />
      <Footer />
    </div>
  )
}

export default Features