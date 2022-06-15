import faker from "@faker-js/faker";
import axios from "axios";
import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const NotesTeacherDashboardView = () => {
    const [data, setData] = React.useState();
    const [group, setGroup] = React.useState();
    const [student, setStudent] = React.useState();
    const [schoolClass, setSchoolClass] = React.useState(null);

    // const fetchData = async () => {
    //     for (let i = 0; i <= 15; i++) {
    //         setData((data) => [
    //             ...data,
    //             {
    //                 averageGrade: faker.datatype.number({ min: 0, max: 20 }),
    //                 french: faker.datatype.number({ min: 0, max: 20 }),
    //             },
    //         ]);
    //     }
    // };

    let moyElv = [];
    let moyNotes = [];

    const handleRowClick = (_student) => {
        console.warn(_student);
        setStudent(_student);
    };

    // const handleSelect = (_value) => {
    //     setSchoolClass(_value);
    // };

    const calculateAverage = (notesArray) => {
        // console.log(notesArray);
        let sum = 0;

        notesArray.forEach((note) => {
            sum += note.score;
        });

        return sum / notesArray.length;
    };

    const fetchGroupData = (groupId) => {
        axios.get(`http://172.19.2.11:5000/api/Group/GetGroup/${groupId}/`).then((res) => {
            setData(res.data);
        });

        data.students.forEach((student) => {
            student.grades.forEach((grade) => {
                moyNotes.push(grade);
            });
        });

        console.log(moyNotes.length > 0);
    };

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Group/GetGroups`).then((res) => {
            setGroup(res.data);
        });
        // fetchGroupData(group[0].id);
    }, [moyNotes]);

    return (
        <Container fluid>
            <Row>
                <Container className="p-3">
                    <Form.Group>
                        <Form.Label>Choix de la classe</Form.Label>
                        <Form.Select
                            onChange={(e) => {
                                fetchGroupData(e.target.value);
                            }}
                        >
                            {group.map((group) => (
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
                                <td colSpan="2">
                                    <b>Moyenne générale de la classe :</b>
                                </td>
                                <td>
                                    <b>{moyNotes.length > 0 ? `${calculateAverage(moyNotes).toFixed(2)}/20` : "Aucune note"}</b>
                                </td>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col>
                    <Container className="p-3">
                        <Table responsive bordered hover striped size="sm">
                            {/* {student ? (
                                <>
                                    <thead>
                                        <h2>
                                            {student.lastname} {student.firstname}
                                        </h2>
                                        <tr>
                                            <th>Matière</th>
                                            <th>Moyenne de l'élève</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((student) => (
                                            <tr key={student.id} onclick={() => handleRowClick(student)}>
                                                <td>{student.lastName}</td>
                                                <td>{student.firstName}</td>
                                                <td>{calculateAverage(student.grades)}/20</td>
                                            </tr>
                                        ))}
                                        <td colSpan={2}>
                                            <b>Moyenne générale de la classe :</b>
                                        </td>
                                        <td>
                                            <b>{calculateAverage(moyNotes).toFixed(2)}/20</b>
                                        </td>
                                    </tbody>
                                </>
                            ) : null} */}
                        </Table>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default NotesTeacherDashboardView;
