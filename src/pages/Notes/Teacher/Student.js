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
            .post("http://172.19.2.11:5000/api/Grade/CreateGrade/", {
                score: e.target.score.value,
                studentId: id,
                subjectId: subjectSelect,
            })
            .then((res) => {
                console.log(res);

                if (res.request.status === 200) {
                    alert("Note ajoutée avec succès");
                    window.location.reload();
                }
            });
    };

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Subject/GetSubjects/`).then((res) => {
            setData(res.data);
        });
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
                            name="subjectId"
                            onChange={(event) => {
                                handleSelect(event.target.value);
                            }}
                        >
                            {data.map((subject) => (
                                <option key={subject.id} id={subject.id} value={subject.id}>
                                    {subject.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="score">Note</Form.Label>
                        <Form.Control type="number" name="score" id="score" min="0" max="20" required />
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
