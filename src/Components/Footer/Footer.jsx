import React, { useEffect, useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Footer() {
  const [coursesName, setCoursesName] = useState([])
  useEffect(() => {
    const coursefetch = async () => {
      try {
        const response = await axios.get('https://www.api.thedigitalgyan.in/api/v16/getAllProduct')
        console.log(response.data.data)
        setCoursesName(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    coursefetch()
  }, [])
  return (
    <footer>
      <div className="container">
        <div className="same-col col-1">
          <div className="heading">
            <span>Quick Links</span>
          </div>
          <ul className='footerlistsame'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/founder'}>Founder</Link></li>
            <li><Link to={'/why-join'}>Why Join Us</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="same-col col-2">
          <div className="heading">
            <span>Our Courses</span>
          </div>
          <ul className='footerlistsame'>
            {/* <li><Link to={'/seo'}>SEO</Link></li>
              <li><Link to={'/sem'}>SEM</Link></li>
              <li><Link to={'/ecommerce'}>E-Commerce Marketing</Link></li>
              <li><Link to={'/smm'}>SMM</Link></li>
              <li><Link to={'/mobile-marketing'}>Mobile Marketing</Link></li>
              <li><Link to={'/content-marketing'}>Content Marketing</Link></li>
              <li><Link to={'/affiliate-marketing'}>Affiliate Marketing</Link></li>
              <li><Link to={'/managment'}>P & L Management</Link></li> */}
            {/* <li><Link to={'/courses'}>Courses</Link></li> */}
            {
              coursesName && coursesName.map((item, index) => (
                <li key={index}>
                  <Link to={`/single-page/${item.name}`}>{item.name}</Link>
                  </li>
              ))
            }
          </ul>
        </div>
        <div className="same-col col-3">
          <div className="heading">
            <span>Get In Touch</span>
          </div>
          <div className="adress-box footerlistsame">
            <div className="location adress-same">
              <i class="ri-map-pin-range-line"></i>
              <p>2653, 2nd floor, behind Hong Kong Bazaar, Block F, Sushant Lok 2, Sector 57, Gurugram, Haryana 122003</p>
            </div>
            <div className="number adress-same">
              <i class="ri-phone-fill"></i>
              <p>+91-8130330606</p>
            </div>
            <div className="mail adress-same">
              <i class="ri-mail-fill"></i>
              <a href='mailto:Info@thedigitalgyan.in'>Info@thedigitalgyan.in</a>
            </div>
            {/* <div className="mail-2 adress-same">
              <i class="ri-mail-fill"></i>
                <a href="mailto:deepak@digitalstriker.in">deepak@digitalstriker.in</a>
              </div> */}
          </div>
        </div>
        <div className="same-col col-4">
          <div className="heading">
            <span>Follow On</span>
          </div>
          <div className="footerlistsame social-link">
            <a target='_blank' href="https://www.facebook.com/thedigitalgyan01/"><i class="ri-facebook-box-fill"></i></a>
            <a target='_blank' href="https://www.instagram.com/thedigitalgyan01/"><i class="ri-instagram-fill"></i></a>
            <a target='_blank' href="https://www.linkedin.com/company/the-digital-gyan/"><i class="ri-linkedin-box-fill"></i></a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>© 2024 The Digital Gyan. All Right Reseverd.</p>
        <p>Designed By <a href="https://digiindiasolutions.com/">Digi Solution</a></p>
      </div>
    </footer>
  )
}

export default Footer