import React, { useEffect } from 'react'
import './SEM.css'
import sem from './SEM.avif'

function SEM() {
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
            <span>Search Engine Marketing(SEM)</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={sem} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>This course is a comprehensive guide to mastering the rules of online advertising, ranging from foundational principles to advanced strategies. Students will explore campaign structuring, delve into effective keyword research, and understand the nuances of precise audience targeting. With hands-on experience in creating impactful ads, participants will acquire the skills necessary to drive paid revenue for any company or business. The focus extends beyond mere advertising to achieving a significant return on investment (ROI), ensuring that graduates are adept at maximizing the effectiveness of online advertising campaigns in the dynamic digital marketplace.</p>
                    <p>In today's digitally-driven landscape, mastering the art of online advertising is paramount for businesses aiming to thrive in the competitive market sphere. This comprehensive course serves as a guiding beacon for individuals keen on navigating the intricacies of online advertising—from foundational principles to advanced strategies.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive SEM course:-</span>
                <div className="same-box">
                    <h4>Module 1-</h4>
                    <p>Digital Marketing Overview & Eco system</p>
                </div>
                <div className="same-box">
                    <h4>Module 2-</h4>
                    <p>Introduction to Pay per click Advertising</p>
                </div>
                <div className="same-box">
                    <h4>Module 3-</h4>
                    <p>Google Ads, Ads Metrics and Tools such as keyword planner, reach planner etc</p>
                </div>
                <div className="same-box">
                    <h4>Module 4-</h4>
                    <p>Google Campaigns structure - Search, Shopping, P-Max, Display, Youtube and Remarketing</p>
                </div>
                <div className="same-box">
                    <h4>Module 5-</h4>
                    <p>Targeting levers, audience and demographics</p>
                </div>
                <div className="same-box">
                    <h4>Module 6-</h4>
                    <p>Bidding strategy and conversion tracking</p>
                </div>
                <div className="same-box">
                    <h4>Module 7-</h4>
                    <p>Reporting and analysis</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SEM
