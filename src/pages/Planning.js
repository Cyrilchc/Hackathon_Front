import React from 'react'
import axios from 'axios'
/**
 * Bootstrap components
 */
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap'
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

 
    const fetchData = async () => await CalendarService.index().then(res => setData(res));


    React.useEffect(() => {
        axios.get(`http://172.19.2.11:5000/api/Appointment/GetGroupAppointment/1`).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
        // fetchData();
    }, []);



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
                                    <Card>
                                        <Card.Body>
                                            Push
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            Push
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            Push
                                        </Card.Body>
                                    </Card>
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