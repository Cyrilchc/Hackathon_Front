import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import TchatCard from './TchatCard';


const Listes = props => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        let url;
        switch (props.affichage) {
            case "Anciens":
                url = "http://172.19.2.11:5000/api/Chat/GetOldChats";
                break;
            case "Nouveaux":
                url = "http://172.19.2.11:5000/api/Chat/GetUpcomingChats";
                break;
            default:
                url = "http://172.19.2.11:5000/api/Chat/GetCurrentChats";
                break;
        }


        axios.get(url).then(res => {
            setData(res.data);
            console.log(res.data);
        });


    }, [])
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <Link to="/tchat"><button className="btn btn-primary" type="submit">Retour</button></Link>
                <div className="col"></div>
                <div className="col text-center">
                    <h1>{props.affichage === "En cours" ? "Tchats en cours" : `${props.affichage} tchats`}</h1>
                    <Card style={{ width: "80rem", overflowY: 'auto', overflowX: 'hidden' }}>
                        <Card.Body style={{ display: "flex", flexWrap:"wrap" }}>
                            {data?.map((element) => {
                                return (
                                    <TchatCard element={element} />
                                )
                            }
                            )}
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