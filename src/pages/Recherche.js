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

    const deleteStudent = (studentId) => {
        axios.delete('http://172.19.2.11:5000/api/Student/DeleteStudent/'+studentId).then((res) => {
            console.log(res.data);

            axios.get(`http://172.19.2.11:5000/api/Student/GetStudents`).then((res) => {
                console.log(res.data);
                setData(res.data);
            });
        });
    };
    
    const deleteTeacher = (teacherId) => {
        axios.delete('http://172.19.2.11:5000/api/Teacher/DeleteTeacher/'+teacherId).then((res) => {
            console.log(res.data);

            axios.get(`http://172.19.2.11:5000/api/Teacher/GetTeachers`).then((res) => {
                console.log(res.data);
                setTeacherData(res.data);
            });
        });
    };

    return (
        <Container fluid>
         
                    <Container id="recherche-liste" className="p-3 shadow-lg estiam-block mt-3">
                
                            <h2><center>Liste</center></h2>
                            <hr />
                              
                            <Form.Group className="mb-3">
                                    <Form.Control placeholder="Rechercher"/>
                            </Form.Group >
                            <div className="estiam-btn-container-flex-sympa-lmao">
                                <Button className='estiam-btn-center'>Rechercher</Button>
                                <Button href="admin" className='estiam-btn-center'>Créer</Button>
                            </div>
                            <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Nom</th>
                              <th>Prénom</th>
                              <th>Email</th>
                              <th>Classe</th>
                              <th>Rôle</th>
                              <th>Action</th>
                            </tr>
                            {teacherData?.map((element) => {
                                return(
                                    <tr>
                                    <th>{element.lastName}</th>
                                    <th>{element.surname}</th>
                                    <th>{element.mail}</th>
                                    <th>{element.groupID}</th>
                                    <th>{element.discriminator}</th>
                                    <th><Button className='estiam-btn-center' onClick={() => deleteTeacher(element.id)}>X</Button></th>
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
                                    <th><Button className='estiam-btn-center' onClick={() => deleteStudent(element.id)}>X</Button></th>
                                </tr>
                                )
                            })}
                           </thead>
                        </Table>
                    </Container>
        </Container>
    )
}

export default RechercheView