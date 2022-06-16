import React from "react";
import { Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from "../assets/lockers.jpg";
import { AuthService } from "../services/auth.service.js";
import axios from 'axios'

const RechercheView = () => { 

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Student/GetStudents`).then((res) => {
            console.log(res.data);
        });
        // fetchData();
    }, []);
    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Container id="recherche-liste" className="p-3 shadow-lg estiam-block mt-3">
                        <Container className="mt-3">
                            <h2><center>Liste</center></h2>
                            <hr />
                              
                            <Form.Group className="mb-3">
                                    <Form.Control/>
                            </Form.Group>
                            <Button className='estiam-btn-center'>Chercher</Button>
                            <Button className='estiam-btn-center'>Créer</Button>
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

