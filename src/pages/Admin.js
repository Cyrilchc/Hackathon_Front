import React from 'react'
import axios from "axios";
/**
 * Bootstrap components
 */
import { Container, Row, Col, Form, Button} from "react-bootstrap";

const AdminView = () => { 

    const postUser = async (e) => {
        e.preventDefault();

        var roleSelect = document.getElementById('role_id');
        var roleValue = roleSelect.options[roleSelect.selectedIndex].value;
        console.log(roleValue);

        if(roleValue == 1){
            axios
            .post("http://172.19.2.11:5000/api/Student/CreateStudent", {
                lastName: document.getElementById('formLastname_id').value,
                surname: document.getElementById('formsurname_id').value,
                mail: document.getElementById('formemail_id').value,
                groupID: document.getElementById('formgroupID_id').value,
            })
            .then((res) => {
                console.log(res);

                if (res.request.status === 200) {
                    alert("Student crée et ajoutée avec succès");
                    window.location.reload();
                }
            });
        } else {
            axios
            .post("http://172.19.2.11:5000/api/Teacher/CreateTeacher", {
                lastName: document.getElementById('formLastname_id').value,
                surname: document.getElementById('formsurname_id').value,
                mail: document.getElementById('formemail_id').value,
                groupID: document.getElementById('formgroupID_id').value,
            })
            .then((res) => {
                console.log(res);

                if (res.request.status === 200) {
                    alert("Teacher crée et ajoutée avec succès");
                    window.location.reload();
                }
            });
        }
        
    };

    return ( 
        <Container>
            
            <Row>
               

                <Container id="admin-form" className="p-3 shadow-lg estiam-block mt-3">
                    <Col></Col>
                    <h2><center>Création de compte</center></h2>
                    <Form onSubmit={postUser}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom<span class="obligatoire">*</span></Form.Label>
                            <Form.Control required id="formLastname_id" placeholder="Nom"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Prénom<span class="obligatoire">*</span></Form.Label>
                            <Form.Control required id="formsurname_id" placeholder="Prénom"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control id="formemail_id" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Classe<span class="obligatoire">*</span></Form.Label>
                            <Form.Control required id="formgroupID_id" placeholder="Classe"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rôle<span class="obligatoire">*</span></Form.Label>
                            <Form.Select id="role_id">
                                <option selected>Selectionner une option...</option>
                                <option value="2">Professeur</option>
                                <option value="1">Eleve</option>
                            </Form.Select>
                        </Form.Group>
                    <Button href='recherche' className='estiam-btn'>ANNULER</Button>
                    <Button type="submit" className='estiam-btn'>ENREGISTRER</Button>
                    </Form>
                </Container>
            </Row>
        </Container>
    )
}

export default AdminView