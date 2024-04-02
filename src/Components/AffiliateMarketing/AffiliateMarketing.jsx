import React, { useEffect } from 'react'
import bg from './AffiliateMarketing.jpg'

function AffiliateMarketing() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='seo-section'>
      <div className="container">
        <div className="heading">
            <span>Affiliate Marketing</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={bg} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>Welcome to our dynamic Affiliate Marketing course, meticulously crafted to equip participants with the knowledge and skills needed to excel in the ever-evolving world of affiliate marketing. In today's digital landscape, affiliate marketing has emerged as a powerful strategy for driving revenue, expanding reach, and fostering mutually beneficial partnerships between brands and affiliates.</p>
                    <p>Our comprehensive program is designed to provide participants with a holistic understanding of affiliate marketing, from fundamental concepts to advanced strategies. Throughout the course, participants will delve into key topics such as affiliate program management, partner recruitment, commission structures, and performance tracking.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive Affiliate Marketing course:-</span>
                <div className="same-box">
                    <h4>Module 1-</h4>
                    <p>Introduction to Affiliate Marketing</p>
                </div>
                <div className="same-box">
                    <h4>Module 2-</h4>
                    <p>Choosing right Affiliate Network & partner</p>
                </div>
                <div className="same-box">
                    <h4>Module 3-</h4>
                    <p>Negotiation and closing commercials</p>
                </div>
                <div className="same-box">
                    <h4>Module 4-</h4>
                    <p>Tools to validate leads and data such as - Appsfyer, Adjust, Branch etc.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AffiliateMarketing
