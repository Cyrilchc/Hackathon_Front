import React from 'react'
/**
 * Bootstrap components
 */
import { Container, Row, Col, Button } from 'react-bootstrap'
import classRoom from "../assets/classroom.jpg"

const HomeView = () => {
    return (
        <Container className="estiam-container" fluid style={{ backgroundImage: `url(${classRoom})`, backgroundSize: 'cover' }}>
            <Row>
                <Col>
                    <Container className="p-3 shadow-lg estiam-block mt-3">
                        <Container className="mt-3">
                            <h2>Estiam Pronote</h2>
                            <hr />
                            <Button className="estiam-btn">Consulter</Button>
                        </Container>
                    </Container>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default HomeView