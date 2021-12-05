/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Image, Form, FloatingLabel } from "react-bootstrap";
import './MainBody.css';
import decor from './images/Decor.png';
import PhoneInput from 'react-phone-number-input'


const MainBody = () => {
    const [value, setValue] = useState();
    return (
        <Container className="main-body-container">
            <Row>
                <Col className="h1-section">
                    <h1 className="h-text">Lorem ipsum set <br/> ammet test-test</h1>
                    <p className="p-text">LET US HELP YOU GET IT ALL BACK!</p>
                    <Image src={decor} className="decor-img" />
                    <div className="text-btn-content">
                        <p className="text-main-section">We currently take cases that are $10,000 US and up</p>
                        <a className="consult-btn">Get a free consultation</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="contact-section">
                    <div className="contact-text">
                        <h1 className="cont-word">Contact</h1> 
                        <h1 className="us-word">Us</h1>
                    </div>
                    <Form className="contact-form">
                        <Row mb={3}>
                            <Form.Group xs={12} md={6} as={Col}>
                                <Form.Label controlId="floatingFirstName" label="First name">
                                    <Form.Control type="text" placeholder="First name" className="contact-input" />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group xs={12} md={6} as={Col}>
                                <Form.Label controlId="floatingLastName" label="Last name">
                                    <Form.Control type="text" placeholder="Last name" className="contact-input" />
                                </Form.Label>
                            </Form.Group>     
                        </Row>
                        <Row mb={3}>
                            <Form.Group xs={12} md={6} as={Col}>
                                <Form.Label>
                                    <PhoneInput international value={value} defaultCountry="US" countryCallingCodeEditable={false} onChange={setValue} />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group xs={12} md={6} as={Col}>
                                <Form.Label controlId="floatingInput" label="Enter email">
                                    <Form.Control className="contact-input" placeholder="Enter email" type="email" />
                                </Form.Label>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <FloatingLabel controlId="floatingTextarea2" label="Tell us what happened">
                                <Form.Control as="textarea" style={{ height: '96px' }} className="contact-textarea" />
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                    <a className="consult-btn send-btn">Send</a>
                </Col>
            </Row>
        </Container>
    )
}
export default MainBody;