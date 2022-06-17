import API from "../config/axios";
import axios from "axios";
const URL = "/Student";

export class ClassService {

  
  static index(id) {
    return API()
      .get(`${URL}/GetStudents`)
      .then((response) => response.data)
      .catch((error) => console.error(error.message));
  }

  static find(id) {
    return API()
    .get(`${URL}/GetStudent/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error.message))
  }
  static store() {}
  static destroy() {}
}