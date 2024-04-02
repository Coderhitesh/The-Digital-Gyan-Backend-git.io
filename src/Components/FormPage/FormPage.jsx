import React, { useEffect } from 'react'
import './FormPage.css'

function FormPage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, []);
  return (
    <section className='FormPage-section'>
        <div className="heading">
            <span>Contact Us</span>
        </div>
      <form action="">
        <div className="name same-field">
            <input type="text" placeholder='Your Name' required />
        </div>
        <div className="email same-field">
            <input type="email" placeholder='Email Address' required/>
        </div>
        <div className="phone same-field">
            <input type="text"  placeholder='Phone Number' required />
        </div>
        <div className="mssg">
            <textarea placeholder='Your Message'></textarea>
        </div>
        <button type='submit' className='form-btn'>Submit</button>
      </form>
    </section>
  )
}

export default FormPage
