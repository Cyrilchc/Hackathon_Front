import React from "react";
import { Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from "../assets/lockers.jpg";
import { AuthService } from "../services/auth.service.js";
import axios from 'axios'
import { data } from "jquery";
import { useState } from "react";



const RechercheView = () => { 

    const [data, setData] = useState([]);
    const [teacherData, setTeacherData] = useState([]);

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Student/GetStudents`).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
        // fetchData();
    }, []);

    React.useEffect(() => {
         axios.get(`http://172.19.2.11:5000/api/Teacher/GetTeachers`).then((res) => {
             console.log(res.data);
             setTeacherData(res.data);
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
                                    <Form.Control placeholder="Rechercher"/>
                            </Form.Group >
                            <div className="estiam-btn-container-flex-sympa-lmao">
                                <Button className='estiam-btn-center'>Rechercher</Button>
                                <Button href="admin" className='estiam-btn-center'>Créer</Button>
                            </div>
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
                            {teacherData?.map((element) => {
                                return(
                                    <tr>
                                    <th>{element.lastName}</th>
                                    <th>{element.surname}</th>
                                    <th>{element.mail}</th>
                                    <th>{element.groupID}</th>
                                    <th>{element.discriminator}</th>
                                </tr>
                                )
                            })}
                            {data?.map((element) => {
                                return(
                                    <tr>
                                    <th>{element.lastName}</th>
                                    <th>{element.surname}</th>
                                    <th>{element.mail}</th>
                                    <th>{element.groupID}</th>
                                    <th>{element.discriminator}</th>
                                </tr>
                                )
                            })}
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