import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
import navPic from '../../Assets/navPic.png';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Navbars = () => {
    return (
        <div>
            <Navbar expand="lg">
                <div className="navv container">
                    <Navbar.Brand className="col-md-4 col-lg-4">
                        <img src={navPic} className="imgg" title="logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav col-md-8 col-lg-8 " />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="active">Home</Link>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">FAQ'S</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Booking</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Error 404</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Login / Register</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Service Detail</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blog" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/contact" className="active">Contact</Link>
                            <Link to="/search"><CiSearch className="search" /></Link>
                            <Link to="/contact" className="active"><button>Contact Us<span>&gt;</span></button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Navbars;
