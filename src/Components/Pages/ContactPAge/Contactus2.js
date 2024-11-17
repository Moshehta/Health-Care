import React from "react"
import './Contact.css'
import contactimg1 from "../../../Assets/contactus2,1.png"
import contactimg2 from "../../../Assets/contactus2,2.png"
import contactimg3 from "../../../Assets/contactus2,3.png"
const Contactus2=() => {
    return (
        <div className="contact-us2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="cont">
                                <img src={contactimg1} className="contimg" alt="img1" />
                                <h3>Contact Number</h3>
                                <p>+001 123 456 790</p>
                                <p>+001 123 456 790</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="cont">
                                <img src={contactimg2} className="contimg" alt="img2" />
                                <h3>Email Address</h3>
                                <p>info@yourdomain.com</p>
                                <p>info@yourdomain.com</p>
                            </div>    
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="cont cont3">
                                <img src={contactimg3} className="contimg" alt="img3" />
                                <h3>Address</h3>
                                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                            </div>    
                        </div>
                    </div> 
                </div>
            </div>
    );

}
export default Contactus2;