import React, { useEffect, useState } from 'react'
import './ServicesHomePage.css'

import s1 from './SEO.jpg'
import s2 from './SEM.avif'
import s3 from './ecommerce.jpg'
import s4 from './SMM.jpg'
import s5 from './GoogleAnalytics.jpg'
import s6 from './MobileMarketing.jpg'
import s7 from './AffiliateMarketing.jpg'
import s8 from './management.jpg'
import s9 from './ContentMarketing.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ServicesHomePage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const [data , setData] = useState([])

    useEffect(()=>{
        const coursefetch = async() =>{
            try {
                const response = await axios.get('https://the-digital-gyan-git-io.onrender.com/api/v16/getAllProduct')
                console.log(response.data.data)
                setData(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        coursefetch()
    },[])


  return (
    <section className='ServicesHome-section'>
      <div className="container">
        <div className="heading">
            <span>Our Courses</span>
        </div>
        <div className="main-content">
            {
                data && data.map((item,index)=>(
                    <div className="col" key={index}>
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="detail">
                            <span>{item.name}</span>
                            <p>{item.des}</p>
                            <Link className='main-btn' to={`/single-page/${item.name}`}>Read More</Link>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default ServicesHomePage
