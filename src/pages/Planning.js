import React from 'react'

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


/**
 * Composant de vue PlanningView
 * C'est le composant page qui est appele par le ReactRouter pour l'url /planning
 * @returns 
 */
const PlanningView = () => {


    const userConnected = AuthService.handleConnection()
    const navigate = useNavigate()
    /**
     * Hooks d'etat
     */
    const [data, setData] = React.useState([])



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
     * FONCTIONS
     * - fetchData est une fonction asynchrone qui permet via le service <Nom_du_service> dans le dossier service d'appeler une fonction qui requete le serveur et recupere les donnees
     * - 
     */
    const fetchData = async () => await CalendarService.index().then(res => setData(res));

    // HOOK D'EFFET
    /* 
        Le hook d'effet permet l'execution d'effets de bord dans les fonctions composants
    */
    React.useEffect(() => {
        /**
         * Si userConnected est vide et la variable navigate existe
         */
        if(!userConnected && navigate) {
            navigate('/login')
        }
        else {
            fetchData()
        }
    }, [userConnected, navigate])


    /**
     * RENDERING
     * C'est la partie qui renvoie du HTML lorsque le composant est cree
     * condition : si userConnected n'est pas vide
     */
    if(userConnected)
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
                            initialView="dayGridMonth"
                            weekends={false}        
                            events={events}
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
    else return null
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