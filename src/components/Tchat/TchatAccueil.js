import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../../App.css'
import TchatCard from "./TchatCard";
import { useEffect } from "react";
import axios from "axios";
// import axios from 'axios';

const TchatAccueil = props => {
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/Chat/')
    //     console.log(axios.get('http://localhost:5000/api/Chat/'))
    // }, [])

    let ancienCours = [];
    let coursActuels = [];
    let futurCours = [];

    return (
        <div className="container-fluid">
            <h1 className="d-flex justify-content-center">Accueil {props.type === "teacher" ? "Professeur" : "Étudiant"}</h1>
            <div className="row">
                <div className="col">
                    <Card >
                        <Card.Body>
                            <Card.Title>Anciens tchats</Card.Title>
                            <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                {ancienCours.map((object) => (
                                    <TchatCard content={object} />
                                ))}
                            </Card.Text>
                            <Link to="/tchat/liste/old"><button class="btn btn-primary" type="submit">Anciens tchats</button></Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="mb-3" >
                        <Card.Body>
                            <Card.Title>Tchats en cours</Card.Title>
                            <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                {coursActuels.map((object) => (
                                    <TchatCard content={object} />
                                ))}
                            </Card.Text>
                            <Link to="/tchat/liste/current"><button class="btn btn-primary" type="submit">Tchats en cours</button></Link>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3" >
                        <Card.Body>
                            <Card.Title>Prochains tchats</Card.Title>
                            <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                {futurCours.map((object) => (
                                    <TchatCard content={object} />
                                ))}
                            </Card.Text>
                            <Link to="/tchat/liste/new"><button class="btn btn-primary" type="submit">Prochains tchats</button></Link>
                        </Card.Body>
                    </Card>
                    {props.type === "teacher" &&
                        <Card className="mb-3" >
                            <Card.Body>
                                <Card.Title>Créer un nouveau tchat</Card.Title>
                                <Link to="create"><button class="btn btn-primary" type="submit">Créer</button></Link>
                            </Card.Body>
                        </Card>
                    }
                </div>
            </div>
        </div>
    )
}

TchatAccueil.propTypes = {}

export default TchatAccueil