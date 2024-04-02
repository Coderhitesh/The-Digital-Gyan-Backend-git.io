import React from 'react'
import AboutHomePage from '../AboutHomePage/AboutHomePage'
import ServicesHomePage from '../ServicesHomePage/ServicesHomePage'
import GetInTouchHome from '../GetInTouchHome/GetInTouchHome'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Testimonial from '../Testimonial/Testimonial'
import CertifiedPage from '../CertifiedPage/CertifiedPage'
import Whatasaap from '../Whatsapp/Whatasaap'
// import '';

function Home() {
  return (
    <div>
      <Banner />
      <AboutHomePage />
      <ServicesHomePage />
      <CertifiedPage />
      {/* <GetInTouchHome /> */}
      <Testimonial />
      <Contact />
      <Whatasaap />
    </div>
  )
}

export default Home
