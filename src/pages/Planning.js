import React from 'react'
import axios from 'axios'
/**
 * Bootstrap components
 */
import {Card, CardGroup, Col, Container, Form, Row} from 'react-bootstrap'
/**
 * Fullcalendar components and librairies
 */
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import frLocale from '@fullcalendar/core/locales/fr';
import { Navigate, useNavigate } from 'react-router-dom'


/**
 * Services
 */
import { AuthService } from '../services/auth.service.js'
import { CalendarService } from '../services/calendar.service.js'
import { event } from 'jquery'


/**
 * Composant de vue PlanningView
 * C'est le composant page qui est appele par le ReactRouter pour l'url /planning
 * @returns 
 */
const PlanningView = () => {


    const userConnected = AuthService.handleConnection()
    const navigate = useNavigate()

    const [data, setData] = React.useState([])
    const [start, setStart] = React.useState()
    const [end, setEnd] = React.useState()
    const [name, setName] = React.useState()
 
    const fetchData = async () => await CalendarService.index().then(res => setData(res));

    const handleSelect = (_value) => {
        setStart(_value.start)
        setEnd(_value.end)
        setName(_value.title)
    }

    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Appointment/GetGroupAppointment/1`).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
        // fetchData();
    }, []);


    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.end.value);
        axios.post(`http://172.19.2.11:5000/api/Appointment/CreateAppointment`, {
            name: event.target.name.value,
            startDateTime: event.target.start.value ,
            endDateTime: event.target.end.value ,
            groupID: 1,
            //userId: userConnected.id,
        }).then((res) => {
            console.log(res);
            if (res.request.status === 204) {
                alert("Horaire ajoutée avec succès");
                window.location.reload();
            }
        });
    }

    // if(userConnected) {
        return (
            
            <Container fluid>
                <Row>
                    <Col>
                        <Container className="p-3">
                            <FullCalendar
                                plugins={[timeGridPlugin]}
                                initialView="timeGridWeek"
                                weekends={true}        
                                timeZone= "local"
                                slotMinTime= "08:00"
                                slotMaxTime= "17:00"
                                locale = "fr"
                                events={data.map((appointements) => (
                                    {
                                        title: appointements.name,
                                        start: appointements.startDateTime,
                                        end: appointements.endDateTime,
                                    }
                                ))}
                              
                                
                            />
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <h3>Raccourcis fonctionnalités</h3>
                            <hr />
                            <Container>
                                <CardGroup>
                                    <Form onSubmit={handleClick}>
                                        <Form.Group className='mb-3'>
                                        <Card>
                                            <Card.Body>
                                                <input type="text" name="name" placeholder="Nom" onChange={(e) => {handleSelect(e.target.value)}} />
                                            </Card.Body>
                                        </Card>
                                        <Card>                                                
                                            <Form.Label>Date de début</Form.Label>
                                            <Card.Body>
                                                <input type="datetime-local" className='form-control' name="start" onChange={(e) => {handleSelect(e.target.value)}}/>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Form.Label>Date de fin</Form.Label>
                                            <Card.Body>
                                                <input type="datetime-local" className='form-control' name = "end" onChange={(e) => {handleSelect(e.target.value)}}/>
                                            </Card.Body>
                                        </Card>
                                        
                                        <Card>
                                            <button type = "submit "className="btn btn-primary">Ajouter</button>
                                        </Card>
                                        </Form.Group>
                                    </Form>
                                </CardGroup>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
        }
    // }


export default PlanningView


/**
 * 
 * ---------------------------------------
 * NOTES DU CPO (Williams TUSITHIPHONEXAY)
 * ---------------------------------------
 * 
 * 
 * 
 * 
 */