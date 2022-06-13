import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SubjectService } from "../../../services/subject.service";

const StudentTeacherView = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  const fetchSubjects = async () => {
    /**
     *
     */
    await SubjectService.index().then((res) => setData(res));
  };

  return (
    <Container fluid>
      <Container className="p-3 shadow-lg">
        <h3>Ajout d'une note</h3>
        <hr />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Matiere</Form.Label>
            <Form.Select>
              {
                
              }
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form>
        <Button className="estiam-btn">Envoyer</Button>
      </Container>
    </Container>
  );
};

export default StudentTeacherView;
