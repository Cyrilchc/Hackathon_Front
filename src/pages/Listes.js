import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import TchatCard from '../components/Tchat/TchatCard';

const Listes = props => {
    const tchats = [
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
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <Link to="/tchat"><button class="btn btn-primary" type="submit">Retour</button></Link>
                <div className="col"></div>
                <div className="col text-center">
                    <h1>{props.affichage === "En cours" ? "Tchats en cours" : `${props.affichage} tchats`}</h1>
                    <Card style={{ width: "80rem", height: "80vh", overflowY: 'auto', overflowX: 'hidden'}}>
                        <Card.Body>
                            <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                {tchats.map((object) => (
                                    <TchatCard content={object} />
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