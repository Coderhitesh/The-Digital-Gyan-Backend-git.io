import React, { useEffect, useState } from 'react'
import './Contact.css'
import contactBG from './contact-bg.jpg'
import toast from 'react-hot-toast'
import axios from 'axios'

function Contact() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])

const [formdata,setformdata] = useState({
    Name : '',
    Email : '' ,
    PhoneNumber : '',
    Message : ''
})

const handlechange = (e) =>{
    const { name, value } = e.target;
    setformdata((prevData) => ({
        ...prevData,
       [name]: value,
    }))
}

const formdatafetch = async(e) =>{
    e.preventDefault()
    try {
        const response = await axios.post('https://the-digital-gyan-git-io.onrender.com/api/v16/createcontact',formdata);
        toast.success('Message Sent Successfully!')
        console.log(response)
    } catch (error) {
        console.log(error)
        toast.error("Error Occured")
    }
}

  return (
    <section className='contact-section'>
      <div className="container">
      <div className="contact-main-container">
            <div className="heading">
                <span>Get in Touch</span>
            </div>
            <div className="main-container">
                <div className="up">
                <div className="left">
                    <img src={contactBG} alt="" />
                </div>
                <form action="" onSubmit={formdatafetch}>
                    <div className="name same-field">
                    <input type="text" value={formdata.Name} placeholder='Name' name='Name' onChange={handlechange} required />
                    </div>
                    <div className="name same-field">
                    <input type="email" placeholder='Email' value={formdata.Email} name='Email' onChange={handlechange} required />
                    </div>
                    <div className="name same-field">
                    <input type="text" placeholder='Phone No.' value={formdata.PhoneNumber} name='PhoneNumber' onChange={handlechange} required />
                    </div>
                    {/* <div className="name same-field">
                        <input type="text" placeholder='Subject' required />
                    </div> */}
                    <div className="textarea same-field">
                    <textarea placeholder='Message' value={formdata.Message} name='Message' onChange={handlechange} required></textarea>
                    </div>
                    <button className='contact-btn' type='submit'>Submit</button>
                </form>
                </div>
            </div>
        </div>
      </div>
      <div className="map-parent">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9868913979562!2d77.0894223!3d28.4196524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23cb8a665d5d%3A0x4a0aa411cd5c6759!2sThe%20Digital%20Gyan%20-%20Best%20Digital%20Marketing%20Coaching%20In%20Gurgaon!5e0!3m2!1sen!2sin!4v1711537715219!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Contact
