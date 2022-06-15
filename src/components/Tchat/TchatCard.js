import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const TchatCard = (props) => {
    let navigate = useNavigate();

    const onCardClick = (id) => {
        navigate(`/tchat/${id}`);
    }

    return (
        <Card
            style={{ width: '18rem', cursor: 'pointer' }}
            className="mb-2"
            onClick={() => onCardClick(props.content.coursId)}
        >
            <Card.Header>{props.content.cours}</Card.Header>

            <Card.Body>
                <Card.Title>{props.content.cours}</Card.Title>
                <Card.Subtitle>{props.content.professeur}</Card.Subtitle>
                <Card.Subtitle>{props.content.dates},{props.content.heures}</Card.Subtitle>
                <Card.Text>{props.content.nbEtudiants} participants</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TchatCard