import React, { useEffect } from 'react'
import './ContentMarketing.css'
import contentmarketing from './ContentMarketing.jpg'

function ContentMarketing() {
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
            <span>Content Marketing</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={contentmarketing} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>Welcome to our cutting-edge Content Marketing course, meticulously designed to empower participants with the skills and strategies necessary to excel in today's digital landscape. Content has become the cornerstone of online success, serving as the fuel that drives engagement, builds brand awareness, and fosters meaningful connections with audiences.</p>
                    <p>In our comprehensive program, participants will embark on a journey to master the art and science of content creation, distribution, and optimization. From crafting compelling narratives to leveraging diverse multimedia formats, our course covers every facet of content marketing, ensuring participants are equipped with the tools and knowledge needed to thrive in a competitive online environment.</p>
                    <p>Moreover, our course explores the power of storytelling and how it can be harnessed to create impactful content that captivates and inspires. Participants will learn how to craft compelling narratives that not only inform and educate but also evoke emotion and drive action.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive Content Marketing course:-</span>
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

export default ContentMarketing
