import React, { useEffect } from 'react'
import './CompanyOverView.css'
import FormPage from '../FormPage/FormPage'
import bg from './about-bg2.jpg'
import SearchPage from '../SearchPage/SearchPage'
import { Link } from 'react-router-dom'
import MetaTag from '../Meta/MetaTag'

function CompanyOverView() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <section className='companyOverView-section'>
      <MetaTag title={'about'} keyword={'about'} description={'about'} />
      <div className="container">
        <div className="heading">
            <span>About Digital Gyan</span>
        </div>
        <div className="detail">
        <div className="left">
            <div className="img">
                <img src={bg} alt="" />
            </div>
            <div className="main-content">
                <p>Digital Gyan stands out as the premier Digital Marketing Training Academy for acquiring a Certified Digital Marketing Course in Delhi/NCR.</p>
                <p>Our instruction, led by Google Certified Expert Trainers, spans the spectrum from fundamental to advanced digital marketing courses in Gurgaon.</p>
                <p>We invite you to explore Digital Gyan, engage in discussions, and discover how our Digital marketing course can propel your career or business, opening doors to numerous job opportunities.</p>
                <h2>Book For Free Demo <Link style={{color:'red'}} to={'/contact'}>Click Here</Link></h2>
            </div>
        </div>
        <div className="right">
            <FormPage />
            <SearchPage />
        </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverView
