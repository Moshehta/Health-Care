import React from "react";
import './Footer.css'
import footerpic from '../../Assets/navPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../Assets/facebook.png'
import twitter from '../../Assets/twitter.png'
import instagram from '../../Assets/instagram.png'
import linkedin from '../../Assets/linkedin.png'
import footerline from '../../Assets/footerlineh2.png'
import footericon2 from '../../Assets/footericon2.png'
import footericon1 from '../../Assets/footericon1.png'
import footericon3 from '../../Assets/footericon3.png'
const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='first-sec col-md-3 col-sm-6'>
                        <img src={footericon2} className='footer-icon2' alt='footerimg' />
                        <img src={footerpic} className='footer-logo' alt='footerimg' />
                        <p>
                            In mediPro , We care for our patients' health .
                            MediPro : A Name you can trust
                        </p>
                        <div className='footer-contact'>
                            <div className='footer-icon'>
                                <img src={footericon1} className='footer-icon1' alt='footerimg' />
                                <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <div className='footer-text'>
                                <h6>contact Us</h6>
                                <h4>+01 123 456 7890</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Quick Links</h2>
                        <img src={footerline} className='line' alt=''/>
                        <ul>
                            <li><a href='#1'>About Us</a></li>
                            <li><a href='#2'>Services</a></li>
                            <li><a href='#3'>Booking</a></li>
                            <li><a href='#4'>Faq's</a></li>
                            <li><a href='#5'>Blogs</a></li>
                            <li><a href='#6'>Out Team</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Our Service</h2>
                        <img src={footerline} className='line' alt=''/>
                        <ul>
                            <li><a href='#1'>Dental Care</a></li>
                            <li><a href='#2'>Cardiac Clinic</a></li>
                            <li><a href='#3'>Massege Therapy</a></li>
                            <li><a href='#4'>Cardiology</a></li>
                            <li><a href='#5'>Precise Diagnosis</a></li>
                            <li><a href='#6'>Abmbulance Services</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Subcribe</h2>
                        <img src={footerline} className='line' alt=''/>
                        <form>
                            <img src={footericon3} className='footer-icon3' alt='footerimg' />
                            <input type='email' placeholder='Email Address' required />
                            <button type='submit'>Subscribe Now</button>
                        </form>
                        <div className='footer-sec4-icons'>
                            <ul>
                                <li><a href='#1'><img src={facebook} alt='facebook' /></a></li>
                                <li><a href='#1'><img src={twitter} alt='twitter' /></a></li>
                                <li><a href='#1'><img src={instagram} alt='instagram' /></a></li>
                                <li><a href='#1'><img src={linkedin} alt='linkedin'/></a></li>
                            </ul>
                            <img src={footericon2} className='footer-icon4' alt='footerimg' />
                        </div>
                    </div>
                </div>
                <hr />
                <h6 className='copy-right'>Copyright © 2023 Design & Developed by <a href='#1'>ThemeTrades</a></h6>
            </div>
        </footer>
    );
}
export default Footer;
