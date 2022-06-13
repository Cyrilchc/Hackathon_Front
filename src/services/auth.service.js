import API from '../config/axios'

const URL = "/auth"

export class AuthService {

    
    static login(_username, _password) {
        const config = { 
            username : _username, 
            password : _password
        }
        return API()
        .post(`${URL}/login`, config)
        .then(response => response.status === 200 ? this.getUserAttributes(response.data) : null )
    }

    static logout() {
        return API()
        .post(`${URL}/logout`)
        .then((response => response.status === 200 ? this.deleteUserAttributes() : null ))
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
        if(user){
            return true
        }
        else return true
    }
}