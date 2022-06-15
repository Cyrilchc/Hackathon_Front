import React from "react";
import { Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from "../assets/lockers.jpg";
import { AuthService } from "../services/auth.service.js";

const RechercheView = () => { 
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Container id="contact-form" className="p-3 shadow-lg estiam-block mt-3">
                        <Container className="mt-3">
                            <h2><center>Liste</center></h2>
                            <hr />
                              
                            <Form.Group className="mb-3">
                                    <Form.Control/>
                            </Form.Group>
                            <button className='estiam-btn'>Chercher</button>
                            <button className='estiam-btn'>Créer</button>
                        </Container>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Nom</th>
                              <th>Prénom</th>
                              <th>Email</th>
                              <th>Classe</th>
                              <th>Rôle</th>
                              <th>Modifier</th>
                            </tr>
                          </thead>
                        </Table>
                    </Container>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default RechercheView

