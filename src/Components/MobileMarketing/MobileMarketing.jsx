import React, { useEffect } from 'react'
import './MobileMarketing.css'
import mobile from './MobileMarketing.jpg'

function MobileMarketing() {
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
            <span>Mobile Marketing</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={mobile} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>Introducing our specialized App Store Optimization course tailored for iOS and Android app promotion. This comprehensive program will equip students with the skills needed to enhance app visibility and performance. From providing valuable UX/UI suggestions to mastering Conversion Rate Optimization (CRO), participants will learn industry-best practices. The curriculum places a strong emphasis on in-depth keyword research and optimization strategies, enabling students to outperform competitors and secure higher app rankings. Join us to delve into the nuances of App Store Optimization and unlock the secrets to effectively promoting and maximizing the success of mobile applications on both iOS and Android platforms.</p>
                    <p>Unlock the secrets to effective mobile application promotion and maximize success with our specialized App Store Optimization (ASO) course, meticulously tailored for both iOS and Android platforms.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive Mobile Marketing course:-</span>
                <div className="same-box">
                    <h4>Module 1-</h4>
                    <p>Understanding Social Media Marketing and User Psychology</p>
                </div>
                <div className="same-box">
                    <h4>Module 2-</h4>
                    <p>Introduction to Facebook, Instagram & Linkedin Advertising</p>
                </div>
                <div className="same-box">
                    <h4>Module 3-</h4>
                    <p>Content Marketing On Facebook, linkedin and Instagram</p>
                </div>
                <div className="same-box">
                    <h4>Module 4-</h4>
                    <p>Campaign goal, structure, ad type and targeting methods</p>
                </div>
                <div className="same-box">
                    <h4>Module 5-</h4>
                    <p>Bidding strategy and conversion tracking</p>
                </div>
                <div className="same-box">
                    <h4>Module 6-</h4>
                    <p>Trending hashtags and hooks for the creatives</p>
                </div>
                <div className="same-box">
                    <h4>Module 7-</h4>
                    <p>Videos, reels, carousel and banners understanding and briefs</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MobileMarketing
