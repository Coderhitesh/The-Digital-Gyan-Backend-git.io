import React, { useEffect } from 'react'
import './Ecommerce.css'
import eccomerce from './ecommerce.jpg'

function Ecommerce() {
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
            <span>E-commerce Marketing</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={eccomerce} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>Our Ecommerce Marketing and Promotion course is designed to provide in-depth training on leading platforms such as Amazon, Myntra, Google, Facebook, and Flipkart. Participants will gain expertise in both paid and organic promotional strategies, mastering the art of listing optimization. The curriculum includes advanced techniques for image enhancement and A+/A++ strategies, empowering students to establish a strong brand presence and generate revenue effectively. Emphasis will be placed on achieving optimal Total Cost of Sales (TCOS) and Advertising Cost of Sales (ACOS), ensuring that graduates are well-equipped to navigate the competitive world of ecommerce with proficiency and strategic finesse.</p>
                    <p>In the dynamic realm of ecommerce, where competition is fierce and consumer behavior constantly evolves, mastering the intricacies of marketing and promotion is essential for businesses striving to succeed. Our Ecommerce Marketing and Promotion course is meticulously crafted to equip participants with the skills and knowledge needed to excel in this ever-changing landscape.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive E-commerce Marketing course:-</span>
                <div className="same-box">
                    <h4>Module 1-</h4>
                    <p>Content is a King</p>
                </div>
                <div className="same-box">
                    <h4>Module 2-</h4>
                    <p>Platforms for content writing and posting</p>
                </div>
                <div className="same-box">
                    <h4>Module 3-</h4>
                    <p>Power of creating content communities</p>
                </div>
                <div className="same-box">
                    <h4>Module 4-</h4>
                    <p>Topic selections and media plans as per Goal and media calendars</p>
                </div>
                <div className="same-box">
                    <h4>Module 5-</h4>
                    <p>Content Techniques, Best Practices and SEO friendly concepts</p>
                </div>
                <div className="same-box">
                    <h4>Module 6-</h4>
                    <p>Building Authority and Trust</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Ecommerce
