import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from "../assets/lockers.jpg";
import { AuthService } from "../services/auth.service.js";

const LoginView = () => {
  /**
   * Hook d'etat React.useState
   * Il s'agit d'une fonction propre a React ou nous pouvons lies une variable a une fonction
   * <username> est lié a <setUsername> ----> ex : setUsername("Williams") => username = Williams
   */
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  /**
   * useNavigate
   * Il s'agit d'une fonction propre a react-router-dom.
   * Il faut l'associer a une variable pour l'utiliser
   * Ex : navigate('/home') retourne l'utilisateur a l'url /home
   */
  const navigate = useNavigate();

  /**
   * handleUserNameInput function
   * Cette fonction est un hook lié au hook d'Etat <setUsername> à la variable <username>
   * @param {*} _value
   * @returns setUsername(_value)
   */
  const handleUsernameInput = (_value) => setUsername(_value);

  /**
   * handlePasswordInput function
   * Cette fonction est un hook lié au hook d'Etat <setPassword> à la variable <password>
   * @param {*} _value
   * @returns
   */
  const handlePasswordInput = (_value) => setPassword(_value);
  /**
   * handleSubmitClick async function
   * On utilise la fonction login de la classe AuthService
   * then = ensuite
   * Si le resultat de la requete === 200 -> navigate("home")
   * @returns
   */
  const handleSubmitClick = async () => AuthService.login(username, password).then((res) => (res.status === 200 ? navigate("home") : null));

  /**
   * Rendering
   */
  return (
    <Container fluid className="estiam-container" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
      <Row>
        <Col/>
        <Col>
          <Container className="mt-3 p-3 shadow-lg estiam-block">
            <Container>
              <h3>Formulaire de connexion</h3>
              <hr />
              {/**
               * Formulaire
               * Composant Form de React Bootstrap
               * 2 Input = Utilisateur et Mot de passe
               */}
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Utilisateur</Form.Label>
                  {/**
                   * Form Control Utilisateur
                   * onChange (a chaque changement) => appel de la fonction handleUsernameInput
                   */}
                  <Form.Control placeholder="Utilisateur" onChange={(_event) => handleUsernameInput(_event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  {/**
                   * Form Control Mot de passe
                   * onChange (a chaque changement) => appel de la fonction handlePasswordInput
                   * type = password -> On ne peut pas voir ce qui est ecrit
                   */}
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe" onChange={(_event) => handlePasswordInput(_event.target.value)} />
<<<<<<< HEAD
                  
=======
>>>>>>> 41d75a7668023b550364eb8930b97b12ba5218c0
                  <Button className="estiam-btn">Mot de passe oublié ?</Button>
                </Form.Group>
              </Form>
              <hr />
              {/**
               * Button
               * Composant Button de React Bootstrap
               * onClick (lorsque l'on clique sur le bouton) => appel de la fonction handleSubmitClick
               */}
              <Button className="estiam-btn" onClick={() => handleSubmitClick()}>
                Se connecter
              </Button>
            </Container>
          </Container>
        </Col>
        <Col/>
      </Row>
    </Container>
  );
};

export default LoginView;
