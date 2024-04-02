import React, { useEffect } from 'react'
import './BenefitOfJoin.css';
import icon from './icon.png'
import icon2 from './icon2.png'
import { Link } from 'react-router-dom';

function BenefitOfJoin() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='benefit-section'>
        {/* <div className="bg"></div> */}
      <div className="container">
        <div className="heading">
            <span>Benefits of Joining Us</span>
        </div>
        <div className="detail">
            <div className="same-col">
                <h4> <i class="ri-verified-badge-line"></i> Certified Training Programs</h4>
                <p>Upon successful completion of our training, you will receive a certificate, a valuable credential that can enhance your prospects in future job placements.</p>
            </div>
            <div className="same-col">
                <h4><i class="ri-presentation-fill"></i> Expert Faculty</h4>
                <p>Our faculty members, all experts in their respective fields, infuse real-world experience into the classroom setting. Their passion for teaching is matched by a commitment to supporting you in reaching your goals within the dynamic realm of digital marketing.</p>
            </div>
            <div className="same-col">
                <h4><i class="ri-shuffle-line"></i> Flexible Learning Options</h4>
                <p>We understand that everyone has different learning needs and schedules. That's why we offer flexible learning options, including online courses, in-person classes, and hybrid programmes.</p>
            </div>
            <div className="same-col">
                <h4> <i class="ri-live-fill"></i> Live Projects Knowledge</h4>
                <p>We believe that hands-on learning is the most effective way to learn. That's why we incorporate practical, real-world projects into our courses and programmes to help you apply what you've learnt in a meaningful way.</p>
            </div>
            <div className="same-col">
                <h4><img src={icon} alt="" /> 100% Job Assistance</h4>
                <p>We're committed to helping you achieve your career goals. Our career services team provides one-on-one support to help you prepare for job interviews, create a winning resume, and network with potential employers.</p>
            </div>
            <div className="same-col">
                <h4><img src={icon2} alt="" />Community Engagement</h4>
                <p>We're more than just a school – we're a community. We offer a variety of opportunities to get involved, including student organizations, volunteer projects, and networking events.</p>
            </div>
            <h2>Book For Free Demo <Link style={{color:'red'}} to={'/contact'}>Click Here</Link></h2>
        </div>
      </div>
    </section>
  )
}

export default BenefitOfJoin
