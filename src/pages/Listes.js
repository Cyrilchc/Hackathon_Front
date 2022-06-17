import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Listes = props => {
    const ancienTchats = [
        {
            cours: "Anglais",
            professeur: "Mr. Smith",
            dates: "Lundi",
            heures: "8h-10h",
            nbEtudiants: "10"
        },
        {
            cours: "Mathématiques",
            professeur: "Mr. Harnist",
            dates: "Mardi",
            heures: "8h-10h",
            nbEtudiants: "20"
        },
        {
            cours: "Histoire",
            professeur: "Mrs. Doe",
            dates: "Mercredi",
            heures: "13h-16h",
            nbEtudiants: "30"
        }
    ]
    const nouveauxCours = [
        {
            cours: "Géographie",
            professeur: "Merle",
            dates: "Jeudi",
            heures: "16h-18h",
            nbEtudiants: "50"

        }
    ]
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <Link to="/tchat/accueil"><button class="btn btn-primary" type="submit">Retour</button></Link>
                <div className="col"></div>
                <div className="col text-center">
                    <h1>Liste des tchats</h1>
                    <Card style={{ width: "80rem", height: "80vh", overflowY: 'auto', overflowX: 'hidden'}}>
                        <Card.Body>
                            <Card.Title>{props.affichage} tchats</Card.Title>
                            <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                {props.affichage === "Anciens" ? ancienTchats.map((object) => (
                                    <Card style={{ width: '18rem', className:"mb-2"}}
                                    >
                                        <Card.Header>{object.cours}</Card.Header>

                                        <Card.Body>
                                            <Card.Title>{object.cours}</Card.Title>
                                            <Card.Subtitle>{object.professeur}</Card.Subtitle>
                                            <Card.Subtitle>{object.dates},{object.heures}</Card.Subtitle>
                                            <Card.Text>{object.nbEtudiants} participants</Card.Text>
                                        </Card.Body>
                                    </Card>
                                )) : nouveauxCours.map((object) => (
                                    <Card style={{ width: '18rem', className:"mb-2"}}>
                                        <Card.Header>{object.cours}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{object.cours}</Card.Title>
                                            <Card.Subtitle>{object.professeur}</Card.Subtitle>
                                            <Card.Subtitle>{object.dates},{object.heures}</Card.Subtitle>
                                            <Card.Text>{object.nbEtudiants} participants</Card.Text>
                                        </Card.Body>
                                    </Card>
                            ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

Listes.propTypes = {}

export default Listes