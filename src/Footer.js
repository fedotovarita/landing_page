import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from './images/Express.png';
import "./Footer.css";
import stamp from "./images/DMCA.png";

const Footer = () => {
    return (
        <Container fluid className="footer-container">
            <Row class="footer-row">
                <Col xs={12} sm={6} lg={3} className="footer-logo-section">
                    <div>
                        <Image src={logo} className="footer-logo"/>
                        <p>All Rights Reserved to info.com</p>
                        <p>© DDD – Web Marketing</p>
                        <p>Privacy Policy</p>
                        <Image src={stamp} className="footer-stamp" />
                    </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="footer-logo-section">
                    <div className="contact-div footer-contact-section">
                        <h5>CONTACT US</h5>
                        <p>UK&nbsp;&nbsp;&nbsp;&nbsp; +44-2020202020 <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+44-2020202020</p>
                        <p>AUT&nbsp;&nbsp;&nbsp;+44-2020202020</p>
                        <p>AUS&nbsp;&nbsp;&nbsp;+44-2020202020</p>
                    </div>
                </Col>
                <Col className="footer-adress-section" xs={12} sm={12} lg={6} >                
                    <Row>
                        <Col xs={12} sm={8} lg={6}>
                            <Row>
                                <Col xs={12} sm={6} lg={12}>
                                        <h5>ADDRESS</h5>
                                        <p>Lorem ipsum <br /> set ammet</p>
                                </Col>
                                <Col xs={12} sm={6} lg={12}>
                                        <h5>OUR OFFICE HOURS</h5>
                                        <p>Mon-Fr: 8:00-18:00 GMT <br />
                                        Sat/Su: Closed</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="email-section" xs={12} sm={4} lg={6}>
                            <div className="footer-email-section">
                                <h5>EMAIL US</h5>
                                <p>info@info.com</p>
                             </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};
export default Footer;