import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const TeacherNavbar = () => {


    return (
        <Navbar className="estiam-navbar" variant={"dark"}>
            <Container fluid>
                <Nav>
                    <Nav.Item>
                        <Link to="creation">Saisie</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="visualisation">Visualisation</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}