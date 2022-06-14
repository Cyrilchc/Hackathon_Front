import React from 'react'
/**
 * Bootstrap components
 */
import { Container, Row, Col, Form, Button} from "react-bootstrap";

const AdminView = () => { 

    return ( 
        <Container>
            <h3>Administration</h3>
            <hr />
            <Row>
                <Col>Bienvenue sur la page d'administration</Col> 
                <Col></Col>
            </Row>
        </Container>
    )
}

export default AdminView