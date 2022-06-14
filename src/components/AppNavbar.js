import React from 'react'
import { Nav, Navbar, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_estiam_blanc-1-300x58.png'

export const AppNavbar = () => {


    return (
        <Navbar className="estiam-navbar" variant="white">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/">
                        <Image src={logo} width={150} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link href="planning">Emploi du temps</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="gestion-des-notes">Notes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/settings">Parametres</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contacter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">Se connecter</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar >
    )
}