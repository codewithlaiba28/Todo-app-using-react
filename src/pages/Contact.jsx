import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import GetInTouch from '../components/Contact/GetInTouch'
import Contacts from '../components/Contact/Contact'

const Contact = () => {
  return (
    <div>
      <Hero tittle="Contact Us" subtittle="We're Here to Help" text="Have questions or need assistance? Reach out to our support team for prompt and friendly help." />
      <GetinTouch />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Contact