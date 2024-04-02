import React, { useEffect } from 'react'
import './SEO.css'
import seo from './SEO.jpg'

function SEO() {
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
            <span>Search Engine Optimization(SEO)</span>    
        </div>
        <div className="main-container">
            <div className="up">
                <div className="left">
                    <div className="img">
                        <img src={seo} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>In this comprehensive course, we delve into the intricacies of SEO, covering a spectrum of techniques. From meticulous competitor research to mastering the art of ranking on Google, the curriculum spans both off-page and on-page SEO strategies. Students will gain insights into leveraging SEO as a powerful tool for brand success—be it generating leads, fostering organic traffic, or driving revenue. By the end of the program, participants will possess a well-rounded understanding of SEO's multifaceted role, equipped with the skills to strategically propel any brand towards sustainable growth in the digital landscape.</p>
                    <p>Embark on a journey into the dynamic world of SEO with our comprehensive course, meticulously designed to equip you with the latest strategies and techniques. Beyond surface-level tips, we delve deep into the intricacies of search engine optimization, unraveling its complex web one thread at a time.</p>
                </div>
            </div>
            <div className="down">
                <span>Here's a some modules of our comprehensive SEO course:-</span>
                <div className="same-box">
                    <h4>Module 1-</h4>
                    <p>Introduction to SEO and Google Algorithms</p>
                </div>
                <div className="same-box">
                    <h4>Module 2-</h4>
                    <p>What are keywords and their importance in SEO, Competitor’s & Keyword research</p>
                </div>
                <div className="same-box">
                    <h4>Module 3-</h4>
                    <p>On- Page SEO</p>
                </div>
                <div className="same-box">
                    <h4>Module 4-</h4>
                    <p>Off - Page SEO</p>
                </div>
                <div className="same-box">
                    <h4>Module 5-</h4>
                    <p>Local SEO & listing</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SEO
