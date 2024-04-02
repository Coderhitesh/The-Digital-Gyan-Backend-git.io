import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
// import logo from './logo1.png'
// import logo from '../../../Image/logo3.png'
import logo from './logo2.png'

function Header() {

    const [isActiveAbout, setIsActiceAbout] = useState(false)
    const [isActiveService, setIsActiceService] = useState(false)
    const [isActiveCareer, setIsActicecareer] = useState(false)
    const [isActiveclient, setIsActiceclient] = useState(false)
    const [isActiveMenuDropdown, setIsActiveMenuDropDown] = useState(false)

    const handleActiveAbout = () => {
        setIsActiceAbout(!isActiveAbout)
    }

    const handleDeActiveAbout = () => {
        setIsActiceAbout(false)
    }

    const handleActiveService = () => {
        setIsActiceService(!isActiveService)
    }

    const handleDeActiveService = () => {
        setIsActiceService(false)
    }

    const handleActiveCareer = () => {
        setIsActicecareer(!isActiveCareer)
    }

    const handleDeActiveCareer = () => {
        setIsActicecareer(false)
    }

    const handleActiveClient = () => {
        setIsActiceclient(!isActiveclient)
    }

    const handleDeActiveClient = () => {
        setIsActiceclient(false)
    }

    const handleActiveMenuDropDown = () => {
        setIsActiveMenuDropDown(!isActiveMenuDropdown)
    }

    const handleDeActiveMenuDropDown = () => {
        setIsActiveMenuDropDown(false)
    }

    return (
        <header className='header'>
            <div className="top-header">
                <div className="left">
                    <i class="ri-phone-fill"></i>
                    <a href='telto:+91-8130340606'>+91-8130330606</a>
                </div>
                <div className="right">
                    <div className="mail">
                    <i class="ri-mail-line"></i>
                    <a href="mailto:Info@thedigitalgyan.in">Info@thedigitalgyan.in</a>
                    </div>
                    <div className="social">
                    <a target='_blank' href="https://www.facebook.com/thedigitalgyan01/"><i class="ri-facebook-box-fill"></i></a>
                    <a target='_blank' href="https://www.instagram.com/thedigitalgyan01/"><i class="ri-instagram-fill"></i></a>
                    <a target='_blank' href="https://www.linkedin.com/company/the-digital-gyan/"><i class="ri-linkedin-box-fill"></i></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <Link onClick={handleDeActiveMenuDropDown} to={'/'} className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <nav>
                    <ul className={`main-ul ${isActiveMenuDropdown ? 'mainmenudropdown' : ''}`}>
                        <li>
                            <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/'}>Home</Link>
                        </li>
                        <li onMouseEnter={handleActiveAbout} onMouseLeave={handleDeActiveAbout} className='about-pointer'>
                            <Link className='for-white' >About Us</Link>
                            <ul className={`about-hover ${isActiveAbout ? 'active-about-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/about'}>Company Overview</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/founder'}>Founder</Link>
                                {/* <Link onClick={handleDeActiveMenuDropDown} to={'/vision'}>Our Vision & Values</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/managment'}>Management Team</Link> */}
                            </ul>
                        </li>
                        <li className='career-pointer' onMouseEnter={handleActiveCareer} onMouseLeave={handleDeActiveCareer}>
                            <Link className='for-white'>Career</Link>
                            <ul className={`career-hover ${isActiveCareer ? 'active-career-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/why-join'}>Why Join Us</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/benefit'}>Benefits of Joining Digital Gyan</Link>
                            </ul>
                        </li>
                        <li onMouseEnter={handleActiveService} onMouseLeave={handleDeActiveService} className='services-pointer'>
                            <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/courses'}>Course</Link>
                            {/* <ul className={`services-hover ${isActiveService ? 'active-service-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/seo'}>SEO</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/sem'}>SEM</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/ecommerce'}>E-Commerce Marketing</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/smm'}>SMM</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/mobile-marketing'}>Mobile Marketing</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/content-marketing'}>Content Marketing</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/affiliate-marketing'}>Affiliate Marketing</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/managment'}>P & L Management</Link>
                            </ul> */}
                        </li>

                        {/* <li className='client-pointer' onMouseEnter={handleActiveClient} onMouseLeave={handleDeActiveClient}>
                            <Link className='for-white'>Our Clients</Link>
                            <ul className={`client-hover ${isActiveclient ? 'active-client-hover' : ''}`}>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/client'}>Clients</Link>
                                <Link onClick={handleDeActiveMenuDropDown} to={'/presence'}>Our Presence</Link>
                            </ul>
                        </li> */}
                        <li>
                            <Link onClick={handleDeActiveMenuDropDown} className='for-white' to={'/blog'}>Blog</Link>
                        </li>
                        <li>
                            <Link onClick={handleDeActiveMenuDropDown} className='for-white' to={'/contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={handleActiveMenuDropDown} className="menu-bar">
                    <i class="ri-menu-line"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
