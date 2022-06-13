import React from 'react'
import { Col, Container, Row, Table, FormControl, FormSelect } from 'react-bootstrap'
import faker from '@faker-js/faker'

const NotesTeacherCreateView = () => {

    const [data, setData] = React.useState([]);
    const [schoolClass, setSchoolClass] = React.useState(null)


    /**
     * fetchData est une function qui appelera la fonction de la classe NoteService.index
     */
    const fetchData = async () => {
        for (let i = 0; i <= 15; i++) {
            setData(data => [...data, {
                // 
                id: i,
                lastname: faker.name.lastName(),
                firstname: faker.name.firstName()
            }])
        }
    }
    const handleSelect = (_value) => {setSchoolClass(_value)}
    
    React.useEffect(() => {
        fetchData()
    }, [])

    if (schoolClass) return (
        <Container fluid>
            <Row>
                <Col>
                    <Container className="p-3">
                        <Table responsive bordered hover striped size='sm'>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((element, index) => {
                                        return <tr key={index}><td>{element.lastname}</td>
                                            <td>{element.firstname}</td>
                                            <td><FormControl /></td></tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
    else return (
        <Container fluid>
            <Container>
                <FormSelect onChange={(event) => { handleSelect(event.target.value) }}>
                    <option value="Classe 1">Classe 1</option>
                    <option value="Classe 2">Classe 2</option>
                </FormSelect>
            </Container>
        </Container>
    )
}

export default NotesTeacherCreateView