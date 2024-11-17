import React from "react";
import Banner from "../../Banner/Bannar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import './Contact.css'
import { TbWorld } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FormContact from "./FormContact";
import Contactus2 from "./Contactus2";
import Footer from '../../footer/Footer'
const Contact = () => {
    return (
        <div>
            <Banner title="Contact Us"/>
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <FormContact/>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="side">
                                <div className="overlay">
                                    <h3>Contact Us For Any Informations</h3>
                                    <li><FontAwesomeIcon icon={faMapLocation} /> Location </li>
                                    <hr />
                                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                    <li><FontAwesomeIcon icon={faIdBadge} /> Email & Phone </li>
                                    <hr />
                                    <p>info@yourdomain.com</p>
                                    <p>(+68) 120034509</p>
                                    <li><TbWorld /> Follow Us </li>
                                    <hr />
                                    <ul>
                                        <li><FaTwitter /></li>
                                        <li><FaLinkedin /></li>
                                        <li><FaInstagram /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <Contactus2 />
            <Footer/>
        </div>
    );
}
export default Contact;