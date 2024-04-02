import React, { useEffect } from 'react'
import './SMM.css'
import smm from './SMM.jpg'

function SMM() {
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
            <span>Social Media Marketing(SMM)</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={smm} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p> Our Social Media Marketing course is designed to provide comprehensive training on leveraging the power of social media platforms to drive business growth and engagement. In this dynamic and ever-evolving field, participants will gain practical skills and strategic insights to navigate the complexities of social media marketing effectively.</p>
                    <p>Throughout the course, students will delve into the fundamentals of social media platforms such as Facebook, Instagram, Twitter, LinkedIn, Pinterest, and emerging platforms like TikTok. By understanding the unique features and audience demographics of each platform, participants will learn to develop tailored strategies that resonate with their target audience.</p>
                    <p>The curriculum covers a wide range of topics, including content creation and curation, community management, influencer marketing, social media advertising, and analytics. Through hands-on exercises, case studies, and real-world projects, students will gain practical experience in developing and executing social media campaigns across various platforms.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive SMM course:-</span>
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

export default SMM
