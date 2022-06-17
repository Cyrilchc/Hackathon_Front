import axios from "axios";

// Ajouter a la variable apiUrl l'adresse de l'API
const apiUrl = "http://172.19.2.11:5000/api";
//const apiUrl = "http://172.19.2.10:5000/api";


const baseApi = axios.create({
    baseURL: apiUrl,
    headers : {
        'Content-Type': 'application/json'
    }
});



let API = () => {
     const token = localStorage.getItem("token");
     if (token) {
        baseApi.defaults.headers.common["Authorization"] = token;
     }
     return baseApi
};

export default API;
