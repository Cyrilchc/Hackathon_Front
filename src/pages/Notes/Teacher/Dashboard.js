import faker from '@faker-js/faker'
import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'


const NotesTeacherDashboardView = () => {
    const [data, setData] = React.useState([])
    const [student, setStudent] = React.useState({})
    const fetchData = async () => {
        for (let i = 0; i <= 15; i++) {
            setData(data => [...data, {
                id: i,
                lastname: faker.name.lastName(),
                firstname: faker.name.firstName(),
                averageGrade: faker.datatype.number({ 'min': 0, 'max': 20 })
            }])
        }
    }   

    const handleRowClick = (_student) => { 
        console.warn(_student)
        setStudent(_student)
    }


    React.useEffect(() => {
        fetchData()
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
                                {data?.map((element, index) => {
                                    return <tr key={index} onClick={() => { handleRowClick(element) }}>
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
                            { student ? (<>
                            <Container className="border">
                                <h4>{student.lastname} {student.firstname}</h4>
                                <h5>{student.averageGrade}</h5>
                            </Container>
                            </>) : null}
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default NotesTeacherDashboardView