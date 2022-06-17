import React from "react";
import { Col, Container, Row, Table, FormControl, FormSelect, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import faker from "@faker-js/faker";
import axios from "axios";

const NotesTeacherCreateView = () => {
    const [data, setData] = React.useState([]);
    const [group, setGroup] = React.useState();
    const [student, setStudent] = React.useState();

    const [schoolClass, setSchoolClass] = React.useState(null);

    /**
     * fetchData est une function qui appelera la fonction de la classe NoteService.index
     */


    const fetchGroupData = (groupId) => {

        axios.get(`http://172.19.2.11:5000/api/Group/GetGroup/${groupId}`).then((res) => {
            setData(res.data);
        });
    };

   
    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Group/GetGroups`).then((res) => {
            setGroup(res.data);

        });
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col lg={2} sm={2}>
                    <Container className="p-3">
                    <Form.Group>
                        <Form.Label>
                            <b>Choix de la classe</b>
                        </Form.Label>
                        <Form.Select onChange={(e) => {
                                fetchGroupData(e.target.value);
                            }}>

                            {group?.map((group) => (
                                <option key={group.id} id={group.id} value={group.id}>
                                    {group.name}
                                </option>
                            ))}
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data && data.length !== 0 ?
                                    data.students.map((student, index) => (

                                        <tr key={index}>
                                            <td>{student.lastName}</td>
                                            <td>{student.surname}</td>
                                            <td>
                                                <Link to={`${student.id}`}>Ajouter une note</Link>
                                            </td>
                                        </tr>
                                    )) : <tr><td colSpan={100}>Aucun eleve</td></tr>}
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
export default NotesTeacherCreateView;
