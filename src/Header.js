/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import './Header.css';
import logo from "./images/Logotype.png";
import DropdownEl from './Dropdown.js';
import { CSSTransition } from "react-transition-group";

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isOpen, setClass] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 992px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    
        return () => {
          mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);
    
    const handleMediaQueryChange = mediaQuery => mediaQuery.matches ? setIsSmallScreen(true) : setIsSmallScreen(false);

    const toggleNav = () => setIsNavVisible(!isNavVisible);
    const slideEl = () => setClass(!isOpen);
    return (
            <Container fluid className="header">
                <Row className="header-row">
                    <Col xs={6} sm={6} md={6} lg={3} className="header-img-col">
                        <Image src={logo} className='header-logo'/>
                    </Col>
                    <Col xs={6} sm={3} md={3} lg={6} className="nav-btn-menu">
                    <CSSTransition in={!isSmallScreen || isNavVisible} unmountOnExit >
                        <Nav className="nav-menu">
                            <Nav.Item>
                                <Nav.Link href="#">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">About us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className={isOpen ? 'openNav' : null} onClick={slideEl}><DropdownEl /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" >Contact us</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        </CSSTransition>
                        <div className={isNavVisible ? "burger-menu open" : "burger-menu"} onClick={toggleNav}>
                            <div>
                                <div className="bar1" key="b1" />
                                <div className="bar2" key="b2" />
                                <div className="bar3" key="b3" />
                            </div>
                            <p>Menu</p>
                        </div>
                    </Col>
                    <Col xs={false} sm={3} md={3} lg={3} className="call-me-btn-div">
                        <a className="call-me-btn" href="#">Call us</a>
                    </Col>
                </Row>
            </Container>
        )
}
export default Header;
