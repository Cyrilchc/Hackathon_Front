import axios from "axios";

// Ajouter a la variable apiUrl l'adresse de l'API
const apiUrl = "http://192.168.43.181:5000/api/"


const baseUrl = axios.create({
    baseURL : apiUrl,
    withCredentials : true
})

const API = () => {
    let token = localStorage.getItem("token")
    if(token) {
        baseUrl.defaults.headers.common["Authorization"] = token
        
    }
}

export default API