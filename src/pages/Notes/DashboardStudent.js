import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Table } from 'react-bootstrap'


const NotesStudentDashboardView = () => {
    const [data, setData] = React.useState([])
    

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Student/GetStudent/2`).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
        //fetchData()
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Container>
                        <Table responsive bordered hover striped size="sm">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Moyenne generale</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((element) => {
                                <tr key={element.id} value={element.id} >
                                    <td>
                                        {element.lastname}
                                    </td>
                                    <td>
                                        {element.firstname}
                                    </td>
                                    <td>
                                        {element.averageGrade}
                                    </td>
                                </tr>
                                    
                                })}
                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col>
                    <Container className="p-3">
                          
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default NotesStudentDashboardView