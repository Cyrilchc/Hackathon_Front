import axios from "axios";

// Ajouter a la variable apiUrl l'adresse de l'API
const apiUrl = "http://172.19.2.11:5000/api/";

const baseUrl = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
});

const API = async () => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //     baseUrl.defaults.headers.common["Authorization"] = token;
    // }
};

export default API;
