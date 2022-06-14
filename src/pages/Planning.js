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
import dayGridPlugin from '@fullcalendar/daygrid'

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

 
    // const fetchData = async () => await CalendarService.index().then(res => setData(res));


    const id = () => {
        
    }
    

    React.useEffect(() => {
        axios.get(`http://192.168.43.181:5000/api/Appointment/4`).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
        // fetchData();
    }, []);

    const events =  [
        {
          title: 'BCH237',
          start: '2022-05-18T10:30:00',
          end: '2022-05-18T11:30:00',
          extendedProps: {
            department: 'BioChemistry'
          },
          description: 'Lecture'
        }
        // more events ...
      ]
    /**
     * RENDERING
     * C'est la partie qui renvoie du HTML lorsque le composant est cree
     * condition : si userConnected n'est pas vide
     */
    return (
        <Container fluid>
            <Row>
                <Col>
                    {
                        /**
                         * Composant FullCalendar de la librairie FullCalendar
                         * 
                         * 
                         */

                    }
                    <Container className="p-3">
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridWeek"
                            weekends={true}        
                            events={data}
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


/**
 * export default
 * C'est ce qui nous permet d'appeler PlanningView dans d'autres fichiers
 */
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