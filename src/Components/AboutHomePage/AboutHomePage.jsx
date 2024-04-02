import React, { useEffect } from 'react'
import './AboutHomePage.css'
import left from './left.jpg'
import right from './right.jpg'
import left2 from './about-bg2.jpg'
import { Link } from 'react-router-dom'

function AboutHomePage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <section className='AboutHomePage-section'>
            <div className="container">
                <div className="left same">
                    <div className="img">
                        <img src={left2} alt="" />
                    </div>
                    <div className="detail">
                        <h4>About The Digital Gyan</h4>
                        <p>The Digital Gyan stands out as the premier Digital Marketing Training Academy for acquiring a Certified Digital Marketing Course in Delhi/NCR.Our instruction, led by Google Certified Expert Trainers, spans the spectrum from fundamental to advanced digital marketing courses in Gurgaon.
                        </p>
                        <Link to={'/about'} className='main-btn' >Read More</Link>
                    </div>
                </div>
                <div className="right same">
                    <div className="img">
                        <img src={right} alt="" />
                    </div>
                    <div className="detail">
                        <h4>Founder Of Digital Gyan</h4>
                        <p>Ritu Sharma the founder and CEO of The Digital Gyan, boasts over 13+ Yrs of experience as a Digital Marketing Mentor and Professional. As a certified expert and trainer in Google Ads, Facebook Ads, SEO, SEM, and Google Analytics, AMS, Flipkart marketing.</p>
                        <Link to={'/founder'} className='main-btn'>Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHomePage
