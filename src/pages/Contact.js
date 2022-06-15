import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from "../assets/lockers.jpg";
import { AuthService } from "../services/auth.service.js";

const ContactView = () => { 
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Container id="contact-form" className="p-3 shadow-lg estiam-block mt-3">
                        <Container className="mt-3">
                            <h2>Page Contact</h2>
                            <hr />
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder="Email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control placeholder="Nom"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <div>
                                        <textarea className="txtarea" placeholder="Votre Message"></textarea>
                                    </div>
                                </Form.Group>
                            </Form>
                            <Button className="estiam-btn">SUBMIT</Button>
                        </Container>
                    </Container>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default ContactView

