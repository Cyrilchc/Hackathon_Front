import React from "react";
import { Col, Container, Row, Table, FormControl, FormSelect, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import faker from "@faker-js/faker";

const NotesTeacherCreateView = () => {
  const [data, setData] = React.useState([]);
  const [schoolClass, setSchoolClass] = React.useState(null);

  /**
   * fetchData est une function qui appelera la fonction de la classe NoteService.index
   */
  const fetchData = async () => {
    for (let i = 0; i <= 15; i++) {
      setData((data) => [
        ...data,
        {
          //
          id: i,
          lastname: faker.name.lastName(),
          firstname: faker.name.firstName(),
        },
      ]);
    }
  };
  const handleSelect = (_value) => {
    setSchoolClass(_value);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col lg={2} sm={2}>
          <Container className="p-3">
            <Form.Group>
              <Form.Label>Choix de la classe</Form.Label>
              <Form.Select
                onChange={(event) => {
                  handleSelect(event.target.value);
                }}
              >
                <option value="Classe 1">Classe 1</option>
                <option value="Classe 2">Classe 2</option>
              </Form.Select>
            </Form.Group>
          </Container>
        </Col>
        <Col>
          <Container className="p-3">
            <Table responsive bordered hover striped size="sm">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.lastname}</td>
                      <td>{element.firstname}</td>
                      <td>
                        <Link to={`${element.id}`}>click</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default NotesTeacherCreateView;
