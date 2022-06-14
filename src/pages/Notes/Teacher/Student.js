import React from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SubjectService } from "../../../services/subject.service";

const StudentTeacherView = () => {
    const { id } = useParams();
    const [data, setData] = React.useState([]);
    const [subjectSelect, setSubjectSelect] = React.useState(null);

    const fetchSubjects = async () => {
        await SubjectService.index().then((res) => setData(res.data));
    };

    const handleSelect = (_value) => {
        setSubjectSelect(_value);
    };

    const postNote = async (e) => {
        e.preventDefault();
        axios
            .post("http://192.168.43.181:5000/api/Grade", {
                StudentPersonId: 1,
                AssignmentId: subjectSelect,
                assignmentName: e.target.elements.assignmentName.value,
                assignmentGrade: e.target.elements.assignmentGrade.value,
            })
            .then((res) => {
                console.log(res);

                if (res.request.status === 201) {
                    alert("Note ajoutée avec succès");
                }
            });
    };

    React.useEffect(() => {
        axios.get(`http://192.168.43.181:5000/api/Subject`).then((res) => {
            setData(res.data);
        });
        // fetchSubjects();
    }, []);

    return (
        <Container fluid>
            <Container className="p-3 shadow-lg">
                <h3>Ajout d'une note</h3>
                <hr />
                <Form onSubmit={postNote}>
                    <Form.Group className="mb-3">
                        <Form.Label>Matière</Form.Label>
                        <Form.Select
                            name="assignmentName"
                            onChange={(event) => {
                                handleSelect(event.target.value);
                            }}
                        >
                            {data.map((subject) => (
                                <option key={subject.subjectId} id={subject.subjectId} value={subject.subjectName}>
                                    {subject.subjectName}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="assignmentGrade">Note</Form.Label>
                        <Form.Control type="number" name="assignmentGrade" id="assignmentGrade" min="0" max="20" />
                    </Form.Group>
                    <Button type="submit" className="estiam-btn">
                        Envoyer
                    </Button>
                </Form>
            </Container>
        </Container>
    );
};

export default StudentTeacherView;
