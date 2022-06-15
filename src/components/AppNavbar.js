import React from 'react'
import { Nav, Navbar, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_estiam_blanc-1-300x58.png'

export const AppNavbar = () => {


    return (
        <Navbar className="estiam-navbar" variant="dark">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/">
                        <Image src={logo} width={150} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to="planning">Emploi du temps</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="gestion-des-notes">Notes</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="tchat">Messagerie</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Item>
                        <Link to="/settings">Parametres</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contact">Contacter</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/login">Se connecter</Link>
                    </Nav.Item>
                </Nav>
                
            </Container>
        </Navbar >
    )
}