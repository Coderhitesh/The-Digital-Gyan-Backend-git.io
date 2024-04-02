import React from 'react'
import './CertifiedPage.css'
import c1 from './c1.jpg'
import c2 from './c2.png'
import c3 from './c3.png'
import c4 from './c4.png'
import c5 from './c5.jpg'
import c6 from './c6.png'
import c7 from './c7.png'

function CertifiedPage() {
  return (
    <section className='certified-section'>
      <div className="container">
        <div className="up">
          <h2>Become A Certified Digital Marketer</h2>
        </div>
        <div className="down">
        <div className="img">
          <img src={c7} alt="" />
        </div>
        <div className="img">
          <img src={c2} alt="" />
        </div>
        <div className="img">
          <img src={c3} alt="" />
        </div>
        <div className="img">
          <img src={c4} alt="" />
        </div>
        <div className="img">
          <img src={c6} alt="" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default CertifiedPage
