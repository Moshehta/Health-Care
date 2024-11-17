import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import footericon1 from '../../Assets/footericon1.png'
import footericon3 from '../../Assets/footericon3.png'

import './Banner.css'
const Banner = (props) => {
    return (
        <section className="banner">
            <div className="container">
                <img src={footericon1} className='footer-icon1' alt='footerimg' />
                <img src={footericon3} className='footer-icon3' alt='footerimg' />
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>{props.title}</h2>
                        <div className="btn-home">
                            <Link className="link" to="/"><FontAwesomeIcon icon={faHome} /> Home </Link>
                            / {props.title}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner;