import moment from 'moment'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import 'moment/locale/fr'
import { Link } from 'react-router-dom'

const TchatCard = (props) => {
    moment.locale('fr');

    let navigate = useNavigate();

    const onCardClick = (id) => {
        navigate(`/tchat/${id}`);
    }
    // console.log(props.element.id);
    return (
        <Card
            style={{ width: '18rem', cursor: 'pointer' }}
            className="mb-2"
            onClick={() => onCardClick(props.element.id)}
        >

            <Card.Header>
                <div className="d-flex">
                    {props.element?.id}
                    {/* <div className="container-fluid d-flex justify-content-end">
                        <Link to="/tchat/update/{id}">
                            <button class="btn btn-primary" type="submit">Modifier</button>
                        </Link>
                    </div> */}
                </div>
            </Card.Header>

            <Card.Body>
                <Card.Title>{props.element?.name}</Card.Title>
                <Card.Subtitle>Démarre : {moment(props.element?.startDateTime).calendar()}</Card.Subtitle>
                <Card.Subtitle>Termine : {moment(props.element?.startEndTime).calendar()}</Card.Subtitle>
                <Card.Text>{props.element?.attendees ? props.element?.attendees.length : 0} participants</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TchatCard