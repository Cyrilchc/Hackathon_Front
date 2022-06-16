import axios from 'axios'
import API from '../config/axios'   

const URL = "/Token"

export class AuthService {
    static async login(_username, _password) {
        //console.log(_username)
        const config = {
            username: _username,
            password: _password,
        }
     
       return API()
            .post(`${URL}`, config)
            .then(response => response.status === 200 ? this.getUserAttributes(response.data) : null) 
    }

    static logout() {
        return API()
            .post(`${URL}/logout`)
            .then((response => response.status === 200 ? this.deleteUserAttributes() : null))
    }

    static deleteUserAttributes() {
        return localStorage.clear()
    }

    static getUserAttributes(_data) {
        localStorage.setItem("token", JSON.parse(_data.token))
        localStorage.setItem("user", JSON.parse(_data.user))
    }

    static handleConnection() {
        const user = localStorage.getItem('user')
        if (user) {
            return true
        }
        else return true
    }
}