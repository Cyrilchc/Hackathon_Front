import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../../App.css'
// import axios from 'axios';

const TchatAccueil = props => {
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/Chat/')
    //     console.log(axios.get('http://localhost:5000/api/Chat/'))
    // }, [])
    const ancienCours = [
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
    const coursActuels = [
        {
            cours: "Philosophie",
            professeur: "Dodane",
            dates: "Mardi",
            heures: "15h-16h30",
            nbEtudiants: "70"
        }
    ]
    const futurCours = [
        {
            cours: "Géographie",
            professeur: "Merle",
            dates: "Jeudi",
            heures: "16h-18h",
            nbEtudiants: "50"

        }
    ]
    let personne = "";
    if (props.type == "teacher") {
        personne = "Professeur"
    } else {
        personne = "Etudiant"
    }
    return (
        <div className="container-fluid">
            <h1 className="d-flex justify-content-center">Accueil {personne}</h1>
            <div className="row">
                <div className="col">
                    <Card >
                        <Card.Body>
                            <Card.Title>Liste de l'historique des anciens tchats</Card.Title>
                            <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                {ancienCours.map((object) => (
                                    <Card
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >
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
                            <Link to="/tchat/liste/old"><button class="btn btn-primary" type="submit">Anciens Tchats</button></Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card >
                        <Card.Body>
                            <Card.Title>Liste des tchats en cours</Card.Title>
                            <Card.Text>
                                <Card.Body>
                                    <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                        {coursActuels.map((object) => (
                                            <Card
                                                style={{ width: '18rem' }}
                                                className="mb-2"
                                            >
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
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Body>
                            <Card.Title>Liste des prochains tchats</Card.Title>
                            <Card.Text>
                                <Card.Body>
                                    <Card.Text style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                        {futurCours.map((object) => (
                                            <Card
                                                style={{ width: '18rem' }}
                                                className="mb-2"
                                            >
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
                                <Link to="/tchat/liste/new"><button class="btn btn-primary" type="submit">Nouveaux cours</button></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {props.type == "teacher" &&
                        <Card >
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