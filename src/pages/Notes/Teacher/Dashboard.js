import faker from "@faker-js/faker";
import axios from "axios";
import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const NotesTeacherDashboardView = () => {
    const [data, setData] = React.useState();
    const [group, setGroup] = React.useState();
    const [student, setStudent] = React.useState();
    const [moyGenerale, setMoyenneGenerale] = React.useState();

    const [schoolClass, setSchoolClass] = React.useState(null);

    const handleRowClick = (_student) => {
        setStudent(_student);
    };

    const calculateAverage = (notesArray) => {
        let sum = 0;
        notesArray.forEach((note) => {
            sum += note.score;
        });
        return sum / notesArray.length;
    };

    const fetchGroupData = (groupId) => {
        let moyNotes = [];
        setMoyenneGenerale()

        axios.get(`http://172.19.2.11:5000/api/Group/GetGroup/${groupId}`).then((res) => {
            setData(res.data);

            res.data.students.forEach((student) => {
                student.grades.forEach((grade) => {
                    moyNotes.push(grade);
                });
            });

            if (moyNotes.length > 0) {
                setMoyenneGenerale(calculateAverage(moyNotes).toFixed(2))
            }
        });
    };



    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Group/GetGroups`).then((res) => {
            setGroup(res.data);
            fetchGroupData(res.data[0].id);
        })
    }, []);

    return (
        <Container fluid>
            <Row>
                <Container className="p-3">
                    <Form.Group>
                        <Form.Label><b>Choix de la classe</b></Form.Label>
                        <Form.Select
                            onChange={(e) => {
                                fetchGroupData(e.target.value);
                            }}
                        >
                            {group?.map((group) => (
                                <option key={group.id} id={group.id} value={group.id}>
                                    {group.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Container>
                <Col>
                    <Container className="p-3">
                        <Table responsive bordered hover striped size="sm">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Moyenne générale</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.students.map((student) => (
                                        <tr key={student.id} onClick={() => handleRowClick(student)}>
                                            <td>{student.lastName}</td>
                                            <td>{student.surname}</td>
                                            <td>{student.grades.length > 0 ? `${calculateAverage(student.grades).toFixed(2)}/20` : "Aucune note"}</td>
                                        </tr>
                                    ))}
                                <tr>
                                    <td colSpan="2">
                                        <b>Moyenne générale de la classe :</b>
                                    </td>
                                    <td>
                                        <b>{moyGenerale ? `${moyGenerale}/20 ` : "Aucune note"}</b>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col>
                    <Container className="p-3">
                        {student ? (
                            <>
                                <h2>
                                    {student.lastName} {student.surname}
                                </h2>
                                <Table responsive bordered hover striped size="sm">
                                    <thead>
                                        <tr>
                                            <th>Matière</th>
                                            <th>Note de l'élève</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data &&
                                            data.students.map((student, index) =>
                                                <tr key={index}>
                                                    <td>{student.grades.map((grade) => <div>{grade.subject.name}</div>)}</td>
                                                    <td>{student.grades.map((grade) => <div>{grade.score}/20</div>)}</td>
                                                </tr>
                                            )}
                                    </tbody>
                                </Table>
                            </>
                        ) : null}
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default NotesTeacherDashboardView;