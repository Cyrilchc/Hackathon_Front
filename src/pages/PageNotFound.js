import React from "react";
import { Container } from "react-bootstrap";
import ExportToCSV from "./ExportToCSV";

/**
 * PageNotFoundView component
 * @returns {JSX.Element}
 *
 */
const PageNotFoundView = () => {
    return (
        <Container fluid>
            <ExportToCSV />
            <h1 className="text-center">Page introuvable ! </h1>
        </Container>
    );
};

export default PageNotFoundView;
