import API from "../config/axios";
import axios from "axios";
const URL = "/Student";

export class ClassService {

  
  static index(id) {
    return axios
      .get(`http://172.19.2.11:5000/api/Student/GetStudent/${id}`)
      .then((response) => response.data)
      .catch((error) => error.message);
  }
  static store() {}
  static destroy() {}
}