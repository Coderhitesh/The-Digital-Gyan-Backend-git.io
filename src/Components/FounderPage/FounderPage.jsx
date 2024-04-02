import React, { useEffect } from 'react'
import './FounderPage.css'
import FormPage from '../FormPage/FormPage'
import SearchPage from '../SearchPage/SearchPage'
import bg from './founder-bg.jpg'
import badge from './badge.jpg'
import { Link } from 'react-router-dom'

function FounderPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='founderPage-section'>
            <div className="container">
                <div className="heading">
                    <span>
                        Founder Of Digital Gyan
                    </span>
                </div>
                <div className="detail">
                        <div className="left">
                            <div className="img">
                                <img src={bg} alt="" />
                                <img src={badge} alt="" />
                            </div>
                            <div className="main-content">
                                <p>Ritu Sharma the founder and CEO of The Digital Gyan, boasts over 13+ Yrs of experience as a Digital Marketing Mentor and Professional. As a certified expert and trainer in Google Ads, Facebook Ads, SEO, SEM, and Google Analytics, AMS, Flipkart marketing. She has contributed her expertise to renowned multinational corporations including Google, Accenture, and Publicis Media, serving as a Trainer and Team Lead in the field of Digital Marketing. With a strong background in Ecommerce platforms, she has successfully facilitated the growth of businesses both domestically and internationally. She is also a “Top Search Marketing Voice” on LinkedIn. Join me in unlocking the secrets to making businesses digitally profitable and shaping the future of digital marketing.
                                </p>
                                <p className='contact-link'>Connect on LinkedIn - <a target='_blank' href="https://www.linkedin.com/in/ritu-sharma-91b46446/ ">Click Here</a></p>
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

export default FounderPage
