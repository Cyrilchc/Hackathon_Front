import faker from '@faker-js/faker'
import axios from 'axios'
import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'


const NotesTeacherDashboardView = () => {
    const [data, setData] = React.useState([])
    const [student, setStudent] = React.useState()
    const fetchData = async () => {
        for (let i = 0; i <= 15; i++) {
            setData(data => [...data, {
                id: i,
                lastname: faker.name.lastName(),
                firstname: faker.name.firstName(),
                averageGrade: faker.datatype.number({ 'min': 0, 'max': 20 }),
                french : faker.datatype.number({ 'min': 0, 'max': 20 })
            }])
        }
    }   

    const handleRowClick = (_student) => {
        console.warn(_student)
        setStudent(_student)
    }

    let moyNotes = []
    const calculateAverage = (notes) => {
        let sum = 0;
        notes.forEach((note) => {
            sum += note;
        });
        return sum / notes.length;
    }


    React.useEffect(() => {
        fetchData()
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
                                {data?.map((element, index) => {
                                    moyNotes.push(element.averageGrade)                          
                                    return <tr key={index} onClick={()=> { handleRowClick(element)  }}>
                                        <td>
                                            {element.lastname}
                                        </td>
                                        <td>
                                            {element.firstname}
                                        </td>
                                        <td>
                                            {element.averageGrade}/20
                                        </td>
                                    </tr>
                                })}
                                <td colSpan={2}>
                                    <b>Moyenne générale de la classe :</b>
                                </td>
                                <td>
                                    <b>{calculateAverage(moyNotes).toFixed(2)}/20</b>
                                </td>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col>
                <Table responsive bordered hover striped size="sm">
                    <Container className="p-3">
                            { student ? (<>
                                <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Moyenne de l'élève</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>
                                    {student.lastname}
                                </td>
                                <td>
                                    {student.firstname}
                                </td>
                                <td>
                                    {student.averageGrade}/20
                                </td>
                            </tr>
                            </>) : null}
                    </Container>
                </Table>
                </Col>
            </Row>

        </Container>
    )
}

export default NotesTeacherDashboardView