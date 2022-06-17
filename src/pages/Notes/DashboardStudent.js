import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const NotesStudentDashboardView = () => {
    const { id } = useParams();

    const [data, setData] = React.useState([])
    const [note, setNote] = React.useState([])

    const calculateAverage = (notesArray) => {
        let sum = 0;
        notesArray.forEach((note) => {
            sum += note.score;
        });
        return sum / notesArray.length;
    };
    

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Grade/GetStudentGrades/${id}`).then((res) => {
            console.log(res.data);
            setNote(res.data);
        });
        axios.get(`http://172.19.2.11:5000/api/Student/GetStudent/${id}`).then((res) => {
            console.log(res.data);
            setData([res.data]);
            console.log(data);
        });
    }, [])
 
        
    return (
        <Container fluid>
            <Row>
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
                                {data.map((element, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {element.lastName}
                                        </td>
                                        <td>
                                            {element.surname}
                                        </td>
                                        <td>
                                            {element.grades.length > 0 ? `${calculateAverage(element.grades).toFixed(2)}/20` : "Aucune note"}
                                        </td>
                                        
                                    </tr>
                                }
                                )}
                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col>
                    <Container className="p-3">
                    <Table responsive bordered hover striped size="sm">
                            <thead>
                                <tr>
                                    <th>Matière</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                            {note.map((notes, index) => {
                                return <tr key={index}>
                                        <td>
                                            {notes.subject.name} 
                                        </td>
                                        <td> 
                                            {notes.score}/20
                                        </td>
                                </tr>
                            })}
                            </tbody>
                        </Table>

                    </Container>
                </Col>
            </Row>

        </Container>
    )
}


export default NotesStudentDashboardView