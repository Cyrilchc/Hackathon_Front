import axios from "axios";

// Ajouter a la variable apiUrl l'adresse de l'API
const apiUrl = ""


const baseUrl = axios.create({
    baseURL : apiUrl,
    withCredentials : true
})

const API = () => {
    let token = localStorage.getItem("token")
    if(token) {

    }
}

export default API