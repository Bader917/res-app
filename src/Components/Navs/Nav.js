import React from "react";
import { Nav, Container, Navbar} from 'react-bootstrap';
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import './Navs.css';

const Navs = () => {
    return (
            <Navbar expand="lg">
              <Container>
                <Link to="home" spy={true} smooth={true} offset={0} duration={100} className="navbar-brand">
                    <img src={logo} title="" style={{maxWidth: '120px', minWidth: '60px', cursor: 'pointer'}}/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Link to="home" spy={true} smooth={true} offset={0} duration={100} className="nav-link" >Home</Link>
                    <Link to="services" spy={true} smooth={true} offset={-140} duration={100} className="nav-link" >Foods</Link>
                    <Link to="about-us" spy={true} smooth={true} offset={-105} duration={100} className="nav-link" >About Us</Link>
                    <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={100} className="nav-link" >Contact Us</Link>
                  </Nav>
                  <Nav>
                    <Nav.Link className="phone d-none d-lg-block">+20 102 645 042 4</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
)};

export default Navs;