import React from 'react'
/**
 * Bootstrap components
 */
import { Container, Row, Col, Form, Button} from "react-bootstrap";

const AdminView = () => { 

    return ( 
        <Container>
            
            <Row>
               

                <Container id="admin-form" className="p-3 shadow-lg estiam-block mt-3">
                    <Col></Col>
                    <h2><center> Création / Modification </center></h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom<span class="obligatoire">*</span></Form.Label>
                            <Form.Control placeholder="Nom"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Prénom<span class="obligatoire">*</span></Form.Label>
                            <Form.Control placeholder="Prénom"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Classe<span class="obligatoire">*</span></Form.Label>
                            <Form.Control placeholder="Classe"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rôle<span class="obligatoire">*</span></Form.Label>
                            <Form.Select>
                                <option selected>Selectionner une option...</option>
                                <option value="1">Professeur</option>
                                <option value="2">Eleve</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <Button className='estiam-btn'>ANNULER</Button>
                    <Button className='estiam-btn'>ENREGISTRER</Button>
                </Container>
            </Row>
        </Container>
    )
}

export default AdminView