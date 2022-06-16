import React from 'react'
import axios from 'axios'
import { ClassService } from '../../services/class.service'
import { Container, Row, Col, Table} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

const NotesStudentDashboardView = () => {
    const { id } = useParams();
    const [chartData, setChartData] = React.useState()

    const [data, setData] = React.useState([])
    const [note, setNote] = React.useState([])

    const calculateAverage = (notesArray) => {
        let sum = 0;
        notesArray.forEach((note) => {
            sum += note.score;
        });
        return sum / notesArray.length;
    };

    const fetchStudent = async () => {
     axios
        .get(`http://172.19.2.11:5000/api/Student/GetStudent/${id}`)
        .then((response) => {
            console.log(response.data)
            setData(response.data)
        } )
        .catch((error) => error.message);
    }
    const dataItem = {
        labels: note?.map((note) => note.subject.name),
        datasets: [
            {
                label: 'Moyenne',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: note?.map((note) => note.score),
            },
        ],
    }
    // Chart :
    const chartRef = React.useRef()

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

    React.useEffect(() => {
        fetchStudent(id)
    }, [id])

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Grade/GetStudentGrades/${id}`).then((res) => {
            setNote(res.data);
        });
    }, [])

    React.useEffect(() => {
        setChartData(dataItem)
    }, [data]);

    if (chartData) return (
        <Container fluid>
            <Row>
                <Col>
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
                                { data && data.length !== 0 ? (<tr>
                                    <td>{data.lastName}</td>
                                    <td>{data.surname ? data.surname : "Vide"}</td>
                                    <td>{calculateAverage(note)}</td>
                                    </tr>
                                 ) : null}
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
        </Container></Col>
                <Col>
                    <Container>
                        <Radar data={chartData} />
                    </Container>
                </Col>

            </Row>
        </Container>
      
    )
}

export default NotesStudentDashboardView
