import React, { useEffect } from 'react'
import bg from './management.jpg';

function Management() {
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
            <span>P & L Management</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={bg} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>Our P&L Management course is crafted exclusively for aspiring entrepreneurs and individuals looking to join startups. Tailored to bridge the realms of marketing, revenue, and product development, this program offers a holistic understanding of business strategies. Students will delve into crafting effective revenue generation strategies and learn the art of budget allocation for optimal profit. By the end of the course, participants will be well-versed in the intricacies of P&L management, equipped with the skills necessary to steer a company towards profitability while balancing marketing initiatives and product development effectively. Join us on this journey of turning business aspirations into tangible success.</p>
                    <p>Embark on a transformative journey with our exclusive P&L Management course, meticulously designed to empower aspiring entrepreneurs and startup enthusiasts. In today's rapidly evolving business landscape, mastering Profit and Loss (P&L) management is paramount for navigating the complexities of entrepreneurship and achieving sustainable success.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive P & L Management course:-</span>
                <div className="same-box">
                    <h4>Module 1-</h4>
                    <p>Understanding P&L and its components in any business</p>
                </div>
                <div className="same-box">
                    <h4>Module 2-</h4>
                    <p>Introduction to Margins and marketing relation</p>
                </div>
                <div className="same-box">
                    <h4>Module 3-</h4>
                    <p>Media planning and P&L correlation</p>
                </div>
                <div className="same-box">
                    <h4>Module 4-</h4>
                    <p>How to reach Abita and spend strategies</p>
                </div>
                <div className="same-box">
                    <h4>Module 5-</h4>
                    <p>Making CM% (Cumulative Margins) Positive</p>
                </div>
                <div className="same-box">
                    <h4>Module 6-</h4>
                    <p>Scale the profit on CM % Positive</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Management
