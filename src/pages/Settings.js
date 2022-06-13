import React from "react";
/**
 * Bootstrap components
 */
import { Container, Row, Col, Form, Button} from "react-bootstrap";

/**
 * Page de parametres utilisateur
 * @returns
 */
const SettingsView = () => {
  /**
   * Rendering
   */
  return (
    <Container fluid>
      <Row>
        <Col>
          <Container className="p-3">
            <h3>Coordonnees</h3>
            <hr />
            <Container className="p-3 shadow-lg border">
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as={Col}>Mail</Form.Label>
                  <Col>
                    <Form.Control />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as={Col}>Telephone</Form.Label>
                  <Col>
                    <Form.Control />
                  </Col>
                </Form.Group>
              </Form>
            </Container>
          </Container>
        </Col>
        <Col>
          <Container className="p-3">
            <h3>Preferences</h3>
            <hr />
            <Container className="p-3 shadow-lg border">
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as={Col}>Police</Form.Label>
                  <Col>
                    <Form.Select>
                      <option>11</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as={Col}>Taille</Form.Label>
                  <Col>
                    <Form.Select>
                      <option>Petit</option>
                      <option selected>Moyen</option>
                      <option>Grand</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as={Col}>Langue</Form.Label>
                  <Col>
                    <Form.Select>
                      <option>Francais</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as={Col}>Theme</Form.Label>
                  <Col>
                    <Form.Select>
                      <option>Clair</option>
                      <option>Sombre</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
            </Container>
          </Container>
        </Col>
        <Button className="estiam-btn">
          Enregistrer
        </Button>
      </Row>
    </Container>
  );
};

/**
 * Export du composant <Page de parametres utilisateur>
 */
export default SettingsView;
