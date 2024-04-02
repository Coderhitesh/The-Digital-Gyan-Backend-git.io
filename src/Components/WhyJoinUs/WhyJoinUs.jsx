import React, { useEffect } from 'react'
import './WhyJoinUs.css'
import CertifiedPage from '../CertifiedPage/CertifiedPage'
import { Link } from 'react-router-dom'

function WhyJoinUs() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='whyJoin-section'>
            <div className="container">
                <div className="heading">
                    <span>Why Join Us</span>
                </div>
                <div className="detail">
                    <div className="same-col">
                        <h4><i class="ri-user-star-fill"></i> Expert Instructors</h4>
                        <p>With over 13 years of expertise in the digital industry, I bring a wealth of knowledge in crafting and implementing successful digital strategies. Having contributed to renowned agencies such as Publicis and iPROSPECT, as well as collaborating with various B2C enterprises, I've played a pivotal role in transforming businesses into digital success stories. I am eager to share my insights with aspiring digital marketers, offering a roadmap to navigate the dynamic landscape and build a rewarding career in the digital realm. Join me in unlocking the secrets to making businesses digitally profitable and shaping the future of digital marketing.</p>
                    </div>
                    <div className="same-col">
                        <h4><i class="ri-lightbulb-flash-fill"></i> Our Approach</h4>
                        <p>My teaching approach integrates both fundamental and advanced aspects of digital marketing, equipping students with a comprehensive skill set. Beyond technical proficiency, I prioritize personal development to empower students not only in their professional roles but also in their overall growth. My commitment extends to ensuring their readiness for the job market, providing meticulous guidance for step-by-step interview preparation. Together, we'll not only master the intricacies of digital marketing but also cultivate the confidence and skills needed to secure a successful and fulfilling career in this dynamic field.</p>
                    </div>
                    <div className="same-col">
                        <h4><i class="ri-presentation-fill"></i> Live Projects Experience</h4>
                        <p>In my program, students will have the invaluable opportunity to engage with live projects across diverse platforms like Google, Facebook, Amazon, and Flipkart. This hands-on experience goes beyond theoretical expertise, immersing them in the practical nuances of digital marketing and promotion. By working on real projects, they'll gain a firsthand understanding of data-driven decision-making in growth marketing, ensuring a holistic perspective on ROI generation. This experiential learning approach is designed to mold not just knowledgeable professionals but adept practitioners who can navigate the dynamic landscape of digital marketing with confidence and proficiency.</p>
                    </div>
                    <div className="same-col">
                        <h4><i class="ri-brain-fill"></i> Modules - Based on Practical Knowledge</h4>
                        <p>Our programs are crafted with a focus on the practical knowledge and expertise demanded by job and business professionals in each domain, including the essential aspects of digital marketing. These courses not only cover the basics of internet marketing and advertising but also encompass the tools necessary to enhance your capabilities in any leadership position, preparing you for the era of AI and automation. The curriculum addresses both the technical and interpersonal skills needed from the executive to the managerial level.</p>
                    </div>
                    <h2>Book For Free Demo <Link style={{color:'red'}} to={'/contact'}>Click Here</Link></h2>
                </div>
            </div>
            <CertifiedPage />
        </section>
    )
}

export default WhyJoinUs
