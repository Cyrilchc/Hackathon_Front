import React from 'react'
import { Container } from 'react-bootstrap'

/**
 * PageNotFoundView component
 * @returns {JSX.Element}
 *
 */
const PageNotFoundView = () => {
    return ( 
        <Container fluid>
            <h1 className="text-center">Page introuvable ! </h1>
        </Container>
    )
}

export default PageNotFoundView